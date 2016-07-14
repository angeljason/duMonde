function savemedical(){
	$('#medicalform')
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
                    medicaldatediagnosed: {
                        validators: {
                            date: {
		                        format: 'YYYY-MM-DD',
		                        message: 'The Date Diagnosed field is not a valid date format. Should be in yyyy-mm-dd'
		                    }
                        }
                    },
                    medicaldatediagnosed_exp: {
                        validators: {
                            notEmpty: {
                                message: 'Expiration Days is required'
                            },
                            digits: {
	                                message: 'Expiration Days can contain only digits'
	                        },
	                        greaterThan: {
	                        		value: 1
			                }
                        }
                    },
                    healthcardno: {
                        validators: {
                            date: {
		                        format: 'YYYY-MM-DD',
		                        message: 'Health Card No is not a valid date format. Should be in yyyy-mm-dd'
		                    }
                        }
                    },
                    healthcardno_exp: {
                        validators: {
                            notEmpty: {
                                message: 'Expiration Days field is required'
                            },
                            digits: {
	                                message: 'Expiration Days can contain only digits'
	                        },
	                        greaterThan: {
	                        		value: 1
			                }
                        }
                    }   
                }
            })
            .on('error.field.bv', function(e, data) {
            	//alert('error');
                console.log(data.field, data.element, '-->error');                	
            })
            .on('success.field.bv', function(e, data) {
                console.log(data.field, data.element, '-->success'); 
            });
            $('#medicalform').bootstrapValidator('validate');
		        			var bootstrapValidator = $('#medicalform').data('bootstrapValidator');
							var stat3 = bootstrapValidator.isValid();
							if(stat3=='1')
							{
								var medicaldatediagnosed = $("#medicaldatediagnosed").val();	
								var medicalresult = $("#medicalresult").val();
								var healthcardno = $("#healthcardno").val();	
								var bloodtype = $("#bloodtype").val();
								var applicantidz = $("#applicantidz").val();
								
								var medicaldatediagnosed_exp = $("#medicaldatediagnosed_exp").val();
								var healthcardno_exp = $("#healthcardno_exp").val();							
																																																			
								var dataString = 'medicaldatediagnosed='+ medicaldatediagnosed +'&medicalresult='+ medicalresult+'&healthcardno='+ healthcardno
								+'&bloodtype='+ bloodtype+'&applicantid='+ applicantidz+'&medicaldatediagnosed_exp='+ medicaldatediagnosed_exp+'&healthcardno_exp='+ healthcardno_exp;	
																
								$.ajax({
								type: "GET",
								url: "save/savemedical.php",
								data: dataString,
								cache: false,									
											beforeSend: function(html) 
											{
															   
												$("#flash_medical").show();
												$("#flash_medical").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Saving...Please Wait.');		
											},															
										  success: function(html)
										    {
											   
											   $("#insert_searchmedical").show();
											   $("#insert_searchmedical").append(html);												   											   
											   $('#flash_medical').hide();										   
											   $('#flash_medical').empty();											   						   
										   }											   
						             });
								
							}
							else
							{
								e.preventDefault();
								$('#medicalform').bootstrapValidator('validate');
							}
}
function saveclearance(){
	$('#clearanceform')
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
                    nbiclearance: {
                        validators: {
                            date: {
		                        format: 'YYYY-MM-DD',
		                        message: 'The NBI Clearance field is not a valid date format. Should be in yyyy-mm-dd'
		                    }
                        }
                    },  
                    policeclearance: {
                        validators: {
                            date: {
		                        format: 'YYYY-MM-DD',
		                        message: 'The Police Clearance field is not a valid date format. Should be in yyyy-mm-dd'
		                    }
                        }
                    },                    
                    bgyclearance: {
                        validators: {
                            date: {
		                        format: 'YYYY-MM-DD',
		                        message: 'The Barangay Clearance is not a valid date format. Should be in yyyy-mm-dd'
		                    }
                        }
                    },
                    nbiclearance_exp: {
                        validators: {
                            notEmpty: {
                                message: 'This field is required'
                            },
                            digits: {
	                                message: 'The value can contain only digits'
	                        },
	                        greaterThan: {
	                        		value: 1
			                }
                        }
                    },  
                    policeclearance_exp: {
                        validators: {
                            notEmpty: {
                                message: 'This field is required'
                            },
                            digits: {
	                                message: 'The value can contain only digits'
	                        },
	                        greaterThan: {
	                        		value: 1
			                }
                        }
                    },                    
                    bgyclearance_exp: {
                        validators: {
                            notEmpty: {
                                message: 'This field is required'
                            },
                            digits: {
	                                message: 'The value can contain only digits'
	                        },
	                        greaterThan: {
	                        		value: 1
			                }
                        }
                    }   
                }
            })
            .on('error.field.bv', function(e, data) {
            	//alert('error');
                console.log(data.field, data.element, '-->error');                	
            })
            .on('success.field.bv', function(e, data) {
                console.log(data.field, data.element, '-->success'); 
            });
            $('#clearanceform').bootstrapValidator('validate');
		        			var bootstrapValidator = $('#clearanceform').data('bootstrapValidator');
							var stat2 = bootstrapValidator.isValid();
							if(stat2=='1')
							{
								var nbiclearance = $("#nbiclearance").val();	
								var policeclearance = $("#policeclearance").val();
								var bgyclearance = $("#bgyclearance").val();	
								var applicantidw = $("#applicantidw").val();	
								
								var nbiclearance_exp = $("#nbiclearance_exp").val();	
								var policeclearance_exp = $("#policeclearance_exp").val();
								var bgyclearance_exp = $("#bgyclearance_exp").val();						
																																																			
								var dataString = 'nbiclearance='+ nbiclearance +'&policeclearance='+ policeclearance+'&bgyclearance='+ bgyclearance
								+'&applicantid='+ applicantidw+'&nbiclearance_exp='+ nbiclearance_exp+'&policeclearance_exp='+ policeclearance_exp+'&bgyclearance_exp='+ bgyclearance_exp;	
																
								$.ajax({
								type: "GET",
								url: "save/saveclearances.php",
								data: dataString,
								cache: false,									
											beforeSend: function(html) 
											{
															   
												$("#flash_clearance").show();
												$("#flash_clearance").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Saving...Please Wait.');		
											},															
										  success: function(html)
										    {
											   
											   $("#insert_searchclearance").show();
											   $("#insert_searchclearance").append(html);												   											   
											   $('#flash_clearance').hide();										   
											   $('#flash_clearance').empty();											   						   
										   }											   
						             });
								
							}
							else
							{
								e.preventDefault();
								$('#clearanceform').bootstrapValidator('validate');
							}
}

function savegovtbtn(){
	$('#govtform')
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
                    sss: {
                        validators: {
                            digits: {
                                message: 'SSS no can only contain digits'
                            },
                            stringLength: {
		                        min: 10,
		                        message: 'SSS must be 10 characters long'
		                    },
		                    identical: {
			                        field: 'sss_confirm',
			                        message: 'The SSS and its confirm are not the same'
			                }
                        }
                    },  
                    sss_confirm: {
                        validators: {
                            digits: {
                                message: 'SSS no can only contain digits'
                            },
                            stringLength: {
		                        min: 10,
		                        message: 'SSS must be 10 characters long'
		                    },
		                    identical: {
			                        field: 'sss',
			                        message: 'The SSS and its confirm are not the same'
			                }
                        }
                    },
                    hdmf: {
                        validators: {
                            digits: {
                                message: 'HDMF number can only contain digits'
                            },
                            stringLength: {
		                        min: 12,
		                        message: 'HDMF number must be 12 characters long'
		                    },
		                    identical: {
			                        field: 'hdmf_confirm',
			                        message: 'The HDMF and its confirm are not the same'
			                }
                        }
                    },
                    hdmf_confirm: {
                        validators: {
                            digits: {
                                message: 'HDMF number can only contain digits'
                            },
                            stringLength: {
		                        min: 12,
		                        message: 'HDMF number must be 12 characters long'
		                    },
		                    identical: {
			                        field: 'hdmf',
			                        message: 'The HDMF and its confirm are not the same'
			                }
                        }
                    },
                    philhealth: {
                        validators: {
                            digits: {
                                message: 'Philhealth No. can only contain digits'
                            },
                            stringLength: {
		                        min: 12,
		                        message: 'Philhealth No. must be 12 characters long'
		                    },
		                    identical: {
			                        field: 'philhealth_confirm',
			                        message: 'The Philhealth No. and its confirm are not the same'
			                }
                        }
                    }, 
                    philhealth_confirm: {
                        validators: {
                            digits: {
                                message: 'Philhealth No. can only contain digits'
                            },
                            stringLength: {
		                        min: 12,
		                        message: 'Philhealth No. must be 12 characters long'
		                    },
		                    identical: {
			                        field: 'philhealth',
			                        message: 'The Philhealth No. and its confirm are not the same'
			                }
                        }
                    },                   
                    tin: {
                        validators: {
                            digits: {
                                message: 'TIN can only contain digits'
                            },
		                    identical: {
			                        field: 'tin_confirm',
			                        message: 'The TIN and its confirm are not the same'
			                }
                        }
                    },
                    tin_confirm: {
                        validators: {
                            digits: {
                                message: 'TIN can only contain digits'
                            },
		                    identical: {
			                        field: 'tin',
			                        message: 'The TIN and its confirm are not the same'
			                }
                        }
                    }   
                }
            })
            .on('error.field.bv', function(e, data) {
            	//alert('error');
                console.log(data.field, data.element, '-->error');                	
            })
            .on('success.field.bv', function(e, data) {
                console.log(data.field, data.element, '-->success'); 
            });
            $('#govtform').bootstrapValidator('validate');
		        			var bootstrapValidator = $('#govtform').data('bootstrapValidator');
							var stat1 = bootstrapValidator.isValid();
							if(stat1=='1')
							{
								var sss = $("#sss").val();	
								var tin = $("#tin").val();
								var philhealth = $("#philhealth").val();
								var hdmf = $("#hdmf").val();
								var applicantidz = $("#applicantidz").val();
																																																			
								var dataString = 'sss='+ sss +'&tin='+ tin+'&philhealth='+ philhealth
								+'&hdmf='+ hdmf+'&applicantidz='+ applicantidz;	
																
								$.ajax({
								type: "GET",
								url: "save/savegovtid.php",
								data: dataString,
								cache: false,									
											beforeSend: function(html) 
											{
															   
												$("#flash_govtidz").show();
												$("#flash_govtidz").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Saving...Please Wait.');		
											},															
										  success: function(html)
										    {
											   
											   $("#insert_govtidz").show();
											   $("#insert_govtidz").append(html);												   											   
											   $('#flash_govtidz').hide();										   
											   $('#flash_govtidz').empty();											   						   
										   }											   
						             });
								
							}
							else
							{
								e.preventDefault();
								$('#govtform').bootstrapValidator('validate');
							}
}

function showmedical(id2) {
													
		var id2 = id2;																																												
		var dataString = 'id2='+ id2;		

		
					$.ajax({
					type: "GET",
					url: "modal/modalmedical.php",
					data: dataString,
					cache: false,	
							  beforeSend: function(html) 
								{											   
									$("#flash2").show();
									$("#flash2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading Medical Information...Please Wait.');				
								},																													 
							   success: function(html)
							    {								   
								   $('#insert_medical').empty();
								   $("#insert_medical").show();
								   $("#insert_medical").append(html);	
								   $('#flash2').empty();									   								   																 
							   },
							  error: function(html)
							    {
								   $("#insert_medical").show();
								   $('#insert_medical').empty();
								   $("#insert_medical").append(html);	
								   $("#flash2").hide();											   												   		
							   }											
							      
			             });
}
function showclearances(id2) {
													
		var id2 = id2;																																												
		var dataString = 'id2='+ id2;													

					$.ajax({
					type: "GET",
					url: "modal/modalclearances.php",
					data: dataString,
					cache: false,	
							  beforeSend: function(html) 
								{			   
									$("#flash2").show();
									$("#flash2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading Clearances...Please Wait.');				
								},																													 
							   success: function(html)
							    {
							       $('#insert_clearances').empty(); 	
								   $("#insert_clearances").show();								   
								   $("#insert_clearances").append(html);	
								   $('#flash2').empty();									   								   																 
							   },
							  error: function(html)
							    {
								   $("#insert_clearances").show();
								   $('#insert_clearances').empty();
								   $("#insert_clearances").append(html);	
								   $("#flash2").hide();											   												   		
							   }											
							      
			             });
}
function showgovtid(id2) {
													
		var id2 = id2;																																												
		var dataString = 'id2='+ id2;		
											
		//alert(dataString);
		
					$.ajax({
					type: "GET",
					url: "modal/modalgovtid.php",
					data: dataString,
					cache: false,	
							  beforeSend: function(html) 
								{	
									$('#insert_govtid').empty();		   
									$("#flash2").show();
									$("#flash2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading Government IDs...Please Wait.');				
								},																													 
							   success: function(html)
							    {
							       $('#insert_govtid').empty();	
								   $("#insert_govtid").show();								   
								   $("#insert_govtid").append(html);	
								   $('#flash2').empty();									   								   																 
							   },
							  error: function(html)
							    {
								   $("#insert_govtid").show();
								   $('#insert_govtid').empty();
								   $("#insert_govtid").append(html);	
								   $("#flash2").hide();											   												   		
							   }											   
			             });
}

function savechecklist() {
										
				var applicantid = $("#applicantid").val();
		  		var actionslipid = $("#actionslipid").val();
		  	
			    //first validation
			    var checkbox_applicationform2 = $("#checkbox_applicationform").prop("checked") ? 2 : 1;
			    var remarks_applicationform2 = $("#remarks_applicationform").val();
			    
		        var checkbox_employmentcontract2 = $("#checkbox_employmentcontract").prop("checked") ? 2 : 1;
		        var remarks_employmentcontract2 = $("#remarks_employmentcontract").val();
		        
		        var checkbox_picture2x22 = $("#checkbox_picture2x2").prop("checked") ? 2 : 1;
		        var remarks_picture2x22 = $("#remarks_picture2x2").val();
		        
		        var checkbox_resumebiodata2 = $("#checkbox_resumebiodata").prop("checked") ? 2 : 1;
		        var remarks_resumebiodata2 = $("#remarks_resumebiodata").val();
		        
		        var checkbox_sss2 = $("#checkbox_sss").prop("checked") ? 2 : 1; 
		        var remarks_sss2 = $("#remarks_sss").val();
		        
		        var checkbox_validid2 = $("#checkbox_validid").prop("checked") ? 2 : 1;
		        var remarks_validid2 = $("#remarks_validid").val();
		        
		        //second validation
		        var checkbox_tin2 = $("#checkbox_tin").prop("checked") ? 2 : 1; 
		        var remarks_tin2 = $("#remarks_tin").val();
		        
        		var checkbox_philhealth2 = $("#checkbox_philhealth").prop("checked") ? 2 : 1; 
        		var remarks_philhealth2 = $("#remarks_philhealth").val();
        		
        		var checkbox_pagibig2 = $("#checkbox_pagibig").prop("checked") ? 2 : 1; 
        		var remarks_pagibig2 = $("#remarks_pagibig").val();
        		
        		var checkbox_nbi2 = $("#checkbox_nbi").prop("checked") ? 2 : 1; 
        		var remarks_nbi2 = $("#remarks_nbi").val();
        		
        		var checkbox_nso_birthcert2 = $("#checkbox_nso_birthcert").prop("checked") ? 2 : 1; 
        		var remarks_nso_birthcert2 = $("#remarks_nso_birthcert").val();
        		
        		var checkbox_nso_marriagecert2 = $("#checkbox_nso_marriagecert").prop("checked") ? 2 : 1; 
        		var remarks_nso_marriagecert2 = $('#remarks_nso_marriagecert').val();
        		
        		var checkbox_nso_dependentbirthcert2 = $("#checkbox_nso_dependentbirthcert").prop("checked") ? 2 : 1; 
        		var remarks_nso_dependentbirthcert2= $('#remarks_nso_dependentbirthcert').val();
        		
        		var checkbox_bgyclearance2 = $("#checkbox_bgyclearance").prop("checked") ? 2 : 1; 
        		var remarks_bgyclearance2 = $("#remarks_bgyclearance").val();
        		
        		var checkbox_policeclearance2 = $("#checkbox_policeclearance").prop("checked") ? 2 : 1; 
        		var remarks_policeclearance2 = $("#remarks_policeclearance").val();
        		
        		//third validation
        		var checkbox_transcript2 = $("#checkbox_transcript").prop("checked") ? 2 : 1; 
        		var remarks_transcript2 = $("#remarks_transcript").val();
        		
		        var checkbox_diploma2 = $("#checkbox_diploma").prop("checked") ? 2 : 1; 
		        var remarks_diploma2 = $("#remarks_diploma").val();
		        
		        var checkbox_coe2 = $("#checkbox_coe").prop("checked") ? 2 : 1; 
		        var remarks_coe2 = $("#remarks_coe").val();
		        
		        var checkbox_medical2 = $("#checkbox_medical").prop("checked") ? 2 : 1; 
		        var remarks_medical2 = $("#remarks_medical").val();
		        
		        var checkbox_housesketch2 = $("#checkbox_housesketch").prop("checked") ? 2 : 1; 
		        var remarks_housesketch2 = $("#remarks_housesketch").val();
		        
		        var checkbox_charref2 = $("#checkbox_charref").prop("checked") ? 2 : 1; 
		        var remarks_charref2 = $("#remarks_charref").val();
		        
		        var checkbox_healthcard2 = $("#checkbox_healthcard").prop("checked") ? 2 : 1; 
		        var remarks_healthcard2 = $("#remarks_healthcard").val();
		        
		        var checkbox_atm2 = $("#checkbox_atm").prop("checked") ? 2 : 1; 
		        var remarks_atm2 = $("#remarks_atm").val();
		        
		        var checkbox_drugtest2 = $("#checkbox_drugtest").prop("checked") ? 2 : 1; 
		        var remarks_drugtest2 = $("#remarks_drugtest").val();
		        
		        var checkbox_mayorspermit2 = $("#checkbox_mayorspermit").prop("checked") ? 2 : 1; 
		        var remarks_mayorspermit2 = $("#remarks_mayorspermit").val();
		        
		        var checkbox_longfolder2 = $("#checkbox_longfolder").prop("checked") ? 2 : 1; 
		        var remarks_longfolder2 = $("#remarks_longfolder").val();
		        
		        
				var dataString = 'applicantid='+ applicantid+'&actionslipid='+ actionslipid
				+'&checkbox_applicationform2='+ checkbox_applicationform2+'&remarks_applicationform2='+ remarks_applicationform2
				+'&checkbox_employmentcontract2='+ checkbox_employmentcontract2+'&remarks_employmentcontract2='+ remarks_employmentcontract2
				+'&checkbox_picture2x22='+ checkbox_picture2x22+'&remarks_picture2x22='+ remarks_picture2x22
				+'&checkbox_resumebiodata2='+ checkbox_resumebiodata2+'&remarks_resumebiodata2='+ remarks_resumebiodata2
				+'&checkbox_sss2='+ checkbox_sss2+'&remarks_sss2='+ remarks_sss2
				+'&checkbox_validid2='+ checkbox_validid2+'&remarks_validid2='+ remarks_validid2
				+'&checkbox_tin2='+ checkbox_tin2+'&remarks_tin2='+ remarks_tin2
				+'&checkbox_philhealth2='+ checkbox_philhealth2+'&remarks_philhealth2='+ remarks_philhealth2
				+'&checkbox_pagibig2='+ checkbox_pagibig2+'&remarks_pagibig2='+ remarks_pagibig2
				+'&checkbox_nbi2='+ checkbox_nbi2+'&remarks_nbi2='+ remarks_nbi2
				+'&checkbox_nso_birthcert2='+ checkbox_nso_birthcert2+'&remarks_nso_birthcert2='+ remarks_nso_birthcert2
				+'&checkbox_nso_marriagecert2='+ checkbox_nso_marriagecert2+'&remarks_nso_marriagecert2='+ remarks_nso_marriagecert2
				+'&checkbox_transcript2='+ checkbox_transcript2+'&remarks_transcript2='+ remarks_transcript2
				+'&checkbox_diploma2='+ checkbox_diploma2+'&remarks_diploma2='+ remarks_diploma2
				+'&checkbox_coe2='+ checkbox_coe2+'&remarks_coe2='+ remarks_coe2
				+'&checkbox_medical2='+ checkbox_medical2+'&remarks_medical2='+ remarks_medical2
				+'&checkbox_housesketch2='+ checkbox_housesketch2+'&remarks_housesketch2='+ remarks_housesketch2
				+'&checkbox_charref2='+ checkbox_charref2+'&remarks_charref2='+ remarks_charref2
				+'&checkbox_nso_dependentbirthcert2='+ checkbox_nso_dependentbirthcert2+'&remarks_nso_dependentbirthcert2='+ remarks_nso_dependentbirthcert2
				+'&checkbox_healthcard2='+ checkbox_healthcard2+'&remarks_healthcard2='+ remarks_healthcard2				
				+'&checkbox_bgyclearance2='+ checkbox_bgyclearance2+'&remarks_bgyclearance2='+ remarks_bgyclearance2
				+'&checkbox_policeclearance2='+ checkbox_policeclearance2+'&remarks_policeclearance2='+ remarks_policeclearance2
				+'&checkbox_atm2='+ checkbox_atm2+'&remarks_atm2='+ remarks_atm2
				+'&checkbox_drugtest2='+ checkbox_drugtest2+'&remarks_drugtest2='+ remarks_drugtest2				
				+'&checkbox_mayorspermit2='+ checkbox_mayorspermit2+'&remarks_mayorspermit2='+ remarks_mayorspermit2
				+'&checkbox_longfolder2='+ checkbox_longfolder2+'&remarks_longfolder2='+ remarks_longfolder2;
				
				//alert(dataString);
				$.ajax({
					type: "POST",
					url: "savechecklist.php",
					data: dataString,
					cache: false,									
								beforeSend: function(html) 
								{			   
									$("#flash").show();
									$("#flash").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Saving Checklist..Please Wait.');	
									
									$("#flash2").show();
									$("#flash2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Saving Checklist..Please Wait.');	
								},															
							  success: function(html)
							    {
								   $('#insert_search').empty();
								   $("#insert_search").show();
								   $("#insert_search").append(html);
								   $("#flash").hide();
								   
								   $('#insert_search2').empty();
								   $("#insert_search2").show();
								   $("#insert_search2").append(html);
								   $("#flash2").hide();
								   																	   
							   },
							  error: function(html)
							    {
								   $("#insert_search").show();
								   $('#insert_search').empty();
								   $("#insert_search").append(html);
								   $("#flash").hide();	
								   
								   $("#insert_search2").show();
								   $('#insert_search2').empty();
								   $("#insert_search2").append(html);
								   $("#flash2").hide();													   												   		
							   }											   
			             });
			             //$.ajax({
                
		  		

}	

$(document).ready(function() {
	    //------------------------------------------------------------  
		$('.switch').click(function(){
			//alert("test");
			$(this).toggleClass("switchOn");
		});
		
		$('.switchBig').click(function(){
			$(this).toggleClass("switchBigOn");
		});
        //----------------------ON LOAD--------------------------------------  
        //first validation
        var checkbox_applicationform = $('#checkbox_applicationform');
        var checkbox_employmentcontract = $('#checkbox_employmentcontract');
        var checkbox_picture2x2 = $('#checkbox_picture2x2');
        var checkbox_resumebiodata = $('#checkbox_resumebiodata');
        var checkbox_sss = $('#checkbox_sss'); 
        var checkbox_validid = $('#checkbox_validid'); 
        
        if (checkbox_applicationform.is(':checked')) {$('#switch_applicationform').toggleClass("switchOn");}   
        if (checkbox_employmentcontract.is(':checked')) {$('#switch_employmentcontract').toggleClass("switchOn");}        
        if (checkbox_picture2x2.is(':checked')) {$('#switch_picture2x2').toggleClass("switchOn");}
        if (checkbox_resumebiodata.is(':checked')) {$('#switch_resumebiodata').toggleClass("switchOn");}        
        if (checkbox_sss.is(':checked')) {$('#switch_sss').toggleClass("switchOn");}
        if (checkbox_validid.is(':checked')) {$('#switch_validid').toggleClass("switchOn");}
        
        //second validation
        var checkbox_tin = $('#checkbox_tin'); 
        var checkbox_philhealth = $('#checkbox_philhealth'); 
        var checkbox_pagibig = $('#checkbox_pagibig'); 
        var checkbox_nbi = $('#checkbox_nbi'); 
        var checkbox_nso_birthcert = $('#checkbox_nso_birthcert'); 
        var checkbox_nso_marriagecert = $('#checkbox_nso_marriagecert'); 
        var checkbox_nso_dependentbirthcert = $('#checkbox_nso_dependentbirthcert');         
        var checkbox_bgyclearance = $('#checkbox_bgyclearance');
        var checkbox_policeclearance = $('#checkbox_policeclearance');
        
        if (checkbox_tin.is(':checked')) {$('#switch_tin').toggleClass("switchOn");}
        if (checkbox_philhealth.is(':checked')) {$('#switch_philhealth').toggleClass("switchOn");}
        if (checkbox_pagibig.is(':checked')) {$('#switch_pagibig').toggleClass("switchOn");}
        if (checkbox_nbi.is(':checked')) {$('#switch_nbi').toggleClass("switchOn");}
        if (checkbox_nso_birthcert.is(':checked')) {$('#switch_nso_birthcert').toggleClass("switchOn");}
        if (checkbox_nso_marriagecert.is(':checked')) {$('#switch_nso_marriagecert').toggleClass("switchOn");}
        if (checkbox_nso_dependentbirthcert.is(':checked')) {$('#switch_nso_dependentbirthcert').toggleClass("switchOn");}        
        if (checkbox_bgyclearance.is(':checked')) {$('#switch_bgyclearance').toggleClass("switchOn");}
        if (checkbox_policeclearance.is(':checked')) {$('#switch_policeclearance').toggleClass("switchOn");}
        
        //third validation
        var checkbox_transcript = $('#checkbox_transcript'); 
        var checkbox_diploma = $('#checkbox_diploma'); 
        var checkbox_coe = $('#checkbox_coe'); 
        var checkbox_medical = $('#checkbox_medical'); 
        var checkbox_housesketch = $('#checkbox_housesketch'); 
        var checkbox_charref = $('#checkbox_charref'); 
        var checkbox_healthcard = $('#checkbox_healthcard');         
        var checkbox_atm = $('#checkbox_atm'); 
        var checkbox_drugtest = $('#checkbox_drugtest'); 
        var checkbox_mayorspermit = $('#checkbox_mayorspermit'); 
        var checkbox_longfolder = $('#checkbox_longfolder'); 
        
        if (checkbox_transcript.is(':checked')) {$('#switch_transcript').toggleClass("switchOn");}
        if (checkbox_diploma.is(':checked')) {$('#switch_diploma').toggleClass("switchOn");}
        if (checkbox_coe.is(':checked')) {$('#switch_coe').toggleClass("switchOn");}
        if (checkbox_medical.is(':checked')) {$('#switch_medical').toggleClass("switchOn");}
        if (checkbox_housesketch.is(':checked')) {$('#switch_housesketch').toggleClass("switchOn");}
        if (checkbox_charref.is(':checked')) {$('#switch_charref').toggleClass("switchOn");}
        if (checkbox_healthcard.is(':checked')) {$('#switch_healthcard').toggleClass("switchOn");}
        
        if (checkbox_atm.is(':checked')) {$('#switch_atm').toggleClass("switchOn");}
        if (checkbox_drugtest.is(':checked')) {$('#switch_drugtest').toggleClass("switchOn");}
        if (checkbox_mayorspermit.is(':checked')) {$('#switch_mayorspermit').toggleClass("switchOn");}
        if (checkbox_longfolder.is(':checked')) {$('#switch_longfolder').toggleClass("switchOn");}
        
        //----------------------ON CLICK-------------------------------------
        //----------------------------first validation----------------------
        $("#checkbox_applicationform").change(function() {        	
		    if(this.checked) {
		        	$('#flash_applicationform').empty();				     
        			$('#flash_applicationform').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_applicationform').empty();				    	 
        			$('#flash_applicationform').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }			    
		});
		
		$("#checkbox_employmentcontract").change(function() {        	
		    if(this.checked) {
		        	$('#flash_employmentcontract').empty();				     
        			$('#flash_employmentcontract').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_employmentcontract').empty();				    	 
        			$('#flash_employmentcontract').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }			    
		});
		
		$("#checkbox_picture2x2").change(function() {        	
		    if(this.checked) {
		        	$('#flash_picture2x2').empty();				     
        			$('#flash_picture2x2').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_picture2x2').empty();				    	 
        			$('#flash_picture2x2').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }			    
		});	
		
		$("#checkbox_resumebiodata").change(function() {        	
		    if(this.checked) {
		        	$('#flash_resumebiodata').empty();				     
        			$('#flash_resumebiodata').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_resumebiodata').empty();				    	 
        			$('#flash_resumebiodata').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }			    
		});	
		
		$("#checkbox_sss").change(function() {        	
		    if(this.checked) {
		        	$('#flash_sss').empty();				     
        			$('#flash_sss').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_sss').empty();				    	 
        			$('#flash_sss').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }			    
		});	
		
		$("#checkbox_validid").change(function() {        	
		    if(this.checked) {
		        	$('#flash_validid').empty();				     
        			$('#flash_validid').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_validid').empty();				    	 
        			$('#flash_validid').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }			    
		});
		
		 //-----------------------------second validation-------------------------------
		$("#checkbox_tin").change(function() {        	
		    if(this.checked) {
		        	$('#flash_tin').empty();				     
        			$('#flash_tin').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_tin').empty();				    	 
        			$('#flash_tin').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }			    
		});
		
		$("#checkbox_philhealth").change(function() {        	
		    if(this.checked) {
		        	$('#flash_philhealth').empty();				     
        			$('#flash_philhealth').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_philhealth').empty();				    	 
        			$('#flash_philhealth').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }			    
		});		
		
		$("#checkbox_pagibig").change(function() {        	
		    if(this.checked) {
		        	$('#flash_pagibig').empty();				     
        			$('#flash_pagibig').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_pagibig').empty();				    	 
        			$('#flash_pagibig').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }			    
		});	
		
		$("#checkbox_nbi").change(function() {        	
		    if(this.checked) {
		        	$('#flash_nbi').empty();				     
        			$('#flash_nbi').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_nbi').empty();				    	 
        			$('#flash_nbi').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }			    
		});	
		
		$("#checkbox_nso_birthcert").change(function() {        	
		    if(this.checked) {
		        	$('#flash_nso_birthcert').empty();				     
        			$('#flash_nso_birthcert').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_nso_birthcert').empty();				    	 
        			$('#flash_nso_birthcert').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }			    
		});	
		
		$("#checkbox_nso_marriagecert").change(function() {        	
		    if(this.checked) {
		        	$('#flash_nso_marriagecert').empty();				     
        			$('#flash_nso_marriagecert').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_nso_marriagecert').empty();				    	 
        			$('#flash_nso_marriagecert').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }	
		 });	   
		    
		$("#checkbox_nso_dependentbirthcert").change(function() {        	
		    if(this.checked) {
		        	$('#flash_nso_dependentbirthcert').empty();				     
        			$('#flash_nso_dependentbirthcert').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_nso_dependentbirthcert').empty();				    	 
        			$('#flash_nso_dependentbirthcert').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }	
		 });
		 
		 $("#checkbox_bgyclearance").change(function() {        	
		    if(this.checked) {
		        	$('#flash_bgyclearance').empty();				     
        			$('#flash_bgyclearance').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_bgyclearance').empty();				    	 
        			$('#flash_bgyclearance').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }			    
		 });
		 
		 $("#checkbox_policeclearance").change(function() {        	
		    if(this.checked) {
		        	$('#flash_policeclearance').empty();				     
        			$('#flash_policeclearance').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_policeclearance').empty();				    	 
        			$('#flash_policeclearance').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }			    
		});		
		 
		 //-------------------------------third validation---------------------------------
		 $("#checkbox_transcript").change(function() {        	
		    if(this.checked) {
		        	$('#flash_transcript').empty();				     
        			$('#flash_transcript').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_transcript').empty();				    	 
        			$('#flash_transcript').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }	
		 });
		 
		 $("#checkbox_diploma").change(function() {        	
		    if(this.checked) {
		        	$('#flash_diploma').empty();				     
        			$('#flash_diploma').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_diploma').empty();				    	 
        			$('#flash_diploma').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }	
		 });	
		 
		 $("#checkbox_coe").change(function() {        	
		    if(this.checked) {
		        	$('#flash_coe').empty();				     
        			$('#flash_coe').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_coe').empty();				    	 
        			$('#flash_coe').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }	
		 });
		 
		 $("#checkbox_medical").change(function() {        	
		    if(this.checked) {
		        	$('#flash_medical').empty();				     
        			$('#flash_medical').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_medical').empty();				    	 
        			$('#flash_medical').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }	
		 });
		 
		 $("#checkbox_housesketch").change(function() {        	
		    if(this.checked) {
		        	$('#flash_housesketch').empty();				     
        			$('#flash_housesketch').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_housesketch').empty();				    	 
        			$('#flash_housesketch').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }	
		 });
		 
		 $("#checkbox_charref").change(function() {        	
		    if(this.checked) {
		        	$('#flash_charref').empty();				     
        			$('#flash_charref').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_charref').empty();				    	 
        			$('#flash_charref').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }	
		 });	
		 
		 $("#checkbox_healthcard").change(function() {        	
		    if(this.checked) {
		        	$('#flash_healthcard').empty();				     
        			$('#flash_healthcard').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_healthcard').empty();				    	 
        			$('#flash_healthcard').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }	
		 });
		 
		 $("#checkbox_atm").change(function() {        	
		    if(this.checked) {
		        	$('#flash_atm').empty();				     
        			$('#flash_atm').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_atm').empty();				    	 
        			$('#flash_atm').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }	
		 });
		 
		 $("#checkbox_drugtest").change(function() {        	
		    if(this.checked) {
		        	$('#flash_drugtest').empty();				     
        			$('#flash_drugtest').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_drugtest').empty();				    	 
        			$('#flash_drugtest').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }	
		 });
		 
		 $("#checkbox_mayorspermit").change(function() {        	
		    if(this.checked) {
		        	$('#flash_mayorspermit').empty();				     
        			$('#flash_mayorspermit').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_mayorspermit').empty();				    	 
        			$('#flash_mayorspermit').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }	
		 });
		 
		 $("#checkbox_longfolder").change(function() {        	
		    if(this.checked) {
		        	$('#flash_longfolder').empty();				     
        			$('#flash_longfolder').append( "<span class='label label-success'>Complete</span>");		        			
		    }
		    else{
		    		$('#flash_longfolder').empty();				    	 
        			$('#flash_longfolder').append( "<span class='label label-danger'>Incomplete</span>")		        			
		    }	
		 });
		 
		 //---------------submit button-------------
		  $('#submitbtn').on('click',function(){		  		
		  		savechecklist() 
          });
		  $('#submitbtn2').on('click',function(){		  		
		  		savechecklist() 
          }); 
          
          //-----------govt id validation-----------
         
   
});         