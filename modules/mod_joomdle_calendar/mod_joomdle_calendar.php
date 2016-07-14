<?php
/**
* @version		1.0
* @package		Joomdle - Mod Calendar
* @copyright	Qontori Pte Ltd
* @license		http://www.gnu.org/licenses/gpl-3.0.html GNU/GPL
*/

// no direct access
defined('_JEXEC') or die('Restricted access');

// Include the whosonline functions only once
require_once (dirname(__FILE__).'/helper.php');
require_once(JPATH_SITE.'/components/com_joomdle/helpers/content.php');

$moodle_xmlrpc_server_url = $params->get( 'MOODLE_URL' ).'/mnet/xmlrpc/server.php';

$comp_params = JComponentHelper::getParams( 'com_joomdle' );

$moodle_xmlrpc_server_url = $comp_params->get( 'MOODLE_URL' ).'/mnet/xmlrpc/server.php';
$moodle_auth_land_url = $comp_params->get( 'MOODLE_URL' ).'/auth/joomdle/land.php';
$moodle_url = $comp_params->get( 'MOODLE_URL' );
$linkstarget = $comp_params->get( 'linkstarget' );
$default_itemid = $comp_params->get( 'default_itemid' );
$moduleclass_sfx = htmlspecialchars($params->get('moduleclass_sfx'));

$start_monday = $params->get( 'start_day', 1 );
$guests_see_global = $params->get( 'guests_see_global', 0 );

$user = JFactory::getUser();
$id = $user->get('id');
$username = $user->get('username');
$cursosid = array ( 0 => array ('id' => 1));

if (!$username)
	$username = 'guest';

$db           = JFactory::getDBO();
$query = 'SELECT session_id' .
	' FROM #__session' .
	' WHERE userid =';
$query .= "'$id'";
$db->setQuery($query);
$sessions = $db->loadObjectList();

if ($db->getErrorNum()) {
	JError::raiseWarning( 500, $db->stderr() );
}

if (count($sessions))
foreach ($sessions as $session)
	$token = md5 ($session->session_id);

if (!$user->guest) {
	$cursos = JoomdleHelperContent::getMyCourses();


	if (is_array ($cursos))
	{
		foreach ($cursos as $id => $curso) {
			$cursosid[]['id'] = $curso['id'];
		}
	}
	else $cursos = array ();

	$eventos = JoomdleHelperContent::call_method ("my_events", $username, $cursosid);
}
else 
{
	$eventos = JoomdleHelperContent::call_method ("my_events", 'admin', array ( 0 => array ('id' => 1)));
}

require(JModuleHelper::getLayoutPath('mod_joomdle_calendar'));

