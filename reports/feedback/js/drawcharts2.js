function drawplacement_vs_joborders() {	
				
							$.ajax({
							type: "GET",
							url: "drawplacement_vs_joborders.php",
							dataType: 'json',												
							cache: false,																																		
									  success: function(lineData2)
									    {										   
										   emptydivs();											   
										   Morris.Bar({   //now draw your graph
									                    element: 'morris-bar-chart',
									                    data: lineData2,
									                    xkey: 'x',
												        ykeys: ['z','y'],
												        labels: ['Placement','Total JO'],
												        labelColor: '#66CDAA',
												        hideHover: 'auto',
												        resize: true,
												        parseTime:false,
												        barColors: ['#000000','#C0C0C0']									
									                });	
									                
									        Morris.Area({   //now draw your graph
									                    element: 'morris-area-chart',
									                    data: lineData2,
									                    xkey: 'x',
												        ykeys: ['z','y'],
												        labels: ['Placement','Total JO'],
												        hideHover: 'auto',
												        resize: true,
												        pointSize: 8,
												        parseTime:false,
												        lineColors:['#228B22','#8A2BE2'],
												        pointFillColors: ['#006400','#4B0082'],
												        labelColor: '#C71585'									
									                }); 
									                
									       Morris.Line({   //now draw your graph
									                    element: 'morris-line-chart',
									                    data: lineData2,
									                    xkey: 'x',
												        ykeys: ['z','y'],
												        labels: ['Placement','Total JO'],
												        hideHover: 'auto',
												        pointSize: 8,
												        resize: true,
												        parseTime:false,
												        lineColors: ['#A0522D','#1E90FF'],
       												    pointFillColors: ['#8B4513','#4682B4']									
									                });	
									                																   
									   }											   
					             });
			
}
function drawreferral() {	
				
							$.ajax({
							type: "GET",
							url: "drawreferral.php",
							dataType: 'json',												
							cache: false,																																		
									  success: function(lineData2)
									    {										   
										   emptydivs();											   
										   Morris.Bar({   //now draw your graph
									                    element: 'morris-bar-chart',
									                    data: lineData2,
									                    xkey: 'x',
												        ykeys: ['z'],
												        labels: ['Referral'],
												        labelColor: '#66CDAA',
												        hideHover: 'auto',
												        resize: true,
												        parseTime:false,
												        barColors: function (row, series, type) {
															    if (type === 'bar') {
															      var yellow = Math.ceil(255 * row.y / this.ymax);
															      return 'rgb(' + yellow + ',255,0)';
															    }
															    else {
															      return '#000';
															    }
															  }										
									                });	
									       Morris.Line({   //now draw your graph
									                    element: 'morris-line-chart',
									                    data: lineData2,
									                    xkey: 'x',
												        ykeys: ['z'],
												        labels: ['Referral'],
												        hideHover: 'auto',
												        pointSize: 8,
												        resize: true,
												        parseTime:false,
												        lineColors: ['#696969'],
       												    pointFillColors: ['#000000']									
									                });	
									                
									        Morris.Area({   //now draw your graph
									                    element: 'morris-area-chart',
									                    data: lineData2,
									                    xkey: 'x',
												        ykeys: ['z'],
												        labels: ['Referral'],
												        hideHover: 'auto',
												        resize: true,
												        pointSize: 8,
												        parseTime:false,
												        lineColors:['#DA70D6'],
												        pointFillColors: ['#8A2BE2'],
												        labelColor: '#4B0082'									
									                });         									        
									                																   
									   }											   
					             });
			
}
function drawnoapplicants_secondchoice() {	
				
							$.ajax({
							type: "GET",
							url: "drawnoapplicants_secondchoice.php",
							dataType: 'json',												
							cache: false,																																		
									  success: function(lineData2)
									    {										   
										   emptydivs();											   
										   Morris.Bar({   //now draw your graph
									                    element: 'morris-bar-chart',
									                    data: lineData2,
									                    xkey: 'x',
												        ykeys: ['z'],
												        labels: ['Number of Registered Applicants per Position - Second Choice'],
												        labelColor: '#66CDAA',
												        hideHover: 'auto',
												        resize: true,
												        parseTime:false,
												        barColors: function (row, series, type) {
															    if (type === 'bar') {
															      var cyan = Math.ceil(255 * row.y / this.ymax);
															      return 'rgb(' + cyan + ',255,0)';
															    }
															    else {
															      return '#000';
															    }
															  }										
									                });	
									       Morris.Line({   //now draw your graph
									                    element: 'morris-line-chart',
									                    data: lineData2,
									                    xkey: 'x',
												        ykeys: ['z'],
												        labels: ['Number of Registered Applicants per Position - Second Choice'],
												        hideHover: 'auto',
												        pointSize: 8,
												        resize: true,
												        parseTime:false,
												        lineColors: ['#CD853F'],
       												    pointFillColors: ['#D2691E']									
									                });	
									                
									        Morris.Area({   //now draw your graph
									                    element: 'morris-area-chart',
									                    data: lineData2,
									                    xkey: 'x',
												        ykeys: ['z'],
												        labels: ['Number of Registered Applicants per Position - Second Choice'],
												        hideHover: 'auto',
												        resize: true,
												        pointSize: 8,
												        parseTime:false,
												        lineColors:['#FF00FF'],
												        pointFillColors: ['#9400D3'],
												        labelColor: '#4B0082'									
									                });         									        
									                																   
									   }											   
					             });
			
}
function drawnoapplicants_firstchoice() {	
				
							$.ajax({
							type: "GET",
							url: "drawnoapplicants_firstchoice.php",
							dataType: 'json',												
							cache: false,																																		
									  success: function(lineData2)
									    {										   
										   emptydivs();											   
										   Morris.Bar({   //now draw your graph
									                    element: 'morris-bar-chart',
									                    data: lineData2,
									                    xkey: 'x',
												        ykeys: ['z'],
												        labels: ['Number of Registered Applicants per Position - First Choice'],
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
									       Morris.Line({   //now draw your graph
									                    element: 'morris-line-chart',
									                    data: lineData2,
									                    xkey: 'x',
												        ykeys: ['z'],
												        labels: ['Number of Registered Applicants per Position - First Choice'],
												        hideHover: 'auto',
												        pointSize: 8,
												        resize: true,
												        parseTime:false,
												        lineColors: ['#48D1CC'],
       												    pointFillColors: ['#008080']									
									                });	
									                
									        Morris.Area({   //now draw your graph
									                    element: 'morris-area-chart',
									                    data: lineData2,
									                    xkey: 'x',
												        ykeys: ['z'],
												        labels: ['Number of Registered Applicants per Position - First Choice'],
												        hideHover: 'auto',
												        resize: true,
												        pointSize: 8,
												        parseTime:false,
												        lineColors:['#FF00FF'],
												        pointFillColors: ['#FF4500'],
												        labelColor: '#FF7F50'									
									                });         									        
									                																   
									   }											   
					             });
			
}
function drawnoplacement_per_recruiter() {	
				
							$.ajax({
							type: "GET",
							url: "drawnoplacement_per_recruiter.php",
							dataType: 'json',												
							cache: false,																																		
									  success: function(lineData2)
									    {										   
										   emptydivs();											   
										   Morris.Bar({   //now draw your graph
									                    element: 'morris-bar-chart',
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
															      var black = Math.ceil(255 * row.y / this.ymax);
															      return 'rgb(' + black + ',0,0)';
															    }
															    else {
															      return '#000';
															    }
															  }										
									                });	
									       Morris.Line({   //now draw your graph
									                    element: 'morris-line-chart',
									                    data: lineData2,
									                    xkey: 'x',
												        ykeys: ['z'],
												        labels: ['Total No. of Placements per Position'],
												        hideHover: 'auto',
												        pointSize: 8,
												        resize: true,
												        parseTime:false,
												        lineColors: ['#D2691E'],
       												    pointFillColors: ['#A0522D']									
									                });	
									                
									        Morris.Area({   //now draw your graph
									                    element: 'morris-area-chart',
									                    data: lineData2,
									                    xkey: 'x',
												        ykeys: ['z'],
												        labels: ['Total No. of Placements per Position'],
												        hideHover: 'auto',
												        resize: true,
												        pointSize: 8,
												        parseTime:false,
												        lineColors:['#808080'],
												        pointFillColors: ['#8B0000'],
												        labelColor: '#4B0082'									
									                });         									        
									                																   
									   }											   
					             });
			
}
function drawnoplacement_per_account() {	
				
							$.ajax({
							type: "GET",
							url: "drawnoplacement_per_account.php",
							dataType: 'json',												
							cache: false,																																		
									  success: function(lineData2)
									    {										   
										   emptydivs();											   
										   Morris.Bar({   //now draw your graph
									                    element: 'morris-bar-chart',
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
															      var green = Math.ceil(255 * row.y / this.ymax);
															      return 'rgb(' + green + ',320,0)';
															    }
															    else {
															      return '#000';
															    }
															  }										
									                });	
									       Morris.Line({   //now draw your graph
									                    element: 'morris-line-chart',
									                    data: lineData2,
									                    xkey: 'x',
												        ykeys: ['z'],
												        labels: ['Total No. of Placements per Position'],
												        hideHover: 'auto',
												        pointSize: 8,
												        resize: true,
												        parseTime:false,
												        lineColors: ['#32CD32'],
       												    pointFillColors: ['#006400']									
									                });	
									                
									        Morris.Area({   //now draw your graph
									                    element: 'morris-area-chart',
									                    data: lineData2,
									                    xkey: 'x',
												        ykeys: ['z'],
												        labels: ['Total No. of Placements per Position'],
												        hideHover: 'auto',
												        resize: true,
												        pointSize: 8,
												        parseTime:false,
												        lineColors:['#2E8B57'],
												        pointFillColors: ['#006400'],
												        labelColor: '#008000'									
									                });         									        
									                																   
									   }											   
					             });
			
}
function drawnoplacement_position() {	
				
							$.ajax({
							type: "GET",
							url: "drawnoplacement_position.php",
							dataType: 'json',												
							cache: false,																																		
									  success: function(lineData2)
									    {										   
										   emptydivs();											   
										   Morris.Bar({   //now draw your graph
									                    element: 'morris-bar-chart',
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
															      var fuchsia = Math.ceil(255 * row.y / this.ymax);
															      return 'rgb(' + fuchsia + ',0,255)';
															    }
															    else {
															      return '#000';
															    }
															  }										
									                });	
									       Morris.Line({   //now draw your graph
									                    element: 'morris-line-chart',
									                    data: lineData2,
									                    xkey: 'x',
												        ykeys: ['z'],
												        labels: ['Total No. of Placements per Position'],
												        hideHover: 'auto',
												        pointSize: 8,
												        resize: true,
												        parseTime:false,
												        lineColors: ['#808080'],
       												    pointFillColors: ['#696969']									
									                });	
									                
									        Morris.Area({   //now draw your graph
									                    element: 'morris-area-chart',
									                    data: lineData2,
									                    xkey: 'x',
												        ykeys: ['z'],
												        labels: ['Total No. of Placements per Position'],
												        hideHover: 'auto',
												        resize: true,
												        pointSize: 8,
												        parseTime:false,
												        lineColors:['#D4AF37'],
												        pointFillColors: ['#9400D3'],
												        labelColor: '#996515'									
									                });         									        
									                																   
									   }											   
					             });
			
}

function drawnoplacement() {

				//var mydata = JSON.parse(posts);
			    //alert(mydata[0].reporttypeid);
			    //alert(mydata[0].mycompanyid);	
												    //$.getJSON("results.json", function(data) {
													//console.log(data);
													    
													    // data is a JavaScript object now. Handle it as such
														//alert(data);
														//alert(data.mycompanyid);
														//thedata = JSON.stringify(data);
														//alert(JSON.stringify(person, null, 4));					
														//alert(JSON.stringify(data, null, 4));
														
														
														//thedata =JSON.stringify(data, null, 4);
														//alert(thedata);
													//});
				
							$.ajax({
							type: "post",
							url: "drawnoplacement.php",
							dataType: 'json',																	
							cache: false,																																		
									  success: function(barData)
									    {
										   emptydivs();
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
															      var blue = Math.ceil(255 * row.y / this.ymax);
															      return 'rgb(' + blue + ',0,255)';
															    }
															    else {
															      return '#000';
															    }
															  }									
									                });	
									                
									        Morris.Line({   //now draw your graph
									                    element: 'morris-line-chart',
									                    data: barData,
									                    xkey: 'y',
												        ykeys: ['a'],
												        labels: ['No of Placement'],
												        hideHover: 'auto',
												        pointSize: 8,
												        resize: true,
												        parseTime:false,
												        lineColors: ['#DC143C'],
       												    pointFillColors: ['#800000']									
									                });	
									                
									        Morris.Area({   //now draw your graph
									                    element: 'morris-area-chart',
									                    data: barData,
									                    xkey: 'y',
												        ykeys: ['a'],
												        labels: ['No of Placement'],
												        hideHover: 'auto',
												        resize: true,
												        pointSize: 8,
												        parseTime:false,
												        lineColors:['#FF00FF'],
												        pointFillColors: ['#9400D3'],
												        labelColor: '#4B0082'									
									                });	         
             
            																   
									   }											   
					             });
			
}
function drawnoapplicants() {

							$.ajax({
							type: "GET",
							url: "drawnoapplicants.php",
							dataType: 'json',				
							cache: false,																																		
									  success: function(lineData)
									    {
										   emptydivs();											   
										   Morris.Bar({   //now draw your graph
									                    element: 'morris-bar-chart',
									                    data: lineData,
									                    xkey: 'period',
												        ykeys: ['value'],
												        labels: ['Number of Applicants Registered'],
												        hideHover: 'auto',
												        resize: true,
												        parseTime:false,
												        barColors: function (row, series, type) {
															    if (type === 'bar') {
															      var red = Math.ceil(255 * row.y / this.ymax);
															      return 'rgb(' + red + ',0,0)';
															    }
															    else {
															      return '#000';
															    }
															  }									
									                });	
										   										   
										   Morris.Line({   //now draw your graph
									                    element: 'morris-line-chart',
									                    data: lineData,
									                    xkey: 'period',
												        ykeys: ['value'],
												        labels: ['Number of Applicants Registered'],
												        hideHover: 'auto',
												        pointSize: 8,
												        resize: true,
												        parseTime:false,
												        lineColors: ['#800000'],
       												    pointFillColors: ['#DC143C']									
									                });	 
									                
									      Morris.Area({   //now draw your graph
									                    element: 'morris-area-chart',
									                    data: lineData,
									                    xkey: 'period',
												        ykeys: ['value'],
												        labels: ['Number of Applicants Registered'],
												        hideHover: 'auto',
												        resize: true,
												        pointSize: 8,
												        parseTime:false,
												        lineColors:['#20B2AA'],
												        pointFillColors: ['#008B8B'],
												        labelColor: '#008080'									
									                });	                   																   
									   }											   
					             });
			
}

function drawsources() {
							$.ajax({
							type: "GET",
							url: "drawsources.php",
							dataType: 'json',					
							cache: false,									
																									
									  success: function(lineData)
									    {
										   emptydivs();											   
										   Morris.Bar({   //now draw your graph
									                    element: 'morris-bar-chart',
									                    data: lineData,
									                    xkey: 'label',
												        ykeys: ['value'],
												        labels: ['Value:'],
												        hideHover: 'auto',
												        resize: true,
												        parseTime:false,
												        barColors: function (row, series, type) {
															    if (type === 'bar') {
															      var red = Math.ceil(255 * row.y / this.ymax);
															      return 'rgb(' + red + ',0,2)';
															    }
															    else {
															      return '#000';
															    }
															  }									
									                });	
										   										   
										   Morris.Line({   //now draw your graph
									                    element: 'morris-line-chart',
									                    data: lineData,
									                    xkey: 'label',
												        ykeys: ['value'],
												        labels: ['Value:'],
												        hideHover: 'auto',
												        pointSize: 8,
												        resize: true,
												        parseTime:false,
												        lineColors: ['#FF6347'],
       												    pointFillColors: ['#FF4500']									
									                });	 
									                
									      Morris.Area({   //now draw your graph
									                    element: 'morris-area-chart',
									                    data: lineData,
									                    xkey: 'label',
												        ykeys: ['value'],
												        labels: ['Value:'],
												        hideHover: 'auto',
												        resize: true,
												        pointSize: 8,
												        parseTime:false,
												        lineColors:['#F4A460'],
												        pointFillColors: ['#8B4513'],
												        labelColor: '#4B0082'									
									                });
									       								        
									                																   
									   }											   
					             });
			
}	

function drawnsourcingmetric() {

							$.ajax({
							type: "GET",
							url: "drawnsourcingmetric.php",
							dataType: 'json',				
							cache: false,																																		
									  success: function(areaData)
									    {
										  emptydivs();	
										  Morris.Bar({   //now draw your graph
									                    element: 'morris-bar-chart',
									                    data: areaData,
									                    xkey: 'y',
												        ykeys: ['a'],
												        labels: ['Sourcing Total'],
												        hideHover: 'auto',
												        resize: true,
												        parseTime:false,
												        barColors: function (row, series, type) {
															    if (type === 'bar') {
															      var yellow = Math.ceil(255 * row.y / this.ymax);
															      return 'rgb(' + yellow + ',255,0)';
															    }
															    else {
															      return '#000';
															    }
															  }									
									                }); 
										  Morris.Line({   //now draw your graph
									                    element: 'morris-line-chart',
									                    data: areaData,
									                    xkey: 'y',
												        ykeys: ['a'],
												        labels: ['Sourcing Total'],
												        hideHover: 'auto',
												        pointSize: 8,
												        resize: true,
												        parseTime:false,
												        lineColors: ['#DB7093'],
       												    pointFillColors: ['#C71585']									
									                });	
									                
										   Morris.Area({   //now draw your graph
									                    element: 'morris-area-chart',
									                    data: areaData,
									                    xkey: 'y',
												        ykeys: ['a'],
												        labels: ['Sourcing Total'],
												        hideHover: 'auto',
												        resize: true,
												        pointSize: 8,
												        parseTime:false,
												        lineColors:['#696969'],
												        pointFillColors: ['#000000'],
												        labelColor: '#000000'									
									                });	

									                																   
									   }											   
					             });
			
}
function emptydivs(){
					    $("#morris-bar-chart").empty();	
					    $("#morris-line-chart-position").empty();
					    $("#morris-line-chart").empty();
					    $("#morris-donut-chart").empty();
					    $("#morris-area-chart").empty();
					    
					    $("#barchart").show();
					    $("#linechart").show();
					    $("#areachart").show();
				}
$(document).ready(function() {
	
	$("#barchart").hide();
    $("#linechart").hide();
    $("#areachart").hide();

		    
});