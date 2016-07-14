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

class PMFormViewMassmailHtml extends POSFViewHtml
{
	function display()
	{
		$db    = JFactory::getDbo();
		$query = $db->getQuery(true);
		$model = $this->getModel();
		$state = $model->getState();
		$query->select('id, title')
			->from('#__pf_forms')
			->where('published = 1')
			->order('title, ordering');
		$options   = array();
		$options[] = JHtml::_('select.option', 0, JText::_('Select Form'), 'id', 'title');
		$db->setQuery($query);
		$options                 = array_merge($options, $db->loadObjectList());
		$lists['filter_form_id'] = JHtml::_('select.genericlist', $options, 'filter_form_id', '', 'id', 'title', $state->filter_form_id);
		$this->lists             = $lists;

		parent::display();
	}
}