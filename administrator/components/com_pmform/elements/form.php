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

class JFormFieldForm extends JFormField
{
	/**
	 * Element name
	 *
	 * @access	protected
	 * @var		string
	 */
	var	$_name = 'Form';

	function getInput()
	{
		$db = JFactory::getDbo() ;
		$options = array() ;
		$options[] = JHtml::_('select.option', 0, JText::_('Select Form'), 'id', 'title') ;
		$sql = 'SELECT id , title FROM #__pf_forms WHERE published=1 ORDER BY title';
		$db->setQuery($sql);
		$options = array_merge($options, $db->loadObjectList());
		return JHtml::_('select.genericlist', $options, $this->name, ' class="inputbox" ', 'id', 'title', $this->value) ;
	}
}