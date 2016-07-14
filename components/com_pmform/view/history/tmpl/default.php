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
<div id="payment-history-page" class="row-fluid pf-container">
<h1 class="title"><?php echo JText::_('PF_PAYMENT_HISTORY') ; ?></h1>
<table class="table table-striped table-bordered table-condensed">
	<thead>
		<tr>
			<th width="5%" class="hidden-phone">
				<?php echo JText::_('PF_NO'); ?>
			</th>
			<th>
				<?php echo JText::_('PF_FORM') ?>
			</th>
			<th width="15%" class="center hidden-phone">
				<?php echo JText::_('PF_PAYMENT_DATE') ; ?>
			</th>
			<th width="15%" align="right">
				<?php echo JText::_('PF_AMOUNT') ; ?>
			</th>
			<th width="15%" class="hidden-phone">
				<?php echo JText::_('PF_TRANSACTION_ID') ; ?>
			</th>
			<?php
			if ($this->config->activate_invoice_feature)
			{
			?>
				<th class="hidden-phone">
					<?php echo JText::_('PF_INVOICE_NUMBER') ; ?>
				</th>
			<?php
			}
			?>
		</tr>
	</thead>
	<tbody>
	<?php
		for ($i = 0 , $n = count($this->items) ; $i < $n ; $i++)
		{
			$row = $this->items[$i] ;
		?>
			<tr>
				<td class="hidden-phone">
					<?php echo $i + 1 ; ?>
				</td>
				<td>
					<?php echo $row->title; ?>
				</td>
				<td class="center hidden-phone">
					<?php echo JHtml::_('date', $row->payment_date, $this->config->date_format) ; ?>
				</td>
				<td class="text-right">
					<?php echo PmFormHelper::formatAmount($row->gross_amount, $this->config) ; ?>
				</td>
				<td class="center hidden-phone">
					<?php echo $row->transaction_id ; ?>
				</td>
				<?php
					if ($this->config->activate_invoice_feature)
					{
					?>
						<td>
						<a href="<?php echo JRoute::_('index.php?option=com_pmform&task=download_invoice&id='.$row->id); ?>" title="<?php echo JText::_('PM_DOWNLOAD'); ?>"><?php echo PMFormHelper::formatInvoiceNumber($row->invoice_number, $this->config) ; ?></a>
						</td>
					<?php
					}
				?>

			</tr>
		<?php
		}
	?>
	</tbody>
	<?php
		if ($this->pagination->total > $this->pagination->limit)
		{
		?>
			<tfoot>
				<tr>
					<td colspan="5">
						<div class="pagination"><?php echo $this->pagination->getListFooter(); ?></div>
					</td>
				</tr>
			</tfoot>
		<?php
		}
	?>
</table>
</div>