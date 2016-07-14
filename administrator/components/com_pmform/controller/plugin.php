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

class PMFormControllerPlugin extends PMFormController
{

	/**
	 * Install the payment plugin from selected package
	 *
	 */
	public function install()
	{
		$model = $this->getModel('plugin', array('ignore_request' => true));
		try
		{
			$model->install($this->input);
			$this->setMessage(JText::_('Plugin installed'));
		}
		catch (Exception $e)
		{
			$this->setMessage($e->getMessage(), 'error');
		}
		$this->setRedirect($this->getViewListUrl());
	}

	/**
	 * Uninstall the selected payment plugin
	 */
	public function uninstall()
	{
		$model    = $this->getModel('plugin', array('ignore_request' => true));
		$cid      = $this->input->get('cid', array(), 'array');
		$pluginId = (int) $cid[0];
		try
		{
			$model->uninstall($pluginId);
			$this->setMessage(JText::_('The plugin was successfully uninstalled'));
		}
		catch (Exception $e)
		{
			$this->setMessage($e->getMessage(), 'error');
		}
		$this->setRedirect($this->getViewListUrl());
	}
} 