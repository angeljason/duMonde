<?php
/**
 * @version        	2.2.0
 * @package        	Joomla
 * @subpackage		Event Booking
 * @author  		Tuan Pham Ngoc
 * @copyright    	Copyright (C) 2010 - 2016 Ossolution Team
 * @license        	GNU/GPL, see LICENSE.php
 */
// no direct access
defined( '_JEXEC' ) or die ;
$canRegister = EventbookingHelper::acceptRegistration($this->rowEvent);
?>
<div id="eb-registration-complete-page" class="eb-container">
	<h1 class="eb-page-heading"><?php echo JText::_('EB_REGISTRATION_COMPLETE'); ?></h1>
	<?php
		if (!$this->tmpl)
		{
		?>
			<div class="btn-group pull-right">
				<a href="<?php echo JRoute::_('index.php?option=com_eventbooking&view=complete&registration_code='.$this->registrationCode.'&tmpl=component&Itemid='.$this->Itemid); ?>" target="_blank" title="<?php echo JText::_('EB_PRINT_THIS_PAGE'); ?>"><i class="icon-print"></i></a>
			</div>
		<?php
		}
	?>
	<div id="eb-message" class="eb-message">
		<?php echo $this->message; ?>
		<div class="eb-taskbar clearfix">
			<ul>
				<?php
					if ($canRegister)
					{
						$url        = JRoute::_('index.php?option=com_eventbooking&task=register.individual_registration&event_id=' . $this->rowEvent->id . '&Itemid=' . JRequest::getInt('Itemid'));
						?>
						<li>
							<a class="btn" href="<?php echo $url; ?>"><?php echo JText::_('EB_REGISTER_INDIVIDUAL'); ?></a>
						</li>
						<li>
							<a class="btn" href="<?php echo JRoute::_('index.php?option=com_eventbooking&task=register.group_registration&event_id='.$this->rowEvent->id.'&Itemid='.JRequest::getInt('Itemid')) ; ?>"><?php echo JText::_('EB_REGISTER_GROUP');; ?></a>
						</li>
					<?php
					}
				?>
			</ul>
		</div>
	</div>
</div>
<?php
	if ($this->tmpl == 'component')
	{
	?>
		<script type="text/javascript">
			window.print();
		</script>
	<?php
	}
	echo $this->conversionTrackingCode;
?>