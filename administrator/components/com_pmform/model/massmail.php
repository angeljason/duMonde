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

class PMFormModelMassmail extends POSFModel
{
	/*
	**
	* Instantiate the model.
	*
	* @param   array	$config	The configuration data for the model
	*
	*/
	public function __construct($config)
	{
		parent::__construct($config);
		$this->state->insert('filter_form_id', 'int', 0);
	}

	/**
	 * Send email to all payments of form
	 *
	 * @param array $data
	 */
	function send($data)
	{
		if ($data['form_id'] >= 1)
		{
			$mailer = JFactory::getMailer();
			$config = PmformHelper::getConfig();
			$db     = JFactory::getDbo();
			if ($config->from_name)
			{
				$fromName = $config->from_name;
			}
			else
			{
				$fromName = JFactory::getConfig()->get('fromname');
			}
			if ($config->from_email)
			{
				$fromEmail = $config->from_email;
			}
			else
			{
				$fromEmail = JFactory::getConfig()->get('mailfrom');
			}
			//Get list of payments form
			$sql = 'SELECT first_name, last_name, email, amount FROM #__pf_payments WHERE form_id=' . $data['filter_form_id'] . ' AND (published=1 OR payment_method LIKE "os_offline%") ';
			$db->setQuery($sql);
			$rows    = $db->loadObjectList();
			$subject = $data['subject'];
			$body    = $data['description'];
			if (count($rows))
			{
				foreach ($rows as $row)
				{
					$message = $body;
					$email   = $row->email;
					$message = str_replace("[FIRST_NAME]", $row->first_name, $message);
					$message = str_replace("[LAST_NAME]", $row->last_name, $message);
					$message = str_replace("[AMOUNT]", PMFormHelper::formatAmount($row->amount, $config), $message);
					$mailer->sendMail($fromEmail, $fromName, $email, $subject, $message, 1);
					$mailer->ClearAllRecipients();
				}
			}
		}

		return true;
	}
}