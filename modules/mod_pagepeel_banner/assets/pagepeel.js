/********************************************************************************************
* PagePeel Banner - http://www.templateplazza.com
* PageEar advertising CornerAd by Webpicasso Media
* Leave copyright notice.  
*
* @copyright www.webpicasso.de
* @author    christian harz <pagepeel-at-webpicasso.de>
*********************************************************************************************/

// Flash check vars
var requiredMajorVersion = 6;
var requiredMinorVersion = 0;
var requiredRevision = 0;

// Copyright
var copyright = 'Webpicasso Media, www.webpicasso.de';

// Css style default x-position
var xPos = 'right';

function openPeel(){	
	document.getElementById('bigDiv').style.top = '0px'; 
	document.getElementById('bigDiv').style[xPos] = '0px';
	document.getElementById('thumbDiv').style.top = '-1000px';
}

function closePeel(){	
	document.getElementById("thumbDiv").style.top = "0px";
	document.getElementById("bigDiv").style.top = "-1000px";	
}

function writeObjects (){
	// GET - Params
	var queryParams = 'pagearSmallImg='+escape(pagearSmallImg); 
	queryParams += '&pagearBigImg='+escape(pagearBigImg); 
	queryParams += '&pageearColor='+pageearColor; 
	queryParams += '&jumpTo='+escape(jumpTo); 
	queryParams += '&openLink='+escape(openLink); 
	queryParams += '&mirror='+escape(mirror); 
	queryParams += '&copyright='+escape(copyright); 
	queryParams += '&speedSmall='+escape(speedSmall); 
	queryParams += '&openOnLoad='+escape(openOnLoad); 
	queryParams += '&closeOnLoad='+escape(closeOnLoad); 
	queryParams += '&setDirection='+escape(setDirection); 

  // Get installed flashversion
  var hasReqestedVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);

  // Check direction 
  if(setDirection == 'lt') {
    xPosBig = 'left:-1000px';  
    xPos = 'left';      
  } else {
    xPosBig = 'right:1000px';
    xPos = 'right';              
  }
  
  // Write div layer for big swf
  document.write('<div id="bigDiv" style="position:fixed;width:'+ bigWidth +'px;height:'+ bigHeight +'px;z-index:9999;'+xPosBig+';top:-1000px;">');    	
  
  // Check if flash exists/ version matched
  if (hasReqestedVersion) {    	
  	AC_FL_RunContent(
			"src", peelAsset+'pageear_b.swf?'+ queryParams,
			"width", bigWidth,
			"height", bigHeight,
			"align", "middle",
			"id", "bigSwf",
			"quality", "high",
			"bgcolor", "#FFFFFF",
			"name", "bigSwf",
			"wmode", "transparent",
			"allowScriptAccess","always",
			"type", "application/x-shockwave-flash",
			'codebase', 'http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab',
			"pluginspage", "http://www.adobe.com/go/getflashplayer"
  	);
  } else {  // otherwise do nothing or write message ...    	 
  	document.write('no flash installed');  // non-flash content
  } 

  // Close div layer for big swf
  document.write('</div>'); 
  
  // Write div layer for small swf
  document.write('<div id="thumbDiv" style="position:fixed;width:'+ thumbWidth +'px;height:'+ thumbHeight +'px;z-index:9999;'+xPos+':0px;top:0px;">');
  
  // Check if flash exists/ version matched
  if (hasReqestedVersion) {    	
  	AC_FL_RunContent(
			"src", peelAsset+'pageear_s.swf?'+ queryParams,
			"width", thumbWidth,
			"height", thumbHeight,
			"align", "middle",
			"id", "bigSwf",
			"quality", "high",
			"bgcolor", "#FFFFFF",
			"name", "bigSwf",
			"wmode", "transparent",
			"allowScriptAccess","always",
			"type", "application/x-shockwave-flash",
			'codebase', 'http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab',
			"pluginspage", "http://www.adobe.com/go/getflashplayer"
  	);
  } else {  // otherwise do nothing or write message ...    	 
  	document.write('no flash installed');  // non-flash content
  } 

	document.write('</div>');  

	if(autoopen == "enable"){			
		if(behaviour == "once"){
			//if you choose behaviour once, you must enable cookies on your browser
			cookie = readCookie("auto_open_pagepeel");
			//if not IE4+ nor NS6+			
			if (typeof navigator.cookieEnabled=="undefined" && !cookieEnabled){ 
				document.cookie="testcookie";
				cookieEnabled = (document.cookie.indexOf("testcookie")!=-1)? true : false ;
			}
			if (cookie != 1 && cookieEnabled ) {				
				openPeel();	
				createCookie("auto_open_pagepeel", "1");			 
			}  
		}
		else{
			openPeel();				
		}
	}
}