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

class PMFormViewFormHtml extends POSFViewItem
{
	protected function prepareView()
	{
		parent::prepareView();
		$db    = JFactory::getDbo();
		$config   = PMFormHelper::getConfig();
		$nullDate = $db->getNullDate();
		if ($this->item->publish_up != "" && $this->item->publish_up != $nullDate)
		{
			$this->item->publish_up = JHtml::_('date', $this->item->publish_up, 'Y-m-d', null);
		}
		else
		{
			$this->item->publish_up = '';
		}
		if ($this->item->publish_down != "" && $this->item->publish_down != $nullDate)
		{
			$this->item->publish_down = JHtml::_('date', $this->item->publish_down, 'Y-m-d', null);
		}
		else
		{
			$this->item->publish_down = '';
		}
		if ($this->item->late_payment_date != "" && $this->item->late_payment_date != $nullDate)
		{
			$this->item->late_payment_date = JHtml::_('date', $this->item->late_payment_date, 'Y-m-d', null);
		}
		else
		{
			$this->item->late_payment_date = '';
		}
		$options                         = array();
		$options[]                       = JHtml::_('select.option', 0, JText::_('Percent'));
		$options[]                       = JHtml::_('select.option', 1, JText::_('Fixed Amount'));
		$this->lists['late_amount_type'] = JHtml::_('select.genericlist', $options, 'late_amount_type', '', 'value', 'text', $this->item->late_amount_type);
		if ($config->enable_payment_method_selection)
		{
			$query = $db->getQuery(true);
			//Get list of available payment methods
			$options   = array();
			$options[] = JHtml::_('select.option', '', JText::_('All Payment Methods'), 'id', 'title');
			$query->select('id, title')
				->from('#__pf_payment_plugins')
				->where('published = 1');
			$db->setQuery($query);
			$this->lists['payment_methods'] = JHtml::_('select.genericlist', array_merge($options, $db->loadObjectList()), 'payment_methods[]', ' multiple="multiple" ', 'id', 'title', explode(',', $this->item->payment_methods));
		}
		$this->lists['enable_coupon'] = JHtml::_('select.booleanlist', 'enable_coupon', ' class="inputbox" ', $this->item->enable_coupon);
		$this->lists['attachment']    = PMFormHelper::attachmentList($this->item->attachment, $config);
		$this->nullDate = $nullDate;
		$this->fields   = $this->model->getFields();
		$this->config   = $config;

		if (version_compare(JVERSION, '3.0', 'ge'))
		{
			JHtml::_('bootstrap.tooltip', '.hasTooltip', array('placement' => 'top'));
		}
		else
		{
			PMFormHelper::loadTooltip('.hasTooltip', array('placement' => 'top'));
		}


		JPluginHelper::importPlugin('pmform');
		$dispatcher = JDispatcher::getInstance();
		$results = $dispatcher->trigger('onEditForm', array($this->item));
		$this->plugins = $results;
	}
}