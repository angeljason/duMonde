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
<div id="payment-cancel-page" class="row-fluid pf-container">
	<h1 class="title"><?php echo JText::_('PM_CANCELLED'); ?></h1>
	<div class="pf-message clearfix">
		<?php echo $this->message; ?>
	</div>
</div>