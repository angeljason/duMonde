<?php
/**
* @version      1.0.2
* @package      plg_user_joomdleusercheck
* @copyright    Qontori Pte Ltd
* @license      http://www.gnu.org/licenses/gpl-3.0.html GNU/GPL
*/

// no direct access
defined( '_JEXEC' ) or die( 'Restricted access' );
require_once(JPATH_SITE . '/components/com_joomdle/helpers/content.php');
require_once(JPATH_SITE . '/plugins/user/joomdleusercheck/helper.php');

class plgUserJoomdleusercheck extends JPlugin
{
	protected $autoloadLanguage = true;

	function plgUserJoomdleusercheck(& $subject, $config) {
                parent::__construct($subject, $config);
        }

	function onUserBeforeSave ($user, $isnew, $data)
	{
		// Don't run on Joomdle user view and web service url, so we can sync users
		if ((JRequest::getString('option') == 'com_joomdle') && ((JRequest::getString('view') == 'users') || (JRequest::getString('task') == 'server')))
			return true;

		return JoomdleusercheckHelper::check_user ($user, $isnew, $data);
	}


}

?>
