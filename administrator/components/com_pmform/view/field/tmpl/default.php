<?php
/**
 * @version        4.2
 * @package        Joomla
 * @subpackage     Payment Form
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2010 - 2015 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */
defined('_JEXEC') or die();
JHtml::_('behavior.tooltip');
?>
<script type="text/javascript">
    Joomla.submitbutton = function(pressbutton)
    {
		if (pressbutton == 'cancel')
        {
            Joomla.submitform( pressbutton );
			return;
		}
        else
        {
            var form = document.adminForm;
			//Should validate the information here
			if (form.name.value == "")
            {
				alert("<?php echo JText::_("PF_ENTER_CUSTOM_FIELD_NAME"); ?>");
                form.name.focus();
                return false;
			}
			if (form.title.value == "")
            {
				alert("<?php echo JText::_("PF_ENTER_CUSTOM_FIELD_TITLE"); ?>");
				form.title.focus();
				return false;
			}
			Joomla.submitform( pressbutton );
		}
	}

    function sanitizeFieldName()
    {
        var form = document.adminForm ;
        var name = form.name.value ;
        var oldValue = name ;
        name = name.replace('pf_','');
        while(name.indexOf('  ') >=0)
        {
            name = name.replace('  ', ' ');
        }
        while(name.indexOf(' ') >=0)
        {
            name = name.replace(' ', '_');
        }
        form.name.value=  name;
    }
    function updateDependOnOptions()
    {
        (function($) {
            var fieldId = $('#depend_on_field_id').val();
            if (fieldId > 0) {
                $.ajax({
                    type: 'POST',
                    url: '<?php echo JUri::base(); ?>index.php?option=com_pmform&view=field&format=raw&field_id=' + fieldId,
                    dataType: 'html',
                    success: function(msg, textStatus, xhr) {
                        $('#options_container').html(msg);
                        $('#depend_on_options_container').show();
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        alert(textStatus);
                    }
                });

            }
            else
            {
                $('#options_container').html('');
                $('#depend_on_options_container').hide();
            }
        })(jQuery);
    }
    (function($)
    {
        $(document).ready(function(){
            var validateEngine = <?php  echo PmFormHelper::validateEngine(); ?>;
            $("input[name='required']").bind( "click", function() {
                var change = 1;
                validateRules(change);
            });
            $( "#datatype_validation" ).bind( "change", function() {
                var change = 1;
                validateRules(change);
            });

            $( "#fieldtype" ).bind( "change", function() {
                changeFiledType($(this).val());
            });

            changeFiledType('<?php echo $this->item->fieldtype;  ?>');
            function validateRules(change)
            {
                var validationString;
                if ($("input[name='name']").val() == 'email')
                {
                    //Hardcode the validation rule for email
                    validationString = 'validate[required,custom[email],ajax[ajaxEmailCall]]';
                    $("input[name='validation_rules']").val(validationString);
                }
                else
                {
                    var validateType = parseInt($('#datatype_validation').val());
                    validationString = validateEngine[validateType];
                    var required = $("input[name='required']:checked").val();
                    if (required == 1)
                    {
                        if (validationString == '')
                        {
                            validationString = 'validate[required]';
                        }
                        else
                        {
                            if (validationString.indexOf('required') == -1)
                            {
                                validationString = [validationString.slice(0, 9), 'required,', validationString.slice(9)].join('');
                            }
                        }
                    }
                    else
                    {
                        if (validationString == 'validate[required]')
                        {
                            validationString = '';
                        }
                        else
                        {
                            validationString = validationString.replace('validate[required', 'validate[');
                        }
                    }
                }
                if(change == 1)
                {
                    $("input[name='validation_rules']").val(validationString);
                }
            }
            validateRules();
            function changeFiledType(fieldType)
            {
                if (fieldType == '')
                {
                    $('tr.pf-field').hide();
                }
                else
                {
                    var cssClass = '.pf-' + fieldType.toLowerCase();
                    $('tr.pf-field').show();
                    $('tr.pf-field').not(cssClass).hide();
                }

	            if(fieldType == 'List' || fieldType == 'Checkboxes' || fieldType == 'Radio' || fieldType == 'Text')
	            {
		            if($('[name^=fee_field]').val() == 0)
		            {
			            $('.pf-fee-field').hide();
		            }
		            else
		            {
			            $('.pf-fee-field').show();
		            }
		            <?php
					if($this->item->id && $this->item->fee_field)
					{
					?>
			            $('.pf-fee-field').show();
		            <?php
					}
					?>
			        }
		        }


	        //change fee field
	        $('[name^=fee_field]').click(function(){
		        if($(this).val() == 1)
		        {
			        $('tr.pf-fee-field').show();
		        }
		        else
		        {
			        $('tr.pf-fee-field').hide();
		        }
	        })
        });
    })(jQuery);

</script>
<form action="index.php?option=com_pmform&view=field" method="post" name="adminForm" id="adminForm">
<div class="col width-55" style="float:left">			
	<table class="admintable">
		<tr>
			<td class="key"> 
				<?php echo JText::_('PF_FORM'); ?>
			</td>
			<td>
				<?php echo $this->lists['form_id'] ; ?>
			</td>
		</tr>	
		<tr>
			<td class="key" width="30%">
				<?php echo  JText::_('PF_NAME'); ?>
			</td>
			<td>
				<input class="text_area" type="text" name="name" id="name" size="50" maxlength="250" value="<?php echo $this->item->name;?>" onchange="sanitizeFieldName();" />
			</td>
		</tr>
		<tr>
			<td class="key">
				<?php echo  JText::_('PF_TITLE'); ?>
			</td>
			<td>
				<input class="text_area" type="text" name="title" id="title" size="50" maxlength="250" value="<?php echo $this->item->title;?>" />
			</td>
		</tr>
		<tr>
			<td class="key">
				<?php echo JText::_('PF_FIELD_TYPE'); ?>
			</td>
			<td>
				<?php echo $this->lists['fieldtype']; ?>
			</td>
		</tr>
        <tr>
            <td class="key">
                <?php echo JText::_('PF_REQUIRE'); ?>
            </td>
            <td>
                <?php echo $this->lists['required']; ?>
            </td>
        </tr>
        <tr>
            <td class="key">
                <?php echo JText::_('PF_DATATYPE_VALIDATION') ; ?>
            </td>
            <td>
                <?php echo $this->lists['datatype_validation']; ?>
            </td>
            <td>
                &nbsp;
            </td>
        </tr>
        <tr class="validation-rules">
            <td class="key">
                <?php echo JText::_('PF_VALIDATION_RULES') ; ?>
            </td>
            <td>
                <input type="text" class="input-xlarge" size="50" name="validation_rules" value="<?php echo $this->item->validation_rules ; ?>" />
            </td>
            <td>
                <?php echo JText::_("PF_VALIDATION_RULES_EXPLAIN"); ?>
            </td>
        </tr>
        <tr class="pf-field pf-list pf-checkboxes pf-radio">
			<td class="key">
				<?php echo JText::_('PF_VALUES'); ?>
			</td>
			<td>
				<textarea rows="5" cols="50" name="values"><?php echo $this->item->values; ?></textarea>
			</td>
		</tr>
		<tr>
			<td class="key">
				<?php echo JText::_('PF_DEFAULT_VALUES'); ?>
			</td>
			<td>
				<textarea rows="5" cols="50" name="default_values"><?php echo $this->item->default_values; ?></textarea>
			</td>
		</tr>
        <tr>
            <td class="key">
                <?php echo  JText::_('PF_DESCRIPTION'); ?>
            </td>
            <td>
                <textarea rows="5" cols="50" name="description"><?php echo $this->item->description;?></textarea>
            </td>
        </tr>
		 <tr>
            <td class="key">
                <?php echo  JText::_('PF_FEE_FIELD'); ?>
            </td>
            <td>
                <?php echo $this->lists['fee_field']; ?>
            </td>
        </tr>
        <tr>
            <td class="key">
                <?php echo  JText::_('PF_FEE_VALUES'); ?>
            </td>
            <td>
                <textarea rows="5" cols="50" name="fee_values"><?php echo $this->item->fee_values; ?></textarea>
            </td>
        </tr>
		<tr class="pf-fee-field pf-field pf-list pf-checkboxes pf-radio">
			<td class="key">
				<?php echo JText::_('PF_FEE_FORMULA') ; ?>
			</td>
			<td>
				<input type="text" class="inputbox" size="50" name="fee_formula" value="<?php echo $this->item->fee_formula ; ?>" />
			</td>
			<td>
				<?php echo JText::_('PF_FEE_FORMULA_EXPLAIN'); ?>
			</td>
		</tr>
		<tr>
            <td class="key">
                <?php echo  JText::_('PF_CSS_CLASS'); ?>
            </td>
            <td>
                <input class="text_area" type="text" name="css_class" id="css_class" size="10" maxlength="250" value="<?php echo $this->item->css_class;?>" />
            </td>
        </tr>
        <tr class="pf-field pf-text pf-textarea">
            <td class="key">
                <?php echo  JText::_('PF_PLACE_HOLDER'); ?>
            </td>
            <td>
                <input class="text_area" type="text" name="place_holder" id="place_holder" size="50" maxlength="250" value="<?php echo $this->item->place_holder;?>" />
            </td>
            <td>
                &nbsp;
            </td>
        </tr>
        <tr class="pf-field pf-text pf-checkboxes pf-radio pf-list">
            <td class="key">
                <?php echo  JText::_('PF_SIZE'); ?>
            </td>
            <td>
                <input class="text_area" type="text" name="size" id="size" size="10" maxlength="250" value="<?php echo $this->item->size;?>" />
            </td>
        </tr>
        <tr class="pf-field pf-text pf-textarea">
            <td class="key">
                <?php echo  JText::_('PF_MAX_LENGTH'); ?>
            </td>
            <td>
                <input class="text_area" type="text" name="max_length" id="max_lenth" size="50" maxlength="250" value="<?php echo $this->item->max_length;?>" />
            </td>
            <td>
                &nbsp;
            </td>
        </tr>
        <tr class="pf-field pf-textarea">
			<td class="key">
				<?php echo  JText::_('PF_ROWS'); ?>
			</td>
			<td>
				<input class="text_area" type="text" name="rows" id="rows" size="10" maxlength="250" value="<?php echo $this->item->rows;?>" />
			</td>
		</tr>
		<tr class="pf-field pf-textarea">
			<td class="key">
				<?php echo  JText::_('PF_COLS'); ?>
			</td>
			<td>
				<input class="text_area" type="text" name="cols" id="cols" size="10" maxlength="250" value="<?php echo $this->item->cols;?>" />
			</td>
		</tr>
		<?php
		if (isset($this->lists['field_mapping']))
		{
		?>
			<tr>
				<td class="key">
					<?php echo  JText::_('PF_FIELD_MAPPING'); ?>
				</td>
				<td>
					<?php echo $this->lists['field_mapping']; ?>
				</td>
			</tr>
		<?php
		}
		?>
		<tr>
			<td class="key">
				<?php echo JText::_('PF_PUBLISHED'); ?>
			</td>
			<td>
				<?php echo $this->lists['published']; ?>
			</td>
		</tr>
		       <tr>
            <td class="key">
                <?php echo JText::_('PF_DEPEND_ON_FIELD');?>
            </td>
            <td colspan="2">
                <?php echo $this->lists['depend_on_field_id']; ?>
            </td>
        </tr>
        <tr id="depend_on_options_container" style="display: <?php echo $this->item->depend_on_field_id ? '' : 'none'; ?>">
            <td class="key">
                <?php echo JText::_('PF_DEPEND_ON_OPTIONS');?>
            </td>
            <td id="options_container" colspan="2">
                <?php
                    if (count($this->dependOptions))
                    {
                    ?>
                        <table cellspacing="3" cellpadding="3" width="100%">
                            <?php
                            $optionsPerLine = 3;
                            for ($i = 0 , $n = count($this->dependOptions) ; $i < $n ; $i++)
                            {
                                $value = $this->dependOptions[$i] ;
                                if ($i % $optionsPerLine == 0) {
                                    ?>
                                    <tr>
                                <?php
                                }
                                ?>
                                <td>
                                    <input class="inputbox" value="<?php echo $value; ?>" type="checkbox" name="depend_on_options[]" <?php if (in_array($value, $this->dependOnOptions)) echo 'checked="checked"'; ?>><?php echo $value;?>
                                </td>
                                <?php
                                if (($i+1) % $optionsPerLine == 0)
                                {
                                    ?>
                                    </tr>
                                <?php
                                }
                            }
                            if ($i % $optionsPerLine != 0)
                            {
                                $colspan = $optionsPerLine - $i % $optionsPerLine ;
                                ?>
                                <td colspan="<?php echo $colspan; ?>">&nbsp;</td>
                                </tr>
                            <?php
                            }
                            ?>
                        </table>
                    <?php
                    }
                ?>
            </td>
        </tr>		
	</table>			
</div>		
<div class="clearfix"></div>
	<input type="hidden" name="id" value="<?php echo $this->item->id; ?>" />
	<input type="hidden" name="task" value="" />	
	<?php echo JHtml::_( 'form.token' ); ?>
</form>