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
	Joomla.submitbutton = function(pressbutton)
	{
		if (pressbutton == 'cancel')
		{
			Joomla.submitform( pressbutton );
			return;				
		} else
		{
			<?php
				$editorFields = array('form_msg', 'confirmation_msg', 'thanks_message', 'cancel_message', 'confirmation_email_body');
				foreach ($editorFields as $field) {
					//echo $editor->save($field);
				}								
		?>
			Joomla.submitform( pressbutton );
		}
	}	
</script>
<form action="index.php?option=com_pmform&view=form" method="post" name="adminForm" id="adminForm" class="form form-horizontal">
<div class="row-fluid">	
	<div class="row-fluid">
		<ul class="nav nav-tabs">
			<li class="active"><a href="#general-page" data-toggle="tab"><?php echo JText::_('PF_GENERAL');?></a></li>
			<li><a href="#message-page" data-toggle="tab"><?php echo JText::_('PF_MESSAGES');?></a></li>
			<li><a href="#fields-setting" data-toggle="tab"><?php echo JText::_('PF_FIELD_SETTINGS');?></a></li>
			<?php
			if (count($this->plugins))
			{
				$count = 0 ;
				foreach ($this->plugins as $plugin)
				{
					$title  = $plugin['title'] ;
					$count++ ;
				?>
					<li><a href="#<?php echo 'tab_'.$count;  ?>" data-toggle="tab"><?php echo $title;?></a></li>
				<?php
				}
			}
			?>
		</ul>
		<div class="tab-content">
			<div class="tab-pane active" id="general-page">
				<div class="row-fluid">
					<div class="control-group">
						<label for="title" class="control-label hasTooltip" title="Form Title"><?php echo  JText::_('Title'); ?></label>													
						<div class="controls">
							<input class="text_area" type="text" name="title" id="title" size="50" maxlength="250" value="<?php echo $this->item->title;?>" />
						</div>
					</div>
					<div class="control-group">
						<label for="amount" class="control-label hasTooltip" title="<?php echo JText::_('PF_AMOUNT_EXPLAIN'); ?>"><?php echo  JText::_('Amount'); ?></label>													
						<div class="controls">
							<input class="text_area" type="text" name="amount" id="amount" size="20" maxlength="250" value="<?php echo $this->item->amount;?>" />							
						</div>
					</div>
					<div class="control-group">
						<label for="publish_up" class="control-label hasTooltip"><?php echo  JText::_('Publish up'); ?></label>													
						<div class="controls">
							<?php echo JHtml::_('calendar', $this->item->publish_up, 'publish_up', 'publish_up') ; ?>
						</div>
					</div>
					<div class="control-group">
						<label for="publish_up" class="control-label hasTooltip"><?php echo  JText::_('Publish down'); ?></label>													
						<div class="controls">
							<?php echo JHtml::_('calendar', $this->item->publish_down, 'publish_down', 'publish_down') ; ?>
						</div>
					</div>
					<div class="control-group">
						<label for="late_payment_date" class="control-label hasTooltip" title="<?php echo JText::_('PF_LATE_PAYMENT_DATE_EXPLAIN'); ?>"><?php echo  JText::_('Late payment date'); ?></label>													
						<div class="controls">
							<?php echo JHtml::_('calendar', $this->item->late_payment_date, 'late_payment_date', 'late_payment_date') ; ?>
						</div>
					</div>
					<div class="control-group">
						<label for="late_payment_amount" class="control-label hasTooltip"><?php echo  JText::_('Late payment fee'); ?></label>													
						<div class="controls">
							<input class="text_area" type="text" name="late_payment_amount" id="late_payment_amount" size="20" maxlength="250" value="<?php echo $this->item->late_payment_amount;?>" size="5" />&nbsp;&nbsp;&nbsp;<?php echo $this->lists['late_amount_type']; ?>
						</div>
					</div>
					<div class="control-group">
						<label for="notification_emails" class="control-label hasTooltip" title="<?php echo JText::_('PF_FORM_NOTIFICATION_EMAIL_EXPLAINS'); ?>"><?php echo  JText::_('Notification emails'); ?></label>													
						<div class="controls">
							<input class="text_area" type="text" name="notification_emails" id="notification_emails" size="60" maxlength="250" value="<?php echo $this->item->notification_emails;?>" />							
						</div>
					</div>
					<div class="control-group">
						<label for="paypal_account" class="control-label hasTooltip" title="<?php echo JText::_('PF_FORM_PAYPAL_ACCOUNT_EXPLAIN'); ?>"><?php echo  JText::_('Paypal account'); ?></label>													
						<div class="controls">
							<input class="text_area" type="text" name="paypal_account" id="paypal_account" size="50" maxlength="250" value="<?php echo $this->item->paypal_account;?>" />							
						</div>
					</div>
					<div class="control-group">
						<label for="form_layout" class="control-label hasTooltip" title="<?php echo JText::_('PF_FORM_LAYOUT_EXPLAIN'); ?>"><?php echo  JText::_('Form layout'); ?></label>													
						<div class="controls">
							<input class="text_area" type="text" name="form_layout" id="form_layout" size="50" maxlength="250" value="<?php echo $this->item->form_layout;?>" />							
						</div>
					</div>
					<div class="control-group">
						<label for="access" class="control-label hasTooltip"><?php echo  JText::_('Access'); ?></label>													
						<div class="controls">
							<?php echo $this->lists['access']; ?>
						</div>
					</div>
					<div class="control-group">
						<label for="attachment" class="control-label hasTooltip" title="<?php echo JText::_("PF_FORM_ATTACHMENT_EXPLAIN"); ?>"><?php echo  JText::_('Attachment'); ?></label>													
						<div class="controls">
							<?php echo $this->lists['attachment'] ; ?>							
						</div>
					</div>
					<div class="control-group">
						<label for="enable_coupon" class="control-label"><?php echo  JText::_('Enable Coupon'); ?></label>
						<?php
							if (version_compare(JVERSION, '3.0', 'ge'))
							{
							?>
								<?php echo $this->lists['enable_coupon'];?>
							<?php
							}
							else
							{
							?>
								<div class="controls">
									<?php echo $this->lists['enable_coupon'];?>
								</div>
							<?php
							}
						?>
					</div>
					<?php 
					if ($this->config->enable_payment_method_selection)
					{
					?>
						<div class="control-group">
							<label for="payment_methods" class="control-label tip"><?php echo  JText::_('Payment Methods'); ?></label>													
							<div class="controls">
								<?php echo $this->lists['payment_methods'];?>							
							</div>
						</div>
					<?php	
					}
					?>			
					<div class="control-group">
						<label for="published" class="control-label hasTooltip"><?php echo  JText::_('Published'); ?></label>
						<?php
						if (version_compare(JVERSION, '3.0', 'ge'))
						{
						?>
							<?php echo $this->lists['published'];?>
						<?php
						}
						else
						{
						?>
							<div class="controls">
								<?php echo $this->lists['published'];?>
							</div>
						<?php
						}
						?>
					</div>		
				</div>								
			</div>
			<div class="tab-pane" id="message-page">
				<div class="row-fluid">
					<div class="control-group">
						<label for="form_msg" class="control-label hasTooltip" title="<?php echo JText::_('PF_FORM_MSG_EXPLAIN'); ?>"><?php echo  JText::_('Form message'); ?></label>													
						<div class="controls">
							<?php echo $editor->display( 'form_msg',  $this->item->form_msg , '100%', '250', '75', '8' ) ;?>							
						</div>
					</div>
					<div class="control-group">
						<label for="confirmation_msg" class="control-label hasTooltip" title="<?php echo JText::_('PF_FORM_CONFIRMATION_MSG_EXPLAIN'); ?>"><?php echo  JText::_('Confirmation message'); ?></label>													
						<div class="controls">
							<?php echo $editor->display( 'confirmation_msg',  $this->item->confirmation_msg , '100%', '250', '75', '8' ) ;?>							
						</div>
					</div>
					<div class="control-group">
						<label for="thanks_message" class="control-label"><?php echo  JText::_('Thanks message'); ?></label>													
						<div class="controls">
							<?php echo $editor->display( 'thanks_message',  $this->item->thanks_message , '100%', '250', '75', '8' ) ;?>							
						</div>
					</div>
					<div class="control-group">
						<label for="cancel_message" class="control-label"><?php echo  JText::_('Cancel message'); ?></label>													
						<div class="controls">
							<?php echo $editor->display( 'cancel_message',  $this->item->cancel_message , '100%', '250', '75', '8' ) ;?>							
						</div>
					</div>
					<div class="control-group">
						<label for="notification_email_subject" class="control-label hasTooltip" title="<?php echo JText::_('PF_FORM_NOTIFICATION_EMAIL_SUBJECT_EXPLAIN'); ?>"><?php echo  JText::_('Notification email subject'); ?></label>													
						<div class="controls">
							<input type="text" name="notification_email_subject" class="inputbox" value="<?php echo $this->item->notification_email_subject; ?>" size="50" />							
						</div>
					</div>
					<div class="control-group">
						<label for="notification_email_body" class="control-label hasTooltip" title="<?php echo JText::_('PF_FORM_NOTIFICATION_EMAIL_BODY_EXPLAIN'); ?>"><?php echo  JText::_('Notification email body'); ?></label>													
						<div class="controls">
							<?php echo $editor->display( 'notification_email_body',  $this->item->notification_email_body , '100%', '250', '75', '8' ) ;?>							
						</div>
					</div>
					<div class="control-group">
						<label for="confirmation_email_subject" class="control-label hasTooltip" title="<?php echo JText::_('PF_FORM_CONFIRMATION_EMAIL_SUBJECT_EXPLAIN'); ?>"><?php echo  JText::_('Confirmation email subject'); ?></label>													
						<div class="controls">
							<input type="text" name="confirmation_email_subject" class="inputbox" value="<?php echo $this->item->confirmation_email_subject; ?>" size="50" />							
						</div>
					</div>
					<div class="control-group">
						<label for="confirmation_email_body" class="control-label hasTooltip" title="<?php echo JText::_('PF_FORM_CONFIRMATION_EMAIL_BODY_EXPLAIN'); ?>"><?php echo  JText::_('Confirmation email body'); ?></label>													
						<div class="controls">
							<?php echo $editor->display( 'confirmation_email_body',  $this->item->confirmation_email_body , '100%', '250', '75', '8' ) ;?>							
						</div>
					</div>									
				</div>				
			</div>
			<div class="tab-pane" id="fields-setting">
				<div class="row-fluid">
					<table class="adminlist table table-stripped">
						<thead>
							<tr>
			    				<th width="50%" class="key" style="text-align: left;"><strong><?php echo JText::_('Field'); ?></strong></th>
			    				<th class="key" style="text-align: center;"><strong><?php echo JText::_('Show'); ?></strong></th>
			    				<th class="key" style="text-align: center;"><strong><?php echo JText::_('Require'); ?></strong></th>
			    				<th class="key" style="text-align: center;"><strong><?php echo JText::_('Ordering'); ?></strong></th>
			    			</tr>
						</thead>			
						<?php
			                foreach ($this->fields as $field) {
			                ?>
			                	<tr>
			                		<td>
			                			<?php echo $field->title ; ?>
			                			<input type="hidden" name="fields[]" value="<?php echo $field->id; ?>" />
			                		</td>
			                		<td style="text-align: center;">
			                			<?php
			                			    if (in_array($field->name, array('first_name', 'email')))
						                    {
							                    $readonly = ' readonly="readonly"' ;
						                    }
			                			    else
						                    {
							                    $readonly = '' ;
						                    }
			                			?>
			                			<input type="checkbox" name="<?php echo 'published_'.$field->id; ?>" class="inputbox" value="1" <?php if ($field->published) echo ' checked="checked"'; echo $readonly ; ?> />                			
			                		</td>
			                		<td style="text-align: center;">   			
			                			<input type="checkbox" name="<?php echo 'required_'.$field->id; ?>" class="inputbox" value="1" <?php if ($field->required) echo ' checked="checked"'; echo $readonly ; ?> />
			                		</td>
			                		<td style="text-align: center;">
			                			<input type="text" size="5" name="<?php echo 'ordering_'.$field->id ; ?>" class="inputbox input-mini" value="<?php echo $field->ordering; ?>" />
			                		</td>
			                	</tr>
			                <?php    
			                }
						?>			
					</table>
				</div>
			</div>
			<?php
				if (count($this->plugins))
				{
					$count = 0 ;
					foreach ($this->plugins as $plugin)
					{
						$form = $plugin['form'] ;
						$count++ ;
					?>
						<div class="tab-pane" id="tab_<?php echo $count; ?>">
							<?php
								echo $form ;
							?>
						</div>
					<?php
					}
				}
			?>
		</div>
	</div>
	<input type="hidden" name="id" value="<?php echo $this->item->id; ?>" />
	<input type="hidden" name="task" value="" />	
	<?php echo JHtml::_( 'form.token' ); ?>
	</div>
</form>