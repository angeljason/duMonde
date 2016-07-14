function getexporttoxls() { 
	$("#insert_search2").btechco_excelexport({
                containerid: "example", datatype: $datatype.Table
            });
	} 
$(document).ready(function() {

    //-----------------------------------------------------------
   $('#searchbtn2x99').on('click', function(event){
		event.preventDefault();
		//var sectionID = $(this).attr("data-id");
		//scrollToID('#' + sectionID, 750);
	});	
	//-----------------------------------------------------------
						    $('#defaultForm2x9').bootstrapValidator({
						        message: 'This value is not valid',
				                live: 'enabled',
							    submitButtons: 'button[type="button"]',			        
						        feedbackIcons: {
						            valid: 'glyphicon glyphicon-ok',
						            invalid: 'glyphicon glyphicon-remove',
						            validating: 'glyphicon glyphicon-refresh'
						        },
						        fields: {
										            reporttypeid: {
										                validators: {
									                         notEmpty: {
									                                message: 'Report Type is required'
									                            }
										                }
										            },	
													mycompanyid: {
										                validators: {
									                         notEmpty: {
									                                message: 'Company ID is required'
									                            }
										                }
										            },
													datetodisplayid: {
										                validators: {
									                         notEmpty: {
									                                message: 'Date to display ID is required'
									                            }
										                }
										            },
										            datefrom: {
										                validators: {
										                    date: {
										                        format: 'MM/DD/YYYY',
										                        message: 'The date is not valid. Should be in mm/dd/yyyy'
										                    },
														    notEmpty: {
									                                message: 'Date From is required'
									                            }
										                }
										            },
										            dateto: {
										                validators: {
										                    date: {
										                        format: 'MM/DD/YYYY',
										                        message: 'The end date is not valid. Should be in mm/dd/yyyy'
										                    },
														    notEmpty: {
									                                message: 'Date To is required'
									                            }
										                }
										            },
										            year_weekly: {
										                validators: {
										                    notEmpty: {
									                                message: 'This field is required'
									                            }
										                }
										            },
										            weeknofrom: {
										                validators: {
										                    notEmpty: {
									                                message: 'This field is required'
									                            }
										                }
										            },
										            weeknoto: {
										                validators: {
										                    notEmpty: {
									                                message: 'This field is required'
									                            }
										                }
										            },
													year_monthly: {
										                validators: {
										                    notEmpty: {
									                                message: 'This field is required'
									                            }
										                }
										            },
													monthno: {
										                validators: {
										                    notEmpty: {
									                                message: 'This field is required'
									                            }
										                }
										            },
													year_quarterly: {
										                validators: {
										                    notEmpty: {
									                                message: 'This field is required'
									                            }
										                }
										            },
													quarter4: {
										                validators: {
										                    notEmpty: {
									                                message: 'This field is required'
									                            }
										                }
										            },
										            year_yearly: {
										                validators: {
										                    notEmpty: {
									                                message: 'This field is required'
									                            }
										                }
										            }
						            //---------------------
						        }
						    });
						     $('#datetodisplayid').change(function () {	
							   // var value = $(this).val();
							    var value = $("#datetodisplayid").val();
							    //alert(value); 
							        if(value=='1')
							        {
							        	//Daily							        	
							        	//disable form fields
							        	$('#year_weekly').attr('disabled','disabled');
							        	$('#weeknofrom').attr('disabled','disabled');
							        	$('#weeknoto').attr('disabled','disabled');
							        	$('#year_monthly').attr('disabled','disabled');
							        	$('#monthno').attr('disabled','disabled');									        	
							        	$('#year_quarterly').attr('disabled','disabled');	
							        	$('#quarter4').attr('disabled','disabled');	
							        	$('#year_yearly').attr('disabled','disabled');	
							        	
							        	//enable form fields
							        	$('#datefrom').removeAttr('disabled');
							        	$('#dateto').removeAttr('disabled');	
										
										//trigger accordion
										$("a#daily_accord" ).trigger( "click" );	

							        }
							        else if(value=='2')
							        {
										//weekly									
							        	//disable form fields
							        	$('#datefrom').attr('disabled','disabled');
							        	$('#dateto').attr('disabled','disabled');							        	
							        	$('#year_monthly').attr('disabled','disabled');
							        	$('#monthno').attr('disabled','disabled');									        	
							        	$('#year_quarterly').attr('disabled','disabled');	
							        	$('#quarter4').attr('disabled','disabled');	
							        	$('#year_yearly').attr('disabled','disabled');	
							        	
							        	//enable form fields
							        	$('#year_weekly').removeAttr('disabled');							        	
										$('#weeknofrom').attr('disabled','disabled');																					
										$('#weeknoto').attr('disabled','disabled');	

										//trigger accordion
										$("a#weekly_accord" ).trigger( "click" );	
							        }
							        else if(value=='3')
							        {
										//monthly
										//disable form fields
										$('#datefrom').attr('disabled','disabled');
							        	$('#dateto').attr('disabled','disabled');
							        	$('#year_weekly').attr('disabled','disabled');
							        	$('#weeknofrom').attr('disabled','disabled');
							        	$('#weeknoto').attr('disabled','disabled');							        										        	
							        	$('#year_quarterly').attr('disabled','disabled');	
							        	$('#quarter4').attr('disabled','disabled');	
							        	$('#year_yearly').attr('disabled','disabled');	
							        	
							        	//enable form fields
							        	$('#year_monthly').removeAttr('disabled');
							        	$('#monthno').removeAttr('disabled');

										//trigger accordion
										$("a#monthly_accord" ).trigger( "click" );		
							        }	
							        else if(value=='4')
							        {										
										//Quarterly							        	
							        	//disable form fields
										$('#datefrom').attr('disabled','disabled');
							        	$('#dateto').attr('disabled','disabled');
							        	$('#year_weekly').attr('disabled','disabled');
							        	$('#weeknofrom').attr('disabled','disabled');
							        	$('#weeknoto').attr('disabled','disabled');
							        	$('#year_monthly').attr('disabled','disabled');
							        	$('#monthno').attr('disabled','disabled');									        								        	
							        	$('#year_yearly').attr('disabled','disabled');	
							        	
							        	//enable form fields
							        	$('#year_quarterly').removeAttr('disabled');
							        	$('#quarter4').removeAttr('disabled');	

										 //trigger accordion
										$("a#quarterly_accord" ).trigger( "click" );	
							        }
							        else if(value=='5')
							        {
										//Yearly
										//disable form fields
										$('#datefrom').attr('disabled','disabled');
							        	$('#dateto').attr('disabled','disabled');
							        	$('#year_weekly').attr('disabled','disabled');
							        	$('#weeknofrom').attr('disabled','disabled');
							        	$('#weeknoto').attr('disabled','disabled');
							        	$('#year_monthly').attr('disabled','disabled');
							        	$('#monthno').attr('disabled','disabled');									        	
							        	$('#year_quarterly').attr('disabled','disabled');	
										$('#quarter4').attr('disabled','disabled');	
							        								        	
							        	//enable form fields							        	
							        	$('#year_yearly').removeAttr('disabled');	

										 //trigger accordion
										$("a#yearly_accord" ).trigger( "click" );		
							        }	
							        else 
							        {
										//not selected								
							        }							        							    
							});						    
				            // Validate the form manually
						    $('#searchbtn2x99').click(function() {
						        $('#defaultForm2x9').bootstrapValidator('validate');
						        			var bootstrapValidator = $('#defaultForm2x9').data('bootstrapValidator');
											var stat2 = bootstrapValidator.isValid();
											if(stat2=='1')
											{
												//alert("sample");
																var reporttypeid = $("#reporttypeid").val();
																var mycompanyid = $("#mycompanyid").val();
																var datetodisplayid = $("#datetodisplayid").val();
																var datefrom = $("#datefrom").val();
																var dateto = $("#dateto").val();
																
																var year_weekly = $("#year_weekly").val();
																var weeknofrom = $("#weeknofrom").val();
																var weeknoto = $("#weeknoto").val();												
																var year_monthly = $("#year_monthly").val();
																
																var monthno = $("#monthno").val();
																var year_quarterly = $("#year_quarterly").val();
																var quarter4 = $("#quarter4").val();
																var year_yearly = $("#year_yearly").val();																																												
																																																																																		
																var dataString = 'reporttypeid='+ reporttypeid+'&mycompanyid='+ mycompanyid+'&datetodisplayid='+ datetodisplayid+'&datefrom='+ datefrom+'&dateto='+ dateto
																+'&year_weekly='+ year_weekly+'&weeknofrom='+ weeknofrom+'&weeknoto='+ weeknoto+'&year_monthly='+ year_monthly+'&monthno='+ monthno
																+'&year_quarterly='+ year_quarterly+'&quarter4='+ quarter4+'&year_yearly='+ year_yearly;								
																
																//alert(dataString);
												
																			$.ajax({
																			type: "GET",
																			url: "searchchart.php",
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
				
																						    $('#defaultForm2x9')[0].reset(); 																							    																																									  
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
                
	//-----------------------------------------------------------

});
