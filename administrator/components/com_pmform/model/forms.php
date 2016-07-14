<?php
/**
 * @version		3.0
 * @package		Joomla
 * @subpackage	Payment Form
 * @author  Tuan Pham Ngoc
 * @copyright	Copyright (C) 2010 Ossolution Team
 * @license		GNU/GPL, see LICENSE.php
 */
// Check to ensure this file is included in Joomla!
defined('_JEXEC') or die ;


class PMFormModelForms extends POSFModelList
{


	protected function _buildQueryColumns($query)
	{
		$query->select(array('tbl.*', 'SUM(b.amount) as total_payment'));

		return $this;
	}

	/**
	 * Builds LEFT JOINS clauses for the query
	 */
	protected function _buildQueryJoins($query)
	{
		$query->leftJoin('#__pf_payments AS b ON ( tbl.id = b.form_id AND b.published=1 )');

		return $this;
	}

	/**
	 * Builds a GROUP BY clause for the query
	 */
	protected function _buildQueryGroup($query)
	{
		$query->group('tbl.id');

		return $this;
	}
}