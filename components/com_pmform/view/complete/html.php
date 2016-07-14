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

class PmFormViewCompleteHtml extends POSFViewHtml
{
    public $hasModel = false;

	public function display()
	{
		$id = (int) JFactory::getSession()->get('pmf_payment_id', 0);
        $row = JTable::getInstance('Payment', 'PmFormTable') ;
        $row->load($id);
		if ($row->id)
        {
            $config = PMFormHelper::getConfig();
	        if (strpos($row->payment_method, 'os_offline') !== false)
            {
	            $prefix = str_replace('os_offline', '', $row->payment_method);
	            if ($prefix && !empty($config->{'thanks_message_offline'.$prefix}))
	            {
		            $message = $config->{'thanks_message_offline'.$prefix};
	            }
	            else
	            {
		            $message = $config->thanks_message_offline;
	            }
            }
            else
            {
	            $db =  JFactory::getDbo();
	            $query = $db->getQuery(true);
	            $query->select('thanks_message')
		            ->from('#__pf_forms AS a')
		            ->innerJoin('#__pf_payments AS b ON a.id = b.form_id')
		            ->where('b.id='.(int)$row->id);
	            $db->setQuery($query);
                $thanksMessage = $db->loadResult();
                if (strlen(trim(strip_tags($thanksMessage))))
                {
                    $message = $thanksMessage;
                }
                else
                {
                    $message = $config->thanks_message;
                }
            }
            $replaces = PMFormHelper::buildReplaceTags($row, $config);
            foreach ($replaces as $key=>$value)
            {
                $key = strtoupper($key) ;
                $message = str_replace("[$key]", $value, $message) ;
            }
            $this->message = $message;
	        $this->setLayout('default');

            parent::display();
		}
        else
        {
            $app = JFactory::getApplication();
            $app->enqueueMessage(JText::_('Invalid Payment Record ID'), 'warning');
            $app->redirect('index.php');
        }
	}
}