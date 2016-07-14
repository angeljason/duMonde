<?php
/**
 * @version        4.2
 * @package        Joomla
 * @subpackage     Payment Form
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2010 - 2015 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */
defined('_JEXEC') or die ; 
?>
<div id="payment-complete-page" class="row-fluid pf-container">
	<h1 class="title"><?php echo JText::_('PF_COMPLETE'); ?></h1>
	<div class="pm-message clearfix">
		<?php echo $this->message; ?>
	</div>	
	<a href="http://www.dumonde.com.au/" class="uk-button uk-button-primary uk-button-large tm-button-more uk-margin-top-remove">		
	Visit duMonde Homepage
	</a>
</div>