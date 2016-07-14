<?php /* Smarty version Smarty-3.1.7, created on 2015-10-23 05:31:03
         compiled from "/home/nickmond/public_html/vtiger/includes/runtime/../../layouts/vlayout/modules/Vtiger/dashboards/NotebookContents.tpl" */ ?>
<?php /*%%SmartyHeaderCode:7498681015629c617305688-60303188%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '503405c9fd5233c3c8411fdc1b32250b6a03f3c2' => 
    array (
      0 => '/home/nickmond/public_html/vtiger/includes/runtime/../../layouts/vlayout/modules/Vtiger/dashboards/NotebookContents.tpl',
      1 => 1373768345,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '7498681015629c617305688-60303188',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'MODULE' => 0,
    'WIDGET' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5629c61733cfa',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5629c61733cfa')) {function content_5629c61733cfa($_smarty_tpl) {?>
<div style='padding:5px'><div class="row-fluid"><div class="dashboard_notebookWidget_view row-fluid"><div class="row-fluid"><span class="span10 muted"><i><?php echo vtranslate('LBL_LAST_SAVED_ON',$_smarty_tpl->tpl_vars['MODULE']->value);?>
</i> <?php echo Vtiger_Util_Helper::formatDateTimeIntoDayString($_smarty_tpl->tpl_vars['WIDGET']->value->getLastSavedDate());?>
</span><span class="span2"><span class="pull-right"><button class="btn btn-mini pull-right dashboard_notebookWidget_edit"><strong><?php echo vtranslate('LBL_EDIT',$_smarty_tpl->tpl_vars['MODULE']->value);?>
</strong></button></span></span></div><div class="row-fluid pushDown2per"><div class="dashboard_notebookWidget_viewarea boxSizingBorderBox" style="background-color:white;border: 1px solid #CCC"><?php echo nl2br($_smarty_tpl->tpl_vars['WIDGET']->value->getContent());?>
</div></div></div><div class="dashboard_notebookWidget_text row-fluid" style="display:none;"><div class="row-fluid"><span class="span10 muted"><i><?php echo vtranslate('LBL_LAST_SAVED_ON',$_smarty_tpl->tpl_vars['MODULE']->value);?>
</i> <?php echo Vtiger_Util_Helper::formatDateTimeIntoDayString($_smarty_tpl->tpl_vars['WIDGET']->value->getLastSavedDate());?>
</span><span class="span2"><span class="pull-right"><button class="btn btn-mini btn-success pull-right dashboard_notebookWidget_save"><strong><?php echo vtranslate('LBL_SAVE',$_smarty_tpl->tpl_vars['MODULE']->value);?>
</strong></button></span></span></div><div class="row-fluid pushDown2per"><span class="span12"><textarea class="dashboard_notebookWidget_textarea row-fluid boxSizingBorderBox" style="min-height: 200px;background-color: #ffffdd;resize: none;padding: 0px;" data-note-book-id="<?php echo $_smarty_tpl->tpl_vars['WIDGET']->value->get('id');?>
"><?php echo $_smarty_tpl->tpl_vars['WIDGET']->value->getContent();?>
</textarea></span></div></div></div></div>
<?php }} ?>