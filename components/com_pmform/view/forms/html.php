<?php
/**
 * @version        4.2
 * @package        Joomla
 * @subpackage     Payment Form
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2010 - 2015 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */

// Check to ensure this file is included in Joomla!
defined('_JEXEC') or die;

/**
 * HTML View class for Payemnt Form component
 *
 * @static
 * @package        Joomla
 * @subpackage     Payment Form
 */
class PMFormViewFormsHtml extends POSFViewList
{

	protected function prepareView()
	{
		parent::prepareView();

		$this->config = PMFormHelper::getConfig();
	}
}