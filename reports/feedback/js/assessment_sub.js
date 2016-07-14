function verify_checkbox2(){

        if ($('input.checkbox_check2').is(':checked')) {
            $('.checkbox2').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"                                           
            });
            //enable tag all button            
   			$('#tagall3').prop('disabled', false); 
        }else{
            $('.checkbox2').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                                         
            });   
            //enable tag all button
            $('#tagall3').prop('disabled', true);    
        }

    	//enable tag all button            
   		$('#tagall3').prop('disabled', false);
   
}
function verify_checkbox2x(){

       //select all check box
	
        if ($('input.checkbox_check').is(':checked')) {
            //enable tag all button            
   			$('#tagall').prop('disabled', false); 
   			$('#tagall2').prop('disabled', false);
        }else{
  
            //enable tag all button
            $('#tagall').prop('disabled', true); 
            $('#tagall2').prop('disabled', true);     
        }
   
    
    	//enable tag all button            
   			$('#tagall').prop('disabled', false); 
   			$('#tagall2').prop('disabled', false);
   
   
}
function verify_checkbox(){

       //select all check box
	
        if ($('input.checkbox_check').is(':checked')) {
            $('.checkbox1').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"                                           
            });
            //enable tag all button            
   			$('#tagall').prop('disabled', false); 
   			$('#tagall2').prop('disabled', false);
        }else{
            $('.checkbox1').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                                         
            });   
            //enable tag all button
            $('#tagall').prop('disabled', true); 
            $('#tagall2').prop('disabled', true);     
        }
   
    
    	//enable tag all button            
   			$('#tagall').prop('disabled', false); 
   			$('#tagall2').prop('disabled', false);
   
   
}
function tagall(id2) {
		
		var statusid = id2; //if 1 insert if 2 delete											
		var arrayselected = [];
		$('input.checkbox1:checkbox:checked').each(function () {
		    arrayselected.push($(this).val());
		});
		//alert(arrayselected);
		var dataString = 'arrayselected='+ arrayselected+'&statusid='+ statusid;
		//alert(dataString);
		
				$.ajax({
						type: "GET",
						url: "save/saveadvacetagapplicant.php",
						data: dataString,
						cache: false,	
								beforeSend: function(html) 
									{			   
										$("#insert_tagapplicant").show();
										$("#insert_tagapplicant").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Processing...Please Wait.');				
									},	
								  success: function(html)
								    {
									   $("#insert_tagapplicant").show();
									   $('#insert_tagapplicant').empty();
									   $("#insert_tagapplicant").append(html);									   										   										   																  
								   }													   
		             });		
		
		
}
function showtagapplicant(id2,statusid) {
										
				var id2 = id2;
				var statusid = statusid;																																
				var dataString = 'id2='+ id2;	
				var dataString = 'id2='+ id2+'&statusid='+ statusid;								
				//alert(dataString);
				
				if(statusid == 1){var mydiv="#insert_tagapplicant";}
				if((statusid == 2)||(statusid == 3)){var mydiv="#insert_tagapplicant2";}
				
				//alert(statusid);
							$.ajax({
							type: "POST",
							url: "save/savetagapplicant.php",
							data: dataString,
							cache: false,	
									  beforeSend: function(html) 
										{			   
											$(mydiv).show();
											$(mydiv).html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Processing...Please Wait.');				
										},																						
									  success: function(html)
									    {
										   $(mydiv).show();
										   $(mydiv).empty();
										   $(mydiv).append(html);																	  
									   },
									  error: function(html)
									    {
										   $(mydiv).show();
										   $(mydiv).empty();
										   $(mydiv).append(html);	
										   $(mydiv).hide();											   												   		
									   }											   
					             });

}
function searchadvancestep1()
{
	var tempempno = $("#tempempno").val();
	var asno = $("#asno").val();
	var lastname = $("#lastname").val();	
	var firstname = $("#firstname").val();	
	var birthdate = $("#birthdate").val();		
	var o2 = $("#o2").val();	
	var t2 = $("#t2").val();														
																																												
									var dataString = 'tempempno='+ tempempno+'&asno='+ asno
									+'&lastname='+ lastname+'&firstname='+ firstname
									+'&birthdate='+ birthdate+'&o2='+ o2
									+'&t2='+ t2;																	
									//alert(dataString);
					
									$.ajax({
									type: "POST",
									url: "search/searchadvanceandtag.php",
									data: dataString,
									cache: false,									
												beforeSend: function(html) 
												{			   
													$("#flashsearchtag").show();
													$("#flashsearchtag").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching Database...Please Wait.');		
												},															
											  success: function(html)
											    {
												   $('#insert_searchtag').empty();
												   $("#insert_searchtag").show();
												   $("#insert_searchtag").append(html);
												   $("#flashsearchtag").hide();	
												   						   
											   },
											  error: function(html)
											    {
												   $("#insert_searchtag").show();
												   $('#insert_searchtag').empty();
												   $("#insert_searchtag").append(html);
												   $("#flashsearchtag").hide();												   												   		
											   }											   
							             });
}
function searchstep1()
{
	var searchfield = $("#searchtagfield").val();																																				
	var dataString = 'searchfield='+ searchfield;									
				
								$.ajax({
								type: "GET",
								url: "search/searchandtag.php",
								data: dataString,
								cache: false,									
											beforeSend: function(html) 
											{			   
												$("#flashsearchtag").show();
												$("#flashsearchtag").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching Database...Please Wait.');		
											},															
										  success: function(html)
										    {
											   $('#insert_searchtag').empty();
											   $("#insert_searchtag").show();
											   $("#insert_searchtag").append(html);
											   $("#flashsearchtag").hide();	
											   						   
										   },
										  error: function(html)
										    {
											   $("#insert_searchtag").show();
											   $('#insert_searchtag').empty();
											   $("#insert_searchtag").append(html);
											   $("#flashsearchtag").hide();												   												   		
										   }											   
						             });
}

$("#step1").click(function(){
	//alert( $(this).attr("id") );
	var wizardButtons = $('.wizard-menu .list-group-item');
	var wizardButtons_current = $('#step1');
	wizardButtons.removeClass('active');
   	wizardButtons_current.addClass('active');
   	showstep(1);
});
$("#step2").click(function(){
	var wizardButtons = $('.wizard-menu .list-group-item');
	var wizardButtons_current = $('#step2');
	wizardButtons.removeClass('active');
	wizardButtons_current.addClass('active');
	showstep(2);
});
$("#step3").click(function(){
	var wizardButtons = $('.wizard-menu .list-group-item');
	var wizardButtons_current = $('#step3');
	wizardButtons.removeClass('active');
	wizardButtons_current.addClass('active');
	showstep(3);
});
$("#step4").click(function(){
	var wizardButtons = $('.wizard-menu .list-group-item');
	var wizardButtons_current = $('#step4');
	wizardButtons.removeClass('active');
	wizardButtons_current.addClass('active');
	showstep(4);
});
$("#step5").click(function(){
	var wizardButtons = $('.wizard-menu .list-group-item');
	var wizardButtons_current = $('#step5');
	wizardButtons.removeClass('active');
	wizardButtons_current.addClass('active');
	showstep(5);
});
$("#step6").click(function(){
	var wizardButtons = $('.wizard-menu .list-group-item');
	var wizardButtons_current = $('#step6');
	wizardButtons.removeClass('active');
	wizardButtons_current.addClass('active');
	showstep(6);	
});
function showstep(stepid) {	
	
							var stepid = stepid;
							if(stepid == 1){var loaddivinsert="#insert_wizardcontent";var loaddivbody="#insertbody_wizardcontent";varurlstring="load/loadstep1.php";}
							if(stepid == 2){var loaddivinsert="#insert_wizardcontent";var loaddivbody="#insertbody_wizardcontent";varurlstring="load/loadstep2.php";}
							if(stepid == 3){var loaddivinsert="#insert_wizardcontent";var loaddivbody="#insertbody_wizardcontent";varurlstring="load/loadstep3.php";}
							if(stepid == 4){var loaddivinsert="#insert_wizardcontent";var loaddivbody="#insertbody_wizardcontent";varurlstring="load/loadstep4.php";}
							if(stepid == 5){var loaddivinsert="#insert_wizardcontent";var loaddivbody="#insertbody_wizardcontent";varurlstring="load/loadstep5.php";}
							if(stepid == 6){var loaddivinsert="#insert_wizardcontent";var loaddivbody="#insertbody_wizardcontent";varurlstring="load/loadstep6.php";}
							
							//alert(loaddivinsert);
							//alert(loaddivbody);
							$.ajax({
							type: "GET",
							url: varurlstring,
							cache: false,	
									beforeSend: function(html) 
										{	
											$(loaddivbody).empty();		   
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