function getXMLHTTP() { //fuction to return the xml http object
		var xmlhttp=false;	
		try{
			xmlhttp=new XMLHttpRequest();
		}
		catch(e)	{		
			try{			
				xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(e){
				try{
				req = new ActiveXObject("Msxml2.XMLHTTP");
				}
				catch(e1){
					xmlhttp=false;
				}
			}
		}
		 	
		return xmlhttp;
	}
	
//-----------------------UserGroup------------------------------		
	function getUserGroup(strURL) 
	{		
		
		var req = getXMLHTTP();
		
		if (req)
		{
			
			req.onreadystatechange = function() 
			{
				if (req.readyState == 4) 
				{
					// only if "OK"
					if (req.status == 200) 
					{						
						document.getElementById('usergroupdiv').innerHTML=req.responseText;						
					} else 
					{
						alert("There was a problem while using XMLHTTP:\n" + req.statusText);
					}
				}				
			}			
			req.open("GET", strURL, true);
			req.send(null);
		}
				
	}

//-----------------------UserLevel------------------------------		
	function getUserLevel(strURL) 
	{		
		
		var req = getXMLHTTP();
		
		if (req)
		{
			
			req.onreadystatechange = function() 
			{
				if (req.readyState == 4) 
				{
					// only if "OK"
					if (req.status == 200) 
					{						
						document.getElementById('userleveldiv').innerHTML=req.responseText;						
					} else 
					{
						alert("There was a problem while using XMLHTTP:\n" + req.statusText);
					}
				}				
			}			
			req.open("GET", strURL, true);
			req.send(null);
		}
				
	}
	
//-----------------------User------------------------------		
	function getUser(strURL) 
	{		
		
		var req = getXMLHTTP();
		
		if (req)
		{
			
			req.onreadystatechange = function() 
			{
				if (req.readyState == 4) 
				{
					// only if "OK"
					if (req.status == 200) 
					{						
						document.getElementById('userdiv').innerHTML=req.responseText;						
					} else 
					{
						alert("There was a problem while using XMLHTTP:\n" + req.statusText);
					}
				}				
			}			
			req.open("GET", strURL, true);
			req.send(null);
		}
				
	}
	
//-----------------------UserAuthority------------------------------		
	function getUserAuthorityReview(strURL) 
	{		
		
		var req = getXMLHTTP();
		
		if (req)
		{
			
			req.onreadystatechange = function() 
			{
				if (req.readyState == 4) 
				{
					// only if "OK"
					if (req.status == 200) 
					{						
						document.getElementById('userdivauthorityreview').innerHTML=req.responseText;						
					} else 
					{
						alert("There was a problem while using XMLHTTP:\n" + req.statusText);
					}
				}				
			}			
			req.open("GET", strURL, true);
			req.send(null);
		}
				
	}
	
//-----------------------UserAuthority------------------------------		
	function getUserAuthorityReview2(strURL) 
	{		
		
		var req = getXMLHTTP();
		
		if (req)
		{
			
			req.onreadystatechange = function() 
			{
				if (req.readyState == 4) 
				{
					// only if "OK"
					if (req.status == 200) 
					{						
						document.getElementById('userdivauthorityreview2').innerHTML=req.responseText;						
					} else 
					{
						alert("There was a problem while using XMLHTTP:\n" + req.statusText);
					}
				}				
			}			
			req.open("GET", strURL, true);
			req.send(null);
		}
				
	}
	
//-----------------------getKillType------------------------------	
	function getKillType(strURL) 
	{		
		
		var req = getXMLHTTP();
		
		if (req)
		{
			
			req.onreadystatechange = function() 
			{
				if (req.readyState == 4) 
				{
					// only if "OK"
					if (req.status == 200) 
					{						
						document.getElementById('killtypey').innerHTML=req.responseText;						
					} else 
					{
						alert("There was a problem while using XMLHTTP:\n" + req.statusText);
					}
				}				
			}			
			req.open("GET", strURL, true);
			req.send(null);
		}
				
	}
//-----------------------getWhatKill------------------------------	
	function getWhatKill(strURL) 
	{		
		
		var req = getXMLHTTP();
		
		if (req)
		{
			
			req.onreadystatechange = function() 
			{
				if (req.readyState == 4) 
				{
					// only if "OK"
					if (req.status == 200) 
					{						
						document.getElementById('whattokilly').innerHTML=req.responseText;						
					} else 
					{
						alert("There was a problem while using XMLHTTP:\n" + req.statusText);
					}
				}				
			}			
			req.open("GET", strURL, true);
			req.send(null);
		}
				
	}	
//-----------------------getVictimsList------------------------------
	function getVictimsList(strURL) 
	{		
		
		var req = getXMLHTTP();
		
		if (req)
		{
			
			req.onreadystatechange = function() 
			{
				if (req.readyState == 4) 
				{
					// only if "OK"
					if (req.status == 200) 
					{						
						document.getElementById('victimslist').innerHTML=req.responseText;						
					} else 
					{
						alert("There was a problem while using XMLHTTP:\n" + req.statusText);
					}
				}				
			}			
			req.open("GET", strURL, true);
			req.send(null);
		}
				
	}	
//-----------------------getPositionsList------------------------------
	function getPositionsList(strURL) 
	{		
		
		var req = getXMLHTTP();
		
		if (req)
		{
			
			req.onreadystatechange = function() 
			{
				if (req.readyState == 4) 
				{
					// only if "OK"
					if (req.status == 200) 
					{						
						document.getElementById('positionlist').innerHTML=req.responseText;						
					} else 
					{
						alert("There was a problem while using XMLHTTP:\n" + req.statusText);
					}
				}				
			}			
			req.open("GET", strURL, true);
			req.send(null);
		}
				
	}	
//-----------------------getAreaOfAssignmentList------------------------------
	function getAreaOfAssignmentList(strURL) 
	{		
		
		var req = getXMLHTTP();
		
		if (req)
		{
			
			req.onreadystatechange = function() 
			{
				if (req.readyState == 4) 
				{
					// only if "OK"
					if (req.status == 200) 
					{						
						document.getElementById('areaofassignmentlist').innerHTML=req.responseText;						
					} else 
					{
						alert("There was a problem while using XMLHTTP:\n" + req.statusText);
					}
				}				
			}			
			req.open("GET", strURL, true);
			req.send(null);
		}
				
	}	