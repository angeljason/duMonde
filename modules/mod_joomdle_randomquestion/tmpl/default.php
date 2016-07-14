<?php // no direct access
defined('_JEXEC') or die('Restricted access');


$lang_tag = JRequest::getVar ('langtag');
if (!$lang_tag)
{
	$lang = JFactory::getLanguage();
	$lang_tag = $lang->getTag();
}

$_jroot = JURI::root();
if ( strpos($_jroot, 'modules/mod_joomdle_randomquestion') !== false )
        $_jroot = str_replace('modules/mod_joomdle_randomquestion', '', $_jroot );
$ajax_url = $_jroot."/modules/mod_joomdle_randomquestion/ajax.php?langtag=$lang_tag&used_ids=$used_ids&max_questions=$max_questions&module_id=$module_id&category=";

$document = JFactory::getDocument();
$document->addscript(JURI::root(true).'/media/system/js/mootools-core.js');


?>

<script language="javascript">

n_correct_<?php echo $module_id; ?> = <?php echo $n_correct; ?>;
function newQuestion_<?php echo $module_id; ?> (ids)
{
	  var a = new Request.HTML({
		url: '<?php echo $ajax_url; ?>' + <?php echo $cat_id; ?>  + '&n_correct=' + n_correct_<?php echo $module_id; ?>,
				  method: 'get',
				  update: $('joomdle_question_<?php echo $module_id; ?>')
		  }).send();
}

function runButton_<?php echo $module_id; ?>() {

<?php
foreach ($answers as  $answer) :
?>

a_checked = document.getElementById('mc_<?php echo $module_id; ?>_r' + <?php echo $answer['id']; ?> ).checked;
if (a_checked)
	selected = <?php echo $answer['id']; ?>;

<?php endforeach; ?>


    var url='<?php echo $_jroot; ?>index.php?option=com_joomdle&format=raw&task=question.get_correct_answer';
    var data = 'question_id='+ <?php echo $question['id']; ?> ;
                        var request = new Request({
                        url: url,
                        method:'get',
                        data: data,
                        onSuccess: function(responseText){
if (responseText == selected)
{
	document.getElementById('correct_<?php echo $module_id; ?>_' + responseText).style.display = '';
	n_correct_<?php echo $module_id; ?>++;
}
else
{
	document.getElementById('wrong_<?php echo $module_id; ?>_' + selected).style.display = '';
	document.getElementById('feedback_<?php echo $module_id; ?>').innerHTML=  '<br><?php echo JText::_('COM_JOOMDLE_CORRECT_ANSWER_IS'); ?>' + ': '  + '<?php echo $correct_answer['answer']; ?>';
}
                        }
                        }).send();
}
</script>

<div id="joomdle_question_<?php echo $module_id; ?>">
<div class="joomdle_question_text">
	<?php echo $question['questiontext']; ?>
</div>

<?php
if (is_array ($answers))
foreach ($answers as  $answer) : ?>
<div class="joomdle_question_check">
                <input type="radio" name="multichoice_<?php echo $module_id; ?>" id="mc_<?php echo $module_id; ?>_r<?php echo $answer['id']; ?>" value='<?php echo $answer['id']; ?>'>
</div>
<div class="joomdle_question_answer">
                <?php echo $answer['answer']; ?>
				<span id="correct_<?php echo $module_id; ?>_<?php echo $answer['id']; ?>"><img src="<?php echo $_jroot; ?>media/joomdle/images/tick.png" alt="<?php echo JText::_ ('COM_JOOMDLE_CORRECT'); ?>" /></span>
				<span id="wrong_<?php echo $module_id; ?>_<?php echo $answer['id']; ?>"><img src="<?php echo $_jroot; ?>media/joomdle/images/publish_r.png" alt="<?php echo JText::_ ('COM_JOOMDLE_WRONG'); ?>" /></span>
</div>
<div class="clearfix"> </div>
<?php endforeach; ?>
<?php
?>

<div class="joomdle_question_buttons">
<br>
        <input type="submit" id="submit_button" name="submit" value="<?php echo JText::_('COM_JOOMDLE_SUBMIT'); ?>" onClick="this.disabled=true; document.getElementById('newquestion_<?php echo $module_id; ?>').disabled = false; runButton_<?php echo $module_id; ?>();">
<?php if ($n_questions >= ($max_questions - 1)) : ?>
        <input disabled="disabled" type="submit" id="newquestion_<?php echo $module_id; ?>" name="newquestion" value="<?php echo JText::_('COM_JOOMDLE_FINISH'); ?>" onClick="newQuestion_<?php echo $module_id; ?>(<?php echo $question['id'];?>);">
<?php else : ?>
        <input disabled="disabled" type="submit" id="newquestion_<?php echo $module_id; ?>" name="newquestion" value="<?php echo JText::_('COM_JOOMDLE_NEW_QUESTION'); ?>" onClick="newQuestion_<?php echo $module_id; ?>(<?php echo $question['id'];?>);">
<?php endif; ?>
        <input type="hidden" name="task" value="attempt_quizquestion_multichoice">
        <input type="hidden" name="question_id" value="<?php echo $question['id']; ?>">
        <?php echo JHTML::_( 'form.token' ); ?>
</div>
<div id="feedback_<?php echo $module_id; ?>">
</div>

</div>

<script language="javascript">
<?php
if (is_array ($answers))
foreach ($answers as  $answer) : ?>
document.getElementById('correct_<?php echo $module_id; ?>_' + <?php echo $answer['id']; ?> ).style.display = "none";
document.getElementById('wrong_<?php echo $module_id; ?>_' + <?php echo $answer['id']; ?> ).style.display = "none";
<?php endforeach; ?>
</script>
