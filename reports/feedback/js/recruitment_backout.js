
$(document).ready(function() {	

	
		   //POP Confirm
		   $("#placementbtn_backupbtn").popConfirm({
			   	title: "Are you sure you want to withdraw application?", // The title of the confirm
		        content: "This transaction will permanently tag applicant to Active File. Do you want to continue?", // The message of the confirm
		        placement: "right", // The placement of the confirm (Top, Right, Bottom, Left)
		        container: "body", // The html container
		        yesBtn: "Yes",
		        noBtn: "No"
		   });
		   
		   $("#increqbtn").popConfirm({
			   	title: "Are you sure to send a reminder?", // The title of the confirm
		        content: "This transaction will send an email to applicant reminding him/her to complete the pre-employment requirements.", // The message of the confirm
		        placement: "right", // The placement of the confirm (Top, Right, Bottom, Left)
		        container: "body", // The html container
		        yesBtn: "Yes",
		        noBtn: "No"
		   });
		   
		   $("#sendemailbtn").popConfirm({
			   	title: "Continue?", 
		        content: "This will send an email to applicant/employee.", 
		        placement: "right", 
		        container: "body", 
		        yesBtn: "Yes",
		        noBtn: "No"
		   });
		   
		   $("#sendphoneorientationbtn").popConfirm({
			   	title: "Continue?", 
		        content: "This transaction will send data to database.", 
		        placement: "right", 
		        container: "body", 
		        yesBtn: "Yes",
		        noBtn: "No"
		   });
		   		   
		    $("#sendphoneorientationskedbtn").popConfirm({
			   	title: "Continue?", 
		        content: "This will send an email copy of orientation schedule to employee.", 
		        placement: "right", 
		        container: "body", 
		        yesBtn: "Yes",
		        noBtn: "No"
		   });

	//-----------------------------------------------------------
						    $('#defaultForm66x')
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
						            placementremarks: {
							                validators: {
						                            notEmpty: {
						                                message: 'Remarks is required'
						                            }
							                }
						            }					            						           
						        }
						    });
						    
						    $('#defaultForm66z')
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
						            subjectx: {
							                validators: {
						                            notEmpty: {
						                                message: 'Subject is required'
						                            }
							                }
						            },
						            emailmessagex: {
							                validators: {
						                            notEmpty: {
						                                message: 'Email body is required'
						                            }
							                }
						            }					            						           
						        }
						    });
						    
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
						            actionid: {
							                validators: {
						                            notEmpty: {
						                                message: 'Action Type is required'
						                            }
							                }
						            },						            
						            callstartdatetime: {
							                validators: {
						                            notEmpty: {
						                                message: 'Start Date/Time of Call is required'
						                            }
							                }
						            },
						            callenddatetime: {
							                validators: {
						                            notEmpty: {
						                                message: 'End Date/Time of Call is required'
						                            }
							                }
						            },
						            subject: {
							                validators: {
						                            notEmpty: {
						                                message: 'Call Subject is required'
						                            }
							                }
						            },
						            emailmessage: {
							                validators: {
						                            notEmpty: {
						                                message: 'Phone Conversation is required'
						                            }
							                }
						            }					            						           
						        }
						    });
						    
						    $('#defaultForm66xs')
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
						            placementremarks: {
							                validators: {
						                            notEmpty: {
						                                message: 'Remarks is required'
						                            }
							                }
						            }					            						           
						        }
						    });
						   
						    $('#placementbtn_backupbtn').click(function() {
						       event.preventDefault();	
						    });	
						    
						    $('#increqbtn').click(function() {
						       event.preventDefault();	
						    });	
						    						    
						    $('#sendemailbtn').click(function() {
						       event.preventDefault();	
						    });	
						    
						    $('#sendphoneorientationbtn').click(function() {
						       event.preventDefault();	
						    });
						    
						    $('#sendphoneorientationskedbtn').click(function() {
						       event.preventDefault();	
						    });						    
						    

});						    
	
//-----------------------------------------------------

function refreshdiv() {
			setTimeout(function(){
				location.reload();						    
	    }, 5000);
		
} 


function placement_backout() {
	 $('#defaultForm66x').bootstrapValidator('validate');
	        			var bootstrapValidator = $('#defaultForm66x').data('bootstrapValidator');
						var stat2 = bootstrapValidator.isValid();
						if(stat2=='1')
						{
											var placementremarks = $("#placementremarks").val();
											var placementid = $("#placementid").val();
											var actionslipid = $("#actionslipid").val();
											var companyid = $("#companyid").val();
											var applicantid = $("#applicantid").val();	
											var isoweeksid= $("#isoweeksid").val();																		
																																																																																																																							
											var dataString = 'placementremarks='+ placementremarks+'&placementid='+ placementid+'&actionslipid='+ actionslipid+'&companyid='+ companyid+'&applicantid='+ applicantid+'&isoweeksid='+ isoweeksid;																								
											//alert(dataString);
							
														$.ajax({
														type: "POST",
														url: "save/savebackout.php",
														data: dataString,
														cache: false,									
																	beforeSend: function(html) 
																	{			   
																		$("#flash2t").show();
																		$("#flash2t").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Completing Transaction...Please Wait.');		
																	},															
																  success: function(html)
																    {
																	   $('#insert_search2xt').empty();
																	   $("#insert_search2xt").show();
																	   $("#insert_search2xt").append(html);
																	   $("#flash2t").hide();	

																	    //$('#defaultForm66x')[0].reset(); 																	   
																   },
																  error: function(html)
																    {
																	   $("#insert_search2xt").show();
																	   $('#insert_search2xt').empty();
																	   $("#insert_search2xt").append(html);
																	   $("#flash2t").hide();														   												   		
																   }											   
												             });
												             //$.ajax({

						}
						//if(stat2=='1')
				}
				
function incompleterequirements() {
	 $('#defaultForm66x').bootstrapValidator('validate');
	        			var bootstrapValidator = $('#defaultForm66x').data('bootstrapValidator');
						var stat2 = bootstrapValidator.isValid();
						if(stat2=='1')
						{
											var placementremarks = $("#placementremarks").val();											
											var applicantid = $("#applicantid").val();																														
																																																																																																																							
											var dataString = 'placementremarks='+ placementremarks+'&applicantid='+ applicantid;																								
											//alert(dataString);
							
														$.ajax({
														type: "POST",
														url: "save/saveincreq.php",
														data: dataString,
														cache: false,									
																	beforeSend: function(html) 
																	{			   
																		$("#flash2y").show();
																		$("#flash2y").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Sending email reminder to applicant...Please Wait.');		
																	},															
																  success: function(html)
																    {
																	   $('#insert_search2xy').empty();
																	   $("#insert_search2xy").show();
																	   $("#insert_search2xy").append(html);
																	   $("#flash2y").hide();	

																	    $('#defaultForm66x')[0].reset(); 																	   
																   },
																  error: function(html)
																    {
																	   $("#insert_search2xy").show();
																	   $('#insert_search2xy').empty();
																	   $("#insert_search2xy").append(html);
																	   $("#flash2y").hide();														   												   		
																   }											   
												             });
												             //$.ajax({

						}
						//if(stat2=='1')
				}	
				
function sendemail() {
	 $('#defaultForm66z').bootstrapValidator('validate');
	        			var bootstrapValidator = $('#defaultForm66z').data('bootstrapValidator');
						var stat2 = bootstrapValidator.isValid();
						if(stat2=='1')
						{
											var subjectx = $("#subjectx").val();	
											var emailmessagex = $("#emailmessagex").val();										
											var applicantid = $("#applicantid").val();																														
																																																																																																																							
											var dataString = 'subjectx='+ subjectx+'&emailmessagex='+ emailmessagex+'&applicantid='+ applicantid;																								
											//alert(dataString);
							
														$.ajax({
														type: "POST",
														url: "save/savesendemail.php",
														data: dataString,
														cache: false,									
																	beforeSend: function(html) 
																	{			   
																		$("#flash2yz").show();
																		$("#flash2yz").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Sending email reminder to applicant...Please Wait.');		
																	},															
																  success: function(html)
																    {
																	   $('#insert_search2xyz').empty();
																	   $("#insert_search2xyz").show();
																	   $("#insert_search2xyz").append(html);
																	   $("#flash2yz").hide();	

																	    $('#defaultForm66z')[0].reset(); 																	   
																   },
																  error: function(html)
																    {
																	   $("#insert_search2xyz").show();
																	   $('#insert_search2xyz').empty();
																	   $("#insert_search2xyz").append(html);
																	   $("#flash2yz").hide();														   												   		
																   }											   
												             });
												             //$.ajax({

						}
						//if(stat2=='1')
				}

function sendphoneorientation() {
	 $('#defaultForm66zx').bootstrapValidator('validate');
	        			var bootstrapValidator = $('#defaultForm66zx').data('bootstrapValidator');
						var stat2 = bootstrapValidator.isValid();
						if(stat2=='1')
						{
											var actionid = $("#actionid").val();													
											var sendanemail = $("#sendanemail").is(':checked');									
											var subject = $("#subject").val();	
											var emailmessage = $("#emailmessage").val();
											var applicantid = $("#applicantid").val();	
											
											var callstartdatetime = $("#callstartdatetime").val();	
											var callenddatetime = $("#callenddatetime").val();																												
																																																																																																																							
											var dataString = 'actionid='+ actionid+'&sendanemail='+ sendanemail+'&subject='+ subject
											+'&callstartdatetime='+ callstartdatetime+'&callenddatetime='+ callenddatetime
											+'&emailmessage='+ emailmessage+'&applicantid='+ applicantid;																								
											//alert(dataString);
							
														$.ajax({
														type: "POST",
														url: "save/savephoneorientation.php",
														data: dataString,
														cache: false,									
																	beforeSend: function(html) 
																	{			   
																		$("#flash2yzt").show();
																		$("#flash2yzt").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Sending data to database...Please Wait.');		
																	},															
																  success: function(html)
																    {
																	   $('#insert_search2xyzt').empty();
																	   $("#insert_search2xyzt").show();
																	   $("#insert_search2xyzt").append(html);
																	   $("#flash2yzt").hide();	

																	    $('#defaultForm66zx')[0].reset(); 																	   
																   },
																  error: function(html)
																    {
																	   $("#insert_search2xyzt").show();
																	   $('#insert_search2xyzt').empty();
																	   $("#insert_search2xyzt").append(html);
																	   $("#flash2yzt").hide();														   												   		
																   }											   
												             });
												             //$.ajax({

						}
						//if(stat2=='1')
				}
				
function orientationsked() {
	 $('#defaultForm66xs').bootstrapValidator('validate');
	        			var bootstrapValidator = $('#defaultForm66xs').data('bootstrapValidator');
						var stat2 = bootstrapValidator.isValid();
						if(stat2=='1')
						{
											var placementremarks = $("#placementremarks").val();											
											var applicantid = $("#applicantid").val();																														
																																																																																																																							
											var dataString = 'placementremarks='+ placementremarks+'&applicantid='+ applicantid;																								
											//alert(dataString);
							
														$.ajax({
														type: "POST",
														url: "save/saveorientationsked.php",
														data: dataString,
														cache: false,									
																	beforeSend: function(html) 
																	{			   
																		$("#flash2ys").show();
																		$("#flash2ys").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Sending orientation schedule to applicant/employee...Please Wait.');		
																	},															
																  success: function(html)
																    {
																	   $('#insert_search2xys').empty();
																	   $("#insert_search2xys").show();
																	   $("#insert_search2xys").append(html);
																	   $("#flash2ys").hide();	

																	    $('#defaultForm66xs')[0].reset(); 																	   
																   },
																  error: function(html)
																    {
																	   $("#insert_search2xys").show();
																	   $('#insert_search2xys').empty();
																	   $("#insert_search2xys").append(html);
																	   $("#flash2ys").hide();														   												   		
																   }											   
												             });
												             //$.ajax({

						}
						//if(stat2=='1')
				}	