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
$nullDate = JFactory::getDbo()->getNullDate();
$ordering = ($this->state->filter_order == 'tbl.ordering');
?>
<form action="index.php?option=com_pmform&view=forms" method="post" name="adminForm" id="adminForm">
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
	<table class="adminlist table table-striped">
	<thead>
		<tr>
			<th width="5">
				<?php echo JText::_( 'NUM' ); ?>
			</th>
			<th width="20">
				<input type="checkbox" name="toggle" value="" onclick="Joomla.checkAll(this);" />
			</th>
			<th class="title" style="text-align: left;">
				<?php echo JHtml::_('grid.sort',  'PF_TITLE', 'tbl.title', $this->state->filter_order_Dir, $this->state->filter_order); ?>
			</th>
			<th class="title">
				<?php echo JHtml::_('grid.sort',  'PF_PUBLISH_UP', 'tbl.publish_up', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<th class="title">
				<?php echo JHtml::_('grid.sort',  'PF_PUBLISH_DOWN', 'tbl.publish_down', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<th class="title">
				<?php echo JHtml::_('grid.sort',  'PF_LATE_PAYMENT_DATE', 'tbl.late_payment_date', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<th class="title">
				<?php echo JHtml::_('grid.sort',  'PF_PAID_AMOUNT', 'tbl.paid_amount', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<th width="8%" nowrap="nowrap">
				<?php echo JHtml::_('grid.sort',  'PF_ORDER', 'tbl.ordering', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
				<?php if ($ordering) echo JHtml::_('grid.order',  $this->items ); ?>
			</th>			
			<th class="title">
				<?php echo JHtml::_('grid.sort',  'PF_PUBLISHED', 'tbl.published', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>						
			<th width="1%" nowrap="nowrap">
				<?php echo JHtml::_('grid.sort',  'PF_ID', 'tbl.id', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
		</tr>
	</thead>
	<tfoot>
		<tr>
			<td colspan="10">
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
		$link 	= JRoute::_( 'index.php?option=com_pmform&task=form.edit&id='. $row->id );
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
				<a href="<?php echo $link; ?>">
					<?php echo $row->title; ?>
				</a>
			</td>
			<td class="center">
				<?php
					if ($row->publish_up != $nullDate)
					{
						echo JHtml::_('date', $row->publish_up, $this->dateFormat) ;
					}
					else
					{
						echo '';	
					} 
				?>								
			</td>
			<td class="center">
				<?php
					if ($row->publish_down != $nullDate)
					{
						echo JHtml::_('date', $row->publish_down, $this->dateFormat) ;
					}
					else
					{
						echo '';	
					}
				?>
			</td>			
			<td class="center">
				<?php
					if ($row->late_payment_date != $nullDate)
					{
						echo JHtml::_('date', $row->late_payment_date, $this->dateFormat) ;
					}
					else
					{
						echo '';	
					}
				?>
			</td>					
			<td class="center">
				<?php echo number_format($row->total_payment, 2);?>
			</td>
			<td class="order">
				<span><?php echo $this->pagination->orderUpIcon( $i, true,'orderup', 'Move Up', $ordering ); ?></span>
				<span><?php echo $this->pagination->orderDownIcon( $i, $n, true, 'orderdown', 'Move Down', $ordering ); ?></span>
				<?php $disabled = $ordering ?  '' : 'disabled="disabled"'; ?>
				<input type="text" name="order[]" size="5" value="<?php echo $row->ordering;?>" <?php echo $disabled ?> class="input-mini" style="text-align: center" />
			</td>
			<td class="center">
				<?php echo $published ; ?>
			</td>
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