function showsaveheader(id2) {

				var id2 = id2;																																	
				var dataString = 'id2='+ id2;									

				
							$.ajax({
							type: "GET",
							url: "updatepayrollheader.php",
							data: dataString,
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modalxx").show();
										   $('#insert_modalxx').empty();
										   $("#insert_modalxx").append(html);																	   
									   },
									  error: function(html)
									    {
										   $("#insert_modalxx").show();
										   $('#insert_modalxx').empty();
										   $("#insert_modalxx").append(html);	
										   $("#insert_modalxx").hide();											   												   		
									   }											   
					             });

}
function refreshdiv() {
			setTimeout(function(){
				location.reload();
						    
	    }, 5000);
		
	} 

$(document).ready(function() {	
		// Generate a simple captcha
	    function randomNumber(min, max) {
	        return Math.floor(Math.random() * (max - min + 1) + min);
	    };
	    $('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));	

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
						            bankcode: {
							                validators: {
						                            notEmpty: {
						                                message: 'Bank Code is required'
						                            },
						                            digits: {
						                                message: 'The value can contain only digits'
						                            },
						                            stringLength: {
								                        min: 4,
								                        message: 'Bank Code must be 4 characters long'
								                    }
							                }
						            },
						            companyaccount: {
							                validators: {
						                            notEmpty: {
						                                message: 'Company Account is required'
						                            },
						                            digits: {
						                                message: 'The value can contain only digits'
						                            },
						                            stringLength: {
								                        min: 12,
								                        message: 'Company Account must be 12 characters long'
								                    }
							                }
						            },
						            filler: {
							                validators: {
						                            notEmpty: {
						                                message: 'Filler is required'
						                            },
						                            digits: {
						                                message: 'The value can contain only digits'
						                            },
						                            stringLength: {
								                        min: 9,
								                        message: 'Filler must be 9 characters long'
								                    }
							                }
						            },
						            paycode: {
							                validators: {
						                            notEmpty: {
						                                message: 'Pay Code is required'
						                            },
						                            digits: {
						                                message: 'The value can contain only digits'
						                            },
						                            stringLength: {
								                        min: 1,
								                        message: 'Pay Code must be 1 character long'
								                    }
							                }
						            },
						            totalpayrollamount: {
							                validators: {
						                            notEmpty: {
						                                message: 'Total Payroll Amount is required'
						                            },
						                            digits: {
						                                message: 'The value can contain only digits'
						                            },
						                            stringLength: {
								                        min: 15,
								                        message: 'Total Payroll Amount must be 15 characters long'
								                    }
							                }
						            },
						            payrolldate: {
							                validators: {
						                            notEmpty: {
						                                message: 'Payroll Date is required'
						                            },
						                            date: {
								                        format: 'YYYY-MM-DD',
								                        message: 'The Payroll Date is not valid. Should be in yyyy-mm-dd'
								                    }
							                }
						            },	
						            password: {
							                validators: {
						                            notEmpty: {
						                                message: 'Password is required'
						                            }
							                }
						            },						            
						           captcha: {
						                validators: {
						                    callback: {
						                        message: 'Wrong answer',
						                        callback: function(value, validator) {
						                            var items = $('#captchaOperation').html().split(' '), sum = parseInt(items[0]) + parseInt(items[2]);
						                            return value == sum;
						                        }                        
						                    }
						                }
						            }
						            //----------------------
						        }
						    });
				            // Validate the form manually
				            //add button
						    $('#updatebtnx').click(function() {
						        $('#defaultForm66x').bootstrapValidator('validate');
						        			var bootstrapValidator = $('#defaultForm66x').data('bootstrapValidator');
											var stat2 = bootstrapValidator.isValid();
											if(stat2=='1')
											{
												//alert(stat2);
																var bankcode = $("#bankcode").val();
																var companyaccount = $("#companyaccount").val();									
																var filler = $("#filler").val();	
																var paycode= $("#paycode").val();
																var totalpayrollamount= $("#totalpayrollamount").val();
																var payrolldate= $("#payrolldate").val();
																var bankid= $("#bankid").val();
																var password= $("#password").val();
																																																																																																																																												
																var dataString = 'bankcode='+ bankcode+'&companyaccount='+ companyaccount+'&filler='+ filler+'&paycode='+ paycode+'&totalpayrollamount='+ totalpayrollamount+'&payrolldate='+ payrolldate+'&bankid='+ bankid+'&password='+ password;																								
																//alert(dataString);
												
																			$.ajax({
																			type: "POST",
																			url: "saveheaderpositions.php",
																			data: dataString,
																			cache: false,									
																						beforeSend: function(html) 
																						{			   
																							$("#flash8").show();
																							$("#flash8").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Saving Header Information...Please Wait.');		
																						},															
																					  success: function(html)
																					    {
																						   $('#insert_search8x').empty();
																						   $("#insert_search8x").show();
																						   $("#insert_search8x").append(html);
																						   $("#flash8").hide();	
																										    																	   
																					   },
																					  error: function(html)
																					    {
																						   $("#insert_search8x").show();
																						   $('#insert_search8x').empty();
																						   $("#insert_search8x").append(html);
																						   $("#flash8").hide();														   												   		
																					   }											   
																	             });
																	             //$.ajax({
				
											}
											//if(stat2=='1')
						    });			
	
});