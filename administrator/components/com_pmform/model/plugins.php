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

class PMFormModelPlugins extends POSFModelList
{
	/**
	 * Constructor
	 *
	 * @since 1.5
	 */
	function __construct($config = array())
	{
		$config['table'] = '#__pf_payment_plugins';
		parent::__construct($config);
	}
}