<?php
// no direct access
defined('_JEXEC') or die('Restricted access');

class JoomdleusercheckHelper
{
	public static function check_user ($user, $isnew, $data)
	{
        if ($data['username'] == '')
            return true;

        // Check that username is valid for Moodle
        if (!JoomdleusercheckHelper::check_username ($data['username']))
        {
            // Username not valid in Moodle
            return false;
        }

        if ((!$isnew) && ($user['username'] == $data['username']) && ($user['email'] == $data['email']))
            return true;

        $mainframe = JFactory::getApplication('site');

        $username = $data['username'];
        $moodle_user = JoomdleHelperContent::call_method ("user_id", $username);

        /* If username does not exist in Moodle, check email */
        if (!$moodle_user)
        {
                $users = JoomdleHelperContent::call_method ('get_moodle_only_users', array (), $data['email']);
                foreach ($users as $u)
                {
                    if ($u['email'] == $data['email'])
                    {
                        // Email is the same as user in Moodle
                        throw new RuntimeException(JText::_('COM_JOOMDLE_USERNAME_INUSE_IN_MOODLE'));
                        return false;
                    }
                }
                return true;
        }
        else
        {
            // Moodle user exists
            if ($isnew)
            {
                // New user in Joomla
                // Username already in use in Moodle
                throw new RuntimeException(JText::_('COM_JOOMDLE_USERNAME_INUSE_IN_MOODLE'));
                return false;
            }
            else
            {
                // Modify User in Joomla
                // Check email in Moodle
                $users = JoomdleHelperContent::call_method ('get_moodle_only_users', array (), $data['email']);
                foreach ($users as $u)
                {
                    if ($u['email'] == $data['email'])
                    {
                        // Email is the same as user in Moodle
                        throw new RuntimeException(JText::_('COM_JOOMDLE_USERNAME_INUSE_IN_MOODLE'));
                        return false;
                    }
                }
            }
        }

        return true;
	}

	// Checks if username has valid format for Moodle
    public static function check_username ($username)
    {
        // No spaces
        if (strstr ($username, ' '))
        {
            throw new RuntimeException(JText::_('COM_JOOMDLE_USERNAME_CANNOT_CONTAIN_SPACES'));
            return false;
        }

        // No uppercase
        $clean_username = strtolower ($username);
        if (strcmp ($clean_username, $username) != 0)
        {
            throw new RuntimeException(JText::_('COM_JOOMDLE_USERNAME_MUST_BE_LOWERCASE'));
            return false;
        }

		$plugin = JPluginHelper::getPlugin('user', 'joomdleusercheck');
		$params = new JRegistry($plugin->params);
		$extendedusernamechars =  $params->get('extendedusernamechars');
        if (!$extendedusernamechars)
        {
            $clean_username = preg_replace('/[^-\.@_a-z0-9]/', '', $username);

            if ($clean_username != $username)
            {
                throw new RuntimeException(JText::_('COM_JOOMDLE_INVALID_USERNAME'));
                return false;
            }
        }


        return true;
    }

}
