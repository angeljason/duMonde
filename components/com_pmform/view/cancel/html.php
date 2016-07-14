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

class PMFormViewCancelHtml extends POSFViewHtml
{
    /**
     * Indicate that this view doesn't have a model, so controller don't need to create it.
     *
     * @var bool
     */
    public $hasModel = false;

    /**
     * Display the view
     */
    function display()
	{
		$config = PMFormHelper::getConfig();
		$db = JFactory::getDbo();
		$query = $db->getQuery(true);
		$id = $this->input->getInt('id', 0);
		$query->select('cancel_message')
			->from('#__pf_forms AS a')
			->innerJoin('#__pf_payments AS b ON a.id = b.form_id')
			->where('b.id = '. $id);
		$db->setQuery($query);
		$cancelMessage = $db->loadResult();
		if ($cancelMessage)
		{
			$this->message = $cancelMessage;
		}
		else
		{
			$this->message = $config->cancel_message;
		}

		$this->setLayout('default');
		parent::display();
	}
}