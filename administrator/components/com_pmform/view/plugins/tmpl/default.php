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
<form action="index.php?option=com_pmform&view=plugins" method="post" name="adminForm" id="adminForm" enctype="multipart/form-data">
<table>
<tr>
	<td align="left" width="100%">
		<?php echo JText::_( 'Filter' ); ?>:
		<input type="text" name="filter_search" id="search" value="<?php echo $this->state->filter_search;?>" class="text_area search-query" onchange="this.form.submit();" />
		<button onclick="this.form.submit();" class="btn"><?php echo JText::_( 'Go' ); ?></button>
		<button onclick="document.getElementById('search').value='';this.form.submit();" class="btn"><?php echo JText::_( 'Reset' ); ?></button>		
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
			<th class="title" style="text-align: left;">
				<?php echo JHtml::_('grid.sort',  JText::_('PF_NAME'), 'tbl.name', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<th class="title" width="20%" style="text-align: left;">
				<?php echo JHtml::_('grid.sort', JText::_('PF_TITLE'), 'tbl.title', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>			
			<th class="title">
				<?php echo JHtml::_('grid.sort', JText::_('PF_AUTHOR') , 'tbl.author', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>			
			<th class="title center">
				<?php echo JHtml::_('grid.sort', JText::_('PF_AUTHOR_EMAIL'), 'tbl.email', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>			
			<th class="title center">
				<?php echo JHtml::_('grid.sort', JText::_('PF_PUBLISHED') , 'tbl.published', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
			</th>
			<th width="8%" nowrap="nowrap">
				<?php echo JHtml::_('grid.sort',  'PF_ORDER', 'tbl.ordering', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
				<?php echo JHtml::_('grid.order',  $this->items , 'filesave.png', 'save_plugin_order' ); ?>
			</th>												
			<th>
				<?php echo JHtml::_('grid.sort', JText::_('PF_ID') , 'tbl.id', $this->state->filter_order_Dir, $this->state->filter_order ); ?>
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
	for ($i=0, $n=count( $this->items ); $i < $n; $i++)
	{
		$row = $this->items[$i];
		$link 	= JRoute::_( 'index.php?option=com_pmform&task=plugin.edit&id='. $row->id );
		$checked 	= JHtml::_('grid.id',   $i, $row->id );
		$ordering = true ;
		$published 	= JHtml::_('grid.published', $row, $i, 'tick.png', 'publish_x.png');
		?>
		<tr>
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
				<?php echo $row->title; ?>
			</td>												
			<td>
				<?php echo $row->author; ?>
			</td>
			<td class="center">
				<?php echo $row->author_email;?>
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
	}
	?>
	</tbody>
	</table>
	<table class="adminform" style="margin-top: 50px;">
		<tr>
			<td>
				<fieldset class="adminform">
					<legend><?php echo JText::_('PF_INTALL_PAYMENT_PLUGIN'); ?></legend>
					<table>
						<tr>
							<td>
								<input type="file" name="plugin_package" id="plugin_package" size="50" class="inputbox" /> <input type="button" class="button" value="<?php echo JText::_('Install'); ?>" onclick="installPlugin();" />
							</td>
						</tr>
					</table>					
				</fieldset>
			</td>
		</tr>		
	</table>
	</div>
	<input type="hidden" name="task" value="" />
	<input type="hidden" name="boxchecked" value="0" />
	<input type="hidden" name="filter_order" value="<?php echo $this->state->filter_order; ?>" />
	<input type="hidden" name="filter_order_Dir" value="<?php echo $this->state->filter_order_Dir; ?>" />	
	<?php echo JHtml::_( 'form.token' ); ?>
	<script type="text/javascript">
		function installPlugin()
        {
			var form = document.adminForm ;
			if (form.plugin_package.value =="") {
				alert("<?php echo JText::_("PF_CHOOSE_PLUGIN_TO_INSTALL"); ?>");
				return ;	
			}
			form.task.value = 'install' ;
			form.submit();
		}
	</script>
</form>