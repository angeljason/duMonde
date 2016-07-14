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

class PMFormViewFieldsHtml extends POSFViewList
{
	protected function prepareView()
	{
		parent::prepareView();
		$db    = JFactory::getDbo();
		$query = $db->getQuery(true);
		$query->select('id, title')
			->from('#__pf_forms')
			->where('published=1')
			->order('title');
		$db->setQuery($query);
		$options                        = array();
		$options []                     = JHtml::_('select.option', 0, JText::_('PF_SELECT_FORM'), 'id', 'title');
		$options                        = array_merge($options, $db->loadObjectList());
		$this->lists ['filter_form_id'] = JHtml::_('select.genericlist', $options, 'filter_form_id', ' onchange="submit();" ', 'id', 'title', $this->state->filter_form_id);

		$options                        = array();
		$options[]                      = JHtml::_('select.option', 1, JText::_('Show Core Fields'));
		$options[]                      = JHtml::_('select.option', 2, JText::_('Hide Core Fields'));
		$this->lists['show_core_field'] = JHtml::_('select.genericlist', $options, 'show_core_field', ' class="input-medium" onchange="submit();" ', 'value', 'text', $this->state->show_core_field);

	}
}