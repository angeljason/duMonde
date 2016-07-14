<?php /* Smarty version Smarty-3.1.7, created on 2015-10-23 05:30:55
         compiled from "/home/nickmond/public_html/vtiger/includes/runtime/../../layouts/vlayout/modules/Vtiger/dashboards/AddNotePad.tpl" */ ?>
<?php /*%%SmartyHeaderCode:12092388985629c60f3233d4-61518954%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '3cac99baf623162ad25c9ebdd9e61c7b875201a3' => 
    array (
      0 => '/home/nickmond/public_html/vtiger/includes/runtime/../../layouts/vlayout/modules/Vtiger/dashboards/AddNotePad.tpl',
      1 => 1410782148,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '12092388985629c60f3233d4-61518954',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'MODULE' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5629c60f3876b',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5629c60f3876b')) {function content_5629c60f3876b($_smarty_tpl) {?>
<div id="addNotePadWidgetContainer" class='modal'><div class="modal-header contentsBackground"><button data-dismiss="modal" class="close" title="<?php echo vtranslate('LBL_CLOSE');?>
">&times;</button><h3 id="massEditHeader"><?php echo vtranslate('LBL_ADD',$_smarty_tpl->tpl_vars['MODULE']->value);?>
 <?php echo vtranslate('LBL_NOTEPAD',$_smarty_tpl->tpl_vars['MODULE']->value);?>
</h3></div><form class="form-horizontal" method="POST"><div class="control-group margin0px padding1per"><label class="control-label"><?php echo vtranslate('LBL_NOTEPAD_NAME',$_smarty_tpl->tpl_vars['MODULE']->value);?>
<span class="redColor">*</span> </label><div class="controls"><input type="text" name="notePadName" class="input-large" data-validation-engine="validate[required]" /></div></div><div class="control-group margin0px padding1per"><label class="control-label"><?php echo vtranslate('LBL_NOTEPAD_CONTENT',$_smarty_tpl->tpl_vars['MODULE']->value);?>
</label><div class="controls"><textarea type="text" name="notePadContent" style="min-height: 100px;resize: none;"/></div></div><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path('ModalFooter.tpl',$_smarty_tpl->tpl_vars['MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
</form></div><?php }} ?>