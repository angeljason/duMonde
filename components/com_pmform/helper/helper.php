<?php
/**
 * @version        4.2
 * @package        Joomla
 * @subpackage     Payment Form
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2010 - 2015 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */
defined('_JEXEC') or die;

class PMFormHelper
{
	/**
	 * Get configuration data and store in config object
	 *
	 * @return object
	 */
	public static function getConfig()
	{
		static $config;
		if (!$config)
		{
			$db     = JFactory::getDbo();
			$query  = $db->getQuery(true);
			$config = new stdClass;
			$query->select('*')
				->from('#__pf_configs');
			$db->setQuery($query);
			$rows = $db->loadObjectList();
			for ($i = 0, $n = count($rows); $i < $n; $i++)
			{
				$row          = $rows[$i];
				$key          = $row->config_key;
				$config->$key = stripslashes($row->config_value);
			}
		}

		return $config;
	}

	/**
	 * Get specify config value
	 *
	 * @param string $key
	 */
	public static function getConfigValue($key)
	{
		static $configValues;
		if (!isset($configValues[$key]))
		{
			$db    = JFactory::getDbo();
			$query = $db->getQuery(true);
			$query->select('config_value')
				->from('#__pf_configs')
				->where('config_key = ' . $db->quote($key));
			$db->setQuery($query);
			$configValues[$key] = $db->loadResult();
		}

		return $configValues[$key];
	}

	/**
	 * Save config value into database
	 *
	 * @param string $key
	 * @param string $value
	 */
	public static function saveConfigValue($key, $value)
	{
		$db    = JFactory::getDbo();
		$query = $db->getQuery(true);
		$query->update('#__pf_configs')
			->set('config_value = ' . $db->quote($value))
			->where('config_key = ' . $db->quote($key));
		$db->setQuery($query);
		$db->execute();
	}

	/**
	 *
	 * Apply some fixes for request data
	 *
	 * @return void
	 */
	public static function prepareRequestData()
	{
		//Remove cookie vars from request data
		$cookieVars = array_keys($_COOKIE);
		if (count($cookieVars))
		{
			foreach ($cookieVars as $key)
			{
				if (!isset($_POST[$key]) && !isset($_GET[$key]))
				{
					unset($_REQUEST[$key]);
				}
			}
		}
		if (isset($_REQUEST['start']) && !isset($_REQUEST['limitstart']))
		{
			$_REQUEST['limitstart'] = $_REQUEST['start'];
		}
		if (!isset($_REQUEST['limitstart']))
		{
			$_REQUEST['limitstart'] = 0;
		}
	}

	/**
	 * Get Itemid of Payment Form comoonent
	 *
	 * @return int
	 */
	public static function getItemid()
	{
		$app       = JFactory::getApplication();
		$menus     = $app->getMenu('site');
		$component = JComponentHelper::getComponent('com_pmform');
		$items     = $menus->getItems('component_id', $component->id);
		$views     = array('forms', 'form');
		foreach ($views as $view)
		{
			$viewUrl = 'index.php?option=com_pmform&view=' . $view;
			foreach ($items as $item)
			{
				if (strpos($item->link, $viewUrl) !== false)
				{
					return $item->id;
				}
			}
		}

		return 0;
	}

	/**
	 * Get URL of the site, using for Ajax request
	 */
	public static function getSiteUrl()
	{
		$uri  = JUri::getInstance();
		$base = $uri->toString(array('scheme', 'host', 'port'));
		if (strpos(php_sapi_name(), 'cgi') !== false && !ini_get('cgi.fix_pathinfo') && !empty($_SERVER['REQUEST_URI']))
		{
			$script_name = $_SERVER['PHP_SELF'];
		}
		else
		{
			$script_name = $_SERVER['SCRIPT_NAME'];
		}
		$path = rtrim(dirname($script_name), '/\\');
		if ($path)
		{
			return $base . $path . '/';
		}
		else
		{
			return $base . '/';
		}
	}

	/**
	 * Get list of fields used on the form
	 *
	 * @param $formId
	 *
	 * @return mixed
	 */
	public static function getFormFields($formId)
	{
		$db    = JFactory::getDbo();
		$query = $db->getQuery(true);
		$query->select('a.*, b.required AS required')
			->from('#__pf_fields AS a')
			->innerJoin('#__pf_form_fields AS b ON a.id = b.field_id')
			->where('b.published = 1')
			->where('b.form_id=' . (int) $formId)
			->order('b.ordering');
		$db->setQuery($query);

		return $db->loadObjectList();
	}

	/**
	 * Get payment data
	 *
	 * @param $row
	 * @param $rowFields
	 *
	 * @return array
	 */
	public static function getPaymentData($row, $rowFields)
	{
		$data  = array();
		$db    = JFactory::getDbo();
		$query = $db->getQuery(true);
		$query->select('a.name, b.field_value')
			->from('#__pf_fields AS a')
			->innerJoin('#__pf_field_value AS b ON a.id = b.field_id ')
			->where('payment_id=' . (int) $row->id);
		$db->setQuery($query);
		$fieldValues = $db->loadObjectList('name');
		foreach ($rowFields as $rowField)
		{
			if ($rowField->is_core)
			{
				$data[$rowField->name] = $row->{$rowField->name};
			}
			else
			{
				if (isset($fieldValues[$rowField->name]))
				{
					$data[$rowField->name] = $fieldValues[$rowField->name]->field_value;
				}
			}
		}

		return $data;
	}

	/**
	 * Get Form data
	 *
	 * @param $rowFields
	 * @param $userId
	 * @param $config
	 *
	 * @return array
	 */
	public static function getFormData($rowFields, $userId, $config)
	{
		$data = array();
		if ($userId)
		{
			if ($config->cb_integration == 1)
			{
				$synchronizer = new POSFSynchronizerCommunitybuilder();
				$mappings     = array();
				foreach ($rowFields as $rowField)
				{
					if ($rowField->field_mapping)
					{
						$mappings[$rowField->name] = $rowField->field_mapping;
					}
				}
				$data = $synchronizer->getData($userId, $mappings);
			}
			elseif ($config->cb_integration == 2)
			{
				$synchronizer = new POSFSynchronizerJomsocial();
				$mappings     = array();
				foreach ($rowFields as $rowField)
				{
					if ($rowField->field_mapping)
					{
						$mappings[$rowField->name] = $rowField->field_mapping;
					}
				}
				$data = $synchronizer->getData($userId, $mappings);
			}
			elseif ($config->cb_integration == 3)
			{
				$synchronizer = new POSFSynchronizerJoomla();
				$mappings     = array();
				foreach ($rowFields as $rowField)
				{
					if ($rowField->field_mapping)
					{
						$mappings[$rowField->name] = $rowField->field_mapping;
					}
				}
				$data = $synchronizer->getData($userId, $mappings);
			}
			else
			{
				$db    = JFactory::getDbo();
				$query = $db->getQuery(true);
				$query->select('*')
					->from('#__pf_payments')
					->where('user_id=' . (int) $userId)
					->order('id DESC');
				$db->setQuery($query, 0, 1);
				$row = $db->loadObject();
				if ($row)
				{
					$data = self::getPaymentData($row, $rowFields);
				}
			}
		}

		return $data;
	}


	/**
	 * Store custom fields data
	 *
	 * @param $row
	 * @param $data
	 */
	public static function storeFormData($row, $data)
	{
		$db            = JFactory::getDbo();
		$query         = $db->getQuery(true);
		$rowFieldValue = JTable::getInstance('Fieldvalue', 'PMFormTable');
		$query->delete('#__pf_field_value')->where('payment_id=' . (int) $row->id);
		$db->setQuery($query);
		$db->execute();

		$config = self::getConfig();
		$uploadFolder = $config->path_upload;
		if (!$uploadFolder)
		{
			$uploadFolder = 'images/com_pmform';
		}
		$pathUpload = JPATH_ROOT . '/'.$uploadFolder;
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

		// Date format
		$dateFormat = $config->date_field_format ? $config->date_field_format : '%Y-%m-%d';
		$dateFormat = str_replace('%', '', $dateFormat);

		$rowFields = self::getFormFields($row->form_id);
		foreach ($rowFields as $rowField)
		{
			if ($rowField->is_core)
			{
				continue;
			}

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

			if ($rowField->fieldtype == 'Date')
			{
				$fieldValue = $data[$rowField->name];
				if ($fieldValue)
				{
					// Try to convert the format
					try
					{
						$date       = DateTime::createFromFormat($dateFormat, $fieldValue);
						if ($date)
						{
							$fieldValue = $date->format('Y-m-d');
						}
						else
						{
							$fieldValue = '';
						}
					}
					catch (Exception $e)
					{
						$fieldValue = '';
					}
					$data[$rowField->name] = $fieldValue;
				}
			}

			$fieldValue                = isset($data[$rowField->name]) ? $data[$rowField->name] : null;
			$rowFieldValue->id         = 0;
			$rowFieldValue->field_id   = $rowField->id;
			$rowFieldValue->payment_id = $row->id;
			if (is_array($fieldValue))
			{
				$fieldValue = json_encode($fieldValue);
			}
			$rowFieldValue->field_value = $fieldValue;
			$rowFieldValue->store();
		}
	}

	/**
	 * Check if the payment method is enabled or not
	 *
	 * @param $paymentMethod string Name of payment method
	 *
	 * @return bool True if the payment method is enabled, otherwise false
	 */
	public static function isPaymentMethodEnabled($paymentMethod)
	{
		$db    = JFactory::getDbo();
		$query = $db->getQuery(true);
		$query->select('COUNT(*)')
			->from('#__pf_payment_plugins')
			->where('published = 1')
			->where('name=' . $db->quote($paymentMethod));
		$db->setQuery($query);
		$total = (int) $db->loadResult();
		if ($total)
		{
			if ($paymentMethod == 'os_ideal')
			{
				require_once JPATH_ROOT . '/components/com_pmform/payments/ideal/ideal.class.php';
			}

			return true;
		}
		else
		{
			return false;
		}
	}

	/**
	 * Display list of attachment
	 *
	 * @param string $attachment
	 * @param object $config
	 */
	public static function attachmentList($attachment, $config)
	{
		jimport('joomla.filesystem.folder');
		$path      = JPATH_ROOT . '/media/com_pmform';
		$files     = JFolder::files($path, strlen(trim($config->allowed_extensions)) ? str_replace(',', '|', $config->allowed_extensions) : 'bmp|gif|jpg|png|swf|zip|doc|pdf|xls');
		$options   = array();
		$options[] = JHtml::_('select.option', '', JText::_('Select Attachment'));
		for ($i = 0, $n = count($files); $i < $n; $i++)
		{
			$file      = $files[$i];
			$options[] = JHtml::_('select.option', $file, $file);
		}

		return JHtml::_('select.genericlist', $options, 'attachment', 'class="inputbox"', 'value', 'text', $attachment);
	}

	/**
	 * Get list of banks for ideal payment plugin
	 * @return array
	 */
	public static function getBankLists()
	{
		$idealPlugin = os_payments::loadPaymentMethod('os_ideal');
		$params      = new JRegistry($idealPlugin->params);
		$partnerId   = $params->get('partner_id');
		$ideal       = new iDEAL_Payment($partnerId);
		if (!$params->get('ideal_mode', 0))
		{
			$ideal->setTestmode(true);
		}
		$bankLists = $ideal->getBanks();

		return $bankLists;
	}

	/**
	 * Load language from main component
	 *
	 */
	public static function loadLanguage()
	{
		static $loaded;
		if (!$loaded)
		{
			$lang = JFactory::getLanguage();
			$tag  = $lang->getTag();
			if (!$tag)
			{
				$tag = 'en-GB';
			}
			$lang->load('com_pmform', JPATH_ROOT, $tag);
			$loaded = true;
		}
	}

	/**
	 * Create an user account based on the entered data
	 *
	 * @param array $data
	 *
	 * @return true
	 */
	public static function saveRegistration($data)
	{
		//Need to load com_users language file
		$lang = JFactory::getLanguage();
		$tag  = $lang->getTag();
		if (!$tag)
		{
			$tag = 'en-GB';
		}
		$lang->load('com_users', JPATH_ROOT, $tag);
		$data['name']     = $data['first_name'] . ' ' . $data['last_name'];
		$data['password'] = $data['password2'] = $data['password1'];
		$data['email1']   = $data['email2'] = $data['email'];
		require_once JPATH_ROOT . '/components/com_users/models/registration.php';
		$model = new UsersModelRegistration();
		$model->register($data);
		$db    = JFactory::getDbo();
		$query = $db->getQuery(true);
		$query->select('id')
			->from('#__users')
			->where('username=' . $db->quote($data['username']));
		$db->setQuery($query);

		return (int) $db->loadResult();
	}

	/**
	 * Calculate the fees on the form
	 *
	 * @param $rowForm
	 * @param $form
	 * @param $input
	 *
	 * @return array
	 */
	public static function calculateFormFee($rowForm, $form, $input, $paymentMethod = null)
	{
		$db                = JFactory::getDbo();
		$query             = $db->getQuery(true);
		$fees              = array();
		$fees['coupon_id'] = 0;
		$form->setAmount($rowForm->amount);
		$extraFee          = $form->calculateFee();
		$totalAmount       = $rowForm->amount + $extraFee;
		//Calculate late fee
		if ($rowForm->number_days > 0 && ($rowForm->late_payment_date != $db->getNullDate()))
		{
			if ($rowForm->late_amount_type == 0)
			{
				$lateFee = round($totalAmount * $rowForm->late_payment_amount / 100, 2);
			}
			else
			{
				$lateFee = $rowForm->late_payment_amount;
			}
			$totalAmount += $lateFee;
		}
		$discountAmount = 0;
		$formId         = $input->getInt('form_id', 0);
		$couponCode     = $input->post->getString('coupon_code', '');
		if ($couponCode)
		{
			$query->clear();
			$query->select('*')
				->from('#__pf_coupons')
				->where('published=1')
				->where('code=' . $db->quote($couponCode) . '')
				->where('(valid_from="0000-00-00" OR valid_from <= NOW())')
				->where('(valid_to="0000-00-00" OR valid_to >= NOW())')
				->where('(times = 0 OR times > used)')
				->where('(form_id=0 OR form_id=' . $formId . ')');
			$db->setQuery($query);
			$coupon = $db->loadObject();
			if ($coupon)
			{
				if ($coupon->coupon_type == 0)
				{
					$discountAmount = $discountAmount + $totalAmount * $coupon->discount / 100;
				}
				else
				{
					$discountAmount = $discountAmount + $coupon->discount;
				}
				$couponValid       = 1;
				$fees['coupon_id'] = (int) $coupon->id;
			}
			else
			{
				$couponValid = 0;
			}
		}
		else
		{
			$couponValid = 1;
		}
		$grossAmount             = $totalAmount - $discountAmount;

		// Calculate payment fee
		$paymentFeeAmount  = 0;
		$paymentFeePercent = 0;
		if ($paymentMethod)
		{
			$method            = os_payments::loadPaymentMethod($paymentMethod);
			$params            = new JRegistry($method->params);
			$paymentFeeAmount  = (float) $params->get('payment_fee_amount');
			$paymentFeePercent = (float) $params->get('payment_fee_percent');
		}
		if (($paymentFeeAmount > 0 || $paymentFeePercent > 0) && $grossAmount > 0)
		{
			$fees['payment_processing_fee'] = round($paymentFeeAmount + $grossAmount * $paymentFeePercent / 100, 2);
			$grossAmount += $fees['payment_processing_fee'];
		}
		else
		{
			$fees['payment_processing_fee'] = 0;
		}

		$fees['total_amount']    = $totalAmount;
		$fees['discount_amount'] = $discountAmount;
		$fees['gross_amount']    = $grossAmount;
		$fees['coupon_valid']    = $couponValid;

		return $fees;
	}

	/**
	 * Format the amount based on config settings
	 *
	 * @param $amount
	 * @param $config
	 *
	 * @return string
	 */
	public static function formatAmount($amount, $config)
	{
		return number_format($amount, 2);
	}

	/**
	 * Display amount with the currency symbol
	 * @param $amount
	 * @param $config
	 */
	public static function formatCurrency($amount, $config)
	{
		return $config->currency_symbol.number_format($amount, 2);
	}

	/**
	 * Get country code
	 *
	 * @param string $countryName
	 *
	 * @return string
	 */
	public static function getCountryCode($countryName)
	{
		$db    = JFactory::getDbo();
		$query = $db->getQuery(true);
		if (!$countryName)
		{
			$countryName = self::getConfigValue('default_country');
		}
		$query->select('country_2_code')
			->from('#__pf_countries')
			->where('LOWER(name) = ' . $db->quote(JString::strtolower($countryName)));
		$db->setQuery($query);
		$countryCode = $db->loadResult();
		if (!$countryCode)
		{
			$countryCode = 'US';
		}

		return $countryCode;
	}

	/**
	 * Display copy right information from back-end of the extension
	 *
	 */
	public static function displayCopyRight()
	{
		echo '<div class="copyright"><a href="http://joomdonation.com/joomla-extensions/joomla-payment-form.html" target="_blank"><strong>Payment Form</strong></a> version 4.1, Copyright (C) 2010 - ' . date('Y') . ' <a href="http://joomdonation.com" target="_blank"><strong>Ossolution Team</strong></a></div>';
	}

	/**
	 * Build replacement tags use for emails & messages
	 *
	 * @param $row
	 * @param $config
	 *
	 * @return array
	 */
	public static function buildReplaceTags($row, $config, $loadCss = false)
	{
		$db    = JFactory::getDbo();
		$query = $db->getQuery(true);
		$query->select('*')
			->from('#__pf_forms')
			->where('id = ' . (int) $row->form_id);
		$db->setQuery($query);
		$form                        = $db->loadObject();
		$rowFields                   = self::getFormFields($row->form_id);
		$replaces                    = array();
		$replaces['form_title']      = $form->title;
		$replaces['amount']          = $replaces['total_amount'] = self::formatAmount($row->total_amount, $config);
		$replaces['discount_amount'] = self::formatAmount($row->discount_amount, $config);
		$replaces['payment_processing_fee'] = self::formatAmount($row->payment_processing_fee, $config);
		$replaces['gross_amount']    = self::formatAmount($row->gross_amount, $config);
		$replaces['transaction_id']  = $row->transaction_id;
		$replaces['date']            = date($config->date_format);
		$replaces['donation_date']   = JHtml::_('date', $row->created_date, $config->date_format);
		$replaces['payment_detail']  = self::getEmailContent($config, $row, $loadCss);
		$replaces['invoice_number']  = self::formatInvoiceNumber($row->invoice_number, $config);
		$method                      = os_payments::getPaymentMethod($row->payment_method);
		if ($method)
		{
			$replaces['payment_method'] = JText::_($method->getTitle());
		}
		else
		{
			$replaces['payment_method'] = '';
		}
		$replaces = array_merge($replaces, self::getPaymentData($row, $rowFields));

		return $replaces;
	}

	/**
	 * Send email to super administrator and user
	 *
	 * @param object $row
	 * @param object $config
	 */
	public static function sendEmails($row, $config)
	{
		$db        = JFactory::getDbo();
		$mailer    = JFactory::getMailer();
		if ($config->from_name)
		{
			$fromName = $config->from_name;
		}
		else
		{
			$fromName = JFactory::getConfig()->get('fromname');
		}
		if ($config->from_email)
		{
			$fromEmail = $config->from_email;
		}
		else
		{
			$fromEmail = JFactory::getConfig()->get('mailfrom');
		}
		$query     = $db->getQuery(true);
		$query->select('*')
			->from('#__pf_forms')
			->where('id = ' . (int) $row->form_id);
		$db->setQuery($query);
		$form     = $db->loadObject();
		$replaces = self::buildReplaceTags($row, $config, true);
		//Overridde email message
		if ($form->confirmation_email_subject)
		{
			$config->user_email_subject = $form->confirmation_email_subject;
		}
		if ($form->confirmation_email_body)
		{
			$config->user_email_body = $form->confirmation_email_body;
		}
		if ($form->notification_emails)
		{
			$config->notification_emails = $form->notification_emails;
		}
		//Notification email send to user
		$subject = $config->user_email_subject;
		//if ($row->payment_method == 'os_offline')
		if (strpos($row->payment_method, 'os_offline') !== false)
		{
			$prefix = str_replace('os_offline', '', $row->payment_method);
			if ($prefix && !empty($config->{'user_email_body_offline'.$prefix}))
			{
				$body = $config->{'user_email_body_offline'.$prefix};
			}
			else
			{
				$body = $config->user_email_body_offline;
			}
		}
		else
		{
			$body = $config->user_email_body;
		}
		foreach ($replaces as $key => $value)
		{
			$key     = strtoupper($key);
			$subject = str_replace("[$key]", $value, $subject);
			$body    = str_replace("[$key]", $value, $body);
		}

		$attachments = array();
		if ($config->activate_invoice_feature && $config->send_invoice_to_customer && self::needInvoice($row))
		{
			if (!$row->invoice_number)
			{
				$row->invoice_number = self::getInvoiceNumber();
				$row->store();
			}
			self::generateInvoicePDF($row);
			$attachments[] = JPATH_ROOT . '/media/com_pmform/invoices/' . self::formatInvoiceNumber($row->invoice_number, $config) . '.pdf';
		}
		if ($form->attachment)
		{
			$attachments[] = JPATH_ROOT . '/media/com_pmform/' . $form->attachment;
		}
		
		
		$mailer->sendMail($fromEmail, $fromName, $row->email, $subject, $body, 1, null, null, $attachments);
		if (count($attachments))
		{
			$mailer->clearAttachments();
		}
		//Send emails to notification emails
		$replaces['payment_detail']  = self::getEmailContent($config, $row, true, true);
		if ($config->notification_emails == '')
		{
			$notificationEmails = $fromEmail;
		}
		else
		{
			$notificationEmails = $config->notification_emails;
		}
		$notificationEmails = str_replace(' ', '', $notificationEmails);
		$emails             = explode(',', $notificationEmails);
		if ($form->notification_email_subject)
		{
			$config->admin_email_subject = $form->notification_email_subject;
		}
		if ($form->notification_email_body)
		{
			$config->admin_email_body = $form->notification_email_body;
		}
		$subject = $config->admin_email_subject;
		$body    = $config->admin_email_body;
		foreach ($replaces as $key => $value)
		{
			$key     = strtoupper($key);
			$subject = str_replace("[$key]", $value, $subject);
			$body    = str_replace("[$key]", $value, $body);
		}

		//Send attachments to admin emails
		if ($config->send_attachment_to_admin_email)
		{

			$query->clear();
			$query->select('a.id, a.name, a.fieldtype')
				->from('#__pf_fields AS a')
				->innerJoin('#__pf_form_fields AS b ON a.id = b.field_id')
				->where('b.published=1 AND b.form_id=' . (int) $row->form_id);
			$db->setQuery($query);
			$rowFields       = $db->loadObjectList();
			$pathUpload      = self::getConfigValue('path_upload');
			$attachmentsPath = JPATH_ROOT . '/' . $pathUpload;
			for ($i = 0, $n = count($rowFields); $i < $n; $i++)
			{
				$rowField = $rowFields[$i];
				if ($rowField->fieldtype == 'File')
				{
					if (isset($replaces[$rowField->name]))
					{
						$fileName = $replaces[$rowField->name];
						if ($fileName && file_exists($attachmentsPath . '/' . $fileName))
						{
							$pos = strpos($fileName, '_');
							if ($pos !== false)
							{
								$originalFilename = substr($fileName, $pos + 1);
							}
							else
							{
								$originalFilename = $fileName;
							}
							$mailer->addAttachment($attachmentsPath . '/' . $fileName, $originalFilename);
						}
					}
				}
			}
		}

		for ($i = 0, $n = count($emails); $i < $n; $i++)
		{
			$email = $emails[$i];
			$mailer->ClearAllRecipients();
			$mailer->sendMail($fromEmail, $fromName, $email, $subject, $body, 1);
		}

		//After sending email, we can empty the user_password of subscription was activated
		if ($row->published == 1 && $row->user_password)
		{
			$query->clear();
			$query->update('#__pf_payments')
				->set('user_password = ""')
				->where('id = '. $row->id);
			$db->setQuery($query);
			$db->execute();
		}
	}

	public static function sendPaymentApprovedEmails($row, $config)
	{
		$mailer = JFactory::getMailer();
		PMFormHelper::loadLanguage();
		$fromEmail = JFactory::getConfig()->get('mailfrom');
		$fromName  = JFactory::getConfig()->get('fromname');
		$replaces  = self::buildReplaceTags($row, $config, true);

		//Notification email send to user
		$subject = $config->payment_approved_email_subject;
		$body    = $config->payment_approved_email_body;
		foreach ($replaces as $key => $value)
		{
			$key  = strtoupper($key);
			$body = str_replace("[$key]", $value, $body);
		}
		$mailer->sendMail($fromEmail, $fromName, $row->email, $subject, $body, 1);

		//After sending email, we can empty the user_password of subscription was activated
		if ($row->published == 1 && $row->user_password)
		{
			$db    = JFactory::getDbo();
			$query = $db->getQuery(true);
			$query->update('#__pf_payments')
				->set('user_password = ""')
				->where('id = ' . $row->id);
			$db->setQuery($query);
			$db->execute();
		}
	}

	/**
	 * Get email content. For [PAYMENT_DETAIL] tag
	 *
	 * @param object $config
	 * @param object $row
	 * @param bool   $loadCss
	 * * @param bool $toAdmin
	 *
	 * @return string
	 */
	public static function getEmailContent($config, $row, $loadCss = false, $toAdmin = false)
	{
		$db    = JFactory::getDbo();
		$query = $db->getQuery(true);
		$query->select('title')
			->from('#__pf_forms')
			->where('id = ' . (int) $row->form_id);
		$db->setQuery($query);
		$data              = array();
		$data['config']    = $config;
		$data['row']       = $row;
		$data['formTitle'] = $db->loadResult();
		//Get coupon
		if ($row->coupon_id)
		{
			$query->clear();
			$query->select('`code`')
				->from('#__pf_coupons')
				->where('id = ' . (int) $row->coupon_id);
			$db->setQuery($query);
			$data['couponCode'] = $db->loadResult();
		}


		//Username and password of the account
		if ($row->user_id)
		{
			$query->clear();
			$query->select('username')
				->from('#__users')
				->where('id = '. $row->user_id);
			$db->setQuery($query);
			$username         = $db->loadResult();
			$data['username'] = $username;
		}

		if ($row->username && $row->user_password)
		{
			$data['username'] = $row->username;
			//Password
			$privateKey       = md5(JFactory::getConfig()->get('secret'));
			$key              = new JCryptKey('simple', $privateKey, $privateKey);
			$crypt            = new JCrypt(new JCryptCipherSimple, $key);
			$data['password'] = $crypt->decrypt($row->user_password);
		}

		if ($loadCss)
		{
			$layout      = JPATH_ROOT . '/components/com_pmform/emailtemplates/email.php';
			$data['css'] = file_get_contents(JPATH_ROOT . '/components/com_pmform/assets/css/style.css');
		}
		else
		{
			$layout = JPATH_ROOT . '/components/com_pmform/emailtemplates/payment_detail.php';
		}
		$rowFields = self::getFormFields($row->form_id);
		$formData  = self::getPaymentData($row, $rowFields);
		$form      = new POSFForm($rowFields);
		$form->bind($formData)->prepareFormField();
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

		$data['form']        = $form;
		$data['enterAmount'] = self::isEnterAmount($rowFields);
		$data['toAdmin']     = $toAdmin;
		return self::loadCommonLayout($layout, $data);

		return $text;
	}

	public static function csvExport($rows, $config, $rowFields, $fieldValues)
	{
		if (count($rows))
		{
			if (preg_match('#Opera(/| )([0-9].[0-9]{1,2})#i', $_SERVER['HTTP_USER_AGENT']))
			{
				$UserBrowser = "Opera";
			}
			elseif (preg_match('#MSIE ([0-9].[0-9]{1,2})#i', $_SERVER['HTTP_USER_AGENT']))
			{
				$UserBrowser = "IE";
			}
			else
			{
				$UserBrowser = '';
			}
			$mime_type = ($UserBrowser == 'IE' || $UserBrowser == 'Opera') ? 'application/octetstream' : 'application/octet-stream';
			$filename  = "payment_records";
			header('Content-Encoding: UTF-8');
			header('Content-Type: ' . $mime_type . ' ;charset=UTF-8');
			header('Expires: ' . gmdate('D, d M Y H:i:s') . ' GMT');
			if ($UserBrowser == 'IE')
			{
				header('Content-Disposition: attachment; filename="' . $filename . '.csv"');
				header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
				header('Pragma: public');
			}
			else
			{
				header('Content-Disposition: attachment; filename="' . $filename . '.csv"');
				header('Pragma: no-cache');
			}
			$fp = fopen('php://output', 'w');
			fwrite($fp, "\xEF\xBB\xBF");
			$delimiter = isset($config->csv_delimiter) ? $config->csv_delimiter : ',';
			$fields    = array();
			$fields[]  = JText::_('Form');
			if (count($rowFields))
			{
				foreach ($rowFields as $rowField)
				{
					$fields[] = JText::_($rowField->title);
				}
			}
			$fields[] = JText::_('Total Amount');
			$fields[] = JText::_('Discount Amount');
			$fields[] = JText::_('Gross Amount');
			$fields[] = JText::_('Payment Date');
			$fields[] = JText::_('Payment method');
			$fields[] = JText::_('Transaction ID');
			fputcsv($fp, $fields, $delimiter);
			foreach ($rows as $r)
			{
				$fields   = array();
				$fields[] = $r->title;
				foreach ($rowFields as $rowField)
				{
					if ($rowField->is_core)
					{
						$fields[] = @$r->{$rowField->name};
					}
					else
					{
						$fieldValue = @$fieldValues[$r->id][$rowField->id];
						if (is_string($fieldValue) && is_array(json_decode($fieldValue)))
						{
							$fieldValue = implode(', ', json_decode($fieldValue));
						}
						$fields[] = $fieldValue;
					}
				}

				$fields[] = PMFormHelper::formatAmount($r->total_amount, $config);
				$fields[] = PMFormHelper::formatAmount($r->discount_amount, $config);
				$fields[] = PMFormHelper::formatAmount($r->gross_amount, $config);
				$fields[] = JHtml::_('date', $r->created_date, $config->date_format, null);
				$method   = os_payments::getPaymentMethod($r->payment_method);
				if ($method)
				{
					$fields[] = $method->getTitle();
				}
				else
				{
					$fields[] = '';
				}
				$fields[] = $r->transaction_id;
				fputcsv($fp, $fields, $delimiter);
			}
			fclose($fp);
			JFactory::getApplication()->close();
		}
	}

	/**
	 * Check if the current file is just used to allow users to enter amount to make payment
	 *
	 * @param $rowFields
	 */
	public static function isEnterAmount($rowFields)
	{
		foreach($rowFields as $rowField)
		{
			if ($rowField->name == 'amount')
			{
				return true;
			}
		}

		return false;
	}
	/**
	 * Function to render a common layout which is used in different views
	 *
	 * @param string $layout Relative path to the layout file
	 * @param array  $data   An array contains the data passed to layout for rendering
	 */
	public static function loadCommonLayout($layout, $data = array())
	{
		$app       = JFactory::getApplication();
		$themeFile = str_replace('/tmpl', '', $layout);
		if (file_exists($layout))
		{
			$path = $layout;
		}
		elseif (file_exists(JPATH_THEMES . '/' . $app->getTemplate() . '/html/com_pmform/' . $themeFile))
		{
			$path = JPATH_THEMES . '/' . $app->getTemplate() . '/html/com_pmform/' . $themeFile;
		}
		elseif (file_exists(JPATH_ROOT . '/components/com_pmform/view/' . $layout))
		{
			$path = JPATH_ROOT . '/components/com_pmform/view/' . $layout;
		}
		else
		{
			throw new RuntimeException(JText::_('The given shared template path is not exist'));
		}
		// Start an output buffer.
		ob_start();
		extract($data);
		// Load the layout.
		include $path;

		// Get the layout contents.
		$output = ob_get_clean();

		return $output;
	}

	/**
	 * Check to see whether we need to generate a invoice for a payment record
	 *
	 * @param $row
	 *
	 * @return bool
	 */
	public static function needInvoice($row)
	{
		if ($row->amount > 0 || $row->gross_amount > 0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	/**
	 * Get the invoice number for this subscription record
	 */
	public static function getInvoiceNumber()
	{
		$db  = JFactory::getDbo();
		$sql = 'SELECT MAX(invoice_number) FROM #__pf_payments';
		$db->setQuery($sql);
		$invoiceNumber = (int) $db->loadResult();
		if (!$invoiceNumber)
		{
			$invoiceNumber = (int) self::getConfigValue('invoice_start_number');
			if (!$invoiceNumber)
			{
				$invoiceNumber = 1;
			}
		}
		else
		{
			$invoiceNumber++;
		}

		return $invoiceNumber;
	}

	/**
	 * Generate invoice PDF (receipt) for a donation record
	 *
	 * @param $row
	 */
	public static function generateInvoicePDF($row)
	{
		self::loadLanguage();
		$config   = self::getConfig();
		$siteName = JFactory::getApplication()->get("sitename");
		require_once JPATH_ROOT . "/components/com_pmform/tcpdf/tcpdf.php";
		require_once JPATH_ROOT . "/components/com_pmform/tcpdf/config/lang/eng.php";
		$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
		$pdf->SetCreator(PDF_CREATOR);
		$pdf->SetAuthor($siteName);
		$pdf->SetTitle('Invoice');
		$pdf->SetSubject('Invoice');
		$pdf->SetKeywords('Invoice');
		$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
		$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));
		$pdf->setPrintHeader(false);
		$pdf->setPrintFooter(false);
		$pdf->SetMargins(PDF_MARGIN_LEFT, 0, PDF_MARGIN_RIGHT);
		$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
		$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);
		//set auto page breaks
		$pdf->SetAutoPageBreak(true, PDF_MARGIN_BOTTOM);
		//set image scale factor
		$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);
		$pdf->SetFont('times', '', 8);
		$pdf->AddPage();
		$invoiceOutput = $config->invoice_format;

		$replaces                  = self::buildReplaceTags($row, $config);
		$itemName                  = JText::_('PF_PAYMENT_FOR');
		$itemName                  = str_replace('[FORM_TITLE]', $replaces['form_title'], $itemName);
		$replaces['ITEM_NAME']     = $itemName;
		$replaces['NAME']          = $row->first_name . ' ' . $row->last_name;
		$replaces['ITEM_QUANTITY'] = 1;
		$replaces['AMOUNT']        = $replaces['ITEM_AMOUNT'] = $replaces['ITEM_SUB_TOTAL'] = number_format($row->total_amount, 2);
		$replaces['DISCOUNT_AMOUNT'] = self::formatAmount($row->discount_amount, $config);
		$replaces['SUB_TOTAL'] = self::formatAmount($row->total_amount - $row->discount_amount, $config);
		$replaces['TOTAL_AMOUNT'] = self::formatAmount($row->gross_amount, $config);

		// Invoice Status
		if ($row->published == 0)
		{
			$invoiceStatus = JText::_('PF_INVOICE_STATUS_PENDING');
		}
		elseif ($row->published == 1)
		{
			$invoiceStatus = JText::_('PF_INVOICE_STATUS_PAID');
		}
		else
		{
			$invoiceStatus = JText::_('PF_INVOICE_STATUS_UNKNOWN');
		}
		$replaces['INVOICE_STATUS'] = $invoiceStatus;
		$replaces['invoice_date']   = JHtml::_('date', $row->created_date, $config->date_format);

		foreach ($replaces as $key => $value)
		{
			$key           = strtoupper($key);
			$invoiceOutput = str_replace("[$key]", $value, $invoiceOutput);
		}

		$invoiceOutput = self::convertImgTags($invoiceOutput);
		$pdf->writeHTML($invoiceOutput, true, false, false, false, '');
		//Filename
		$filePath = JPATH_ROOT . '/media/com_pmform/invoices/' . $replaces['invoice_number'] . '.pdf';
		$pdf->Output($filePath, 'F');
	}

	/**
	 * Helper method for process downloading invoice, both from frontend and backend
	 *
	 * @param $id
	 */
	public static function downloadInvoice($id)
	{
		JTable::addIncludePath(JPATH_ROOT . '/administrator/components/com_pmform/table');
		$row = JTable::getInstance('pmform', 'Payment');
		$row->load($id);
		$invoiceStorePath = JPATH_ROOT . '/media/com_pmform/invoices/';
		if ($row)
		{
			$config = self::getConfig();
			if (!$row->invoice_number)
			{
				$row->invoice_number = self::getInvoiceNumber();
				$row->store();
			}
			$invoiceNumber = self::formatInvoiceNumber($row->invoice_number, $config);
			self::generateInvoicePDF($row);
			$invoicePath = $invoiceStorePath . $invoiceNumber . '.pdf';
			$fileName    = $invoiceNumber . '.pdf';
			while (@ob_end_clean()) ;
			self::processDownload($invoicePath, $fileName);
		}
	}

	/**
	 * Format invoice number according to configuration
	 *
	 * @param $invoiceNumber
	 * @param $config
	 *
	 * @return string
	 */
	public static function formatInvoiceNumber($invoiceNumber, $config)
	{
		return $config->invoice_prefix . str_pad($invoiceNumber, $config->invoice_number_length ? $config->invoice_number_length : 4, '0', STR_PAD_LEFT);
	}
	/**
	 * Convert src of img tags to use absolute links instead of ralative link
	 *
	 * @param $html_content
	 * @return mixed
	 */
	public static function convertImgTags($html_content)
	{
		$patterns = array();
		$replacements = array();
		$i = 0;
		$src_exp = "/src=\"(.*?)\"/";
		$link_exp = "[^http:\/\/www\.|^www\.|^https:\/\/|^http:\/\/]";
		$siteURL = JUri::root();
		preg_match_all($src_exp, $html_content, $out, PREG_SET_ORDER);
		foreach ($out as $val)
		{
			$links = preg_match($link_exp, $val[1], $match, PREG_OFFSET_CAPTURE);
			if ($links == '0')
			{
				$patterns[$i] = $val[1];
				$patterns[$i] = "\"$val[1]";
				$replacements[$i] = $siteURL . $val[1];
				$replacements[$i] = "\"$replacements[$i]";
			}
			$i++;
		}
		$mod_html_content = str_replace($patterns, $replacements, $html_content);

		return $mod_html_content;
	}

	/**
	 * Process download a file
	 *
	 * @param string $file : Full path to the file which will be downloaded
	 */
	public static function processDownload($filePath, $filename)
	{
		$pos      = strpos($filename, '_');
		if ($pos !== false)
		{
			$filename = substr($filename, $pos + 1);
		}
		jimport('joomla.filesystem.file');
		$fsize    = @filesize($filePath);
		$mod_date = date('r', filemtime($filePath));
		$cont_dis = 'attachment';
		$ext      = JFile::getExt($filename);
		$mime     = self::getMimeType($ext);
		// required for IE, otherwise Content-disposition is ignored
		if (ini_get('zlib.output_compression'))
		{
			ini_set('zlib.output_compression', 'Off');
		}
		header("Pragma: public");
		header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
		header("Expires: 0");
		header("Content-Transfer-Encoding: binary");
		header('Content-Disposition:' . $cont_dis . ';'
			. ' filename="' . JFile::getName($filename) . '";'
			. ' modification-date="' . $mod_date . '";'
			. ' size=' . $fsize . ';'
		); //RFC2183
		header("Content-Type: " . $mime); // MIME type
		header("Content-Length: " . $fsize);

		if (!ini_get('safe_mode'))
		{ // set_time_limit doesn't work in safe mode
			@set_time_limit(0);
		}
		self::readfile_chunked($filePath);
	}

	/**
	 * Get mimetype of a file
	 *
	 * @return string
	 */
	public static function getMimeType($ext)
	{
		require_once JPATH_ROOT . "/components/com_pmform/helper/mime.mapping.php";
		foreach ($mime_extension_map as $key => $value)
		{
			if ($key == $ext)
			{
				return $value;
			}
		}

		return "";
	}

	/**
	 * Read file
	 *
	 * @param string $filename
	 * @param        $retbytes
	 *
	 * @return unknown
	 */
	public static function readfile_chunked($filename, $retbytes = true)
	{
		$chunksize = 1 * (1024 * 1024); // how many bytes per chunk
		$buffer    = '';
		$cnt       = 0;
		$handle    = fopen($filename, 'rb');
		if ($handle === false)
		{
			return false;
		}
		while (!feof($handle))
		{
			$buffer = fread($handle, $chunksize);
			echo $buffer;
			@ob_flush();
			flush();
			if ($retbytes)
			{
				$cnt += strlen($buffer);
			}
		}
		$status = fclose($handle);
		if ($retbytes && $status)
		{
			return $cnt; // return num. bytes delivered like readfile() does.
		}

		return $status;
	}

	public static function loadTooltip($selector, $params)
	{
		$opt['animation'] = (isset($params['animation']) && ($params['animation'])) ? (boolean) $params['animation'] : null;
		$opt['html']      = (isset($params['html']) && ($params['html'])) ? (boolean) $params['html'] : null;
		$opt['placement'] = (isset($params['placement']) && ($params['placement'])) ? (string) $params['placement'] : null;
		$opt['selector']  = (isset($params['selector']) && ($params['selector'])) ? (string) $params['selector'] : null;
		$opt['title']     = (isset($params['title']) && ($params['title'])) ? (string) $params['title'] : null;
		$opt['trigger']   = (isset($params['trigger']) && ($params['trigger'])) ? (string) $params['trigger'] : null;
		$opt['delay']     = (isset($params['delay']) && ($params['delay'])) ? (int) $params['delay'] : null;

		$options = PMFormHelper::getJSObject($opt);

		// Attach tooltips to document
		JFactory::getDocument()->addScriptDeclaration(
			"jQuery(document).ready(function() {
			jQuery('" . $selector . "').tooltip(" . $options . ");
		});"
		);
	}


	/**
	 * Load jquery used in the extension
	 *
	 */
	public static function loadJQuery()
	{
		if (version_compare(JVERSION, '3.0', 'ge'))
		{
			JHtml::_('jquery.framework');
		}
		else
		{
			$document = JFactory::getDocument();
			$document->addScript(JUri::root(true) . '/components/com_pmform/assets/bootstrap/js/jquery.min.js');
			$document->addScript(JUri::root(true) . '/components/com_pmform/assets/bootstrap/js/jquery-noconflict.js');
		}
	}

	/**
	 * Load twitter bootstrap framework
	 *
	 * @param bool $loadJs
	 */
	public static function loadBootstrap($loadJs = true)
	{
		$document = JFactory::getDocument();
		if ($loadJs)
		{
			self::loadJQuery();
			$document->addScript(JUri::root(true) . '/components/com_pmform/assets/bootstrap/js/bootstrap.min.js');
		}
		$document->addStyleSheet(JUri::root(true) . '/components/com_pmform/assets/bootstrap/css/bootstrap.css');
	}


	public static function getJSObject(array $array = array())
	{
		$object = '{';

		// Iterate over array to build objects
		foreach ((array) $array as $k => $v)
		{
			if (is_null($v))
			{
				continue;
			}

			if (is_bool($v))
			{
				$object .= ' ' . $k . ': ';
				$object .= ($v) ? 'true' : 'false';
				$object .= ',';
			}
			elseif (!is_array($v) && !is_object($v))
			{
				$object .= ' ' . $k . ': ';
				$object .= (is_numeric($v) || strpos($v, '\\') === 0) ? (is_numeric($v)) ? $v : substr($v, 1) : "'" . $v . "'";
				$object .= ',';
			}
			else
			{
				$object .= ' ' . $k . ': ' . self::getJSObject($v) . ',';
			}
		}

		if (substr($object, -1) == ',')
		{
			$object = substr($object, 0, -1);
		}

		$object .= '}';

		return $object;
	}

	/**
	 *
	 *
	 * @return string
	 */
	public static function validateEngine()
	{
		$config = self::getConfig();
		$dateFormat = $config->date_field_format ? $config->date_field_format : '%Y-%m-%d';
		$dateFormat = str_replace('%', '', $dateFormat);
		$dateNow = JHtml::_('date', JFactory::getDate(), $dateFormat);

		$validClass = array(
			"",
			"validate[custom[integer]]",
			"validate[custom[number]]",
			"validate[custom[email]]",
			"validate[custom[url]]",
			"validate[custom[phone]]",
			"validate[custom[date],past[$dateNow]]",
			"validate[custom[ipv4]]",
			"validate[minSize[6]]",
			"validate[maxSize[12]]",
			"validate[custom[integer],min[-5]]",
			"validate[custom[integer],max[50]]");

		return json_encode($validClass);
	}

	public static function getUserInput($userId, $fieldName = 'user_id')
	{
		// Initialize variables.
		$html = array();
		$link = 'index.php?option=com_users&amp;view=users&amp;layout=modal&amp;tmpl=component&amp;field=user_id';
		// Initialize some field attributes.
		$attr = ' class="inputbox"';
		// Load the modal behavior script.
		JHtml::_('behavior.modal', 'a.modal_user_id');
		// Build the script.
		$script   = array();
		$script[] = '	function jSelectUser_user_id(id, title) {';
		$script[] = '		var old_id = document.getElementById("user_id").value;';
		$script[] = '		if (old_id != id) {';
		$script[] = '			document.getElementById("' . $fieldName . '").value = id;';
		$script[] = '			document.getElementById("user_id_name").value = title;';
		$script[] = '		}';
		$script[] = '		SqueezeBox.close();';
		$script[] = '	}';
		// Add the script to the document head.
		JFactory::getDocument()->addScriptDeclaration(implode("\n", $script));
		// Load the current username if available.
		$table = JTable::getInstance('user');
		if ($userId)
		{
			$table->load($userId);
		}
		else
		{
			$table->name = '';
		}
		// Create a dummy text field with the user name.
		$html[] = '<div class="fltlft">';
		$html[] = '	<input type="text" id="user_id_name"' . ' value="' . htmlspecialchars($table->name, ENT_COMPAT, 'UTF-8') . '"' .
			' disabled="disabled"' . $attr . ' />';
		$html[] = '</div>';
		// Create the user select button.
		$html[] = '<div class="button2-left">';
		$html[] = '<div class="blank">';
		$html[] = '<a class="modal_user_id" title="' . JText::_('JLIB_FORM_CHANGE_USER') . '"' . ' href="' . $link . '"' .
			' rel="{handler: \'iframe\', size: {x: 800, y: 500}}">';
		$html[] = '	' . JText::_('JLIB_FORM_CHANGE_USER') . '</a>';
		$html[] = '</div>';
		$html[] = '</div>';
		// Create the real field, hidden, that stored the user id.
		$html[] = '<input type="hidden" id="' . $fieldName . '" name="' . $fieldName . '" value="' . $userId . '" />';

		return implode("\n", $html);
	}
}

?>