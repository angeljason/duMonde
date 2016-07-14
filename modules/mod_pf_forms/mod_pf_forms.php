<?php
/**
 * @version        3.5
 * @package        Joomla
 * @subpackage     Payment Form
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2010 - 2014 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */
// no direct access
defined('_JEXEC') or die;
error_reporting(0);
require_once JPATH_ADMINISTRATOR . '/components/com_pmform/loader.php';
$numberForms = $params->get('number_forms', 10);
$itemId      = PMFormHelper::getItemid();
$model       = POSFModel::getInstance('Forms', 'PMFormModel', array('option' => 'com_pmform', 'ignore_request' => true, 'remember_states' => false, 'table_prefix' => '#__pf_', 'class_prefix' => 'PMForm'));
$rows        = $model->filter_state('P')
	->limit($numberForms)
	->getData();
require(JModuleHelper::getLayoutPath('mod_pf_forms', 'default'));
?>