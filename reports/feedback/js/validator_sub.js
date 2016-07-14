function savebirequests(id2) {
	$('#birequestform')
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
							qi: {
				                validators: {
			                            notEmpty: {
			                                message: 'This field is required'
			                            }
				                }
				            },	
				            q2: {
				                validators: {
			                            notEmpty: {
			                                message: 'This field is required'
			                            },
			                            date: {
					                        format: 'YYYY-MM-DD',
					                        message: 'The date of employment is not valid date. Should be in yyyy-mm-dd'
					                    }
				                }
				            },	
				            q3: {
				                validators: {
			                            notEmpty: {
			                                message: 'This field is required'
			                            }
				                }
				            },	
				            q4: {
				                validators: {
			                            notEmpty: {
			                                message: 'This field is required'
			                            }
				                }
				            }                   
        }  
        //--fields
    });
	$('#birequestform').bootstrapValidator('validate');
						        			var bootstrapValidator = $('#birequestform').data('bootstrapValidator');
											var stat4 = bootstrapValidator.isValid();
											if(stat4=='1')
											{
															var id2 = id2;	
															var qi = $("#qi").val();
															var q2 = $("#q2").val();
															var q3 = $("#q3").val();												
															var q4 = $("#q4").val();
															
															var q5a = $("input:radio[name ='q5a']:checked").val();
															var q5b = $("input:radio[name ='q5b']:checked").val();
															var q5c = $("input:radio[name ='q5c']:checked").val();
															var q5d = $("input:radio[name ='q5d']:checked").val();
															var q5e = $("input:radio[name ='q5e']:checked").val();
															var q5f = $("input:radio[name ='q5f']:checked").val();
															var q5g = $("input:radio[name ='q5g']:checked").val();
															var q5h = $("input:radio[name ='q5h']:checked").val();
															
															var q6 = $("#q6").val();
															var q7 = $("#q7").val();
															
															var q8_alcohol = $("#q8_alcohol").prop('checked');									
															var q8_criminalcase = $("#q8_criminalcase").prop('checked');
															var q8_drugs = $("#q8_drugs").prop('checked');								
															var q8_debts = $("#q8_debts").prop('checked');
															var q8_gambling = $("#q8_gambling").prop('checked');							
															var q8_others = $("#q8_others").prop('checked');
															
															var q9 = $("#q9").val();
															var q10 = $("#q10").val();
															var contactperson = $("#contactperson").val();
															var designation_cp = $("#designation_cp").val();
															var contactno = $("#contactno").val();
															var remarks = $("#remarks").val();		
																																																														
															var dataString = 'id2='+ id2+'&qi='+ qi+'&q2='+ q2+'&q3='+ q3
															+'&q4='+ q4+'&q5a='+ q5a+'&q5b='+ q5b+'&q5c='+ q5c+'&q5d='+ q5d+'&q5e='+ q5e
															+'&q5f='+ q5f+'&q5g='+ q5g+'&q5h='+ q5h+'&q6='+ q6+'&q7='+ q7+'&q8_alcohol='+ q8_alcohol
															+'&q8_criminalcase='+ q8_criminalcase+'&q8_drugs='+ q8_drugs+'&q8_debts='+ q8_debts+'&q8_gambling='+ q8_gambling+'&q8_others='+ q8_others+'&q9='+ q9
															+'&q10='+ q10+'&contactperson='+ contactperson+'&designation_cp='+ designation_cp+'&contactno='+ contactno+'&remarks='+ remarks;	
															
																		$.ajax({
																		type: "GET",
																		url: "save/savebirequests.php",
																		data: dataString,
																		cache: false,	
																				  beforeSend: function(html) 
																					{
																						$('#insert_savebirequests').empty();			   
																						$("#insert_savebirequests").show();
																						$("#insert_savebirequests").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Saving Data...Please Wait.');		
																					},																						
																				  success: function(html)
																				    {
																					   $("#insert_savebirequests").show();
																					   $('#insert_savebirequests').empty();
																					   $("#insert_savebirequests").append(html);									   								   																 
																				   },
																				  error: function(html)
																				    {
																					   $("#insert_savebirequests").show();
																					   $('#insert_savebirequests').empty();
																					   $("#insert_savebirequests").append(html);	
																					   $("#insert_savebirequests").hide();											   												   		
																				   }											   
																             });
											}												             
}
function searchexpiration2(){
	$('#searchformx2')
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
										            asdates2: {
										                validators: {
									                            notEmpty: {
									                                message: 'This field is required'
									                            }
										                }
										            },
										            datepreference2: {
										                validators: {
									                            notEmpty: {
									                                message: 'Date Preference is required'
									                            }
										                }
										            },
										            valuex2: {
										                validators: {
									                            notEmpty: {
									                                message: 'Value field is required'
									                            },
									                            digits: {
									                                message: 'The value can contain only digits'
									                            }
										                }
										            },
													datepart2: {
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
						     
						     	$('#searchformx2').bootstrapValidator('validate');
						        			var bootstrapValidator = $('#searchformx2').data('bootstrapValidator');
											var stat22 = bootstrapValidator.isValid();
											if(stat22=='1')
											{
												var asdates2 = $("#asdates2").val();
												var datepreference2 = $("#datepreference2").val();
												var valuex2 = $("#valuex2").val();												
												var datepart2 = $("#datepart2").val();
												var asstatus2 = $("#asstatus2").val();
																
												var dataString = 'asdates='+ asdates2+'&datepreference='+ datepreference2+'&valuex='+ valuex2+'&datepart='+ datepart2+'&asstatus='+ asstatus2;									
												//alert(dataString);
												
																$.ajax({
																type: "GET",
																url: "search/searcheoc.php",
																data: dataString,
																cache: false,									
																			beforeSend: function(html) 
																			{			   
																				$("#insert_searchasflash22").show();
																				$("#insert_searchasflash22").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching...Please Wait.');		
																			},															
																		  success: function(html)
																		    {
																			   $('#insertbody_search22').empty();
																			   $("#insertbody_search22").show();
																			   $("#insertbody_search22").append(html);
																			   $("#insert_searchasflash22").hide();												    						   
																		   },
																		  error: function(html)
																		    {
																			   $("#insertbody_search22").show();
																			   $('#insertbody_search22').empty();
																			   $("#insertbody_search22").append(html);
																			   $("#insert_searchasflash22").hide();												   												   		
																		   }											   
														             });
											}			             
						     	
						  	
}
function searchincomplete3(){
	$('#searchformx_inc3')
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
										            validationlevel3: {
										                validators: {
									                            notEmpty: {
									                                message: 'Validation Level is required'
									                            }
										                }
										            }				                        
						          }  
						          //--fields
						    });
						    
						    //search action slip
						     
						     	$('#searchformx_inc3').bootstrapValidator('validate');
						        			var bootstrapValidator = $('#searchformx_inc3').data('bootstrapValidator');
											var stat99 = bootstrapValidator.isValid();
											if(stat99=='1')
											{
												var validationlevel3 = $("#validationlevel3").val();
												var tz_completevalue3 = $("#tz_completevalue3").val();
												var completevalue3 = $("#completevalue3").val();
												var tz_incompletevalue3 = $("#tz_incompletevalue3").val();
												var incompletevalue3 = $("#incompletevalue3").val();
												var oz = $("#oz").val();
												var mycompanyid3 = $("#mycompanyid3").val();												
												var accountsid3 = $("#accountsid3").val();
												var asstatus3 = $("#asstatus3").val();
																
												var dataString = 'validationlevel3='+ validationlevel3
												+'&tz_completevalue3='+ tz_completevalue3+'&completevalue3='+ completevalue3
												+'&tz_incompletevalue3='+ tz_incompletevalue3+'&incompletevalue3='+ incompletevalue3
												+'&oz='+ oz+'&mycompanyid3='+ mycompanyid3
												+'&accountsid3='+ accountsid3+'&asstatus3='+ asstatus3;									
												
																$.ajax({
																type: "GET",
																url: "search/searchincomplete_compincvalues.php",
																data: dataString,
																cache: false,									
																			beforeSend: function(html) 
																			{			   
																				$("#insert_searchasflash2xz").show();
																				$("#insert_searchasflash2xz").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching...Please Wait.');		
																			},															
																		  success: function(html)
																		    {
																			   $('#insertbody_search2xz').empty();
																			   $("#insertbody_search2xz").show();
																			   $("#insertbody_search2xz").append(html);
																			   $("#insert_searchasflash2xz").hide();												    						   
																		   },
																		  error: function(html)
																		    {
																			   $("#insertbody_search2xz").show();
																			   $('#insertbody_search2xz').empty();
																			   $("#insertbody_search2xz").append(html);
																			   $("#insert_searchasflash2xz").hide();												   												   		
																		   }											   
														             });
											}			             
						     	
						  	
}

function searchincomplete(){
	$('#searchformx_inc')
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
										            validationstatus: {
										                validators: {
									                            notEmpty: {
									                                message: 'Validation Status is required'
									                            }
										                }
										            },
										            validationlevel: {
										                validators: {
									                            notEmpty: {
									                                message: 'Validation Level is required'
									                            }
										                }
										            }				                        
						          }  
						          //--fields
						    });
						    
						    //search action slip
						     
						     	$('#searchformx_inc').bootstrapValidator('validate');
						        			var bootstrapValidator = $('#searchformx_inc').data('bootstrapValidator');
											var stat9 = bootstrapValidator.isValid();
											if(stat9=='1')
											{
												var validationstatus = $("#validationstatus").val();
												var validationlevel = $("#validationlevel").val();
												var mycompanyid = $("#mycompanyid").val();												
												var accountsid = $("#accountsid").val();
												var asstatus3 = $("#asstatus").val();
																
												var dataString = 'validationstatus='+ validationstatus+'&validationlevel='+ validationlevel+'&mycompanyid='+ mycompanyid+'&accountsid='+ accountsid+'&asstatus3='+ asstatus3;									
												
																$.ajax({
																type: "GET",
																url: "search/searchincomplete_requirements.php",
																data: dataString,
																cache: false,									
																			beforeSend: function(html) 
																			{			   
																				$("#insert_searchasflash2x").show();
																				$("#insert_searchasflash2x").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching...Please Wait.');		
																			},															
																		  success: function(html)
																		    {
																			   $('#insertbody_search2x').empty();
																			   $("#insertbody_search2x").show();
																			   $("#insertbody_search2x").append(html);
																			   $("#insert_searchasflash2x").hide();												    						   
																		   },
																		  error: function(html)
																		    {
																			   $("#insertbody_search2x").show();
																			   $('#insertbody_search2x').empty();
																			   $("#insertbody_search2x").append(html);
																			   $("#insert_searchasflash2x").hide();												   												   		
																		   }											   
														             });
											}			             
						     	
						  	
}
