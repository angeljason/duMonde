<?php
/**
 * @version        4.2
 * @package        Joomla
 * @subpackage     Payment Form
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2010 - 2015 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */
defined('_JEXEC') or die();
JToolBarHelper::title(   JText::_( 'Translation management'), 'generic.png' );
JToolBarHelper::save('save');
JToolBarHelper::cancel('cancel');
?>
<form action="index.php?option=com_pmform&view=language" method="post" name="adminForm" id="adminForm">
	<table width="100%">
		<tr>			
			<td style="text-align: right; width : 100%;">
				<strong><?php echo JText::_('PF_SELECT_LANGUAGE'); ?></strong><?php echo $this->lists['filter_language']; ?>
				<strong><?php echo JText::_('PF_ITEM_TO_TRANSALTE'); ?></strong><?php echo $this->lists['filter_item']; ?>
			</td>			
		</tr>
	</table>			
	<table class="admintable adminform" style="width:100%">
		<tr>
			<td class="key" style="width:20%; text-align: left;">Key</td>
			<td class="key" style="width:40%; text-align: left;">Original</td>
			<td class="key" style="width:40%; text-align: left;">Translation</td>
		</tr>		
		<?php
			$original = $this->trans['en-GB'][$this->item] ;
			$trans = $this->trans[$this->lang][$this->item] ;
			foreach ($original as  $key=>$value) {
			?>
				<tr>
					<td class="key" style="text-align: left;"><?php echo $key; ?></td>
					<td style="text-align: left;"><?php echo $value; ?></td>
					<td>
						<?php
							if (isset($trans[$key])) {
								$translatedValue = $trans[$key];
								$missing = false ; 	
							} else {
								$translatedValue = $value;
								$missing = true ;
							}							
						?>
						<input type="hidden" name="keys[]" value="<?php echo $key; ?>" />
						<input type="text" name="<?php echo $key; ?>" class="input-xxlarge" size="100" value="<?php echo $translatedValue; ; ?>" />
						<?php
							if ($missing) {
							?>
								<span style="color:red;">*</span>
							<?php	
							}							
						?>
					</td>					
				</tr>
			<?php	
			}
		?>
	</table>
	<input type="hidden" name="task" value="" />
	<?php echo JHtml::_( 'form.token' ); ?>
</form>