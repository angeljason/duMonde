<?php
/**
 * @version        4.2
 * @package        Joomla
 * @subpackage     Payment Form
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2010 - 2015 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */
defined('_JEXEC') or die();

class PMFormViewFieldRaw extends POSFViewHtml
{

	function display()
	{
		$this->setLayout('options');
		$db      = JFactory::getDbo();
		$query   = $db->getQuery(true);
		$fieldId = $this->input->getInt('field_id');
		$query->select('`values`')
			->from('#__pf_fields')
			->where('id=' . $fieldId);
		$db->setQuery($query);
		$options       = explode("\r\n", $db->loadResult());
		$this->options = $options;
		parent::display();
	}
}