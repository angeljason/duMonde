<?php
/**
* @version		1.0.2 
* @package		Joomdle Hikashop Profile
* @copyright	Qontori Pte Ltd
* @license		http://www.gnu.org/licenses/gpl-3.0.html GNU/GPL
*/

// no direct access
defined( '_JEXEC' ) or die( 'Restricted access' );

jimport( 'joomla.plugin.plugin' );

class  plgJoomdleprofileJoomdlehikashopprofile extends JPlugin
{
	private $additional_data_source = 'hikashop';

	function integration_enabled ()
    {
        // Don't run if not configured in Joomdle
        $params = JComponentHelper::getParams( 'com_joomdle' );
        $additional_data_source = $params->get( 'additional_data_source' );
        return  ($additional_data_source == $this->additional_data_source);
    }

    // Joomdle events
    public function onGetAdditionalDataSource ()
    {
        $option['hikashop'] = "Hikashop";

        return $option;
    }

	public function onJoomdleGetFields ()
	{
		if (!$this->integration_enabled ())
			return array ();

        $fields = array ();

		$db           = JFactory::getDBO();
        $query = "DESC ".
            ' #__hikashop_address' ;

		$db->setQuery($query);
		$field_objects = $db->loadObjectList();

        $fields = array ();
        $i = 0;
        foreach ($field_objects as $fo)
        {
            $fields[$i] = new JObject ();
            $fields[$i]->name =  $fo->Field;
            $fields[$i]->id =  $fo->Field;
            $i++;
        }


        return $fields;
	}

	function onJoomdleGetFieldName ($field)
	{
		if (!$this->integration_enabled ())
			return false;

		return $field;
	}

	function onJoomdleGetUserInfo ($username)
    {
		if (!$this->integration_enabled ())
			return array ();

        $db = JFactory::getDBO();

        $id = JUserHelper::getUserId($username);
        $user = JFactory::getUser($id);

        $user_info['firstname'] = JoomdleHelperMappings::get_firstname ($user->name);
        $user_info['lastname'] = JoomdleHelperMappings::get_lastname ($user->name);

        $mappings = JoomdleHelperMappings::get_app_mappings ('hikashop');

        if (is_array ($mappings))
        foreach ($mappings as $mapping)
        {
            $value = $this->get_field_value ($mapping->joomla_field, $user->id);
            if ($value) //  Only overwrite if there is something
                $user_info[$mapping->moodle_field] = $value;
        }

        return $user_info;
    }

    function get_field_value ($field, $user_id)
    {
        $db           = JFactory::getDBO();
        $query = "SELECT user_id " .
            ' FROM #__hikashop_user' .
		  " WHERE  user_cms_id = " . $db->Quote($user_id);
        $db->setQuery($query);
        $hikashop_user_id = $db->loadResult();

        $query = "SELECT $field " .
            ' FROM #__hikashop_address' .
                              " WHERE  address_user_id = " . $db->Quote($hikashop_user_id);
        $db->setQuery($query);
        $value = $db->loadResult();

        /* Check if data needs transformation */
        switch ($field)
        {
            case 'address_country':
                $value = $this->get_moodle_country_from_extension ($value);
                break;
            default:
                break;
        }

        return $value;
    }

    function get_moodle_country_from_extension ($zone_key)
    {
        $db           = JFactory::getDBO();
        $query = "SELECT zone_code_2 " .
            ' FROM #__hikashop_zone' .
			  " WHERE  zone_namekey = " . $db->Quote($zone_key);
        $db->setQuery($query);
        $code = $db->loadResult();

        return $code;
    }


	function onJoomdleCreateAdditionalProfile ($user_info)
	{
		if (!$this->integration_enabled ())
			return false;

        $username = $user_info['username'];
        $id = JUserHelper::getUserId($username);

        if (!$id)
            return; // user not found, should not happen
        $user_id = $id;

        $db = JFactory::getDBO();

        $query = 'SELECT user_id' .
                ' FROM #__hikashop_user' .
                " WHERE user_cms_id = '$id'";
        $db->setQuery( $query );
        $id = $db->loadResult();

        if (!$id)
        {
            // Create row
            $fields->user_cms_id = $user_id;

            $db->insertObject ('#__hikashop_user', $fields);
            $h_user_id = $db->insertid();
        }
        else $h_user_id = $id;

        $query = 'SELECT address_user_id' .
                ' FROM #__hikashop_address' .
                " WHERE address_user_id = '$h_user_id'";
        $db->setQuery( $query );
        $id = $db->loadResult();

        if ($id)
            return; // user row found, nothing to do

        $fields2 = new JObject ();
        $fields2->address_user_id = $h_user_id;
        $db->insertObject ('#__hikashop_address', $fields2);
	}

	function onJoomdleSaveUserInfo ($user_info, $use_utf8_decode = true)
    {
		if (!$this->integration_enabled ())
			return false;

        $db = JFactory::getDBO();

        $username = $user_info['username'];
        $id = JUserHelper::getUserId($username);
        $user = JFactory::getUser($id);

        $mappings = JoomdleHelperMappings::get_app_mappings ('hikashop');

        foreach ($mappings as $mapping)
        {
            $additional_info[$mapping->joomla_field] = $user_info[$mapping->moodle_field];
            // Custom moodle fields
            if (strncmp ($mapping->moodle_field, 'cf_', 3) == 0)
            {
                $data = JoomdleHelperMappings::get_moodle_custom_field_value ($user_info, $mapping->moodle_field);
                $this->set_field_value ($mapping->joomla_field, $data, $id);
            }
            else
            {
                if ($use_utf8_decode)
                    $this->set_field_value_hikashop ($mapping->joomla_field, utf8_decode ($user_info[$mapping->moodle_field]), $id);
                else
                    $this->set_field_value_hikashop ($mapping->joomla_field,  ($user_info[$mapping->moodle_field]), $id);
            }
        }


        return $additional_info;
    }

    function set_field_value ($field, $value, $user_id)
    {
        $db           = JFactory::getDBO();

        switch ($field)
        {
            case 'address_country':
                $value = $this->get_extension_country_from_moodle ($value);
                break;
            default:
                break;
        }

        $db           = JFactory::getDBO();
        $query = "SELECT user_id " .
            ' FROM #__hikashop_user' .
                              " WHERE  user_cms_id = " . $db->Quote($user_id);
        $db->setQuery($query);
        $hikashop_user_id = $db->loadResult();

        $query =
            ' UPDATE #__hikashop_address' .
            ' SET '. $field.'='. $db->Quote($value) .
                  " WHERE address_user_id = " . $db->Quote($hikashop_user_id);

        $db->setQuery($query);
        $db->query();

        return true;
    }

    function get_extension_country_from_moodle ($code)
    {
        $db           = JFactory::getDBO();
        $query = "SELECT zone_namekey " .
            ' FROM #__hikashop_zone' .
                              " WHERE  zone_code_2 = " . $db->Quote($code);
        $db->setQuery($query);
        $value = $db->loadResult();

        return $value;
    }


	// Admin profile URL
	function onJoomdleGetProfileUrl ($user_id)
	{
		if (!$this->integration_enabled ())
			return false;

        $db           = JFactory::getDBO();
        $query = "SELECT user_id " .
            ' FROM #__hikashop_user' .
		  " WHERE  user_cms_id = " . $db->Quote($user_id);
        $db->setQuery($query);
        $hikashop_user_id = $db->loadResult();

		$url = "index.php?option=com_hikashop&ctrl=user&task=edit&cid[]=".$hikashop_user_id;

		return $url;
	}

	function getJoomdleLoginUrl ($return)
	{
		if (!$this->integration_enabled ())
			return false;

		$url = "index.php?option=com_users&view=login&return=$return";

		return $url;
	}

}
