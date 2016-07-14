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
?>
<div id="payment-failure-page" class="row-fluid pf-container">
	<h1 class="title"><?php echo JText::_('PF_FAILURE'); ?></h1>
	<form id="os_form" class="form form-horizontal">
		<div class="control-group">
			<?php
			if (strlen(strip_tags($this->config->failure_message)))
			{
				echo $this->config->failure_message ;
			}
			else
			{
				echo  JText::_('PF_FAILURE_MESSAGE');
			}
			?>
		</div>
		<div class="control-group">
			<label class="control-label">
				<?php echo JText::_('PF_REASON'); ?>
			</label>
			<div class="controls">
				<?php echo $this->reason; ?>
			</div>
		</div>
		<?php
		if (isset($_SESSION['response_code']) && $_SESSION['response_code'] != '')
		{
		?>
			<div class="control-group">
				<label class="control-label">
					<?php echo JText::_('PF_RESPONSE_CODE'); ?>
				</label>
				<div class="controls">
					<?php echo $_SESSION['response_code'] ; ?>
				</div>
			</div>
		<?php
		}
		if (isset($_SESSION['response_text']) && $_SESSION['response_text'] != '')
		{
		?>
			<div class="control-group">
				<label class="control-label">
					<?php echo JText::_('PF_RESPONSE_TEXT'); ?>
				</label>
				<div class="controls">
					<?php echo $_SESSION['response_text'] ; ?>
				</div>
			</div>
		<?php
		}
		?>
		<div class="form-actions">			<a href="<?php echo $this->link ?>" class="uk-button uk-button-primary uk-button-large tm-button-more uk-margin-top-remove">
				Click here to try to process payment again.			</a>
		</div>
	</form>
</div>