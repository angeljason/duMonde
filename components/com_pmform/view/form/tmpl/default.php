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
defined('_JEXEC') or die ;
$headerText = JText::_('PF_FORM_FOR') ;
$headerText = str_replace('[FORM_TITLE]', $this->rowForm->title, $headerText) ;
$message = $this->config->donation_form_msg;
$message = str_replace('[FORM_TITLE]', $this->rowForm->title, $message) ;
$message = str_replace('[AMOUNT]', number_format($this->grossAmount, 2), $message) ;
if ($this->config->use_https)
{
    $url = JRoute::_('index.php?option=com_pmform&Itemid='.$this->Itemid, false, 1);
}
else
{
    $url = JRoute::_('index.php?option=com_pmform&Itemid='.$this->Itemid, false);
}
PMFormHelperJquery::validateForm();
$selectedState = '';
?>
<script type="text/javascript">
	var siteUrl	= "<?php echo PMFormHelper::getSiteUrl(); ?>";
</script>
<script type="text/javascript" src="<?php echo PMFormHelper::getSiteUrl().'components/com_pmform/assets/js/paymentform.js'?>"></script>
<div id="pmform-form" class="row-fluid pf-container">
<h1 class="title"><?php echo $headerText; ?></h1>
<?php
if (strlen($message))
{
?>
    <div class="pf-message"><?php echo $message; ?></div>
<?php
}
if (!$this->userId && $this->config->user_registration && $this->config->show_login_box)
{
    $actionUrl = JRoute::_('index.php?option=com_users&task=user.login');
    $validateLoginForm = 1;
    ?>
    <form method="post" action="<?php echo $actionUrl ; ?>" name="jd-login-form" id="jd-login-form" autocomplete="off" class="form form-horizontal">
        <h3 class="jd-heading"><?php echo JText::_('PF_EXISTING_USER_LOGIN'); ?></h3>
        <div class="control-group">
            <label class="control-label" for="username">
                <?php echo  JText::_('PF_USERNAME') ?><span class="required">*</span>
            </label>
            <div class="controls">
                <input type="text" name="username" id="username" class="input-large validate[required]" value=""/>
            </div>
        </div>
        <div class="control-group">
            <label class="control-label" for="password">
                <?php echo  JText::_('PF_PASSWORD') ?><span class="required">*</span>
            </label>
            <div class="controls">
                <input type="password" id="password" name="password" class="input-large validate[required]" value="" />
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <input type="submit" value="<?php echo JText::_('PF_LOGIN'); ?>" class="button btn btn-primary" />
            </div>
        </div>
        <h3 class="eb-heading"><?php echo JText::_('PF_NEW_USER_REGISTER'); ?></h3>
        <?php
        if (JPluginHelper::isEnabled('system', 'remember'))
        {
        ?>
            <input type="hidden" name="remember" value="1" />
        <?php
        }
        ?>
        <input type="hidden" name="return" value="<?php echo base64_encode(JUri::getInstance()->toString()); ?>" />
        <?php echo JHtml::_( 'form.token' ); ?>
    </form>
<?php
}
else
{
    $validateLoginForm = 0;
}
?>
<form method="post" name="os_form" id="os_form" action="<?php echo $url ; ?>" autocomplete="off" class="form form-horizontal" enctype="multipart/form-data">
    <?php
    if (!$this->userId && $this->config->user_registration)
    {
    $params = JComponentHelper::getParams('com_users');
    $minimumLength = $params->get('minimum_length', 4);
    ($minimumLength) ? $minSize = "minSize[4]" : $minSize = "";

	if (!$this->config->show_login_box)
	{
	?>
		<h3 class="eb-heading"><?php echo JText::_('PF_ACCOUNT_INFORMATION'); ?></h3>
	<?php
	}
    ?>
    <div class="control-group">
        <label class="control-label" for="username1">
            <?php echo  JText::_('PF_USERNAME') ?><span class="required">*</span>
        </label>
        <div class="controls">
            <input type="text" name="username" id="username1" class="input-large validate[required,ajax[ajaxUserCall]]" value="<?php echo $this->input->get('username', '', 'string'); ?>" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="password1">
            <?php echo  JText::_('PF_PASSWORD') ?><span class="required">*</span>
        </label>
        <div class="controls">
            <input type="password" name="password1" id="password1" class="input-large validate[required,<?php echo $minSize;?>]" value=""/>
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="password2">
            <?php echo  JText::_('PF_RETYPE_PASSWORD') ?><span class="required">*</span>
        </label>
        <div class="controls">
            <input type="password" name="password2" id="password2" class="input-large validate[required,equals[password1]]" value="" />
        </div>
    </div>
    <?php
    }
    $fields = $this->form->getFields();
    if (isset($fields['state']))
    {
        $selectedState = $fields['state']->value;
    }
    foreach ($fields as $field)
    {
        if ($field->name =='email')
        {
            if ($this->userId || !$this->config->user_registration)
            {
                //We don't need to perform ajax email validate in this case, so just remove the rule
                $cssClass = $field->getAttribute('class');
                $cssClass = str_replace(',ajax[ajaxEmailCall]', '', $cssClass);
                $field->setAttribute('class', $cssClass);
            }
        }
        echo $field->getControlGroup();
    }
    if (($this->totalAmount > 0) || $this->form->containFeeFields())
    {
	    $buttonText = JText::_('PF_PROCESS_PAYMENT');
	?>
	    <div class="control-group">
		    <label class="control-label">
			    <?php echo JText::_('PF_TOTAL_AMOUNT'); ?>
		    </label>
		    <div class="controls">
			    <div class="input-prepend inline-display">
				    <span class="add-on"><?php echo $this->config->currency_symbol;?></span>
				    <input id="total_amount" type="text" readonly="readonly" class="input-small" value="<?php echo PMFormHelper::formatAmount($this->totalAmount, $this->config); ?>" />
			    </div>
		    </div>
	    </div>
	    <?php
	    if ($this->rowForm->enable_coupon || $this->discountAmount > 0 || $this->showPaymentFee)
	    {
		    if ($this->rowForm->enable_coupon || $this->discountAmount > 0)
		    {
			?>
			    <div class="control-group">
				    <label class="control-label">
					    <?php echo JText::_('PF_DISCOUNT_AMOUNT'); ?>
				    </label>
				    <div class="controls">
					    <div class="input-prepend inline-display">
						    <span class="add-on"><?php echo $this->config->currency_symbol;?></span>
						    <input id="discount_amount" type="text" readonly="readonly" class="input-small" value="<?php echo PMFormHelper::formatAmount($this->discountAmount, $this->config); ?>" />
					    </div>
				    </div>
			    </div>
			<?php
		    }
		    if ($this->showPaymentFee)
		    {
			?>
			    <div class="control-group">
				    <label class="control-label">
					    <?php echo JText::_('PF_PAYMENT_FEE'); ?>
				    </label>
				    <div class="controls">
					    <div class="input-prepend inline-display">
						    <span class="add-on"><?php echo $this->config->currency_symbol;?></span>
						    <input id="payment_processing_fee" type="text" readonly="readonly" class="input-small" value="<?php echo PMFormHelper::formatAmount($this->paymentProcessingFee, $this->config); ?>" />
					    </div>
				    </div>
			    </div>
			<?php
		    }
		?>
		    <div class="control-group">
			    <label class="control-label">
				    <?php echo JText::_('PF_GROSS_AMOUNT'); ?>
			    </label>
			    <div class="controls">
				    <div class="input-prepend inline-display">
					    <span class="add-on"><?php echo $this->config->currency_symbol;?></span>
					    <input id="gross_amount" type="text" readonly="readonly" class="input-small" value="<?php echo PMFormHelper::formatAmount($this->grossAmount, $this->config); ?>" />
					</div>
			    </div>
		    </div>
	    <?php
	    }
		if ($this->rowForm->enable_coupon)
		{
		?>
			<div class="control-group">
				<label class="control-label" for="coupon_code"><?php echo  JText::_('PF_COUPON') ?></label>
				<div class="controls">
					<input type="text" class="input-medium" name="coupon_code" id="coupon_code" value="<?php echo $this->input->get('coupon_code', '', 'none'); ?>" onchange="calculateFormFee();" />
					<span class="invalid" id="coupon_validate_msg" style="display: none;"><?php echo JText::_('PF_INVALID_COUPON'); ?></span>
				</div>
			</div>
		<?php
		}
	    if (count($this->methods) > 1)
	    {
		?>
		    <div class="control-group">
			    <label class="control-label">
				    <?php echo JText::_('PF_PAYMENT_OPTION'); ?>
				    <span class="required">*</span>
			    </label>
			    <div class="controls">
				    <?php
				    $method = null ;
				    for ($i = 0 , $n = count($this->methods); $i < $n; $i++)
				    {
					    $paymentMethod = $this->methods[$i];
					    if ($paymentMethod->getName() == $this->paymentMethod)
					    {
						    $checked = ' checked="checked" ';
						    $method = $paymentMethod ;
					    }
					    else
					    {
						    $checked = '';
					    }
					    ?>
					    <label>
						    <input onclick="changePaymentMethod();" type="radio" name="payment_method" value="<?php echo $paymentMethod->getName(); ?>" <?php echo $checked; ?> /><?php echo JText::_($paymentMethod->getTitle()); ?> <br />
					    </label>
				    <?php
				    }
				    ?>
			    </div>
		    </div>
	    <?php
	    }
	    else
	    {
		    $method = $this->methods[0] ;
		?>
		    <div class="control-group">
			    <label class="control-label">
				    <?php echo JText::_('PF_PAYMENT_OPTION'); ?>
			    </label>
			    <div class="controls">
				    <?php echo JText::_($method->getTitle()); ?>
			    </div>
		    </div>
	    <?php
	    }
	    if ($method->getCreditCard())
	    {
		    $style = '' ;
	    }
	    else
	    {
		    $style = 'style = "display:none"';
	    }
	    ?>
	    <div class="control-group" id="tr_card_number" <?php echo $style; ?>>
		    <label class="control-label"><?php echo  JText::_('AUTH_CARD_NUMBER'); ?><span class="required">*</span></label>
		    <div class="controls">
			    <input type="text" name="x_card_num" class="input-large validate[required,creditCard]" onkeyup="checkNumber(this)" value="<?php echo $this->input->get('x_card_num', '', 'none'); ?>" size="20" />
		    </div>
	    </div>
	    <div class="control-group" id="tr_exp_date" <?php echo $style; ?>>
		    <label class="control-label">
			    <?php echo JText::_('AUTH_CARD_EXPIRY_DATE'); ?><span class="required">*</span>
		    </label>
		    <div class="controls">
			    <?php echo $this->lists['exp_month'] .'  /  '.$this->lists['exp_year'] ; ?>
		    </div>
	    </div>
	    <div class="control-group" id="tr_cvv_code" <?php echo $style; ?>>
		    <label class="control-label">
			    <?php echo JText::_('AUTH_CVV_CODE'); ?><span class="required">*</span>
		    </label>
		    <div class="controls">
			    <input type="text" name="x_card_code" class="input-large validate[required,custom[number]]" value="<?php echo $this->input->get('x_card_code', '', 'none'); ?>" size="20" />
		    </div>
	    </div>
	    <?php
	    if ($method->getCardType())
	    {
		    $style = '' ;
	    }
	    else
	    {
		    $style = ' style = "display:none;" ' ;
	    }
	    ?>
	    <div class="control-group" id="tr_card_type" <?php echo $style; ?>>
		    <label class="control-label">
			    <?php echo JText::_('PF_CARD_TYPE'); ?><span class="required">*</span>
		    </label>
		    <div class="controls">
			    <?php echo $this->lists['card_type'] ; ?>
		    </div>
	    </div>
	    <?php
	    if ($method->getCardHolderName())
	    {
		    $style = '' ;
	    }
	    else
	    {
		    $style = ' style = "display:none;" ' ;
	    }
	    ?>
	    <div class="control-group" id="tr_card_holder_name" <?php echo $style; ?>>
		    <label class="control-label">
			    <?php echo JText::_('PF_CARD_HOLDER_NAME'); ?><span class="required">*</span>
		    </label>
		    <div class="controls">
			    <input type="text" name="card_holder_name" class="input-large validate[required]"  value="<?php echo $this->input->get('card_holder_name', '', 'none'); ?>" size="40" />
		    </div>
	    </div>
	    <?php
	    if (PMFormHelper::isPaymentMethodEnabled('os_echeck'))
	    {
		    if ($method->getName() == 'os_echeck')
		    {
			    $style = '';
		    }
		    else
		    {
			    $style = ' style = "display:none;" ' ;
		    }
		    ?>
		    <div class="control-group" id="tr_bank_rounting_number" <?php echo $style; ?>>
			    <label class="control-label"><?php echo JText::_('PF_BANK_ROUTING_NUMBER'); ?><span class="required">*</span></label>
			    <div class="controls"><input type="text" name="x_bank_aba_code" class="input-large validate[required,custom[number]]"  value="<?php echo $this->input->get('x_bank_aba_code', '', 'none'); ?>" size="40" /></div>
		    </div>
		    <div class="control-group" id="tr_bank_account_number" <?php echo $style; ?>>
			    <label class="control-label"><?php echo JText::_('PF_BANK_ACCOUNT_NUMBER'); ?><span class="required">*</span></label>
			    <div class="controls"><input type="text" name="x_bank_acct_num" class="input-large validate[required,custom[number]]"  value="<?php echo $this->input->get('x_bank_acct_num', '', 'none');; ?>" size="40" /></div>
		    </div>
		    <div class="control-group" id="tr_bank_account_type" <?php echo $style; ?>>
			    <label class="control-label"><?php echo JText::_('PF_BANK_ACCOUNT_TYPE'); ?><span class="required">*</span></label>
			    <div class="controls"><?php echo $this->lists['x_bank_acct_type']; ?></div>
		    </div>
		    <div class="control-group" id="tr_bank_name" <?php echo $style; ?>>
			    <label class="control-label"><?php echo JText::_('PF_BANK_NAME'); ?><span class="required">*</span></label>
			    <div class="controls"><input type="text" name="x_bank_name" class="input-large validate[required]"  value="<?php echo $this->input->get('x_bank_name', '', 'none'); ?>" size="40" /></div>
		    </div>
		    <div class="control-group" id="tr_bank_account_holder" <?php echo $style; ?>>
			    <label class="control-label"><?php echo JText::_('PF_ACCOUNT_HOLDER_NAME'); ?><span class="required">*</span></label>
			    <div class="controls"><input type="text" name="x_bank_acct_name" class="input-large validate[required]"  value="<?php echo $this->input->get('x_bank_acct_name', '', 'none'); ?>" size="40" /></div>
		    </div>
	    <?php
	    }
	    if ($this->idealEnabled)
	    {
		    if ($method->getName() == 'os_ideal')
		    {
			    $style = '' ;
		    }
		    else
		    {
			    $style = ' style = "display:none;" ' ;
		    }
		    ?>
		    <div class="control-group" id="tr_bank_list" <?php echo $style; ?>>
			    <label class="control-label">
				    <?php echo JText::_('PF_BANK_LIST'); ?><span class="required">*</span>
			    </label>
			    <div class="controls">
				    <?php echo $this->lists['bank_id'] ; ?>
			    </div>
		    </div>
	    <?php
	    }
    }
    else
    {
	    $buttonText = JText::_('PF_SUBMIT');
    }
	if($this->showCaptcha)
	{
	?>
	    <div class="control-group">
			<label class="control-label">
				<?php echo JText::_('PF_CAPTCHA'); ?><span class="required">*</span>
			</label>
			<div class="controls">
				<?php echo $this->captcha; ?>
			</div>
		</div>
	<?php
	}
	if ($this->config->accept_term ==1 && $this->config->article_id > 0)
	{
	    JHtml::_('behavior.modal', 'a.pf-modal');
	    $articleId = $this->config->article_id;
	    //Terms and Conditions
	    require_once JPATH_ROOT.'/components/com_content/helpers/route.php' ;
	    $termLink = ContentHelperRoute::getArticleRoute($articleId).'&tmpl=component&format=html' ;
	    $extra = ' class="pf-modal" ' ;
	?>
	    <div class="control-group">
	        <label class="checkbox">
	            <input type="checkbox" name="accept_term" value="1" class="validate[required]" data-errormessage="<?php echo JText::_('PF_ACCEPT_TERMS');?>" />
	            <?php echo JText::_('PF_ACCEPT'); ?>&nbsp;
	            <?php
	                echo "<a $extra href=\"".JRoute::_($termLink)."\">"."<strong>".JText::_('PF_TERM_AND_CONDITION')."</strong>"."</a>\n";
	            ?>
	        </label>
	    </div>
	<?php
	}
    if ($this->config->show_confirmation_step)
    {
	    $task = 'payment_confirmation';
	    $buttonText = JText::_('PF_PAYMENT_CONFIRMATION');
    }
    else
    {
	    $task = 'process_payment';
    }
	?>
	<div class="form-actions">
		<input type="submit" id="btn-submit" class="btn btn-primary" name="btnSubmit" value="<?php echo $buttonText; ?>">
		<img id="ajax-loading-animation" src="<?php echo JUri::base(true);?>/components/com_pmform/assets/icons/ajax-loadding-animation.gif" style="display: none;"/>
	</div>    <p class="text-muted">*Please take note that a processing fee of 1.75% from total amount + $0.30 will be charged on top of the bill upon using this form of payment.</p>
	<?php
	if (count($this->methods) == 1)
	{
	?>
		<input type="hidden" name="payment_method" value="<?php echo $this->methods[0]->getName(); ?>" />
	<?php
	}
	?>	
	<input type="hidden" name="validate_form_login" value="<?php echo $validateLoginForm; ?>" />
	<input type="hidden" name="count_method" value="<?php echo count($this->methods); ?>" />
    <input type="hidden" name="form_page_url" value="<?php echo $this->formPageUrl; ?>" />
    <input type="hidden" name="form_id" value="<?php echo $this->rowForm->id; ?>" />
	<input type="hidden" name="task" value="<?php echo $task; ?>" />
    <input type="hidden" name="show_payment_fee" value="<?php echo (int)$this->showPaymentFee ; ?>" />
	<?php echo JHtml::_( 'form.token' ); ?>
	<script type="text/javascript">
		<?php echo os_payments::writeJavascriptObjects() ; ?>
        PMF.jQuery(function($){
            $(document).ready(function(){
	            PMFVALIDATEFORM("#os_form");
                if($("[name*='validate_form_login']").val() == 1)
                {
	                PMFVALIDATEFORM("#jd-login-form");
                }
                <?php
                    if (isset($fields['state']) && JString::strtolower($fields['state']->type) == 'state')
                    {
                    ?>
                        buildStateField('state', 'country', '<?php echo $selectedState; ?>');
                    <?php
                    }
                ?>
            })
        });
    </script>
</form>
</div>