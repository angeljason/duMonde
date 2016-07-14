
function showbirequest(id2) {
	
		var id2 = id2;																																												
		var dataString = 'id2='+ id2;		
		
					$.ajax({
					type: "GET",
					url: "modal/modalbirequests.php",
					data: dataString,
					cache: false,	
							  beforeSend: function(html) 
								{
									$('#insert_modal7').empty();			   
									$("#insert_modal7").show();
									$("#insert_modal7").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');		
								},																						
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
$('#checklistUL a[href="#docreports"]').on('click', function(event){				
			showactivelessthan30days2();			
});
function searchexpiration(){
	$('#searchformx')
					        .on('init.field.bv', function(e, data) {	
					            var $parent    = data.element.parents('.form-group'),
					                $icon      = $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]'),
					                options    = data.bv.getOptions(),                      
					                validators = data.bv.getOptions(data.field).validators; 
					
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
										            asdates: {
										                validators: {
									                            notEmpty: {
									                                message: 'This field is required'
									                            }
										                }
										            },
										            datepreference: {
										                validators: {
									                            notEmpty: {
									                                message: 'Date Preference is required'
									                            }
										                }
										            },
										            valuex: {
										                validators: {
									                            notEmpty: {
									                                message: 'Value field is required'
									                            },
									                            digits: {
									                                message: 'The value can contain only digits'
									                            }
										                }
										            },
													datepart: {
										                validators: {
									                            notEmpty: {
									                                message: 'Date Part is required'
									                            }
										                }
										            }				                        
						          }  
						          //--fields
						    });
						    
						    //search action slip
						     
						     	$('#searchformx').bootstrapValidator('validate');
						        			var bootstrapValidator = $('#searchformx').data('bootstrapValidator');
											var stat2 = bootstrapValidator.isValid();
											if(stat2=='1')
											{
												var asdates = $("#asdates").val();
												var datepreference = $("#datepreference").val();
												var valuex = $("#valuex").val();												
												var datepart = $("#datepart").val();
												var asstatus = $("#asstatus").val();
																
												var dataString = 'asdates='+ asdates+'&datepreference='+ datepreference+'&valuex='+ valuex+'&datepart='+ datepart+'&asstatus='+ asstatus;									
												
																$.ajax({
																type: "GET",
																url: "search/searchexpiration.php",
																data: dataString,
																cache: false,									
																			beforeSend: function(html) 
																			{			   
																				$("#insert_searchasflash2").show();
																				$("#insert_searchasflash2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching...Please Wait.');		
																			},															
																		  success: function(html)
																		    {
																			   $('#insertbody_search2').empty();
																			   $("#insertbody_search2").show();
																			   $("#insertbody_search2").append(html);
																			   $("#insert_searchasflash2").hide();												    						   
																		   },
																		  error: function(html)
																		    {
																			   $("#insertbody_search2").show();
																			   $('#insertbody_search2').empty();
																			   $("#insertbody_search2").append(html);
																			   $("#insert_searchasflash2").hide();												   												   		
																		   }											   
														             });
											}			             
						     	
						  	
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
function saveasdraft(){
	
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
	            approveornotid: {
		                validators: {
	                            notEmpty: {
	                                message: 'This field is required'
	                            }
		                }
	            },						            
	            approvallevelid: {
		                validators: {
	                            notEmpty: {
	                                message: 'Approval Level is required'
	                            }
		                }
	            },						            
	            approvalremarks: {
		                validators: {
	                            notEmpty: {
	                                message: 'Remarks is required'
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
									var approvalremarks = $("#approvalremarks").val();	
									
									var dataString = 'approvalremarks='+ approvalremarks;
										
															$.ajax({
															type: "GET",
															url: "save/savedraft.php",
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
function getexporttoxls23x(tablename) {
	var tablenamex = tablename;	
	var ast = "#";
	var tablenamex2 = ast.concat(tablenamex);		
	
	$(tablenamex2).btechco_excelexport({
                containerid: tablenamex, datatype: $datatype.Table
            });
	} 
$('#checklistUL a[href="#notifications"]').on('click', function(event){				
			shownotifications();				
});
function shownotifications() {	
							$.ajax({
							type: "GET",
							url: "load/loadnotifications.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_notifications").show();
											$("#insert_notifications").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_notifications").show();
										   $('#insertbody_notifications').empty();
										   $("#insertbody_notifications").append(html);
										   $("#insert_notifications").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_notifications").show();
										   $('#insertbody_notifications').empty();
										   $("#insertbody_notifications").append(html);	
										   $("#insertbody_notifications").hide();	
										   $("#insert_notifications").hide();										   												   		
									   }													   
					             });		
}
$('#checklistUL a[href="#incomplete"]').on('click', function(event){				
			showincomplete();				
});
function showincomplete() {	
							$.ajax({
							type: "GET",
							url: "load/loadincomplete.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_incomplete").show();
											$("#insert_incomplete").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_incomplete").show();
										   $('#insertbody_incomplete').empty();
										   $("#insertbody_incomplete").append(html);
										   $("#insert_incomplete").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_incomplete").show();
										   $('#insertbody_incomplete').empty();
										   $("#insertbody_incomplete").append(html);	
										   $("#insertbody_incomplete").hide();	
										   $("#insert_incomplete").hide();										   												   		
									   }													   
					             });		
}
$('#checklistUL a[href="#drafts"]').on('click', function(event){				
			showdrafts();				
});
function showdrafts() {	
							$.ajax({
							type: "GET",
							url: "load/loaddrafts.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_drafts").show();
											$("#insert_drafts").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_drafts").show();
										   $('#insertbody_drafts').empty();
										   $("#insertbody_drafts").append(html);
										   $("#insert_drafts").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_drafts").show();
										   $('#insertbody_drafts').empty();
										   $("#insertbody_drafts").append(html);	
										   $("#insertbody_drafts").hide();	
										   $("#insert_drafts").hide();										   												   		
									   }													   
					             });		
}
$('#checklistUL a[href="#validated"]').on('click', function(event){				
			showvalidated();				
});
function showvalidated() {	
							$.ajax({
							type: "GET",
							url: "load/loadvalidated.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_validated").show();
											$("#insert_validated").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_validated").show();
										   $('#insertbody_validated').empty();
										   $("#insertbody_validated").append(html);
										   $("#insert_validated").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_validated").show();
										   $('#insertbody_validated').empty();
										   $("#insertbody_validated").append(html);	
										   $("#insertbody_validated").hide();	
										   $("#insert_validated").hide();										   												   		
									   }													   
					             });		
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
function loadprocess(){
	
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
	            approveornotid: {
		                validators: {
	                            notEmpty: {
	                                message: 'This field is required'
	                            }
		                }
	            },						            
	            approvallevelid: {
		                validators: {
	                            notEmpty: {
	                                message: 'Approval Level is required'
	                            }
		                }
	            },						            
	            approvalremarks: {
		                validators: {
	                            notEmpty: {
	                                message: 'Remarks is required'
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
									var approvalremarks = $("#approvalremarks").val();	
									
									var dataString = 'approvalremarks='+ approvalremarks;
										
															$.ajax({
															type: "GET",
															url: "save/savevalidation.php",
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

$('#myTab a[href="#reports"]').on('click', function(event){				
			showreports();				
});
function showreports() {	
							$.ajax({
							type: "GET",
							url: "load/loadreports.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_reports").show();
											$("#insert_reports").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_reports").show();
										   $('#insertbody_reports').empty();
										   $("#insertbody_reports").append(html);
										   $("#insert_reports").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_reports").show();
										   $('#insertbody_reports').empty();
										   $("#insertbody_reports").append(html);	
										   $("#insertbody_reports").hide();	
										   $("#insert_reports").hide();										   												   		
									   }													   
					             });		
}
$('#myTab a[href="#birequests"]').on('click', function(event){				
			showbirequests();				
});
function showbirequests() {	
							$.ajax({
							type: "GET",
							url: "load/loadbirequests.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_birequests").show();
											$("#insert_birequests").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_birequests").show();
										   $('#insertbody_birequests').empty();
										   $("#insertbody_birequests").append(html);
										   $("#insert_birequests").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_birequests").show();
										   $('#insertbody_birequests').empty();
										   $("#insertbody_birequests").append(html);	
										   $("#insertbody_birequests").hide();	
										   $("#insert_birequests").hide();										   												   		
									   }													   
					             });		
}
$('#myTab a[href="#validation"]').on('click', function(event){				
			showvalidation();				
});
function showvalidation() {	
							$.ajax({
							type: "GET",
							url: "load/loadvalidation.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_validation").show();
											$("#insert_validation").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_validation").show();
										   $('#insertbody_validation').empty();
										   $("#insertbody_validation").append(html);
										   $("#insert_validation").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_validation").show();
										   $('#insertbody_validation').empty();
										   $("#insertbody_validation").append(html);	
										   $("#insertbody_validation").hide();	
										   $("#insert_validation").hide();										   												   		
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
function showmodalupdateactionslip2(id2) {
										
				var id2 = id2;																																
				var dataString = 'id2='+ id2;									
				
							$.ajax({
							type: "GET",
							url: "modal/modalprintactionslip.php",
							data: dataString,
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

$(document).ready(function() {
    
	//search action slip
     $('#searchbtn').click(function() {
				var searchfield = $("#searchfield").val();																																
				var dataString = 'searchfield='+ searchfield;									
				
								$.ajax({
								type: "GET",
								url: "search/searchactionslip.php",
								data: dataString,
								cache: false,									
											beforeSend: function(html) 
											{			   
												$("#insert_search").show();
												$("#insert_search").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching Database...Please Wait.');		
											},															
										  success: function(html)
										    {
											   $('#insertbody_search').empty();
											   $("#insertbody_search").show();
											   $("#insertbody_search").append(html);
											   $("#insert_search").hide();												    						   
										   },
										  error: function(html)
										    {
											   $("#insertbody_search").show();
											   $('#insertbody_search').empty();
											   $("#insertbody_search").append(html);
											   $("#insert_search").hide();												   												   		
										   }											   
						             });
     	});	
     	$('#searchtagbtn').click(function() {
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
     	}); 
     	// Validate the form manually
		$('#searchadvancebtn').click(function() {						        											
									//alert("sample");
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
	
											
		});	
				
		
     	
});