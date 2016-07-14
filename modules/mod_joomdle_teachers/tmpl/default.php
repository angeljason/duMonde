<?php 
/**
* @version		1.0
* @package		Joomdle - Mod Display List of Moodle Teachers
* @copyright	Qontori Pte Ltd
* @license		http://www.gnu.org/licenses/gpl-3.0.html GNU/GPL
*/

// no direct access
defined('_JEXEC') or die('Restricted access');

?>
	<ul class="joomdleteachers<?php echo $moduleclass_sfx; ?>">
<?php
	$i = 0;
	if (is_array($teachers))
	foreach ($teachers as $id => $teacher) {

		$url = JRoute::_("index.php?option=com_joomdle&view=teacher&username=".$teacher['username']."&Itemid=$joomdle_itemid"); 

		echo "<li><a href=\"".$url."\">".$teacher['firstname']. " " . $teacher['lastname'] ."</a></li>";
	}

?>
	</ul>
