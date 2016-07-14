function saveasdraft(statusid){
	
	   var statusid = statusid;
	   if(statusid == 1){var urlstring="save/savedraft.php";}
	   if(statusid == 2){var urlstring="save/savestep2.php";}
	
 		$('#defaultForm66zx')
        .on('init.field.bv', function(e, data) {	
            var $parent    = data.element.parents('.form-group'),
                $icon      = $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]'),
                options    = data.bv.getOptions(),                      // Entire options
                validators = data.bv.getOptions(data.field).validators; // The field validators

            if (validators.notEmpty && options.feedbackIcons && options.feedbackIcons.required) {
                $icon.addClass(options.feedbackIcons.required).show();
            }
        })        
        .bootstrapValidator({
            message: 'This value is not valid',
            live: 'enabled',
		    submitButtons: 'button[type="button"]',			    
            feedbackIcons: {
            	required: 'glyphicon glyphicon-asterisk',
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
	        fields: {
	        	approvalremarks: {
		                validators: {
	                            notEmpty: {
	                                message: 'Remarks is required'
	                            }
		                }
	            },						            	            						            
	            'option_title[]': {
		                validators: {
	                            notEmpty: {
	                                message: 'This field is required'
	                            }
		                }
	            }					            						           
	        }
	    });
	     // Validate the form manually	    
	        $('#defaultForm66zx').bootstrapValidator('validate');
	        			var bootstrapValidator = $('#defaultForm66zx').data('bootstrapValidator');
						var stat22 = bootstrapValidator.isValid();
						if(stat22=='1')
						{	
							//get selected value and id	
							var option_selected = $('select[name="option_title[]"]').map(function(){
							    if ($(this).val())
							        return { value: this.value, id: this.id};
							}).get();	
							//console.log( option_selected );
							
							//convert an array of objects to array of arrays using map							
							var ArrArr = $.map(option_selected, function(n,i){
							   return [[ n.value, n.id]];
							});										
							//console.log( ArrArr );
							//alert(ArrArr);	
							
							var approvalremarks = $("#approvalremarks").val();	
									
								var dataString = 'option_selected='+ ArrArr+'&approvalremarks='+ approvalremarks;
								//alert(dataString);		
															$.ajax({
															type: "GET",
															url: urlstring,
															data: dataString,
															cache: false,	
																	beforeSend: function(html) 
																		{			   
																			$("#flashsaveprocess2").show();
																			$("#flashsaveprocess2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
																		},	
																	  success: function(html)
																	    {
																		   $("#flashsaveprocessbody2").show();
																		   $('#flashsaveprocessbody2').empty();
																		   $("#flashsaveprocessbody2").append(html);
																		   $("#flashsaveprocess2").hide();											   										   																  
																	   },
																	  error: function(html)
																	    {
																		   $("#flashsaveprocessbody").show();
																		   $('#flashsaveprocessbody').empty();
																		   $("#flashsaveprocessbody").append(html);	
																		   $("#flashsaveprocessbody").hide();	
																		   $("#flashsaveprocess").hide();										   												   		
																	   }													   
													             });	
						}
	   
	
}
function tagall2(id2) {
		
		var statusid = id2; //if 1 insert if 2 delete											
		var arrayselected = [];
		$('input.checkbox2:checkbox:checked').each(function () {
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
										$("#insert_tagapplicant2").show();
										$("#insert_tagapplicant2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Processing...Please Wait.');				
									},	
								  success: function(html)
								    {
									   $("#insert_tagapplicant2").show();
									   $('#insert_tagapplicant2').empty();
									   $("#insert_tagapplicant2").append(html);									   										   										   																  
								   }													   
		             });		
		
		
}
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
				//e.preventDefault();
				event.preventDefault(); 						
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
function loaddraft(){
	$.ajax({
		type: "GET",
		url: "modal/modalloaddraft.php",		
		cache: false,																							
				  success: function(html)
				    {
					   $("#mymodal_loaddraft").show();
					   $('#mymodal_loaddraft').empty();
					   $("#mymodal_loaddraft").append(html);												   
				   },
				  error: function(html)
				    {
					   $("#mymodal_loaddraft").show();
					   $('#mymodal_loaddraft').empty();
					   $("#mymodal_loaddraft").append(html);	
					   $("#mymodal_loaddraft").hide();											   												   		
				   }											   
	         });
}
function showmodaldraft(id2) {
										
				var id2 = id2;																																
				var dataString = 'id2='+ id2;									
				
							$.ajax({
							type: "GET",
							url: "modal/modaldraft.php",
							data: dataString,
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
function searchdraft(){
	var searchdraftfield = $("#searchdraftfield").val();																																				
	var dataString = 'searchdraftfield='+ searchdraftfield;		
	//alert(dataString); 							
				
								$.ajax({
								type: "GET",
								url: "search/searchdraft.php",
								data: dataString,
								cache: false,									
											beforeSend: function(html) 
											{
												$('#flashloaddraft').empty();			   
												$("#insert_searchdrafts").show();
												$("#insert_searchdrafts").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching Database...Please Wait.');		
											},															
										  success: function(html)
										    {
											   $('#insertbody_searchdrafts').empty();
											   $("#insertbody_searchdrafts").show();
											   $("#insertbody_searchdrafts").append(html);
											   $("#insert_searchdrafts").hide();	
											   						   
										   },
										  error: function(html)
										    {
											   $("#insertbody_searchdrafts").show();
											   $('#insertbody_searchdrafts').empty();
											   $("#insertbody_searchdrafts").append(html);
											   $("#insert_searchdrafts").hide();												   												   		
										   }											   
						             });
}
function loadselecteddraft() {
		
													
		var arrayselected = [];
		$('input.checkbox3:checkbox:checked').each(function () {
		    arrayselected.push($(this).val());
		});
		//alert(arrayselected);
		var dataString = 'arrayselected='+ arrayselected;
		//alert(dataString);
		
				$.ajax({
						type: "GET",
						url: "save/saveloaddraftselected.php",
						data: dataString,
						cache: false,	
								beforeSend: function(html) 
									{			   
										$("#flashloaddraft").show();
										$("#flashloaddraft").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Processing...Please Wait.');				
									},	
								  success: function(html)
								    {
								       $('#flashloaddraft').empty();
									   $("#flashloaddraft").show();									   
									   $("#flashloaddraft").append(html);									   										   										   																  
								   }													   
		             });		
		
		
}
function loadbulkapproval(){
	$.ajax({
		type: "GET",
		url: "modal/modalloadbulkapprovalno.php",		
		cache: false,																							
				  success: function(html)
				    {
					   $("#mymodal_bulkapproval").show();
					   $('#mymodal_bulkapproval').empty();
					   $("#mymodal_bulkapproval").append(html);												   
				   },
				  error: function(html)
				    {
					   $("#mymodal_bulkapproval").show();
					   $('#mymodal_bulkapproval').empty();
					   $("#mymodal_bulkapproval").append(html);	
					   $("#mymodal_bulkapproval").hide();											   												   		
				   }											   
	         });
}
function loadselectedbulkapprovalno() {
															
		var arrayselected = [];
		$('input.checkbox4:checkbox:checked').each(function () {
		    arrayselected.push($(this).val());
		});
		//alert(arrayselected);
		var dataString = 'arrayselected='+ arrayselected;
		//alert(dataString);
		
				$.ajax({
						type: "GET",
						url: "save/saveloadbulkselected.php",
						data: dataString,
						cache: false,	
								beforeSend: function(html) 
									{			   
										$("#flashloadbulk").show();
										$("#flashloadbulk").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Processing...Please Wait.');				
									},	
								  success: function(html)
								    {
								       $('#flashloadbulk').empty();
									   $("#flashloadbulk").show();									   
									   $("#flashloadbulk").append(html);									   										   										   																  
								   }													   
		             });		
		
		
}
function searchbulkapprovaldoc(){
	var searchbulkapprovalfield = $("#searchbulkapprovalfield").val();																																				
	var dataString = 'searchbulkapprovalfield='+ searchbulkapprovalfield;		
	//alert(dataString); 							
				
								$.ajax({
								type: "GET",
								url: "search/searchbulk.php",
								data: dataString,
								cache: false,									
											beforeSend: function(html) 
											{
												$('#flashloadbulk').empty();			   
												$("#insertbody_searchbulk").show();
												$("#insertbody_searchbulk").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching Database...Please Wait.');		
											},															
										  success: function(html)
										    {
											   $('#insertbody_searchbulk').empty();
											   $("#insertbody_searchbulk").show();
											   $("#insertbody_searchbulk").append(html);
											   $("#insert_searchbulk").hide();												   						   
										   },
										  error: function(html)
										    {
											   $("#insertbody_searchbulk").show();
											   $('#insertbody_searchbulk').empty();
											   $("#insertbody_searchbulk").append(html);
											   $("#insert_searchbulk").hide();												   												   		
										   }											   
						             });
}
function showmodalbulkapprovallogs(id2) {
	
		var id2 = id2;																																												
		var dataString = 'id2='+ id2;		
		
					$.ajax({
					type: "GET",
					url: "modal/modalbulkapprovallogs.php",
					data: dataString,
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
function loadvalidation(){
	$.ajax({
		type: "GET",
		url: "modal/modalloadvalidationno.php",		
		cache: false,																							
				  success: function(html)
				    {
					   $("#mymodal_validation").show();
					   $('#mymodal_validation').empty();
					   $("#mymodal_validation").append(html);												   
				   },
				  error: function(html)
				    {
					   $("#mymodal_validation").show();
					   $('#mymodal_validation').empty();
					   $("#mymodal_validation").append(html);	
					   $("#mymodal_validation").hide();											   												   		
				   }											   
	         });
}
function searchvalidated(){
	var searchvalidationfield = $("#searchvalidationfield").val();																																				
	var dataString = 'searchvalidationfield='+ searchvalidationfield;		
	//alert(dataString); 							
				
								$.ajax({
								type: "GET",
								url: "search/searchvalidation.php",
								data: dataString,
								cache: false,									
											beforeSend: function(html) 
											{
												$('#insert_searchvalidation').empty();			   
												$("#insertbody_searchvalidation").show();
												$("#insert_searchvalidation").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching Database...Please Wait.');		
											},															
										  success: function(html)
										    {
											   $('#insertbody_searchvalidation').empty();
											   $("#insertbody_searchvalidation").show();
											   $("#insertbody_searchvalidation").append(html);
											   $("#insert_searchvalidation").hide();	
											   						   
										   },
										  error: function(html)
										    {
											   $("#insertbody_searchvalidation").show();
											   $('#insertbody_searchvalidation').empty();
											   $("insertbody_searchvalidation").append(html);
											   $("#insert_searchvalidation").hide();												   												   		
										   }											   
						             });
}
function loadselectedvalidationno() {
		
													
		var arrayselected = [];
		$('input.checkbox4:checkbox:checked').each(function () {
		    arrayselected.push($(this).val());
		});
		//alert(arrayselected);
		var dataString = 'arrayselected='+ arrayselected;
		//alert(dataString);
		
				$.ajax({
						type: "GET",
						url: "save/saveloadvalidationselected.php",
						data: dataString,
						cache: false,	
								beforeSend: function(html) 
									{			   
										$("#flashloadvalidation").show();
										$("#flashloadvalidation").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Processing...Please Wait.');				
									},	
								  success: function(html)
								    {
								       $('#flashloadvalidation').empty();
									   $("#flashloadvalidation").show();									   
									   $("#flashloadvalidation").append(html);									   										   										   																  
								   }													   
		             });		
		
		
}
function showmodalvalidation(id2) {
										
				var id2 = id2;																																
				var dataString = 'id2='+ id2;									
				
							$.ajax({
							type: "GET",
							url: "modal/modalvalidation.php",
							data: dataString,
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