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

class PMFormModelPayment extends POSFModel
{
	/**
	 * Process payment
	 *
	 * @param POSFInput $input
	 */
	public function processPayment($input)
	{
		jimport('joomla.user.helper');
		$user                   = JFactory::getUser();
		$db                     = JFactory::getDbo();
		$query                  = $db->getQuery(true);
		$config                 = PMFormHelper::getConfig();
		$userId                 = $user->id;
		$data                   = $input->getData();
		$data['transaction_id'] = strtoupper(JUserHelper::genRandomPassword());
		$row                    = JTable::getInstance('pmform', 'Payment');
		$row->bind($data);
		$row->published    = 0;
		$row->created_date = gmdate('Y-m-d H:i:s');
		if (!$userId && $config->user_registration)
		{
			if ($config->create_account_when_payment_success !== '1')
			{
				$userId = PMFormHelper::saveRegistration($data);
			}
			else
			{
				//Encrypt the password and store into  #__pf_payments table and create the account layout
				$privateKey         = md5(JFactory::getConfig()->get('secret'));
				$key                = new JCryptKey('simple', $privateKey, $privateKey);
				$crypt              = new JCrypt(new JCryptCipherSimple, $key);
				$row->user_password = $crypt->encrypt($data['password1']);
			}
		}
		$row->user_id = $userId;
		$formId       = $row->form_id;
		$currentDate  = JHtml::_('date', 'now', 'Y-m-d');
		$query->select('*, DATEDIFF("' . $currentDate . '", late_payment_date) AS number_days')
			->from('#__pf_forms')
			->where('id=' . $formId);
		$db->setQuery($query);
		$rowForm   = $db->loadObject();
		$rowFields = PMFormHelper::getFormFields($formId);
		$form      = new POSFForm($rowFields);
		$form->bind($data);
		$paymentMethod               = isset($data['payment_method']) ? $data['payment_method'] : '';
		$fees                        = PMFormHelper::calculateFormFee($rowForm, $form, $input, $paymentMethod);
		$row->total_amount           = $fees['total_amount'];
		$row->discount_amount        = $fees['discount_amount'];
		$row->gross_amount           = $fees['gross_amount'];
		$row->payment_processing_fee = $fees['payment_processing_fee'];
		$row->coupon_id              = (int) $fees['coupon_id'];
		$row->store();

		JFactory::getSession()->set('pmf_payment_id', $row->id);

		//Store custom fields data
		PMFormHelper::storeFormData($row, $data);
		$couponId = (int) $fees['coupon_id'];
		if ($couponId)
		{
			//Update number of times the coupon has used
			$sql = 'UPDATE #__pf_coupons SET used = used +1 WHERE id=' . $couponId;
			$db->setQuery($sql);
			$db->execute();
		}
		JPluginHelper::importPlugin('pmform');
		$dispatcher = JDispatcher::getInstance();
		$dispatcher->trigger('onAfterStorePayment', array($row));
		if ($row->gross_amount > 0)
		{
			$data['amount'] = $row->gross_amount;
			if ($rowForm->paypal_account)
			{
				$data['business'] = $rowForm->paypal_account;
			}
			$paymentMethod     = $data['payment_method'];
			$itemName          = JText::_('PF_PAYMENT_FOR');
			$itemName          = str_replace('[FORM_TITLE]', $rowForm->title, $itemName);
			$data['item_name'] = $itemName;
			require_once JPATH_COMPONENT . '/payments/' . $paymentMethod . '.php';
			$query->clear();
			$query->select('params')
				->from('#__pf_payment_plugins')
				->where('name=' . $db->quote($paymentMethod));
			$db->setQuery($query);
			$params       = new JRegistry($db->loadResult());
			$paymentClass = new $paymentMethod($params);
			$paymentClass->processPayment($row, $data);
		}
		else
		{
			$app               = JFactory::getApplication();
			$Itemid            = $input->getInt('Itemid', 0);
			$row->payment_date = gmdate('Y-m-d H:i:s');
			$row->published    = 1;
			$row->store();
			PMFormHelper::sendEmails($row, $config);
			JPluginHelper::importPlugin('pmform');
			$dispatcher = JDispatcher::getInstance();
			$dispatcher->trigger('onAfterPaymentSuccess', array($row));
			$url = JRoute::_('index.php?option=com_pmform&view=complete&id=' . $row->id . '&Itemid=' . $Itemid, false);
			$app->redirect($url);
		}
	}
} 