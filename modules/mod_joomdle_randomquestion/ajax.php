<?php
// Set flag that this is a parent file
define('_JEXEC', 1);


define('JPATH_BASE', dirname(__FILE__).'/../..' );

require_once ( JPATH_BASE .'/includes/defines.php' );
require_once ( JPATH_BASE .'/includes/framework.php' );

jimport('joomla.application.module.helper');
jimport('joomla.language.language');


$mainframe = JFactory::getApplication('site');
$mainframe->initialise();

// Include the whosonline functions only once
require_once (dirname(__FILE__).'/helper.php');
require_once(JPATH_ADMINISTRATOR.'/components/com_joomdle/helpers/content.php');

$lang = JFactory::getLanguage();

$cat_id = JRequest::getVar ('category');
$used_ids = JRequest::getVar ('used_ids');
$max_questions = JRequest::getVar ('max_questions');
$n_correct = JRequest::getVar ('n_correct');
$module_id = JRequest::getVar ('module_id');

// Load selected language file
$lang_tag = JRequest::getVar ('langtag');
$extension = 'mod_joomdle_randomquestion';
$base_dir = JPATH_SITE;
$reload = true;
$lang->load($extension, $base_dir, $lang_tag, $reload);

$ids_array = explode (',', $used_ids);
$n_questions = count ($ids_array);
if ($n_questions > ($max_questions - 1))
{
	require(JModuleHelper::getLayoutPath('mod_joomdle_randomquestion', 'default_results'));
	$mainframe->close();
}

$question = JoomdleHelperContent::call_method ('quiz_get_random_question',(int) $cat_id, (string) $used_ids);

$used_ids .= ','.$question['id'];

$answers = $question['answers'];
foreach ($answers as $answer)
{
	if ($answer['fraction'] == 1)
	{
		$correct_answer = $answer;
		break;
	}
}

$jdoc = JFactory::getDocument();
$jdoc->addStyleSheet(JURI::root ().'modules/mod_joomdle_randomquestion/css/style.css');

require(JModuleHelper::getLayoutPath('mod_joomdle_randomquestion'));
$mainframe->close();

?>
