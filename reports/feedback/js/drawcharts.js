function drawnoplacement_position(zcompanyid,zdatetodisplayid) {
						
				//var id = $("#id").val();
				var zcompanyid = zcompanyid;
				var zdatetodisplayid = zdatetodisplayid;
				//alert(id);	
				
							$.ajax({
							type: "GET",
							url: "drawnoplacement_position.php",
							dataType: 'json',
							data: {companyid: zcompanyid,datetodisplayid: zdatetodisplayid},					
							cache: false,									
										beforeSend: function(lineData2) 
										{			   
											$("#flash_placement_position").show();
											$("#flash_placement_position").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading Chart...Please Wait.');				
										},															
									  success: function(lineData2)
									    {										   
										    $("#flash_placement_position").hide();
										    $("#morris-line-chart-position").empty();	
										   
										   Morris.Bar({   //now draw your graph
									                    element: 'morris-line-chart-position',
									                    data: lineData2,
									                    xkey: 'x',
												        ykeys: ['z'],
												        labels: ['Total No. of Placements per Position'],
												        labelColor: '#66CDAA',
												        hideHover: 'auto',
												        resize: true,
												        parseTime:false,
												        barColors: function (row, series, type) {
															    if (type === 'bar') {
															      var teal = Math.ceil(255 * row.y / this.ymax);
															      return 'rgb(' + teal + ',128,128)';
															    }
															    else {
															      return '#000';
															    }
															  }										
									                });	
									                
									        $("#noofplacementpositiondiv").empty();
									        if(zdatetodisplayid == 1)    
									        {									        	
									        	$("#noofplacementpositiondiv").append('Daily&nbsp;|&nbsp;');
									        }  
									        else if (zdatetodisplayid == 2)   
									        {
									        	$("#noofplacementpositiondiv").append('Weekly&nbsp;|&nbsp;');
									        }  
									        else if (zdatetodisplayid == 3)   
									        {
									        	$("#noofplacementpositiondiv").append('Monthly&nbsp;|&nbsp;');
									        } 
									        else if (zdatetodisplayid == 4)   
									        {
									        	$("#noofplacementpositiondiv").append('Quarterly&nbsp;|&nbsp;');
									        } 
									        else if (zdatetodisplayid == 5)   
									        {
									        	$("#noofplacementpositiondiv").append('Yearly&nbsp;|&nbsp;');
									        }
									        else
									        {
									        	
									        } 									        
									                																   
									   },
									  error: function(barData)
									    {
										   $("#flash_placement_position").hide();													   												   		
									   }											   
					             });
			
}
//Recruiter
function drawnoplacement_recruiter(zcompanyid,zdatetodisplayid) {
						
				//var id = $("#id").val();
				var zcompanyid = zcompanyid;
				var zdatetodisplayid = zdatetodisplayid;
				//alert(id);	
				
							$.ajax({
							type: "GET",
							url: "drawnoplacement_recruiter.php",
							dataType: 'json',
							data: {companyid: zcompanyid,datetodisplayid: zdatetodisplayid},					
							cache: false,									
										beforeSend: function(barData) 
										{			   
											$("#flash_placement_recruiter").show();
											$("#flash_placement_recruiter").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading Chart...Please Wait.');				
										},															
									  success: function(barData)
									    {										   
										    $("#flash_placement_recruiter").hide();
										    $("#morris-line-chart-recruiter").empty();	
										   
										   Morris.Bar({   //now draw your graph
									                    element: 'morris-line-chart-recruiter',
									                    data: barData,
									                    xkey: 'x',
												        ykeys: ['z'],
												        labels: ['Total No. of Placements per Recruiter'],
												        labelColor: '#66CDAA',
												        hideHover: 'auto',
												        resize: true,
												        parseTime:false,
												        barColors: function (row, series, type) {
															    if (type === 'bar') {
															      var blue = Math.ceil(255 * row.y / this.ymax);
															      return 'rgb(' + blue + ',0,255)';
															    }
															    else {
															      return '#000';
															    }
															  }										
									                });	
									                
									        $("#noofplacementrecruiterdiv").empty();
									        if(zdatetodisplayid == 1)    
									        {									        	
									        	$("#noofplacementrecruiterdiv").append('Daily&nbsp;|&nbsp;');
									        }  
									        else if (zdatetodisplayid == 2)   
									        {
									        	$("#noofplacementrecruiterdiv").append('Weekly&nbsp;|&nbsp;');
									        }  
									        else if (zdatetodisplayid == 3)   
									        {
									        	$("#noofplacementrecruiterdiv").append('Monthly&nbsp;|&nbsp;');
									        } 
									        else if (zdatetodisplayid == 4)   
									        {
									        	$("#noofplacementrecruiterdiv").append('Quarterly&nbsp;|&nbsp;');
									        } 
									        else if (zdatetodisplayid == 5)   
									        {
									        	$("#noofplacementrecruiterdiv").append('Yearly&nbsp;|&nbsp;');
									        }
									        else
									        {
									        	
									        } 									        
									                																   
									   },
									  error: function(barData)
									    {
										   $("#flash_placement_recruiter").hide();													   												   		
									   }											   
					             });
			
}

//Account
function drawnoplacement_account(zcompanyid,zdatetodisplayid) {
						
				//var id = $("#id").val();
				var zcompanyid = zcompanyid;
				var zdatetodisplayid = zdatetodisplayid;
				//alert(id);	
				
							$.ajax({
							type: "GET",
							url: "drawnoplacement_account.php",
							dataType: 'json',
							data: {companyid: zcompanyid,datetodisplayid: zdatetodisplayid},					
							cache: false,									
										beforeSend: function(barData) 
										{			   
											$("#flash_placement_account").show();
											$("#flash_placement_account").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading Chart...Please Wait.');				
										},															
									  success: function(barData)
									    {										   
										    $("#flash_placement_account").hide();
										    $("#morris-line-chart-account").empty();	
										   
										   Morris.Bar({   //now draw your graph
									                    element: 'morris-line-chart-account',
									                    data: barData,
									                    xkey: 'x',
												        ykeys: ['z'],
												        labels: ['Total No. of Placements per Account'],
												        labelColor: '#66CDAA',
												        hideHover: 'auto',
												        resize: true,
												        parseTime:false,
												        barColors: function (row, series, type) {
															    if (type === 'bar') {
															      var black = Math.ceil(255 * row.y / this.ymax);
															      return 'rgb(' + black + ',0,0)';
															    }
															    else {
															      return '#000';
															    }
															  }										
									                });	
									                
									        $("#noofplacementaccountdiv").empty();
									        if(zdatetodisplayid == 1)    
									        {									        	
									        	$("#noofplacementaccountdiv").append('Daily&nbsp;|&nbsp;');
									        }  
									        else if (zdatetodisplayid == 2)   
									        {
									        	$("#noofplacementaccountdiv").append('Weekly&nbsp;|&nbsp;');
									        }  
									        else if (zdatetodisplayid == 3)   
									        {
									        	$("#noofplacementaccountdiv").append('Monthly&nbsp;|&nbsp;');
									        } 
									        else if (zdatetodisplayid == 4)   
									        {
									        	$("#noofplacementaccountdiv").append('Quarterly&nbsp;|&nbsp;');
									        } 
									        else if (zdatetodisplayid == 5)   
									        {
									        	$("#noofplacementaccountdiv").append('Yearly&nbsp;|&nbsp;');
									        }
									        else
									        {
									        	
									        } 									        
									                																   
									   },
									  error: function(barData)
									    {
										   $("#flash_placement_account").hide();													   												   		
									   }											   
					             });
			
}

function drawnoplacement(zcompanyid,zdatetodisplayid) {
										
				//var id = $("#id").val();
				var zcompanyid = zcompanyid;
				var zdatetodisplayid = zdatetodisplayid;
				//alert(id);	
				
							$.ajax({
							type: "GET",
							url: "drawnoplacement.php",
							dataType: 'json',
							data: {companyid: zcompanyid,datetodisplayid: zdatetodisplayid},					
							cache: false,									
										beforeSend: function(barData) 
										{			   
											$("#flash_placement").show();
											$("#flash_placement").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading Chart...Please Wait.');				
										},															
									  success: function(barData)
									    {
										   $("#flash_placement").hide();
										    $("#morris-bar-chart").empty();	
										   
										   Morris.Bar({   //now draw your graph
									                    element: 'morris-bar-chart',
									                    data: barData,
									                    xkey: 'y',
												        ykeys: ['a'],
												        labels: ['No of Placement'],
												        hideHover: 'auto',
												        resize: true,
												        parseTime:false,
												        barColors: function (row, series, type) {
															    if (type === 'bar') {
															      var green = Math.ceil(255 * row.y / this.ymax);
															      return 'rgb(' + green + ',655,2)';
															    }
															    else {
															      return '#000';
															    }
															  }									
									                });	
									                
									        $("#noofplacementdiv").empty();
									        if(zdatetodisplayid == 1)    
									        {									        	
									        	$("#noofplacementdiv").append('Daily&nbsp;|&nbsp;');
									        }  
									        else if (zdatetodisplayid == 2)   
									        {
									        	$("#noofplacementdiv").append('Weekly&nbsp;|&nbsp;');
									        }  
									        else if (zdatetodisplayid == 3)   
									        {
									        	$("#noofplacementdiv").append('Monthly&nbsp;|&nbsp;');
									        } 
									        else if (zdatetodisplayid == 4)   
									        {
									        	$("#noofplacementdiv").append('Quarterly&nbsp;|&nbsp;');
									        } 
									        else if (zdatetodisplayid == 5)   
									        {
									        	$("#noofplacementdiv").append('Yearly&nbsp;|&nbsp;');
									        }
									        else
									        {
									        	
									        } 									        
									                																   
									   },
									  error: function(barData)
									    {
										   $("#flash_placement").hide();													   												   		
									   }											   
					             });
			
}	

function drawnoapplicants(zcompanyid,zdatetodisplayid) {
										
				//var id = $("#id").val();
				var zcompanyid = zcompanyid;
				var zdatetodisplayid = zdatetodisplayid;
				//alert(id);	
				
							$.ajax({
							type: "GET",
							url: "drawnoapplicants.php",
							dataType: 'json',
							data: {companyid: zcompanyid,datetodisplayid: zdatetodisplayid},					
							cache: false,									
										beforeSend: function(lineData) 
										{			   
											$("#flash_applicants").show();
											$("#flash_applicants").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...');				
										},															
									  success: function(lineData)
									    {
										    $("#flash_applicants").hide();
										    $("#morris-line-chart").empty();	
										   
										   Morris.Line({   //now draw your graph
									                    element: 'morris-line-chart',
									                    data: lineData,
									                    xkey: 'period',
												        ykeys: ['value'],
												        labels: ['Number of Applicants Registered'],
												        hideHover: 'auto',
												        pointSize: 5,
												        resize: true,
												        parseTime:false,
												        lineColors: ['#DC143C'],
       												    pointFillColors: ['#800000']									
									                });	
									                
									        $("#noofapplicantsdiv").empty();
									        if(zdatetodisplayid == 1)    
									        {									        	
									        	$("#noofapplicantsdiv").append('Daily&nbsp;|&nbsp;');
									        }  
									        else if (zdatetodisplayid == 2)   
									        {
									        	$("#noofapplicantsdiv").append('Weekly&nbsp;|&nbsp;');
									        }  
									        else if (zdatetodisplayid == 3)   
									        {
									        	$("#noofapplicantsdiv").append('Monthly&nbsp;|&nbsp;');
									        } 
									        else if (zdatetodisplayid == 4)   
									        {
									        	$("#noofapplicantsdiv").append('Quarterly&nbsp;|&nbsp;');
									        } 
									        else if (zdatetodisplayid == 5)   
									        {
									        	$("#noofapplicantsdiv").append('Yearly&nbsp;|&nbsp;');
									        }
									        else
									        {
									        	
									        } 									        
									                																   
									   },
									  error: function(lineData)
									    {
										   $("#flash_applicants").hide();													   												   		
									   }											   
					             });
			
}

//Placement VS JO
function drawnoplacement_jo(zcompanyid,zdatetodisplayid) {
										
				//var id = $("#id").val();
				var zcompanyid = zcompanyid;
				var zdatetodisplayid = zdatetodisplayid;
				//alert(id);	
				
							$.ajax({
							type: "GET",
							url: "drawnoplacement_jo.php",
							dataType: 'json',
							data: {companyid: zcompanyid,datetodisplayid: zdatetodisplayid},					
							cache: false,									
										beforeSend: function(lineData) 
										{			   
											$("#flash_placement_jo").show();
											$("#flash_placement_jo").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...');				
										},															
									  success: function(lineData)
									    {
										    $("#flash_placement_jo").hide();
										    $("#morris-line-chart-jo").empty();	
										   
										   Morris.Line({   //now draw your graph
									                    element: 'morris-line-chart-jo',
									                    data: lineData,
									                    xkey: 'x',
												        ykeys: ['z','y'],
												        labels: ['Placement','Total JO'],
												        hideHover: 'auto',
												        pointSize: 5,
												        resize: true,
												        parseTime:false,
												        lineColors: ['#008000','#1E90FF'],
       												    pointFillColors: ['#006400','#4169E1']									
									                });	
									                
									        $("#noofplacementjodiv").empty();
									        if(zdatetodisplayid == 1)    
									        {									        	
									        	$("#noofplacementjodiv").append('Daily&nbsp;|&nbsp;');
									        }  
									        else if (zdatetodisplayid == 2)   
									        {
									        	$("#noofplacementjodiv").append('Weekly&nbsp;|&nbsp;');
									        }  
									        else if (zdatetodisplayid == 3)   
									        {
									        	$("#noofplacementjodiv").append('Monthly&nbsp;|&nbsp;');
									        } 
									        else if (zdatetodisplayid == 4)   
									        {
									        	$("#noofplacementjodiv").append('Quarterly&nbsp;|&nbsp;');
									        } 
									        else if (zdatetodisplayid == 5)   
									        {
									        }
									        else
									        {
									        	
									        } 									        
									                																   
									   },
									  error: function(lineData)
									    {
										   $("#flash_placement_jo").hide();													   												   		
									   }											   
					             });
			
}



function drawsources(zcompanyid,zdatetodisplayid) {
										
				//var id = $("#id").val();
				var zcompanyid = zcompanyid;
				var zdatetodisplayid = zdatetodisplayid;
				//alert(id);	
				
							$.ajax({
							type: "GET",
							url: "drawsources.php",
							dataType: 'json',
							data: {companyid: zcompanyid,datetodisplayid: zdatetodisplayid},					
							cache: false,									
										beforeSend: function(donutData) 
										{			   
											$("#flash_sources").show();
											$("#flash_sources").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...');				
										},															
									  success: function(donutData)
									    {
										    $("#flash_sources").hide();
										    $("#morris-donut-chart").empty();	
										   
										   Morris.Donut({   //now draw your graph
									                    element: 'morris-donut-chart',
									                    data: donutData,									                    
												        hideHover: 'auto',												        
												        resize: true,
												        parseTime:false,
												        backgroundColor: '#FFFFE0',
														labelColor: '#2F4F4F',
														colors: [
														  	'#FFE4B5',
														  	'#DEB887',
														  	'#F4A460',
														  	'#CD853F',
														  	'#D2691E',
														  	'#A0522D',
														    '#8B4513'
														  ]								
									                });	
									                
									        $("#sourcesdiv").empty();
									        if(zdatetodisplayid == 1)    
									        {									        	
									        	$("#sourcesdiv").append('Last Year&nbsp;|&nbsp;');
									        }  
									        else if (zdatetodisplayid == 2)   
									        {
									        	$("#sourcesdiv").append('Last 2 Months&nbsp;|&nbsp;');
									        }  
									        else if (zdatetodisplayid == 3)   
									        {
									        	$("#sourcesdiv").append('Last Month&nbsp;|&nbsp;');
									        } 
									        else if (zdatetodisplayid == 4)   
									        {
									        	$("#sourcesdiv").append('This Month&nbsp;|&nbsp;');
									        } 
									        else if (zdatetodisplayid == 5)   
									        {
									        	$("#sourcesdiv").append('This Year&nbsp;|&nbsp;');
									        }
									        else
									        {
									        	
									        } 									        
									                																   
									   },
									  error: function(donutData)
									    {
										   $("#flash_sources").hide();													   												   		
									   }											   
					             });
			
}
//Referral
function drawreferral(zcompanyid,zdatetodisplayid) {
										
				//var id = $("#id").val();
				var zcompanyid = zcompanyid;
				var zdatetodisplayid = zdatetodisplayid;
				//alert(id);	
				
							$.ajax({
							type: "GET",
							url: "drawreferral.php",
							dataType: 'json',
							data: {companyid: zcompanyid, datetodisplayid: zdatetodisplayid},					
							cache: false,									
										beforeSend: function(donutData1) 
										{			   
											$("#flash_referral").show();
											$("#flash_referral").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...');				
										},															
									  success: function(donutData1)
									    {	
										    $("#flash_referral").hide();
										    $("#morris-donut-chart-referral").empty();
										    										   
										   Morris.Donut({   //now draw your graph
									                    element: 'morris-donut-chart-referral',
									                    data: donutData1,									                    
												        hideHover: 'auto',												        
												        resize: true,
												        redraw: true,
												        parseTime:false,
												        backgroundColor: '#FFFFE0',
														labelColor: '#2F4F4F',
														colors: [
														  	'#FADEEE',
														  	'#F5B8DA',
														  	'#F59DCF',
														  	'#F285C3',
														  	'#F268B6',
														  	'#F54EAD',
														    '#F21190',
														    '#D660A3',
														    '#CF4492',
														    '#BD488A'
														  ]								
									                });	
									                
									        $("#referraldiv").empty();
									        if(zdatetodisplayid == 1)    
									        {									        	
									        	$("#referraldiv").append('Last Year&nbsp;|&nbsp;');
									        }  
									        else if (zdatetodisplayid == 2)   
									        {
									        	$("#referraldiv").append('Last 2 Months&nbsp;|&nbsp;');
									        }  
									        else if (zdatetodisplayid == 3)   
									        {
									        	$("#referraldiv").append('Last Month&nbsp;|&nbsp;');
									        } 
									        else if (zdatetodisplayid == 4)   
									        {
									        	$("#referraldiv").append('This Month&nbsp;|&nbsp;');
									        } 
									        else if (zdatetodisplayid == 5)   
									        {
									        	$("#referraldiv").append('This Year&nbsp;|&nbsp;');
									        }
									        else
									        {
									        	
									        } 									        
									                																   
									   },
									  error: function(donutData1)
									    {
										   $("#flash_referral").hide();													   												   		
									   }											   
					             });
			
}


function drawnsourcingmetric(zcompanyid,zdatetodisplayid) {
										
				//var id = $("#id").val();
				var zcompanyid = zcompanyid;
				var zdatetodisplayid = zdatetodisplayid;
				//alert(id);	
				
							$.ajax({
							type: "GET",
							url: "drawnsourcingmetric.php",
							dataType: 'json',
							data: {companyid: zcompanyid,datetodisplayid: zdatetodisplayid},					
							cache: false,									
										beforeSend: function(areaData) 
										{			   
											$("#flash_sourcingmetric").show();
											$("#flash_sourcingmetric").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...');				
										},															
									  success: function(areaData)
									    {
										   $("#flash_sourcingmetric").hide();
										    $("#morris-area-chart").empty();	
										   
										   Morris.Area({   //now draw your graph
									                    element: 'morris-area-chart',
									                    data: areaData,
									                    xkey: 'y',
												        ykeys: ['a'],
												        labels: ['Sourcing Total'],
												        hideHover: 'auto',
												        resize: true,
												        pointSize: 5,
												        parseTime:false,
												        lineColors:['#FF00FF'],
												        pointFillColors: ['#9400D3'],
												        labelColor: '#4B0082'									
									                });	
									                
									        $("#sourcingmetricdiv").empty();
									        if(zdatetodisplayid == 1)    
									        {
									        	
									        	$("#sourcingmetricdiv").append('Daily&nbsp;|&nbsp;');
									        }  
									        else if (zdatetodisplayid == 2)   
									        {
									        	$("#sourcingmetricdiv").append('Weekly&nbsp;|&nbsp;');
									        }  
									        else if (zdatetodisplayid == 3)   
									        {
									        	$("#sourcingmetricdiv").append('Monthly&nbsp;|&nbsp;');
									        } 
									        else if (zdatetodisplayid == 4)   
									        {
									        	$("#sourcingmetricdiv").append('Quarterly&nbsp;|&nbsp;');
									        } 
									        else if (zdatetodisplayid == 5)   
									        {
									        	$("#sourcingmetricdiv").append('Yearly&nbsp;|&nbsp;');
									        }
									        else
									        {
									        	
									        } 									        
									                																   
									   },
									  error: function(barData)
									    {
										   $("#flash_sourcingmetric").hide();													   												   		
									   }											   
					             });
			
}

$(document).ready(function() {
	
	var xy_companyid = $("#xy_companyid").val();
		
	    //char default values(Monthly)
    	drawnoplacement(xy_companyid ,1); 
    	drawnoapplicants(xy_companyid ,1);  
    	drawsources(xy_companyid ,4);
    	drawnsourcingmetric(xy_companyid ,1); 
    	drawnoplacement_position(xy_companyid,1);
		drawnoplacement_recruiter(xy_companyid,3);
		drawnoplacement_account(xy_companyid,3);
		drawnoplacement_jo(xy_companyid,3);
		drawreferral(xy_companyid,4);
		
		
		$('#accordion').on('show.bs.collapse', function () {
		     var openAnchor = $(this).find('a[data-toggle=collapse]:not(.collapsed)');

		    //extract the href
		    var sectionID = openAnchor.attr('href');
		    console.log(sectionID);
		    //alert(sectionID);
		    if(sectionID == "#collapseTwo")
		    {
		    	//drawnoplacement_position(xy_companyid,1);
		    	$("a#placementposition_daily" ).trigger( "click" );
		    }
		    else if(sectionID == '#collapseFour')
		    {
		    	//drawnoplacement_recruiter(xy_companyid,3);
		    	$("a#placementrecruiter_monthly" ).trigger( "click" );
		    }
		    else if(sectionID == '#collapseFive')
		    {
		    	//drawnoplacement_account(xy_companyid,3);
		    	$("a#placementaccount_monthly" ).trigger( "click" );
		    }
		    else if(sectionID == '#collapseSix')
		    {
		    	//drawnoplacement_jo(xy_companyid,3);
		    	$("a#placementjo_monthly" ).trigger( "click" );
		    }
		    else if(sectionID == '#collapseSeven')
		    {
		    	//drawreferral(xy_companyid,4);
		    	$("a#referral_thismonth" ).trigger( "click" );
		    }	
		    else
		    {
		    	
		    }	    
		});

	
	//----------------------Number of Placements per Position-------------------------------------
		$("#placementposition_daily").click(function (e) {
			e.preventDefault();
			drawnoplacement_position(xy_companyid,1); 						  		
		});	  
		
		$("#placementposition_weekly").click(function (e) {
			e.preventDefault();
			drawnoplacement_position(xy_companyid,2); 						  		
		});	 
		
		$("#placementposition_monthly").click(function (e) {
			e.preventDefault();
			drawnoplacement_position(xy_companyid,3); 						  		
		});	  
		
		$("#placementposition_quarterly").click(function (e) {
			e.preventDefault();
			drawnoplacement_position(xy_companyid,4); 						  		
		});	
		$("#placementposition_yearly").click(function (e) {
			e.preventDefault();
			drawnoplacement_position(xy_companyid,5); 						  		
		});
	//----------------------Number of Placements per Recruiter-------------------------------------
		$("#placementrecruiter_daily").click(function (e) {
			e.preventDefault();
			drawnoplacement_recruiter(xy_companyid,1); 						  		
		});	  
		
		$("#placementrecruiter_weekly").click(function (e) {
			e.preventDefault();
			drawnoplacement_recruiter(xy_companyid,2); 						  		
		});	 
		
		$("#placementrecruiter_monthly").click(function (e) {
			e.preventDefault();
			drawnoplacement_recruiter(xy_companyid,3); 						  		
		});	  
		
		$("#placementrecruiter_quarterly").click(function (e) {
			e.preventDefault();
			drawnoplacement_recruiter(xy_companyid,4); 						  		
		});	
		$("#placementrecruiter_yearly").click(function (e) {
			e.preventDefault();
			drawnoplacement_recruiter(xy_companyid,5); 						  		
		});	
		//----------------------Number of Placements per Account-------------------------------------
		$("#placementaccount_daily").click(function (e) {
			e.preventDefault();
			drawnoplacement_account(xy_companyid,1); 						  		
		});	  
		
		$("#placementaccount_weekly").click(function (e) {
			e.preventDefault();
			drawnoplacement_account(xy_companyid,2); 						  		
		});	 
		
		$("#placementaccount_monthly").click(function (e) {
			e.preventDefault();
			drawnoplacement_account(xy_companyid,3); 						  		
		});	  
		
		$("#placementaccount_quarterly").click(function (e) {
			e.preventDefault();
			drawnoplacement_account(xy_companyid,4); 						  		
		});	
		$("#placementaccount_yearly").click(function (e) {
			e.preventDefault();
			drawnoplacement_account(xy_companyid,5); 						  		
		});	
	//----------------------Number of Placements vs JO-------------------------------------
		$("#placementjo_daily").click(function (e) {
			e.preventDefault();
			drawnoplacement_jo(xy_companyid,1); 						  		
		});	  
		
		$("#placementjo_weekly").click(function (e) {
			e.preventDefault();
			drawnoplacement_jo(xy_companyid,2); 						  		
		});	 
		
		$("#placementjo_monthly").click(function (e) {
			e.preventDefault();
			drawnoplacement_jo(xy_companyid,3); 						  		
		});	  
		
		$("#placementjo_quarterly").click(function (e) {
			e.preventDefault();
			drawnoplacement_jo(xy_companyid,4); 						  		
		});	
		$("#placementjo_yearly").click(function (e) {
			e.preventDefault();
			drawnoplacement_jo(xy_companyid,5); 						  		
		});	
	//----------------------Number of Placements-------------------------------------
		$("#placement_daily").click(function (e) {
			e.preventDefault();
			drawnoplacement(xy_companyid,1); 						  		
		});	  
		
		$("#placement_weekly").click(function (e) {
			e.preventDefault();
			drawnoplacement(xy_companyid,2); 						  		
		});	 
		
		$("#placement_monthly").click(function (e) {
			e.preventDefault();
			drawnoplacement(xy_companyid,3); 						  		
		});	  
		
		$("#placement_quarterly").click(function (e) {
			e.preventDefault();
			drawnoplacement(xy_companyid,4); 						  		
		});	
		$("#placement_yearly").click(function (e) {
			e.preventDefault();
			drawnoplacement(xy_companyid,5); 						  		
		});	
	//----------------------Number of Applicants-------------------------------------
		$("#applicants_daily").click(function (e) {
			e.preventDefault();
			drawnoapplicants(xy_companyid,1); 						  		
		});	  
		
		$("#applicants_weekly").click(function (e) {
			e.preventDefault();
			drawnoapplicants(xy_companyid,2); 						  		
		});	 
		
		$("#applicants_monthly").click(function (e) {
			e.preventDefault();
			drawnoapplicants(xy_companyid,3); 						  		
		});	  
		
		$("#applicants_quarterly").click(function (e) {
			e.preventDefault();
			drawnoapplicants(xy_companyid,4); 						  		
		});	
		$("#applicants_yearly").click(function (e) {
			e.preventDefault();
			drawnoapplicants(xy_companyid,5); 						  		
		});			
	//--------------------------Candidate Sources---------------------------------
		$("#sources_lastyear").click(function (e) {
			e.preventDefault();
			drawsources(xy_companyid,1); 						  		
		});	  
		
		$("#sources_last2months").click(function (e) {
			e.preventDefault();
			drawsources(xy_companyid,2); 						  		
		});	 
		
		$("#sources_lastmonth").click(function (e) {
			e.preventDefault();
			drawsources(xy_companyid,3); 						  		
		});	  
		
		$("#sources_thismonth").click(function (e) {
			e.preventDefault();
			drawsources(xy_companyid,4); 						  		
		});	
		$("#sources_thisyear").click(function (e) {
			e.preventDefault();
			drawsources(xy_companyid,5); 						  		
		});
	//--------------------------Referrals---------------------------------
		$("#referral_lastyear").click(function (e) {
			e.preventDefault();
			drawreferral(xy_companyid,1); 						  		
		});	  
		
		$("#referral_last2months").click(function (e) {
			e.preventDefault();
			drawreferral(xy_companyid,2); 						  		
		});	 
		
		$("#referral_lastmonth").click(function (e) {
			e.preventDefault();
			drawreferral(xy_companyid,3); 						  		
		});	  
		
		$("#referral_thismonth").click(function (e) {
			e.preventDefault();
			drawreferral(xy_companyid,4); 						  		
		});	
		$("#referral_thisyear").click(function (e) {
			e.preventDefault();
			drawreferral(xy_companyid,5); 						  		
		});
	//--------------------------Sourcing Metric-----------------------------
		$("#sourcingmetric_daily").click(function (e) {
			e.preventDefault();
			drawnsourcingmetric(xy_companyid,1); 						  		
		});	  
		
		$("#sourcingmetric_weekly").click(function (e) {
			e.preventDefault();
			drawnsourcingmetric(xy_companyid,2); 						  		
		});	 
		
		$("#sourcingmetric_monthly").click(function (e) {
			e.preventDefault();
			drawnsourcingmetric(xy_companyid,3); 						  		
		});	  
		
		$("#sourcingmetric_quarterly").click(function (e) {
			e.preventDefault();
			drawnsourcingmetric(xy_companyid,4); 						  		
		});	
		$("#sourcingmetric_yearly").click(function (e) {
			e.preventDefault();
			drawnsourcingmetric(xy_companyid,5); 						  		
		})

	    		    
});