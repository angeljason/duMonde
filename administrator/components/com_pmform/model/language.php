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

class PMFormModelLanguage extends POSFModel
{

	/**
	 * Instantiate the model.
	 *
	 * @param   array $config The configuration data for the model
	 *
	 */
	public function __construct($config)
	{
		parent::__construct($config);
		$this->state->insert('filter_search', 'string')
			->insert('filter_item', 'string', 'com_pmform')
			->insert('filter_language', 'string', 'en-GB')
			->insert('limit', 'int', 100)
			->insert('limitstart', 'int', 0);
	}

	/**
	 * Get language items and store them in an array
	 */
	public function getTrans($lang, $item)
	{
		$registry  = new JRegistry();
		$languages = array();
		$path      = JPATH_ROOT . '/language/en-GB/en-GB.' . $item . '.ini';
		$registry->loadFile($path, 'INI');
		$languages['en-GB'][$item] = $registry->toArray();
		$path                      = JPATH_ROOT . '/language/' . $lang . '/' . $lang . '.' . $item . '.ini';
		if (JFile::exists($path))
		{
			$registry->loadFile($path, 'INI');
			$languages[$lang][$item] = $registry->toArray();
		}
		else
		{
			$languages[$lang][$item] = array();
		}

		return $languages;
	}

	/**
	 * Get site languages
	 */
	public function getSiteLanguages()
	{
		$path    = JPATH_ROOT . '/language';
		$folders = JFolder::folders($path);
		$rets    = array();
		foreach ($folders as $folder)
		{
			if ($folder != 'pdf_fonts')
			{
				$rets[] = $folder;
			}
		}

		return $rets;
	}

	/**
	 * Save translation data
	 *
	 * @param array $data
	 */
	function save($data)
	{
		jimport('joomla.filesystem.file');
		$lang     = $data['filter_language'];
		$item     = $data['filter_item'];
		$filePath = JPATH_ROOT . '/language/' . $lang . '/' . $lang . '.' . $item . '.ini';
		$keys     = $data['keys'];
		$content  = "";
		foreach ($keys as $key)
		{
			$value = $data[$key];
			$content .= "$key=\"$value\"\n";
		}

		JFile::write($filePath, $content);

		return true;
	}
}