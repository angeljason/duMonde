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

class PMFormModelField extends POSFModelAdmin
{

	public static $protectedFields = array('first_name', 'email', 'amount');

	/**
	 * Store custom field
	 *
	 * @param POSFInput $input
	 * @param array    $ignore
	 *
	 * @return bool|void
	 */
	public function store($input, $ignore = array())
	{
		$row     = $this->getTable();
		$fieldId = $input->getInt('id', 0);
		if ($fieldId)
		{
			$row->load($fieldId);
		}
		$input->set('depend_on_options', implode(',', $input->get('depend_on_options', array(), 'array')));
		if (in_array($row->name, self::$protectedFields))
		{
			$ignore = array('field_type', 'published', 'required');
		}

		$formIds = $input->get('form_id', array(), 'array');
		if (count($formIds) == 0 || $formIds[0] == -1 || in_array($row->name, self::$protectedFields))
		{
			$input->set('form_id', -1);
			$formIds = array();
		}
		else
		{
			$input->set('form_id', 1);
		}
		parent::store($input, $ignore);

		$fieldId = $input->getInt('id', 0);
		$db      = $this->getDbo();
		$query   = $db->getQuery(true);
		if (count($formIds))
		{
			$query->delete('#__pf_form_fields')
				->where('field_id=' . $fieldId)
				->where('form_id NOT IN (' . implode(',', $formIds) . ')');
			$db->setQuery($query);
			$db->execute();
			for ($i = 0, $n = count($formIds); $i < $n; $i++)
			{
				$formId = $formIds[$i];
				$query->clear();
				$query->select('COUNT(*)')
					->from('#__pf_form_fields')
					->where('field_id = ' . $fieldId)
					->where('form_id = ' . $formId);
				$db->setQuery($query);
				$total = (int) $db->loadResult();
				if (!$total)
				{
					$query->clear();
					$query->select('MAX(ordering)')
						->from('#__pf_form_fields')
						->where('form_id = ' . (int) $formId);
					$db->setQuery($query);
					$ordering = (int) $db->loadResult();
					$ordering++;
					$query->clear();
					$query->insert('#__pf_form_fields')
						->columns('form_id, field_id, required, published, ordering')
						->values("$formId, $fieldId, 0, 1, $ordering");
					$db->setQuery($query);
					$db->execute();
				}
			}
		}
		else
		{
			//Assigning to all existing forms
			$query->select('id')
				->from('#__pf_forms')
				->where('published = 1');
			$db->setQuery($query);
			$formIds = $db->loadColumn();
			for ($i = 0, $n = count($formIds); $i < $n; $i++)
			{
				$formId = $formIds[$i];
				$query->clear();
				$query->select('COUNT(*)')
					->from('#__pf_form_fields')
					->where('field_id = ' . $fieldId)
					->where('form_id = ' . $formId);
				$db->setQuery($query);
				$total = (int) $db->loadResult();
				if (!$total)
				{
					$query->clear();
					$query->select('MAX(ordering)')
						->from('#__pf_form_fields')
						->where('form_id = ' . (int) $formId);
					$db->setQuery($query);
					$ordering = (int) $db->loadResult();
					$ordering++;
					$query->clear();
					$query->insert('#__pf_form_fields')
						->columns('form_id, field_id, required, published, ordering')
						->values("$formId, $fieldId, 0, 1, $ordering");
					$db->setQuery($query);
					$db->execute();
				}
			}
		}

	}

	/**
	 *
	 * Publish, unpublish custom fields
	 *
	 * @param array $pks
	 * @param int   $value
	 */
	public function publish($pks, $value = 1)
	{
		if (count($pks))
		{
			$db    = $this->getDbo();
			$query = $db->getQuery(true);
			$query->select('id')
				->from('#__pf_fields')
				->where('name IN ("' . implode('","', self::$protectedFields) . '")');
			$db->setQuery($query);
			$protectedFieldIds = $db->loadColumn();
			$pks               = array_diff($pks, $protectedFieldIds);
			if (count($pks))
			{
				parent::publish($pks, $value);
			}
		}
	}

	/**
	 * Method to remove  fields
	 *
	 * @access    public
	 * @return    boolean    True on success
	 */
	public function delete($cid = array())
	{
		if (count($cid))
		{
			$db    = $this->getDbo();
			$query = $db->getQuery(true);
			$query->select('id')
				->from('#__pf_fields')
				->where('name IN ("' . implode('","', self::$protectedFields) . '")');
			$db->setQuery($query);
			$protectedFieldIds = $db->loadColumn();
			$cid               = array_diff($cid, $protectedFieldIds);
			if (count($cid))
			{
				$query->clear();
				$query->delete('#__pf_field_value')->where('field_id IN (' . implode(',', $cid) . ')');
				$db->setQuery($query);
				$db->execute();
				parent::delete($cid);
			}
		}
	}

	/**
	 * Change require status
	 *
	 * @param array $cid
	 * @param int   $state
	 *
	 * @return boolean
	 */
	public function required($cid, $state)
	{
		if (count($cid))
		{
			$db    = $this->getDbo();
			$query = $db->getQuery(true);
			$query->select('id')
				->from('#__pf_fields')
				->where('name IN ("' . implode('","', self::$protectedFields) . '")');
			$db->setQuery($query);
			$protectedFieldIds = $db->loadColumn();
			$cid               = array_diff($cid, $protectedFieldIds);
			if (count($cid))
			{
				$query->clear();
				$query->update('#__pf_fields')
					->set('required = ' . $state)
					->where('id IN (' . implode(',', $cid) . ' )');
				$db->setQuery($query);
				$db->execute();
			}
		}
	}
}