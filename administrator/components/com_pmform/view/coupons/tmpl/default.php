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
<form action="index.php?option=com_pmform&view=coupons" method="post" name="adminForm" id="adminForm">
<table>
<tr>
	<td align="left" width="100%">
		<?php echo JText::_( 'Filter' ); ?>:
		<input type="text" name="filter_search" id="search" value="<?php echo $this->state->filter_search;?>" class="text_area search-query" onchange="document.adminForm.submit();" />
		<button onclick="this.form.submit();" class="btn"><?php echo JText::_( 'Go' ); ?></button>
		<button onclick="document.getElementById('search').value='';this.form.submit();" class="btn"><?php echo JText::_( 'Reset' ); ?></button>		
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
				<?php echo JHtml::_('grid.sort',  JText::_('code'), 'tbl.code', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>								
			<th width="15%" class="title" nowrap="nowrap">
				<?php echo JText::_('Discount'); ?>
			</th>									
			<th width="10%" class="title" nowrap="nowrap">
				<?php echo JHtml::_('grid.sort',  JText::_('Times'), 'tbl.times', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<th width="10%" class="title" nowrap="nowrap">
				<?php echo JHtml::_('grid.sort',  JText::_('Used'), 'tbl.used', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>	
			<th width="10%" class="title" nowrap="nowrap">
				<?php echo JHtml::_('grid.sort',  JText::_('Valid from'), 'tbl.valid_from', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>					
			<th width="10%" class="title" nowrap="nowrap">
				<?php echo JHtml::_('grid.sort',  JText::_('Valid to'), 'tbl.valid_to', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<th width="5%" class="title" nowrap="nowrap">
				<?php echo JHtml::_('grid.sort',  JText::_('Published'), 'tbl.published', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>																
		</tr>
	</thead>
	<tfoot>
		<tr>
			<td colspan="9">
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
		$link 	= JRoute::_( 'index.php?option=com_pmform&task=coupon.edit&id='. $row->id );
		$checked 	= JHtml::_('grid.id',   $i, $row->id );
		$published 	= JHtml::_('grid.published', $row, $i);
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
					<?php echo $row->code; ?>
				</a>
			</td>
			<td class="center">
				<?php echo number_format($row->discount, 2).$this->discountTypes[$row->coupon_type]  ;?>
			</td>										
			<td class="center">
				<?php echo $row->times; ?>
			</td>	
			<td class="center">
				<?php echo $row->used; ?>
			</td>
			<td class="center">
				<?php
					if ($row->valid_from != $this->nullDate)
					{
						echo JHtml::_('date', $row->valid_from, $this->dateFormat, null);
					}
				?>
			</td>	
			<td class="center">
				<?php
					if ($row->valid_to != $this->nullDate)
					{
						echo JHtml::_('date', $row->valid_to, $this->dateFormat, null);
					}
				?>
			</td>										
			<td class="center">
				<?php echo $published; ?>
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