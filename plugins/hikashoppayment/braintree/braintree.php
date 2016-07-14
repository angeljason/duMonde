<?php
/**
 * @package	HikaShop BrainTree Payment Plugin for Joomla!
 * @version	1.0
 * @author	3by400.com
 * @copyright	(C) 2014 3by400, Inc. All rights reserved.
 * @license	GNU/GPLv3 http://www.gnu.org/licenses/gpl-3.0.html

 * v 0.9.4 - Added Joomla language string definition for success and failure messages.
 * v 0.9.5 - Added additional Braintree currencies. Disabled error reporting.
 * v 0.9.6 - Added all available Braintree currencies.
 */
defined('_JEXEC') or die('Restricted access');

//error_reporting(E_ALL);
//ini_set('display_errors', '1');

require_once 'helper.php';

class plgHikashoppaymentBraintree extends hikashopPaymentPlugin
{
	var $accepted_currencies = array('USD', 
		'AUD', 'AZN',
		'BSD', 'BDT', 'BBD', 'BYR', 'BZD', 'BMD', 'BOB', 'BWP', 'BRL', 'BND', 'BGN', 'BIF',
		'KHR', 'CAD', 'CVE', 'KYD', 'XAF', 'XPF', 'CLP', 'CNY', 'COP', 'KMF', 'BAM', 'CRC', 'HRK', 'CUP', 'CYP', 'CZK', 
		'DKK', 'DJF', 'DOP',
		'XCD', 'ECS', 'EGP', 'SVC', 'ERN', 'EEK', 'ETB', 'EUR',
		'FKP', 'FJD', 'CDF',
		'GMD', 'GEL', 'GHS', 'GIP', 'GTQ', 'GNF', 'GWP', 'GYD',
		'HTG', 'HNL', 'HKD', 'HUF',
		'ISK', 'INR', 'IDR', 'IRR', 'IQD', 'ILS',
		'JMD', 'JPY', 'JOD',
		'KZT', 'KES', 'KWD', 'AOA', 'KGS',
		'KIP', 'LAK', 'LVL', 'LBP', 'LRD', 'LYD', 'LTL', 'LSL',
		'MOP', 'MKD', 'MGF', 'MGA', 'MWK', 'MYR', 'MVR', 'MTL', 'MRO', 'MUR', 'MXN', 'MDL', 'MNT', 'MAD', 'MZM', 'MMK',
		'NAD', 'NPR', 'ANG', 'PGK', 'TWD', 'TRY', 'NZD', 'NIO', 'NGN', 'KPW', 'NOK',
		'PKR', 'PAB', 'PYG', 'PEN', 'PHP', 'PLN',
		'QAR',
		'OMR', 'RON', 'RUB', 'RWF',
		'WST', 'STD', 'SAR', 'RSD', 'SCR', 'SLL', 'SGD', 'SKK', 'SIT', 'SBD', 'SOS', 'ZAR', 'KRW', 'LKR', 'SHP', 'SDD', 'SRD', 'SZL', 'SEK', 'CHF', 'SYP',
		'TJS', 'TZS', 'THB', 'TOP', 'TTD', 'TMM',
		'UGX', 'UAH', 'AED', 'GBP', 'UYU', 'UZS',
		'VUV', 'XOF', 'YER', 'YUM', 'ZMK', 'ZWD');
	var $multiple = true;
	var $name = 'braintree';
	var $pluginConfig = array(
		'environment' => array('Environment', 'list',array(
			'production' => 'Production Server',
			'sandbox' => 'Sandbox'
		)),
		'merchant_id' => array('MERCHANT ID', 'input'),
		'publicKey' => array('PUBLIC KEY', 'input'),
		'privateKey' => array('PRIVATE KEY', 'input'),
		'clientsideencryption' => array('CLIENT SIDE ENCRYPTION KEY', 'input'),
		/*
		'allowstorevault' => array('Allow Customers to Store Credit Card in Vault', 'boolean','1'),
		*/
		'ask_ccv' => array('Ask for CCV', 'boolean','0'),
		'debug' => array('DEBUG', 'boolean','0'),
		'settle' => array('Settle or Authorize', 'list',array(
			'true' => 'Settle',
			'false' => 'Authorize Only'
		)),
		'invalid_status' => array('INVALID_STATUS', 'orderstatus'),
		'pending_status' => array('PENDING_STATUS', 'orderstatus'),
		'verified_status' => array('VERIFIED_STATUS', 'orderstatus')
	);

  function __construct(&$subject, $config) {
		parent::__construct($subject, $config);
		
		// Url to receive (encrypted) form data
		$this->receiveUrl = HIKASHOP_LIVE."index.php?option=com_hikashop&ctrl=checkout&task=notify&notif_payment=" . $this->name;
		$this->manageToken = new plgHikashopBraintreeUser;
	}
	
	function onAfterOrderConfirm(&$order, &$methods, $method_id) {
		parent::onAfterOrderConfirm($order, $methods, $method_id);

		$app = JFactory::getApplication();
		$app->setUserState("option.hsbto", $order);
		$app->setUserState("option.hsbtp", $this->payment_params);
		
		$vars = $order;
		$this->vars = $vars;
		$pvars = $this->payment_params;
		$this->pvars = $pvars;
		$this->pvars->custidtoken = false;
		$this->pvars->tval = $this->getValidation($this->payment_params->publicKey, $order->order_id);
		//var_dump($this->payment_params);
		
		// Initialize the transaction configuration
		require_once 'braintree-php/lib/Braintree.php';
		
		Braintree_Configuration::environment($this->payment_params->environment); // mode
		Braintree_Configuration::merchantId($this->payment_params->merchant_id); // merchant ID
		Braintree_Configuration::publicKey($this->payment_params->publicKey); // public Key
		Braintree_Configuration::privateKey($this->payment_params->privateKey); //private Key
		
		/*
		// If using the vault is enabled and 
		//	if the custom customer id token field exists then
		//		save the customer information at Braintree.
		// If the customer token exists, set the existing token for
		//	use in this transaction.
		$existingCustToken = $this->manageToken->getToken($this->manageToken->custidfieldname, $order->cart->customer->user_id);
		if($this->payment_params->allowstorevault && !$existingCustToken) {
			// Store the customer information and get the new customer id token from Braintree
			$result = Braintree_Customer::create(array(
				'firstName' => $order->cart->billing_address->address_firstname,
				'lastName' => $order->cart->billing_address->address_lastname
			));
			if($result->success) {
				if($this->manageToken->setToken($this->manageToken->custidfieldname, $order->cart->customer->user_id, $result->customer->id)) {
					$this->pvars->custidtoken = $result->customer->id;
				} else {
					$this->pvars->custidtoken = false;
				}
			}
		} 
		
		$app->setUserState("option.hkbtcid", $existingCustToken);
		*/
		
		// If the customer has a payment token then automatically use it for this transaction rather
		//	than asking for payment information again.
		/*
		$custpmttokenname = 'custpmttoken';
		$existingPmtToken = $this->manageToken->getToken($this->manageToken->pymtfieldname, $order->cart->customer->user_id);
		*/
		if(false) { //$this->payment_params->allowstorevault) {
			/*
			if($existingPmtToken) {
				if($existingCustToken) { // This means there is a payment method (default method) for this customer
					// Attempt the payment with a customer id token
					$result = Braintree_Transaction::sale(
						array(
							'customerId' => $existingCustToken,
							'amount' => number_format($this->vars->cart->full_total->prices[0]->price_value_with_tax,2,'.','')
						)
					);
				} else {
					// Attempt the payment without a customer id token
					$result = Braintree_Transaction::sale(
						array(
							'paymentMethodToken' => $existingPmtToken,
							'amount' => number_format($this->vars->cart->full_total->prices[0]->price_value_with_tax,2,'.','')
						)
					);
				}
			} // end of if placed here, but this needs to be designed
			
			$dbOrder = $this->getOrder((int)$order->order_id);
			$this->loadPaymentParams($dbOrder);
			if(empty($this->payment_params)) 
				return false;
			$this->loadOrderData($dbOrder);
			if($this->payment_params->debug) {
				echo print_r($vars,true)."\n\n\n";
				echo print_r($statuses,true)."\n\n\n";
				echo print_r($dbOrder,true)."\n\n\n";
				echo print_r($result,true)."\n\n\n";
			}
			if(empty($dbOrder)) {
				echo "Could not load any order for your notification ".$order->order_id;
				return 'Order unknown';
			}
			$this->payment_params->return_url =  HIKASHOP_LIVE.'index.php?option=com_hikashop&ctrl=checkout&task=after_end&order_id='.$order->order_id.$this->url_itemid;
			
			$viewType = 'end';
			
			if($result->success) {
				$order_status = $this->payment_params->verified_status;
				$this->removeCart = true;
			} elseif($result->transaction) { // transaction failed
				$order_status = $this->payment_params->invalid_status;
			} else { // validation errors
				$order_status = $this->payment_params->invalid_status;
			}
			$history = new StdClass;
			$history->notified = 0;
			$history->data = "Payment was completed via Braintree! Transaction ID: " . $result->transaction->id;
			
			$this->modifyOrder($order->order_id,$order_status,$history,NULL);
			*/
		} else {
			// Use of the vault is not enabled.
			$viewType = 'pay'; // Present the form to collect payment information
			$this->removeCart = true;
		}
		//echo "Ready to get $viewType details<br />";
		return $this->showPage($viewType);
	}
	
	/*
	function onPaymentCompletion($results) {
		echo "Reached the onPaymentCompletion plugin method<br />";
		
		return true;
	}
	*/
	
	function onPaymentNotification(&$statuses)
	{
		$vars = array();
		$data = array();
		$filter = JFilterInput::getInstance();
		foreach($_REQUEST as $key => $value){
			$key = $filter->clean($key);
			$value = JRequest::getString($key);
			$vars[$key]=$value;
		}
		
		$app = JFactory::getApplication();
		$order = $app->getUserState("option.hsbto");
		$payment_params = $app->getUserState("option.hsbtp");
		
		if($vars['tval'] != $this->getValidation($payment_params->publicKey, $vars['order_id'])) {
			echo "Validation failed: Transaction is invalid<br />";
			$email = new stdClass();
			$email->subject = JText::sprintf('INVALID_NOTIFICATION_VALIDATION','Hikashop-Braintree').'invalid response';
			$body = JText::sprintf("Hello,\r\n A payment authorization notification was refused because the response from via the payment server was invalid. The hash received was ".$vars['tval']." while the calculated hash was ".$vars['tval_calculated'].". This typically indicates an attempt to artificially place an order.")."\r\n\r\n".$order_text;
			$email->body = $body;
			
			$this->modifyOrder($vars['order_id'], $payment_params->invalid_status,false,$email);
			
			if($payment_params->debug){
				echo 'invalid transaction validation match'."\n\n\n";
			}
			return 'Invalid notification.';
		}
		
		//jimport('joomla.log.log');
			//JLog::addLogger( array('text_file' => 'braintree_log.php'), JLog::ALL, 'BPP');
		
		$hikashop_order_id = $vars['order_id'];
		$bt_txnid = (isset($vars['transaction_id']) ? $vars['transaction_id'] : '');
			//JLog::add("Transaction_id: ".$bt_txnid, JLog::NOTICE, 'BPP');
		$bt_result_text = $vars['result'];
			//JLog::add("Braintree transaction result: ".$bt_result_text, JLog::NOTICE, 'BPP');
		$bt_result_status = $vars['rstatus'];
		
		$dbOrder = $this->getOrder((int)$hikashop_order_id);
		
		$this->loadPaymentParams($dbOrder);
		if(empty($payment_params))
			return false;
		$this->loadOrderData($dbOrder);
		if($payment_params->debug){
			echo print_r($vars,true)."\n\n\n";
			echo print_r($statuses,true)."\n\n\n";
			echo print_r($dbOrder,true)."\n\n\n";
			echo print_r($payment_params,true)."\n\n\n";
		}
		if(empty($dbOrder)){
			echo "Could not load any order for your notification ".$hikashop_order_id;
			return 'Order unknown';
		}
		$payment_params->return_url =  HIKASHOP_LIVE.'index.php?option=com_hikashop&ctrl=checkout&task=after_end&order_id='.$hikashop_order_id.$this->url_itemid;
		
		if($bt_result_status == 'success') {
			$order_status = $payment_params->verified_status;
			$this->removeCart = true;
		}
		elseif($bt_result_status == 'fail') { $order_status = $payment_params->pending_status; }
		else { $order_status = $payment_params->invalid_status; }
		
		$history = new StdClass;
		$history->notified = 0;
		$history->data = $bt_result_text;
		
		$this->modifyOrder($hikashop_order_id,$order_status,$history,NULL);
		
		//return "Payment for order id: $hikashop_order_id is completed";
		$viewType = 'end';
		return $this->showPage($viewType);
	}
	
	function getValidation($salt, $value) {
		// hash(whirlpool or sha256 or sha512, use secret as salt + public key, use binary (true) hex (false))
		return hash('whirlpool', $salt . ':' . $value, false);
	}
	
	function getPaymentDefaultValues(&$element) {
		$element->payment_name='BrainTree';
		$element->payment_description='You can pay by credit card using this payment method';
		$element->payment_images='MasterCard,VISA,Credit_card,American_Express';

		$element->payment_params->merchant_id='';
		$element->payment_params->publickey='';
		$element->payment_params->privatekey='';
		$element->payment_params->ask_ccv = true;
		$element->payment_params->pending_status='created';
		$element->payment_params->invalid_status='cancelled';
		$element->payment_params->verified_status='confirmed';
	}

}