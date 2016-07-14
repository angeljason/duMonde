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

class PMFormModelConfiguration extends POSFModel
{

	/**
	 * Get configuration data
	 *
	 */
	public function getData()
	{
		return PMFormHelper::getConfig();
	}

	/**
	 * Store the configuration data
	 *
	 * @param array $post
	 */
	public function store($data)
	{
		jimport('joomla.filesystem.folder');
		jimport('joomla.filesystem.file');
		$db  = $this->getDbo();
		$row = $this->getTable();
		$db->truncateTable('#__pf_configs');
		foreach ($data as $key => $value)
		{
			$row->id           = 0;
			$row->config_key   = $key;
			$row->config_value = $value;
			$row->store();
		}
		$pathUpload = PMFormHelper::getConfigValue('path_upload');
		if ($pathUpload)
		{
			if (!JFolder::exists(JPATH_ROOT . '/' . $pathUpload))
			{
				JFolder::create(JPATH_ROOT . '/' . $pathUpload);
			}
			if (!JFile::exists(JPATH_ROOT . '/' . $pathUpload . '/.htaccess'))
			{
				JFile::copy(JPATH_COMPONENT . '/' . 'htaccess.txt', JPATH_ROOT . '/' . $pathUpload . '/.htaccess');
			}
		}

		// Publish the invoice plugin if inoice is enabled
		if ($data['activate_invoice_feature'])
		{
			$sql = 'UPDATE #__extensions SET `enabled`= 1 WHERE `element`="invoice" AND `folder`="pmform"';
			$db->setQuery($sql);
			$db->execute();
		}
		
		$query = $db->getQuery(true);
		if ($data['create_account_when_payment_success'])
		{
			//Need to activate the account creation plugin
			$query->update('#__extensions')
				->set('`enabled` = 1')
				->set('`ordering` = -1')
				->where('`element`="account" AND `folder`="pmform"');
			$db->setQuery($query);
			$db->execute();
		}
		else
		{
			//We should disable this plugin
			$query->update('#__extensions')
				->set('`enabled` = 0')
				->where('`element`="account" AND `folder`="pmform"');
			$db->setQuery($query);
			$db->execute();
		}

		return true;
	}
}