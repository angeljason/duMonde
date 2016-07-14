<?php
/**
 * @version		3.5
 * @package		Joomla
 * @subpackage	Payment Form
 * @author  Tuan Pham Ngoc
 * @copyright	Copyright (C) 2010 - 2014 Ossolution Team
 * @license		GNU/GPL, see LICENSE.php
 */
defined('_JEXEC') or die ;
error_reporting(0);
include JPATH_ADMINISTRATOR . '/components/com_pmform/config.php';
require_once JPATH_ADMINISTRATOR.'/components/com_pmform/loader.php';
PMFormHelper::loadLanguage();
$formId = $params->get('form_id');
$request = array('view' => 'form', 'form_id' => $formId, 'content_plugin' => 1, 'Itemid' => PMFormHelper::getItemid());
$input = new POSFInput($request);
//Execute the controller
return POSFController::getInstance('com_pmform', $input, $pmFormConfig)->execute();