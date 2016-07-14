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
$cols = 13 ;
if ($this->config->show_coupon)
{
    $cols++ ;
}
?>
<script type="text/javascript">
	Joomla.submitbutton = function(pressbutton)
	{
		var form = document.adminForm;
		if (pressbutton == 'add')
		{
			if(form.filter_form_id.value == 0)
			{
				alert('<?php echo JText::_('PF_PLEASE_SELECT_FORM'); ?>');
				return ;
			}
		}
		Joomla.submitform(pressbutton, form);
	}
</script>
<form action="index.php?option=com_pmform&view=payments" method="post" name="adminForm" id="adminForm">
<table width="100%">
<tr>
	<td align="left">
		<?php echo JText::_( 'Filter' ); ?>:
		<input type="text" name="filter_search" id="search" value="<?php echo $this->state->filter_search;?>" class="text_area search-query" onchange="document.adminForm.submit();" />
		<button onclick="this.form.submit();" class="btn"><?php echo JText::_( 'Go' ); ?></button>
		<button onclick="document.getElementById('search').value='';this.form.submit();" class="btn"><?php echo JText::_( 'Reset' ); ?></button>
	</td>
	<td style="float: right;">
		<?php
			echo $this->lists['filter_form_id'];
			echo $this->lists['filter_state'];
			if (version_compare(JVERSION, '3.0', 'ge'))
			{
				echo $this->pagination->getLimitBox();
			}
		?>
	</td>
</tr>
</table>
<div id="editcell">
	<table class="adminlist table table-stripped">
	<thead>
		<tr>
			<th width="5">
				<?php echo JText::_( 'NUM' ); ?>
			</th>
			<th width="20">
				<input type="checkbox" name="toggle" value="" onclick="Joomla.checkAll(this);" />
			</th>
			<th class="title" style="text-align: left">
				<?php echo JHtml::_('grid.sort',  'Form Title', 'b.title', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<th class="title" style="text-align: left">
				<?php echo JHtml::_('grid.sort',  'First name', 'tbl.first_name', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<th class="title" style="text-align: left;">
				<?php echo JHtml::_('grid.sort',  'Last name', 'tbl.last_name', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<th class="title" style="text-align: left">
				<?php echo JHtml::_('grid.sort',  'Username', 'c.username', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<th class="title" style="text-align: left;">
				<?php echo JHtml::_('grid.sort',  'Organization', 'tbl.organization', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<th class="title">
				<?php echo JHtml::_('grid.sort',  'Payment Date', 'tbl.created_date', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<th class="title">
				<?php echo JHtml::_('grid.sort',  'Amount', 'tbl.gross_amount', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<?php
				if ($this->config->show_coupon)
				{
				?>
				<th class="title">
					<?php echo JHtml::_('grid.sort',  'Coupon Code', 'd.code', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
				</th>
				<?php
				}
			?>
			<th class="title">
				<?php echo JHtml::_('grid.sort',  'Payment method', 'tbl.payment_method', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<th class="title">
				<?php echo JHtml::_('grid.sort',  'Transaction ID', 'tbl.transaction_id', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<th class="title">
				<?php echo JHtml::_('grid.sort',  'Paid', 'tbl.published', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<?php
			if ($this->config->activate_invoice_feature)
			{
			?>
				<th width="8%">
					<?php echo JHtml::_('grid.sort',  JText::_('Invoice Number'), 'tbl.invoice_number', $this->state->filter_order_Dir, $this->state->filter_order); ?>
				</th>
			<?php
			}
			?>
			<th width="1%" nowrap="nowrap">
				<?php echo JHtml::_('grid.sort',  'ID', 'tbl.id', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
		</tr>
	</thead>
	<tfoot>
		<tr>
			<td colspan="<?php echo $cols ; ?>">
				<?php echo $this->pagination->getListFooter(); ?>
			</td>
		</tr>
	</tfoot>
	<tbody>
	<?php
	$k = 0;
	for ($i=0, $n=count( $this->items ); $i < $n; $i++)
	{
		$row = &$this->items[$i];
		$link 	= JRoute::_( 'index.php?option=com_pmform&task=payment.edit&id='. $row->id );
		$checked 	= JHtml::_('grid.id',   $i, $row->id );
		$published = JHtml::_('grid.published', $row, $i) ;
		?>
		<tr class="<?php echo "row$k"; ?>">
			<td>
				<?php echo $this->pagination->getRowOffset( $i ); ?>
			</td>
			<td>
				<?php echo $checked; ?>
			</td>
			<td>
				<a href="<?php echo $link; ?>"><?php echo $row->title ; ?></a>
			</td>
			<td>
				<a href="<?php echo $link; ?>">
					<?php echo $row->first_name; ?>
				</a>
			</td>
			<td>
				<a href="<?php echo $link; ?>">
					<?php echo $row->last_name; ?>
				</a>
			</td>
			<td>
				<?php
					if ($row->user_id)
					{
					?>
						<a href="index.php?option=com_users&view=user&task=edit&cid[]=<?php echo $row->user_id; ?>">
							<?php echo $row->username; ?>
						</a>
					<?php
					}
				?>
			</td>
			<td>
				<?php echo $row->organization; ?>
			</td>
			<td class="center">
				<?php echo  JHtml::_('date', $row->created_date, $this->config->date_format, null); ?>
			</td>
			<td class="center">
				<?php echo  PMFormHelper::formatAmount($row->gross_amount, $this->config); ?>
			</td>
			<?php
				if ($this->config->show_coupon)
				{
				?>
				<td>
					<?php echo $row->coupon_code ; ?>
				</td>
				<?php
				}
			?>
			<td class="center">
				<?php
					if ($row->payment_method)
					{
						$method = os_payments::getPaymentMethod($row->payment_method);
						if ($method)
						{
							echo $method->getTitle();
						}
					}
				?>
			</td>
			<td class="center">
				<?php echo $row->transaction_id ;?>
			</td>
			<td class="center">
				<?php echo $published ; ?>
			</td>
			<?php
			if ($this->config->activate_invoice_feature)
			{
			?>
				<td class="center">
					<?php
					if ($row->invoice_number)
					{
					?>
						<a href="<?php echo JRoute::_('index.php?option=com_pmform&task=payment.download_invoice&id='.$row->id); ?>" title="<?php echo JText::_('PM_DOWNLOAD'); ?>"><?php echo PMFormHelper::formatInvoiceNumber($row->invoice_number, $this->config) ; ?></a>
					<?php
					}
					?>
				</td>
			<?php
			}
			?>
			<td class="center">
				<?php echo $row->id; ?>
			</td>
		</tr>
		<?php
		$k = 1 - $k;
	}
	?>
	</tbody>
	</table>
	</div>
	<input type="hidden" name="task" value="" />
	<input type="hidden" name="boxchecked" value="0" />
	<input type="hidden" name="filter_order" value="<?php echo $this->state->filter_order; ?>" />
	<input type="hidden" name="filter_order_Dir" value="<?php echo $this->state->filter_order_Dir; ?>" />
	<?php echo JHtml::_( 'form.token' ); ?>
</form>