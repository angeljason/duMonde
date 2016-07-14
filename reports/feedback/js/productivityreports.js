function getexporttoxls() { 
	$("#insert_search").btechco_excelexport({
                containerid: "insert_search", datatype: $datatype.Table
            });
	} 
	
$(document).ready(function() {
	//searchbtnx
		$("#searchbtnx").click(function(){
			//alert('sample');
		        
						var myisoyear = $("#myisoyear").val();
						var mymonthnofromyear = $("#mymonthnofromyear").val();
						
						var myrecruiterid = $("#myrecruiterid").val();
						var myaccountsid = $("#myaccountsid").val();
						
						var mycompanyid = $("#mycompanyid").val();		
						var o =$("#o").val();
						var t =$("#t").val();
																												
						var dataString = 'myisoyear='+ myisoyear+'&mymonthnofromyear='+ mymonthnofromyear
						+'&myrecruiterid='+ myrecruiterid+'&myaccountsid='+ myaccountsid+'&mycompanyid='+ mycompanyid
						+'&o='+ o+'&t='+ t;									
						
						//alert(dataString);
						
									$.ajax({
									type: "GET",
									url: "searchproductivityreport.php",
									data: dataString,
									cache: false,																							
												beforeSend: function(html) 
												{			   													
													$("#flash").show();
													$("#flash").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading Data...Please Wait.');
												},															
											  success: function(html)
											    {
												    $("#insert_search").show();
												    $('#insert_search').empty();
												    $("#insert_search").append(html);
												    $("#flash").hide();	
												    
												    //scrollToID('#' + insert_search, 750);																	   																   
											   },
											  error: function(html)
											    {
												   $("#insert_search").show();
												   $('#insert_search').empty();
												   $("#insert_search").append(html);	
												   $("#flash").hide();												   												   		
											   }												   
							             });        
		        
		        
		    });	
		    
		$("#searchbtn2x").click(function(){
			//alert('sample');
		        
						var myisoyear = $("#myisoyear").val();
						var mymonthnofromyear = $("#mymonthnofromyear").val();
						
						var myrecruiterid = $("#myrecruiterid").val();
						var myaccountsid = $("#myaccountsid").val();
						
						var mycompanyid = $("#mycompanyid").val();		
						var o =$("#o").val();
						var t =$("#t").val();
																												
						var dataString = 'myisoyear='+ myisoyear+'&mymonthnofromyear='+ mymonthnofromyear
						+'&myrecruiterid='+ myrecruiterid+'&myaccountsid='+ myaccountsid+'&mycompanyid='+ mycompanyid
						+'&o='+ o+'&t='+ t;									
						
						//alert(dataString);
						
									$.ajax({
									type: "GET",
									url: "searchmonthlyproductivityreport.php",
									data: dataString,
									cache: false,																							
												beforeSend: function(html) 
												{			   													
													$("#flash").show();
													$("#flash").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading Data...Please Wait.');
												},															
											  success: function(html)
											    {
												    $("#insert_search").show();
												    $('#insert_search').empty();
												    $("#insert_search").append(html);
												    $("#flash").hide();	
												    
												    //scrollToID('#' + insert_search, 750);																	   																   
											   },
											  error: function(html)
											    {
												   $("#insert_search").show();
												   $('#insert_search').empty();
												   $("#insert_search").append(html);	
												   $("#flash").hide();												   												   		
											   }												   
							             });        
		        
		        
		    });			    
	
});	
