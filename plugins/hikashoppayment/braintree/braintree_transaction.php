<?php
/**
 * @package	HikaShop BrainTree Payment Plugin for Joomla!
 * @version	1.0
 * @author	3by400.com
 * @copyright	(C) 2014 3by400, Inc. All rights reserved.
 * @license	GNU/GPLv3 http://www.gnu.org/licenses/gpl-3.0.html
 */

//include BrainTree library
require_once 'braintree-php/lib/Braintree.php';

//include merchant ID and Keys
Braintree_Configuration::environment($_POST["btenv"]); // mode
Braintree_Configuration::merchantId($_POST["btmid"]); // merchant ID
Braintree_Configuration::publicKey($_POST["btpuk"]); // public Key
Braintree_Configuration::privateKey($_POST["btprk"]); //private Key

// Advanced handling for vault features
$useVault = (isset($_POST['st_vlt']) ? $_POST['st_vlt'] : false);
$custId = (isset($_POST['cid']) ? $_POST['cid'] : "");
$custIdToken = (isset($_POST['cidt']) ? $_POST['cidt'] : "");

// The Braintree_Transaction::sale is what performs the payment transaction
$result = Braintree_Transaction::sale(array(
	'amount' => $_POST['oamt'],
 	'orderId' => $_POST['oid'],
 	'creditCard' => array(
    'number' => $_POST['number'],
    'cvv' => $_POST['cvv'],
    'expirationMonth' => $_POST['month'],
    'expirationYear' => $_POST['year'],
    'cardholderName' => $_POST['chn'] ),
	'customer' => array(
  	'firstName' => $_POST['orfn'],
   	'lastName' => $_POST['orln']/*,
   	'id' => $_POST['cid']*/ ),
   /*'customerId' => $_POST['cid'],*/
  'billing' => array(
  	'firstName' => $_POST['bfn'],
  	'lastName' => $_POST['bln'],
  	'streetAddress' => $_POST['bstr'],
  	'extendedAddress' => $_POST['bstrx'],
  	'locality' => $_POST['bloc'],
  	'region' => $_POST['breg'],
  	'postalCode' => $_POST['bpc'],
  	'countryCodeAlpha2' => $_POST['bcc2'] ),
  'shipping' => array(
  	'firstName' => $_POST['sfn'],
  	'lastName' => $_POST['sln'],
  	'streetAddress' => $_POST['sstr'],
  	'extendedAddress' => $_POST['sstrx'],
  	'locality' => $_POST['sloc'],
  	'region' => $_POST['sreg'],
  	'postalCode' => $_POST['spc'],
  	'countryCodeAlpha2' => $_POST['scc2'] ),
  "options" => array(
  	"submitForSettlement" => $_POST["psettle"],
		"storeInVaultOnSuccess" => $_POST["st_vlt"] 
  ))
);

// The below code will define the 'output' that replaces the request form in the browser
echo '<div id="btransaction">'; // define the response block
if ($result->success) {
    echo('<div id="btresult" class="success">'.$_POST['bsucc'].' Your order is complete.  Your transaction ID is ' . $result->transaction->id. '</div>');
    
    echo('<div style="display:none" id="tids" class="'.$result->transaction->id.'">Success</div>');
    echo('<div style="display:none" id="oids" class="'.$result->transaction->orderId.'">Order Completed</div>');
    echo('<div style="display:none" id="hoid" class="'.$_POST['oid'].'">Store Order</div>');
    echo('<div style="display:none" id="test1" class="'.print_r($stateOrder).'">Order state</div>');
    
    echo('<div style="display:none" id="vid" class="'.$result->transaction->customerDetails->id.'">Cid</div>');
    echo('<div style="display:none" id="vtkn" class="'.$result->transaction->creditCardDetails->token.'">Ptkn</div>');
    echo('<div style="display:none" id="tval" class="'.$_POST['tval'].'">Tval</div>');
				
} else if ($result->transaction) {
    echo '<div id="btresult" class="fail">'.$_POST['bfail'].' Error: '.$result->message.'<br /> Code: '.$result->transaction->processorResponseCode.'</div>';
    echo('<div style="display:none" id="hoid" class="'.$_POST['oid'].'">Store Order</div>');
    echo('<div style="display:none" id="tval" class="'.$_POST['tval'].'">Tval</div>');
        
    // Set no tokens. With a failed transaction no idea what's wrong.
} else {
    echo '<div id="btresult" class="validation_errors">Validation errors:<br/>';
    foreach (($result->errors->deepAll()) as $error) {
        echo("- " . $error->message . "<br/>");
    }
    echo '</div>';
    echo('<div style="display:none" id="hoid" class="'.$_POST['oid'].'">Store Order</div>');
    echo('<div style="display:none" id="tval" class="'.$_POST['tval'].'">Tval</div>');
    
    // Set no tokens. With validation errors, we'd have to parse the errors to qualify saving a token
}
echo '</div>';

?>