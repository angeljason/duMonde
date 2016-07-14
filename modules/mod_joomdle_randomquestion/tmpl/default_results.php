<?php
$_jroot = JURI::root();
if ( strpos($_jroot, 'modules/mod_joomdle_randomquestion') !== false )
        $_jroot = str_replace('modules/mod_joomdle_randomquestion', '', $_jroot );
?>

<h3>
<?php
echo JText::_('COM_JOOMDLE_RESULTS');
?>
</h3>
<P>
<?php echo "&nbsp;" . JText::_('COM_JOOMDLE_CORRECT') .': '.$n_correct; ?>
<img src="<?php echo $_jroot; ?>media/joomdle/images/tick.png" align="left">
</P>
<P>
<?php echo "&nbsp;" . JText::_('COM_JOOMDLE_WRONG') .': '.($n_questions - $n_correct); ?>
<img src="<?php echo $_jroot; ?>media/joomdle/images/publish_r.png" align="left">
</P>
