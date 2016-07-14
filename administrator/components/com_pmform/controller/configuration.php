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

class PMFormControllerConfiguration extends PMFormController
{

	public function save()
	{
		$model = $this->getModel('Configuration', array('ignore_request' => true));
		$model->store($this->input->getData());

		$this->setRedirect('index.php?option=com_pmform&view=configuration', JText::_('Configuration data was successfully saved'));
	}

	public function cancel()
	{
		$this->setRedirect('index.php?option=com_pmform&view=' . $this->defaultView);
	}
} 