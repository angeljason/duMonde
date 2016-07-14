<?php
/**
 * @version		$Id: mod_pagepeel_banner.php 2.0
 * @Reni Mustika (old version) & Rony S Y Zebua (Joomla 1.7/Joomla 2.5 and Joomla 3.0)
 * @Official site http://www.templateplazza.com
 * @based on www.webpicasso.de pageear script and mod_banner.php
 * @package		Joomla 3.0.x
 * @subpackage	mod_pagepeel_banner
 * @copyright	Copyright (C) 2005 - 2011 Open Source Matters, Inc. All rights reserved.
 * @license		GNU General Public License version 2 or later; see LICENSE.txt
 */

// no direct access
defined('_JEXEC') or die;

jimport('joomla.application.component.model');

class modPeelBannersHelper
{
	static function &getList(&$params)
	{
		jimport('joomla.application.component.model');
		JModelLegacy::addIncludePath(JPATH_ROOT.'/components/com_banners/models', 'BannersModel');
		$document	= JFactory::getDocument();
		$app		= JFactory::getApplication();
		$keywords	= explode(',', $document->getMetaData('keywords'));

		$model = JModelLegacy::getInstance('Banners','BannersModel',array('ignore_request'=>true));
		$model->setState('filter.client_id', (int) $params->get('cid'));
		$model->setState('filter.category_id', $params->get('catid', array()));
		$model->setState('list.limit', (int) $params->get('count', 1));
		$model->setState('list.start', 0);
		$model->setState('filter.ordering', $params->get('ordering'));
		$model->setState('filter.tag_search', $params->get('tag_search'));
		$model->setState('filter.keywords', $keywords);
		$model->setState('filter.language', $app->getLanguageFilter());

		$banners = $model->getItems();
		$model->impress();

		return $banners;
	}
}