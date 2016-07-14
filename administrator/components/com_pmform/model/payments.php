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

class PMFormModelPayments extends POSFModelList
{

	/**
	 * Constructor
	 *
	 * @since 3.5
	 */
	function __construct($config = array())
	{
		$config['search_fields'] = array('tbl.first_name', 'tbl.last_name', 'tbl.email', 'tbl.transaction_id');
		parent::__construct($config);

		$this->state->insert('filter_form_id', 'int', 0)
			->insert('filter_user_id', 'int', 0);
		$this->state->setDefault('filter_order', 'tbl.created_date')->setDefault('filter_order_Dir', 'DESC');
	}

	protected function _buildQueryColumns($query)
	{
		$query->select('tbl.*, b.title, c.username, d.code AS coupon_code');

		return $this;
	}

	protected function _buildQueryJoins($query)
	{
		$query->innerJoin('#__pf_forms AS b ON tbl.form_id = b.id')
			->leftJoin('#__users AS c ON tbl.user_id = c.id')
			->leftJoin('#__pf_coupons AS d ON tbl.coupon_id = d.id');

		return $this;
	}

	protected function _buildQueryWhere($query)
	{
		parent::_buildQueryWhere($query);

		$query->where('(tbl.published=1 OR tbl.payment_method LIKE "os_offline%")');

		if ($this->state->filter_form_id)
		{
			$query->where('tbl.form_id=' . $this->state->filter_form_id);
		}

		if ($this->state->filter_user_id)
		{
			$user = JFactory::getUser();
			$query->where(' (tbl.user_id = ' . $this->state->filter_user_id . ' OR tbl.email=' . $this->getDbo()->quote($user->email) . ')');
		}

		return $this;
	}
}