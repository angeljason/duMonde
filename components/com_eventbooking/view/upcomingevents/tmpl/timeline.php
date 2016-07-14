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
if ($this->config->use_https)
{
	$ssl = 1 ;
}
else
{
	$ssl = 0 ;
}

JHtml::_('behavior.modal', 'a.eb-modal');
?>
<!--custom code 10142015-->
<h3>
	<strong>
	  Upcoming Events and Workshops
	</strong>
</h3>
<p>If you're looking for a fantastic event to attend today, this weekend or in the coming months, look no further than our events calendar for 2016.</p>
<div class="uk-grid-width-1-1 uk-grid-width-small-1-1 uk-grid-width-medium-1-2 uk-grid-width-large-1-2 uk-grid-width-xlarge-1-2 uk-grid uk-grid-match uk-grid-small uk-text-left " data-uk-grid-match="{target:'> div > .uk-panel', row:true}" data-uk-grid-margin  data-uk-scrollspy="{cls:'uk-animation-fade uk-invisible', target:'> div > .uk-panel', delay:300}">
    <div>
        <div class="uk-panel uk-panel-box uk-panel-box-hover uk-overlay-hover uk-invisible">
			<a class="uk-position-cover uk-position-z-index" href="http://www.dumonde.com.au/index.php/events/upcoming-events/2016-events-calendar/melbourne-vic-export-101-06072016"></a>                        
			<div class="uk-text-center uk-panel-teaser">
				<div class="uk-overlay ">
					<img src="http://www.dumonde.com.au/images/Export%20101_a.2.png" class=" uk-overlay-scale" alt="Export 101" width="788" height="401">
				</div>
			</div>                        
			<h3 class="uk-panel-title">
				<a class="uk-link-reset" href="http://www.dumonde.com.au/index.php/events/upcoming-events/2016-events-calendar/melbourne-vic-export-101-06072016">
					 Export 101 Workshop
				</a>                            
			</h3>                                    
			<div class="uk-margin">
				The Export 101 workshop provides you with the essential knowledge, information and supporting tools required, to more confidently, access and pursue exporting opportunities in the global market. It is also aligned with the global export programs of both Government and Industry at large. The workshop is useful to any business that is exporting or considering exporting goods or services in key markets overseas.
			</div>                        
			<p>
				<a href="http://www.dumonde.com.au/index.php/events/upcoming-events/2016-events-calendar/melbourne-vic-export-101-06072016">Read more</a>
			</p>
		</div>
	</div>
 <div>
 
<div class="uk-panel uk-panel-box uk-panel-box-hover uk-overlay-hover uk-invisible">
				<a class="uk-position-cover uk-position-z-index" href="http://www.dumonde.com.au/index.php/events/upcoming-events/2016-events-calendar/geelong-vic-doing-business-in-defence-06222016"></a>                    
				<div class="uk-text-center uk-panel-teaser">
					<div class="uk-overlay ">
						<img src="http://www.dumonde.com.au/images/Doing_Business_in_Defence.png" class=" uk-overlay-scale" alt="Doing Business in Defence" width="788" height="401">
					</div>
				</div>                    
				<h3 class="uk-panel-title">
				   <a class="uk-link-reset" href="http://www.dumonde.com.au/index.php/events/upcoming-events/2016-events-calendar/geelong-vic-doing-business-in-defence-06222016">
						Doing Business in Defence
					</a>
				</h3>                                    
				<div class="uk-margin">
					Doing Business in Defence is a highly focused and practical foundational course designed to give individuals and business from all backgrounds the essential insights they need to be more successful business winners in this critical economic market.<br>
				</div>
				<p>
				<a href="http://www.dumonde.com.au/index.php/events/upcoming-events/2016-events-calendar/geelong-vic-doing-business-in-defence-06222016">Read more</a></p>
		</div>
    </div>

</div>
<p>
&nbsp;
</p>
<!--end custom code 10142015-->
<div id="eb-upcoming-events-page-default" class="eb-container">
<h2 class="eb-page-heading"><?php echo $this->params->get('page_heading') ? $this->params->get('page_heading') : JText::_('EB_UPCOMING_EVENTS'); ?></h2>
<form method="post" name="adminForm" id="adminForm" action="index.php">
	<?php
		if (count($this->items))
		{
			echo EventbookingHelperHtml::loadCommonLayout('common/events_timeline.php', array('events' => $this->items, 'config' => $this->config, 'Itemid' => $this->Itemid, 'nullDate' => $this->nullDate , 'ssl' => $ssl, 'viewLevels' => $this->viewLevels, 'category' => $this->category, 'bootstrapHelper' => $this->bootstrapHelper));
		}
		else
		{
		?>
			<p class="text-info"><?php echo JText::_('EB_NO_UPCOMING_EVENTS') ?></p>
		<?php
		}
		if ($this->pagination->total > $this->pagination->limit)
		{
		?>
			<div class="pagination">
				<?php echo $this->pagination->getPagesLinks(); ?>
			</div>
		<?php
		}
	?>
	<input type="hidden" name="Itemid" value="<?php echo $this->Itemid ; ?>" />
	<input type="hidden" name="option" value="com_eventbooking" />
	<input type="hidden" name="id" value="0" />
	<input type="hidden" name="task" value="" />
	<script type="text/javascript">
		function cancelRegistration(registrantId) {
			var form = document.adminForm ;
			if (confirm("<?php echo JText::_('EB_CANCEL_REGISTRATION_CONFIRM'); ?>")) {
				form.task.value = 'registrant.cancel' ;
				form.id.value = registrantId ;
				form.submit() ;
			}
		}
	</script>
</form>
</div>
<p>
&nbsp;
</p>