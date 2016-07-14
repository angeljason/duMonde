<?php
/**
 * @version        4.2
 * @package        Joomla
 * @subpackage     Payment Form
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2010 - 2015 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */

// no direct access
defined('_JEXEC') or die();

class os_braintree extends os_payment
{
	/**
	 * Payment mode
	 *
	 * @var boolean
	 */
	protected $mode;

	/**
	 * Merchant ID
	 *
	 * @var string
	 */

	protected $merchantId;
	/**
	 * Public key
	 *
	 * @var string
	 */
	protected $publicKey;

	/**
	 * Private key
	 *
	 * @var string
	 */
	protected $privateKey;

	/**
	 * Constructor function
	 *
	 * @param JRegistry $params
	 *
	 */
	public function os_braintree($params)
	{
		parent::setName('os_braintree');
		parent::os_payment();
		parent::setCreditCard(true);
		parent::setCardType(false);
		parent::setCardCvv(true);
		parent::setCardHolderName(true);
		$this->mode       = $params->get('braintree_mode', 0);
		$this->merchantId = $params->get('merchant_id');
		$this->publicKey  = $params->get('public_key');
		$this->privateKey = $params->get('private_key');
	}

	/**
	 * Process payment with the posted data
	 *
	 * @param array $data
	 *            array
	 *
	 * @return void
	 */
	function processPayment($row, $data)
	{
		require_once JPATH_COMPONENT . '/payments/lib/Braintree.php';
		$app    = JFactory::getApplication();
		$Itemid = $app->input->getInt('Itemid', 0);
		if ($this->mode)
		{
			Braintree_Configuration::environment('production');
		}
		else
		{
			Braintree_Configuration::environment('sandbox');
		}
		Braintree_Configuration::merchantId($this->merchantId);
		Braintree_Configuration::publicKey($this->publicKey);
		Braintree_Configuration::privateKey($this->privateKey);

		$result = Braintree_Transaction::sale(array(
			'amount'     => round($data['amount'], 2),
			'orderId'    => $row->id,
			'creditCard' => array(
				'number'         => $data['x_card_num'],
				'expirationDate' => str_pad($data['exp_month'], 2, '0', STR_PAD_LEFT) . '/' . $data['exp_year'],
				'cardholderName' => $data['card_holder_name'],
				'cvv'            => $data['x_card_code']
			),
			'customer'   => array(
				'firstName' => $row->first_name,
				'lastName'  => $row->last_name,
				'company'   => $row->organization,
				'phone'     => $row->phone,
				'fax'       => $row->fax,
				'email'     => $row->email
			),
			'options'    => array(
				'submitForSettlement' => true
			)
		));

		if ($result->success)
		{
			$config              = PMFormHelper::getConfig();
			$row->transaction_id = $result->transaction->id;
			$row->payment_date   = date('Y-m-d H:i:s');
			$row->published      = true;
			$row->store();

			PMFormHelper::sendEmails($row, $config);
			JPluginHelper::importPlugin('pmform');
			$dispatcher = JDispatcher::getInstance();
			$dispatcher->trigger('onAfterPaymentSuccess', array($row));
			$app->redirect(JRoute::_('index.php?option=com_pmform&view=complete&id=' . $row->id . '&Itemid=' . $Itemid, false));
		}
		else if ($result->transaction)
		{
			$_SESSION['reason'] = $result->transaction->processorResponseText;
			$app->redirect(JRoute::_('index.php?option=com_pmform&view=failure&id=' . $row->id . '&Itemid=' . $Itemid, false));
		}
		else
		{
			$_SESSION['reason'] = JText::_('Validation errors:' . $result->errors);
			$app->redirect(JRoute::_('index.php?option=com_pmform&view=failure&id=' . $row->id . '&Itemid=' . $Itemid, false));
		}
	}
}