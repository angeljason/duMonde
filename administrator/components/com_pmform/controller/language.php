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

class PMFormControllerLanguage extends PMFormController
{

	public function save()
	{
		$data  = $this->input->getData();
		$model = $this->getModel();
		$model->save($data);
		$this->setRedirect('index.php?option=com_pmform&view=language', JText::_('Language items were successfully updated'));
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