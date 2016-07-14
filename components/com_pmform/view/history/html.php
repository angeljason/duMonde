<?php
/**
 * @version        4.2
 * @package        Joomla
 * @subpackage     Payment Form
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2010 - 2015 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */
// Check to ensure this file is included in Joomla!
defined('_JEXEC') or die;

class PmFormViewHistoryHtml extends POSFViewHtml
{
	/**
	 * @var Indicate that this view doesn't have a model, so controller don't need to create it.
	 */
	public $hasModel = false;

	/**
	 * Method to display the view
	 *
	 */
	public function display()
	{
		$user = JFactory::getUser();
		if (!$user->id)
		{
			//Redirect user, ask them for login
			$return = base64_encode(JRoute::_('index.php?option=com_pmform&view=history&Itemid=' . $this->Itemid, false));
			JFactory::getApplication()->redirect('index.php?option=com_users&view=login&return=' . $return, JText::_('PF_LOGIN_TO_ACCESS_PAYMENT_HISTORY'));
		}
		$model = POSFModel::getInstance('Payments', 'PmFormModel', array('ignore_request' => true, 'table_prefix' => '#__pf_'));
		$model->filter_order('created_date')
			->filter_order_Dir('DESC')
			->filter_user_id($user->id);
		$this->items      = $model->getData();
		$this->pagination = $model->getPagination();
		$this->config     = PMFormHelper::getConfig();

		parent::display();
	}
}