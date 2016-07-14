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
?>
<div class="eb-topmenu-calendar">
	<ul class="eb-menu-calendar nav nav-pills">
		<li>
			<?php
			$month = $currentDateData['month'];
			$year = $currentDateData['year'];
			?>
			<a class="calendar_link<?php if ($layout == 'default') echo ' active'; ?>" href="<?php echo JRoute::_("index.php?option=com_eventbooking&view=calendar&month=$month&year=$year&Itemid=$Itemid"); ?>" class="calendar_link active" rel="nofollow">
				<?php echo JText::_('EB_MONTHLY_VIEW')?>
			</a>
		</li>
		<?php
		if ($config->activate_weekly_calendar_view)
		{
			$date = $currentDateData['start_week_date'];
		?>
			<li>
				<a class="calendar_link<?php if ($layout == 'weekly') echo ' active'; ?>" href="<?php echo JRoute::_("index.php?option=com_eventbooking&view=calendar&layout=weekly&date=$date&Itemid=$Itemid"); ?>" rel="nofollow">
					<?php echo JText::_('EB_WEEKLY_VIEW')?>
				</a>
			</li>
		<?php
		}
		if ($config->activate_daily_calendar_view)
		{
		?>
			<li>
				<?php $day = $currentDateData['current_date']; ?>
				<a class="calendar_link<?php if ($layout == 'daily') echo ' active'; ?>" href="<?php echo JRoute::_("index.php?option=com_eventbooking&view=calendar&layout=daily&day=$day&Itemid=$Itemid"); ?>" rel="nofollow">
					<?php echo JText::_('EB_DAILY_VIEW')?>
				</a>
			</li>
		<?php
		}
		?>
	</ul>
</div>
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