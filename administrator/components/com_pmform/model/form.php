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

class PMFormModelForm extends POSFModelAdmin
{

	/**
	 * Method to get list of fields assigned to this form
	 *
	 */
	public function getFields()
	{
		$db    = $this->getDbo();
		$query = $db->getQuery(true);
		if (!$this->state->id)
		{
			$query->select('*')
				->from('#__pf_fields')
				->where('published=1')
				->where('(is_core=1 OR form_id=-1)')
				->order('id, title');
			$db->setQuery($query);
			$rowFields = $db->loadObjectList();
			for ($i = 0, $n = count($rowFields); $i < $n; $i++)
			{
				$rowField           = $rowFields[$i];
				$rowField->ordering = $i + 1;
				$rowField->required = 1;
			}
		}
		else
		{
			//Get all fields assigned to this form
			$query->select('a.*, b.ordering, b.required, b.published')
				->from('#__pf_fields AS a')
				->innerJoin('#__pf_form_fields as b ON a.id = b.field_id')
				->where('b.form_id=' . (int) $this->state->id)
				->order('b.ordering');
			$db->setQuery($query);
			$rowFields = $db->loadObjectList();
		}

		return $rowFields;
	}

	/**
	 * Store form
	 *
	 * @param POSFInput $input
	 * @param array    $ignore
	 *
	 * @return bool|void
	 */
	public function store($input, $ignore = array())
	{
		$input->set('payment_methods', implode(',', $input->get('payment_methods', array(), 'array')));
		parent::store($input, $ignore);

		$formId = $input->getInt('id', 0);
		$db     = $this->getDbo();
		$query  = $db->getQuery(true);
		$query->delete('#__pf_form_fields')
			->where('form_id=' . $formId);
		$db->setQuery($query);
		$db->execute();
		$fields = $input->post->get('fields', array(), 'array');
		$query->clear();
		$query->insert('#__pf_form_fields')
			->columns('form_id, field_id, required, published, ordering');
		foreach ($fields as $fieldId)
		{
			$published = $input->post->getInt('published_' . $fieldId, 0);
			$required  = $input->post->getInt('required_' . $fieldId, 0);
			$ordering  = $input->post->getInt('ordering_' . $fieldId, 0);
			//First name and email are always required fields
			if (in_array($fieldId, array(1, 12)))
			{
				$published = 1;
				$required  = 1;
			}
			$query->values("$formId, $fieldId, $required, $published, $ordering");
		}
		$db->setQuery($query);
		$db->execute();
		$query->clear();
		$query->select('id')
			->from('#__pf_form_fields')
			->where('form_id=' . $formId)
			->order('ordering');
		$db->setQuery($query);
		$rowFields = $db->loadObjectList();
		$ordering  = 0;
		for ($i = 0, $n = count($rowFields); $i < $n; $i++)
		{
			$ordering++;
			$rowField = $rowFields[$i];
			$query->clear();
			$query->update('#__pf_form_fields')
				->set("`ordering`=$ordering")
				->where('id=' . $rowField->id);
			$db->setQuery($query);
			$db->execute();
		}
	}

	/**
	 * Method to remove forms
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
			$query->delete('#__pf_form_fields')
				->where('form_id IN(' . implode(',', $cid) . ')');
			$db->setQuery($query);
			$db->execute();

			parent::delete($cid);
		}
	}
}