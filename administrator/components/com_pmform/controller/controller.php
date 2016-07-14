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

class PMFormController extends POSFControllerAdmin
{

	/**
	 * Display information
	 */
	function display($cachable = false, array $urlparams = Array())
	{
		JFactory::getDocument()->addStyleSheet(JUri::base(true) . '/components/com_pmform/assets/css/style.css');
		if (version_compare(JVERSION, '3.0', 'lt'))
		{
			PMFormHelper::loadBootstrap();
		}
		parent::display($cachable, $urlparams);
		if ($this->input->getCmd('format', 'html') == 'html')
		{
			PMFormHelper::displayCopyRight();
		}
	}

	public function download_file()
	{
		$filePath = PMFormHelper::getConfigValue('path_upload');
		if (!$filePath)
		{
			$filePath = 'images/com_pmform';
		}
		$fileName = $this->input->get('file_name', '', 'none');
		if (file_exists(JPATH_ROOT . '/' . $filePath . '/' . $fileName))
		{
			while (@ob_end_clean()) ;
			PMFormHelper::processDownload(JPATH_ROOT . '/' . $filePath . '/' . $fileName, $fileName);
			exit();
		}
		else
		{
			$this->app->redirect('index.php?option=com_pmform', JText::_('PF_FILE_NOT_EXIST'));
		}
	}

	/**
	 * Update database schema... to the latest version
	 *
	 */
	function do_upgrade()
	{
		require_once JPATH_COMPONENT . '/install.pmform.php';
		com_pmformInstallerScript::updateDatabaseSchema();
	}
}