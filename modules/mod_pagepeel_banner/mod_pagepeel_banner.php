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
defined( '_JEXEC' ) or die( 'Restricted access' );
//Create the temporary definition for TP_DS
if(!defined('TP_DS')) {
	define( 'TP_DS', DIRECTORY_SEPARATOR );
}

// Include the syndicate functions only once

require_once dirname(__FILE__).TP_DS.'helper.php';
require_once JPATH_ROOT.TP_DS.'administrator'.TP_DS.'components'.TP_DS.'com_banners'.TP_DS.'helpers'.TP_DS.'banners.php';

$doc = JFactory::getDocument();
$baseurl = ''.JURI::base(true).'/';
$modulebase = ''.JURI::base(true).'/modules/mod_pagepeel_banner/';
$display = $params->get('displaytype', 'flash');

$app= JFactory::getApplication();
$mysitename=$app->getCfg('sitename');

if($display == 'flash'){
	$doc->addScript($modulebase.'assets/AC_OETags.js');
}else{

}

//Get All Parameters
$clientids = $params->get( 'banner_cids', '5' );
$adsystem  = $params->get( 'adsystem', '1' );

// peel setting
$peelspeed = $params->get( 'peelspeed', '4' );
$peelmirror = $params->get( 'peelmirror', '1' );
$peelnomirrorclr = $params->get( 'peelnomirrorclr', 'FFFFFF' );
$peellinktarget = $params->get( 'peellinktarget', 'self' );		
$peelautoopenable = $params->get( 'peelautoopenable', 'disable' );
$peelautoopenbehaviour = $params->get( 'peelautoopenbehaviour', 'reload' );		
$peelautoopen = $params->get( 'peelautoopen', 'false' );
$peelcloseautoopen = $params->get( 'peelcloseautoopen', '5' );
$peeldirection = $params->get( 'peeldirection', 'rt' );
$alterlink = $params->get( 'alterlink', 'http://www.templateplazza.com' );
$alterimage = $params->get( 'alterimage', 'modules/mod_pagepeel_banner/assets/animated_ads.jpg' );
$peelsmallimage = $params->get( 'peelsmallimage', 'modules/mod_pagepeel_banner/assets/clickhere.jpg' );
$peelsmallwidth = $params->get( 'peelsmallwidth', '100' );
$peelbigwidth = $params->get( 'peelbigwidth', '500' );
$peeltheme =  $params->get( 'peeltheme', '1' );

$alterimage = $baseurl . $alterimage;
$peelsmallimage = $baseurl . $peelsmallimage;

//PeelBannersHelper::updateReset();
$list = modPeelBannersHelper::getList($params);

require_once JPATH_ROOT.TP_DS.'components'.TP_DS.'com_banners'.TP_DS.'helpers'.TP_DS.'banner.php';		

$banner = null;
$count_banner = count($list);
$baseurl = JURI::base();

if($adsystem == 1){ // if Static Ads
	$imageurl = $alterimage;
	$link = $alterlink;
}
else { //if Joomla Ads
	if($count_banner > 0){
		foreach($list as $item) :
			$link = JRoute::_( 'index.php?option=com_banners&task=click&id='. $item->id );
			$imageurl = $item->params->get('imageurl');
			if (BannerHelper::isImage( $imageurl )){
				$imageurl = JURI::base(true).'/'.$imageurl;
			}
			else if (BannerHelper::isFlash( $imageurl )){
				$imageurl = JURI::base(true).'/'.$imageurl;
			} 
      else {
      	$imageurl = '';
      }
		endforeach;
	}
	else {	
		$imageurl = $alterimage;
		$link = $alterlink;
	}
}

if($display=='jquery'){
	$smallwidth = $peelsmallwidth;
	$smallheight = (520/500)*$smallwidth;
	$bigwidth = $peelbigwidth;
	$bigheight = (520/500)*$bigwidth;
	$speed = $peelspeed*200;
	$peelsmallimage = (!empty($peelsmallimage)) ? $peelsmallimage : null;
	$script = '
		jQuery.noConflict();
		var blinking = null;
		var bannerOpened = false;
		var isIE = jQuery.browser.msie;
		IEVersion = 9;
		if(isIE){
  		var IEVersion = parseInt(jQuery.browser.version, 10);
		}

		if( isIE && IEVersion < 9 ){
			jQuery(".peeloverlay").remove();
		}else{
			function doBlink(){
				jQuery(".peeloverlay").animate({opacity:0.8}, 300).animate({opacity:0.4}, 300);
				blinking = setTimeout("doBlink()", 600);
			}
		}
		
		var openBanner = function(){
			if( !isIE || IEVersion > 8 ){
				jQuery(".peeloverlay").hide();
			}
	';

	if($peelsmallimage){
		$script .='jQuery(".page-peel-banner-img").css(\'background-image\', \'url('.$imageurl.')\');';
	}

	$script .='
			jQuery("#page-peel-banner img").stop().animate({width: \''.$bigwidth.'px\', height: \''.$bigheight.'px\'}, '.$speed.');
			jQuery(".page-peel-banner-img").stop().animate({width: \''.$bigwidth.'px\', height: \''.$bigwidth.'px\'}, '.$speed.');
		}

		var closeBanner = function(){
			jQuery("#page-peel-banner img").stop().animate({width: \''.$smallwidth.'px\', height: \''.$smallheight.'px\'}, '.$speed.');
	';

	if($peelsmallimage){
		$script .='jQuery(".page-peel-banner-img").stop().animate({width: \''.$smallwidth.'px\', height: \''.$smallwidth.'px\'}, '.$speed.', function(){
			jQuery(".page-peel-banner-img").css(\'background-image\', \'url('.$peelsmallimage.')\');
			if( !isIE || IEVersion > 8 ){
				jQuery(".peeloverlay").show();
			}
		});';
	}else{
		$script .='jQuery(".page-peel-banner-img").stop().animate({width: \''.$smallwidth.'px\', height: \''.$smallwidth.'px\'}, '.$speed.', function(){
			if( !isIE || IEVersion > 8 ){
				jQuery(".peeloverlay").show();
			}
		});';
	}

	$script .='
			bannerOpened = false;
		}

		jQuery(document).ready(function(){
			if( isIE && IEVersion < 9 ){
				jQuery(".peeloverlay").remove();
			}
			jQuery("#page-peel-banner").remove().prependTo(\'body\');
	';

	if($peelautoopenable == 'enable'){
		if($peelautoopenbehaviour == 'once'){
			$script .= 'var pagePeelHasDisplayed=readCookie(\'pagePeelHasDisplayed\');' . "\n";
		}else{
			$script .= 'var pagePeelHasDisplayed=0;' . "\n";
		}
		
		$script .= 'if(pagePeelHasDisplayed != 1){' . "\n";

		if($peelautoopen){
			$milisecond = $peelautoopen*1000;
			$script .= 'var t=setTimeout("openBanner()",'.$milisecond.');' . "\n";
			$script .= 'createCookie(\'pagePeelHasDisplayed\', 1, 24);' . "\n";
		}else{
			$script .= 'openBanner();' . "\n";
		}
		
		if($peelcloseautoopen){
			$milisecond = (!empty($peelautoopen)) ? ( $peelautoopen*1000 ) + ( $peelcloseautoopen*1000 ) : $peelcloseautoopen*1000;
			$script .= 'var t=setTimeout("closeBanner()",'.$milisecond.');' . "\n";
		}

		$script .= '}' . "\n";
	}

	$script .= '
			if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.toLowerCase().indexOf("android") > -1) ) {
				var href = jQuery("#page-peel-banner a").attr("href");
				jQuery("#page-peel-banner a").removeAttr("href").attr("rel", href);

				jQuery("#page-peel-banner a").click(function(){
					if(bannerOpened == false){
						openBanner();
						bannerOpened = true;
						jQuery("#page-peel-banner a").removeAttr("rel").attr("href", href);
						setTimeout("closeBanner()", 5000);
						return false;
					}else{
						return true;
					}
				});
			}else{
				jQuery("#page-peel-banner").hover(function(){
					openBanner();
				}, function(){
					closeBanner();
				});
			}

			if( !isIE || IEVersion > 8 ){
				doBlink();
			}
		});
	';
	$doc->addScriptDeclaration($script);
	
	$style = '
		#page-peel-banner{
			background:transparent!important;
		}
		#page-peel-banner img{
			z-index:9999;
			position:absolute;
	';

	if($peeldirection == 'rt'){
	  $style .= '
			right:0;
		';
	}else{
	  $style .= '
			left:0;
		';
	}

  $style .= '
		top:0;
		width:'.$smallwidth.'px;
		height:'.$smallheight.'px;
		-ms-interpolation-mode:bicubic;
	';

		if($peeldirection == 'lt'){
      $style .= '
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      filter: FlipH;
      -ms-filter: "FlipH";
      ';
    }
	$style .= '
		}
		#page-peel-banner .page-peel-banner-img{
			z-index:8888;
			position:absolute;
	';

	if($peeldirection == 'rt'){
	  $style .= '
			right:0;
		';
	}else{
	  $style .= '
			left:0;
		';
	}

  $style .= '
			top:0;
			width:'.$smallwidth.'px;
			height:'.$smallwidth.'px;
			text-indent:-9999px;
		}

		.peeloverlay {
			top: 0;
			z-index: 999999;
			display: block;
			width:'.$smallwidth.'px;
			height:'.$smallwidth.'px;
			position: absolute;
	';

		if($peeldirection == 'lt'){
      $style .= '
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      filter: FlipH;
      -ms-filter: "FlipH";
			background: url('.$modulebase.'assets/peeloverlay.png) no-repeat top left;
			left: 0;
      ';
    }else{
      $style .= '
			background: url('.$modulebase.'assets/peeloverlay.png) no-repeat top right;
			right: 0;
      ';
    }
	$style .= '
			-moz-background-size: '.$smallwidth.'px '.$smallwidth.'px;
			-o-background-size: '.$smallwidth.'px '.$smallwidth.'px;
			-webkit-background-size: '.$smallwidth.'px '.$smallwidth.'px;
			-khtml-background-size: '.$smallwidth.'px '.$smallwidth.'px;
			background-size: '.$smallwidth.'px '.$smallwidth.'px !important;
		}
	';

	$doc->addStyleDeclaration($style);
}else{
	if ($peelmirror == 0) {
		$mirror = "false";
	}
	elseif ($peelmirror == 1){
		$mirror = "true";
	}
	
	$script = '
	var peelAsset = \''.$modulebase.'assets/\';

	//  URL to small image 
	var pagearSmallImg = \''.$peelsmallimage.'\'; 
	
	// URL to big image
	var pagearBigImg = \''.$imageurl.'\'; 
	
	// Movement speed of small pageear 1-4 (2=Standard)
	var speedSmall = '.$peelspeed.'; 
	// Mirror image ( true | false )
	var mirror = \''.$mirror.'\'; 
	
	// Color of pagecorner if mirror is false
	var pageearColor = \''.$peelnomirrorclr.'\';  
	
	// URL to open on pageear click
	var jumpTo = \''.$link.'\' ;
	
	// Browser target  (new) or self (self)
	var openLink = \''.$peellinktarget.'\'; 
	
	// Set direction of pageear in left or right top browser corner (lt: left | rt: right )
	setDirection = \''.$peeldirection.'\';
	
	//add by remush
	var autoopen = \''.$peelautoopenable.'\';
	var behaviour = \''.$peelautoopenbehaviour.'\';
	
	/*
	 *  Do not change anything after this line
	 */ 
	
	// Size small peel 
	var thumbWidth  = '.$peelsmallwidth.';
	var thumbHeight = '.$peelsmallwidth.';
	
	// Size big peel
	var bigWidth  = '.$peelbigwidth.';
	var bigHeight = '.$peelbigwidth.';
	var closeOnLoad = '.$peelcloseautoopen.';';
	
	// Opens pageear automaticly (false:deactivated | 0.1 - X seconds to open) 
	if($peelautoopenable == "enable") {
		$script .='
			var openOnLoad = '.$peelautoopen.';
			var cookieEnabled = (navigator.cookieEnabled) ? true : false;';
	}
	else {
		$script .='
			var openOnLoad = false;
			var cookieEnabled = false;';
	}

	$doc->addScriptDeclaration($script);
	$doc->addScript($modulebase.'assets/pagepeel.js');
}

$doc->addScript($modulebase.'assets/cookie.js');

$moduleclass_sfx = htmlspecialchars($params->get('moduleclass_sfx'));
require JModuleHelper::getLayoutPath('mod_pagepeel_banner');

?>


