<?php
/**
 * @package	HikaShop BrainTree Payment Plugin for Joomla!
 * @version	1.0
 * @author	3by400.com
 * @copyright	(C) 2014 3by400, Inc. All rights reserved.
 * @license	GNU/GPLv3 http://www.gnu.org/licenses/gpl-3.0.html
 */
defined('_JEXEC') or die('Restricted access');

$language = JFactory::getLanguage();
$language->load('plg_hikashoppayment_braintree',JPATH_ADMINISTRATOR);
/*
echo "<h2>Order array</h2>";
echo "<pre>";
var_dump( $this->vars->order );
echo "</pre><hr>";
echo "<h2>Cart array</h2>";
echo "<pre>";
var_dump( $this->vars->cart );
echo "</pre><hr>";
echo "<h2>Plugin Parameters array</h2>";
echo "<pre>";
var_dump( $this->pvars );
echo "</pre><hr>";
echo "<h2>Cart array</h2>";
*/
?>

<div class="hikashop_braintree_pay" id="hikashop_braintree_pay">
	<div id="btransaction">
  	<form action="<?php echo HIKASHOP_LIVE . 'plugins/hikashoppayment/braintree/braintree_transaction.php'; ?>" method="POST" id="hikashop-braintree-payment-form">
      <h2>Credit Card Information</h2>
      <p>
        <label>Card Number</label>
        <input type="text" size="20" autocomplete="off" data-encrypted-name="number" />
      </p>
      <p>
      	<?php if($this->pvars->ask_ccv) : ?>
	        <label>CVV</label>
  	      <input type="text" size="4" autocomplete="off" data-encrypted-name="cvv" />
  	     <?php else : ?>
  	     	<input type="hidden" data-encrypted-name="cvv" value="" />
  	     <?php endif; ?>
      </p>
      <p>
        <label>Expiration (MM/YYYY)</label>
        <input type="text" size="2" data-encrypted-name="month" /> / <input type="text" size="4" data-encrypted-name="year" />
      </p>
      <p>
      <?php if(false) : /*if($this->pvars->allowstorevault) : */?>
      	<label>Would you like to save this Credit Card for future transactions?</label>
      	<input type="checkbox" name="st_vlt" value="true" checked="true"/>
      <?php else : ?>
      	<input type="hidden" name="st_vlt" value="false" />
      <?php endif; ?>
      </p>
      <input type="hidden" name="abatpm" value="true" />
      <input id="hikashop_braintree_button" type="submit" class="btn btn-primary submit" value="<?php echo JText::_('PAY_NOW');?>" name="" alt="<?php echo JText::_('PAY_NOW');?>" />
	  	<input type="hidden" name="oid" value="<?php echo $this->vars->order_id ?>" />
	  	<input type="hidden" name="oamt" value="<?php echo number_format($this->vars->cart->full_total->prices[0]->price_value_with_tax,2,'.',''); ?>" />
	  	<input type="hidden" name="btenv" value="<?php echo $this->pvars->environment; ?>" />
	  	<input type="hidden" name="btmid" value="<?php echo $this->pvars->merchant_id; ?>" />
	  	<input type="hidden" name="btpuk" value="<?php echo $this->pvars->publicKey; ?>" />
	  	<input type="hidden" name="btprk" value="<?php echo $this->pvars->privateKey; ?>" />
	  	<input type="hidden" name="psettle" value="<?php echo $this->pvars->settle; ?>" />
	  	<input type="hidden" name="bfn" value="<?php echo $this->vars->cart->billing_address->address_firstname; ?>" />
	  	<input type="hidden" name="bln" value="<?php echo $this->vars->cart->billing_address->address_lastname; ?>" />
	  	<input type="hidden" name="bstr" value="<?php echo $this->vars->cart->billing_address->address_street; ?>" />
	  	<input type="hidden" name="bstrx" value="<?php echo $this->vars->cart->billing_address->address_street2; ?>" />
	  	<input type="hidden" name="bloc" value="<?php echo $this->vars->cart->billing_address->address_city; ?>" />
	  	<input type="hidden" name="breg" value="<?php echo $this->vars->cart->billing_address->address_state->zone_code_3; ?>" />
	  	<input type="hidden" name="bpc" value="<?php echo $this->vars->cart->billing_address->address_post_code; ?>" />
	  	<input type="hidden" name="bcc2" value="<?php echo $this->vars->cart->billing_address->address_country->zone_code_2; ?>" />
	  	<input type="hidden" name="sfn" value="<?php echo $this->vars->cart->shipping_address->address_firstname; ?>" />
	  	<input type="hidden" name="sln" value="<?php echo $this->vars->cart->shipping_address->address_lastname; ?>" />
	  	<input type="hidden" name="sstr" value="<?php echo $this->vars->cart->shipping_address->address_street; ?>" />
	  	<input type="hidden" name="sstrx" value="<?php echo $this->vars->cart->shipping_address->address_street2; ?>" />
	  	<input type="hidden" name="sloc" value="<?php echo $this->vars->cart->shipping_address->address_city; ?>" />
	  	<input type="hidden" name="sreg" value="<?php echo $this->vars->cart->shipping_address->address_state->zone_code_3; ?>" />
	  	<input type="hidden" name="spc" value="<?php echo $this->vars->cart->shipping_address->address_post_code; ?>" />
	  	<input type="hidden" name="scc2" value="<?php echo $this->vars->cart->shipping_address->address_country->zone_code_2; ?>" />
	  	<input type="hidden" name="cid" value="<?php echo $this->vars->cart->customer->user_id; ?>" />
	  	<input type="hidden" name="chn" value="<?php echo $this->vars->cart->customer->name; ?>" />
	  	<input type="hidden" name="cem" value="<?php echo $this->vars->cart->customer->user_email; ?>" />
	  	<input type="hidden" name="tval" value="<?php echo $this->pvars->tval; ?>" />
	  	<input type="hidden" name="bsucc" value="<?php echo JTEXT::_('HIKASHOPPAYMENT_BRAINTREE_SUCCESS_MESSAGE'); ?>" />
	  	<input type="hidden" name="bfail" value="<?php echo JTEXT::_('HIKASHOPPAYMENT_BRAINTREE_FAILURE_MESSAGE'); ?>" />
    </form>
	</div>
</div>

<?php // USE AJAX TO PROCESS THE FORM ?>
<script src="https://js.braintreegateway.com/v1/braintree.js"></script>
<script>
	var mid = "<?php echo $this->pvars->merchant_id; ?>";
  window.onBraintreeDataLoad = function() {
    BraintreeData.setup(mid, 'hikashop-braintree-payment-form', BraintreeData.environments.production);
  };
</script>
<script src="https://js.braintreegateway.com/v1/braintree-data.js" async=true></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>
	var ajax_submit = function (e) {
    form = $('#hikashop-braintree-payment-form');
    e.preventDefault();
    $("#hikashop_braintree_button").attr("disabled", "disabled");
    $.post(form.attr('action'), form.serialize(), function (data) {
      form.parent().replaceWith(data);
      $.ajax({
      	url: <?php echo '"' . HIKASHOP_LIVE . "index.php?option=com_hikashop&ctrl=checkout&task=notify&notif_payment=braintree&tmpl=component" . '"'; ?> + "&result=" + $('#btresult').attr("class"),
      	data: {order_id: $('#hoid').attr("class"), transaction_id: $('#tids').attr("class"), result: $('#btresult').html(), rstatus: $('#btresult').attr("class"), vid: $('#vid').attr("class"), vtoken: $('#vtkn').attr("class"), tval: $('#tval').attr("class") },
      	success: function(result) {
      		if(result === true) { $('#oids').show(); alert("Order update says it was successful"); }
      	}
      });
    });
  }
  var cse = "<?php echo $this->pvars->clientsideencryption; ?>";
  var braintree = Braintree.create(cse);
  braintree.onSubmitEncryptForm('hikashop-braintree-payment-form', ajax_submit);
</script>