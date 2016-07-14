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

class PMFormTableFieldvalue extends JTable
{

	/**
	 * Constructor
	 *
	 * @param object Database connector object
	 *
	 */
	function __construct($db)
	{
		parent::__construct('#__pf_field_value', 'id', $db);
	}
}