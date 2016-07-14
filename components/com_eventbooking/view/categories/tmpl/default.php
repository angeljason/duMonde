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
<div id="eb-categories-page" class="eb-container">
	<?php
		if (!$this->categoryId)
		{
			$pageHeading = $this->params->get('page_heading') ? $this->params->get('page_heading') : JText::_('EB_CATEGORIES');
		?>
			<h2 class="eb-page-heading"><?php echo $pageHeading;?></h2>
		<?php
		}
		else
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
		<?php
		}
		echo EventbookingHelperHtml::loadCommonLayout('common/categories.php', array('categories' => $this->items, 'categoryId' => $this->categoryId, 'config' => $this->config, 'Itemid' => $this->Itemid));
		if ($this->pagination->total > $this->pagination->limit)
		{
		?>
			<div class="pagination">
				<?php echo $this->pagination->getPagesLinks(); ?>
			</div>
		<?php
		}
	?>
</div>
<section class="tm-bottom-b uk-grid" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin="">
		<div class="uk-width-1-1">
				<div class="uk-panel">
						<div id="eb-categories-page" class="eb-container">
							<h2 class="eb-page-heading">Event Categories</h2>
								<div id="eb-categories">
										<div class="eb-category">
												<div class="eb-box-heading">
													<h3 class="eb-category-title">
														<a href="http://www.dumonde.com.au/index.php/upcoming-events/upcoming-events" class="eb-category-title-link">
															duMonde Upcoming Events                                  
														 </a>
													</h3>
												</div>
										</div>
										<div class="eb-category">
												<div class="eb-box-heading">
													<h3 class="eb-category-title">
														<a href="http://www.dumonde.com.au/index.php/upcoming-events/industry-events" class="eb-category-title-link">
															Industry Events 
														 </a>
													</h3>
												</div>
										</div>
								</div>
						</div>
				</div>
		</div>
</section>
