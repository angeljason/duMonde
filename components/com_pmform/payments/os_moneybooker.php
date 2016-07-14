<?php
/**
 * @version		1.0
 * @package		Joomla
 * @subpackage	Payment Form
 * @author  Tuan Pham Ngoc
 * @copyright	Copyright (C) 2010 Ossolution Team
 * @license		GNU/GPL, see LICENSE.php
 */
class os_moneybooker extends os_payment {
	/**
	 * Moneybooker URL
	 *
	 * @var string
	 */
	var $_url = null;	
	/**
	 * Containing all parameters will be submitted to moneybooker server
	 *
	 * @var array
	 */		
	var $_params = array();
	/**
	 * Constructor function
	 *
	 * @return os_moneybooker
	 */
	function os_moneybooker($params) {
		parent::setName('os_moneybooker');
		parent::os_payment() ;
		parent::os_payment() ;
		parent::setCreditCard(false);
		parent::setCardType(false);
		parent::setCardCvv(false);
		parent::setCardHolderName(false);
		$this->ipn_log_file = JPATH_COMPONENT.'/ipn_logs.txt';
		$this->_url = 'https://www.moneybookers.com/app/payment.pl';
		$this->setParam('pay_to_email', $params->get('mb_merchant_email', ''));
		$this->setParam('currency', $params->get('mb_currency', 'USD'));
		$this->setParam('language', 'EN');	
	}
	/**
	 * Set the parameter 
	 *
	 * @param string $name
	 * @param string $value
	 */		
	function setParam($name, $val) {
		$this->_params[$name] = $val;	
	}
	/**
	 * Setup an array of parameter
	 *
	 * @param array $params
	 */
	function setParams($params) {
		foreach ($params as $key=>$val) {
			$this->_params[$key] = $val;		
		}
	}
	/**
	 * Process Payment 
	 *
	 */
	function processPayment($row, $data) {
		$Itemid = JRequest::getInt('Itemid');
		$siteUrl = JURI::base() ;
		$this->setParam('transaction_id', $row->transaction_id);			
		$this->setParam('amount', $row->amount);	 		 					
		$this->setParam('merchant_fields', 'id');		
		$this->setParam('id', $row->id);		
		$this->setParam('return_url', $siteUrl.'index.php?option=com_pmform&view=complete&id='.$row->id.'&Itemid='.$Itemid);
		$this->setParam('cancel_url', $siteUrl.'index.php?option=com_pmform&task=cancel&id='.$row->id.'&Itemid='.$Itemid);							
		$this->setParam('status_url', $siteUrl.'index.php?option=com_pmform&task=payment_confirm&payment_method=os_moneybooker');
		$this->setParam('firstname', $data['first_name']);
		$this->setParam('lastname', $data['last_name']);
		$this->setParam('address', $data['address']);
		$this->setParam('address2', $data['address2']); 
		$this->setParam('phone_number', $row->phone);
		$this->setParam('postal_code', $row->zip);
		$this->setParam('city', $row->city);
		$this->setParam('state', $row->state);
		$this->setParam('country', $row->country);							
		$this->submitPost();	 
	}
	/**
	 * Submit post to moneybooker server
	 *
	 */
	function submitPost() {
	?>
		<div class="contentheading"><?php echo  JText::_('OS_WAIT_MONEYBOOKER'); ?></div>
		<form method="post" action="<?php echo $this->_url; ?>" name="os_form" id="os_form">
			<?php
				foreach ($this->_params as $key=>$val) {
					echo '<input type="hidden" name="'.$key.'" value="'.$val.'" />';
					echo "\n";	
				}
			?>
			<script type="text/javascript">
				function redirect() {
					document.os_form.submit();
				}
				setTimeout('redirect()',5000);
			</script>
		</form>	
	<?php				
	}
	/**
	 * Validate the data submited from moneybooker server to our server
	 *
	 * @param array $data
	 * @param object $config
	 */
	function _validate($data, $params) {		
		$val =  $data['merchant_id'].
				$data['transaction_id'].
				strtoupper(md5($params->get('mb_secret_word'))).
				$data['mb_amount'].
				$data['mb_currency'].
				$data['status']		
				;
		$val = strtoupper(md5($val));
		if ($val != $data['md5sig'])
			return false;
		else 	
			return true;					
	}	
	/**
	 * Confirm payment process 
	 * @return boolean : true if success, otherwise return false
	 */
	function verifyPayment() {
		$this->log_ipn_results();
		$config = PmFormHelper::getConfig() ;
		$db = JFactory::getDbo() ;
		$data =  $_REQUEST;
		$sql = 'SELECT params FROM #__pf_payment_plugins WHERE name="os_moneybooker"';
		$db->setQuery($sql) ;
		$params =  $db->loadResult() ;
		$params = new JRegistry($params) ;
		//$ret = $this->_validate($data, $params);
		$ret = true ;
		$id = $data['id'];		
		if ($ret) 
		{			
   			$row = JTable::getInstance('pmform', 'Payment');
   			$row->load($id);
   			$row->transaction_id = $data['mb_transaction_id']  ;
   			$row->payment_date =  date('Y-m-d H:i:s');
   			$row->published = true;
   			$row->store();

			//Hot fix for this issue on this special site
			$query = $db->getQuery(true);
			$query->update('#__pf_payments')
				->set('published=1')
				->set('payment_date='.$db->quote(date('Y-m-d H:i:s')))
				->set('transaction_id='.$db->quote($data['mb_transaction_id']))
				->where('id='.(int)$row->id);
			$db->setQuery($query);
			$db->execute();
   			PmFormHelper::sendEmails($row, $config);	   			
			JPluginHelper::importPlugin( 'pmform' );
			$dispatcher = JDispatcher::getInstance();
			$dispatcher->trigger( 'onAfterPaymentSuccess', array($row));
			return true;
		} 
		else 
		{
			return false;
		}		
	}


	function log_ipn_results()
	{
		$text = '['.date('m/d/Y g:i A').'] - ';
		$text .= "IPN POST Vars from Paypal:\n";
		foreach ($_REQUEST as $key=>$value) {
			$text .= "$key=$value, ";
		}
		$fp=fopen($this->ipn_log_file,'a');
		fwrite($fp, $text . "\n\n");
		fclose($fp);  // close file
	}
}