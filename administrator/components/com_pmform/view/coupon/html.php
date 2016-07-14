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

class PMFormViewCouponHtml extends POSFViewItem
{
	protected function prepareView()
	{
		parent::prepareView();

		$db                         = JFactory::getDbo();
		$query                      = $db->getQuery(true);
		$options                    = array();
		$options[]                  = JHtml::_('select.option', 0, JText::_('%'));
		$options[]                  = JHtml::_('select.option', 1, PMFormHelper::getConfigValue('currency_symbol'));
		$this->lists['coupon_type'] = JHtml::_('select.genericlist', $options, 'coupon_type', 'class="inputbox"', 'value', 'text', $this->item->coupon_type);
		$options                    = array();
		$options[]                  = JHtml::_('select.option', 0, 'All Forms', 'id', 'title');
		$query->select('id, title')
			->from('#__pf_forms')
			->where('published = 1')
			->order('ordering');
		$db->setQuery($query);
		$options                = array_merge($options, $db->loadObjectList());
		$this->lists['form_id'] = JHtml::_('select.genericlist', $options, 'form_id', 'class="inputbox"', 'id', 'title', $this->item->form_id);
		$this->nullDate         = $db->getNullDate();
	}
}