<?php
/**
* @version		1.1.0
* @package		Joomdle - Mod Show Course Mates
* @copyright	Qontori Pte Ltd
* @license		http://www.gnu.org/licenses/gpl-3.0.html GNU/GPL
*/

// no direct access
defined('_JEXEC') or die('Restricted access');

require_once (dirname(__FILE__).'/helper.php');

$limit = $params->get( 'limit' );
$tooltips               = $params->get('use_tooltips', 1);
$moduleclass_sfx = htmlspecialchars($params->get('moduleclass_sfx'));

$course_id = JRequest::getVar ('course_id', 0, 'int');
if (!$course_id)
	$course_id = JRequest::getVar ('id', 0, 'int');

// Don't show if no course id selected
if (!$course_id)
	return;

$users = JoomdleHelperContent::call_method('get_course_students', (int) $course_id);


require(JModuleHelper::getLayoutPath('mod_joomdle_coursemates'));
