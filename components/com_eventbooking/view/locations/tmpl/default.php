<?php
/**
 * @version            2.0.5
 * @package            Joomla
 * @subpackage         Event Booking
 * @author             Tuan Pham Ngoc
 * @copyright          Copyright (C) 2010 - 2015 Ossolution Team
 * @license            GNU/GPL, see LICENSE.php
 */
// no direct access
defined('_JEXEC') or die;

?>
<h1 class="eb_title"><?php echo JText::_('EB_LOCATIONS_MANAGEMENT'); ?>
	<span class="add_location_link" style="float: right; font-size:14px;"><a
			href="<?php echo JRoute::_('index.php?option=com_eventbooking&view=location&layout=form&Itemid=' . $this->Itemid); ?>"><i class="icon-plus"></i></i><?php echo JText::_('EB_SUBMIT_LOCATION'); ?></a></span>
</h1><div class="uk-grid">    
        <div class="uk-grid">
            <div class="uk-width-1-1 uk-pull-1-1 uk-text-right">
				<a href="index.php/events/2016-events-calendar" target="_self">
					<i class="uk-icon-calendar"></i>&nbsp;2016 Events Calendar
				</a>
					&nbsp;|&nbsp;
				<a href="index.php/events-calendar" target="_self">
					<i class="uk-icon-clock-o"></i>&nbsp;Events Calendar 
				</a>
					&nbsp;|&nbsp;
				<a href="index.php/upcoming-events" target="_self">
					<i class="uk-icon-calendar-o"></i>&nbsp;Upcoming Events
				</a>
					&nbsp;|&nbsp;
				<a href="index.php/events-archive" target="_self">
					<i class="uk-icon-history"></i>&nbsp;Events Archive
				</a>	
					&nbsp;|&nbsp;
				<a href="index.php/events-locations" target="_self">
					<i class="uk-icon-map-marker"></i>&nbsp;Locations
				</a>
					&nbsp;|&nbsp;
				<a href="index.php/events-registrants" target="_self">
					<i class="uk-icon-users"></i>&nbsp;Registrants
				</a>
					&nbsp;|&nbsp;
				<a href="index.php/my-events-list" target="_self">
					<i class="uk-icon-paper-plane"></i>&nbsp;My Events
				</a>
					&nbsp;|&nbsp;
				<a href="index.php/submit-event" target="_self">
					<i class="uk-icon-plus-square"></i>&nbsp;Submit Event
				</a>
			</div>
        </div>
    </div>
</div>
<form method="post" name="adminForm" id="adminForm"
      action="<?php echo JRoute::_('index.php?option=com_eventbooking&view=locations&Itemid=' . $this->Itemid);; ?>">
	<table class="table table-striped table-bordered table-condensed" style="margin-top: 10px;" id="tblExport">
		<thead>
		<tr>
			<th>
				<?php echo JText::_('EB_NAME'); ?>
			</th>
			<th>
				<?php echo JText::_('EB_ADDRESS'); ?>
			</th>
			<th>
				<?php echo JText::_('EB_CITY'); ?>
			</th>
			<th>
				<?php echo JText::_('EB_STATE'); ?>
			</th>
			<th>
				<?php echo JText::_('EB_ZIP'); ?>
			</th>
			<th>
				<?php echo JText::_('EB_COUNTRY'); ?>
			</th>
			<th>
				<?php echo JText::_('EB_LATITUDE'); ?>
			</th>
			<th>
				<?php echo JText::_('EB_LONGITUDE'); ?>
			</th>
		</tr>
		</thead>
		<tbody>
		<?php
		$k = 0;
		for ($i = 0, $n = count($this->items); $i < $n; $i++)
		{
			$item = $this->items[$i];
			$url  = JRoute::_('index.php?option=com_eventbooking&view=location&layout=form&id=' . $item->id . '&Itemid=' . $this->Itemid);
			?>
			<tr>
				<td>
					<a href="<?php echo $url; ?>" title="<?php echo $item->name; ?>">
						<?php echo $item->name; ?>
					</a>
				</td>
				<td>
					<?php echo $item->address; ?>
				</td>
				<td>
					<?php echo $item->city; ?>
				</td>
				<td>
					<?php echo $item->state; ?>
				</td>
				<td>
					<?php echo $item->zip; ?>
				</td>
				<td>
					<?php echo $item->country; ?>
				</td>
				<td>
					<?php echo $item->lat; ?>
				</td>
				<td>
					<?php echo $item->long; ?>
				</td>
			</tr>
			<?php
			$k = 1 - $k;
		}
		if (count($this->items) == 0)
		{
			?>
			<tr>
				<td colspan="8" style="text-align: center;">
					<div class="info"><?php echo JText::_('EB_NO_LOCATION_RECORDS');?></div>
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
				<td colspan="8">
					<div class="pagination">
						<?php echo $this->pagination->getListFooter(); ?>
					</div>
				</td>
			</tr>
			</tfoot>
		<?php
		}
		?>
	</table>
<?php
if (strpos($_SERVER['HTTP_USER_AGENT'], 'Safari') && !strpos($_SERVER['HTTP_USER_AGENT'], 'Chrome')) {
	$browser = 'Safari';	
}
else
{
		echo "<div class='uk-grid'>";
			echo "<div class='uk-width-1-1'>";
				echo "<div class='uk-grid'>";
					echo "<div class='uk-width-1-1 uk-pull-1-1 uk-text-right'>";
						echo "<a href='#' id='btnExport'>";
							echo "<i class='uk-icon-download'></i>&nbsp;Export to Excel";
						echo "</a>";
					echo "</div>";
				echo "</div>";
			echo "</div>";
		echo "</div>";
}
?>
</form>