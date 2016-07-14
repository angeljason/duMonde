<?php 


class plgHikashopBraintreeUser {

	var $custidfieldname = 'custidtoken';
	var $pymtfieldname = 'custpmttoken';
	
	function getToken($fieldname, $uid) {
		$db = JFactory::getDBO();
		$query = $db->getQuery(true);
		$query->select('*')
			->from('information_schema.COLUMNS')
			->where($db->quoteName('TABLE_NAME') . " = #__hikashop_user AND ". $db->quoteName('COLUMN_NAME') . " = $fieldname");
		$db->setQuery($query);
		try {
			$existsColumn = $db->getAffectedRows();
			$query2 = $db->getQuery(true);
			$query2->select($db->quoteName($fieldname))
				->from('#__hikashop_user')
				->where($db->quoteName('id') . " = $uid");
			$db->setQuery($query2);
			try {
				$tokvalue = $db->loadObjectList();
				$tokcount = $db->getAffectedRows();
			}
			catch (Exception $e) {
				$tokvalue = false;
				$tokcount = false;
			}
		}
		catch (Exception $e) {
			$existsColumn = false;
		}
		//echo "Custom variable $fieldname exists? " . ($existsColumn ? "true" : "false") . "<br />";
		//echo "Custom variable $fieldname value: " . $tokvalue . "<br />";
		return ($existsColumn && ($tokcount == 1)) ? $tokvalue : false;
	}
	
	function setToken ($fieldname, $uid, $tval) {
		$db = JFactory::getDBO();
		$query = $db->getQuery(true);
		$fields = array(
			$db->quoteName($fieldname) . ' = ' . $tval);
		$query->update('#__hikashop_user')->set($fields)->where($db->quoteName('id') . ' = ' . $db->quote($uid));
		$db->setQuery($query);
		$result = $db->getAffectedRows();
		//echo "Set $fieldname to $tval ?" . ($result ? "true" : "false") . "<br />";
		return ($result) ? $result : false;
	}
	
}
?>