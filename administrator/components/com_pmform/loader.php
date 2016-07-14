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
JLoader::registerPrefix('POSF', JPATH_ADMINISTRATOR . '/components/com_pmform/libraries/osf');
JLoader::registerPrefix('PMForm', JPATH_BASE . '/components/com_pmform');

$option = JFactory::getApplication()->input->getCmd('option');
$options = array('com_eventbooking', 'com_jdonation', 'com_osmembership');
if (!in_array($option, $options))
{
	require_once JPATH_ROOT . '/components/com_pmform/payments/os_payment.php';
	require_once JPATH_ROOT . '/components/com_pmform/payments/os_payments.php';
}
if (JFactory::getApplication()->isAdmin())
{
	JLoader::register('PMFormHelper', JPATH_ROOT . '/components/com_pmform/helper/helper.php');
	JLoader::register('PMFormHtml', JPATH_ROOT . '/components/com_pmform/helper/html.php');
}
else
{
	//Shared models
	JLoader::register('PmFormModelPayments', JPATH_ADMINISTRATOR . '/components/com_pmform/model/payments.php');
}

