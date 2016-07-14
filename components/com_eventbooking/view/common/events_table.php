<?php
/**
 * @version            2.4.2
 * @package        	Joomla
 * @subpackage		Event Booking
 * @author  		Tuan Pham Ngoc
 * @copyright    	Copyright (C) 2010 - 2016 Ossolution Team
 * @license        	GNU/GPL, see LICENSE.php
 */
// no direct access
defined( '_JEXEC' ) or die ;
$activateWaitingList = $config->activate_waitinglist_feature;
$hiddenPhoneClass    = $bootstrapHelper->getClassMapping('hidden-phone');
$btnClass            = $bootstrapHelper->getClassMapping('btn');
?>
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
<!--
<div class="uk-overflow-container">
<table class="uk-table uk-table-hover uk-table-striped uk-table-condensed">

<div class="table-responsive">
<table class="table table-striped table-bordered table-condensed">

<div class="uk-overflow-container">
<table class="uk-table uk-table-striped uk-table-condensed uk-text-nowrap">

<table class="table table-striped table-bordered table-condensed nowrap" cellspacing="0" width="100%" id="tblExport2">
-->
<table class="table table-bordered table-condensed nowrap" cellspacing="0" width="100%" id="tblExport2">
	<thead>
		<tr>
		<th class="hidden-phone">
			Month
		</th>
		<th class="date_col">
			Day
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
			if ($config->show_image_in_table_layout)
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
		<th class="date_col">
			# of Registrants
		</th>		
		<th class="available-place-col <?php echo $hiddenPhoneClass; ?>">
				Event ID
		</th>
		<?php
			if ($config->show_location_in_category_view)
			{
		?>
		<th class="location_col <?php echo $hiddenPhoneClass; ?>">
					<?php //echo JText::_('EB_LOCATION'); ?>
				Venue
		</th>
		<?php
			}			
		?>
		<?php
			if ($config->show_event_end_date_in_table_layout)
			{
			?>
				<th class="date_col <?php echo $hiddenPhoneClass; ?>">
					<?php echo JText::_('EB_EVENT_END_DATE'); ?>
				</th>
			<?php
			}
			
			?>				
			<?php
			if ($config->show_price_in_table_layout)
			{
			?>
				<th class="table_price_col <?php echo $hiddenPhoneClass; ?>">
					<?php echo JText::_('EB_INDIVIDUAL_PRICE'); ?>
				</th>
			<?php
			}
			if ($config->show_capacity)
			{
			?>
				<th class="capacity_col <?php echo $hiddenPhoneClass; ?>">
					<?php echo JText::_('EB_CAPACITY'); ?>
				</th>
			<?php
			}
			if ($config->show_registered)
			{
			?>
				<th class="registered_col <?php echo $hiddenPhoneClass; ?>">
					<?php echo JText::_('EB_REGISTERED'); ?>
				</th>
			<?php
			}
			if ($config->show_available_place)
			{
			?>
				<th class="center available-place-col <?php echo $hiddenPhoneClass; ?>">
					<?php echo JText::_('EB_AVAILABLE_PLACE'); ?>
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
					Customisation
			</th>				
			<th>
					Deck
			</th>	
			<th>
					Feedback Forms
			</th>
			<th>
					Status
			</th>
			<th>
					Remarks
			</th>
			
			<th>Customisation Requirements</th>
			<th>Create Deck</th>
			<th>Review and Approval of Deck</th>
			<th>Create Workbook</th>
			<th>Review and Approval of Workbook</th>
			<th>Send to Printer</th>
			<th>Mode of Delivery</th>
			<th>Pick-up/Delivery Date</th>
			<th>Delivery Status</th>
			<th>Feedback Form Status</th>
			<th>Trainer's Pack Status</th>
		</tr>
	</thead>
	<tbody>
	<?php
		for ($i = 0 , $n = count($items) ; $i < $n; $i++)
		{
			$item = $items[$i] ;
			$canRegister = EventbookingHelper::acceptRegistration($item);
			
			//city
			$db = JFactory::getDbo();
			$query = $db->getQuery(true);
			$query->select('city')
			->from('#__eb_locations')
			->where('id = ' . $item->location_id);
			$db->setQuery($query);
			$city = $db->loadColumn();

			if ($item->cut_off_date != $nullDate)
			{
				$registrationOpen = ($item->cut_off_minutes < 0);
			}
			else
			{
				$registrationOpen = ($item->number_event_dates > 0);
			}

			if (($item->event_capacity > 0) && ($item->event_capacity <= $item->total_registrants) && $activateWaitingList && !$item->user_registered && $registrationOpen)
			{
				$waitingList = true ;
			}
			else
			{
				$waitingList = false ;
			}
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
					if ($config->show_image_in_table_layout)
					{
					?>
					<td class="eb-image-column <?php echo $hiddenPhoneClass; ?>">
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
					<?php
						if ($config->hide_detail_button !== '1')
						{
						?>
							<a href="<?php echo JRoute::_(EventbookingHelperRoute::getEventRoute($item->id, $categoryId, $Itemid));?>" class="eb-event-link" target="_blank">
							<?php echo $item->title ; ?>							
							</a>
							&nbsp;
						<?php
						}
						else
						{
							echo $item->title;
						}
					?>
				</td>
				<td class="center">
						<a title="Download Registrants" href="<?php echo JRoute::_('index.php?option=com_eventbooking&task=registrant.export&event_id='.$item->id.'&Itemid='.$item->id); ?>">
							<?php 
									echo (int) $item->total_registrants ; 
							?>
						</a>	
				</td>
				<td class="center">
						<a href="<?php echo JRoute::_('index.php?option=com_eventbooking&view=event&layout=form&id='.$item->id.'&Itemid='.$item->id.'&return='.$return); ?>" target="_blank" alt="Edit">
							<?php 
								echo $item->id;
							?>
						</a>	
				</td>
				<?php
					if ($config->show_location_in_category_view)
					{
					?>
					<td class="<?php echo $hiddenPhoneClass; ?>">
						<?php
							if ($item->location_id)
							{
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
							}
							else
							{
							?>
								&nbsp;
							<?php
							}
						?>
					</td>
					<?php
					}
					?>
				<?php
					if ($config->show_event_end_date_in_table_layout)
					{
					?>
						<td>
							<?php 
								if ($item->event_end_date == EB_TBC_DATE)
								{
									echo JText::_('EB_TBC');
								}
								else
								{
									if (strpos($item->event_end_date, '00:00:00') !== false)
									{
										$dateFormat = $config->date_format;
									}
									else
									{
										$dateFormat = $config->event_date_format;
									}

									echo JHtml::_('date', $item->event_end_date, $dateFormat, null);
								}
							?>
						</td>
					<?php
					}
					
					if ($config->show_price_in_table_layout)
					{
						if ($config->show_discounted_price)
						{
							$price = $item->discounted_price ;
						}
						else
						{
							$price = $item->individual_price ;
						}
					?>
						<td class="<?php echo $hiddenPhoneClass; ?>">
							<?php echo EventbookingHelper::formatCurrency($price, $config, $item->currency_symbol); ?>
						</td>
					<?php
					}
					if ($config->show_capacity)
					{
					?>
						<td class="<?php echo $hiddenPhoneClass; ?>">
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
					if ($config->show_registered)
					{
					?>
						<td class="<?php echo $hiddenPhoneClass; ?>">
							<?php
								if ($item->registration_type != 3)
								{
									echo $item->total_registrants ;
								}
								else
								{
									echo ' ';
								}

							?>
						</td>
					<?php
					}
					if ($config->show_available_place)
					{
					?>
						<td class="<?php echo $hiddenPhoneClass; ?>">
							<?php
								if ($item->event_capacity)
								{
									echo $item->event_capacity - $item->total_registrants;
								}
							?>
						</td>
					<?php
					}
				?>
				
							<?php
								/*foreach($item->paramData as $param)
								{
									if ($param['value'])		
									{													
										echo "<td class='center'>";
											echo $param['value']." "; 
										echo "</td>";
									}
									else
									{													
										echo "<td class='center'>";
											echo "<i class='uk-icon-close'></i>";
										echo "</td>";
									}
								}*/
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
								if($item->paramData['field_customisation']['value'] == 1) 
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
							<?php echo $item->paramData['field_status']['value'] ;?>
					</td>
					<td>
							<?php echo $item->paramData['field_remarks']['value'] ;?>
					</td>	

					<td><?php echo $item->paramData['field_customisation_requirements']['value'] ;?></td>	
					<td><?php echo $item->paramData['field_create_deck']['value'] ;?></td>	
					<td><?php echo $item->paramData['field_review_approval_of_deck']['value'] ;?></td>	
					<td><?php echo $item->paramData['field_create_workbook']['value'] ;?></td>	
					<td><?php echo $item->paramData['field_review_approval_workbook']['value'] ;?></td>	
					<td><?php echo $item->paramData['field_send_printer']['value'] ;?></td>	
					<td><?php echo $item->paramData['field_mode_delivery']['value'] ;?></td>	
					<td><?php echo $item->paramData['field_deliverydate']['value'] ;?></td>	
					<td><?php echo $item->paramData['field_delivery_status']['value'] ;?></td>	
					<td><?php echo $item->paramData['field_feedbackformstatus']['value'] ;?></td>	
					<td><?php echo $item->paramData['field_trainerspackstatus']['value'] ;?></td>
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
		echo "<div class='uk-grid uk-grid-small'>";
			echo "<div class='uk-width-1-3'>";
				echo "<div class='uk-grid uk-grid-small'>";
					echo "<div class='uk-width-1-1 uk-pull-1-1 uk-text-left'>";
						echo "<a href='#' id='btnExport2'>";
							echo "<i class='uk-icon-download'></i>&nbsp;Export to Excel";
						echo "</a>";
					echo "</div>";
				echo "</div>";
			echo "</div>";
			echo "<div class='uk-width-1-3'>";
				echo "&nbsp;";
			echo "</div>";
			echo "<div class='uk-width-1-3'>";
			?>
				<div class="uk-grid uk-grid-small">
					<div class="uk-width-1-4 uk-pull-1-1 uk-text-left">
						Legend:
					</div>	
					<div class="uk-width-1-4 uk-pull-1-1 uk-text-left">
						<div class="uk-badge uk-badge-ongoing">&nbsp;Ongoing&nbsp;</div>
					</div>
					<div class="uk-width-1-4 uk-pull-1-1 uk-text-left">
						<div class="uk-badge uk-badge-queued">&nbsp;Queued&nbsp;</div>
					</div>
					<div class="uk-width-1-4 uk-pull-1-1 uk-text-left">
						<div class="uk-badge uk-badge-onhold">&nbsp;On-hold&nbsp;</div>
					</div>		
				</div>
			<?php
			echo "</div>";
		echo "</div>";
}
?>