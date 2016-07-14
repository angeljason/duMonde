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
function deleteonprocessed2(){
	//alert("test");
					if ($('input.deleteonprocessed').is(':checked')) 
			        {			        				        	
			        	$('#deleteonprocessed_ts').toggleClass("switchOn");		        	
			        }
			        else
			        {			        				        	
			        	$('#deleteonprocessed_ts').toggleClass("switchOn");			        				        	
			        }
}
function bypasslevel(){
	//$('#approvalbypasslevelid').change(function () {		
		//alert("test");	        
			        if ($('input.approvalbypasslevelid').is(':checked')) 
			        {
			        	//alert("true");			        				        	
			        	//disable form fields
			        	$('#approvallevelid').attr('disabled','disabled');	
			        	
			        	$('#approvalbypasslevelid_ts').toggleClass("switchOn");		        	
			        }
			        else
			        {
			        	//alert("false");			        			        				        	
			        	//enable form fields
			        	$('#approvallevelid').removeAttr('disabled');	
			        	
			        	$('#approvalbypasslevelid_ts').toggleClass("switchOn");			        				        	
			        }
			
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
	
	//-----------------------------------------------------------
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
												
														var approveornotid = $("#approveornotid").val();
														var approvallevelid = $("#approvallevelid").val();
														var approvalbypasslevelid = $("#approvalbypasslevelid").is(':checked');
														var deleteonprocessed = $("#deleteonprocessed").is(':checked');
														var approvalremarks = $("#approvalremarks").val();	
														
														var dataString = 'approveornotid='+ approveornotid+'&approvallevelid='+ approvallevelid+'&approvalbypasslevelid='+ approvalbypasslevelid+'&approvalremarks='+ approvalremarks+'&deleteonprocessed='+ deleteonprocessed;
															
																				$.ajax({
																				type: "GET",
																				url: "save/saveprocessed.php",
																				data: dataString,
																				cache: false,	
																						beforeSend: function(html) 
																							{			   
																								$("#flashsaveprocess").show();
																								$("#flashsaveprocess").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
																							},	
																						  success: function(html)
																						    {
																							   $("#flashsaveprocessbody").show();
																							   $('#flashsaveprocessbody').empty();
																							   $("#flashsaveprocessbody").append(html);
																							   $("#flashsaveprocess").hide();											   										   																  
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
	//alert(tablenamex2);
	//alert(tablenamex);
	
	$(tablenamex2).btechco_excelexport({
                containerid: tablenamex, datatype: $datatype.Table
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
function retag(id2) {
													
		var id2 = id2;																																												
		var dataString = 'id2='+ id2;		
											
		//alert(dataString);
		
					$.ajax({
					type: "GET",
					url: "save/saveretag.php",
					data: dataString,
					cache: false,	
							  beforeSend: function(html) 
								{			   
									$("#insert_retag").show();
									$("#insert_retag").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
								},																						
							  success: function(html)
							    {
								    $("#insert_retag").show();
								    $('#insert_retag').empty();
								    $("#insert_retag").append(html);																	  
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
$('#tabUL2 a[href="#approvaldocs"]').on('click', function(event){				
			//gototop(); 
			showapprovaldocs();
				
});	
function showapprovaldocs() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "load/loadapprovaldocs.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_approvaldocs").show();
											$("#insert_approvaldocs").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_approvaldocs").show();
										   $("#insertbody_approvaldocs").empty();
										   $("#insertbody_approvaldocs").append(html);
										   $("#insert_approvaldocs").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_approvaldocs").show();
										   $("#insertbody_approvaldocs").empty();
										   $("#insertbody_approvaldocs").append(html);	
										   $("#insertbody_approvaldocs").hide();	
										   $("#insert_approvaldocs").hide();										   												   		
									   }													   
					             });		
}
$('#tabUL2 a[href="#process"]').on('click', function(event){				
			//gototop(); 
			showprocess();
				
});	
function showprocess() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "load/loadprocessed.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_process").show();
											$("#insert_process").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_process").show();
										   $('#insertbody_process').empty();
										   $("#insertbody_process").append(html);
										   $("#insert_process").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_process").show();
										   $('#insertbody_process').empty();
										   $("#insertbody_process").append(html);	
										   $("#insertbody_process").hide();	
										   $("#insert_process").hide();										   												   		
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
$('#tabUL a[href="#pending"]').on('click', function(event){				
			//gototop(); 
			showpending();
				
});	
function showpending() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "load/loadpending.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_pending").show();
											$("#insert_pending").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_pending").show();
										   $('#insertbody_pending').empty();
										   $("#insertbody_pending").append(html);
										   $("#insert_pending").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_pending").show();
										   $('#insertbody_pending').empty();
										   $("#insertbody_pending").append(html);	
										   $("#insertbody_pending").hide();	
										   $("#insert_pending").hide();										   												   		
									   }													   
					             });		
}
$('#tabUL a[href="#backout"]').on('click', function(event){				
			//gototop(); 
			showbackout();
				
});	
function showbackout() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "load/loadbackout.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_backout").show();
											$("#insert_backout").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_backout").show();
										   $('#insertbody_backout').empty();
										   $("#insertbody_backout").append(html);
										   $("#insert_backout").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_backout").show();
										   $('#insertbody_backout').empty();
										   $("#insertbody_backout").append(html);	
										   $("#insertbody_backout").hide();	
										   $("#insert_backout").hide();										   												   		
									   }													   
					             });		
}
$('#tabUL a[href="#disapproved"]').on('click', function(event){				
			//gototop(); 
			showdisapproved();
				
});	
function showdisapproved() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "load/loaddisapproved.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_disapproved").show();
											$("#insert_disapproved").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_disapproved").show();
										   $('#insertbody_disapproved').empty();
										   $("#insertbody_disapproved").append(html);
										   $("#insert_disapproved").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_disapproved").show();
										   $('#insertbody_disapproved').empty();
										   $("#insertbody_disapproved").append(html);	
										   $("#insertbody_disapproved").hide();	
										   $("#insert_disapproved").hide();										   												   		
									   }													   
					             });		
}
$('#tabUL a[href="#approved"]').on('click', function(event){				
			//gototop(); 
			showapproved();
				
});	
function showapproved() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "load/loadapproved.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_approved").show();
											$("#insert_approved").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_approved").show();
										   $('#insertbody_approved').empty();
										   $("#insertbody_approved").append(html);
										   $("#insert_approved").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_approved").show();
										   $('#insertbody_approved').empty();
										   $("#insertbody_approved").append(html);	
										   $("#insertbody_approved").hide();	
										   $("#insert_approved").hide();										   												   		
									   }													   
					             });		
}
function showorientationsked(id2) {
										
				
		var id2 = id2;																																												
		var dataString = 'id2='+ id2;		
									
		
		//alert(dataString);
		
					$.ajax({
					type: "GET",
					url: "modal/modalorientationsked.php",
					data: dataString,
					cache: false,																							
							  success: function(html)
							    {
								   $("#insert_orientationschedule").show();
								   $('#insert_orientationschedule').empty();
								   $("#insert_orientationschedule").append(html);																	  
							   },
							  error: function(html)
							    {
								   $("#insert_orientationschedule").show();
								   $('#insert_orientationschedule').empty();
								   $("#insert_orientationschedule").append(html);	
								   $("#insert_orientationschedule").hide();											   												   		
							   }											   
			             });
}
function showphoneorientation(id2) {
	
		var id2 = id2;																																												
		var dataString = 'id2='+ id2;		
		
					$.ajax({
					type: "GET",
					url: "modal/modalphoneorientation.php",
					data: dataString,
					cache: false,																							
							  success: function(html)
							    {
								   $("#insert_phoneorientation").show();
								   $('#insert_phoneorientation').empty();
								   $("#insert_phoneorientation").append(html);									   								   																 
							   },
							  error: function(html)
							    {
								   $("#insert_phoneorientation").show();
								   $('#insert_phoneorientation').empty();
								   $("#insert_phoneorientation").append(html);	
								   $("#insert_phoneorientation").hide();											   												   		
							   }											   
			             });
}
function showsendemail(id2) {
	
		var id2 = id2;																																												
		var dataString = 'id2='+ id2;		
		
					$.ajax({
					type: "GET",
					url: "modal/modalsendemail.php",
					data: dataString,
					cache: false,																							
							  success: function(html)
							    {
								   $("#insert_sendemail").show();
								   $('#insert_sendemail').empty();
								   $("#insert_sendemail").append(html);	
								   
								   																  
							   },
							  error: function(html)
							    {
								   $("#insert_sendemail").show();
								   $('#insert_sendemail').empty();
								   $("#insert_sendemail").append(html);	
								   $("#insert_sendemail").hide();											   												   		
							   }											   
			             });
}
function showincompleterequirements(id2) {
										
				
		var id2 = id2;																																												
		var dataString = 'id2='+ id2;		
									
		
		//alert(dataString);
		
					$.ajax({
					type: "GET",
					url: "modal/modalincreq.php",
					data: dataString,
					cache: false,																							
							  success: function(html)
							    {
								   $("#insert_modalincreq").show();
								   $('#insert_modalincreq').empty();
								   $("#insert_modalincreq").append(html);																	  
							   },
							  error: function(html)
							    {
								   $("#insert_modalincreq").show();
								   $('#insert_modalincreq').empty();
								   $("#insert_modalincreq").append(html);	
								   $("#insert_modalincreq").hide();											   												   		
							   }											   
			             });
}
function overwrite() {
							
				var statusid = $("#statusid").val();
				var myapplicantid = $("#myapplicantid").val();						
				var companyid = $("#companyid").val();
				var userid = $("#userid").val();
				var recruitprofileid = $("#recruitprofileid").val();	
				
				var oldstatusid = $("#oldstatusid").val();
				var applicantprofilestatid = $("#applicantprofilestatid").val();
				var moduleid = $("#moduleid").val();	
																																																										
				var dataString = 'myapplicantid='+ myapplicantid+'&statusid='+ statusid
				+'&companyid='+ companyid+'&userid='+ userid+'&recruitprofileid='+ recruitprofileid
				+'&oldstatusid='+ oldstatusid+'&applicantprofilestatid='+ applicantprofilestatid+'&moduleid='+ moduleid;										
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "save/overwrite.php",
							data: dataString,
							cache: false,									
										beforeSend: function(html) 
										{			   
											$("#flashapplicantid2").show();
											$("#flashapplicantid2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Submitting Data...Please Wait.');				
										},															
									  success: function(html)
									    {
										    $("#insert_applicantid2").show();
										    $('#insert_applicantid2').empty();
										    $("#insert_applicantid2").append(html);
										    $("#flashapplicantid2").hide();	
										   																   
									   },
									  error: function(html)
									    {
										   $("#insert_applicantid2").show();
										   $('#insert_applicantid2').empty();
										   $("#insert_applicantid2").append(html);
										   $("#flashapplicantid2").hide();													   												   		
									   }											   
					             });
}
function showmodaloverwrite(id2,applicantprofilestatid) {
										
				//var id = $("#id").val();
				var id2 = id2;
				var applicantprofilestatid = applicantprofilestatid;
				//alert(applicantprofilestat);	
																																													
				var dataString = 'id2='+ id2+'&applicantprofilestatid='+ applicantprofilestatid;									
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "modal/modaloverwrite.php",
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
function showmodalupdateactionslip2(id2) {
										
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

function showmodalplacement_backout(id2) {
										
				var id2 = id2;																																
				var dataString = 'id2='+ id2;									
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "modal/modalplacement_backout.php",
							data: dataString,
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modalbackout").show();
										   $('#insert_modalbackout').empty();
										   $("#insert_modalbackout").append(html);																	  
									   },
									  error: function(html)
									    {
										   $("#insert_modalbackout").show();
										   $('#insert_modalbackout').empty();
										   $("#insert_modalbackout").append(html);	
										   $("#insert_modalbackout").hide();											   												   		
									   }											   
					             });
}
function showupdateapplicant(id2) {
										
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
//get category function
function getcategory(id) {
										
				//var id = $("#id").val();
				var id = id;
				//alert(id);	
												
				/*var searchstring =  '';																
				if(id ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+id;}
				*/																																	
				var dataString = 'id='+ id;									
				
				//alert(dataString);
				
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
										   
										   scrollToID('#' + insert_search, 750);																	   
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
function approve() {
										
				//var monthno_fromyear4 = $("#monthno_fromyear4").val();
				var actionslipid = $("#actionslipid").val();
				var payrollapprovalid = $("#payrollapprovalid").val();
				var hrapprovalid = $("#hrapprovalid").val();
				var approvalremarks = $("#approvalremarks").val();
				var hrapprovalremarks = $("#hrapprovalremarks").val();	
				var applicantid = $("#applicantid").val();	
				
				var accountcoorapprovalid = $("#accountcoorapprovalid").val();
				var accountcoorremarks = $("#accountcoorremarks").val();	
							
				//alert(id);	
												
				/*var searchstring =  '';																
				if(id ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+id;}
				*/																																	
				var dataString = 'actionslipid='+ actionslipid+'&payrollapprovalid='+ payrollapprovalid
				+'&hrapprovalid='+ hrapprovalid+'&approvalremarks='+ approvalremarks
				+'&hrapprovalremarks='+ hrapprovalremarks+'&applicantid='+ applicantid
				+'&accountcoorapprovalid='+ accountcoorapprovalid+'&accountcoorremarks='+ accountcoorremarks;								
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "save/approval.php",
							data: dataString,
							cache: false,									
										beforeSend: function(html) 
										{			   
											$("#flashapplicantid").show();
											$("#flashapplicantid").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Sending...Please Wait.');				
										},															
									  success: function(html)
									    {
										   $("#insert_applicantid").show();
										   $('#insert_applicantid').empty();
										   $("#insert_applicantid").append(html);
										   $("#flashapplicantid").hide();																	   
									   },
									  error: function(html)
									    {
										   $("#insert_search_update").show();
										   $('#insert_search_update').empty();
										   $("#insert_search_update").append(html);
										   $("#flashapplicantid").hide();													   												   		
									   }											   
					             });

}	
function modalclose33() {
	 //close modal	
	 $('#insert_modal3').modal("hide");

}

function gototop() {			
	  		//event.preventDefault();
			$('html, body').animate({scrollTop:0}, 'slow'); 				
				$('#insert_search').fadeOut(500, function() {
				   $('#insert_search').empty();
				});
	} 
function getexporttoxls() { 
	$("#insert_search").btechco_excelexport({
                containerid: "insert_search", datatype: $datatype.Table
            });
	} 	

function showmodalapproval(id2) {
										
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
							url: "modal/jomodalapproval.php",
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

function showmodalupdateactionslip(id2) {
										
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

function scrollToID(id, speed){
	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}

function refreshdiv() {
			setTimeout(function(){
				$('#insert_modal2').modal("hide");
				//location.reload();
						    
	    }, 5000);
		
	}  

$(document).ready(function() {
					    	   		
	 
							    	   		
	//initialize datepicker
	$('#periodcoveredfrom4').datepicker();
	$('#periodcoveredto4').datepicker();	
	$('#datecreatedfrom4').datepicker();
	$('#datecreatedto4').datepicker();		
	
	// navigation click actions	
	$('.scroll-link').on('click', function(event){
		//event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});
	
	$('#searchbtn2').on('click', function(event){
		//event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});	
	
	$('#searchbtn3').on('click', function(event){
		//event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});	
	
						    
$('#searchadvanceformx').bootstrapValidator({
						        message: 'This value is not valid',
				                live: 'enabled',
							    submitButtons: 'button[type="button"]',			        
						        feedbackIcons: {
						            valid: 'glyphicon glyphicon-ok',
						            invalid: 'glyphicon glyphicon-remove',
						            validating: 'glyphicon glyphicon-refresh'
						        },
						        fields: {
						            asdatesx: {
						                validators: {
						                    notEmpty: {
									            message: 'Action Slip Date is required'
									        }
						                }
						            },
						            datefromx: {
						                validators: {
											notEmpty: {
									            message: 'Date From is required'
									        },
						                    date: {
						                        format: 'MM/DD/YYYY',
						                        message: 'The end date is not valid. Should be in mm/dd/yyyy'
						                    }
						                }
						            },
						            datetox: {
						                validators: {
											notEmpty: {
									            message: 'Date To is required'
									        },
						                    date: {
						                        format: 'MM/DD/YYYY',
						                        message: 'The date needed is not valid. Should be in mm/dd/yyyy'
						                    }
						                }
						            },
						            asstatusx: {
						                validators: {
						                    notEmpty: {
												message: 'Action Slip Status is required'
									        }
						                }
						            }
						        }
						    });
				            // Validate the form manually
						    $('#searchadvancebtn').click(function() {
						        $('#searchadvanceformx').bootstrapValidator('validate');
						        			var bootstrapValidator = $('#searchadvanceformx').data('bootstrapValidator');
											var stat2 = bootstrapValidator.isValid();
											if(stat2=='1')
											{
												//alert("sample");
																var asdatesx = $("#asdatesx").val();
																var datefromx = $("#datefromx").val();
																var datetox = $("#datetox").val();	
																var asstatusx = $("#asstatusx").val();																
																																																			
																var dataString = 'asdatesx='+ asdatesx+'&datefromx='+ datefromx+'&datetox='+ datetox+'&asstatusx='+ asstatusx;								
																
																//alert(dataString);
												
																			$.ajax({
																			type: "GET",
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
				
																						    $('#defaultForm2')[0].reset(); 																	   
																					   },
																					  error: function(html)
																					    {
																						   $("#insert_searchtag").show();
																						   $('#insert_searchtag').empty();
																						   $("#insert_searchtag").append(html);
																						   $("#flashsearchtag").hide();	
																						   
																						   //alert('err');												   												   		
																					   }											   
																	             });
				
											}
						    });							    
						    
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
										            },				            
										            asstatus: {
										                validators: {
									                            notEmpty: {
									                                message: 'Action Slip Status is required'
									                            }
										                }
										            }				                        
						          }  
						          //--fields
						    });
						    
						    //search action slip
						     $('#searchasbtn').click(function() {
						     	$('#searchformx').bootstrapValidator('validate');
						        			var bootstrapValidator = $('#searchformx').data('bootstrapValidator');
											var stat2 = bootstrapValidator.isValid();
											if(stat2=='1')
											{
												var asdates = $("#asdates").val();
												var datepreference = $("#datepreference").val();
												var valuex = $("#valuex").val();
												var asstatus = $("#asstatus").val();
												var datepart = $("#datepart").val();
																
												var dataString = 'asdates='+ asdates+'&datepreference='+ datepreference+'&valuex='+ valuex+'&asstatus='+ asstatus+'&datepart='+ datepart;									
												
																$.ajax({
																type: "GET",
																url: "search/searchagingactionslip.php",
																data: dataString,
																cache: false,									
																			beforeSend: function(html) 
																			{			   
																				$("#insert_searchasflash").show();
																				$("#insert_searchasflash").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching...Please Wait.');		
																			},															
																		  success: function(html)
																		    {
																			   $('#insertbody_search').empty();
																			   $("#insertbody_search").show();
																			   $("#insertbody_search").append(html);
																			   $("#insert_searchasflash").hide();												    						   
																		   },
																		  error: function(html)
																		    {
																			   $("#insertbody_search").show();
																			   $('#insertbody_search').empty();
																			   $("#insertbody_search").append(html);
																			   $("#insert_searchasflash").hide();												   												   		
																		   }											   
														             });
											}			             
						     	});
						    
						    
						    $('#defaultForm2').bootstrapValidator({
						        message: 'This value is not valid',
				                live: 'enabled',
							    submitButtons: 'button[type="button"]',			        
						        feedbackIcons: {
						            valid: 'glyphicon glyphicon-ok',
						            invalid: 'glyphicon glyphicon-remove',
						            validating: 'glyphicon glyphicon-refresh'
						        },
						        fields: {
						            startdate: {
						                validators: {
						                    date: {
						                        format: 'MM/DD/YYYY',
						                        message: 'The start date is not valid. Should be in mm/dd/yyyy'
						                    }
						                }
						            },
						            enddate: {
						                validators: {
						                    date: {
						                        format: 'MM/DD/YYYY',
						                        message: 'The end date is not valid. Should be in mm/dd/yyyy'
						                    }
						                }
						            },
						            dateneededfrom: {
						                validators: {
						                    date: {
						                        format: 'MM/DD/YYYY',
						                        message: 'The date needed is not valid. Should be in mm/dd/yyyy'
						                    }
						                }
						            },
						            dateneededto: {
						                validators: {
						                    date: {
						                        format: 'MM/DD/YYYY',
						                        message: 'The date needed is not valid. Should be in mm/dd/yyyy'
						                    }
						                }
						            },
						            datecreatedfrom: {
						                validators: {
						                    date: {
						                        format: 'MM/DD/YYYY',
						                        message: 'The date created from is not valid. Should be in mm/dd/yyyy'
						                    }
						                }
						            },
						            datecreatedto: {
						                validators: {
						                    date: {
						                        format: 'MM/DD/YYYY',
						                        message: 'The date created to is not valid. Should be in mm/dd/yyyy'
						                    }
						                }
						            }
						        }
						    });
				            // Validate the form manually
						    $('#searchbtn2').click(function() {
						        $('#defaultForm2').bootstrapValidator('validate');
						        			var bootstrapValidator = $('#defaultForm2').data('bootstrapValidator');
											var stat2 = bootstrapValidator.isValid();
											if(stat2=='1')
											{
												//alert("sample");
																var tempno = $("#tempno").val();
																var firstname = $("#firstname").val();
																var lastname = $("#lastname").val();
																var accountsid = $("#accountsid").val();												
																var positionid = $("#positionid").val();
																var areaofassignmentid = $("#areaofassignmentid").val();
																
																var employmentstatusid = $("#employmentstatusid").val();
																var startdate = $("#startdate").val();
																var enddate = $("#enddate").val();
																var dateneededfrom = $("#dateneededfrom").val();												
																var dateneededto = $("#dateneededto").val();
																								
																var payrollcutoff = $("#payrollcutoff").val();
																var payday = $("#payday").val();
																var payingrate = $("#payingrate").val();
																var mandatoryid = $("#mandatoryid").val();												
																var paymentstatus = $("#paymentstatus").val();
																
																var cashbond = $("#cashbond").val();
																var createdbyid = $("#createdbyid").val();
																var otherinstructions = $("#otherinstructions").val();
																var datecreatedfrom = $("#datecreatedfrom").val();												
																var datecreatedto = $("#datecreatedto").val();		
																var actionslipstatid = $("#actionslipstatid").val();														
																																
																var o = $("#o").val();
																var t = $("#t").val();
																																																			
																var dataString = 'tempno='+ tempno+'&firstname='+ firstname+'&lastname='+ lastname+'&accountsid='+ accountsid+'&positionid='+ positionid
																+'&areaofassignmentid='+ areaofassignmentid+'&employmentstatusid='+ employmentstatusid+'&startdate='+ startdate+'&enddate='+ enddate+'&dateneededfrom='+ dateneededfrom
																+'&dateneededto='+ dateneededto+'&payrollcutoff='+ payrollcutoff+'&payday='+ payday+'&payingrate='+ payingrate+'&mandatoryid='+ mandatoryid
																+'&paymentstatus='+ paymentstatus+'&cashbond='+ cashbond+'&createdbyid='+ createdbyid+'&otherinstructions='+ otherinstructions+'&datecreatedfrom='+ datecreatedfrom
																+'&datecreatedto='+ datecreatedto+'&o='+ o+'&t='+ t+'&actionslipstatid='+ actionslipstatid;								
																
																//alert(dataString);
												
																			$.ajax({
																			type: "GET",
																			url: "search/searchadvanceactionslip.php",
																			data: dataString,
																			cache: false,									
																						beforeSend: function(html) 
																						{			   
																							$("#flash2").show();
																							$("#flash2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching Database...Please Wait.');		
																						},															
																					  success: function(html)
																					    {
																						   $('#insert_search2').empty();
																						   $("#insert_search2").show();
																						   $("#insert_search2").append(html);
																						   $("#flash2").hide();	
				
																						    $('#defaultForm2')[0].reset(); 																	   
																					   },
																					  error: function(html)
																					    {
																						   $("#insert_search2").show();
																						   $('#insert_search2').empty();
																						   $("#insert_search2").append(html);
																						   $("#flash2").hide();	
																						   
																						   //alert('err');												   												   		
																					   }											   
																	             });
				
											}
						    });	
						    // Validate the form manually
						    $('#searchbtn3').click(function() {
						        $('#defaultForm2').bootstrapValidator('validate');
						        			var bootstrapValidator = $('#defaultForm2').data('bootstrapValidator');
											var stat2 = bootstrapValidator.isValid();
											if(stat2=='1')
											{
												//alert("sample");
																var tempno = $("#tempno").val();
																var firstname = $("#firstname").val();
																var lastname = $("#lastname").val();
																var accountsid = $("#accountsid").val();												
																var positionid = $("#positionid").val();
																var areaofassignmentid = $("#areaofassignmentid").val();
																
																var employmentstatusid = $("#employmentstatusid").val();
																var startdate = $("#startdate").val();
																var enddate = $("#enddate").val();
																var dateneededfrom = $("#dateneededfrom").val();												
																var dateneededto = $("#dateneededto").val();
																								
																var payrollcutoff = $("#payrollcutoff").val();
																var payday = $("#payday").val();
																var payingrate = $("#payingrate").val();
																var mandatoryid = $("#mandatoryid").val();												
																var paymentstatus = $("#paymentstatus").val();
																
																var cashbond = $("#cashbond").val();
																var createdbyid = $("#createdbyid").val();
																var otherinstructions = $("#otherinstructions").val();
																var datecreatedfrom = $("#datecreatedfrom").val();												
																var datecreatedto = $("#datecreatedto").val();		
																var actionslipstatid = $("#actionslipstatid").val();														
																																
																var o = $("#o").val();
																var t = $("#t").val();
																																																			
																var dataString = 'tempno='+ tempno+'&firstname='+ firstname+'&lastname='+ lastname+'&accountsid='+ accountsid+'&positionid='+ positionid
																+'&areaofassignmentid='+ areaofassignmentid+'&employmentstatusid='+ employmentstatusid+'&startdate='+ startdate+'&enddate='+ enddate+'&dateneededfrom='+ dateneededfrom
																+'&dateneededto='+ dateneededto+'&payrollcutoff='+ payrollcutoff+'&payday='+ payday+'&payingrate='+ payingrate+'&mandatoryid='+ mandatoryid
																+'&paymentstatus='+ paymentstatus+'&cashbond='+ cashbond+'&createdbyid='+ createdbyid+'&otherinstructions='+ otherinstructions+'&datecreatedfrom='+ datecreatedfrom
																+'&datecreatedto='+ datecreatedto+'&o='+ o+'&t='+ t+'&actionslipstatid='+ actionslipstatid;								
																
																//alert(dataString);
												
																			$.ajax({
																			type: "GET",
																			url: "search/searchadvanceactionslip2.php",
																			data: dataString,
																			cache: false,									
																						beforeSend: function(html) 
																						{			   
																							$("#flash2").show();
																							$("#flash2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching Database...Please Wait.');		
																						},															
																					  success: function(html)
																					    {
																						   $('#insert_search2').empty();
																						   $("#insert_search2").show();
																						   $("#insert_search2").append(html);
																						   $("#flash2").hide();	
				
																						    $('#defaultForm2')[0].reset(); 																	   
																					   },
																					  error: function(html)
																					    {
																						   $("#insert_search2").show();
																						   $('#insert_search2').empty();
																						   $("#insert_search2").append(html);
																						   $("#flash2").hide();	
																						   
																						   //alert('err');												   												   		
																					   }											   
																	             });
				
											}
						    });		        
		
	
	
    //-------------------popover----------------------------------
$('.popoverapptoval').popover({
                trigger: "hover",
                placement: "right",
                content: "Authorization Approval",	
                 });
                 
$('.scroll-link').popover({
	                trigger: "hover",
	                placement: "right",
	                content: "View Applicant Profile",
	                });   
	                
$('.popoverupdateapplicant').popover({
	                trigger: "hover",
	                placement: "right",
	                content: "Update Applicant Profile",
	                }); 
	                
$('.popoverupdateactionslip').popover({
                trigger: "hover",
                placement: "right",
                content: "Update Action Slip",	
                 });	
                 
$('.popoverprintactionslip').popover({
                trigger: "hover",
                placement: "right",
                content: "Print Action Slip",	
                 });
                 
$('.popoverplacement_backout').popover({
                trigger: "hover",
                placement: "right",
                content: "Withdraw Application",	
                 });
                 
$('.popoverplacement_inc').popover({
                trigger: "hover",
                placement: "right",
                content: "Notify applicant for incomplete requirements",	
                 });  
                 
$('.popoverplacement_email').popover({
                trigger: "hover",
                placement: "right",
                content: "Email Applicant",	
                 }); 
                 
$('.popoverphoneorientation').popover({
                trigger: "hover",
                placement: "right",
                content: "Log phone calls",	
                 });   
                 
$('.popoverorientationschedule').popover({
                trigger: "hover",
                placement: "right",
                content: "Send Orientation Schedule",	
                 });   
                 
                 
  $('#form22').on('init.field.bv', function(e, data) {	
        var $parent    = data.element.parents('.form-group'),
            $icon      = $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]'),
            options    = data.bv.getOptions(),                      // Entire options
            validators = data.bv.getOptions(data.field).validators; // The field validators

        if (validators.notEmpty && options.feedbackIcons && options.feedbackIcons.required) {
            $icon.addClass(options.feedbackIcons.required).show();
        }
    })
  .bootstrapValidator({
		live: 'enabled',
        message: 'This value is not valid',
        submitButtons: 'button[type="button"]',	
        feedbackIcons: {
                	required: 'glyphicon glyphicon-asterisk',
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
        },
        //--fields
        fields: {
				            startdate2x: {
				                validators: {
			                            notEmpty: {
			                                message: 'The date started is required'
			                            },  
			                             date: {
					                        format: 'MM/DD/YYYY',
					                        message: 'The start date is not valid. Should be in mm/dd/yyyy'
					                    }
				                }
				            },
				            enddate2x: {
				                validators: {
			                            notEmpty: {
			                                message: 'The date started is required'
			                            },  
			                             date: {
					                        format: 'MM/DD/YYYY',
					                        message: 'The end date is not valid. Should be in mm/dd/yyyy'
					                    }
				                }
				            },
				            areaofassignmentid2x: {
				                validators: {
			                            notEmpty: {
			                                message: 'Area of Assignment is required'
			                            }
				                }
				            },				            
				            neededdate2x: {
				                validators: {
			                            notEmpty: {
			                                message: 'The date started is required'
			                            },  
			                             date: {
					                        format: 'MM/DD/YYYY',
					                        message: 'The date needed is not valid. Should be in mm/dd/yyyy'
					                    }
				                }
				            }				                        
          }  
          //--fields
    })
    .on('error.field.bv', function(e, data) {
    	//alert('error');
        console.log(data.field, data.element, '-->error');
        //$("#validateBtn").prop('disabled', true);	
    })
    .on('success.field.bv', function(e, data) {
        console.log(data.field, data.element, '-->success'); 
    });
    
    //search action slip
     $('#searchbtn').click(function() {
				var searchfield = $("#searchfield").val();
				var filter = document.URL.substr(document.URL.indexOf('#')+1)																																	
				var dataString = 'searchfield='+ searchfield+'&filter='+ filter;									
				
								$.ajax({
								type: "GET",
								url: "search/searchactionslip.php",
								data: dataString,
								cache: false,									
											beforeSend: function(html) 
											{			   
												$("#flash2").show();
												$("#flash2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching Database...Please Wait.');		
											},															
										  success: function(html)
										    {
											   $('#insert_search2').empty();
											   $("#insert_search2").show();
											   $("#insert_search2").append(html);
											   $("#flash2").hide();	

											    $('#defaultForm')[0].reset(); 		
				   
										   },
										  error: function(html)
										    {
											   $("#insert_search2").show();
											   $('#insert_search2').empty();
											   $("#insert_search2").append(html);
											   $("#flash2").hide();												   												   		
										   }											   
						             });
     	});
     	
     $('#searchtagbtn').click(function() {
				var searchfield = $("#searchtagfield").val();
				var filter = document.URL.substr(document.URL.indexOf('#')+1)																																	
				var dataString = 'searchfield='+ searchfield+'&filter='+ filter;									
				
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
     	
     $('#searchbtn9x').click(function() {
				var searchfield = $("#searchfield").val();
				var filter = document.URL.substr(document.URL.indexOf('#')+1)																																	
				var dataString = 'searchfield='+ searchfield+'&filter='+ filter;									
				
								$.ajax({
								type: "GET",
								url: "search/searchactionslip2.php",
								data: dataString,
								cache: false,									
											beforeSend: function(html) 
											{			   
												$("#flash2").show();
												$("#flash2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching Database...Please Wait.');		
											},															
										  success: function(html)
										    {
											   $('#insert_search2').empty();
											   $("#insert_search2").show();
											   $("#insert_search2").append(html);
											   $("#flash2").hide();	

											    $('#defaultForm')[0].reset(); 		
				   
										   },
										  error: function(html)
										    {
											   $("#insert_search2").show();
											   $('#insert_search2').empty();
											   $("#insert_search2").append(html);
											   $("#flash2").hide();												   												   		
										   }											   
						             });
     	});
                 	
            
    // Validate the form manually
    $('#validateBtn').click(function() {
    	//alert('test');
        $('#form22').bootstrapValidator('validate');
        		        	var bootstrapValidator = $('#form22').data('bootstrapValidator');
							var stat1 = bootstrapValidator.isValid();
							if(stat1=='1')
							{
								//alert('success');
												var recruitprofileid = $("#recruitprofileid").val();
												var applicantid = $("#applicantid").val();
												var companyid = $("#companyid").val();	
												var areaofassignmentid = $("#areaofassignmentid2x").val();
												//alert(areaofassignmentid);
												var startdate = $("#startdate2x").val();
												var enddate = $("#enddate2x").val();	
												var neededdate = $("#neededdate2x").val();

												//var employmentstatusidradios = $('input[name=employmentstatusidradios]:checked').val();		
												var employmentstatusidradios = $("#employmentstatusidradios").val();														
																									
												var workschedule = $("#workschedule2x").val();
												var payrollcutoff = $("#payrollcutoff2x").val();
												var payday = $("#payday2x").val();	
												var payingrate = $("#payingrate2x").val();
												var paymentstatusid = $("#paymentstatusid").val();
												
												var mandatoryidradios = $('input[name=mandatoryidradios]:checked').val();	
												
												var otherinstructions2x = $("#otherinstructions2x").val();
												var cashbond2x = $("#cashbond2x").val();	
												var actionslipid = $("#actionslipid").val();	
												var asstatus2 = $("#asstatusx2").val();	
												//alert(asstatus2);										
																																																				
												var dataString = 'recruitprofileid='+ recruitprofileid+'&applicantid='+ applicantid
												+'&companyid='+ companyid+'&areaofassignmentid='+ areaofassignmentid+'&startdate='+ startdate
												+'&enddate='+ enddate+'&neededdate='+ neededdate+'&employmentstatusidradios='+ employmentstatusidradios
												+'&employmentstatusidradios='+ employmentstatusidradios+'&workschedule='+ workschedule+'&payrollcutoff='+ payrollcutoff
												+'&payday='+ payday+'&payingrate='+ payingrate+'&paymentstatusid='+ paymentstatusid
												+'&mandatoryidradios='+ mandatoryidradios+'&otherinstructions='+ otherinstructions2x+'&cashbond='+ cashbond2x+'&actionslipid='+ actionslipid+'&asstatus2='+ asstatus2;										
												
												//alert(dataString);
												
															$.ajax({
															type: "GET",
															url: "save/processactionslip.php",
															data: dataString,
															cache: false,									
																		beforeSend: function(html) 
																		{			   
																			$("#flash22").show();
																			$("#flash22").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Creating Action Slip...Please Wait.');				
																		},															
																	  success: function(html)
																	    {
																		    $("#insert_search22").show();
																		    $('#insert_search22').empty();
																		    $("#insert_search22").append(html);
																		    $("#flash22").hide();																			   																   
																	   },
																	  error: function(html)
																	    {
																		   $("#insert_search22").show();
																		   $('#insert_search22').empty();
																		   $("#insert_search22").append(html);
																		   $("#flash22").hide();													   												   		
																	   }											   
													             });
							}
    });                                       	
});