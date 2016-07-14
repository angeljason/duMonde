<?php
/**
 * @version		3.5
 * @package		Joomla
 * @subpackage	Payment Form
 * @author  Tuan Pham Ngoc
 * @copyright	Copyright (C) 2010 - 2015 Ossolution Team
 * @license		GNU/GPL, see LICENSE.php
 */
// no direct access
defined('_JEXEC') or die ;

class JFormFieldPfCurrency extends JFormField
{
	/**
	 * Element name
	 *
	 * @access	protected
	 * @var		string
	 */
	var	$_name = 'pfcurrency';
	
	function getInput()
	{
		$db = JFactory::getDbo() ;
		$sql = "SELECT currency_code, currency_name  FROM #__pf_currencies ORDER BY currency_name ";			
		$db->setQuery($sql);								
		$options 	= array();
		$options[] 	= JHtml::_('select.option',  '', JText::_( 'Select Currency' ), 'currency_code', 'currency_name');
		$options = array_merge($options, $db->loadObjectList()) ;
		return JHtml::_('select.genericlist', $options, $this->name, ' class="inputbox" ', 'currency_code', 'currency_name', $this->value) ;
	}		
}
