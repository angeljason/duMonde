<?php /* Smarty version Smarty-3.1.7, created on 2015-10-23 06:10:23
         compiled from "/home/nickmond/public_html/vtiger/includes/runtime/../../layouts/vlayout/modules/Import/Import_Done_Buttons.tpl" */ ?>
<?php /*%%SmartyHeaderCode:1579080665629cf4fd5c8c8-92405635%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '73ac1e9ed5adf992e8569029ec1cccf6c0facbb9' => 
    array (
      0 => '/home/nickmond/public_html/vtiger/includes/runtime/../../layouts/vlayout/modules/Import/Import_Done_Buttons.tpl',
      1 => 1445577975,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1579080665629cf4fd5c8c8-92405635',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'FOR_MODULE' => 0,
    'MODULE' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5629cf4fd66c8',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5629cf4fd66c8')) {function content_5629cf4fd66c8($_smarty_tpl) {?>

<button class="btn btn-success" name="ok"
		onclick="location.href='index.php?module=<?php echo $_smarty_tpl->tpl_vars['FOR_MODULE']->value;?>
&view=Import'"><strong><?php echo vtranslate('LBL_OK_BUTTON_LABEL',$_smarty_tpl->tpl_vars['MODULE']->value);?>
</strong></button><?php }} ?>