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

class PMFormController extends POSFController
{
	/**
	 * Display information
	 *
	 */
	public function display($cachable = false, array $urlparams = array())
	{
		$document = JFactory::getDocument();
		$config   = PMFormHelper::getConfig();
		$styleUrl = JURI::base(true) . '/components/com_pmform/assets/css/style.css';
		$document->addStylesheet($styleUrl, 'text/css', null, null);
		if ($config->load_jquery !== '0')
		{
			PMFormHelper::loadJQuery();
		}
		if ($config->load_twitter_bootstrap !== '0')
		{
			PMFormHelper::loadBootstrap(false);
		}
		JHtml::_('script', PMFormHelper::getSiteUrl() . '/components/com_pmform/assets/js/noconflict.js', false, false);
		//Clear the donation form data on donaton complete or cancel
		$viewName = $this->input->get('view', $this->defaultView, 'string');
		if ($viewName == 'complete' || $viewName == 'cancel')
		{
			$this->app->setUserState('com_pmform.formdata', null);
		}

		parent::display($cachable, $urlparams);
	}

	/**
	 * Process Payment
	 *
	 */
	public function process_payment()
	{
		$this->csrfProtection();
		$config = PMFormHelper::getConfig();
		JFactory::getApplication()->setUserState('com_pmform.formdata', serialize($this->input->getData()));
		// Check captcha if captcha is enabled
		if ($config->enable_captcha)
		{
			$session = JFactory::getSession();
			if ($config->show_confirmation_step)
			{
				$res = $session->set('pf_captcha_valid', 0);
			}
			else
			{
				$captchaPlugin = $this->app->getParams()->get('captcha', JFactory::getConfig()->get('captcha'));
				if (!$captchaPlugin)
				{
					// Hardcode to recaptcha, reduce support request
					$captchaPlugin = 'recaptcha';
				}
				$plugin = JPluginHelper::getPlugin('captcha', $captchaPlugin);
				if ($plugin)
				{
					$res = JCaptcha::getInstance($captchaPlugin)->checkAnswer($this->input->post->get('recaptcha_response_field', '', 'string'));
				}
				else
				{
					$res = true;
				}
			}
			if (!$res)
			{
				$session->set('pf_captcha_invalid', 1);
				$this->app->enqueueMessage(JText::_('PF_INVALID_CAPTCHA_ENTERED'), 'error');

				// Redirect back to the form
				$formPageUrl = $this->input->get('form_page_url', '', 'none');
				$this->app->redirect(base64_decode($formPageUrl));

				return false;
			}
			else
			{
				$session->clear('pf_captcha_invalid');
				$session->clear('pf_captcha_valid');
			}
		}
		$model = $this->getModel('Payment');
		$model->processPayment($this->input);
	}

	/**
	 * Display payment confirmation page
	 *
	 * @return bool
	 */
	public function payment_confirmation()
	{
		$this->csrfProtection();
		$config = PMFormHelper::getConfig();
		JFactory::getApplication()->setUserState('com_pmform.formdata', serialize($this->input->getData()));
		// Check captcha if captcha is enabled
		if ($config->enable_captcha)
		{
			$session       = JFactory::getSession();
			$captchaPlugin = $this->app->getParams()->get('captcha', JFactory::getConfig()->get('captcha'));
			if (!$captchaPlugin)
			{
				// Hardcode to recaptcha, reduce support request
				$captchaPlugin = 'recaptcha';
			}
			$plugin = JPluginHelper::getPlugin('captcha', $captchaPlugin);
			if ($plugin)
			{
				$res = JCaptcha::getInstance($captchaPlugin)->checkAnswer($this->input->post->get('recaptcha_response_field', '', 'string'));
			}
			else
			{
				$res = true;
			}
			if (!$res)
			{
				$session->set('pf_captcha_invalid', 1);
				$this->app->enqueueMessage(JText::_('PF_INVALID_CAPTCHA_ENTERED'), 'error');
				$formPageUrl = $this->input->get('form_page_url', '', 'none');
				$this->app->redirect(base64_decode($formPageUrl));

				return false;
			}
			else
			{
				$session->clear('pf_captcha_invalid');
				$session->set('pf_captcha_valid', 1);
			}
		}

		// Captcha is valid or not activated, we will display the payment confirmation page
		$this->input->set('view', 'confirmation');
		$this->input->set('layout', 'default');
		$this->display();
	}

	/**
	 * Payment Confirmation
	 *
	 */
	public function payment_confirm()
	{
		$paymentMethod = $this->input->get('payment_method', '', 'none');
		$method        = os_payments::getPaymentMethod($paymentMethod);
		if ($method)
		{
			$method->verifyPayment();
		}
	}

	/**
	 * Processing downloading a file
	 *
	 */
	public function download_file()
	{
		$filePath = PMFormHelper::getConfigValue('path_upload');
		$fileName = $this->input->get('file_name', '', 'none');
		if (file_exists(JPATH_ROOT . '/' . $filePath . '/' . $fileName))
		{
			while (@ob_end_clean()) ;
			PMFormHelper::processDownload(JPATH_ROOT . '/' . $filePath . '/' . $fileName, $fileName);
			exit();
		}
		else
		{
			$this->app->redirect('index.php?option=com_pmform&Itemid=' . $this->input->getInt('Itemid', 0), JText::_('PF_FILE_NOT_EXIST'));
		}
	}

	/**
	 * Get depend fields status to show/hide custom fields based on selected options
	 */
	public function get_depend_fields_status()
	{
		$db          = JFactory::getDbo();
		$fieldId     = $this->input->get('field_id', 'int');
		$fieldValues = $this->input->get('field_values', '', 'none');
		$fieldValues = explode(',', $fieldValues);
		//Get list of depend fields
		$query = $db->getQuery(true);
		$query->select('*')
			->from('#__pf_fields')
			->where('depend_on_field_id=' . $fieldId);
		$db->setQuery($query);
		$rows       = $db->loadObjectList();
		$showFields = array();
		$hideFields = array();
		foreach ($rows as $row)
		{
			$dependOnOptions = explode(",", $row->depend_on_options);
			if (count(array_intersect($fieldValues, $dependOnOptions)))
			{
				$showFields[] = 'field_' . $row->name;
			}
			else
			{
				$hideFields[] = 'field_' . $row->name;
			}
		}
		echo json_encode(array('show_fields' => implode(',', $showFields), 'hide_fields' => implode(',', $hideFields)));
		$this->app->close();
	}

	/**
	 * Calculate registration fee, then update the information on registration form
	 */
	public function calculate_form_fee()
	{
		$config        = PMFormHelper::getConfig();
		$db            = JFactory::getDbo();
		$query         = $db->getQuery(true);
		$input         = $this->input;
		$paymentMethod = $input->getString('payment_method', '');
		$currentDate   = JHtml::_('date', 'now', 'Y-m-d');
		$query->select('*, DATEDIFF("' . $currentDate . '", late_payment_date) AS number_days')
			->from('#__pf_forms')
			->where('id=' . $input->getInt('form_id', 0));
		$db->setQuery($query);
		$rowForm   = $db->loadObject();
		$rowFields = PMFormHelper::getFormFields($input->getInt('form_id', 0));
		$form      = new POSFForm($rowFields);
		$form->bind($input->getData(), false);
		$fees                               = PMFormHelper::calculateFormFee($rowForm, $form, $input, $paymentMethod);
		$response['total_amount']           = PMFormHelper::formatAmount($fees['total_amount'], $config);
		$response['discount_amount']        = PMFormHelper::formatAmount($fees['discount_amount'], $config);
		$response['gross_amount']           = PMFormHelper::formatAmount($fees['gross_amount'], $config);
		$response['payment_processing_fee'] = PMFormHelper::formatAmount($fees['payment_processing_fee'], $config);
		$response['coupon_valid']           = $fees['coupon_valid'];
		echo json_encode($response);
		$this->app->close();
	}

	/**
	 * Validate username which users entered on order form
	 *
	 */
	public function validate_username()
	{
		$db         = JFactory::getDbo();
		$query      = $db->getQuery(true);
		$username   = $this->input->get('fieldValue', '', 'string');
		$validateId = $this->input->get('fieldId', '', 'string');
		$query->select('COUNT(*)')
			->from('#__users')
			->where('username="' . $username . '"');
		$db->setQuery($query);
		$total        = $db->loadResult();
		$arrayToJs    = array();
		$arrayToJs[0] = $validateId;
		if ($total)
		{
			$arrayToJs[1] = false;
		}
		else
		{
			$arrayToJs[1] = true;
		}
		echo json_encode($arrayToJs);
		$this->app->close();
	}

	/**
	 * Validate email which users entered on order form to make sure it is valid
	 */
	public function validate_email()
	{
		$db         = JFactory::getDbo();
		$query      = $db->getQuery(true);
		$email      = $this->input->get('fieldValue', '', 'string');
		$validateId = $this->input->get('fieldId', '', 'string');
		$query->select('COUNT(*)')
			->from('#__users')
			->where('email="' . $email . '"');
		$db->setQuery($query);
		$total        = $db->loadResult();
		$arrayToJs    = array();
		$arrayToJs[0] = $validateId;
		if (!$total)
		{
			$arrayToJs[1] = true;
		}
		else
		{
			$arrayToJs[1] = false;
		}
		echo json_encode($arrayToJs);
		$this->app->close();
	}

	/**
	 * Get list of states for the selected country, using in AJAX request
	 */
	public function get_states()
	{
		$countryName = $this->input->get('country_name', '', 'string');
		$stateName   = $this->input->get('state_name', '', 'string');
		if (!$countryName)
		{
			$countryName = PMFormController::getConfigValue('default_country');
		}
		$db    = JFactory::getDbo();
		$query = $db->getQuery(true);
		$query->clear();
		$query->select('required')
			->from('#__pf_fields')
			->where('name=' . $db->quote('state'));
		$db->setQuery($query);
		$required = $db->loadResult();
		($required) ? $class = 'validate[required]' : $class = '';

		$query->clear();
		$query->select('country_id')
			->from('#__pf_countries')
			->where('name=' . $db->quote($countryName));
		$db->setQuery($query);
		$countryId = $db->loadResult();
		//get state
		$query->clear();
		$query->select('state_name AS value, state_name AS text')
			->from('#__pf_states')
			->where('country_id=' . (int) $countryId);;
		$db->setQuery($query);
		$states  = $db->loadObjectList();
		$options = array();
		if (count($states))
		{
			$options[] = JHtml::_('select.option', '', JText::_('PF_SELECT_STATE'));
			$options   = array_merge($options, $states);
		}
		else
		{
			$options[] = JHtml::_('select.option', 'N/A', JText::_('PF_NA'));
		}
		echo JHtml::_('select.genericlist', $options, 'state', ' class="input-large ' . $class . '" id="state" ', 'value', 'text',
			$stateName);

		$this->app->close();
	}

	/**
	 * Download invoice ò a payment record
	 *
	 * @throws Exception
	 */
	public function download_invoice()
	{
		$user = JFactory::getUser();
		if (!$user->id)
		{
			JFactory::getApplication()->redirect('index.php', JText::_('You do not have permission to download the invoice'));
		}
		$id = JRequest::getInt('id');
		JTable::addIncludePath(JPATH_ROOT . '/administrator/components/com_pmform/table');
		$row = JTable::getInstance('pmform', 'Payment');
		$row->load($id);
		if (!$row->id || ($row->user_id != $user->id))
		{
			JFactory::getApplication()->redirect('index.php', JText::_('You do not have permission to download the invoice'));
		}
		PMFormHelper::downloadInvoice($id);
	}
}