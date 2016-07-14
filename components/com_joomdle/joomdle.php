<?php
/**
 * Joomla! 1.5 component Joomdle
 *
 * @version $Id: joomdle.php 2009-04-17 03:54:05 svn $
 * @author Antonio Durán Terrés
 * @package Joomla
 * @subpackage Joomdle
 * @license GNU/GPL
 *
 * Shows information about Moodle courses
 *
 * This component file was created using the Joomla Component Creator by Not Web Design
 * http://www.notwebdesign.com/joomla_component_creator/
 *
 */

// no direct access
defined('_JEXEC') or die('Restricted access');



// Require the base controller
require_once JPATH_COMPONENT.'/controller.php';


//$controller = JController::getInstance('joomdle');
//$controller->execute(JRequest::getCmd('task'));

$controller = JControllerLegacy::getInstance('joomdle');
$controller->execute(JFactory::getApplication()->input->get('task'));


// Redirect if set by the controller
$controller->redirect();
?>
