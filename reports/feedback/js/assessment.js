$('#assesspaneltabs a[href="#enrollment"]').on('click', function(event){				
			showenrollment(1);				
});
$('#assesspaneltabs a[href="#dtrvalidation"]').on('click', function(event){				
			showenrollment(2);				
});
$('#assesspaneltabs a[href="#idprinting"]').on('click', function(event){				
			showenrollment(3);				
});
$('#assesspaneltabs a[href="#transmittals"]').on('click', function(event){				
			showenrollment(4);				
});
$('#assesspaneltabs a[href="#reports"]').on('click', function(event){				
			showenrollment(5);				
});
function showenrollment(statusid) {	
	
							var statusid = statusid;
							if(statusid == 1){var loaddivinsert="#insert_enrollment";var loaddivbody="#insertbody_enrollment";varurlstring="load/loadenrollment.php";}
							if(statusid == 2){var loaddivinsert="#insert_dtrvalidation";var loaddivbody="#insertbody_dtrvalidation";varurlstring="load/loaddtrvalidation.php";}
							if(statusid == 3){var loaddivinsert="#insert_idprinting";var loaddivbody="#insertbody_idprinting";varurlstring="load/loadidprinting.php";}
							if(statusid == 4){var loaddivinsert="#insert_transmittals";var loaddivbody="#insertbody_transmittals";varurlstring="load/loadtransmittals.php";}
							if(statusid == 5){var loaddivinsert="#insert_reports";var loaddivbody="#insertbody_reports";varurlstring="load/loadreports.php";}
							
							//alert(loaddivinsert);
							//alert(loaddivbody);
							$.ajax({
							type: "GET",
							url: varurlstring,
							cache: false,	
									beforeSend: function(html) 
										{			   
											$(loaddivinsert).show();
											$(loaddivinsert).html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										    $(loaddivbody).show();
										    $(loaddivbody).empty();
										    $(loaddivbody).append(html);
										    $(loaddivinsert).hide();											   										   																  
									   },
									  error: function(html)
									    {										   
										   $(loaddivbody).hide();											   												   		
									   }													   
					             });		
}
function showmodalupdateactionslip(id2) {
										

				var id2 = id2;																																
				var dataString = 'id2='+ id2;									

				
							$.ajax({
							type: "GET",
							url: "modal/modalupdateactionslip.php",
							data: dataString,
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
function getcategory(id) {
										
				var id = id;																																
				var dataString = 'id='+ id;									
								
							$.ajax({
							type: "GET",
							url: "applicantprofile.php",
							data: dataString,
							cache: false,									
										beforeSend: function(html) 
										{			   
											$("#flash").show();
											$("#flash").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},															
									  success: function(html)
									    {
										   $("#myModal_xxx").show();
										   $('#myModal_xxx').empty();
										   $("#myModal_xxx").append(html);
										   $("#flash").hide();											   										  																	   
									   },
									  error: function(html)
									    {
										   $("#myModal_xxx").show();
										   $('#myModal_xxx').empty();
										   $("#myModal_xxx").append(html);
										   $("#flash").hide();													   												   		
									   }											   
					             });

}
function showupdateapplicant(id2) {
										
				var id2 = id2;																																	
				var dataString = 'id2='+ id2;									
				
							$.ajax({
							type: "GET",
							url: "modal/sourcingmodapplicant.php",
							data: dataString,
							cache: false,																							
									  success: function(html)
									    {
										   $("#myModal").show();
										   $('#myModal').empty();
										   $("#myModal").append(html);
																	   
									   },
									  error: function(html)
									    {
										   $("#myModal").show();
										   $('#myModal').empty();
										   $("#myModal").append(html);	
										   $("#myModal").hide();											   												   		
									   }											   
					             });

}
