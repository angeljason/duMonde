<?php
/**
 * @version        4.2
 * @package        Joomla
 * @subpackage     Payment Form
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2010 - 2015 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */

// Check to ensure this file is included in Joomla!
defined('_JEXEC') or die;

class PMFormViewConfirmationHtml extends POSFViewHtml
{
	/**
	 * Tell the controller that we don't need a model, so no need to create it
	 *
	 * @var bool
	 */
	public $hasModel = false;

	/**
	 * Display the form
	 */

	function display()
	{
		$user   = JFactory::getUser();
		$input  = $this->input;
		$db     = JFactory::getDbo();
		$query  = $db->getQuery(true);
		$config = PMFormHelper::getConfig();
		$userId = $user->get('id');
		$formId = $input->getInt('form_id', 0);
		if (!$formId)
		{
			JFactory::getApplication()->redirect('index.php', JText::_('PMF_INVALID_FORM'));
		}
		$currentDate = JHtml::_('date', 'now', 'Y-m-d');
		$query->select('*, DATEDIFF("' . $currentDate . '", late_payment_date) AS number_days')
			->from('#__pf_forms')
			->where('id=' . $formId);
		$db->setQuery($query);
		$rowForm = $db->loadObject();
		if (!$rowForm || $rowForm->published == 0)
		{
			JFactory::getApplication()->redirect('index.php', JText::_('PMF_INVALID_FORM'));
		}
		$rowFields = PMFormHelper::getFormFields($formId);
		$data      = $input->post->getData();

		$uploadFolder = $config->path_upload;
		if (!$uploadFolder)
		{
			$uploadFolder = 'images/com_pmform';
		}
		$pathUpload = JPATH_ROOT . '/' . $uploadFolder;
		if (!JFolder::exists($pathUpload))
		{
			JFolder::create($pathUpload);
		}
		$allowedExtensions = $config->allowed_extensions;
		if (!$allowedExtensions)
		{
			$allowedExtensions = 'doc, docx, ppt, pptx, pdf, zip, rar, jpg, jepg, png, zipx';
		}
		$allowedExtensions = explode(',', $allowedExtensions);
		$allowedExtensions = array_map('trim', $allowedExtensions);

		// Process field upload for file custom field types
		foreach ($rowFields as $rowField)
		{
			if ($rowField->fieldtype == 'File')
			{
				$name = $rowField->name;
				// If there are field, we need to upload the file to server and save it !
				if (isset($_FILES[$name]))
				{
					if ($_FILES[$name]['name'] != '')
					{
						$fileName          = $_FILES[$name]['name'];
						$fileExt           = JFile::getExt($fileName);
						if (in_array(strtolower($fileExt), $allowedExtensions))
						{
							$fileName = JFile::makeSafe($fileName);
							if (JFile::exists($pathUpload . '/' . $fileName))
							{
								$targetFileName = time() . '_' . $fileName;
							}
							else
							{
								$targetFileName = $fileName;
							}
							JFile::upload($_FILES[$name]['tmp_name'], $pathUpload . '/' . $targetFileName);
							$data[$name] = $targetFileName;
						}
					}
				}
			}
		}

		//Get data
		$form = new POSFForm($rowFields);
		$form->bind($data, false);
		$form->buildFieldsDependency();


		$fields = $form->getFields();
		foreach ($fields as $field)
		{
			if (!$field->visible)
			{
				unset($fields[$field->name]);
			}
		}
		$form->setFields($fields);
		if ($rowForm->payment_methods && strpos('0', $rowForm->payment_methods) === false)
		{
			$paymentMethod = $input->getString('payment_method', os_payments::getDefaultPaymentMethod($rowForm->payment_methods));
		}
		else
		{
			$paymentMethod = $input->getString('payment_method', os_payments::getDefaultPaymentMethod());
		}

		if ($rowForm->confirmation_msg)
		{
			$config->confirmation_message = $rowForm->confirmation_msg;
		}

		$method = os_payments::getPaymentMethod($paymentMethod);
		$fees   = PMFormHelper::calculateFormFee($rowForm, $form, $input, $paymentMethod);
		$hiddenInput = $form->renderHidden();
		if (PMFormHelper::isEnterAmount($rowFields) && $fees['gross_amount'] == $fees['total_amount'])
		{
			$form->removeField('amount');
		}

		// Payment information
		$bankId           = $input->get('bank_id', '', 'none');
		$x_card_num       = $input->get('x_card_num', '', 'none');
		$expMonth         = $input->get('exp_month', '', 'none');
		$expYear          = $input->get('exp_year', '', 'none');
		$x_card_code      = $input->get('x_card_code', '', 'none');
		$cardHolderName   = $input->get('card_holder_name', '');
		$x_bank_aba_code  = $input->get('x_bank_aba_code', '', 'none');
		$x_bank_acct_num  = $input->get('x_bank_acct_num', '', 'none');
		$x_bank_name      = $input->get('x_bank_name', '', 'none');
		$x_bank_acct_name = $input->get('x_bank_acct_name', '', 'none');
		$x_bank_acct_type = $input->get('x_bank_acct_type', '', 'none');
		$cardType         = $input->get('card_type', '', 'none');
		$x_exp_date       = str_pad($expMonth, 2, '0', STR_PAD_LEFT) . '/' . substr($expYear, 2, 2);

		$formPageUrl       = $input->get('form_page_url', '', 'none');
		$this->couponCode  = $input->getString('coupon_code', '');
		$this->form        = $form;
		$this->enterAmount = PMFormHelper::isEnterAmount($rowFields);
		// Assign these parameters
		$this->userId        = $userId;
		$this->paymentMethod = $paymentMethod;
		$this->config        = $config;
		$this->method        = $method;
		$this->formPageUrl   = $formPageUrl;
		$this->rowForm       = $rowForm;
		$this->fees          = $fees;

		$this->x_card_num     = $x_card_num;
		$this->x_card_code    = $x_card_code;
		$this->x_exp_date     = $x_exp_date;
		$this->expMonth       = $expMonth;
		$this->expYear        = $expYear;
		$this->cardHolderName = $cardHolderName;

		$this->x_bank_aba_code  = $x_bank_aba_code;
		$this->x_bank_acct_num  = $x_bank_acct_num;
		$this->x_bank_name      = $x_bank_name;
		$this->x_bank_acct_name = $x_bank_acct_name;
		$this->x_bank_acct_type = $x_bank_acct_type;
		$this->bankId           = $bankId;
		$this->cardType         = $cardType;
		$this->username         = $input->get('username', '', 'nome');
		$this->password         = $input->get('password1', '', 'nome');
		$this->hiddenInput      = $hiddenInput;

		parent::display();
	}
}