<?php
/**
 * @version        4.2
 * @package        Joomla
 * @subpackage     Payment Form
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2010 - 2015 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */
// no direct access
defined('_JEXEC') or die;
jimport('joomla.filesystem.file');
jimport('joomla.filesystem.folder');
//Require the controller
error_reporting(0);
if (!JFactory::getUser()->authorise('core.manage', 'com_pmform'))
{
	return JError::raiseWarning(404, JText::_('JERROR_ALERTNOAUTHOR'));
}
include JPATH_ADMINISTRATOR . '/components/com_pmform/config.php';
require_once JPATH_ADMINISTRATOR . '/components/com_pmform/loader.php';
$input = new POSFInput();

POSFController::getInstance($input->getCmd('option'), $input, $pmFormConfig)
	->execute()
	->redirect();
?>