function sendchatmessage() {
										
				var btninput = $("#btn-input").val();
				var usersenderid = $("#usersenderid").val();
				var userreceiverid = $("#userreceiverid").val();
				var chatconversationid = $("#chatconversationid").val();
																										
				var dataString = 'btninput='+ btninput+'&usersenderid='+ usersenderid+'&userreceiverid='+ userreceiverid+'&chatconversationid='+ chatconversationid;								
				
				//alert(dataString);
				
							$.ajax({
							type: "POST",
							url: "savechat.php",
							data: dataString,
							cache: false,	
									 beforeSend: function(html) 
										{			   
											$("#flashresultchatwindow2").show();
											$("#flashresultchatwindow2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Sending Message...Please Wait.');		
										},
									  success: function(html)
									    {
										   $("#chatbody").show();
										   $('#chatbody').empty();
										   $("#chatbody").append(html);
										   $("#flashresultchatwindow2").hide();
										   
										   
										   //keep scrolled to bottom of chat!
										   var scrolltoh = $('#chatbody')[0].scrollHeight;
               							    $('#chatbody').scrollTop(scrolltoh);
										   
										   //reset value of message box
               							 $('#btn-input').val('');
																	   
									   },
									  error: function(html)
									    {
										   $("#chatbody").show();
										   $('#chatbody').empty();
										   $("#chatbody").append(html);	
										   $("#chatbody").hide();	
										   $("#flashresultchatwindow2").hide();										   												   		
									   }											   
					             });

}	

function showmodalchatwindow(id2) {
										
				//var id = $("#id").val();
				var id2 = id2;
				//alert(id2);	
												
				/*var searchstring =  '';																
				if(id ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+id;}
				*/			
																																		
				var dataString = 'id2='+ id2;									
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "modalchatwindow.php",
							data: dataString,
							cache: false,	
									 beforeSend: function(html) 
										{			   
											$("#flashresultchatwindow").show();
											$("#flashresultchatwindow").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading Conversation...Please Wait.');		
										},
									  success: function(html)
									    {
										   $("#insert_modalchatwindow").show();
										   $('#insert_modalchatwindow').empty();
										   $("#insert_modalchatwindow").append(html);
										   $("#flashresultchatwindow").hide();
																	   
									   },
									  error: function(html)
									    {
										   $("#insert_modalchatwindow").show();
										   $('#insert_modalchatwindow').empty();
										   $("#insert_modalchatwindow").append(html);	
										   $("#insert_modalchatwindow").hide();	
										   $("#flashresultchatwindow").hide();										   												   		
									   }											   
					             });

}	
	
function showmodal(id2) {
										
				//var id = $("#id").val();
				var id2 = id2;
				//alert(id2);	
												
				/*var searchstring =  '';																
				if(id ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+id;}
				*/			
																																		
				var dataString = 'id2='+ id2;									
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "applicantprofile.php",
							data: dataString,
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

function showmodalchat() {
				
							$.ajax({
							type: "GET",
							url: "chat.php",
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modalchat").show();
										   $('#insert_modalchat').empty();
										   $("#insert_modalchat").append(html);
																	   
									   },
									  error: function(html)
									    {
										   $("#insert_modalchat").show();
										   $('#insert_modalchat').empty();
										   $("#insert_modalchat").append(html);	
										   $("#insert_modalchat").hide();											   												   		
									   }											   
					             });

}	

function getexporttoxls() { 
	$("#insert_search").btechco_excelexport({
                containerid: "insert_modal", datatype: $datatype.Table
            });
	} 

	

$(document).ready(function() {

     $('#searchbtn').click(function() {
				//var id = $("#id").val();
				var searchfield = $("#searchfield").val();
		
				/*var searchstring =  '';																
				if(id ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+id;}
				*/																																	
				var dataString = 'searchfield='+ searchfield;									
				
				//alert(dataString);
				
								$.ajax({
								type: "GET",
								url: "searchdata2.php",
								data: dataString,
								cache: false,									
											beforeSend: function(html) 
											{			   
												$("#flashresult").show();
												$("#flashresult").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching Database...Please Wait.');		
											},															
										  success: function(html)
										    {
											   $('#searchresult').empty();
											   $("#searchresult").show();
											   $("#searchresult").append(html);
											   $("#flashresult").hide();	

											    $('#defaultForm')[0].reset(); 		
				   
										   },
										  error: function(html)
										    {
											   $("#searchresult").show();
											   $('#searchresult').empty();
											   $("#searchresult").append(html);
											   $("#flashresult").hide();	
											   
											   //alert('err');												   												   		
										   }											   
						             });
						             //$.ajax({
     	});  
     	//$('#searchbtn').click(function() { 	
     		
     	//intervals
     	var auto_refresh = setInterval(
		function ()
		{
			$('#newregisteredapplicant').load('show_newregisteredapplicant.php').fadeIn("slow");
			$('#newqualifiedapplicant').load('show_newqualifiedapplicant.php').fadeIn("slow");
			$('#newhiredapplicant').load('show_newhiredapplicant.php').fadeIn("slow");
			$('#newplacedapplicant').load('show_newplacedapplicant.php').fadeIn("slow");
			
			$('#shownotifications').load('show_notifications.php').fadeIn("slow");
			$('#notificationspanel').load('show_notificationspanel.php').fadeIn("slow");
		}, 10000); // refresh every 10000 milliseconds	
		
		
		//chart accordion click

});	
