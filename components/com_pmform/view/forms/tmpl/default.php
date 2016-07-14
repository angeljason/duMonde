<?php
/**
 * @version		3.0
 * @package		Joomla
 * @subpackage	Payment Form
 * @author  Tuan Pham Ngoc
 * @copyright	Copyright (C) 2010 - 2015 Ossolution Team
 * @license		GNU/GPL, see LICENSE.php
 */
defined('_JEXEC') or die;
?>
<h1 class="title"><?php echo JText::_('PF_FORM_LIST'); ?></h1>
<table class="table table-bordered table-striped table-condensed">
	<thead>
	<tr>
		<th>
			<?php echo JText::_('PF_TITLE'); ?>
		</th>
		<th width="12%">
			<?php echo JText::_('PF_AMOUNT'); ?>(<?php echo $this->config->currency_symbol; ?>)
		</th>
	</tr>
	</thead>
	<tbody>
	<?php
	for ($i = 0, $n = count($this->items); $i < $n; $i++)
	{
		$row = $this->items[$i];
		if ($this->config->use_https)
		{
			$paymentLink = JRoute::_('index.php?option=com_pmform&view=form&form_id=' . $row->id . '&Itemid=' . $this->Itemid, false, 1);
		}
		else
		{
			$paymentLink = JRoute::_('index.php?option=com_pmform&view=form&form_id=' . $row->id . '&Itemid=' . $this->Itemid, false);
		}
		?>
		<tr>
			<td>
				<a href="<?php echo $paymentLink; ?>"><?php echo $row->title; ?></a>
			</td>
			<td>
				<?php echo PMFormHelper::formatAmount($row->amount, $this->config); ?>
			</td>
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
				<td colspan="2">
					<div class="pagination"><?php echo $this->pagination->getListFooter(); ?></div>
				</td>
			</tr>
		</tfoot>
	<?php
	}
	?>
</table>