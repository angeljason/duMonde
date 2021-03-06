<?php
/**
 * @package     POSF
 * @subpackage  Controller
 *
 * @copyright   Copyright (C) 2014 Ossolution Team, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE
 */
defined('_JEXEC') or die();

/**
 * Joomla CMS Item View Class. This class is used to display details information of an item
 * or display form allow add/editing items
 *
 * @package     POSF
 * @subpackage  View
 * @since       1.0
 */
class POSFViewItem extends POSFViewHtml
{

	/**
	 * The model state.
	 *
	 * @var POSFModelState
	 */
	protected $state;

	/**
	 * The record which is being added/edited
	 *
	 * @var Object
	 */
	protected $item;

	/**
	 * The array which keeps list of "list" options which will be displayed on the form
	 *
	 * @var Array
	 */
	protected $lists;

	/**
	 * Method to display the view
	 * 
	 * @see POSFViewHtml::display()
	 */
	public function display()
	{
		$this->prepareView();
		parent::display();
	}

	/**
	 * Method to prepare all the data for the view before it is displayed
	 */
	protected function prepareView()
	{
		$this->state = $this->model->getState();
		$this->item = $this->model->getData();		
		if (property_exists($this->item, 'published'))
		{
			$this->lists['published'] = JHtml::_('select.booleanlist', 'published', ' ', $this->item->published);
		}
		if (property_exists($this->item, 'access'))
		{
			$this->lists['access'] = JHtml::_('access.level', 'access', $this->item->access, ' ', false);
		}
		
		if (property_exists($this->item, 'language'))
		{
			$this->lists['language'] = JHtml::_('select.genericlist', JHtml::_('contentlanguage.existing', true, true), 'language', ' ', 'value', 'text', $this->item->language);
		}
		
		if ($this->isAdminView)
		{
			$this->addToolbar();
		}
	}

	/**
	 * Add the page title and toolbar.
	 */
	protected function addToolbar()
	{
		$helperClass = $this->classPrefix . 'Helper';
		if (is_callable($helperClass . '::getActions'))
		{
			$canDo = call_user_func(array($helperClass, 'getActions'), $this->name, $this->state);
		}
		else
		{
			$canDo = call_user_func(array('POSFHelper', 'getActions'), $this->option, $this->name, $this->state);
		}
		if ($this->item->id)
		{
			$toolbarTitle = $this->languagePrefix . '_' . $this->name . '_EDIT';
		}
		else
		{
			$toolbarTitle = $this->languagePrefix . '_' . $this->name . '_NEW';
		}
		JToolBarHelper::title(JText::_(strtoupper($toolbarTitle)));
		if ($canDo->get('core.edit') || ($canDo->get('core.create')))
		{
			JToolBarHelper::apply('apply', 'JTOOLBAR_APPLY');
			JToolBarHelper::save('save', 'JTOOLBAR_SAVE');
		}
		
		if ($canDo->get('core.create'))
		{
			JToolBarHelper::custom('save2new', 'save-new.png', 'save-new_f2.png', 'JTOOLBAR_SAVE_AND_NEW', false);
		}
		
		if ($this->item->id && $canDo->get('core.create'))
		{
			JToolbarHelper::save2copy('save2copy');
		}
		
		if ($this->item->id)
		{
			JToolBarHelper::cancel('cancel', 'JTOOLBAR_CLOSE');
		}
		else
		{
			JToolBarHelper::cancel('cancel', 'JTOOLBAR_CANCEL');
		}
	}
}
