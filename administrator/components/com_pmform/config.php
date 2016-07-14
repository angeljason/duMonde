<?php
/**
 * @version        4.2
 * @package        Joomla
 * @subpackage     Payment Form
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2010 - 2015 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */
defined('_JEXEC') or die();
/**
 * Reregister prefix and classes for auto-loading
 */
if (JFactory::getApplication()->isAdmin())
{
	$pmFormConfig = array(
		'default_controller_class' => 'PMFormController',
		'default_view'             => 'payments',
		'class_prefix'             => 'PMForm',
		'language_prefix'          => 'PF',
		'table_prefix'             => '#__pf_');
}
else
{
	$pmFormConfig = array(
		'default_controller_class' => 'PMFormController',
		'default_view'             => 'forms',
		'class_prefix'             => 'PMForm',
		'language_prefix'          => 'PF',
		'table_prefix'             => '#__pf_');
}

