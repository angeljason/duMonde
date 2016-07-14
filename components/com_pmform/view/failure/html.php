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
defined('_JEXEC') or die ;

class PmFormViewFailureHtml extends POSFViewHtml
{
    /**
     * Indicate that this view doesn't have a model, so controller don't need to create it.
     *
     * @var bool
     */
    public $hasModel = false;

    /**
     * Method to display the view
     *
     */
    function display()
	{
		$db = JFactory::getDbo();
		$query = $db->getQuery(true);
		$id =  $this->input->getInt('id', 0);
		$query->select('form_id')
			->from('#__pf_payments')
			->where('id=' . $id);
		$db->setQuery($query);
		$formId = (int) $db->loadResult();
		$config = PMFormHelper::getConfig() ;
		$link = 'index.php?option=com_pmform&view=form&form_id='.$formId.'&Itemid='.$this->Itemid;
		$reason =  $this->input->getString('reason', '');
		if (!$reason)
		{
			$reason = $_SESSION['reason'] ;
		}
		$this->reason = $reason;
		$this->config = $config;
		$this->link = $link;
		$this->setLayout('default');

		parent::display();
	}
}