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

class PmFormViewPluginsHtml extends POSFViewList
{

	public function addToolbar()
	{
		JToolBarHelper::title(JText::_('PF_PAYMENT_PLUGIN_MANAGEMENT'), 'generic.png');
		JToolBarHelper::publishList('publish');
		JToolBarHelper::unpublishList('unpublish');
		JToolBarHelper::deleteList(JText::_('PF_PAYMENT_PLUGIN_UNINSTALL_CONFIRM'), 'uninstall', 'Uninstall');
	}
}