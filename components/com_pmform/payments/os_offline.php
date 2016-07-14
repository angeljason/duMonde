<?php
/**
 * @version		3.0
 * @package		Joomla
 * @subpackage	Payment Form
 * @author  Tuan Pham Ngoc
 * @copyright	Copyright (C) 2010 Ossolution Team
 * @license		GNU/GPL, see LICENSE.php
 */
defined('_JEXEC') or die ;

class os_offline extends os_payment {	
	/**
	 * Constructor functions, init some parameter
	 *
	 * @param object $params
	 */
	function os_offline($params) {
		parent::setName('os_offline');		
		parent::os_payment();				
		parent::setCreditCard(false);		
    	parent::setCardType(false);
    	parent::setCardCvv(false);
    	parent::setCardHolderName(false);		
	}	
	/**
	 * Process payment 
	 *
	 */
	function processPayment($row, $data) {
		$mainframe = JFactory::getApplication() ;
    	$Itemid    = JRequest::getInt('Itemid', 0);
		$config = PMFormHelper::getConfig() ;
		PMFormHelper::sendEmails($row, $config);
		$url = JRoute::_('index.php?option=com_pmform&view=complete&id='.$row->id.'&Itemid='.$Itemid, false);
		$mainframe->redirect($url);				    
	}		
}