<?php
/**
 * @version        2.0.0
 * @package        Joomla
 * @subpackage     Event Booking
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2010 - 2015 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */
// no direct access
defined('_JEXEC') or die;
if (version_compare(JVERSION, '3.0', 'ge'))
{
	JHtml::_('formbehavior.chosen', 'select');
}
$return = base64_encode(JUri::getInstance()->toString());
?>
<h1 class="eb-page-heading"><?php echo JText::_('EB_USER_EVENTS'); ?></h1>
<div class="uk-grid">
    <div class="uk-width-1-1">
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
</br>
<form method="post" name="adminForm" id="adminForm" action="<?php echo JRoute::_('index.php?option=com_eventbooking&view=events&Itemid='.$this->Itemid); ; ?>">
	<table width="100%" style="margin-bottom: 5px;">
		<tr>
			<td align="left">
				<?php echo JText::_( 'EB_FILTER' ); ?>:
				<input type="text" name="filter_search" id="filter_search" value="<?php echo $this->lists['filter_search'];?>" class="input-medium text_area search-query" onchange="document.adminForm.submit();" />
				<button onclick="this.form.submit();" class="btn"><?php echo JText::_( 'EB_GO' ); ?></button>
			</td >
			<td style="float: right;">
				<?php echo $this->lists['filter_category_id'] ; ?>
			</td>
		</tr>
	</table>
	<?php
	if(count($this->items))
	{
	?>
		<table class="table table-striped table-bordered table-considered" id="tblExport">
			<thead>
				<tr>
					<th width="1%" nowrap="nowrap">
						<?php //echo JText::_('EB_ID'); ?>
						Event ID
					</th>
					<th>
						<?php //echo JText::_('EB_TITLE'); ?>
						Event
					</th>
					<th width="18%">
						<?php echo JText::_('EB_CATEGORY'); ?>
					</th>
					<th class="center" width="10%">
						<?php echo JText::_('EB_EVENT_DATE'); ?>
					</th>
					<th width="7%">
						<?php echo JText::_('EB_NUMBER_REGISTRANTS'); ?>
					</th>
					<th width="5%" nowrap="nowrap">
						<?php echo JText::_('EB_STATUS'); ?>
					</th>					
				</tr>
			</thead>
			<tbody>
				<?php
				$k = 0;
				for ($i=0, $n=count( $this->items ); $i < $n; $i++)
				{
					$row = $this->items[$i];
					$link 	= JRoute::_(EventbookingHelperRoute::getEventRoute($row->id, 0, $this->Itemid));
					?>
					<tr class="<?php echo "row$k"; ?>">
						<td class="center">
							<?php echo $row->id; ?>
						</td>
						<td>
							<a href="<?php echo $link; ?>" target="_blank">
								<?php echo $row->title ; ?>
							</a>
							<span class="pull-right">
								<a href="<?php echo JRoute::_('index.php?option=com_eventbooking&view=event&layout=form&id='.$row->id.'&Itemid='.$this->Itemid.'&return='.$return); ?>">
									<i class="icon-pencil"></i><?php echo JText::_('EB_EDIT'); ?>
								</a>
								<?php
								if ($row->published == 1)
								{
									$link = JRoute::_('index.php?option=com_eventbooking&task=event.unpublish&id='.$row->id.'&Itemid='.$this->Itemid.'&return='.$return);
									$text = JText::_('EB_UNPUBLISH');
									$class = 'icon-unpublish';
								}
								else
								{
									$link = JRoute::_('index.php?option=com_eventbooking&task=event.publish&id='.$row->id.'&Itemid='.$this->Itemid.'&return='.$return);
									$text = JText::_('EB_PUBLISH');
									$class = 'icon-publish';
								}
								?>
								&nbsp;&nbsp;|&nbsp;&nbsp;<a href="<?php echo $link ; ?>"><i class="<?php echo $class;?>"></i><?php echo $text ; ?></a>
							</span>
						</td>
						<td>
							<?php echo $row->category_name ; ?>
						</td>
						<td class="center">
							<?php 
							//echo JHtml::_('date', $row->event_date, $this->config->date_format, null); 
							echo JHtml::_('date', $row->event_date, 'l jS \of F Y h:i A', null);
							?>
						</td>
						<td class="center">
							<?php echo (int) $row->total_registrants ; ?>
						</td>
						<td class="center">
							<?php
								if ($row->published)
								{
									echo JText::_('EB_PUBLISHED');
								}
								else
								{
									echo JText::_('EB_UNPUBLISHED');
								}
							?>
						</td>						
					</tr>
					<?php
					$k = 1 - $k;
				}
				?>
			</tbody>
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
		<?php
			if ($this->pagination->total > $this->pagination->limit)
			{
			?>
				<div class="pagination">
					<?php echo $this->pagination->getPagesLinks();?>
				</div>
			<?php
			}
			?>
	<?php
	}
	?>
</form>
