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
jimport('joomla.filesystem.folder');
jimport('joomla.filesystem.file');
//Disable error reporting
error_reporting(0);
include JPATH_ADMINISTRATOR . '/components/com_pmform/config.php';
require_once JPATH_ADMINISTRATOR . '/components/com_pmform/loader.php';
PMFormHelper::prepareRequestData();
$input = new POSFInput();
$task  = $input->getCmd('task', '');
POSFController::getInstance($input->getCmd('option', null), $input, $pmFormConfig)
	->execute()
	->redirect();