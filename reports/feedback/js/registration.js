
    $(document).ready(function() {
    	//----------------defaults--------------
		// Generate a simple captcha
	    function randomNumber(min, max) {
	        return Math.floor(Math.random() * (max - min + 1) + min);
	    };
	    $('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));
				//------------back buttons-------------
				$("#step2backbtn").click(function (e) {
					e.preventDefault();
					$("a#step1_accord" ).trigger( "click" );							  		
				});									
				
				$("#step3backbtn").click(function (e) {
					e.preventDefault();
					$("a#step2_accord" ).trigger( "click" );							  		
				});									
				
				$("#step4backbtn").click(function (e) {
					e.preventDefault();
					$("a#step3_accord" ).trigger( "click" );							  		
				});	

				$("#step5backbtn").click(function (e) {
					e.preventDefault();
					$("a#step4_accord" ).trigger( "click" );							  		
				});										

				$("#step6backbtn").click(function (e) {
					e.preventDefault();
					$("a#step5_accord" ).trigger( "click" );							  		
				});										
											
				$("#step7backbtn").click(function (e) {
					e.preventDefault();
					$("a#step6_accord" ).trigger( "click" );							  		
				});	    	
    	
    	//-----------------form 1------------------
        $('#form1')
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
                    mycompanyid: {
                        validators: {
                            notEmpty: {
                                message: 'Company field is required'
                            }                            
                        }
                    },
                    prefjobfunc: {
                        validators: {
                            notEmpty: {
                                message: 'The Preferred Job Function field is required'
                            }                            
                        }
                    },                                      
                    sourcethru: {
                        validators: {
                            notEmpty: {
                                message: 'Source Thru is required'
                            }                            
                        }
                    }, 
					dateavailability: {
                        validators: {  
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The field is not a valid date format. Should be in mm/dd/yyyy'
		                    }
                        }
                    },                    
                    inviteby: {
                        validators: {
                            notEmpty: {
                                message: 'Invite by is required'
                            }                            
                        }
                    },
                    firstchoice: {
                        validators: {
                            notEmpty: {
                                message: 'Position Applied For (1st Choice) is required'
                            }                            
                        }
                    },  
                    currentsalary: {
                         validators: {
	                            digits: {
	                                message: 'The value can contain only digits'
	                            },
	                            greaterThan: {
	                        		value: 1000
			                    },
			                    lessThan: {
			                        value: 100000
			                    }
                        }
                    },   
                    expectedsalary: {
                         validators: {
	                            digits: {
	                                message: 'The value can contain only digits'
	                            },
	                            greaterThan: {
	                        		value: 1000
			                    },
			                    lessThan: {
			                        value: 100000
			                    }
                        }
                    }, 
                    secondchoice: {
                        validators: {
                            notEmpty: {
                                message: 'Position Applied For (2nd Choice) is required'
                            }                            
                        }
                    }  
                }
            })
            .on('error.field.bv', function(e, data) {
            	//alert('error');
                console.log(data.field, data.element, '-->error');
                $("#step1nextbtn").prop('disabled', true);	
            })
            .on('success.field.bv', function(e, data) {
                console.log(data.field, data.element, '-->success'); 
            });
            // Validate the form manually
		    $('#step1nextbtn').click(function(e) {
		    	e.preventDefault();
		        $('#form1').bootstrapValidator('validate');
		        			var bootstrapValidator = $('#form1').data('bootstrapValidator');
							var stat1 = bootstrapValidator.isValid();
							if(stat1=='1')
							{
								$("#step2").fadeTo("fast", 0.9).attr("href", "#collapseTwo");	 
							  	$("#step2_accord").fadeTo("fast", 0.9).attr("href", "#collapseTwo");
							  	$("a#step2_accord" ).trigger( "click" );
							  	$("#step1iconspan").remove();	
							  	$("#step1icon").append("<i class='glyphicon glyphicon-ok' id='step1iconspan'>&nbsp;</i>");
							  	$("#progressbarpanel").remove();
							  	$("#progressbarwell").append("<span id='progressbarwell'><span id='progressbarpanel'><p>15% Complete</p><div class='progress progress-striped active'><div class='progress-bar progress-bar-info' role='progressbar' aria-valuenow='15' aria-valuemin='0' aria-valuemax='100' style='width: 15%'></div></div></span></span>");
							  	$("#step2backbtn").prop('disabled', false);	
							  	
							  	$( "#lastname").focus();
							}
							else
							{
								e.preventDefault();
								$('#form1').bootstrapValidator('validate');
							}
		    });

    	//-----------------form 2------------------
        $('#form2')
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
                    lastname: {
                        validators: {
                            notEmpty: {
                                message: 'Lastname is required and cannot be empty'
                            }                            
                        }
                    },
                    firstname: {
                        validators: {
                            notEmpty: {
                                message: 'The firstname is required'
                            }                            
                        }
                    }, 
                    middlename: {
                        validators: {
                            notEmpty: {
                                message: 'The middlename is required'
                            }                            
                        }
                    },
                    nickname: {
                        validators: {
                            notEmpty: {
                                message: 'The nickname is required'
                            }                            
                        }
                    },  
                    pre_houselot: {
                        validators: {
                            notEmpty: {
                                message: 'The House/Lot/Blk No is required'
                            }                            
                        }
                    }, 
                    pre_bgy: {
                        validators: {
                            notEmpty: {
                                message: 'The Bgy/Subd is required'
                            }                            
                        }
                    }, 
                    pre_region: {
                        validators: {
                            notEmpty: {
                                message: 'The region is required'
                            }                            
                        }
                    },  
                    pre_city: {
                        validators: {
                            notEmpty: {
                                message: 'The city is required'
                            }                            
                        }
                    }, 
                    pre_province: {
                        validators: {
                            notEmpty: {
                                message: 'The province is required'
                            }                            
                        }
                    }, 
                    per_houselot: {
                        validators: {
                            notEmpty: {
                                message: 'The House/Lot/Blk No is required'
                            }                            
                        }
                    }, 
                    per_bgy: {
                        validators: {
                            notEmpty: {
                                message: 'The Bgy/Subd is required'
                            }                            
                        }
                    },  
                    per_region: {
                        validators: {
                            notEmpty: {
                                message: 'The nickname is required'
                            }                            
                        }
                    },  
                    per_city: {
                        validators: {
                            notEmpty: {
                                message: 'The nickname is required'
                            }                            
                        }
                    },  
                    per_province: {
                        validators: {
                            notEmpty: {
                                message: 'The nickname is required'
                            }                            
                        }
                    },  
                    mobileno: {
                        validators: {
                            notEmpty: {
                                message: 'The mobile no. is required'
                            },
                            digits: {
                                message: 'The value can contain only digits'
                            },   
                            stringLength: {
		                        min: 11,
		                        message: 'Mobile No must be 11 characters long'
		                    }                                                     
                        }
                    },  
                    pre_postalcode: {
                         validators: {
	                            digits: {
	                                message: 'The value can contain only digits'
	                            }                                                        
                        }
                    }, 
                    per_postalcode: {
                        	validators: {
		                            digits: {
		                                message: 'The value can contain only digits'
		                            }                                                        
                        }
                    }, 
                    email: {
                        validators: {
                            notEmpty: {
                                message: 'The email is required'
                            }, 
                            emailAddress: {
		                        message: 'The input is not a valid email address'
		                    }
                        }
                    },  
                    social: {
                        validators: {
                            notEmpty: {
                                message: 'The social field is required'
                            }                            
                        }
                    }  
                }
            })
            .on('error.field.bv', function(e, data) {
            	//alert('error');
                console.log(data.field, data.element, '-->error');
                $("#step2nextbtn").prop('disabled', true);	
            })
            .on('success.field.bv', function(e, data) {
                console.log(data.field, data.element, '-->success');
            });
            // Validate the form manually
		    $('#step2nextbtn').click(function(e) {
		    	e.preventDefault();
		        $('#form2').bootstrapValidator('validate');
		        			var bootstrapValidator = $('#form2').data('bootstrapValidator');
							var stat2 = bootstrapValidator.isValid();
							if(stat2=='1')
							{
								$("#step3").fadeTo("fast", 0.9).attr("href", "#collapseThree");
								$("#step3_accord").fadeTo("fast", 0.9).attr("href", "#collapseThree");	
								$("a#step3_accord" ).trigger( "click" );	
								$("#step2iconspan").remove();	
							  	$("#step2icon").append("<i class='glyphicon glyphicon-ok' id='step2iconspan'>&nbsp;</i>");	
							  	$("#progressbarpanel").remove();
							  	$("#progressbarwell").append("<span id='progressbarwell'><span id='progressbarpanel'><p>30% Complete</p><div class='progress progress-striped active'><div class='progress-bar progress-bar-info' role='progressbar' aria-valuenow='30' aria-valuemin='0' aria-valuemax='100' style='width: 30%'></div></div></span></span>");
							  	$("#step3backbtn").prop('disabled', false);
							  	
							  	$( "#placeofbirth").focus();
							}
							else
							{
								e.preventDefault();
								$('#form2').bootstrapValidator('validate');
							}							
		    });		    		    
		    $('#sameasprentaddressid').change(function () {			        
			        if($(this).prop('checked')==true)
			        {
			        	//alert("true");
			        	//Same as my present address
			        	$('#per_houselot').val($('#pre_houselot').val());
			        	$('#per_bgy').val($('#pre_bgy').val());
			        	$('#per_region').val($('#pre_region').val());
			        	$('#per_province').val($('#pre_province').val());
			        	$('#per_city').val($('#pre_city').val());
			        	$('#per_postalcode').val($('#pre_postalcode').val());
			        	
			        	//disable form fields
			        	$('#per_houselot').attr('disabled','disabled');
			        	$('#per_bgy').attr('disabled','disabled');
			        	$('#per_region').attr('disabled','disabled');
			        	$('#per_province').attr('disabled','disabled');
			        	$('#per_city').attr('disabled','disabled');
			        	$('#per_postalcode').attr('disabled','disabled');
			        }
			        else
			        {
			        	//alert("false");
			        	//Not same as my present address
			        	$('#per_houselot').val("");
			        	$('#per_bgy').val("");
			        	$('#per_region').val("");
			        	$('#per_province').val("");
			        	$('#per_city').val("");
			        	$('#per_postalcode').val("");			        	
			        	
			        	//enable form fields
			        	$('#per_houselot').removeAttr('disabled');
			        	$('#per_bgy').removeAttr('disabled');
			        	//$('#per_region').removeAttr('disabled');
			        	$('#per_region').attr('disabled','disabled');
			        	$('#per_province').attr('disabled','disabled');
			        	//$('#per_city').attr('disabled','disabled');
			        	$('#per_city').removeAttr('disabled');
			        	$('#per_postalcode').removeAttr('disabled');			        	
			        }
			});
    	//-----------------form 3------------------
        $('#form3')
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
                	//------- 
                    dateofbirth: {
                        validators: {
                            notEmpty: {
                                message: 'The date of birth is required'
                            },
                            date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The date of birth is not valid. Should be in mm/dd/yyyy'
		                    }
                        }
                    },
                    sex: {
                        validators: {
                            notEmpty: {
                                message: 'The sex field is required'
                            }                            
                        }
                    }, 
                    age: {
                        validators: {
                            digits: {
                                message: 'The value can contain only digits'
                            },
                            greaterThan: {
                        		value: 18
		                    },
		                    lessThan: {
		                        value: 100
		                    }
                        }
                    },  
                    spouseage: {
                        validators: {
                            digits: {
                                message: 'The value can contain only digits'
                            },
                            greaterThan: {
                        		value: 12
		                    },
		                    lessThan: {
		                        value: 100
		                    }
                        }
                    }, 
                    spousenoofchildren: {
                        validators: {
                            digits: {
                                message: 'The value can contain only digits'
                            },
                            greaterThan: {
                        		value: 1
		                    },
		                    lessThan: {
		                        value: 20
		                    }                           
                        }
                    }, 
                    spouseageofchildren: {
                        validators: {
                            digits: {
                                message: 'The value can contain only digits'
                            },
                            greaterThan: {
                        		value: 1
		                    },
		                    lessThan: {
		                        value: 100
		                    }                           
                        }
                    }, 
                    civilstatus: {
                        validators: {
                            notEmpty: {
                                message: 'The civil status is required'
                            }                            
                        }
                    },
                    sssno: {
                        validators: {
                            digits: {
                                message: 'SSS no can only contain digits'
                            },
                            stringLength: {
		                        min: 10,
		                        message: 'SSS must be 10 characters long'
		                    }
                        }
                    },  
                    hdmfno: {
                        validators: {
                            digits: {
                                message: 'HDMF number can only contain digits'
                            },
                            stringLength: {
		                        min: 12,
		                        message: 'HDMF number must be 12 characters long'
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
		                    }
                        }
                    },                    
                    tin: {
                        validators: {
                            digits: {
                                message: 'TIN can only contain digits'
                            }
                        }
                    },                    
                    height: {
                        validators: {
                            notEmpty: {
                                message: 'The height is required'
                            }                            
                        }
                    },  
                    weight: {
                        validators: {
                            notEmpty: {
                                message: 'The weight is required'
                            }                            
                        }
                    }, 
                    fathersname: {
                        validators: {
                            notEmpty: {
                                message: 'The fathers name is required'
                            }                            
                        }
                    }, 
                    fathersage: {
                        validators: {
                            notEmpty: {
                                message: 'The age is required'
                            }, 
                            digits: {
                                message: 'The value can contain only digits'
                            },
                            greaterThan: {
                        		value: 0
		                    },
		                    lessThan: {
		                        value: 100
		                    }
                        }
                    },  
                    mothersname: {
                        validators: {
                            notEmpty: {
                                message: 'The mothersname is required'
                            }                            
                        }
                    }, 
                    mothersage: {
                        validators: {
                            notEmpty: {
                                message: 'The age is required'
                            },  
                            digits: {
                                message: 'The value can contain only digits'
                            },
                            greaterThan: {
                        		value: 0
		                    },
		                    lessThan: {
		                        value: 100
		                    }
                        }
                    },   
                    addressofparentbgy: {
                        validators: {
                            notEmpty: {
                                message: 'The Bgy/Subd/Municipality is required'
                            }                            
                        }
                    },   
                    addressofparentcity: {
                        validators: {
                            notEmpty: {
                                message: 'The city is required'
                            }                            
                        }
                    },   
                    addressofparentregion: {
                        validators: {
                            notEmpty: {
                                message: 'The region is required'
                            }                            
                        }
                    },  
                    addressofparentprovince: {
                        validators: {
                            notEmpty: {
                                message: 'The province is required'
                            }                            
                        }
                    },                    
                    addressofparentpostalcode: {
                        validators: {
                            notEmpty: {
                                message: 'The postal code is required'
                            }                            
                        }
                    } 
                    //------- 
                }
            })
            .on('error.field.bv', function(e, data) {
            	//alert('error');
                console.log(data.field, data.element, '-->error');
                $("#step3nextbtn").prop('disabled', true);	
            })
            .on('success.field.bv', function(e, data) {
                console.log(data.field, data.element, '-->success');
            });
            // Validate the form manually
		    $('#step3nextbtn').click(function(e) {
		    	e.preventDefault();
		        $('#form3').bootstrapValidator('validate');
		        			var bootstrapValidator = $('#form3').data('bootstrapValidator');
							var stat3 = bootstrapValidator.isValid();
							if(stat3=='1')
							{
										$("#step4").fadeTo("fast", 0.9).attr("href", "#collapseFour");
										$("#step4_accord").fadeTo("fast", 0.9).attr("href", "#collapseFour");	
										$("a#step4_accord" ).trigger( "click" );	
										$("#step3iconspan").remove();	
									  	$("#step3icon").append("<i class='glyphicon glyphicon-ok' id='step3iconspan'>&nbsp;</i>");	
									  	$("#progressbarpanel").remove();
									  	$("#progressbarwell").append("<span id='progressbarwell'><span id='progressbarpanel'><p>45% Complete</p><div class='progress progress-striped active'><div class='progress-bar progress-bar-info' role='progressbar' aria-valuenow='45' aria-valuemin='0' aria-valuemax='100' style='width: 45%'></div></div></span></span>");
									  	$("#step4backbtn").prop('disabled', false);
									  	
									  	$( "#schoolcollege1").focus();
							}
							else
							{
								e.preventDefault();
								$('#form3').bootstrapValidator('validate');
							}							
		    });	
		    $("input:radio[name=optionsRadiosInline]").click(function() {
			    var value = $(this).val();
			    //alert(value); 
			        if(value=='option1')
			        {
			        	//alert("option1");
			        	//Same as my present address
			        	//New Address
						$('#addressofparenthouse').val("");
			        	$('#addressofparentbgy').val("");
			        	$('#addressofparentregion').val("");
			        	$('#addressofparentprovince').val("");
			        	$('#addressofparentcity').val("");
			        	$('#addressofparentpostalcode').val("");			        	
			        	
			        	//enable form fields
			        	$('#addressofparenthouse').removeAttr('disabled');
			        	$('#addressofparentbgy').removeAttr('disabled');
			        	//$('#addressofparentregion').removeAttr('disabled');
			        	$('#addressofparentregion').attr('disabled','disabled');
			        	$('#addressofparentprovince').attr('disabled','disabled');
			        	//$('#addressofparentcity').attr('disabled','disabled');
			        	$('#addressofparentcity').removeAttr('disabled');
			        	$('#addressofparentpostalcode').removeAttr('disabled');
			        	
			        }
			        else if(value=='option2')
			        {
			        	//alert("option2");
			        	//Same as my present address
			        	$('#addressofparenthouse').val($('#pre_houselot').val());
			        	$('#addressofparentbgy').val($('#pre_bgy').val());
			        	$('#addressofparentregion').val($('#pre_region').val());
			        	$('#addressofparentprovince').val($('#pre_province').val());
			        	$('#addressofparentcity').val($('#pre_city').val());
			        	$('#addressofparentpostalcode').val($('#pre_postalcode').val());
			        	
			        	//disable form fields
			        	$('#addressofparenthouse').attr('disabled','disabled');
			        	$('#addressofparentbgy').attr('disabled','disabled');
			        	$('#addressofparentregion').attr('disabled','disabled');
			        	$('#addressofparentprovince').attr('disabled','disabled');
			        	$('#addressofparentcity').attr('disabled','disabled');
			        	$('#addressofparentpostalcode').attr('disabled','disabled');
			        }
			        else if(value=='option3')
			        {
			        	//alert("option3");
			        	//Same as my permanent address
			        	//alert("option3");
			        	$('#addressofparenthouse').val($('#per_houselot').val());
			        	$('#addressofparentbgy').val($('#per_bgy').val());
			        	$('#addressofparentregion').val($('#per_region').val());
			        	$('#addressofparentprovince').val($('#per_province').val());
			        	$('#addressofparentcity').val($('#per_city').val());
			        	$('#addressofparentpostalcode').val($('#per_postalcode').val());
			        	
			        	//disable form fields
			        	$('#addressofparenthouse').attr('disabled','disabled');
			        	$('#addressofparentbgy').attr('disabled','disabled');
			        	$('#addressofparentregion').attr('disabled','disabled');
			        	$('#addressofparentprovince').attr('disabled','disabled');
			        	$('#addressofparentcity').attr('disabled','disabled');
			        	$('#addressofparentpostalcode').attr('disabled','disabled');			        	
			        }	
			        else{
			        		//Others/Not Specified
							$('#addressofparenthouse').val("");
				        	$('#addressofparentbgy').val("");
				        	$('#addressofparentregion').val("");
				        	$('#addressofparentprovince').val("");
				        	$('#addressofparentcity').val("");
				        	$('#addressofparentpostalcode').val("");				        					        		
			        		
				        	$('#addressofparenthouse').attr('disabled','disabled');
				        	$('#addressofparentbgy').attr('disabled','disabled');
				        	$('#addressofparentregion').attr('disabled','disabled');
				        	$('#addressofparentprovince').attr('disabled','disabled');
				        	$('#addressofparentcity').attr('disabled','disabled');
				        	$('#addressofparentpostalcode').attr('disabled','disabled');
			        }		    
			    
			});
			$('#civilstatus').change(function () {	
				var mycivilstatus = $("#civilstatus").val();
				//alert (mycivilstatus);
				if(mycivilstatus=='2'){
			        	//enable form fields
			        	$('#spousename').removeAttr('disabled').val("");
			        	$('#spouseage').removeAttr('disabled').val("");
			        	$('#spouseoccupation').removeAttr('disabled').val("");
			        	$('#spousecompany').removeAttr('disabled','disabled').val("");
			        	$('#spousenoofchildren').removeAttr('disabled','disabled').val("");
			        	$('#spouseageofchildren').removeAttr('disabled').val("");					
				}
				else if(mycivilstatus=='1'){
			        	//enable form fields
			        	$('#spousename').val("");			        	
			        	$('#spouseage').val("");
			        	$('#spouseoccupation').val("");
			        	$('#spousecompany').val("");
			        	$('#spousenoofchildren').removeAttr('disabled','disabled').val("");
			        	$('#spouseageofchildren').removeAttr('disabled').val("");					
				}
				else if(mycivilstatus=='3'){
			        	//enable form fields
			        	$('#spousename').val("");			        	
			        	$('#spouseage').val("");
			        	$('#spouseoccupation').val("");
			        	$('#spousecompany').val("");
			        	$('#spousenoofchildren').removeAttr('disabled','disabled').val("");
			        	$('#spouseageofchildren').removeAttr('disabled').val("");					
				}
				else
				{
					//disabled
		        	$('#spousename').attr('disabled','disabled').val("");;
		        	$('#spouseage').attr('disabled','disabled').val("");;
		        	$('#spouseoccupation').attr('disabled','disabled').val("");;
		        	$('#spousecompany').attr('disabled','disabled').val("");;
		        	$('#spousenoofchildren').attr('disabled','disabled').val("");;
		        	$('#spouseageofchildren').attr('disabled','disabled').val("");;						
				}
			});
        //-----------------form 4------------------
        $('#form4')
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
                	//------- 
                    schoolcollege1: {
                        validators: {
                            notEmpty: {
                                message: 'The school/college is required'
                            }
                        }
                    },                	
                    degreeobtained1: {
                        validators: {
                            notEmpty: {
                                message: 'The degree obtained is required'
                            }
                        }
                    },
                    scholyear1: {
                        validators: {
                            notEmpty: {
                                message: 'The year is required'
                            }
                        }
                    },
                    governmentexamtakendatetaken1: {
                        validators: {  
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The field is not a valid date format. Should be in mm/dd/yyyy'
		                    }
                        }
                    }, 
                    governmentexamtakendatetaken2: {
                        validators: {  
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The field is not a valid date format. Should be in mm/dd/yyyy'
		                    }
                        }
                    }, 
                    governmentexamtakendatetaken3: {
                        validators: {  
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The field is not a valid date format. Should be in mm/dd/yyyy'
		                    }
                        }
                    }, 
                    governmentexamtakendatetaken4: {
                        validators: {  
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The field is not a valid date format. Should be in mm/dd/yyyy'
		                    }
                        }
                    }, 
                    governmentexamtakendatetaken5: {
                        validators: {  
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The field is not a valid date format. Should be in mm/dd/yyyy'
		                    }
                        }
                    }, 
                    certificationdatetaken1: {
                        validators: {  
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The field is not a valid date format. Should be in mm/dd/yyyy'
		                    }
                        }
                    },
                    certificationdatetaken2: {
                        validators: {  
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The field is not a valid date format. Should be in mm/dd/yyyy'
		                    }
                        }
                    },
                    certificationdatetaken3: {
                        validators: {  
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The field is not a valid date format. Should be in mm/dd/yyyy'
		                    }
                        }
                    },
                    certificationdatetaken4: {
                        validators: {  
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The field is not a valid date format. Should be in mm/dd/yyyy'
		                    }
                        }
                    }                    
                  //-------                        
                }
            })
            .on('error.field.bv', function(e, data) {
                console.log(data.field, data.element, '-->error');
                $("#step4nextbtn").prop('disabled', true);	
            })
            .on('success.field.bv', function(e, data) {
                console.log(data.field, data.element, '-->success');
            });
            // Validate the form manually
		    $('#step4nextbtn').click(function(e) {
		    	e.preventDefault();
		        $('#form4').bootstrapValidator('validate');
		        			var bootstrapValidator = $('#form4').data('bootstrapValidator');
							var stat4 = bootstrapValidator.isValid();
							if(stat4=='1')
							{
										$("#step5").fadeTo("fast", 0.9).attr("href", "#collapseFive");
										$("#step5_accord").fadeTo("fast", 0.9).attr("href", "#collapseFive");
										$("a#step5_accord" ).trigger( "click" );	
										$("#step4iconspan").remove();	
									  	$("#step4icon").append("<i class='glyphicon glyphicon-ok' id='step4iconspan'>&nbsp;</i>");	
									  	$("#progressbarpanel").remove();	
									  	$("#progressbarwell").append("<span id='progressbarwell'><span id='progressbarpanel'><p>60% Complete</p><div class='progress progress-striped active'><div class='progress-bar progress-bar-info' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style='width: 60%'></div></div></span></span>");
									  	$("#step5backbtn").prop('disabled', false);	
									  	
									  	$( "#wecompany1").focus();
							}
							else
							{
								e.preventDefault();
								$('#form4').bootstrapValidator('validate');
							}							
		    });		    
        //-----------------form 5------------------
        $('#form5')
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
                	//------- 
                    wecompany1: {
                        validators: {
                            notEmpty: {
                                message: 'The company is required'
                            }
                        }
                    }, 
                    wesalary1: {
                         validators: {
	                            digits: {
	                                message: 'The value can contain only digits'
	                            },
	                            greaterThan: {
	                        		value: 1000
			                    },
			                    lessThan: {
			                        value: 100000
			                    }
                        }
                    },                	
                    weposition1: {
                        validators: {
                            notEmpty: {
                                message: 'The position is required'
                            }
                        }
                    },
                    wefrom1: {
                        validators: {
                            notEmpty: {
                                message: 'The date started is required'
                            },  
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The date of birth is not valid. Should be in mm/dd/yyyy'
		                    }
                        }
                    },
                    weto1: {
                        validators: {
                            notEmpty: {
                                message: 'The date ended is required'
                            },  
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The date of birth is not valid. Should be in mm/dd/yyyy'
		                    }
                        }
                    },  
                    wefrom2: {
                        validators: {
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The date of birth is not valid. Should be in mm/dd/yyyy'
		                    }
                        }
                    },
                    wesalary2: {
                         validators: {
	                            digits: {
	                                message: 'The value can contain only digits'
	                            },
	                            greaterThan: {
	                        		value: 1000
			                    },
			                    lessThan: {
			                        value: 100000
			                    }
                        }
                    }, 
                    weto2: {
                        validators: { 
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The date of birth is not valid. Should be in mm/dd/yyyy'
		                    }
                        }
                    },       
                   wefrom3: {
                        validators: {
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The date of birth is not valid. Should be in mm/dd/yyyy'
		                    }
                        }
                    },
                    wesalary3: {
                         validators: {
	                            digits: {
	                                message: 'The value can contain only digits'
	                            },
	                            greaterThan: {
	                        		value: 1000
			                    },
			                    lessThan: {
			                        value: 100000
			                    }
                        }
                    }, 
                    weto3: {
                        validators: { 
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The date of birth is not valid. Should be in mm/dd/yyyy'
		                    }
                        }
                    }, 
                    wefrom4: {
                        validators: {
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The date of birth is not valid. Should be in mm/dd/yyyy'
		                    }
                        }
                    },
                    wesalary4: {
                         validators: {
	                            digits: {
	                                message: 'The value can contain only digits'
	                            },
	                            greaterThan: {
	                        		value: 1000
			                    },
			                    lessThan: {
			                        value: 100000
			                    }
                        }
                    }, 
                    weto4: {
                        validators: { 
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The date of birth is not valid. Should be in mm/dd/yyyy'
		                    }
                        }
                    },   
                    wefrom5: {
                        validators: {
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The date of birth is not valid. Should be in mm/dd/yyyy'
		                    }
                        }
                    },
                    wesalary5: {
                         validators: {
	                            digits: {
	                                message: 'The value can contain only digits'
	                            },
	                            greaterThan: {
	                        		value: 1000
			                    },
			                    lessThan: {
			                        value: 100000
			                    }
                        }
                    }, 
                    weto5: {
                        validators: { 
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The date of birth is not valid. Should be in mm/dd/yyyy'
		                    }
                        }
                    }, 
                    wefrom6: {
                        validators: {
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The date of birth is not valid. Should be in mm/dd/yyyy'
		                    }
                        }
                    },
                    wesalary6: {
                         validators: {
	                            digits: {
	                                message: 'The value can contain only digits'
	                            },
	                            greaterThan: {
	                        		value: 1000
			                    },
			                    lessThan: {
			                        value: 100000
			                    }
                        }
                    }, 
                    weto6: {
                        validators: { 
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The date of birth is not valid. Should be in mm/dd/yyyy'
		                    }
                        }
                    },    
                    wefrom7: {
                        validators: {
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The date of birth is not valid. Should be in mm/dd/yyyy'
		                    }
                        }
                    },
                    wesalary7: {
                         validators: {
	                            digits: {
	                                message: 'The value can contain only digits'
	                            },
	                            greaterThan: {
	                        		value: 1000
			                    },
			                    lessThan: {
			                        value: 100000
			                    }
                        }
                    }, 
                    weto7: {
                        validators: { 
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The date of birth is not valid. Should be in mm/dd/yyyy'
		                    }
                        }
                    },  
                    wefrom8: {
                        validators: {
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The date of birth is not valid. Should be in mm/dd/yyyy'
		                    }
                        }
                    },
                    wesalary8: {
                         validators: {
	                            digits: {
	                                message: 'The value can contain only digits'
	                            },
	                            greaterThan: {
	                        		value: 1000
			                    },
			                    lessThan: {
			                        value: 100000
			                    }
                        }
                    }, 
                    weto8: {
                        validators: { 
                             date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The date of birth is not valid. Should be in mm/dd/yyyy'
		                    }
                        }
                    },                                                         
                    weresonforleaving1: {
                        validators: {
                            notEmpty: {
                                message: 'The reason for leaving is required'
                            }
                        }
                    }
                    //------- 
                }
            })
            .on('error.field.bv', function(e, data) {
                console.log(data.field, data.element, '-->error');
                $("#step5nextbtn").prop('disabled', true);	
            })
            .on('success.field.bv', function(e, data) {
                console.log(data.field, data.element, '-->success');
            });
            // Validate the form manually
		    $('#step5nextbtn').click(function(e) {
		    	e.preventDefault();
		        $('#form5').bootstrapValidator('validate');
		        			var bootstrapValidator = $('#form5').data('bootstrapValidator');
							var stat5 = bootstrapValidator.isValid();
							if(stat5=='1')
							{
										$("#step6").fadeTo("fast", 0.9).attr("href", "#collapseSix");
										$("#step6_accord").fadeTo("fast", 0.9).attr("href", "#collapseSix");
										$("a#step6_accord" ).trigger( "click" );	
										$("#step5iconspan").remove();	
									  	$("#step5icon").append("<i class='glyphicon glyphicon-ok' id='step5iconspan'>&nbsp;</i>");	
									  	$("#progressbarpanel").remove();	
									  	$("#progressbarwell").append("<span id='progressbarwell'><span id='progressbarpanel'><p>75% Complete</p><div class='progress progress-striped active'><div class='progress-bar progress-bar-info' role='progressbar' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100' style='width: 75%'></div></div></span></span>");
									  	$("#step6backbtn").prop('disabled', false);	
									  	
									  	$( "#charefname1").focus();
							}
							else
							{
								e.preventDefault();
								$('#form5').bootstrapValidator('validate');
							}							
		    });	
		    $("input:checkbox[name=optionsRadios]").click(function() {
			    var value = $(this).val();
			    //alert(value); 
			        if(value=='option1')
			        {

			        	$('#weto1').val('');
			        	$('#weto1').attr('disabled','disabled');
			        	$('#weresonforleaving1').val('');
			        	$('#weresonforleaving1').attr('disabled','disabled');
			        	
			        	$('#weto2').removeAttr('disabled');
			        	$('#weto3').removeAttr('disabled');
			        	$('#weto4').removeAttr('disabled');
			        	$('#weto5').removeAttr('disabled');
			        	$('#weto6').removeAttr('disabled');
			        	$('#weto7').removeAttr('disabled');
			        	$('#weto8').removeAttr('disabled');
			        	
			        	$('#wweresonforleaving2').removeAttr('disabled');
			        	$('#weresonforleaving3').removeAttr('disabled');
			        	$('#weresonforleaving4').removeAttr('disabled');
			        	$('#weresonforleaving5').removeAttr('disabled');
			        	$('#weresonforleaving6').removeAttr('disabled');
			        	$('#weresonforleaving7').removeAttr('disabled');
			        	$('#weresonforleaving8').removeAttr('disabled');	
			        	
			        	//uncheck
			        	$('#optionsRadios2').attr('checked', false);	
			        	$('#optionsRadios3').attr('checked', false);
			        	$('#optionsRadios4').attr('checked', false);
			        	$('#optionsRadios5').attr('checked', false);
			        	$('#optionsRadios6').attr('checked', false);
			        	$('#optionsRadios7').attr('checked', false);
			        	$('#optionsRadios8').attr('checked', false);
        	
			        				        	
			        }
			        else if(value=='option2')
			        {
			        	$('#weto2').val('');
						$('#weto2').attr('disabled','disabled');
			        	$('#weresonforleaving2').val('');
			        	$('#weresonforleaving2').attr('disabled','disabled');						
						
			        	$('#weto1').removeAttr('disabled');
			        	$('#weto3').removeAttr('disabled');
			        	$('#weto4').removeAttr('disabled');
			        	$('#weto5').removeAttr('disabled');
			        	$('#weto6').removeAttr('disabled');
			        	$('#weto7').removeAttr('disabled');
			        	$('#weto8').removeAttr('disabled');	
			        	
			        	$('#weresonforleaving1').removeAttr('disabled');
			        	$('#weresonforleaving3').removeAttr('disabled');
			        	$('#weresonforleaving4').removeAttr('disabled');
			        	$('#weresonforleaving5').removeAttr('disabled');
			        	$('#weresonforleaving6').removeAttr('disabled');
			        	$('#weresonforleaving7').removeAttr('disabled');
			        	$('#weresonforleaving8').removeAttr('disabled');
			        	
			        	//uncheck
			        	$('#optionsRadios1').attr('checked', false);	
			        	$('#optionsRadios3').attr('checked', false);
			        	$('#optionsRadios4').attr('checked', false);
			        	$('#optionsRadios5').attr('checked', false);
			        	$('#optionsRadios6').attr('checked', false);
			        	$('#optionsRadios7').attr('checked', false);
			        	$('#optionsRadios8').attr('checked', false);
			        	
			        }
			        else if(value=='option3')
			        {
			        	$('#weto3').val('');
		        		$('#weto3').attr('disabled','disabled');
			        	$('#weresonforleaving3').val('');
			        	$('#weresonforleaving3').attr('disabled','disabled');		        		
		        		
			        	$('#weto1').removeAttr('disabled');
			        	$('#weto2').removeAttr('disabled');
			        	$('#weto4').removeAttr('disabled');
			        	$('#weto5').removeAttr('disabled');
			        	$('#weto6').removeAttr('disabled');
			        	$('#weto7').removeAttr('disabled');
			        	$('#weto8').removeAttr('disabled');		
			        	
			        	$('#weresonforleaving1').removeAttr('disabled');
			        	$('#weresonforleaving2').removeAttr('disabled');
			        	$('#weresonforleaving4').removeAttr('disabled');
			        	$('#weresonforleaving5').removeAttr('disabled');
			        	$('#weresonforleaving6').removeAttr('disabled');
			        	$('#weresonforleaving7').removeAttr('disabled');
			        	$('#weresonforleaving8').removeAttr('disabled');
			        	
			        	//uncheck
			        	$('#optionsRadios1').attr('checked', false);	
			        	$('#optionsRadios2').attr('checked', false);
			        	$('#optionsRadios4').attr('checked', false);
			        	$('#optionsRadios5').attr('checked', false);
			        	$('#optionsRadios6').attr('checked', false);
			        	$('#optionsRadios7').attr('checked', false);
			        	$('#optionsRadios8').attr('checked', false);

			        }	
			        else if(value=='option4')
			        {
			        	$('#weto4').val('');
		        	    $('#weto4').attr('disabled','disabled');
			        	$('#weresonforleaving4').val('');
			        	$('#weresonforleaving4').attr('disabled','disabled');		        	    
		        	    
			        	$('#weto1').removeAttr('disabled');
			        	$('#weto2').removeAttr('disabled');
			        	$('#weto3').removeAttr('disabled');
			        	$('#weto5').removeAttr('disabled');
			        	$('#weto6').removeAttr('disabled');
			        	$('#weto7').removeAttr('disabled');
			        	$('#weto8').removeAttr('disabled');	
			        	
			        	$('#weresonforleaving1').removeAttr('disabled');
			        	$('#weresonforleaving2').removeAttr('disabled');
			        	$('#weresonforleaving3').removeAttr('disabled');
			        	$('#weresonforleaving5').removeAttr('disabled');
			        	$('#weresonforleaving6').removeAttr('disabled');
			        	$('#weresonforleaving7').removeAttr('disabled');
			        	$('#weresonforleaving8').removeAttr('disabled');	
			        	
			        	//uncheck
			        	$('#optionsRadios1').attr('checked', false);	
			        	$('#optionsRadios2').attr('checked', false);
			        	$('#optionsRadios3').attr('checked', false);
			        	$('#optionsRadios5').attr('checked', false);
			        	$('#optionsRadios6').attr('checked', false);
			        	$('#optionsRadios7').attr('checked', false);
			        	$('#optionsRadios8').attr('checked', false);			        				        			        	   
			        }	
			       else if(value=='option5')
			        {
			        	$('#weto5').val('');
		        		$('#weto5').attr('disabled','disabled');
			        	$('#weresonforleaving5').val('');
			        	$('#weresonforleaving5').attr('disabled','disabled');		        		
		        		
			        	$('#weto1').removeAttr('disabled');
			        	$('#weto2').removeAttr('disabled');
			        	$('#weto3').removeAttr('disabled');
			        	$('#weto4').removeAttr('disabled');
			        	$('#weto6').removeAttr('disabled');
			        	$('#weto7').removeAttr('disabled');
			        	$('#weto8').removeAttr('disabled');	
			        	
			        	$('#weresonforleaving1').removeAttr('disabled');
			        	$('#weresonforleaving2').removeAttr('disabled');
			        	$('#weresonforleaving3').removeAttr('disabled');
			        	$('#weresonforleaving4').removeAttr('disabled');
			        	$('#weresonforleaving6').removeAttr('disabled');
			        	$('#weresonforleaving7').removeAttr('disabled');
			        	$('#weresonforleaving8').removeAttr('disabled');
			        	
			        	//uncheck
			        	$('#optionsRadios1').attr('checked', false);	
			        	$('#optionsRadios2').attr('checked', false);
			        	$('#optionsRadios3').attr('checked', false);
			        	$('#optionsRadios4').attr('checked', false);
			        	$('#optionsRadios6').attr('checked', false);
			        	$('#optionsRadios7').attr('checked', false);
			        	$('#optionsRadios8').attr('checked', false);			        	
			        }	
			        else if(value=='option6')
			        {
			        	$('#weto6').val('');
		        	 	$('#weto6').attr('disabled','disabled');
			        	$('#weresonforleaving6').val('');
			        	$('#weresonforleaving6').attr('disabled','disabled');		        	 	
		        	 	
			        	$('#weto1').removeAttr('disabled');
			        	$('#weto2').removeAttr('disabled');
			        	$('#weto3').removeAttr('disabled');
			        	$('#weto4').removeAttr('disabled');
			        	$('#weto5').removeAttr('disabled');
			        	$('#weto7').removeAttr('disabled');
			        	$('#weto8').removeAttr('disabled');	
			        	
			        	$('#weresonforleaving1').removeAttr('disabled');
			        	$('#weresonforleaving2').removeAttr('disabled');
			        	$('#weresonforleaving3').removeAttr('disabled');
			        	$('#weresonforleaving4').removeAttr('disabled');
			        	$('#weresonforleaving5').removeAttr('disabled');
			        	$('#weresonforleaving7').removeAttr('disabled');
			        	$('#weresonforleaving8').removeAttr('disabled');
			        	
			        	//uncheck
			        	$('#optionsRadios1').attr('checked', false);	
			        	$('#optionsRadios2').attr('checked', false);
			        	$('#optionsRadios3').attr('checked', false);
			        	$('#optionsRadios4').attr('checked', false);
			        	$('#optionsRadios5').attr('checked', false);
			        	$('#optionsRadios7').attr('checked', false);
			        	$('#optionsRadios8').attr('checked', false);			        	
			        }	
			        else if(value=='option7')
			        {
			        	$('#weto7').val('');
		        		$('#weto7').attr('disabled','disabled');
			        	$('#weresonforleaving7').val('');
			        	$('#weresonforleaving7').attr('disabled','disabled');		        		
		        		
			        	$('#weto1').removeAttr('disabled');
			        	$('#weto2').removeAttr('disabled');
			        	$('#weto3').removeAttr('disabled');
			        	$('#weto4').removeAttr('disabled');
			        	$('#weto5').removeAttr('disabled');
			        	$('#weto6').removeAttr('disabled');
			        	$('#weto8').removeAttr('disabled');	
			        	
			        	$('#weresonforleaving1').removeAttr('disabled');
			        	$('#weresonforleaving2').removeAttr('disabled');
			        	$('#weresonforleaving3').removeAttr('disabled');
			        	$('#weresonforleaving4').removeAttr('disabled');
			        	$('#weresonforleaving5').removeAttr('disabled');
			        	$('#weresonforleaving6').removeAttr('disabled');
			        	$('#weresonforleaving8').removeAttr('disabled');
			        	
			        	//uncheck
			        	$('#optionsRadios1').attr('checked', false);	
			        	$('#optionsRadios2').attr('checked', false);
			        	$('#optionsRadios3').attr('checked', false);
			        	$('#optionsRadios4').attr('checked', false);
			        	$('#optionsRadios5').attr('checked', false);
			        	$('#optionsRadios6').attr('checked', false);
			        	$('#optionsRadios8').attr('checked', false);				        	
			        }	
			        else if(value=='option8')
			        {
			        	$('#weto8').val('');
		        		$('#weto8').attr('disabled','disabled');
			        	$('#weresonforleaving8').val('');
			        	$('#weresonforleaving8').attr('disabled','disabled');		        		
		        		
			        	$('#weto1').removeAttr('disabled');
			        	$('#weto2').removeAttr('disabled');
			        	$('#weto3').removeAttr('disabled');
			        	$('#weto4').removeAttr('disabled');
			        	$('#weto5').removeAttr('disabled');
			        	$('#weto6').removeAttr('disabled');
			        	$('#weto7').removeAttr('disabled');		
			        	
			        	$('#weresonforleaving1').removeAttr('disabled');
			        	$('#weresonforleaving2').removeAttr('disabled');
			        	$('#weresonforleaving3').removeAttr('disabled');
			        	$('#weresonforleaving4').removeAttr('disabled');
			        	$('#weresonforleaving5').removeAttr('disabled');
			        	$('#weresonforleaving6').removeAttr('disabled');
			        	$('#weresonforleaving7').removeAttr('disabled');
			        	
			        	//uncheck
			        	$('#optionsRadios1').attr('checked', false);	
			        	$('#optionsRadios2').attr('checked', false);
			        	$('#optionsRadios3').attr('checked', false);
			        	$('#optionsRadios4').attr('checked', false);
			        	$('#optionsRadios5').attr('checked', false);
			        	$('#optionsRadios6').attr('checked', false);
			        	$('#optionsRadios7').attr('checked', false);			        	
			        }				        
			        else{

			        }				        
						if ($("input:checkbox[name=optionsRadios]").is(':checked')) {
						  //alert('checked');
						}    
						else
						{    
						 
					        	$('#weto1').removeAttr('disabled');
					        	$('#weto2').removeAttr('disabled');
					        	$('#weto3').removeAttr('disabled');
					        	$('#weto4').removeAttr('disabled');
					        	$('#weto5').removeAttr('disabled');
					        	$('#weto6').removeAttr('disabled');
					        	$('#weto7').removeAttr('disabled');
					        	$('#weto8').removeAttr('disabled');	
					        	
					        	$('#weresonforleaving1').removeAttr('disabled');
					        	$('#weresonforleaving2').removeAttr('disabled');
					        	$('#weresonforleaving3').removeAttr('disabled');
					        	$('#weresonforleaving4').removeAttr('disabled');
					        	$('#weresonforleaving5').removeAttr('disabled');
					        	$('#weresonforleaving6').removeAttr('disabled');
					        	$('#weresonforleaving7').removeAttr('disabled');
					        	$('#weresonforleaving8').removeAttr('disabled');							 
						}			        
			   });      	    		    
        //-----------------form 6------------------
        $('#form6')
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
                	//------- 
                    charefname1: {
                        validators: {
                            notEmpty: {
                                message: 'The name is required'
                            }
                        }
                    },                	
                    charefaddress1: {
                        validators: {
                            notEmpty: {
                                message: 'The address or tel. No is required'
                            }
                        }
                    },
                    charefprofession1: {
                        validators: {
                            notEmpty: {
                                message: 'The profession is required'
                            }                            
                        }
                    },
                	//------- 
                    charefname2: {
                        validators: {
                            notEmpty: {
                                message: 'The name is required'
                            }
                        }
                    },                	
                    charefaddress2: {
                        validators: {
                            notEmpty: {
                                message: 'The address or tel. No is required'
                            }
                        }
                    },
                    charefprofession2: {
                        validators: {
                            notEmpty: {
                                message: 'The profession is required'
                            }                            
                        }
                    }, 
                	//------- 
                    charefname3: {
                        validators: {
                            notEmpty: {
                                message: 'The name is required'
                            }
                        }
                    },                	
                    charefaddress3: {
                        validators: {
                            notEmpty: {
                                message: 'The address or tel. No is required'
                            }
                        }
                    },
                    charefprofession3: {
                        validators: {
                            notEmpty: {
                                message: 'The profession is required'
                            }                            
                        }
                    },                    
                    charefwhoreferred: {
                        validators: {
                            notEmpty: {
                                message: 'This field is required'
                            }
                        }
                    },    
                    chareffriendsrelatives: {
                        validators: {
                            notEmpty: {
                                message: 'This field is required'
                            }
                        }
                    },
                    charefnotifiedincaseofermergency: {
                        validators: {
                            notEmpty: {
                                message: 'This field is required'
                            }
                        }
                    }, 
                    chareftelno: {
                        validators: {
                            notEmpty: {
                                message: 'This field is required'
                            }
                        }
                    }                   
                    //------- 
                }
            })
            .on('error.field.bv', function(e, data) {
                console.log(data.field, data.element, '-->error');
                $("#step6nextbtn").prop('disabled', true);	
            })
            .on('success.field.bv', function(e, data) {
                console.log(data.field, data.element, '-->success');
            });
            // Validate the form manually
		    $('#step6nextbtn').click(function(e) {
		    	e.preventDefault();
		        $('#form6').bootstrapValidator('validate');
		        			var bootstrapValidator = $('#form6').data('bootstrapValidator');
							var stat6 = bootstrapValidator.isValid();
							if(stat6=='1')
							{
										$("#step7").fadeTo("fast", 0.9).attr("href", "#collapseSeven");
										$("#step7_accord").fadeTo("fast", 0.9).attr("href", "#collapseSeven");
										$("a#step7_accord" ).trigger( "click" );
									  	$("#step6iconspan").remove();	
									  	$("#step6icon").append("<i class='glyphicon glyphicon-ok' id='step6iconspan'>&nbsp;</i>");	
									  	$("#progressbarpanel").remove();
									  	$("#progressbarwell").append("<span id='progressbarwell'><span id='progressbarpanel'><p>90% Complete</p><div class='progress progress-striped active'><div class='progress-bar progress-bar-info' role='progressbar' aria-valuenow='90' aria-valuemin='0' aria-valuemax='100' style='width: 90%'></div></div></span></span>");
									  	$("#step7backbtn").prop('disabled', false);	
									  	
									  	$( "#refcompletename1").focus();
							}
							else
							{
								e.preventDefault();
								$('#form6').bootstrapValidator('validate');
							}							
		    });		    
        //-----------------form 7------------------
        $('#form7')
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
                	//------- 
                    refcompletename1: {
                        validators: {
                            notEmpty: {
                                message: 'The complete name is required'
                            }
                        }
                    },                                    
                   refpositionappliedfor1: {
                        validators: {
                            notEmpty: {
                                message: 'The position applied for is required'
                            }
                        }
                    },
                    refcontactnos1: {
                        validators: {
                            notEmpty: {
                                message: 'The contact number is required'
                            }                            
                        }
                    },
                    //------- 
                    refcompletename2: {
                        validators: {
                            notEmpty: {
                                message: 'The complete name is required'
                            }
                        }
                    },                	
                   refpositionappliedfor2: {
                        validators: {
                            notEmpty: {
                                message: 'The position applied for is required'
                            }
                        }
                    },
                    refcontactnos2: {
                        validators: {
                            notEmpty: {
                                message: 'The contact number is required'
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
                    //------- 
                    
                }
            })
            .on('error.field.bv', function(e, data) {
                console.log(data.field, data.element, '-->error');
                $("#step6nextbtn").prop('disabled', true);	
            })
            .on('success.field.bv', function(e, data) {
                console.log(data.field, data.element, '-->success');
            });
            // Validate the form manually
		    $('#step7nextbtn').click(function(e) {
		    	e.preventDefault();
		        $('#form7').bootstrapValidator('validate');
		        			var bootstrapValidator = $('#form7').data('bootstrapValidator');
							var stat7 = bootstrapValidator.isValid();
							if(stat7=='1')
							{								
																
									var mycompanyid = $("#mycompanyid").val();
									var tempempno = $("#tempempno").val();
									var sourcethru = $("#sourcethru").val();
									var firstchoice = $("#firstchoice").val();
									var prefjobfunc = $("#prefjobfunc").val();
									var prefjobfunc2 = $("#prefjobfunc2").val();
									var prefworklocation = $("#prefworklocation").val();
									var currentsalary = $("#currentsalary").val();
									var inviteby = $("#inviteby").val();
									var secondchoice = $("#secondchoice").val();
									var dateavailability = $("#dateavailability").val();
									var expectedsalary = $("#expectedsalary").val();
									//alert("test1");
									
									var lastname = $("#lastname").val();
									var firstname = $("#firstname").val();
									var middlename = $("#middlename").val();
									var nickname = $("#nickname").val();
									var pre_houselot = $("#pre_houselot").val();
									var pre_bgy = $("#pre_bgy").val();
									var pre_region = $("#pre_region").val();
									var pre_city = $("#pre_city").val();
									var pre_province = $("#pre_province").val();
									var pre_postalcode = $("#pre_postalcode").val();									
									var per_houselot = $("#per_houselot").val();
									var per_bgy = $("#per_bgy").val();
									var per_region = $("#per_region").val();
									var per_city = $("#per_city").val();
									var per_province = $("#per_province").val();
									var per_postalcode = $("#per_postalcode").val();									
									var telno = $("#telno").val();
									var mobileno = $("#mobileno").val();
									var email = $("#email").val();
									var social = $("#social").val();
									var instantmessenger = $("#instantmessenger").val();									
									var twitter = $("#twitter").val();
									var instagram = $("#instagram").val();
									//alert("test2");
									
									var dateofbirth = $("#dateofbirth").val();
									var placeofbirth = $("#placeofbirth").val();
									var age = $("#age").val();
									var sex = $("#sex").val();
									var citizenship = $("#citizenship").val();
									var civilstatus = $("#civilstatus").val();																		
									var religion = $("#religion").val();
									var sssno = $("#sssno").val();
									var hdmfno = $("#hdmfno").val();
									var philhealth = $("#philhealth").val();
									var tin = $("#tin").val();									
									var height = $("#height").val();
									var weight = $("#weight").val();
									var taxstatus = $("#taxstatus").val();
									var spousename = $("#spousename").val();
									var spouseage = $("#spouseage").val();
									var spouseoccupation = $("#spouseoccupation").val();									
									var spousecompany = $("#spousecompany").val();
									var spousenoofchildren = $("#spousenoofchildren").val();
									var spouseageofchildren = $("#spouseageofchildren").val();									
									var fathersname = $("#fathersname").val();																		
									var fathersage = $("#fathersage").val();
									var fathersoccupation = $("#fathersoccupation").val();
									var fatherscompany = $("#fatherscompany").val();
									var mothersname = $("#mothersname").val();									
									var mothersage = $("#mothersage").val();
									var mothersoccupation = $("#mothersoccupation").val();
									var motherscompany = $("#motherscompany").val();
									var addressofparenthouse = $("#addressofparenthouse").val();
									var addressofparentbgy = $("#addressofparentbgy").val();
									var addressofparentcity = $("#addressofparentcity").val();									
									var addressofparentregion = $("#addressofparentregion").val();
									var addressofparentprovince = $("#addressofparentprovince").val();
									var addressofparentpostalcode = $("#addressofparentpostalcode").val();	
									//alert("test3");																
																																
									var schoolcollege1 = $("#schoolcollege1").val();	
									var degreeobtained1 = $("#degreeobtained1").val();	
									var scholyear1 = $("#scholyear1").val();	
									var awardsreceived1 = $("#awardsreceived1").val();											
									var schoolcollege2 = $("#schoolcollege2").val();	
									var degreeobtained2 = $("#degreeobtained2").val();	
									var scholyear2 = $("#scholyear2").val();	
									var awardsreceived2 = $("#awardsreceived2").val();											
									var schoolcollege3 = $("#schoolcollege3").val();	
									var degreeobtained3 = $("#degreeobtained3").val();	
									var scholyear3 = $("#scholyear3").val();	
									var awardsreceived3 = $("#awardsreceived3").val();										
									var schoolcollege4 = $("#schoolcollege4").val();	
									var degreeobtained4 = $("#degreeobtained4").val();	
									var scholyear4 = $("#scholyear4").val();	
									var awardsreceived4 = $("#awardsreceived4").val();											
									var schoolcollege5 = $("#schoolcollege5").val();	
									var degreeobtained5 = $("#degreeobtained5").val();	
									var scholyear5 = $("#scholyear5").val();	
									var awardsreceived5 = $("#awardsreceived5").val();		
									
									/*'&schoolcollege1='+ schoolcollege1+'&degreeobtained1='+ degreeobtained1+'&scholyear1='+ scholyear1+'&awardsreceived1='+ awardsreceived1+
									'&schoolcollege2='+ schoolcollege2+'&degreeobtained2='+ degreeobtained2+'&scholyear2='+ scholyear2+'&awardsreceived2='+ awardsreceived2+
									'&schoolcollege3='+ schoolcollege3+'&degreeobtained3='+ degreeobtained3+'&scholyear3='+ scholyear3+'&awardsreceived3='+ awardsreceived3+
									'&schoolcollege4='+ schoolcollege4+'&degreeobtained4='+ degreeobtained4+'&scholyear4='+ scholyear4+'&awardsreceived4='+ awardsreceived4+
									'&schoolcollege5='+ schoolcollege5+'&degreeobtained5='+ degreeobtained5+'&scholyear5='+ scholyear5+'&awardsreceived5='+ awardsreceived5+*/								
																				
									var governmentexamtaken1 = $("#governmentexamtaken1").val();	
									var governmentexamtakenrating1 = $("#governmentexamtakenrating1").val();	
									var governmentexamtakendatetaken1 = $("#governmentexamtakendatetaken1").val();	
									var governmentexamtakenrank1 = $("#governmentexamtakenrank1").val();										
									var governmentexamtaken2 = $("#governmentexamtaken2").val();	
									var governmentexamtakenrating2 = $("#governmentexamtakenrating2").val();	
									var governmentexamtakendatetaken2 = $("#governmentexamtakendatetaken2").val();	
									var governmentexamtakenrank2 = $("#governmentexamtakenrank2").val();										
									var governmentexamtaken3 = $("#governmentexamtaken3").val();	
									var governmentexamtakenrating3 = $("#governmentexamtakenrating3").val();	
									var governmentexamtakendatetaken3 = $("#governmentexamtakendatetaken3").val();	
									var governmentexamtakenrank3 = $("#governmentexamtakenrank3").val();										
									var governmentexamtaken4 = $("#governmentexamtaken4").val();	
									var governmentexamtakenrating4 = $("#governmentexamtakenrating4").val();	
									var governmentexamtakendatetaken4 = $("#governmentexamtakendatetaken4").val();	
									var governmentexamtakenrank4 = $("#governmentexamtakenrank4").val();									
									var governmentexamtaken5 = $("#governmentexamtaken5").val();	
									var governmentexamtakenrating5 = $("#governmentexamtakenrating5").val();	
									var governmentexamtakendatetaken5 = $("#governmentexamtakendatetaken5").val();	
									var governmentexamtakenrank5 = $("#governmentexamtakenrank5").val();
									
									/*'&governmentexamtaken1='+ governmentexamtaken1+'&governmentexamtakenrating1='+ governmentexamtakenrating1+'&governmentexamtakendatetaken1='+ governmentexamtakendatetaken1+'&governmentexamtakenrank1='+ governmentexamtakenrank1+
								    '&governmentexamtaken2='+ governmentexamtaken2+'&governmentexamtakenrating2='+ governmentexamtakenrating2+'&governmentexamtakendatetaken2='+ governmentexamtakendatetaken2+'&governmentexamtakenrank2='+ governmentexamtakenrank2+
								    '&governmentexamtaken3='+ governmentexamtaken3+'&governmentexamtakenrating3='+ governmentexamtakenrating3+'&governmentexamtakendatetaken3='+ governmentexamtakendatetaken3+'&governmentexamtakenrank3='+ governmentexamtakenrank3+
								    '&governmentexamtaken4='+ governmentexamtaken4+'&governmentexamtakenrating4='+ governmentexamtakenrating4+'&governmentexamtakendatetaken4='+ governmentexamtakendatetaken4+'&governmentexamtakenrank4='+ governmentexamtakenrank4+
								    '&governmentexamtaken5='+ governmentexamtaken5+'&governmentexamtakenrating5='+ governmentexamtakenrating5+'&governmentexamtakendatetaken5='+ governmentexamtakendatetaken5+'&governmentexamtakenrank5='+ governmentexamtakenrank5+*/
																			
									var certification1 = $("#certification1").val();	
									var certificationrating1 = $("#certificationrating1").val();	
									var certificationdatetaken1 = $("#certificationdatetaken1").val();	
									var certificationrank1 = $("#certificationrank1").val();										
									var certification2 = $("#certification2").val();	
									var certificationrating2 = $("#certificationrating2").val();	
									var certificationdatetaken2 = $("#certificationdatetaken2").val();	
									var certificationrank2 = $("#certificationrank2").val();										
									var certification3 = $("#certification3").val();	
									var certificationrating3 = $("#certificationrating3").val();	
									var certificationdatetaken3 = $("#certificationdatetaken3").val();	
									var certificationrank3 = $("#certificationrank3").val();										
									var certification4 = $("#certification4").val();	
									var certificationrating4 = $("#certificationrating4").val();	
									var certificationdatetaken4 = $("#certificationdatetaken4").val();	
									var certificationrank4 = $("#certificationrank4").val();	
									
									/*'&certification1='+ certification1+'&certificationrating1='+ certificationrating1+'&certificationdatetaken1='+ certificationdatetaken1+'&certificationrank1='+ certificationrank1+
									'&certification2='+ certification2+'&certificationrating2='+ certificationrating2+'&certificationdatetaken2='+ certificationdatetaken2+'&certificationrank2='+ certificationrank2+
									'&certification3='+ certification3+'&certificationrating3='+ certificationrating3+'&certificationdatetaken3='+ certificationdatetaken3+'&certificationrank3='+ certificationrank3+
									'&certification4='+ certification4+'&certificationrating4='+ certificationrating4+'&certificationdatetaken4='+ certificationdatetaken4+'&certificationrank4='+ certificationrank4+*/
									
									// $("input:checkbox[name=optionsRadios]").click(function() {
									if($("input:checkbox[name='optionsRadios']").is(":checked"))  
									{
										
											//One of the radio buttons is checked
											if($("input:checkbox[id='optionsRadios1']").is(":checked")) 
											{
											         //write your code    
											         var optionradioresult1='PRESENT';     
										    }
										    else
										    {
										    		var optionradioresult1=null;
										    }
											if($("input:checkbox[id='optionsRadios2']").is(":checked")) 
											{
											         //write your code    
											         var optionradioresult2='PRESENT';         
										    }
										    else
										    {
										    		var optionradioresult2=null;
										    }	
										    if($("input:checkbox[id='optionsRadios3']").is(":checked")) 
											{
											         //write your code    
											         var optionradioresult3='PRESENT';         
										    }
										    else
										    {
										    		var optionradioresult3=null;
										    }
											if($("input:checkbox[id='optionsRadios4']").is(":checked")) 
											{
											         //write your code    
											         var optionradioresult4='PRESENT';        
										    }
										    else
										    {
										    		var optionradioresult4=null;
										    }	
										   if($("input:checkbox[id='optionsRadios5']").is(":checked")) 
											{
											         //write your code    
											         var optionradioresult5='PRESENT';         
										    }
										    else
										    {
										    		var optionradioresult5=null;
										    }
											if($("input:checkbox[id='optionsRadios6']").is(":checked")) 
											{
											         //write your code    
											         var optionradioresult6='PRESENT';        
										    }
										    else
										    {
										    		var optionradioresult6=null;
										    }	
										    if($("input:checkbox[id='optionsRadios7']").is(":checked")) 
											{
											         //write your code    
											         var optionradioresult7='PRESENT';         
										    }
										    else
										    {
										    		var optionradioresult7=null;
										    }
											if($("input:checkbox[id='optionsRadios8']").is(":checked")) 
											{
											         //write your code    
											         var optionradioresult8='PRESENT';         
										    }
										    else
										    {
										    		var optionradioresult8=null;
										    }										    
																			   
									}
																			
									var wecompany1 = $("#wecompany1").val();										
									var weposition1 = $("#weposition1").val();	
									var wefrom1 = $("#wefrom1").val();	
									var weto1 = $("#weto1").val();	
									var weresonforleaving1 = $("#weresonforleaving1").val();	
									var optionsRadios1 = optionradioresult1;
									var wesalary1 = $("#wesalary1").val();	
																	
									var wecompany2 = $("#wecompany2").val();										
									var weposition2 = $("#weposition2").val();	
									var wefrom2 = $("#wefrom2").val();	
									var weto2 = $("#weto2").val();	
									var weresonforleaving2 = $("#weresonforleaving2").val();
									var optionsRadios2 = optionradioresult2;
									var wesalary2 = $("#wesalary2").val();
																		
									var wecompany3 = $("#wecompany3").val();										
									var weposition3 = $("#weposition3").val();	
									var wefrom3 = $("#wefrom3").val();	
									var weto3 = $("#weto3").val();	
									var weresonforleaving3 = $("#weresonforleaving3").val();	
									var optionsRadios3 = optionradioresult3;
									var wesalary3 = $("#wesalary3").val();
																	
									var wecompany4 = $("#wecompany4").val();										
									var weposition4 = $("#weposition4").val();	
									var wefrom4 = $("#wefrom4").val();	
									var weto4 = $("#weto4").val();	
									var weresonforleaving4 = $("#weresonforleaving4").val();	
									var optionsRadios4 = optionradioresult4;
									var wesalary4 = $("#wesalary4").val();
																	
									var wecompany5 = $("#wecompany5").val();										
									var weposition5 = $("#weposition5").val();	
									var wefrom5 = $("#wefrom5").val();	
									var weto5 = $("#weto5").val();	
									var weresonforleaving5 = $("#weresonforleaving5").val();
									var optionsRadios5 = optionradioresult5;
									var wesalary5 = $("#wesalary5").val();
																		
									var wecompany6 = $("#wecompany6").val();										
									var weposition6 = $("#weposition6").val();	
									var wefrom6 = $("#wefrom6").val();	
									var weto6 = $("#weto6").val();	
									var optionsRadios6 = optionradioresult6;
									var wesalary6 = $("#wesalary6").val();
									
									var weresonforleaving6 = $("#weresonforleaving6").val();									
									var wecompany7 = $("#wecompany7").val();										
									var weposition7 = $("#weposition7").val();	
									var wefrom7 = $("#wefrom7").val();	
									var weto7 = $("#weto7").val();	
									var weresonforleaving7 = $("#weresonforleaving7").val();	
									var optionsRadios7 = optionradioresult7;
									var wesalary7 = $("#wesalary7").val();
																	
									var wecompany8 = $("#wecompany8").val();										
									var weposition8 = $("#weposition8").val();	
									var wefrom8 = $("#wefrom8").val();	
									var weto8 = $("#weto8").val();	
									var weresonforleaving8 = $("#weresonforleaving8").val();
									var optionsRadios8 = optionradioresult8;
									var wesalary8 = $("#wesalary8").val();
									
									/*'&wecompany1='+ wecompany1+'&weposition1='+ weposition1+'&wefrom1='+ wefrom1+'&weto1='+ weto1+'&weresonforleaving1='+ weresonforleaving1+
									'&wecompany2='+ wecompany2+'&weposition2='+ weposition2+'&wefrom2='+ wefrom2+'&weto2='+ weto2+'&weresonforleaving2='+ weresonforleaving2+
								    '&wecompany3='+ wecompany3+'&weposition3='+ weposition3+'&wefrom3='+ wefrom3+'&weto3='+ weto3+'&weresonforleaving3='+ weresonforleaving3+
								    '&wecompany4='+ wecompany4+'&weposition4='+ weposition4+'&wefrom4='+ wefrom4+'&weto4='+ weto4+'&weresonforleaving4='+ weresonforleaving4+
								    '&wecompany5='+ wecompany5+'&weposition5='+ weposition5+'&wefrom5='+ wefrom1+'&weto5='+ weto1+'&weresonforleaving5='+ weresonforleaving5+
								    '&wecompany6='+ wecompany6+'&weposition6='+ weposition6+'&wefrom6='+ wefrom6+'&weto6='+ weto6+'&weresonforleaving6='+ weresonforleaving6+
								    '&wecompany7='+ wecompany7+'&weposition7='+ weposition7+'&wefrom7='+ wefrom7+'&weto7='+ weto7+'&weresonforleaving7='+ weresonforleaving7+
								    '&wecompany8='+ wecompany8+'&weposition8='+ weposition8+'&wefrom8='+ wefrom8+'&weto8='+ weto8+'&weresonforleaving8='+ weresonforleaving8+*/
				
									var specialskills = $("#specialskills").val();
									var languages = $("#languages").val();
									//alert("test4");	
												
									var charefname1 = $("#charefname1").val();
									var charefaddress1 = $("#charefaddress1").val();
									var charefprofession1 = $("#charefprofession1").val();									
									var charefname2 = $("#charefname2").val();
									var charefaddress2 = $("#charefaddress2").val();
									var charefprofession2 = $("#charefprofession2").val();										
									var charefname3 = $("#charefname3").val();
									var charefaddress3 = $("#charefaddress3").val();
									var charefprofession3 = $("#charefprofession3").val();											
									var charefname4 = $("#charefname4").val();
									var charefaddress4 = $("#charefaddress4").val();
									var charefprofession4 = $("#charefprofession4").val();									
									var charefname5 = $("#charefname5").val();
									var charefaddress5 = $("#charefaddress5").val();
									var charefprofession5 = $("#charefprofession5").val();																																		
									var charefwhoreferred = $("#charefwhoreferred").val();
									var chareffriendsrelatives = $("#chareffriendsrelatives").val();
									var charefnotifiedincaseofermergency = $("#charefnotifiedincaseofermergency").val();
									var chareftelno = $("#chareftelno").val();
									//alert("test5");	
					
									/*'&charefname1='+ charefname1+'&charefaddress1='+ charefaddress1+'&charefprofession1='+  charefprofession1+		
									'&charefname2='+ charefname2+'&charefaddress2='+ charefaddress2+'&charefprofession2='+  charefprofession2+	
									'&charefname3='+ charefname3+'&charefaddress3='+ charefaddress3+'&charefprofession3='+  charefprofession3+	
									'&charefname4='+ charefname4+'&charefaddress4='+ charefaddress4+'& harefprofession4='+  charefprofession4+	
									'&charefname5='+ charefname5+'&charefaddress5='+ charefaddress5+'&charefprofession5='+  charefprofession5+	*/			
										
									var refcompletename1 = $("#refcompletename1").val();
									var refpositionappliedfor1 = $("#refpositionappliedfor1").val();
									var refcontactnos1 = $("#refcontactnos1").val();										
									var refcompletename2 = $("#refcompletename2").val();
									var refpositionappliedfor2 = $("#refpositionappliedfor2").val();
									var refcontactnos2 = $("#refcontactnos2").val();									
									var refcompletename3 = $("#refcompletename3").val();
									var refpositionappliedfor3 = $("#refpositionappliedfor3").val();
									var refcontactnos3 = $("#refcontactnos3").val();									
									var refcompletename4 = $("#refcompletename4").val();
									var refpositionappliedfor4 = $("#refpositionappliedfor4").val();
									var refcontactnos4 = $("#refcontactnos4").val();									
									var refcompletename5 = $("#refcompletename5").val();
									var refpositionappliedfor5 = $("#refpositionappliedfor5").val();
									var refcontactnos5 = $("#refcontactnos5").val();	
									
									var uploadedfile = $("#uploadedfile").val();	
									
									/*'&refcompletename1='+ refcompletename1+'&refpositionappliedfor1='+ refpositionappliedfor1+'&refcontactnos1='+  refcontactnos1+	
									'&refcompletename2='+ refcompletename2+'&refpositionappliedfor2='+ refpositionappliedfor2+'&refcontactnos2='+  refcontactnos2+	
									'&refcompletename3='+ refcompletename3+'&refpositionappliedfor3='+ refpositionappliedfor3+'&refcontactnos3='+  refcontactnos3+	
									'&refcompletename4='+ refcompletename4+'&refpositionappliedfor4='+ refpositionappliedfor4+'&refcontactnos4='+  refcontactnos4+	
									'&refcompletename5='+ refcompletename5+'&refpositionappliedfor5='+ refpositionappliedfor5+'&refcontactnos5='+  refcontactnos5+	*/	
																	
									/*var searchstring =  '';																
									if(tempempno ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+tempempno;}
									if(sourcethru ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+sourcethru;}
									if(firstchoice ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+firstchoice;}
									if(prefjobfunc ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+prefjobfunc;}
									if(prefworklocation ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+prefworklocation;}
									if(currentsalary ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+currentsalary;}
									if(inviteby ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+inviteby;}
									if(secondchoice ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+secondchoice;}
									if(dateavailability ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+dateavailability;}
									if(expectedsalary ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+expectedsalary;}																											
									//alert("searchstring"+searchstring);*/
																																			
									var dataString = 'tempempno='+ tempempno+'&sourcethru='+ sourcethru+'&firstchoice='+ firstchoice+'&prefjobfunc='+ prefjobfunc+
									'&prefworklocation='+ prefworklocation+'&currentsalary='+ currentsalary+'&inviteby='+ inviteby+'&secondchoice='+ secondchoice+
									'&dateavailability='+ dateavailability+'&expectedsalary='+ expectedsalary+'&lastname='+ lastname+'&firstname='+ firstname+
									'&middlename='+ middlename+'&nickname='+ nickname+'&pre_houselot='+ pre_houselot+'&pre_bgy='+ pre_bgy+
									'&pre_region='+ pre_region+'&pre_city='+ pre_city+'&pre_province='+ pre_province+'&pre_postalcode='+ pre_postalcode+
									'&per_houselot='+ per_houselot+'&per_bgy='+ per_bgy+'&per_region='+ per_region+'&per_city='+ per_city+
									'&per_province='+ per_province+'&per_postalcode='+ per_postalcode+'&telno='+ telno+'&mobileno='+ mobileno+
									'&email='+ email+'&social='+ social+'&instantmessenger='+ instantmessenger+'&dateofbirth='+ dateofbirth+
									'&placeofbirth='+ placeofbirth+'&age='+ age+'&sex='+ sex+'&citizenship='+ citizenship+
									'&civilstatus='+ civilstatus+'&religion='+ religion+'&sssno='+ sssno+'&hdmfno='+ hdmfno+
									'&tin='+ tin+'&height='+ height+'&weight='+ weight+'&taxstatus='+ taxstatus+								
									'&spousename='+ spousename+'&spouseage='+ spouseage+'&spouseoccupation='+ spouseoccupation+'&spousecompany='+ spousecompany+									
									'&spousenoofchildren='+ spousenoofchildren+'&spouseageofchildren='+ spouseageofchildren+'&fathersname='+ fathersname+'&fathersage='+ fathersage+
									'&fathersoccupation='+ fathersoccupation+'&fatherscompany='+ fatherscompany+'&mothersname='+ mothersname+'&mothersage='+ mothersage+
									'&mothersoccupation='+ mothersoccupation+'&motherscompany='+ motherscompany+'&addressofparenthouse='+ addressofparenthouse+'&addressofparentbgy='+ addressofparentbgy+
									'&addressofparentcity='+ addressofparentcity+'&addressofparentregion='+ addressofparentregion+'&addressofparentprovince='+ addressofparentprovince+'&addressofparentpostalcode='+ addressofparentpostalcode+
									'&specialskills='+ specialskills+'&languages='+ languages+'&charefwhoreferred='+ charefwhoreferred+'&chareffriendsrelatives='+ chareffriendsrelatives+
									'&charefnotifiedincaseofermergency='+ charefnotifiedincaseofermergency+'&chareftelno='+ chareftelno+
									'&schoolcollege1='+ schoolcollege1+'&degreeobtained1='+ degreeobtained1+'&scholyear1='+ scholyear1+'&awardsreceived1='+ awardsreceived1+
									'&schoolcollege2='+ schoolcollege2+'&degreeobtained2='+ degreeobtained2+'&scholyear2='+ scholyear2+'&awardsreceived2='+ awardsreceived2+
									'&schoolcollege3='+ schoolcollege3+'&degreeobtained3='+ degreeobtained3+'&scholyear3='+ scholyear3+'&awardsreceived3='+ awardsreceived3+
									'&schoolcollege4='+ schoolcollege4+'&degreeobtained4='+ degreeobtained4+'&scholyear4='+ scholyear4+'&awardsreceived4='+ awardsreceived4+
									'&schoolcollege5='+ schoolcollege5+'&degreeobtained5='+ degreeobtained5+'&scholyear5='+ scholyear5+'&awardsreceived5='+ awardsreceived5+									
									'&governmentexamtaken1='+ governmentexamtaken1+'&governmentexamtakenrating1='+ governmentexamtakenrating1+'&governmentexamtakendatetaken1='+ governmentexamtakendatetaken1+'&governmentexamtakenrank1='+ governmentexamtakenrank1+
								    '&governmentexamtaken2='+ governmentexamtaken2+'&governmentexamtakenrating2='+ governmentexamtakenrating2+'&governmentexamtakendatetaken2='+ governmentexamtakendatetaken2+'&governmentexamtakenrank2='+ governmentexamtakenrank2+
								    '&governmentexamtaken3='+ governmentexamtaken3+'&governmentexamtakenrating3='+ governmentexamtakenrating3+'&governmentexamtakendatetaken3='+ governmentexamtakendatetaken3+'&governmentexamtakenrank3='+ governmentexamtakenrank3+
								    '&governmentexamtaken4='+ governmentexamtaken4+'&governmentexamtakenrating4='+ governmentexamtakenrating4+'&governmentexamtakendatetaken4='+ governmentexamtakendatetaken4+'&governmentexamtakenrank4='+ governmentexamtakenrank4+
								    '&governmentexamtaken5='+ governmentexamtaken5+'&governmentexamtakenrating5='+ governmentexamtakenrating5+'&governmentexamtakendatetaken5='+ governmentexamtakendatetaken5+'&governmentexamtakenrank5='+ governmentexamtakenrank5+
									'&certification1='+ certification1+'&certificationrating1='+ certificationrating1+'&certificationdatetaken1='+ certificationdatetaken1+'&certificationrank1='+ certificationrank1+
									'&certification2='+ certification2+'&certificationrating2='+ certificationrating2+'&certificationdatetaken2='+ certificationdatetaken2+'&certificationrank2='+ certificationrank2+
									'&certification3='+ certification3+'&certificationrating3='+ certificationrating3+'&certificationdatetaken3='+ certificationdatetaken3+'&certificationrank3='+ certificationrank3+
									'&certification4='+ certification4+'&certificationrating4='+ certificationrating4+'&certificationdatetaken4='+ certificationdatetaken4+'&certificationrank4='+ certificationrank4+
									'&wecompany1='+ wecompany1+'&weposition1='+ weposition1+'&wefrom1='+ wefrom1+'&weto1='+ weto1+'&weresonforleaving1='+ weresonforleaving1+'&optionsRadios1='+ optionsRadios1+'&wesalary1='+ wesalary1+
									'&wecompany2='+ wecompany2+'&weposition2='+ weposition2+'&wefrom2='+ wefrom2+'&weto2='+ weto2+'&weresonforleaving2='+ weresonforleaving2+'&optionsRadios2='+ optionsRadios2+'&wesalary2='+ wesalary2+
								    '&wecompany3='+ wecompany3+'&weposition3='+ weposition3+'&wefrom3='+ wefrom3+'&weto3='+ weto3+'&weresonforleaving3='+ weresonforleaving3+'&optionsRadios3='+ optionsRadios3+'&wesalary3='+ wesalary3+
								    '&wecompany4='+ wecompany4+'&weposition4='+ weposition4+'&wefrom4='+ wefrom4+'&weto4='+ weto4+'&weresonforleaving4='+ weresonforleaving4+'&optionsRadios4='+ optionsRadios4+'&wesalary4='+ wesalary4+
								    '&wecompany5='+ wecompany5+'&weposition5='+ weposition5+'&wefrom5='+ wefrom5+'&weto5='+ weto5+'&weresonforleaving5='+ weresonforleaving5+'&optionsRadios5='+ optionsRadios5+'&wesalary5='+ wesalary5+
								    '&wecompany6='+ wecompany6+'&weposition6='+ weposition6+'&wefrom6='+ wefrom6+'&weto6='+ weto6+'&weresonforleaving6='+ weresonforleaving6+'&optionsRadios6='+ optionsRadios6+'&wesalary6='+ wesalary6+
								    '&wecompany7='+ wecompany7+'&weposition7='+ weposition7+'&wefrom7='+ wefrom7+'&weto7='+ weto7+'&weresonforleaving7='+ weresonforleaving7+'&optionsRadios7='+ optionsRadios7+'&wesalary7='+ wesalary7+
								    '&wecompany8='+ wecompany8+'&weposition8='+ weposition8+'&wefrom8='+ wefrom8+'&weto8='+ weto8+'&weresonforleaving8='+ weresonforleaving8+'&optionsRadios8='+ optionsRadios8+'&wesalary8='+ wesalary8+
									'&charefname1='+ charefname1+'&charefaddress1='+ charefaddress1+'&charefprofession1='+  charefprofession1+		
									'&charefname2='+ charefname2+'&charefaddress2='+ charefaddress2+'&charefprofession2='+  charefprofession2+	
									'&charefname3='+ charefname3+'&charefaddress3='+ charefaddress3+'&charefprofession3='+  charefprofession3+	
									'&charefname4='+ charefname4+'&charefaddress4='+ charefaddress4+'&charefprofession4='+  charefprofession4+	
									'&charefname5='+ charefname5+'&charefaddress5='+ charefaddress5+'&charefprofession5='+  charefprofession5+	
									'&refcompletename1='+ refcompletename1+'&refpositionappliedfor1='+ refpositionappliedfor1+'&refcontactnos1='+  refcontactnos1+	
									'&refcompletename2='+ refcompletename2+'&refpositionappliedfor2='+ refpositionappliedfor2+'&refcontactnos2='+  refcontactnos2+	
									'&refcompletename3='+ refcompletename3+'&refpositionappliedfor3='+ refpositionappliedfor3+'&refcontactnos3='+  refcontactnos3+	
									'&refcompletename4='+ refcompletename4+'&refpositionappliedfor4='+ refpositionappliedfor4+'&refcontactnos4='+  refcontactnos4+	
									'&refcompletename5='+ refcompletename5+'&refpositionappliedfor5='+ refpositionappliedfor5+'&refcontactnos5='+  refcontactnos5+'&prefjobfunc2='+  prefjobfunc2+
									'&uploadedfile='+  uploadedfile+'&philhealth='+  philhealth+'&mycompanyid='+  mycompanyid+'&twitter='+  twitter+'&instagram='+  instagram;									
									
									//alert(dataString);
									
									$.ajax({
									type: "POST",
									url: "savedata.php",
									data: dataString,
									cache: false,									
												beforeSend: function(html) 
												{			   
													$("#flash").show();
													$("#flash").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Saving...Please Wait.');				
												},															
											  success: function(html)
											    {
												   $("#insert_search").show();
												   $('#insert_search').empty();
												   $("#insert_search").append(html);
												   $("#flash").hide();																		   
											   },
											  error: function(html)
											    {
												   $("#insert_search").show();
												   $('#insert_search').empty();
												   $("#insert_search").append(html);
												   $("#flash").hide();													   												   		
											   }											   
							             });
										
							}
							else
							{
								e.preventDefault();
								$('#form7').bootstrapValidator('validate');
							}
							//if(stat7=='1')
		    });	
		    
		        var url = window.location.hostname === 'localhost/hris/' ?
                '//localhost/hris/' : 'server/php/';
			    $('#fileupload').fileupload({			    	
			        url: url,
			        dataType: 'json',
			        add: function (e, data) {
			            data.context = $('<p/>').text('Uploading...Please wait.').appendTo('#uploadingfiles');
			            data.submit();
			        },
			        done: function (e, data) {
			            $.each(data.result.files, function (index, file) {
			                //$('<p/>').text(file.name).appendTo('#files');
			               data.context.text('Upload finished.');
			                $('#files').text($('#files').text() + file.name + ' - Upload finished.' + ' | ');
			                $('#uploadedfile').val($('#uploadedfile').val() + file.name + '|');
			            });
			           
			        },
			        progressall: function (e, data) {
			            var progress = parseInt(data.loaded / data.total * 100, 10);
			            $('#progress .progress-bar').css(
			                'width',
			                progress + '%'
			            );
			        }
			    }).prop('disabled', !$.support.fileInput)
			        .parent().addClass($.support.fileInput ? undefined : 'disabled');	    
        //------------------------------------------------------------  
    });
