<?php
/**
 * @version        	2.0.5
 * @package        	Joomla
 * @subpackage		Event Booking
 * @author  		Tuan Pham Ngoc
 * @copyright    	Copyright (C) 2010 - 2015 Ossolution Team
 * @license        	GNU/GPL, see LICENSE.php
 */
// no direct access
defined( '_JEXEC' ) or die ;
//Load greybox lib
JHtml::_('behavior.modal', 'a.eb-modal');
if ($this->config->use_https)
{
	$ssl = 1;
}
else
{
	$ssl = 0;
}
?>
<div id="eb-event-archive-page-table" class="eb-container row-fluid">
<h1 class="eb-page-heading"><?php echo JText::_('EB_EVENTS_ARCHIVE'); ?></h1>
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
<?php
if ($this->config->show_cat_decription_in_calendar_layout && $this->category)
{
?>
	<div id="eb-category">
		<h2 class="eb-page-heading"><?php echo $this->category->name;?></h2>
		<?php
			if($this->category->description != '')
			{
			?>
				<div class="eb-description"><?php echo $this->category->description;?></div>
			<?php
			}
		?>
	</div>
	<div class="clearfix"></div>
<?php
}
if (count($this->items))
{
?>

<table class="table table-striped table-bordered table-condensed nowrap nowrap" cellspacing="0" width="100%" id="tblExport3">
	<thead>
	<tr>
		<th class="hidden-phone">
			Month
		</th>
		<th class="date_col">
			Day
		</th>
		<th class="date_col">
			Year
		</th>
		<th class="date_col">
			DOW
		</th>
		<th class="date_col">
			Time
		</th>
		<th class="date_col">
			Location
		</th>
		<?php
		if ($this->config->show_image_in_table_layout)
		{
		?>
			<th class="hidden-phone">
				<?php echo JText::_('EB_EVENT_IMAGE'); ?>
			</th>
		<?php
		}
		?>
		<th>
			<?php echo JText::_('EB_EVENT_TITLE'); ?>
		</th>
		<th>
				Event ID
		</th>
		<?php
		if ($this->config->show_location_in_category_view)
		{
		?>
			<th class="location_col hidden-phone">
				<?php echo JText::_('EB_LOCATION'); ?>
			</th>
		<?php
		}
		?>
		<th class="date_col">
			<?php echo JText::_('EB_EVENT_DATE'); ?>
		</th>
		<?php
		if ($this->config->show_price_in_table_layout)
		{
		?>
			<th class="table_price_col hidden-phone">
				<?php echo JText::_('EB_INDIVIDUAL_PRICE'); ?>
			</th>
		<?php
		}
		if ($this->config->show_capacity)
		{
		?>
			<th class="capacity_col hidden-phone">
				<?php echo JText::_('EB_CAPACITY'); ?>
			</th>
		<?php
		}
		if ($this->config->show_registered)
		{
		?>
			<th class="registered_col hidden-phone">
				<?php echo JText::_('EB_REGISTERED'); ?>
			</th>
		<?php
		}
		?>
		<th>
					Client
			</th>
			<th>
					Client Info
			</th>	
			<th>
					POC
			</th>
			<th>
					Trainer
			</th>			
			<th>
					Flyer
			</th>
			<th>
					Registration
			</th>	
			<th>
					Workbook
			</th>	
			<th>
					Deck
			</th>	
			<th>
					Feedback Forms
			</th>
			<th>
					Remarks
			</th>
	</tr>
	</thead>
	<tbody>
	<?php
	for ($i = 0 , $n = count($this->items) ; $i < $n; $i++)
	{
		$item = $this->items[$i] ;
		
		//city
		$db = JFactory::getDbo();
		$query = $db->getQuery(true);
		$query->select('city')
		->from('#__eb_locations')
		->where('id = ' . $item->location_id);
		$db->setQuery($query);
		$city = $db->loadColumn();
	?>
		<tr>
			<td>
				<?php 
						echo JHtml::_('date', $item->event_date, 'M', null);
				?>	
			</td>
			<td>
				<?php 
						echo JHtml::_('date', $item->event_date, 'd', null);
				?>	
			</td>
			<td>
				<?php 
						echo JHtml::_('date', $item->event_date, 'Y', null);
				?>	
			</td>
			<td>
				<?php 
						echo JHtml::_('date', $item->event_date, 'D', null);
				?>	
			</td>
			<td>
				<?php 
						echo JHtml::_('date', $item->event_date, 'h:i A', null);
				?>	
			</td>
			<td>
				<?php echo $city[0] ; ?>	
			</td>
			<?php
			if ($this->config->show_image_in_table_layout)
			{
				?>
				<td class="eb-image-column hidden-phone">
					<?php
					if ($item->thumb)
					{
					?>
						<a href="<?php echo JUri::base(true).'/media/com_eventbooking/images/'.$item->thumb; ?>" class="eb-modal"><img src="<?php echo JUri::base(true).'/media/com_eventbooking/images/thumbs/'.$item->thumb; ?>" class="eb_thumb-left"/></a>
					<?php
					}
					else
					{
						echo ' ';
					}
					?>
				</td>
			<?php
			}
			?>
			<td>
				<a href="<?php echo JRoute::_(EventbookingHelperRoute::getEventRoute($item->id, $categoryId, $this->Itemid));?>" class="eb-event-link">
					<?php echo $item->title ; ?>
				</a>
				&nbsp;
				<a title="Download Registrants" href="<?php echo JRoute::_('index.php?option=com_eventbooking&task=registrant.export&event_id='.$item->id.'&Itemid='.$item->id); ?>">
				<?php 
					echo ' (';
						echo (int) $item->total_registrants ; 
					echo ')';
				?>
				</a>
			</td>
			<td class="center">
					
							<?php 
								echo $item->id;
							?>
							
				</td>
			<?php
			if ($this->config->show_location_in_category_view)
			{
				?>
				<td class="hidden-phone">
					<?php
					if ($item->location_address)
					{
					?>
						<?php echo $item->location_name ; ?>
					<?php
					}
					else
					{
						echo $item->location_name;
					}
					?>
				</td>
			<td>
				<?php
				if ($item->event_date == EB_TBC_DATE)
						{
							echo JText::_('EB_TBC');
						}
						else
						{
							if (strpos($item->cut_off_date, '00:00:00') !== false)
							{
								$dateFormat = $config->date_format;
							}
							else
							{
								$dateFormat = $config->event_date_format;
							}

							echo JHtml::_('date', $item->event_date, 'l jS \of F Y h:i A', null);
						}
				?>
			</td>
			<?php
			}
			if ($this->config->show_price_in_table_layout)
			{
				if ($this->config->show_discounted_price)
				{
					$price = $item->discounted_price ;
				}
				else
				{
					$price = $item->individual_price ;
				}
				?>
				<td class="hidden-phone">
					<?php echo EventbookingHelper::formatCurrency($price, $config, $item->currency_symbol); ?>
				</td>
			<?php
			}
			if ($this->config->show_capacity)
			{
			?>
				<td class="center hidden-phone">
					<?php
					if ($item->event_capacity)
					{
						echo $item->event_capacity ;
					}
					else
					{
						echo JText::_('EB_UNLIMITED') ;
					}
					?>
				</td>
			<?php
			}
			if ($this->config->show_registered)
			{
			?>
				<td class="center hidden-phone">
					<?php	echo $item->total_registrants ; ?>
				</td>
			<?php
			}
			?>
			<td>
							<?php echo $item->paramData['field_client']['value'] ;?>
					</td>
					<td>
							<?php echo $item->paramData['field_clientinfo']['value'] ;?>
					</td>
					<td>
							<?php echo $item->paramData['field_poc']['value'] ;?>
					</td>	
					<td>
							<?php echo $item->paramData['field_trainer']['value'] ;?>
					</td>	
					<td class="center">
							<?php 
								if($item->paramData['field_flyer']['value'] == 1) 
								{
									echo "<i class='uk-icon-check'></i>&nbsp;Yes";
								}
								else{
									echo "<i class='uk-icon-close'></i>&nbsp;No";
								}
								
							?>
					</td>
					<td class="center">
							<?php 
								if($item->paramData['field_registration']['value'] == 1) 
								{
									echo "<i class='uk-icon-check'></i>&nbsp;Yes";
								}
								else{
									echo "<i class='uk-icon-close'></i>&nbsp;No";
								}
								
							?>
					</td>
					<td class="center">
							<?php 
								if($item->paramData['field_workbook']['value'] == 1) 
								{
									echo "<i class='uk-icon-check'></i>&nbsp;Yes";
								}
								else{
									echo "<i class='uk-icon-close'></i>&nbsp;No";
								}
								
							?>
					</td>	
					<td class="center">
							<?php 
								if($item->paramData['field_deck']['value'] == 1) 
								{
									echo "<i class='uk-icon-check'></i>&nbsp;Yes";
								}
								else{
									echo "<i class='uk-icon-close'></i>&nbsp;No";
								}
								
							?>
					</td>
					<td class="center">
							<?php 
								if($item->paramData['field_feedback']['value'] == 1) 
								{
									echo "<i class='uk-icon-check'></i>&nbsp;Yes";
								}
								else{
									echo "<i class='uk-icon-close'></i>&nbsp;No";
								}
								
							?>
					</td>	
					<td>
							<?php echo $item->paramData['field_remarks']['value'] ;?>
					</td>	
		</tr>
	<?php
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
}
if ($this->pagination->total > $this->pagination->limit)
{
?>
	<div class="pagination">
		<?php echo $this->pagination->getPagesLinks();?>
	</div>
<?php
}
?>
</div>