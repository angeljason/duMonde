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

defined('_JEXEC') or die ();

class PMFormViewPaymentHtml extends POSFViewItem
{
	protected function prepareView()
	{
		parent::prepareView();
		$app    = JFactory::getApplication();
		$db     = JFactory::getDbo();
		$query  = $db->getQuery(true);
		$config = PMFormHelper::getConfig();
		//Get list of country
		$sql = 'SELECT name AS value, name AS text FROM #__pf_countries WHERE published = 1';
		$db->setQuery($sql);
		$rowCountries                = $db->loadObjectList();
		$options                     = array();
		$options[]                   = JHtml::_('select.option', '', JText::_('Select country'));
		$options                     = array_merge($options, $rowCountries);
		$this->lists['country_list'] = JHtml::_('select.genericlist', $options, 'country', '', 'value', 'text', $this->item->country);

		//Payment methods dropdown
		$query->clear();
		$query->select('name, title')
			->from('#__pf_payment_plugins')
			->where('published = 1')
			->order('title');
		$db->setQuery($query);
		$options                       = array();
		$options[]                     = JHtml::_('select.option', '', JText::_('PF_PAYMENT_METHOD'), 'name', 'title');
		$options                       = array_merge($options, $db->loadObjectList());
		$this->lists['payment_method'] = JHtml::_('select.genericlist', $options, 'payment_method', '', 'name', 'title', $this->item->payment_method);
		//Build the form object
		!$this->item->id ? $formId = $app->input->getInt('filter_form_id') : $formId = $this->item->form_id;
		$rowFields = PMFormHelper::getFormFields($formId);
		$form      = new POSFForm($rowFields);
		if ($this->item->id)
		{
			$data       = PMFormHelper::getPaymentData($this->item, $rowFields);
			$useDefault = false;
		}
		else
		{
			$useDefault = true;
			$data       = array();
		}
		$form->bind($data, $useDefault);
		$this->form   = $form;
		$this->config = $config;
		$this->formId = $formId;	
	}
}