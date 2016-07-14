<?php defined('_JEXEC') or die ; ?>
<?php JHtml::_('behavior.tooltip'); ?>
<form action="index.php?option=com_pmform&view=fields" method="post" name="adminForm" id="adminForm">
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
			echo $this->lists['show_core_field'];
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
			<th style="text-align: left;">
				<?php echo JHtml::_('grid.sort',  'PF_NAME', 'tbl.name', $this->state->filter_order_Dir, $this->state->filter_order); ?>
			</th>
			<th style="text-align: left;">
				<?php echo JHtml::_('grid.sort',  'PF_TITLE', 'tbl.title', $this->state->filter_order_Dir, $this->state->filter_order); ?>
			</th>
			<th style="text-align: left;">
				<?php echo JHtml::_('grid.sort',  'PF_FIELD_TYPE', 'tbl.fieldtype', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<th class="title center">
				<?php echo JHtml::_('grid.sort',  'PF_REQUIRE', 'tbl.required', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<th class="title center">
				<?php echo JHtml::_('grid.sort',  'PF_PUBLISHED', 'tbl.published', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<th nowrap="nowrap">
				<?php echo JHtml::_('grid.sort',  'PF_ORDER', 'tbl.ordering', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
				<?php echo JHtml::_('grid.order',  $this->items , 'filesave.png'); ?>
			</th>						
			<th width="1%" nowrap="nowrap" class="center">
				<?php echo JHtml::_('grid.sort',  'PF_ID', 'tbl.id', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
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
	$ordering = ($this->state->filter_order == 'tbl.ordering');
	for ($i=0, $n=count( $this->items ); $i < $n; $i++)
	{
		$row = &$this->items[$i];
		$link 	= JRoute::_( 'index.php?option=com_pmform&task=field.edit&id='. $row->id );
		$checked 	= JHtml::_('grid.id',   $i, $row->id );
		$published = JHtml::_('grid.published', $row, $i, 'tick.png', 'publish_x.png');
		$img 	= $row->required ? 'tick.png' : 'publish_x.png';
		$task 	= $row->required ? 'un_required' : 'required';
		$alt 	= $row->required ? JText::_( 'Required' ) : JText::_( 'Not required' );
		$action = $row->required ? JText::_( 'Not Require' ) : JText::_( 'Require' );				
		$img = JHtml::_('image','admin/'.$img, $alt, array('border' => 0), true) ;
		$href = '
    		<a href="javascript:void(0);" onclick="return listItemTask(\'cb'. $i .'\',\''. $task .'\')" title="'. $action .'">
    		'.$img.'</a>'
    		;   							
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
					<?php echo $row->name; ?>
				</a>
			</td>	
			<td>
				<a href="<?php echo $link; ?>">
					<?php echo $row->title; ?>
				</a>
			</td>
			<td>
				<?php echo $row->fieldtype; ?>
			</td>						
			<td class="center">
				<?php echo $href; ?>
			</td>
			<td class="center">
				<?php echo $published ; ?>
			</td>
			<td class="order">
				<span><?php echo $this->pagination->orderUpIcon( $i, true,'orderup', 'Move Up', $ordering ); ?></span>
				<span><?php echo $this->pagination->orderDownIcon( $i, $n, true, 'orderdown', 'Move Down', $ordering ); ?></span>
				<?php $disabled = $ordering ?  '' : 'disabled="disabled"'; ?>
				<input type="text" name="order[]" size="5" value="<?php echo $row->ordering;?>" <?php echo $disabled ?> class="input-mini" style="text-align: center;" />
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