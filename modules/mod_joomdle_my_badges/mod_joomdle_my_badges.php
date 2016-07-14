<?php
/**
* @version      1.0
* @package      Joomdle - My badges
* @copyright    Qontori Pte Ltd
* @license      http://www.gnu.org/licenses/gpl-3.0.html GNU/GPL
*/

// no direct access
defined('_JEXEC') or die('Restricted access');

require_once (dirname(__FILE__).'/helper.php');
require_once(JPATH_SITE.'/components/com_joomdle/helpers/content.php');


$comp_params = &JComponentHelper::getParams( 'com_joomdle' );

$moduleclass_sfx = htmlspecialchars($params->get('moduleclass_sfx'));
$max = $params->get('max', 10);
$moodle_url = $comp_params->get('MOODLE_URL');

$user = JFactory::getUser ();

if (!$user)
	return;

$badges = JoomdleHelperContent::call_method ('my_badges', $user->username, (int) $max);

$jdoc = JFactory::getDocument();
$jdoc->addStyleSheet(JURI::root ().'modules/mod_joomdle_my_badges/css/style.css');

require(JModuleHelper::getLayoutPath('mod_joomdle_my_badges'));
