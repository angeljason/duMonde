<?php
/**
* @version		1.0
* @package		Joomdle - Mod Display List of Moodle Teachers
* @copyright	Qontori Pte Ltd
* @license		http://www.gnu.org/licenses/gpl-3.0.html GNU/GPL
*/

// no direct access
defined('_JEXEC') or die('Restricted access');

require_once (dirname(__FILE__).'/helper.php');
require_once(JPATH_SITE.'/components/com_joomdle/helpers/content.php');


$comp_params = &JComponentHelper::getParams( 'com_joomdle' );

$joomdle_itemid = $comp_params->get( 'joomdle_itemid' );
$moduleclass_sfx = htmlspecialchars($params->get('moduleclass_sfx'));

$teachers = JoomdleHelperContent::call_method ('teachers_abc', 'abcdefghijklmnñopqrstuvwxyz');

require(JModuleHelper::getLayoutPath('mod_joomdle_teachers'));
