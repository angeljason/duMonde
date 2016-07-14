<?php
/**
 * @package	HikaShop BrainTree Payment Plugin for Joomla!
 * @version	1.0
 * @author	3by400.com
 * @copyright	(C) 2014 3by400, Inc. All rights reserved.
 * @license	GNU/GPLv3 http://www.gnu.org/licenses/gpl-3.0.html
 */
defined('_JEXEC') or die('Restricted access');

//die("debug quit in " . __FILE__ . " line " . __LINE__);

//require_once('braintree_process.php');
?>

<div class="hikashop_braintree_end" id="hikashop_braintree_end">
	<div>
		<p>End of transaction....</p>
  	<?php if($result->success) : ?>
  		<?php echo('<div id="btresult" class="success">Your payment was processed successfully!  Your order is complete.  Your transaction ID is ' . $result->transaction->id. '</div>'); ?>
  	<?php elseif($result->transaction) : ?>
  		<?php echo '<div id="btresult" class="fail">Error: '.$result->message.'<br /> Code: '.$result->transaction->processorResponseCode.'</div>'; ?>
  	<?php else : ?>
  		<?php echo '<div id="btresult" class="validation_errors">Validation errors:<br/>';
  		foreach (($result->errors->deepAll()) as $error) {
  		    echo("- " . $error->message . "<br/>");
  		}
  		echo '</div>'; ?>
  	<?php endif; ?>
	</div>
</div>
