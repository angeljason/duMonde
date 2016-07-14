<?php /* Smarty version Smarty-3.1.7, created on 2015-10-23 06:03:12
         compiled from "/home/nickmond/public_html/vtiger/includes/runtime/../../layouts/vlayout/modules/Import/Import_Advanced_Buttons.tpl" */ ?>
<?php /*%%SmartyHeaderCode:7321712005629cda0930569-94167766%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '468c83715cc45e56d42838cb8a97cafad8440947' => 
    array (
      0 => '/home/nickmond/public_html/vtiger/includes/runtime/../../layouts/vlayout/modules/Import/Import_Advanced_Buttons.tpl',
      1 => 1445577975,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '7321712005629cda0930569-94167766',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'MODULE' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5629cda09646a',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5629cda09646a')) {function content_5629cda09646a($_smarty_tpl) {?>

<button type="submit" name="import" id="importButton" class="crmButton big edit btn btn-success"
		><strong><?php echo vtranslate('LBL_IMPORT_BUTTON_LABEL',$_smarty_tpl->tpl_vars['MODULE']->value);?>
</strong></button>
&nbsp;&nbsp;
<a type="button" name="cancel" value="<?php echo vtranslate('LBL_CANCEL',$_smarty_tpl->tpl_vars['MODULE']->value);?>
" class="cursorPointer cancelLink" onclick="window.history.back()">
	<?php echo vtranslate('LBL_CANCEL',$_smarty_tpl->tpl_vars['MODULE']->value);?>

</a><?php }} ?>