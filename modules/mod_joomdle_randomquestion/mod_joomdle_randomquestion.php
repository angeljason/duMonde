<?php
/**
* @version		1.1.0
* @package		Joomdle - Mod Display Random Moodle Questions
* @copyright	Qontori Pte Ltd
* @license		http://www.gnu.org/licenses/gpl-3.0.html GNU/GPL
*/


// no direct access
defined('_JEXEC') or die('Restricted access');

require_once(JPATH_ADMINISTRATOR.'/components/com_joomdle/helpers/content.php');

//echo "<pre>";
//print_r ($module);
$cat_id = $params->get('category');

if (!$cat_id)
    return;

$module_id = $module->id;

$question = JoomdleHelperContent::call_method ('quiz_get_random_question',(int) $cat_id, (string) '');

$max_questions = $params->get('max_questions');

$used_ids = $question['id'];

$answers = $question['answers'];
foreach ($answers as $answer)
{
	if ($answer['fraction'] == 1)
	{
		$correct_answer = $answer;
		break;
	}
}
$n_correct = 0;
$n_questions = 0;


$jdoc = JFactory::getDocument();
$jdoc->addStyleSheet(JURI::root ().'modules/mod_joomdle_randomquestion/css/style.css');

require(JModuleHelper::getLayoutPath('mod_joomdle_randomquestion'));
