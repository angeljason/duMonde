<?php
	defined('_JEXEC') or die ( 'Restricted access');	
?>
<?php
	if (count($rows)) {
	?>
		<ul class="menu">
			<?php
				foreach ($rows as  $row) {
					$link = JRoute::_('index.php?option=com_pmform&view=form&form_id='.$row->id.'&Itemid='.$itemId) ;
				?>
					<li><a href="<?php echo $link; ?>"><?php echo $row->title ; ?></a></li>
				<?php	
				}
			?>
		</ul>
	<?php	
	}
?>