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

class PmFormViewPluginHtml extends POSFViewItem
{
	protected function prepareView()
	{
		parent::prepareView();
		$registry = new JRegistry ();
		$registry->loadString($this->item->params);
		$data         = new stdClass ();
		$data->params = $registry->toArray();
		$form         = JForm::getInstance('jdonation', JPATH_ROOT . '/components/com_pmform/payments/' . $this->item->name . '.xml', array(), false, '//config');
		$form->bind($data);
		$this->form = $form;
	}

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