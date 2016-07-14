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
defined('_JEXEC') or die ;

/**
 * Payment Form Component Forms Model
 *
 * @package		Joomla
 * @subpackage	Payment Form
 * @since 1.5
 */
class PMFormModelForms extends POSFModelList
{		
	protected function _buildQueryWhere($query)
	{
		$query->where('tbl.published = 1')
			->where('(tbl.publish_up = "0000-00-00 00:00:00" OR tbl.publish_up <= NOW())')
			->where('(tbl.publish_down = "0000-00-00 00:00:00" OR tbl.publish_down >= NOW())')
			->where('tbl.access IN ('.implode(',', JFactory::getUser()->getAuthorisedViewLevels()).')');

		return $this;
	}
} 