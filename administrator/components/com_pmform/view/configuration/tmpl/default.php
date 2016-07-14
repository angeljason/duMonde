<?php
/**
 * @version        4.2
 * @package        Joomla
 * @subpackage     Payment Form
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2010 - 2015 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */
defined('_JEXEC') or die;
JToolBarHelper::title(   JText::_( 'Configuration' ), 'generic.png' );
JToolBarHelper::save('save');
JToolBarHelper::cancel();
$editor = JFactory::getEditor() ;
$user = JFactory::getUser();
if ($user->authorise('core.admin', 'com_pmform'))
{
	JToolbarHelper::preferences('com_pmform');
}
?>
<form action="index.php?option=com_pmform&view=configuration" method="post" name="adminForm" id="adminForm">
	<div class="row-fluid">
		<ul class="nav nav-tabs">
			<li class="active"><a href="#general-page" data-toggle="tab"><?php echo JText::_('General');?></a></li>
			<li><a href="#message-page" data-toggle="tab"><?php echo JText::_('Messages');?></a></li>
			<li><a href="#invoice-page" data-toggle="tab"><?php echo JText::_('PF_INVOICE_SETTINGS');?></a></li>
		</ul>
		<div class="tab-content">
				<!-- Begin Tabs -->
				<div class="tab-pane active" id="general-page">
					<table class="admintable adminform" style="width:100%;">
						<tr>
							<td  class="key">
								<?php echo JText::_('Load Jquery'); ?>
							</td>
							<td>
								<?php echo $this->lists['load_jquery']; ?>
							</td>
							<td>
								<?php echo JText::_('The extension requires jQuery library to work. So you can only set this config option to No if yours ite template load jQuery already'); ?>
							</td>
						</tr>

						<tr>
							<td  class="key">
								<?php echo JText::_('Load twitter bootstrap'); ?>
							</td>
							<td>
								<?php echo $this->lists['load_twitter_bootstrap']; ?>
							</td>
							<td>
								<?php echo JText::_('The extension requires twitter bootstrap library to work. So you can only set this config option to No if yours ite template load jQuery already'); ?>
							</td>
						</tr>


						<tr>
			        		<td  class="key">
			        			<?php echo JText::_('User registration integration'); ?>
			        		</td>
			        		<td>
			        			<?php echo $this->lists['user_registration']; ?>
			        		</td>
			        		<td>
			        			<?php echo JText::_('If set to Yes, users will be able to enter username and password on payment form to register for an account'); ?>
			        		</td>
			        	</tr>

						<tr>
							<td class="key" style="width:25%">
								<?php echo JText::_('Only create user account when payment success '); ?>
							</td>
							<td width="40%">
								<?php echo $this->lists['create_account_when_payment_success']; ?>
							</td>
							<td>
								<?php echo JText::_('If you set this config option to Yes, Payment Form will only create the Joomla account when payment success'); ?>
							</td>
						</tr>

						<tr>
							<td  class="key">
								<?php echo JText::_('Show Login Box'); ?>
							</td>
							<td>
								<?php echo $this->lists['show_login_box']; ?>
							</td>
							<td>
								<?php echo JText::_('If set to Yes, users will be forced to create an account when making donation'); ?>
							</td>
						</tr>

						<tr>
							<td  class="key" style="width:25%">
								<?php echo JText::_('Integration'); ?>
							</td>
							<td width="40%">
								<?php echo $this->lists['cb_integration']; ?>
							</td>
							<td>
								&nbsp;
							</td>
						</tr>
						<tr>
							<td  class="key">
								<?php echo JText::_('Enable Captcha'); ?>
							</td>
							<td>
								<?php echo $this->lists['enable_captcha']; ?>
							</td>
							<td>
								&nbsp;
							</td>
						</tr>
						<tr>
							<td  class="key">
								<?php echo JText::_('Show Confirmation Step'); ?>
							</td>
							<td>
								<?php echo $this->lists['show_confirmation_step']; ?>
							</td>
							<td>
								&nbsp;
							</td>
						</tr>
						<tr>
							<td  class="key">
								<?php echo JText::_('Enable payment methods seclection for each form?'); ?>
							</td>
							<td width="50%">
								<?php echo $this->lists['enable_payment_method_selection']; ?>
							</td>
							<td>
								<?php echo JText::_('If set to Yes, when you create or edit a form, you can choose the payment methods available for that form. If set to No, all forms will use enabled payment methods'); ?>
							</td>
						</tr>
						<tr>
							<td class="key">
								<?php echo JText::_('Show Coupon code in Payments Management'); ?>
							</td>
							<td>
								<?php echo $this->lists['show_coupon']; ?>
							</td>
							<td>
								<?php echo JText::_('If set to Yes, there will be a column to display coupon code used for each payment record'); ?>
							</td>
						</tr>	
						<tr>
							<td  class="key">
								<?php echo JText::_('File Upload Path'); ?>
							</td>
							<td>
								<input type="text" name="path_upload" class="inputbox" size="50" value="<?php echo $this->config->path_upload; ?>" />
							</td>
							<td>
								The relative path to the folder where the files which users uploaded is stored. You only need to set this config option if in the form there are upload file type
							</td>
						</tr>
						<tr>
							<td class="key">
								<?php echo JText::_('Allowed File Types'); ?>
							</td>
							<td>
								<input type="text" name="allowed_extensions" class="inputbox" size="70" value="<?php echo $this->config->allowed_extensions ; ?>" />
							</td>
							<td>
								List of allowed file types, comma seperated
							</td>
						</tr>
						<tr>
							<td class="key">
								<?php echo JText::_('Send Attachment to Admin Emails'); ?>
							</td>
							<td>
								<?php echo $this->lists['send_attachment_to_admin_email']; ?>
							</td>
							<td>
								If set to Yes, all the attachments which users uploaded when they make payment will be sent to administrator emails
							</td>
						</tr>
						<tr>
							<td class="key">
								<?php echo JText::_('Activate HTTPS'); ?>
							</td>
							<td>
								<?php echo $this->lists['use_https']; ?>
							</td>
							<td>
								&nbsp;
							</td>
						</tr>
						<tr>
							<td class="key">
								<?php echo JText::_('Show term and condition checkbox') ?>
							</td>
							<td>
								<?php
									echo $this->lists['active_term'];
								?>
							</td>
							<td>
								&nbsp;
							</td>
						</tr>
						<tr>
							<td class="key">
								<?php echo JText::_('Term and condition article') ; ?>
							</td>
							<td>
								<?php echo $this->lists['article_id']; ?>
							</td>
							<td>
								&nbsp;
							</td>
						</tr>			
						<tr>
							<td class="key">
								<?php echo JText::_('Date Format') ; ?>					
							</td>
							<td>
								<input type="text" name="date_format" class="inputbox" value="<?php echo $this->config->date_format; ?>" size="10" />
							</td>
							<td>
								&nbsp;
							</td>
						</tr>
						<tr>
							<td class="key">
								<?php echo JText::_('PF_DATE_FIELD_FORMAT'); ?>
							</td>
							<td>
								<?php echo $this->lists['date_field_format']; ?>
							</td>
							<td>
								<?php echo JText::_('PF_DATE_FIELD_FORMAT_EXPLAIN'); ?>
							</td>
						</tr>
						<tr>
							<td class="key">
								<?php echo JText::_('Currency symbol'); ?>
							</td>
							<td>
								<input type="text" name="currency_symbol" class="inputbox" value="<?php echo $this->config->currency_symbol; ?>" size="10" />
							</td>
							<td>
								&nbsp;
							</td>
						</tr>
						<tr>
							<td class="key">
								<?php echo JText::_('Default country'); ?>
							</td>
							<td>
								<?php echo $this->lists['country_list']; ?>
							</td>
							<td>
								&nbsp;
							</td>
						</tr>																												
					</table>
				</div>
				<div class="tab-pane" id="message-page">
					<table class="admintable adminform" style="width:100%;">
						<tr>
							<td class="key" width="25%">
								<?php echo JText::_('From Name'); ?>
							</td>
							<td>
								<input type="text" name="from_name" class="inputbox" value="<?php echo $this->config->from_name; ?>" size="50" />
							</td>
							<td>
								<?php echo JText::_('The sender name in email sent to users who make payment'); ?>>
							</td>
						</tr>
						<tr>
							<td class="key" width="25%">
								<?php echo JText::_('From Email'); ?>
							</td>
							<td>
								<input type="text" name="from_email" class="inputbox" value="<?php echo $this->config->from_email; ?>" size="50" />
							</td>
							<td>
								<?php echo JText::_('The sender email in email sent to users who make payment'); ?>
							</td>
						</tr>
						<tr>
							<td class="key" width="25%">
								<?php echo JText::_('Notification emails'); ?>					
							</td>
							<td width="50%">
								<input type="text" name="notification_emails" class="inputbox" value="<?php echo $this->config->notification_emails; ?>" size="50" />
							</td>
							<td>
								<strong>if you want to user multiple emails, put it as comma seperated. For example: paypal@joomdonation.com,acounting@joomdonation.com</strong>
							</td>
						</tr>																							
						<tr>
							<td class="key">
								<?php echo JText::_('Admin email subject'); ?>
							</td>
							<td>
								<input type="text" name="admin_email_subject" class="inputbox" value="<?php echo $this->config->admin_email_subject; ?>" size="50" />
							</td>
							<td>
								<strong>Availale Tags : [FORM_TITLE]</strong>
							</td>
						</tr>
						<tr>
							<td class="key">
								<?php echo JText::_('Admin email body'); ?>
							</td>
							<td>
								<?php echo $editor->display( 'admin_email_body',  $this->config->admin_email_body , '100%', '250', '75', '8' ) ;?>					
							</td>
							<td>
								<strong>Available Tags :[PAYMENT_DETAIL], [FORM_TITLE], [FIRST_NAME], [LAST_NAME], [ORGANIZATION], [ADDRESS], [ADDRESS2], [CITY], [STATE], [CITY], [ZIP], [COUNTRY], [PHONE], [FAX], [EMAIL], [COMMENT], [AMOUNT]</strong>
							</td>
						</tr>
						<tr>
							<td class="key">
								<?php echo JText::_('User email subject'); ?>
							</td>
							<td>					
								<input type="text" name="user_email_subject" class="inputbox" value="<?php echo $this->config->user_email_subject; ?>" size="50" />
							</td>
							<td>
								&nbsp;
							</td>
						</tr>
						<tr>
							<td class="key">
								<?php echo JText::_('User email body'); ?>
							</td>
							<td>
								<?php echo $editor->display( 'user_email_body',  $this->config->user_email_body , '100%', '250', '75', '8' ) ;?>					
							</td>
							<td>
								<strong>Available Tags :[PAYMENT_DETAIL], [CAMPAIGN], [FIRST_NAME], [LAST_NAME], [ORGANIZATION], [ADDRESS], [ADDRESS2], [CITY], [STATE], [CITY], [ZIP], [COUNTRY], [PHONE], [FAX], [EMAIL], [COMMENT], [AMOUNT]</strong>
							</td>
						</tr>
						<tr>
							<td class="key">
								<?php echo JText::_('User email body (offline payment)'); ?>
							</td>
							<td>
								<?php echo $editor->display( 'user_email_body_offline',  $this->config->user_email_body_offline , '100%', '250', '75', '8' ) ;?>					
							</td>
							<td>
								<strong>Available Tags :[PAYMENT_DETAIL], [CAMPAIGN], [FIRST_NAME], [LAST_NAME], [ORGANIZATION], [ADDRESS], [ADDRESS2], [CITY], [STATE], [CITY], [ZIP], [COUNTRY], [PHONE], [FAX], [EMAIL], [COMMENT], [AMOUNT]</strong>
							</td>
						</tr>
						<tr>
							<td class="key">
								<?php echo JText::_('Payment approved subject'); ?>
							</td>
							<td>
								<input type="text" name="payment_approved_email_subject" class="inputbox" value="<?php echo $this->config->payment_approved_email_subject; ?>" size="50" />
							</td>
							<td>
								<strong>Availale Tags : [FORM_TITLE]</strong>
							</td>
						</tr>
						<tr>
							<td class="key">
								<?php echo JText::_('Payment approved body'); ?>
							</td>
							<td>
								<?php echo $editor->display( 'payment_approved_email_body',  $this->config->payment_approved_email_body , '100%', '250', '75', '8' ) ;?>					
							</td>
							<td>
								<strong>Available Tags :[PAYMENT_DETAIL], [FORM_TITLE], [FIRST_NAME], [LAST_NAME], [ORGANIZATION], [ADDRESS], [ADDRESS2], [CITY], [STATE], [CITY], [ZIP], [COUNTRY], [PHONE], [FAX], [EMAIL], [COMMENT], [AMOUNT]</strong>
							</td>
						</tr>						
						<tr>
							<td class="key">
								<?php echo JText::_('Form Message'); ?>														
							</td>
							<td>			
								<?php echo $editor->display( 'donation_form_msg',  $this->config->donation_form_msg , '100%', '250', '75', '8' ) ;?>							
							</td>
							<td>
								<strong>The message displayed above the payemnt form. Available tags: [FORM_TITLE], [AMOUNT]</strong>
							</td>
						</tr>
						<tr>
							<td class="key">
								<?php echo JText::_('Confirmation message'); ?>												
							</td>
							<td>
								<?php echo $editor->display( 'confirmation_message',  $this->config->confirmation_message , '100%', '250', '75', '8' ) ;?>					
							</td>
							<td>
								<strong>The message displayed above the confirmation form. Available tags: [FORM_TITLE], [AMOUNT]</strong>
							</td>
						</tr>			
						<tr>
							<td class="key">
								<?php echo JText::_('Thank you message'); ?>					
							</td>
							<td>			
								<?php echo $editor->display( 'thanks_message',  $this->config->thanks_message , '100%', '250', '75', '8' ) ;?>							
							</td>
							<td>
								<strong>This message will be displayed on the thank you page after users complete payment</strong>
							</td>
						</tr>								
						<tr>
							<td class="key">
								<?php echo JText::_('Thank you message (offline payment)'); ?>					
							</td>
							<td>			
								<?php echo $editor->display( 'thanks_message_offline',  $this->config->thanks_message_offline , '100%', '250', '75', '8' ) ;?>							
							</td>
							<td>
								<strong>This message will be displayed on the thank you page after users complete an offline payment</strong>
							</td>
						</tr>
						<tr>
							<td class="key">
								<?php echo JText::_('Cancel message'); ?>					
							</td>
							<td>
								<?php echo $editor->display( 'cancel_message',  $this->config->cancel_message , '100%', '250', '75', '8' ) ;?>					
							</td>
							<td>
								<strong>This message will be displayed on the page if users cancel their payment</strong>
							</td>
						</tr>
						<tr>
							<td class="key">
								<?php echo JText::_('Payment Failure Message'); ?>					
							</td>
							<td>
								<?php echo $editor->display( 'failure_message',  $this->config->failure_message , '100%', '250', '75', '8' ) ;?>					
							</td>
							<td>
								<strong>This message will be displayed on the page if the payment from user is failure</strong>
							</td>
						</tr>

						<?php
						if (count($this->extraOfflinePlugins))
						{
							foreach($this->extraOfflinePlugins as $offlinePaymentPlugin)
							{
								$name = $offlinePaymentPlugin->name;
								$title = $offlinePaymentPlugin->title;
								$prefix = str_replace('os_offline', '', $name);
							?>
								<tr>
									<td class="key">
										<?php echo JText::_('User email body ('.$title.')'); ?>
									</td>
									<td>
										<?php echo $editor->display('user_email_body_offline' . $prefix, $this->config->{'user_email_body_offline' . $prefix}, '100%', '250', '75', '8');?>
									</td>
									<td>
										<strong>Available Tags :[PAYMENT_DETAIL], [CAMPAIGN], [FIRST_NAME], [LAST_NAME], [ORGANIZATION], [ADDRESS], [ADDRESS2], [CITY], [STATE], [CITY], [ZIP], [COUNTRY], [PHONE], [FAX], [EMAIL], [COMMENT], [AMOUNT]</strong>
									</td>
								</tr>

								<tr>
									<td class="key">
										<?php echo JText::_('Thank you message ('.$title.')'); ?>
									</td>
									<td>
										<?php echo $editor->display('thanks_message_offline' . $prefix, $this->config->{'thanks_message_offline' . $prefix}, '100%', '250', '75', '8');?>
									</td>
									<td>
										<strong>This message will be displayed on the thank you page after users complete an offline payment</strong>
									</td>
								</tr>
							<?php
							}
						}
						?>
					</table>
				</div>

			<div class="tab-pane" id="invoice-page">
				<table class="admintable adminform" style="width:100%;">
					<tr>
						<td  class="key" width="10%">
							<?php echo JText::_('PF_ACTIVATE_INVOICE_FEATURE'); ?>
						</td>
						<td width="60%">
							<?php echo $this->lists['activate_invoice_feature']; ?>
						</td>
						<td>
							<?php echo JText::_('PF_ACTIVATE_INVOICE_FEATURE_EXPLAIN'); ?>
						</td>
					</tr>
					<tr>
						<td  class="key" width="10%">
							<?php echo JText::_('PF_SEND_INVOICE_TO_CUSTOMERS'); ?>
						</td>
						<td width="60%">
							<?php echo $this->lists['send_invoice_to_customer']; ?>
						</td>
						<td>
							<?php echo JText::_('PF_SEND_INVOICE_TO_CUSTOMERS_EXPLAIN'); ?>
						</td>
					</tr>
					<tr>
						<td  class="key">
							<?php echo JText::_('PF_INVOICE_START_NUMBER'); ?>
						</td>
						<td>
							<input type="text" name="invoice_start_number" class="inputbox" value="<?php echo $this->config->invoice_start_number ? $this->config->invoice_start_number : 1; ?>" size="10" />
						</td>
						<td>
							<?php echo JText::_('PF_INVOICE_START_NUMBER_EXPLAIN'); ?>
						</td>
					</tr>
					<tr>
						<td  class="key" style="width:25%">
							<?php echo JText::_('PF_INVOICE_PREFIX'); ?>
						</td>
						<td>
							<input type="text" name="invoice_prefix" class="inputbox" value="<?php echo isset($this->config->invoice_prefix) ? $this->config->invoice_prefix : 'IV'; ?>" size="10" />
						</td>
						<td>
							<?php echo JText::_('PF_INVOICE_PREFIX_EXPLAIN'); ?>
						</td>
					</tr>
					<tr>
						<td  class="key" style="width:25%">
							<?php echo JText::_('PF_INVOICE_NUMBER_LENGTH'); ?>
						</td>
						<td>
							<input type="text" name="invoice_number_length" class="inputbox" value="<?php echo $this->config->invoice_number_length ? $this->config->invoice_number_length : 5; ?>" size="10" />
						</td>
						<td>
							<?php echo JText::_('PF_INVOICE_NUMBER_LENGTH_EXPLAIN'); ?>
						</td>
					</tr>
					<tr>
						<td class="key">
							<?php echo JText::_('PF_INVOICE_FORMAT'); ?>
						</td>
						<td>
							<?php echo $editor->display( 'invoice_format',  $this->config->invoice_format , '100%', '550', '75', '8' ) ;?>
						</td>
						<td>
							<?php echo JText::_('PF_INVOICE_FORMAT_EXPLAIN'); ?>
						</td>
					</tr>
				</table>
			</div>

		</div>		
	</div>
	<input type="hidden" name="task" value="" />
	<?php echo JHtml::_( 'form.token' ); ?>
</form>