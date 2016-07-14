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

$editor = JFactory::getEditor(); 	
?>
<script language="javascript" type="text/javascript">
	function submitbutton(pressbutton)
	{
		var form = document.adminForm;
		if (pressbutton == 'cancel')
		{
			submitform( pressbutton );
			return;				
		}
		else if (form.code.value == "")
		{
			alert("<?php echo JText::_("Please enter Coupon"); ?>");
			form.code.focus();
		}
		else if (form.discount.value == "")
		{
			alert("<?php echo JText::_("Please enter discount"); ?>");
			form.discount.focus();
		}	
		else
		{
			submitform( pressbutton );
		}
	}
</script>
<form action="index.php?option=com_pmform&view=coupon" method="post" name="adminForm" id="adminForm">
<div style="float:left; width: 100%;">			
			<table class="admintable adminform">
				<tr>
					<td width="100" class="key">
						<?php echo  JText::_('Code'); ?>
					</td>
					<td>
						<input class="text_area" type="text" name="code" id="code" size="15" maxlength="250" value="<?php echo $this->item->code;?>" />
					</td>
				</tr>
				<tr>
					<td width="100" class="key">
						<?php echo  JText::_('Discount'); ?>
					</td>
					<td>
						<input class="text_area" type="text" name="discount" id="discount" size="10" maxlength="250" value="<?php echo $this->item->discount;?>" />&nbsp;&nbsp;<?php echo $this->lists['coupon_type'] ; ?>
					</td>
				</tr>											
				<tr>
					<td class="key">
						<?php echo JText::_('Form'); ?>
					</td>
					<td>
						<?php echo $this->lists['form_id']; ?>
					</td>
				</tr>
				<tr>
					<td class="key">
						<?php echo JText::_('Times'); ?>
					</td>
					<td>
						<input class="text_area" type="text" name="times" id="times" size="5" maxlength="250" value="<?php echo $this->item->times;?>" />
					</td>
				</tr>				
				<tr>
					<td class="key">
						<?php echo JText::_('Time used'); ?>
					</td>
					<td>
						<?php echo $this->item->used;?>
					</td>
				</tr>				
				<tr>
					<td class="key">
						<?php echo JText::_('Valid From'); ?>
					</td>
					<td>
						<?php echo JHtml::_('calendar', $this->item->valid_from != $this->nullDate ? $this->item->valid_from : '', 'valid_from', 'valid_from') ; ?>
					</td>
				</tr>
				<tr>
					<td class="key">
						<?php echo JText::_('Valid To'); ?>
					</td>
					<td>
						<?php echo JHtml::_('calendar', $this->item->valid_to != $this->nullDate ? $this->item->valid_to : '', 'valid_to', 'valid_to') ; ?>
					</td>
				</tr>
				<tr>
					<td class="key">
						<?php echo JText::_('Published'); ?>
					</td>
					<td>
						<?php echo $this->lists['published']; ?>
					</td>
				</tr>
		</table>							
</div>		
<div class="clr"></div>	
	<?php echo JHtml::_( 'form.token' ); ?>
	<input type="hidden" name="used" value="<?php echo (int)$this->item->used;?>" />
	<input type="hidden" name="id" value="<?php echo $this->item->id; ?>" />
	<input type="hidden" name="task" value="" />
</form>