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

class PMFormControllerMassmail extends PMFormController
{

	public function send()
	{
		$data  = $this->input->getData();
		$model = $this->getModel();
		$model->save($data);
		$this->setRedirect('index.php?option=com_pmform&view=massmail', JText::_('Mails were successfully sent'));
	}

	/**
	 * Cancel editing translation, redirect to dashboard page
	 *
	 */
	public function cancel()
	{
		$this->setRedirect('index.php?option=com_pmform&view=' . $this->defaultView);
	}
}