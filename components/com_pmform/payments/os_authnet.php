<?php
/**
 * @version		3.0
 * @package		Joomla
 * @subpackage	Payment Form
 * @author  Tuan Pham Ngoc
 * @copyright	Copyright (C) 2010 Ossolution Team
 * @license		GNU/GPL, see LICENSE.php
 */
defined('_JEXEC') or die ;

class os_authnet extends os_payment {
	var $login    = "";
    var $transkey = "";
    var $params   = array();
    var $results  = array();
    var $approved = false;
    var $declined = false;
    var $error    = true;
    var $mode;
    var $fields;
    var $response;
    var $showReasonResponseCode = 0 ;
    var $showReasonResponseText = 0 ;
    var $x_description = null ;
    /**
     * Constructor function
     *
     * @param object $config
     */    
    function os_authnet($params)
    {
    	parent::setName('os_authnet');    	
    	parent::os_payment();    	
    	parent::setCreditCard(true);
    	parent::setCardType(false);
    	parent::setCardCvv(true);
    	parent::setCardHolderName(false);      	    	    
        $this->mode = $params->get('authnet_mode', 0) ;        
        $this->login = $params->get('x_login');
        $this->transkey = $params->get('x_tran_key');
        $this->x_description = $params->get('x_description');
        $this->showReasonResponseCode = $params->get('show_reason_response_code', 0);
        $this->showReasonResponseText = $params->get('show_reason_response_text', 0);
     	if ($this->mode)
        {
        	$this->url = "https://secure.authorize.net/gateway/transact.dll";              
        }
        else
        {
            $this->url = "https://test.authorize.net/gateway/transact.dll";    
        }       
        $this->params['x_delim_data']     = "TRUE";
        $this->params['x_delim_char']     = "|";
        $this->params['x_relay_response'] = "FALSE";
        $this->params['x_url']            = "FALSE";
        $this->params['x_version']        = "3.1";
        $this->params['x_method']         = "CC";
        $this->params['x_type']           = "AUTH_CAPTURE";
        $this->params['x_login']          = $this->login;
        $this->params['x_tran_key']       = $this->transkey;
        $this->params['x_invoice_num']	  = $this->_invoiceNumber();	                    
    }
    /**
     * Process payment with the posted data
     *
     * @param array $data array
     * @return void
     */
    function processPayment($row, $data)
    {    	
    	$mainframe = JFactory::getApplication() ;
    	$Itemid    = JRequest::getInt('Itemid', 0);    	 	
		$data['x_description'] = $data['item_name'];
		if (strlen(trim($this->x_description))) {
			$data['x_description'] = $this->x_description ;
		} else {
			$data['x_description'] = $data['item_name'] ;
		}
		$data['x_exp_date'] = str_pad($data['exp_month'], 2, '0', STR_PAD_LEFT) .'/'.substr($data['exp_year'], 2, 2) ;
		$data['amount']  = round($data['amount'], 2) ;
    	$retries = 2;
    	$testing = $this->mode ? "FALSE":"TRUE";  
    	$cc_num = $this->_ccNumber($data["x_card_num"]);      	
    	//Set more parameters for the payment gateway to user
    	$authnetValues				= array
		(										
		//Payment information
		 	"x_test_request"		=> $testing,
			"x_card_num"			=> $data['x_card_num'],
			"x_exp_date"			=> $data['x_exp_date'],
			"x_card_code"			=> $data['x_card_code'],
			"x_description"			=> $data['x_description'],	
			"x_amount"				=>  $data['amount'],		    
		//  ###########3  CUSTOMER DETAILS  ################3
			"x_first_name"			=>$data['first_name'],
			"x_last_name"			=> $data['last_name'],		
			"x_address"				=> $data['address'],
			"x_city"				=> $data['city'],
			"x_state"				=> $data['state'],		
			"x_phone"				=> $data['phone'],		
			"x_zip"					=> $data['zip'],		
			"x_company"				=> $data['organization'],	
			"x_email"				=> $data['email'],
			"x_country"				=>  $data['country'] , 
		//  ###########3  SHIPPING DETAILS  ################3
			"x_ship_to_first_name" 	=> $data['first_name'],
			"x_ship_to_last_name" 	=> $data['last_name'],
			"x_ship_to_address"  	=> $data['address'],
			"x_ship_to_city" 		=> $data['city'],
			"x_ship_to_state" 		=> $data['state'],
			"x_ship_to_country" 	=> $data['country'],
			"x_ship_to_zip" 		=> $data['zip'],
			"x_ship_to_phone" 		=> $data['phone'],
			"x_ship_to_email" 		=> $data['email'],
		//  ###########3  MERCHANT REQUIRED DETAILS  ################3
			"cc_number" 			=> $cc_num ,
			"cc_expdate" 			=> $data['x_exp_date'] ,
			"cc_emailid" 			=> $data['email']		
		);    	    	    						
		foreach ($authnetValues as $key=>$value){
			$this->setParameter($key,$value);
		}							
        $this->_prepareParameters();
        $ch = curl_init($this->url);
        $count = 0;                        
        while ($count < $retries)
        {
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, rtrim($this->fields, "& "));                                   
            //Uncomment this line if you get no response from payment gateway
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
            //If you are using goodaddy hosting, please uncomment the two below lines                        	
            //curl_setopt ($ch, CURLOPT_PROXYTYPE, CURLPROXY_HTTP);
			//curl_setopt ($ch, CURLOPT_PROXY,"http://proxy.shr.secureserver.net:3128");           
            $this->response = curl_exec($ch);
            $this->_parseResults();
            if ($this->getResultResponseFull() == "Approved")
            {
                $this->approved = true;
                $this->declined = false;
                $this->error    = false;
                break;
            }
            else if ($this->getResultResponseFull() == "Declined")
            {
                $this->approved = false;
                $this->declined = true;
                $this->error    = false;
                break;
            }
            $count++;
        }
        curl_close($ch);        
        if($this->approved){  
        	$config  = PMFormHelper::getConfig() ;
        	$row->transaction_id = $this->getTransactionID() ;        	
        	$row->payment_date =  date('Y-m-d H:i:s');
			$row->published = true;
			$row->store();						
			PMFormHelper::sendEmails($row, $config);
			JPluginHelper::importPlugin( 'pmform' );
			$dispatcher = JDispatcher::getInstance();
			$dispatcher->trigger( 'onAfterPaymentSuccess', array($row));
			$mainframe->redirect(JRoute::_('index.php?option=com_pmform&view=complete&id='.$row->id.'&Itemid='.$Itemid, false));      	        	        	        
        	return true;
        }
        else{
        	$_SESSION['reason'] = $this->getResponseText() ;        
        	if ($this->showReasonResponseCode) {
        		$_SESSION['response_code'] = $this->getReasonResponseCode() ;	        
        	}
        	if ($this->showReasonResponseText) {
        		$_SESSION['response_text'] = $this->getReasonResponseText() ;
        	}
        	$mainframe->redirect(JRoute::_('index.php?option=com_pmform&view=failure&id='.$row->id.'&Itemid='.$Itemid, false));        	       	        	        	
        	return false;
        }        
    }
    function _parseResults()
    {
        $this->results = explode("|", $this->response);
    }
    function setParameter($param, $value)
    {
        $param                = trim($param);
        $value                = trim($value);
        $this->params[$param] = $value;
    }  
    function _prepareParameters()
    {
        foreach($this->params as $key => $value)
        {
            $this->fields .= "$key=" . urlencode($value) . "&";
        }
    }
    function getResultResponse()
    {
        return $this->results[0];
    }
    function getResultResponseFull()
    {
        $response = array("", "Approved", "Declined", "Error");
        return $response[$this->results[0]];
    }
    function getResponseText()
    {
        return $this->results[3];
    }
    function getTransactionID()
    {
        return $this->results[6];
    }
    function getResultResponseText()
    {
    	$res="";
    	switch($this->results[0])
    	{
    		case 1:
    			$res="This transaction has been approved";
    			break;
    		case 2:
    			$res="This transaction has been declined";
    			break;
    		case 3:
    			$res="There has been an error processing this transaction";
    			break;
    		case 4:
    			$res="This transaction is being held for review";
    			break;
    		default:
    			$res="Unknown the transaction status text";
    			break;		    				    			
    	}
    	return $res;    	
    }    
    /**
     * Get reason response code
     *
     * @return string
     */
    function getReasonResponseCode() {
    	return $this->results[2] ;	
    }
    /**
     * Get reason response text
     *
     * @return string
     */        
    function getReasonResponseText() {     
	     $code = $this->results[2] ;
	     switch ($code) {
	      case 1 :
	       		$text = JText::_('This transaction has been approved.');
	       		break ;   
	       case ($code >=2 && ($code <=4)) :
	      		$text = JText::_('This transaction has been declined.');
	      		break ; 
	       case 5 :
	     		$text = JText::_('A valid amount is required.');
	      		break ; 
	       case 6 :
	      		$text = JText::_('The credit card number is invalid.');
	      		break ; 
	       case 7 :
	      		$text = JText::_('The credit card expiration date is invalid.');
	       		break ; 
	       case 8 :
		   		$text = JText::_('The credit card has expired.');
		   		break ; 
	       case 9 :
		        $text = JText::_('The ABA code is invalid.');
		        break ; 
	       case 10 :
		        $text = JText::_('The account number is invalid.');
		        break ; 
	       case 11 :
		        $text = JText::_('A duplicate transaction has been submitted.');
		        break ;   
	       case 11 :
		        $text = JText::_('A duplicate transaction has been submitted.');
		        break ;    
	       case 12 :
	       		$text = JText::_('An authorization code is required but not present.');
	       		break;
	       case 13 :
	       		$text = JText::_('The merchant API Login ID is invalid or the account is inactive.');
	       		break;  
	       case 14 :
	       		$text = JText::_('The Referrer or Relay Response URL is invalid.');
	            break;
	       case 15 :
	       		$text = JText::_('The transaction ID is invalid.');    
	       		break;
	       case 16 :
	       		$text = JText::_('The transaction was not found.');
	       		break;
	       case 17 :
	       		$text = JText::_('The merchant does not accept this type of credit card.');
	       		break;
	       case 18 :
	       		$text = JText::_('ACH transactions are not accepted by this merchant.');
	       		break;
	       case ($code >=19 && ($code <=23)) : 
	       		$text= JText::_('An error occurred during processing. Please try again in 5 minutes.');
	       		break;
	       case 24 :
	       		$text = JText::_('The Nova Bank Number or Terminal ID is incorrect. Call Merchant Service Provider.');
	       		break;
	       case 25 :
	       case 26 :
	       		$text = JText::_('An error occurred during processing. Please try again in 5 minutes.');
	       		break;
	       	case 27 :
	       		$text = JText::_('The transaction resulted in an AVS mismatch. The address provided does not match billing address of cardholder.');
	       		break;
	       	case 28 :
	       		$text = JText::_('The merchant does not accept this type of credit card.');
	       		break;
	       	case 29 :
	       		$text = JText::_('The Paymentech identification numbers are incorrect. Call Merchant Service Provider.');
	       		break;
	       	case 30 :
	       		$text = JText::_('The configuration with the processor is invalid. Call Merchant Service Provider.');
	       		break; 
	      	case 31 :
	       		$text = JText::_('The FDC Merchant ID or Terminal ID is incorrect. Call Merchant Service Provider.');
	       		break; 
	       	case 32 :
	       		$text = JText::_('This reason code is reserved or not applicable to this API.');
	       		break; 
	       	case 33 :
	       		$text = JText::_('FIELD cannot be left blank.');
	       		break; 
	       	case 34 :
	       		$text = JText::_('The VITAL identification numbers are incorrect. Call Merchant Service Provider.');
	       		break; 
	       	case 35 :
	       		$text = JText::_('An error occurred during processing. Call Merchant Service Provider.');
	       		break; 
	       	case 36 :
	       		$text = JText::_('The authorization was approved, but settlement failed.');
	       		break; 
	       	case 37 :
	       		$text = JText::_('The credit card number is invalid.');
	       		break; 
	       	case 38 :
	       		$text = JText::_('The Global Payment System identification numbers are incorrect. Call Merchant Service Provider.');
	       		break; 
	       	case 40 :
	       		$text = JText::_('This transaction must be encrypted.');
	       		break; 
	       	case 41 :
	       		$text = JText::_('This transaction has been declined.');
	       		break; 
	       	case 43 :
	       		$text = JText::_('The merchant was incorrectly set up at the processor. Call your Merchant Service Provider.');
	       		break; 
	       	case 44 :
	       	case 45 :
	       	case 65 :
	       	case 141 :
	       	case 145 :
	       	case 165 :       	
	       		$text = JText::_('This transaction has been declined.');
	       		break; 
	       	case 46 :
	       		$text = JText::_('Your session has expired or does not exist. You must log in to continue working.');
	       		break; 
	       	case 47 :
	       		$text = JText::_('The amount requested for settlement may not be greater than the original amount authorized.');
	       		break; 
	       	case 48 :
	       		$text = JText::_('This processor does not accept partial reversals.');
	       		break; 
	       	case 49 :
	       		$text = JText::_('A transaction amount greater than $[amount] will not be accepted.');
	       		break; 
	       	case 50 :
	       		$text = JText::_('This transaction is awaiting settlement and cannot be refunded.');
	       		break; 
	       	case 51 :
	       		$text = JText::_('The sum of all credits against this transaction is greater than the original transaction amount.');
	       		break; 
	       	case 52 :
	       		$text = JText::_('The transaction was authorized, but the client could not be notified; the transaction will not be settled.');
	       		break;
	       	case 53 :
	       		$text = JText::_('The transaction type was invalid for ACH transactions.');
	       		break; 	
	       	case 54 :
	       		$text = JText::_('The referenced transaction does not meet the criteria for issuing a credit.');
	       		break; 	
	       	case 55 :
	       		$text = JText::_('The sum of credits against the referenced transaction would exceed the original debit amount.');
	       		break; 	
	       	case 56 :
	       		$text = JText::_('This merchant accepts ACH transactions only; no credit card transactions are accepted.');
	       		break; 	
	       	case ($code >=57 && ($code <=63)) : 
	       		$text = JText::_('An error occurred in processing. Please try again in 5 minutes.');
	       		break; 	
	       	case 66 :
	       		$text = JText::_('This transaction cannot be accepted for processing.');
	       		break; 	
	       	case 68 :
	       		$text = JText::_('The version parameter is invalid.');
	       		break; 	
	       	case 69 :
	       		$text = JText::_('The transaction type is invalid.');
	       		break; 	
	       	case 70 :
	       		$text = JText::_('The transaction method is invalid.');
	       		break; 	
	       	case 71 :
	       		$text = JText::_('The bank account type is invalid.');
	       		break; 	
	       	case 72 :
	       		$text = JText::_('The authorization code is invalid.');
	       		break; 	
	       	case 73 :
	       		$text = JText::_('The drivers license date of birth is invalid.');
	       		break; 	
	       	case 74 :
	       		$text = JText::_('The duty amount is invalid.');
	       		break; 	
	       	case 75 :
	       		$text = JText::_('The freight amount is invalid.');
	       		break; 	
	       	case 76 :
	       		$text = JText::_('The tax amount is invalid.');
	       		break; 	
	       	case 77 :
	       		$text = JText::_('The SSN or tax ID is invalid.');
	       		break; 	
	       	case 78 :
	       		$text = JText::_('The Card Code (CVV2/CVC2/CID) is invalid.');
	       		break; 	
	       	case 79 :
	       		$text = JText::_('The drivers license number is invalid.');
	       		break; 	
	       	case 80 :
	       		$text = JText::_('The drivers license state is invalid.');
	       		break; 	
	       	case 81 :
	       		$text = JText::_('The requested form type is invalid.');
	       		break; 	
	       	case 82 :
	       		$text = JText::_('Scripts are only supported in version 2.5.');
	       		break; 	
	       	case 83 :
	       		$text = JText::_('The requested script is either invalid or no longer supported.');
	       		break; 
	       	case 185 :	
	       	case ($code >=84 && ($code <=90)) :
	       		$text = JText::_('This reason code is reserved or not applicable to this API.');
	       		break; 	
	       	case 91 :
	       		$text = JText::_('Version 2.5 is no longer supported.');
	       		break; 	
	       	case 92 :
	       		$text = JText::_('The gateway no longer supports the requested method of integration.');
	       		break; 
	       	case 103 :	
	       	case ($code >=97 && ($code <=99)) : 
	       	    $text = JText::_('This transaction cannot be accepted');
	       		break; 	
	       	case 100 :
	       		$text = JText::_('The eCheck.Net type is invalid.');
	       		break; 	
	       	case 101 :
	       		$text = JText::_('The given name on the account and/or the account type does not match the actual account.');
	       		break; 	
	       	case 102 :
	       		$text = JText::_('This request cannot be accepted.');
	       		break; 	
	       	case ($code >=104 && ($code <=110)) :
	       		$text = JText::_('This transaction is currently under review.');
	       		break; 	
	       	case 116 :
	       		$text = JText::_('The authentication indicator is invalid.');
	       		break; 	
	       	case 117 :
	       		$text = JText::_('The cardholder authentication value is invalid.');
	       		break; 	
	       	case 118 :
	       		$text = JText::_('The combination of authentication indicator and cardholder authentication value is invalid');
	       		break; 
	       	case 119 :
	       		$text = JText::_('Transactions having cardholder authentication values cannot be marked as recurring.');
	       		break;
	       	case 180 :
	       	case 181 :
	       	case 261 :
	       	case ($code >=120 && ($code <=122)) : 
	       		$text = JText::_('An error occurred during processing. Please try again.');
	       		break;	
	       	case 123 :
	       		$text = JText::_('This account has not been given the permission(s) required for this request.');
	       		break;		 	                            
	       	case 127 :
	       		$text = JText::_('The transaction resulted in an AVS mismatch. The address provided does not match billing address of cardholder.');
	       		break;
	       	case 128 :
	       		$text = JText::_('This transaction cannot be processed.');
	       		break;
	       	case 130 :
	       		$text = JText::_('This payment gateway account has been closed.');
	       		break;
	       	case 131 :
	       	case 132 :
	       		$text = JText::_('This transaction cannot be accepted at this time.');
	       		break;
	       	case 152 :
	       		$text = JText::_('The transaction was authorized, but the client could not be notified; the transaction will not be settled.');
	       		break;
	       	case ($code >=170 && ($code <=173)) :
	       		$text = JText::_('An error occurred during processing. Please contact the merchant.');
	       		break;
	       	case 174 :
	       		$text = JText::_('The transaction type is invalid. Please contact the merchant.');
	       		break;
	       	case 175 :
	       		$text = JText::_('The processor does not allow voiding of credits.');
	       		break;
	       	case 193 :
	       		$text = JText::_('The transaction is currently under review.');
	       		break;
	       	case 250 :
	       	case 251 :
	       	case ($code >=200 && ($code <=224)) :
	       		$text = JText::_('This transaction has been declined.');
	       		break;
	       	case 243 :
	       		$text = JText::_('Recurring billing is not allowed for this eCheck.Net type.');
	       		break;
	       	case 244 :
	       		$text = JText::_('This eCheck.Net type is not allowed for this Bank Account Type.');
	       		break;
	       	case 245 :
	       		$text = JText::_('This eCheck.Net type is not allowed when using the payment gateway hosted payment form.');
	       		break;
	       	case 246 :
	       	case 247 :
	       		$text = JText::_('This eCheck.Net type is not allowed.');
	       		break;
	       	case 252 :
	       	case 253 :
	       		$text = JText::_('Your order has been received. Thank you for your business!');
	       		break;
	       	case 254 :
	       		$text = JText::_('Your transaction has been declined.');
	       		break;
	       	case 270 :
	       	case 272 :
	       		$text = JText::_('The line item [item number] is invalid.');
	       		break;
	       	case 271 :
	       		$text = JText::_('The number of line items submitted is not allowed. A maximum of 30 line items can be submitted.');
	       		break;
	       	case 288 :
	       		$text = JText::_('Merchant is not registered as a Cardholder Authentication participant. This transaction cannot be accepted. ');
	       		break;
	       	case 289 :
	       		$text = JText::_('This processor does not accept zero dollar authorization for this card type.');
	       		break;
	       	case 290 :
	       		$text = JText::_('One or more required AVS values for zero dollar authorization were not submitted.');
	       		break;
	       	case 295 :
	       		$text = JText::_('The amount of this request was only partially approved on the given prepaid card. Additional payments are required to complete the balance of this transaction.');
	       		break;
	       	case 296 :
	       		$text = JText::_('The specified SplitTenderId is not valid');
	       		break;
	       	case 297 :
	       		$text = JText::_('A transaction ID and a split tender ID cannot both be used in a single transaction request. ');
	       		break;
	       	case 300 :
	       		$text = JText::_('The device ID is invalid.');
	       		break;
	       	case 301 :
	       		$text = JText::_('The device batch ID is invalid.');
	       		break;
	       	case 302 :
	       		$text = JText::_('The reversal flag is invalid.'); 	
	       		break;
	       	case 303 :
	       		$text = JText::_('The device batch is full. Please close the batch.');
	       		break;
	       	case 304 :
	       		$text = JText::_('The original transaction is in a closed batch.');
	       		break;
	       	case 305 :
	       		$text = JText::_('The merchant is configured for auto-close.');
	       		break;
	       	case 306 :
	       		$text = JText::_('The batch is already closed.');
	       		break;
	       	case 307 :
	       		$text = JText::_('The reversal was processed successfully.');
	       		break;
	       	case 308 :
	       		$text = JText::_('Original transaction for reversal not found.');
	       		break;
	       	case 309 :
	       		$text = JText::_('The device has been disabled.');
	       		break;
	       	case 310 :
	       		$text = JText::_('This transaction has already been voided.');
	       		break;
	       	case 311 :
	       		$text = JText::_('This transaction has already been captured');
	       		break;
	       	case 315 :
	       		$text = JText::_('The credit card number is invalid.');
	       		break;
	       	case 316 :
	       		$text = JText::_('The credit card expiration date is invalid.');
	       		break;
	       	case 317 :
	       		$text = JText::_('The credit card has expired.');
	       		break;
	       	case 318 :
	       		$text = JText::_('A duplicate transaction has been submitted.');
	       		break;
	       	case 319 :
	       		$text = JText::_('The transaction cannot be found.');
	       		break;
			default:
	    		$text ="Unknown the transaction status text";
	    		break;	
	    }
     	return $text ;
    }	       
	/*
     * Helper function to generate invoice number
     *
     * @param string $prefix
     * @param int $length
     * @return string
     */    
    function _invoiceNumber($prefix="DC-",$length=6)
    {
    	$chars = "0123456789";
    	$invoiceNumber="";
		srand((double)microtime()*1000000);
		for($i=0; $i<$length; $i++)
	    {	
	   		$invoiceNumber .= $chars[rand()%strlen($chars)];	
	    }
		$invoiceNumber = $prefix.$invoiceNumber;
		return $invoiceNumber;
    }
    /**
     * Generate credit card number
     *
     * @param string $card_num
     * @return string
     */
    function _ccNumber($card_num){
    	$num=strlen($card_num);
    	$cc_num="";
    	for($i=0;$i<=$num-5;$i++)
		{
			$cc_num.="x";
		}
		$cc_num.="-";
		$cc_num.=substr($card_num,$num-4,4);
		return $cc_num;
    }            
}