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

class PMFormViewFieldHtml extends POSFViewItem
{
	protected function prepareView()
	{
		parent::prepareView();
		$db         = JFactory::getDbo();
		$query      = $db->getQuery(true);
		$config     = PmFormHelper::getConfig();
		$fieldTypes = array('Text', 'Textarea', 'List', 'Checkboxes', 'Radio', 'Date', 'File', 'Heading', 'Message', 'Countries', 'State', 'SQL');
		$options    = array();
		$options[]  = JHtml::_('select.option', -1, JText::_('PF_SELECT_FIELD_TYPE'));
		$options    = array();
		foreach ($fieldTypes as $fieldType)
		{
			$options[] = JHtml::_('select.option', $fieldType, $fieldType);
		}
		if ($this->item->is_core)
		{
			$readOnly = ' readonly="true" ';
		}
		else
		{
			$readOnly = '';
		}
		$this->lists['fieldtype'] = JHtml::_('select.genericlist', $options, 'fieldtype', ' ' . $readOnly, 'value', 'text',
			$this->item->fieldtype);

		//Build forms selection
		$query->select('id, title')
			->from('#__pf_forms')
			->order('title');
		$db->setQuery($query);
		$options   = array();
		$options[] = JHtml::_('select.option', 0, JText::_('PF_SELECT_FORM'), 'id', 'title');
		$options   = array_merge($options, $db->loadObjectList());
		$formIds = array();
		if ($this->item->id)
		{
			if ($this->item->form_id == -1)
			{
				$formIds[] = -1;
			}
			else
			{
				$query->clear();
				$query->select('form_id')
					->from('#__pf_form_fields')
					->where('field_id=' .(int) $this->item->id);
				$db->setQuery($query);
				$formIds = $db->loadColumn();
			}
		}
		$this->lists ['form_id'] = JHtml::_('select.genericlist', $options, 'form_id[]', ' multiple="multiple" ', 'id', 'title', $formIds);
		$integration             = $config->cb_integration;
		if ($integration)
		{
			$options   = array();
			$options[] = JHtml::_('select.option', '', JText::_('PF_SELECT_FIELD'));
			if ($integration == 1 || $integration == 2)
			{
				$query->clear();
				if ($integration == 1)
				{
					$query->select('name AS `value`, name AS `text`')
						->from('#__comprofiler_fields')
						->where('`table`="#__comprofiler"');
				}
				else
				{
					$query->select('fieldcode AS `value`, fieldcode AS `text`')
						->from('#__community_fields')
						->where('published=1 AND fieldcode != ""');
				}
				$db->setQuery($query);
				$options = array_merge($options, $db->loadObjectList());
			}
			elseif ($integration == 3)
			{
				$fields = array(
					'address1',
					'address2',
					'city',
					'region',
					'country',
					'postal_code',
					'phone',
					'website',
					'favoritebook',
					'aboutme',
					'dob');
				foreach ($fields as $field)
				{
					$options[] = JHtml::_('select.option', $field, $field);
				}
			}
			$this->lists['field_mapping'] = JHtml::_('select.genericlist', $options, 'field_mapping', '', 'value', 'text',
				$this->item->field_mapping);
		}

		$options                            = array();
		$options[]                          = JHtml::_('select.option', 0, JText::_('None'));
		$options[]                          = JHtml::_('select.option', 1, JText::_('Integer Number'));
		$options[]                          = JHtml::_('select.option', 2, JText::_('Number'));
		$options[]                          = JHtml::_('select.option', 3, JText::_('Email'));
		$options[]                          = JHtml::_('select.option', 4, JText::_('Url'));
		$options[]                          = JHtml::_('select.option', 5, JText::_('Phone'));
		$options[]                          = JHtml::_('select.option', 6, JText::_('Past Date'));
		$options[]                          = JHtml::_('select.option', 7, JText::_('Ip'));
		$options[]                          = JHtml::_('select.option', 8, JText::_('Min size'));
		$options[]                          = JHtml::_('select.option', 9, JText::_('Max size'));
		$options[]                          = JHtml::_('select.option', 10, JText::_('Min integer'));
		$options[]                          = JHtml::_('select.option', 11, JText::_('Max integer'));
		$this->lists['datatype_validation'] = JHtml::_('select.genericlist', $options, 'datatype_validation', 'class="inputbox"', 'value', 'text',
			$this->item->datatype_validation);
		$this->lists['fee_field']           = JHtml::_('select.booleanlist', 'fee_field', ' class="inputbox" ', $this->item->fee_field);
		$this->lists['required']            = JHtml::_('select.booleanlist', 'required', '', $this->item->required);

		$query->clear();
		$query->select('id, title')
			->from('#__pf_fields')
			->where('fieldtype IN ("List", "Radio", "Checkboxes")')
			->where('published=1');
		$db->setQuery($query);
		$options                           = array();
		$options[]                         = JHtml::_('select.option', 0, JText::_('Select'), 'id', 'title');
		$options                           = array_merge($options, $db->loadObjectList());
		$this->lists['depend_on_field_id'] = JHtml::_('select.genericlist', $options, 'depend_on_field_id',
			'class="inputbox" onchange="updateDependOnOptions();"', 'id', 'title', $this->item->depend_on_field_id);
		if ($this->item->depend_on_field_id)
		{
			//Get the selected options
			$this->dependOnOptions = explode(",", $this->item->depend_on_options);
			$query->clear();
			$query->select('`values`')
				->from('#__pf_fields')
				->where('id=' . $this->item->depend_on_field_id);
			$db->setQuery($query);
			$this->dependOptions = explode("\r\n", $db->loadResult());
		}
	}
}