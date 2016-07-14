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
?>
<form action="index.php?option=com_pmform&view=payments" method="post" name="adminForm" id="adminForm" class="form form-horizontal">
<div class="row-fluid" style="float: left;">
	<table class="admintable adminform" width="100%" style="width:100%;">
        <tr>
            <td class="key" width="15%">
                <?php echo  JText::_('User'); ?>
            </td>
            <td>
                <?php echo PMFormHelper::getUserInput($this->item->user_id); ?>
            </td>
        </tr>
        <?php
            $this->form->removeField('amount');
            echo $this->form->render(false);
		?>
		<tr>
            <td class="key" width="15%">
                <?php echo  JText::_('PF_TOTAL_AMOUNT'); ?>
            </td>
            <td>
                <?php echo $this->config->currency_symbol ;  ?><input type="text" class="inputbox" name="total_amount" value="<?php echo $this->item->total_amount > 0 ? round($this->item->total_amount, 2) : ""; ?>" size="7" />
            </td>
        </tr>
       	<tr>
            <td class="key" width="15%">
                <?php echo  JText::_('PF_DISCOUNT_AMOUNT'); ?>
            </td>
            <td>
                <?php echo $this->config->currency_symbol ;  ?><input type="text" class="inputbox" name="discount_amount" value="<?php echo $this->item->amount > 0 ? round($this->item->discount_amount, 2) : ""; ?>" size="7" />
            </td>
        </tr>
        <?php
        if ($this->item->payment_processing_fee > 0)
        {
	    ?>
	        <tr>
		        <td class="key" width="15%">
			        <?php echo  JText::_('PF_PAYMENT_FEE'); ?>
		        </td>
		        <td>
			        <?php echo $this->config->currency_symbol ;  ?><input type="text" class="inputbox" name="payment_processing_fee" value="<?php echo $this->item->payment_processing_fee > 0 ? round($this->item->payment_processing_fee, 2) : ""; ?>" size="7" />
		        </td>
	        </tr>
	    <?php
        }
		?>
		<tr>
			<td class="key" width="15%">
				<?php echo  JText::_('PF_GROSS_AMOUNT'); ?>
			</td>
			<td>
				<?php echo $this->config->currency_symbol ;  ?><input type="text" class="inputbox" name="gross_amount" value="<?php echo $this->item->gross_amount > 0 ? round($this->item->gross_amount, 2) : ""; ?>" size="7" />
			</td>
		</tr>
		<?php
        if ($this->item->coupon_code)
        {
        ?>
       <tr>
            <td class="key" width="15%">
                <?php echo  JText::_('Coupon Code'); ?>
            </td>
            <td>
                <?php echo $this->item->coupon_code ; ?>
            </td>
        </tr>
        <?php
        } 
        ?>
        <tr>
            <td class="key" width="15%">
                <?php echo  JText::_('Payment method'); ?>
            </td>
            <td>
                <?php echo $this->lists['payment_method']; ?>
            </td>
        </tr>
        <tr>
            <td class="key" width="15%">
                <?php echo  JText::_('Transaction ID'); ?>
            </td>
            <td>
                <input type="text" class="inputbox" size="50" name="transaction_id" id="transaction_id" value="<?php echo $this->item->transaction_id ; ?>" />
            </td>
        </tr>
        <tr>
             <td class="key" width="15%">
                 <?php echo JText::_('Paid'); ?>
             </td>
             <td>
                 <?php echo $this->lists['published']; ?>
            </td>
          </tr>
	</table>	
</div>
<div class="clr"></div>
	<input type="hidden" name="id" value="<?php echo $this->item->id; ?>" />
	<input type="hidden" name="form_id" value="<?php echo $this->formId; ?>" />
	<input type="hidden" name="task" value="" />	
	<?php echo JHtml::_( 'form.token' ); ?>
</form>