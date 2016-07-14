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

class PMFormViewLanguageHtml extends POSFViewHtml
{
	public function display()
	{
		$model      = $this->getModel();
		$state      = $model->getState();
		$trans      = $model->getTrans($state->filter_language, $state->filter_item);
		$languages  = $model->getSiteLanguages();
		$options    = array();
		$options [] = JHtml::_('select.option', '', JText::_('PF_SELECT_LANGUAGE'));
		foreach ($languages as $language)
		{
			$options [] = JHtml::_('select.option', $language, $language);
		}
		$lists ['filter_language'] = JHtml::_('select.genericlist', $options, 'filter_language', ' onchange="submit();" ', 'value', 'text', $state->filter_language);
		$options                   = array();
		$options []                = JHtml::_('select.option', '', JText::_('--Select Item--'));
		$options []                = JHtml::_('select.option', 'com_pmform', JText::_('Payment Form Component'));
		$langPath                  = JPATH_ROOT . '/language/en-GB/';
		$lists ['filter_item']     = JHtml::_('select.genericlist', $options, 'filter_item', ' onchange="submit();" ', 'value', 'text', $state->filter_item);
		$this->trans               = $trans;
		$this->lists               = $lists;
		$this->lang                = $state->filter_language;
		$this->item                = $state->filter_item;

		parent::display();
	}
}