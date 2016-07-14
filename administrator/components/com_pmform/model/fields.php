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

class PMFormModelFields extends POSFModelList
{
	public function __construct($config = array())
	{
		parent::__construct($config);
		$this->state->insert('show_core_field', 'int', 1)
			->insert('filter_form_id', 'int', 1);
	}

	protected function _buildQueryWhere($query)
	{
		parent::_buildQueryWhere($query);

		if ($this->state->show_core_field == 2)
		{
			$query->where('tbl.is_core=0');
		}
		if ($this->state->filter_form_id)
		{
			$query->where('(tbl.is_core=1 OR tbl.form_id = -1 OR tbl.id IN (SELECT field_id FROM #__pf_form_fields WHERE form_id=' . (int) $this->state->filter_form_id . '))');
		}

		return $this;
	}
}