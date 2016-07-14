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
				<a href="http://dumonde.com.au/index.php/2016-events-calendar" target="_self">
					<i class="uk-icon-calendar"></i>&nbsp;2016 Events Calendar
				</a>
					&nbsp;|&nbsp;
				<a href="http://dumonde.com.au/index.php/events-calendar" target="_self">
					<i class="uk-icon-clock-o"></i>&nbsp;Events Calendar 
				</a>
					&nbsp;|&nbsp;
				<a href="http://dumonde.com.au/index.php/upcoming-events" target="_self">
					<i class="uk-icon-calendar-o"></i>&nbsp;Upcoming Events
				</a>
					&nbsp;|&nbsp;
				<a href="http://dumonde.com.au/index.php/events-archive" target="_self">
					<i class="uk-icon-history"></i>&nbsp;Events Archive
				</a>	
					&nbsp;|&nbsp;
				<a href="http://dumonde.com.au/index.php/events-locations" target="_self">
					<i class="uk-icon-map-marker"></i>&nbsp;Locations
				</a>
					&nbsp;|&nbsp;
				<a href="http://dumonde.com.au/index.php/events-registrants" target="_self">
					<i class="uk-icon-users"></i>&nbsp;Registrants
				</a>
					&nbsp;|&nbsp;
				<a href="http://dumonde.com.au/index.php/my-events-list" target="_self">
					<i class="uk-icon-paper-plane"></i>&nbsp;My Events
				</a>
					&nbsp;|&nbsp;
				<a href="http://dumonde.com.au/index.php/submit-event" target="_self">
					<i class="uk-icon-plus-square"></i>&nbsp;Submit Event
				</a>
			</div>
        </div>
    </div>
</div>
<table class="table table-striped table-bordered table-condensed">
	<thead>
		<tr>
		<th class="hidden-phone">
			Month
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
		<?php
			if ($config->show_location_in_category_view)
			{
		?>
		<th class="location_col <?php echo $hiddenPhoneClass; ?>">
					<?php echo JText::_('EB_LOCATION'); ?>
		</th>
		<?php
			}			
		?>
		<th class="date_col">
			<?php echo JText::_('EB_EVENT_DATE'); ?>
		</th>
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
			<th class="center available-place-col <?php echo $hiddenPhoneClass; ?>">
					Trainer(s)
			</th>
			<th class="center available-place-col <?php echo $hiddenPhoneClass; ?>">
					Comments
			</th>
		</tr>
	</thead>
	<tbody>
	<?php
		for ($i = 0 , $n = count($items) ; $i < $n; $i++)
		{
			$item = $items[$i] ;
			$canRegister = EventbookingHelper::acceptRegistration($item);

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
								if (strpos($item->cut_off_date, '00:00:00') !== false)
								{
									$dateFormat = $config->date_format;
								}
								else
								{
									$dateFormat = $config->event_date_format;
								}

								echo JHtml::_('date', $item->event_date, 'M', null);
						?>	
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
							<a href="<?php echo JRoute::_(EventbookingHelperRoute::getEventRoute($item->id, $categoryId, $Itemid));?>" class="eb-event-link" target="_blank"><?php echo $item->title ; ?></a>
						<?php
						}
						else
						{
							echo $item->title;
						}
					?>
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
						<td class="center <?php echo $hiddenPhoneClass; ?>">
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
						<td class="center <?php echo $hiddenPhoneClass; ?>">
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
						<td class="center <?php echo $hiddenPhoneClass; ?>">
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
								foreach($item->paramData as $param)
											{
												if ($param['value'] <> null)
												{
													?>
													<td class="center <?php echo $hiddenPhoneClass; ?>">
														<?php echo $param['value']." "; ?>
													</td>
													<?php
												}
												else
												{
													?>
													<td class="center <?php echo $hiddenPhoneClass; ?>">
														&nbsp;
													</td>
													<?php
													
												}
											//echo $param['value']." "; 	

											//echo $param['field_speaker']['value'];
											//echo $param['title']; 											
											//echo $item->paramData['title']['value'];
											//echo $param['title']['value'];
											//echo $param['title']['value'];
											//echo $param['title']; 
											//echo $item->paramData['title']['value'];

											}
							?>
				
					
			</tr>
			<?php
		}
	?>
	</tbody>
</table>