<?php
/**
 * @version        4.2
 * @package        Joomla
 * @subpackage     Payment Form
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2012 - 2015 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */
defined('_JEXEC') or die;

class plgPmformAccount extends JPlugin
{

	/**
	 * Create account for user after payment success
	 *
	 * @param $row
	 *
	 * @return bool
	 */
	public function onAfterPaymentSuccess($row)
	{
		if (!$row->user_id && $row->username && $row->user_password)
		{
			//Need to create the account here
			$data['name'] = trim($row->first_name . ' ' . $row->last_name);
			//Decrypt the password
			$data['username'] = $row->username;
			//Password
			$privateKey       = md5(JFactory::getConfig()->get('secret'));
			$key              = new JCryptKey('simple', $privateKey, $privateKey);
			$crypt            = new JCrypt(new JCryptCipherSimple, $key);
			$data['password'] = $data['password2'] = $data['password'] = $crypt->decrypt($row->user_password);
			$data['email1']   = $data['email2'] = $data['email'] = $row->email;
			$params           = JComponentHelper::getParams('com_users');
			$data['groups']   = array();
			$data['groups'][] = $params->get('new_usertype', 2);
			$user             = new JUser();
			if (!$user->bind($data))
			{
				return false;
			}
			// Store the data.
			if (!$user->save())
			{
				return false;
			}
			$row->user_id = $user->get('id');
			$row->store();
		}
	}
}	