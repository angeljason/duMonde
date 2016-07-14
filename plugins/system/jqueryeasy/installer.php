<?php
/**
 * @copyright	Copyright (C) 2011 Simplify Your Web, Inc. All rights reserved.
 * @license		GNU General Public License version 3 or later; see LICENSE.txt
 */

// No direct access to this file
defined('_JEXEC') or die;

/**
 * Script file of the jQuery Easy plugin
 */
class plgsystemjqueryeasyInstallerScript
{		
	/**
	 * Called before an install/update/uninstall method
	 *
	 * @return  boolean  True on success
	 */
	public function preflight($type, $parent) {
		echo '<br />';
	}
	
	/**
	 * Called after an install/update/uninstall method
	 *
	 * @return  boolean  True on success
	 */
	public function postflight($type, $parent) 
	{	
		if ($type != 'uninstall') {
			
			echo '<dl>';
			echo '    <dt>Change log</dt>';
			echo '    <dd>ADDED: Sweedish translation</dd>';
			echo '    <dd>ADDED: option to show report only if logged as Super User</dd>';
			echo '    <dd>ADDED: <code>$(document).ready(function($)</code> is replaced with <code>jQuery(document).ready(function($)</code> in <em>fix document ready</em> option</dd>';
			echo '    <dd>MODIFIED: logo</dd>';
			echo '    <dd>MODIFIED: report option is now visible on the first plugin tab</dd>';
			echo '    <dd>MODIFIED: report output</dd>';
			echo '    <dd>MODIFIED: J!3.2.4+ parameter selection (some options only show when needed)</dd>';
			echo '    <dd>REMOVED: back paths compatibility</dd>';
			echo '    <dd>REMOVED: <em>Other</em> tab</dd>';
			echo '</dl>';
		}
		
		return true;
	}
	
	/**
	 * Called on installation
	 *
	 * @return  boolean  True on success
	 */
	public function install($parent) {}
	
	/**
	 * Called on update
	 *
	 * @return  boolean  True on success
	 */
	public function update($parent) {}
	
	/**
	 * Called on uninstallation
	 */
	public function uninstall($parent) {}
	
}
?>
