<?php	
/**
 * @version		$Id: mod_pagepeel_banner.php 2.0
 * @Reni Mustika (old version) & Rony S Y Zebua (Joomla 1.7/Joomla 2.5 and Joomla 3.0)
 * @Official site http://www.templateplazza.com
 * @based on www.webpicasso.de pageear script and mod_banner.php
 * @package		Joomla 3.0.x
 * @subpackage	mod_pagepeel_banner
 * @copyright	Copyright (C) 2005 - 2011 Open Source Matters, Inc. All rights reserved.
 * @license		GNU General Public License version 2 or later; see LICENSE.txt
 */
 
// no direct access
defined('_JEXEC') or die;
?>


<?php if($display=='flash'): ?>
<script type="text/javascript">writeObjects();</script>
<?php else: ?>
<div id="page-peel-banner">
	<a href="<?php echo $link; ?>"<?php echo ($peellinktarget=='new') ? ' target="_blank"' : ''; ?>>
		<img src="<?php echo $modulebase; ?>assets/<?php  if($peeltheme == 1){ echo "bg.png"; } else { echo "bg-dark.png";} ?>" alt="" />
		<div class="peeloverlay"></div>
		<span class="page-peel-banner-img" style="background:#<?php echo $peelnomirrorclr; ?> url(<?php echo (!empty($peelsmallimage)) ? $peelsmallimage : $imageurl; ?>) no-repeat <?php echo ($peeldirection == 'rt') ? 'right' : 'left'; ?> top;"><?php echo $mysitename;?></span>
	</a>
</div>
<img src="<?php echo (!empty($peelsmallimage)) ? $peelsmallimage : $imageurl; ?>" alt="" style="display:none" />
<?php endif; ?>