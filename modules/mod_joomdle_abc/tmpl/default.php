<?php 
/**
* @version		1.0
* @package		Joomdle - Mod ABC Course List
* @copyright	Qontori Pte Ltd
* @license		http://www.gnu.org/licenses/gpl-3.0.html GNU/GPL
*/
// no direct access
defined('_JEXEC') or die('Restricted access');

    $itemid = JoomdleHelperContent::getMenuItem();
?>
	<div class="joomdleabc<?php echo $moduleclass_sfx; ?>">
<?php

	if (is_array($chars_array))
	foreach ($chars_array as $chars) {
		switch ($linkto)
		{
			case 'courses':
				$url = "index.php?option=com_joomdle&view=coursesabc&start_chars=$chars&Itemid=$itemid";
				break;
			case 'teachers':
				$url = "index.php?option=com_joomdle&view=teachersabc&start_chars=$chars&Itemid=$itemid";
				break;
		}
		$url = JRoute::_($url);
		$link = "<a href=\"$url\">$chars</a>";
		$links[] = $link; 
	}

	$str = implode (' | ', $links);
	echo $str;

?>
	</div>
