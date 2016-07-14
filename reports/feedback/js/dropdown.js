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
	
//-----------------------Present Address------------------------------		
	function getProvince(strURL) 
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
						document.getElementById('provdiv').innerHTML=req.responseText;						
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
	
 function getTown(strURL) 
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
						document.getElementById('towndiv').innerHTML=req.responseText;						
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
	
 function getRegion(strURL) 
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
						document.getElementById('regiondiv').innerHTML=req.responseText;						
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
		
	
//-----------------------Permanent Address------------------------------

	function getProvince2(strURL) 
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
						document.getElementById('provdiv2').innerHTML=req.responseText;						
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
	
 function getTown2(strURL) 
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
						document.getElementById('towndiv2').innerHTML=req.responseText;						
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
	
 function getRegion2(strURL) 
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
						document.getElementById('regiondiv2').innerHTML=req.responseText;						
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
	
	//-----------------------Address of Parents------------------------------

	function getProvince3(strURL) 
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
						document.getElementById('provdiv3').innerHTML=req.responseText;						
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
	
 function getTown3(strURL) 
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
						document.getElementById('towndiv3').innerHTML=req.responseText;						
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
	
 function getRegion3(strURL) 
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
						document.getElementById('regiondiv3').innerHTML=req.responseText;						
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
	
	//-----------------------Present Address------------------------------		
	function getPrefjobfunc2(strURL) 
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
						document.getElementById('prefjobfunc2div').innerHTML=req.responseText;						
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
	
	//-----------------------POSITIONS------------------------------		
	function getPositions(strURL) 
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
						document.getElementById('positiondiv').innerHTML=req.responseText;						
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
	//-----------------------WEEKLY------------------------------		
	function getWeekly(strURL) 
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
						document.getElementById('weeklydiv').innerHTML=req.responseText;						
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
