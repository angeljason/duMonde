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

class PMFormModelPayment extends POSFModelAdmin
{
	/**
	 * Method to store a donor
	 *
	 * @access    public
	 * @return    boolean    True on success
	 * @since     3.5
	 */
	function store($input, $ignore = array())
	{
		$config        = PMFormHelper::getConfig();
		$paymentMethod = $input->get('payment_method', 'os_offline');
		$row           = $this->getTable();
		$data          = $input->getData();
		if (strpos($row->$paymentMethod, 'os_offline') !== false)
		{
			//Need to set published = 1 so that the record will be showed
			$data['published'] = 1;
		}
		$published = true;
		if ($data['id'])
		{
			$row->load($data['id']);
			$published = $row->published;
		}
		$row->bind($data, $ignore);
		if (!$row->store())
		{
			throw new Exception($row->getError());

			return false;
		}

		PMFormHelper::storeFormData($input->getInt('id'), $data);

		if (!$published && $row->published)
		{
			// Trigger plugin
			JPluginHelper::importPlugin( 'pmform' );
			$dispatcher = JDispatcher::getInstance();
			$dispatcher->trigger( 'onAfterPaymentSuccess', array($row));
			//Send email to user to inform about changing payment status
			PMFormHelper::sendPaymentApprovedEmails($row, $config);
		}
	}

	protected function initData()
	{
		parent::initData();
		$this->data->created_date   = gmdate('Y-m-d');
		$this->data->payment_date   = gmdate('Y-m-d');
		$this->data->payment_method = 'os_offline';
		$this->data->published      = 1;
	}

	/**
	 * Publish donors
	 *
	 * @param array $cid
	 * @param int   $state
	 */
	function publish($cid, $state = 1)
	{
		$db    = $this->getDbo();
		$query = $db->getQuery(true);
		$query->update('#__pf_payments')
			->set('published = ' . (int) $state)
			->where('id IN (' . implode(',', $cid) . ')');
		if ($state == 0)
		{
			$query->where('payment_method LIKE "os_offline%"');
		}
		$db->setQuery($query);
		$db->execute();

		return true;
	}
}