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

class PMFormViewFormHtml extends POSFViewHtml
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
		$rowFields      = PMFormHelper::getFormFields($formId);
		$captchaInvalid = JFactory::getSession()->get('pf_captcha_invalid');
		if ($captchaInvalid)
		{
			$data = $input->post->getData();
		}
		else
		{
			// Try to get data from session
			$data = JFactory::getApplication()->getUserState('com_pmform.formdata', null);
			if ($data)
			{
				$data = unserialize($data);
			}
			else
			{
				$data = PMFormHelper::getFormData($rowFields, $userId, $config);
				if (!count($data))
				{
					$data = $input->getData();
				}
			}
		}
		if ($userId && !isset($data['first_name']))
		{
			//Load the name from Joomla user data
			$name = $user->name;
			if ($name)
			{
				$pos = strpos($name, ' ');
				if ($pos !== false)
				{
					$data['first_name'] = substr($name, 0, $pos);
					$data['last_name']  = substr($name, $pos + 1);
				}
				else
				{
					$data['first_name'] = $name;
					$data['last_name']  = '';
				}
			}
		}
		if ($userId && !isset($data['email']))
		{
			$data['email'] = $user->email;
		}
		if (!isset($data['country']) || !$data['country'])
		{
			$data['country'] = $config->default_country;
		}
		//Get data
		$form = new POSFForm($rowFields);
		if ($captchaInvalid)
		{
			$useDefault = false;
		}
		else
		{
			$useDefault = true;
		}
		$form->bind($data, $useDefault);
		$form->prepareFormField();
		$form->buildFieldsDependency();


		$options            = array();
		$options[]          = JHtml::_('select.option', 'Visa', 'Visa');
		$options[]          = JHtml::_('select.option', 'MasterCard', 'MasterCard');
		$options[]          = JHtml::_('select.option', 'Discover', 'Discover');
		$options[]          = JHtml::_('select.option', 'Amex', 'American Express');
		$lists['card_type'] = JHtml::_('select.genericlist', $options, 'card_type', ' class="inputbox" ', 'value', 'text');
		//Expiration month, expiration year
		$lists['exp_month'] = JHtml::_('select.integerlist', 1, 12, 1, 'exp_month', ' class="input-small" ', $input->getInt('exp_month', date('m')), '%02d');
		$currentYear        = date('Y');
		$lists['exp_year']  = JHtml::_('select.integerlist', $currentYear, $currentYear + 10, 1, 'exp_year', 'class="input-small"', $input->getInt('exp_year', date('Y')));

		//iDeal Mollie support
		$idealEnabled = PMFormHelper::isPaymentMethodEnabled('os_ideal');
		if ($idealEnabled)
		{
			$bankLists = PMFormHelper::getBankLists();
			$options   = array();
			foreach ($bankLists as $bankId => $bankName)
			{
				$options[] = JHtml::_('select.option', $bankId, $bankName);
			}
			$lists['bank_id'] = JHtml::_('select.genericlist', $options, 'bank_id', ' class="inputbox" ', 'value', 'text', $input->getInt('bank_id', 0));
		}

		//Echeck support
		if (PMFormHelper::isPaymentMethodEnabled('os_echeck'))
		{
			$options                   = array();
			$options[]                 = JHtml::_('select.option', 'CHECKING', JText::_('PF_BANK_TYPE_CHECKING'));
			$options[]                 = JHtml::_('select.option', 'BUSINESSCHECKING', JText::_('PF_BANK_TYPE_BUSINESSCHECKING'));
			$options[]                 = JHtml::_('select.option', 'SAVINGS', JText::_('PF_BANK_TYPE_SAVINGS'));
			$lists['x_bank_acct_type'] = JHtml::_('select.genericlist', $options, 'x_bank_acct_type', ' class="inputbox" ', 'value', 'text', $input->get('x_bank_acct_type', '', 'none'));
		}

		if ($rowForm->payment_methods && strpos('0', $rowForm->payment_methods) === false)
		{
			$methods       = os_payments::getPaymentMethods($rowForm->payment_methods);
			$paymentMethod = $input->getString('payment_method', os_payments::getDefaultPaymentMethod($rowForm->payment_methods));
		}
		else
		{
			$methods       = os_payments::getPaymentMethods();
			$paymentMethod = $input->getString('payment_method', os_payments::getDefaultPaymentMethod());
		}
		$method = os_payments::getPaymentMethod($paymentMethod);
		$fees   = PMFormHelper::calculateFormFee($rowForm, $form, $input, $paymentMethod);

		if (strlen($rowForm->form_msg))
		{
			$config->donation_form_msg = $rowForm->form_msg;
		}
		if ($rowForm->form_layout && file_exists(JPATH_ROOT . '/components/com_pmform/view/form/tmpl/' . $rowForm->form_layout . '.php'))
		{
			$this->setLayout($rowForm->form_layout);
		}

		// Captcha integration
		$showCaptcha = 0;
		if ($config->enable_captcha)
		{
			$captchaPlugin = JFactory::getApplication()->getParams()->get('captcha', JFactory::getConfig()->get('captcha'));
			if(!$captchaPlugin)
			{
				// Hardcode to recaptcha, reduce support request
				$captchaPlugin = 'recaptcha';
			}
			$plugin = JPluginHelper::getPlugin('captcha', $captchaPlugin);
			if ($plugin)
			{
				$showCaptcha   = 1;
				$this->captcha = JCaptcha::getInstance($captchaPlugin)->display('dynamic_recaptcha_1', 'dynamic_recaptcha_1', 'required');
			}
			else
			{
				JFactory::getApplication()->enqueueMessage(JText::_('PF_CAPTCHA_NOT_ACTIVATED_IN_YOUR_SITE'), 'error');
			}
		}

		// Show payment fee
		$showPaymentFee = false;
		foreach ($methods as $method)
		{
			if ($method->paymentFee)
			{
				$showPaymentFee = true;
				break;
			}
		}

		// Assign these parameters
		$this->form                 = $form;
		$this->userId               = $userId;
		$this->paymentMethod        = $paymentMethod;
		$this->lists                = $lists;
		$this->config               = $config;
		$this->methods              = $methods;
		$this->method               = $method;
		$this->idealEnabled         = $idealEnabled;
		$this->captchaInvalid       = $captchaInvalid;
		$this->showCaptcha          = $showCaptcha;
		$this->formPageUrl          = base64_encode(JUri::getInstance()->toString());
		$this->rowForm              = $rowForm;
		$this->totalAmount          = $fees['total_amount'];
		$this->discountAmount       = $fees['discount_amount'];
		$this->grossAmount          = $fees['gross_amount'];
		$this->paymentProcessingFee = $fees['payment_processing_fee'];
		$this->showPaymentFee       = $showPaymentFee;

		parent::display();
	}
}