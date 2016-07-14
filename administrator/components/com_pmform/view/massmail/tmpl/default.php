<?php
/**
 * @version		3.0
 * @package		Joomla
 * @subpackage	Payment Form
 * @author  Tuan Pham Ngoc
 * @copyright	Copyright (C) 2010 Ossolution Team
 * @license		GNU/GPL, see LICENSE.php
 */
// no direct access
defined( '_JEXEC' ) or die ;
JToolBarHelper::title( JText::_( 'Mass Mails' ), 'massemail.png' );
JToolBarHelper::custom('send','envelope','envelope', JText::_('Send mails'), false);
JToolBarHelper::cancel('cancel');
$editor = JFactory::getEditor(); 	
?>
<script language="javascript" type="text/javascript">
	Joomla.submitbutton = function(pressbutton) {
		var form = document.adminForm;
		if (pressbutton == 'cancel') {
			Joomla.submitform( pressbutton );
			return;
		} else {
			//Need to check something here
			if (form.filter_form_id.value == 0) {
				alert("<?php echo JText::_("Please select form to send mass mails"); ?>");
				form.form_id.focus() ;
				return ;
			}
			Joomla.submitform( pressbutton );
		}
	}
</script>
<form action="index.php?option=com_pmform&view=massmail" method="post" name="adminForm" id="adminForm">
		<table class="admintable" style="width: 100%;">
			<tr>
				<td width="100" class="key">
					<?php echo  JText::_('Form'); ?>
				</td>
				<td width="60%">
					<?php echo $this->lists['filter_form_id'] ; ?>
				</td>
				<td>
					&nbsp;
				</td>
			</tr>			
			<tr>
				<td class="key">
					<?php echo JText::_('Email Subject'); ?>
				</td>
				<td>
					<input type="text" name="subject" value="" size="70" class="inputbox" />	
				</td>				
				<td>
					&nbsp;
				</td>
			</tr>													
			<tr>
				<td class="key">
					<?php echo JText::_('Email message'); ?>
				</td>
				<td>
					<?php echo $editor->display( 'message',  '', '100%', '250', '75', '10' ) ; ?>
				</td>
				<td valign="top">
					<strong><?php echo JText::_('Available Tags'); ?> : [FIRST_NAME], [LAST_NAME], [AMOUNT]</strong>
				</td>
			</tr>								
	</table>										
	<?php echo JHtml::_( 'form.token' ); ?>
	<input type="hidden" name="option" value="com_pmform" />
	<input type="hidden" name="task" value="" />
</form>