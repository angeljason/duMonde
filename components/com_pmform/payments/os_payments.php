<?php
/**
 * @version        3.0
 * @package        Joomla
 * @subpackage     Payment Form
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2010 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */
defined('_JEXEC') or die;

class os_payments
{
	/**
	 * Get list of payment methods
	 *
	 * @return array
	 */
	public static function getPaymentMethods($paymentMethods = null)
	{
		static $methods;
		if (!$methods)
		{
			$db = JFactory::getDbo();
			$query = $db->getQuery(true);
			$query->select('*')
				->from('#__pf_payment_plugins')
				->where('published = 1');
			if ($paymentMethods)
			{
				$query->where('id IN ('.$paymentMethods.')');
			}
			$query->order('ordering');
			$db->setQuery($query);
			$rows = $db->loadObjectList();
			foreach ($rows as $row)
			{
				require_once JPATH_ROOT . '/components/com_pmform/payments/' . $row->name . '.php';
				$params        = new JRegistry($row->params);
				$method = new $row->name($params);
				$method->setTitle($row->title);
				if ($params->get('payment_fee_amount') > 0 || $params->get('payment_fee_percent'))
				{
					$method->paymentFee = true;
				}
				$methods[] = $method;
			}
		}

		return $methods;
	}

	/**
	 * Write the javascript objects to show the page
	 *
	 * @return string
	 */
	public static function writeJavascriptObjects()
	{
		$methods  = os_payments::getPaymentMethods();
		$jsString = " methods = new PaymentMethods();\n";
		if (count($methods))
		{
			foreach ($methods as $method)
			{
				$jsString .= " method = new PaymentMethod('" . $method->getName() . "'," . $method->getCreditCard() . "," . $method->getCardType() . "," . $method->getCardCvv() . "," . $method->getCardHolderName() . ");\n";
				$jsString .= " methods.Add(method);\n";
			}
		}
		echo $jsString;
	}

	/**
	 * Load information about the payment method
	 *
	 * @param string $name Name of the payment method
	 */
	public static function loadPaymentMethod($name)
	{
		$db  = JFactory::getDbo();
		$query = $db->getQuery(true);
		$query->select('*')
			->from('#__pf_payment_plugins')
			->where('name = '.$db->quote($name));
		$db->setQuery($query);

		return $db->loadObject();
	}

	/**
	 * Get default payment gateway
	 *
	 * @return string
	 */
	public static function getDefaultPaymentMethod($paymentMethods = null)
	{
		$db  = JFactory::getDbo();
		$query = $db->getQuery(true);
		$query->select('name')
			->from('#__pf_payment_plugins')
			->where('published = 1');
		if ($paymentMethods)
		{
			$query->where('id IN ('.$paymentMethods.')');
		}
		$query->order('ordering');
		$db->setQuery($query);

		return $db->loadResult();
	}

	/**
	 * Get the payment method object based on it's name
	 *
	 * @param string $name
	 *
	 * @return object
	 */
	public static function getPaymentMethod($name)
	{
		$methods = self::getPaymentMethods();
		foreach ($methods as $method)
		{
			if ($method->getName() == $name)
			{
				return $method;
			}
		}

		return null;
	}
}

?>