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

class PMFormControllerField extends PMFormController
{

	public function __construct(POSFInput $input = null, array $config = array())
	{
		parent::__construct($input, $config);
		
		$this->registerTask('un_required', 'required');
	}

	/**
     * Require the selected fields
     *
     */
	function required()
	{
		$cid = $this->input->get('cid', array(), 'array');
		JArrayHelper::toInteger($cid);
		$task = $this->getTask();
		if ($task == 'required')
		{
			$state = 1;
		}
		else
		{
			$state = 0;
		}
		$model = $this->getModel();
		$model->required($cid, $state);
		$msg = JText::_('Field required status was successfully updated');
		$this->setRedirect(JRoute::_('index.php?option=com_pmform&view=fields', false), $msg);
	}
}