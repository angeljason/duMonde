<?php
/**
 * @version        4.2
 * @package        Joomla
 * @subpackage     Payment Form
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2010 - 2015 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */
defined('_JEXEC') or die();
JHtml::_('behavior.tooltip');
?>
<form action="index.php?option=com_pmform&view=plugin" method="post" name="adminForm" id="adminForm">
<div class="row-fluid">
<div class="span7">
	<fieldset class="adminform">
		<legend><?php echo JText::_('PF_PLUGIN_DETAIL'); ?></legend>
			<table class="admintable adminform">
				<tr>
					<td width="100" class="key">
						<?php echo  JText::_('PF_NAME'); ?>
					</td>
					<td>
						<?php echo $this->item->name ; ?>
					</td>
				</tr>
				<tr>
					<td class="key">
						<?php echo  JText::_('PF_TITLE'); ?>
					</td>
					<td>
						<input class="text_area" type="text" name="title" id="title" size="40" maxlength="250" value="<?php echo $this->item->title;?>" />
					</td>
				</tr>					
				<tr>
					<td class="key">
						<?php echo JText::_('PF_AUTHOR'); ?>
					</td>
					<td>
						<input class="text_area" type="text" name="author" id="author" size="40" maxlength="250" value="<?php echo $this->item->author;?>" />
					</td>
				</tr>
				<tr>
					<td class="key">
						<?php echo JText::_('PF_CREATION_DATE'); ?>
					</td>
					<td>
						<?php echo $this->item->creation_date; ?>
					</td>
				</tr>
				<tr>
					<td class="key">
						<?php echo JText::_('PF_COPYRIGHT') ; ?>
					</td>
					<td>
						<?php echo $this->item->copyright; ?>
					</td>
				</tr>	
				<tr>
					<td class="key">
						<?php echo JText::_('PF_LICENSE'); ?>
					</td>
					<td>
						<?php echo $this->item->license; ?>
					</td>
				</tr>							
				<tr>
					<td class="key">
						<?php echo JText::_('PF_AUTHOR_EMAIL'); ?>
					</td>
					<td>
						<?php echo $this->item->author_email; ?>
					</td>
				</tr>
				<tr>
					<td class="key">
						<?php echo JText::_('PF_AUTHOR_URL'); ?>
					</td>
					<td>
						<?php echo $this->item->author_url; ?>
					</td>
				</tr>				
				<tr>
					<td class="key">
						<?php echo JText::_('PF_VERSION'); ?>
					</td>
					<td>
						<?php echo $this->item->version; ?>
					</td>
				</tr>
				<tr>
					<td class="key">
						<?php echo JText::_('PF_DESCRIPTION'); ?>
					</td>
					<td>
						<?php echo $this->item->description; ?>
					</td>
				</tr>
				<tr>
					<td class="key">
						<?php echo JText::_('PF_PUBLISHED'); ?>
					</td>
					<td>
						<?php echo $this->lists['published']; ?>
					</td>
				</tr>
		</table>
	</fieldset>				
</div>						
<div class="span5">
	<fieldset class="adminform">
		<legend><?php echo JText::_('PF_PLUGIN_PARAMETERS'); ?></legend>
		<?php
			foreach ($this->form->getFieldset('basic') as $field) {
			?>
			<div class="control-group">
				<div class="control-label">
					<?php echo $field->label ;?>
				</div>					
				<div class="controls">
					<?php echo  $field->input ; ?>
				</div>
			</div>	
		<?php
			}					
		?>					
	</fieldset>				
</div>
</div>		
<div class="clearfix"></div>	
	<?php echo JHtml::_( 'form.token' ); ?>
	<input type="hidden" name="id" value="<?php echo $this->item->id; ?>" />
	<input type="hidden" name="task" value="" />
</form>