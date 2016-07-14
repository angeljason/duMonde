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

class PMFormModelCoupons extends POSFModelList
{
	/**
	 * Constructor
	 *
	 */
	function __construct($config = array())
	{
		$config['search_fields'] = 'tbl.code';
		parent::__construct($config);
	}
}