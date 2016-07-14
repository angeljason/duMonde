<?php
// Check to ensure this file is included in Joomla!
defined('_JEXEC') or die;

/**
 * Payment Form Plugin
 *
 * @package        Joomla
 * @subpackage     Content
 * @since          1.5
 */
class plgContentPmForm extends JPlugin
{
	function onContentPrepare($context, &$article, &$params, $limitstart)
	{
		$app = JFactory::getApplication();
		if ($app->getName() != 'site')
		{
			return;
		}
		if (strpos($article->text, 'pmform') === false)
		{
			return true;
		}
		$regex         = "#{pmform (\d+)}#s";
		$article->text = preg_replace_callback($regex, array(&$this, '_replacePaymentForm'), $article->text);

		return true;
	}

	/**
	 * Replace callback function
	 *
	 * @param array $matches
	 */
	function _replacePaymentForm($matches)
	{
		error_reporting(0);
		$formId = $matches[1] ;
		include JPATH_ADMINISTRATOR . '/components/com_pmform/config.php';
		require_once JPATH_ADMINISTRATOR.'/components/com_pmform/loader.php';
		PMFormHelper::loadLanguage();
		$request = array('view' => 'form', 'form_id' => $formId, 'content_plugin' => 1, 'Itemid' => PMFormHelper::getItemid());
		$input = new POSFInput($request);
		ob_start();
		//Execute the controller
		POSFController::getInstance('com_pmform', $input, $pmFormConfig)->execute();
		return ob_get_clean();
	}
}