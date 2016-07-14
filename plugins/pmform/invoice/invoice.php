<?php
/**
 * @version		1.6.5
 * @package		Joomla
 * @subpackage	Events Booking
 * @author  Tuan Pham Ngoc
 * @copyright	Copyright (C) 2012 Ossolution Team
 * @license		GNU/GPL, see LICENSE.php
 */
defined('_JEXEC') or die();

/**
 * Events Booking invoice plugin
 *
 * @package		Joomla
 * @subpackage	Events Booking
 */
class plgPmformInvoice extends JPlugin
{

	/**
	 * Run when customer complete making payment for a payment record
	 * @param $row
	 *
	 * @return bool
	 */
	function onAfterPaymentSuccess($row)
	{
		if (!$row->invoice_number)
		{
			$this->_processInvoiceNumber($row);
		}

		return true;
	}

	/**
	 * Run after payment record stored in database
	 *
	 * @param $row
	 */
	function onAfterStorePayment($row)
	{
		if ((strpos($row->payment_method, 'os_offline') !== false) && !$row->invoice_number)
		{
			$this->_processInvoiceNumber($row);
		}
	}


	private function _processInvoiceNumber($row)
	{
		if (PMFormHelper::needInvoice($row))
		{
			$invoiceNumber = PMFormHelper::getInvoiceNumber();
			$row->invoice_number = $invoiceNumber;
			$row->store();
		}
	}
}
