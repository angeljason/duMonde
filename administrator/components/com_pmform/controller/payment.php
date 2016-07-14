<?php
/**
 * @version		3.5
 * @package		Joomla
 * @subpackage	Payment Form
 * @author  Tuan Pham Ngoc
 * @copyright	Copyright (C) 2010 - 2015 Ossolution Team
 * @license		GNU/GPL, see LICENSE.php
 */
// Check to ensure this file is included in Joomla!
defined('_JEXEC') or die ;

class PMFormControllerPayment extends PMFormController
{

	public function export()
	{
		$config = PMFormHelper::getConfig();
		$formId = $this->input->getInt('filter_form_id', 0);
		$model = $this->getModel('payments', array('remember_states' => false));
		$rows = $model->limitstart(0)
			->filter_form_id($formId)
			->limit(0)
			->filter_order('tbl.payment_date')
			->filter_order_Dir('ASC')
			->getData();
		if (count($rows))
		{
			$db = JFactory::getDbo();
			$query = $db->getQuery(true);
			if ($formId)
			{
				$rowFields = PMFormHelper::getFormFields($formId);
			}
			else
			{
				$query->select('*')
					->from('#__pf_fields')
					->where('published=1')
					->order('ordering');
				$db->setQuery($query);
				$rowFields = $db->loadObjectList();
			}
			$fieldValues = array();
			$paymentIds = array();
			foreach ($rows as $row)
			{
				$paymentIds[] = $row->id;
			}
			$query->clear();
			$query->select('payment_id, field_id, field_value')
				->from('#__pf_field_value')
				->where('payment_id IN (' . implode(',', $paymentIds) . ')');
			$db->setQuery($query);
			$rowFieldValues = $db->loadObjectList();
			for ($i = 0, $n = count($rowFieldValues); $i < $n; $i++)
			{
				$rowFieldValue = $rowFieldValues[$i];
				$fieldValues[$rowFieldValue->payment_id][$rowFieldValue->field_id] = $rowFieldValue->field_value;
			}
			PMFormHelper::csvExport($rows, $config, $rowFields, $fieldValues);
		}
		else
		{
			echo JText::_('There are no payment records to export');
		}
	}


	/**
	 * Download invoice of a payment record
	 */
	public function download_invoice()
	{
		$id = $this->input->getInt('id');
		if ($id > 0)
		{
			PMFormHelper::downloadInvoice($id);
		}
	}
} 