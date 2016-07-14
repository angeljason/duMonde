<?php /* Smarty version Smarty-3.1.7, created on 2015-10-23 06:32:47
         compiled from "/home/nickmond/public_html/vtiger/includes/runtime/../../layouts/vlayout/modules/Settings/ExtensionStore/InstallationLog.tpl" */ ?>
<?php /*%%SmartyHeaderCode:624390395629d48f3b0e09-49788356%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '4119340b8076a6572c79351dbf8c5a3ee0a40b59' => 
    array (
      0 => '/home/nickmond/public_html/vtiger/includes/runtime/../../layouts/vlayout/modules/Settings/ExtensionStore/InstallationLog.tpl',
      1 => 1445577985,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '624390395629d48f3b0e09-49788356',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'ERROR' => 0,
    'QUALIFIED_MODULE' => 0,
    'ERROR_MESSAGE' => 0,
    'MODULE_ACTION' => 0,
    'TARGET_MODULE_INSTANCE' => 0,
    'MODULE_FILE_NAME' => 0,
    'MODULE_PACKAGE' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5629d48f43dfc',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5629d48f43dfc')) {function content_5629d48f43dfc($_smarty_tpl) {?>
<div class='modelContainer'><div class="modal-header contentsBackground"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><?php if ($_smarty_tpl->tpl_vars['ERROR']->value){?><input type="hidden" name="installationStatus" value="error" /><h3 style="color: red"><?php echo vtranslate('LBL_INSTALLATION_FAILED',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</h3><?php }else{ ?><input type="hidden" name="installationStatus" value="success" /><h3 style="color:green;"><?php echo vtranslate('LBL_SUCCESSFULL_INSTALLATION',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</h3><?php }?></div><div class="modal-body" id="installationLog"><?php if ($_smarty_tpl->tpl_vars['ERROR']->value){?><p style="color:red;"><?php echo vtranslate($_smarty_tpl->tpl_vars['ERROR_MESSAGE']->value,$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</p><?php }else{ ?><div class="row-fluid"><span class="font-x-x-large"><?php echo vtranslate('LBL_INSTALLATION_LOG',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</span></div><div id="extensionInstallationInfo" class="backgroundImageNone" style="background-color: white;padding: 2%;"><?php if ($_smarty_tpl->tpl_vars['MODULE_ACTION']->value=="Upgrade"){?><?php echo $_smarty_tpl->tpl_vars['MODULE_PACKAGE']->value->update($_smarty_tpl->tpl_vars['TARGET_MODULE_INSTANCE']->value,$_smarty_tpl->tpl_vars['MODULE_FILE_NAME']->value);?>
<?php }else{ ?><?php echo $_smarty_tpl->tpl_vars['MODULE_PACKAGE']->value->import($_smarty_tpl->tpl_vars['MODULE_FILE_NAME']->value,'false');?>
<?php }?><?php ob_start();?><?php echo unlink($_smarty_tpl->tpl_vars['MODULE_FILE_NAME']->value);?>
<?php $_tmp1=ob_get_clean();?><?php $_smarty_tpl->tpl_vars['UNLINK_RESULT'] = new Smarty_variable($_tmp1, null, 0);?></div><?php }?></div><div class="modal-footer"><span class="pull-right"><button class="btn btn-success" id="importCompleted" onclick="location.reload()"><?php echo vtranslate('LBL_OK',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</button></span></div></div><?php }} ?>