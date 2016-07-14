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

class PMFormViewPaymentsHtml extends POSFViewList
{

	protected function prepareView()
	{
		parent::prepareView();
		$db    = JFactory::getDbo();
		$query = $db->getQuery(true);
		$query->select('id, title')
			->from('#__pf_forms')
			->where('published = 1')
			->order('id DESC');
		$db->setQuery($query);

		$options                       = array();
		$options[]                     = JHtml::_('select.option', 0, JText::_('Select Form'), 'id', 'title');
		$options                       = array_merge($options, $db->loadObjectList());
		$this->lists['filter_form_id'] = JHtml::_('select.genericlist', $options, 'filter_form_id', ' onchange="submit();" ', 'id', 'title', $this->state->filter_form_id);
		$this->config                  = PMFormHelper::getConfig();
	}

	protected function addToolbar()
	{
		parent::addToolbar();
		if (count($this->items))
		{
			JToolBarHelper::custom('payment.export', 'download', 'download', 'PF_EXPORT_PAYMENTS', false);
		}
	}

}