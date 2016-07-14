function getexporttoxls23() { 

           $('#example').tableExport({type:'excel',escape:'false'});
	} 
function shownewapplicants() {

				
							$.ajax({
							type: "GET",
							url: "shownewapplicants.php",
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modal").show();
										   $('#insert_modal').empty();
										   $("#insert_modal").append(html);
																	   
									   },
									  error: function(html)
									    {
										   $("#insert_modal").show();
										   $('#insert_modal').empty();
										   $("#insert_modal").append(html);	
										   $("#insert_modal").hide();											   												   		
									   }											   
					             });

}	

function showforwardedapplicants() {

				
							$.ajax({
							type: "GET",
							url: "showforwardedapplicants.php",
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modal2").show();
										   $('#insert_modal2').empty();
										   $("#insert_modal2").append(html);
																	   
									   },
									  error: function(html)
									    {
										   $("#insert_modal2").show();
										   $('#insert_modal2').empty();
										   $("#insert_modal2").append(html);	
										   $("#insert_modal2").hide();											   												   		
									   }											   
					             });

}

function showqualifiedapplicants() {

				
							$.ajax({
							type: "GET",
							url: "showqualifiedapplicants.php",
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modal3").show();
										   $('#insert_modal3').empty();
										   $("#insert_modal3").append(html);
																	   
									   },
									  error: function(html)
									    {
										   $("#insert_modal3").show();
										   $('#insert_modal3').empty();
										   $("#insert_modal3").append(html);	
										   $("#insert_modal3").hide();											   												   		
									   }											   
					             });

}

function shownotqualifiedapplicants() {

				
							$.ajax({
							type: "GET",
							url: "shownotqualifiedapplicants.php",
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modal4").show();
										   $('#insert_modal4').empty();
										   $("#insert_modal4").append(html);
																	   
									   },
									  error: function(html)
									    {
										   $("#insert_modal4").show();
										   $('#insert_modal4').empty();
										   $("#insert_modal4").append(html);	
										   $("#insert_modal4").hide();											   												   		
									   }											   
					             });

}

function showactiveapplicants() {

				
							$.ajax({
							type: "GET",
							url: "showactiveapplicants.php",
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modal5").show();
										   $('#insert_modal5').empty();
										   $("#insert_modal5").append(html);
																	   
									   },
									  error: function(html)
									    {
										   $("#insert_modal5").show();
										   $('#insert_modal5').empty();
										   $("#insert_modal5").append(html);	
										   $("#insert_modal5").hide();											   												   		
									   }											   
					             });

}

function showhiredapplicants() {

				
							$.ajax({
							type: "GET",
							url: "showhiredapplicants.php",
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modal6").show();
										   $('#insert_modal6').empty();
										   $("#insert_modal6").append(html);
																	   
									   },
									  error: function(html)
									    {
										   $("#insert_modal6").show();
										   $('#insert_modal6').empty();
										   $("#insert_modal6").append(html);	
										   $("#insert_modal6").hide();											   												   		
									   }											   
					             });

}

function showplacedapplicants() {

				
							$.ajax({
							type: "GET",
							url: "showplacedapplicants.php",
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modal7").show();
										   $('#insert_modal7').empty();
										   $("#insert_modal7").append(html);
																	   
									   },
									  error: function(html)
									    {
										   $("#insert_modal7").show();
										   $('#insert_modal7').empty();
										   $("#insert_modal7").append(html);	
										   $("#insert_modal7").hide();											   												   		
									   }											   
					             });

}

function showallapplicants() {

				
							$.ajax({
							type: "GET",
							url: "showallapplicants.php",
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modal8").show();
										   $('#insert_modal8').empty();
										   $("#insert_modal8").append(html);
																	   
									   },
									  error: function(html)
									    {
										   $("#insert_modal8").show();
										   $('#insert_modal8').empty();
										   $("#insert_modal8").append(html);	
										   $("#insert_modal8").hide();											   												   		
									   }											   
					             });

}