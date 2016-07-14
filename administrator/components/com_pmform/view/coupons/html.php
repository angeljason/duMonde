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

class PMFormViewCouponsHtml extends POSFViewList
{
	protected function prepareView()
	{
		parent::prepareView();

		$this->discountTypes = array(0 => '%', 1 => PMFormHelper::getConfigValue('currency_symbol'));
		$this->dateFormat    = PMFormHelper::getConfigValue('date_format');
		$this->nullDate      = JFactory::getDbo()->getNullDate();
	}
}