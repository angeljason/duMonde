
    $(document).ready(function() {
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
                	//----1---
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
	                            }                                                        
                        }
                    },   
                    expectedsalary: {
                         validators: {
	                            digits: {
	                                message: 'The value can contain only digits'
	                            }                                                        
                        }
                    }, 
                    secondchoice: {
                        validators: {
                            notEmpty: {
                                message: 'Position Applied For (2nd Choice) is required'
                            }                            
                        }
                    },    
                    //----2---  
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
                    },  
                    //---3---
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
                            }                            
                        }
                    },  
                    spouseage: {
                        validators: {
                            digits: {
                                message: 'The value can contain only digits'
                            }                            
                        }
                    }, 
                    spousenoofchildren: {
                        validators: {
                            digits: {
                                message: 'The value can contain only digits'
                            }                            
                        }
                    }, 
                    spouseageofchildren: {
                        validators: {
                            digits: {
                                message: 'The value can contain only digits'
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
                            } 
                        }
                    },               
                    //---4---
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
                    //---5--
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
                    weresonforleaving1: {
                        validators: {
                            notEmpty: {
                                message: 'The reason for leaving is required'
                            }
                        }
                    },
                    //---6---- 
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
                    },                                                                                           
                	//---7--- 
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
		                 //------- 
		            }                     
                    
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
		    $('#step7nextbtn').click(function() {
		        $('#form7').bootstrapValidator('validate');
		        			var bootstrapValidator = $('#form7').data('bootstrapValidator');
							var stat7 = bootstrapValidator.isValid();
							if(stat7=='1')
							{																	
									var applicantid = $("#applicantid").val();							
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
									
									var lastname = $("#lastnamex").val();
									var firstname = $("#firstnamex").val();
									var middlename = $("#middlenamex").val();
									var nickname = $("#nicknamex").val();
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
									
									//alert("lastname");
									//alert(lastname);
									
									var twitter = $("#twitter").val();
									var instagram = $("#instagram").val();
									//alert(lastname);
									
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
									
									var schoolcollegeid1 = $("#schoolcollegeid1").val();																							
									var schoolcollege1 = $("#schoolcollege1").val();	
									var degreeobtained1 = $("#degreeobtained1").val();	
									var scholyear1 = $("#scholyear1").val();	
									var awardsreceived1 = $("#awardsreceived1").val();	
									var schoolcollegeid2 = $("#schoolcollegeid2").val();										
									var schoolcollege2 = $("#schoolcollege2").val();	
									var degreeobtained2 = $("#degreeobtained2").val();	
									var scholyear2 = $("#scholyear2").val();	
									var awardsreceived2 = $("#awardsreceived2").val();
									var schoolcollegeid3 = $("#schoolcollegeid3").val();											
									var schoolcollege3 = $("#schoolcollege3").val();	
									var degreeobtained3 = $("#degreeobtained3").val();	
									var scholyear3 = $("#scholyear3").val();	
									var awardsreceived3 = $("#awardsreceived3").val();	
									var schoolcollegeid4 = $("#schoolcollegeid4").val();									
									var schoolcollege4 = $("#schoolcollege4").val();	
									var degreeobtained4 = $("#degreeobtained4").val();	
									var scholyear4 = $("#scholyear4").val();	
									var awardsreceived4 = $("#awardsreceived4").val();	
									var schoolcollegeid5 = $("#schoolcollegeid5").val();										
									var schoolcollege5 = $("#schoolcollege5").val();	
									var degreeobtained5 = $("#degreeobtained5").val();	
									var scholyear5 = $("#scholyear5").val();	
									var awardsreceived5 = $("#awardsreceived5").val();		
									
									/*'&schoolcollege1='+ schoolcollege1+'&degreeobtained1='+ degreeobtained1+'&scholyear1='+ scholyear1+'&awardsreceived1='+ awardsreceived1+
									'&schoolcollege2='+ schoolcollege2+'&degreeobtained2='+ degreeobtained2+'&scholyear2='+ scholyear2+'&awardsreceived2='+ awardsreceived2+
									'&schoolcollege3='+ schoolcollege3+'&degreeobtained3='+ degreeobtained3+'&scholyear3='+ scholyear3+'&awardsreceived3='+ awardsreceived3+
									'&schoolcollege4='+ schoolcollege4+'&degreeobtained4='+ degreeobtained4+'&scholyear4='+ scholyear4+'&awardsreceived4='+ awardsreceived4+
									'&schoolcollege5='+ schoolcollege5+'&degreeobtained5='+ degreeobtained5+'&scholyear5='+ scholyear5+'&awardsreceived5='+ awardsreceived5+*/								
									
									var govexamid1 = $("#govexamid1").val();											
									var governmentexamtaken1 = $("#governmentexamtaken1").val();	
									var governmentexamtakenrating1 = $("#governmentexamtakenrating1").val();	
									var governmentexamtakendatetaken1 = $("#governmentexamtakendatetaken1").val();	
									var governmentexamtakenrank1 = $("#governmentexamtakenrank1").val();	
									var govexamid2 = $("#govexamid2").val();									
									var governmentexamtaken2 = $("#governmentexamtaken2").val();	
									var governmentexamtakenrating2 = $("#governmentexamtakenrating2").val();	
									var governmentexamtakendatetaken2 = $("#governmentexamtakendatetaken2").val();	
									var governmentexamtakenrank2 = $("#governmentexamtakenrank2").val();	
									var govexamid3 = $("#govexamid3").val();									
									var governmentexamtaken3 = $("#governmentexamtaken3").val();	
									var governmentexamtakenrating3 = $("#governmentexamtakenrating3").val();	
									var governmentexamtakendatetaken3 = $("#governmentexamtakendatetaken3").val();	
									var governmentexamtakenrank3 = $("#governmentexamtakenrank3").val();
									var govexamid4 = $("#govexamid4").val();										
									var governmentexamtaken4 = $("#governmentexamtaken4").val();	
									var governmentexamtakenrating4 = $("#governmentexamtakenrating4").val();	
									var governmentexamtakendatetaken4 = $("#governmentexamtakendatetaken4").val();	
									var governmentexamtakenrank4 = $("#governmentexamtakenrank4").val();	
									var govexamid5 = $("#govexamid5").val();								
									var governmentexamtaken5 = $("#governmentexamtaken5").val();	
									var governmentexamtakenrating5 = $("#governmentexamtakenrating5").val();	
									var governmentexamtakendatetaken5 = $("#governmentexamtakendatetaken5").val();	
									var governmentexamtakenrank5 = $("#governmentexamtakenrank5").val();
									
									/*'&governmentexamtaken1='+ governmentexamtaken1+'&governmentexamtakenrating1='+ governmentexamtakenrating1+'&governmentexamtakendatetaken1='+ governmentexamtakendatetaken1+'&governmentexamtakenrank1='+ governmentexamtakenrank1+
								    '&governmentexamtaken2='+ governmentexamtaken2+'&governmentexamtakenrating2='+ governmentexamtakenrating2+'&governmentexamtakendatetaken2='+ governmentexamtakendatetaken2+'&governmentexamtakenrank2='+ governmentexamtakenrank2+
								    '&governmentexamtaken3='+ governmentexamtaken3+'&governmentexamtakenrating3='+ governmentexamtakenrating3+'&governmentexamtakendatetaken3='+ governmentexamtakendatetaken3+'&governmentexamtakenrank3='+ governmentexamtakenrank3+
								    '&governmentexamtaken4='+ governmentexamtaken4+'&governmentexamtakenrating4='+ governmentexamtakenrating4+'&governmentexamtakendatetaken4='+ governmentexamtakendatetaken4+'&governmentexamtakenrank4='+ governmentexamtakenrank4+
								    '&governmentexamtaken5='+ governmentexamtaken5+'&governmentexamtakenrating5='+ governmentexamtakenrating5+'&governmentexamtakendatetaken5='+ governmentexamtakendatetaken5+'&governmentexamtakenrank5='+ governmentexamtakenrank5+*/
									
									var certid1 = $("#certid1").val();										
									var certification1 = $("#certification1").val();	
									var certificationrating1 = $("#certificationrating1").val();	
									var certificationdatetaken1 = $("#certificationdatetaken1").val();	
									var certificationrank1 = $("#certificationrank1").val();	
									var certid2 = $("#certid2").val();										
									var certification2 = $("#certification2").val();	
									var certificationrating2 = $("#certificationrating2").val();	
									var certificationdatetaken2 = $("#certificationdatetaken2").val();	
									var certificationrank2 = $("#certificationrank2").val();	
									var certid3 = $("#certid3").val();										
									var certification3 = $("#certification3").val();	
									var certificationrating3 = $("#certificationrating3").val();	
									var certificationdatetaken3 = $("#certificationdatetaken3").val();	
									var certificationrank3 = $("#certificationrank3").val();
									var certid4 = $("#certid4").val();											
									var certification4 = $("#certification4").val();	
									var certificationrating4 = $("#certificationrating4").val();	
									var certificationdatetaken4 = $("#certificationdatetaken4").val();	
									var certificationrank4 = $("#certificationrank4").val();	
									
									/*'&certification1='+ certification1+'&certificationrating1='+ certificationrating1+'&certificationdatetaken1='+ certificationdatetaken1+'&certificationrank1='+ certificationrank1+
									'&certification2='+ certification2+'&certificationrating2='+ certificationrating2+'&certificationdatetaken2='+ certificationdatetaken2+'&certificationrank2='+ certificationrank2+
									'&certification3='+ certification3+'&certificationrating3='+ certificationrating3+'&certificationdatetaken3='+ certificationdatetaken3+'&certificationrank3='+ certificationrank3+
									'&certification4='+ certification4+'&certificationrating4='+ certificationrating4+'&certificationdatetaken4='+ certificationdatetaken4+'&certificationrank4='+ certificationrank4+*/
									
									var weid1 = $("#weid1").val();	
									var wecompany1 = $("#wecompany1").val();										
									var weposition1 = $("#weposition1").val();	
									var wefrom1 = $("#wefrom1").val();	
									var weto1 = $("#weto1").val();	
									var weresonforleaving1 = $("#weresonforleaving1").val();
									var wesalary1 = $("#wesalary1").val();	
																		
									var weid2 = $("#weid2").val();										
									var wecompany2 = $("#wecompany2").val();										
									var weposition2 = $("#weposition2").val();	
									var wefrom2 = $("#wefrom2").val();	
									var weto2 = $("#weto2").val();	
									var weresonforleaving2 = $("#weresonforleaving2").val();
									var wesalary2 = $("#wesalary2").val();	
									
									var weid3 = $("#weid3").val();										
									var wecompany3 = $("#wecompany3").val();										
									var weposition3 = $("#weposition3").val();	
									var wefrom3 = $("#wefrom3").val();	
									var weto3 = $("#weto3").val();	
									var weresonforleaving3 = $("#weresonforleaving3").val();
									var wesalary3 = $("#wesalary3").val();	
																		
									var weid4 = $("#weid4").val();										
									var wecompany4 = $("#wecompany4").val();										
									var weposition4 = $("#weposition4").val();	
									var wefrom4 = $("#wefrom4").val();	
									var weto4 = $("#weto4").val();	
									var weresonforleaving4 = $("#weresonforleaving4").val();
									var wesalary4 = $("#wesalary4").val();	
									
									var weid5 = $("#weid5").val();										
									var wecompany5 = $("#wecompany5").val();										
									var weposition5 = $("#weposition5").val();	
									var wefrom5 = $("#wefrom5").val();	
									//alert(wefrom5);
									var weto5 = $("#weto5").val();	
									//alert(weto5);
									var weresonforleaving5 = $("#weresonforleaving5").val();	
									var wesalary5 = $("#wesalary5").val();	
									
									var weid6 = $("#weid6").val();									
									var wecompany6 = $("#wecompany6").val();										
									var weposition6 = $("#weposition6").val();	
									var wefrom6 = $("#wefrom6").val();	
									var weto6 = $("#weto6").val();	
									var weresonforleaving6 = $("#weresonforleaving6").val();
									var wesalary6 = $("#wesalary6").val();	
									
									var weid7 = $("#weid7").val();										
									var wecompany7 = $("#wecompany7").val();										
									var weposition7 = $("#weposition7").val();	
									var wefrom7 = $("#wefrom7").val();	
									var weto7 = $("#weto7").val();	
									var weresonforleaving7 = $("#weresonforleaving7").val();
									var wesalary7 = $("#wesalary7").val();	
									
									var weid8 = $("#weid8").val();										
									var wecompany8 = $("#wecompany8").val();										
									var weposition8 = $("#weposition8").val();	
									var wefrom8 = $("#wefrom8").val();	
									var weto8 = $("#weto8").val();	
									var weresonforleaving8 = $("#weresonforleaving8").val();
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
									
									var charefid1 = $("#charefid1").val();			
									var charefname1 = $("#charefname1").val();
									var charefaddress1 = $("#charefaddress1").val();
									var charefprofession1 = $("#charefprofession1").val();	
									var charefid2 = $("#charefid2").val();									
									var charefname2 = $("#charefname2").val();
									var charefaddress2 = $("#charefaddress2").val();
									var charefprofession2 = $("#charefprofession2").val();	
									var charefid3 = $("#charefid3").val();										
									var charefname3 = $("#charefname3").val();
									var charefaddress3 = $("#charefaddress3").val();
									var charefprofession3 = $("#charefprofession3").val();		
									var charefid4 = $("#charefid4").val();										
									var charefname4 = $("#charefname4").val();
									var charefaddress4 = $("#charefaddress4").val();
									var charefprofession4 = $("#charefprofession4").val();	
									var charefid5 = $("#charefid5").val();									
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
									
									var refid1 = $("#refid1").val();	
									var refcompletename1 = $("#refcompletename1").val();
									var refpositionappliedfor1 = $("#refpositionappliedfor1").val();
									var refcontactnos1 = $("#refcontactnos1").val();
									var refid2 = $("#refid2").val();										
									var refcompletename2 = $("#refcompletename2").val();
									var refpositionappliedfor2 = $("#refpositionappliedfor2").val();
									var refcontactnos2 = $("#refcontactnos2").val();
									var refid3 = $("#refid3").val();									
									var refcompletename3 = $("#refcompletename3").val();
									var refpositionappliedfor3 = $("#refpositionappliedfor3").val();
									var refcontactnos3 = $("#refcontactnos3").val();	
									var refid4 = $("#refid4").val();								
									var refcompletename4 = $("#refcompletename4").val();
									var refpositionappliedfor4 = $("#refpositionappliedfor4").val();
									var refcontactnos4 = $("#refcontactnos4").val();	
									var refid5 = $("#refid5").val();								
									var refcompletename5 = $("#refcompletename5").val();
									var refpositionappliedfor5 = $("#refpositionappliedfor5").val();
									var refcontactnos5 = $("#refcontactnos5").val();	
									
									var uploadedfile = $("#uploadedfile").val();
									var blacklisted = $("#blacklisted").val();
									
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
																																			
									var dataString = 'applicantid='+ applicantid+'&tempempno='+ tempempno+'&sourcethru='+ sourcethru+'&firstchoice='+ firstchoice+'&prefjobfunc='+ prefjobfunc+
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
									'&schoolcollegeid1='+ schoolcollegeid1+'&schoolcollege1='+ schoolcollege1+'&degreeobtained1='+ degreeobtained1+'&scholyear1='+ scholyear1+'&awardsreceived1='+ awardsreceived1+
									'&schoolcollegeid2='+ schoolcollegeid2+'&schoolcollege2='+ schoolcollege2+'&degreeobtained2='+ degreeobtained2+'&scholyear2='+ scholyear2+'&awardsreceived2='+ awardsreceived2+
									'&schoolcollegeid3='+ schoolcollegeid3+'&schoolcollege3='+ schoolcollege3+'&degreeobtained3='+ degreeobtained3+'&scholyear3='+ scholyear3+'&awardsreceived3='+ awardsreceived3+
									'&schoolcollegeid4='+ schoolcollegeid4+'&schoolcollege4='+ schoolcollege4+'&degreeobtained4='+ degreeobtained4+'&scholyear4='+ scholyear4+'&awardsreceived4='+ awardsreceived4+
									'&schoolcollegeid5='+ schoolcollegeid5+'&schoolcollege5='+ schoolcollege5+'&degreeobtained5='+ degreeobtained5+'&scholyear5='+ scholyear5+'&awardsreceived5='+ awardsreceived5+									
									'&govexamid1='+ govexamid1+'&governmentexamtaken1='+ governmentexamtaken1+'&governmentexamtakenrating1='+ governmentexamtakenrating1+'&governmentexamtakendatetaken1='+ governmentexamtakendatetaken1+'&governmentexamtakenrank1='+ governmentexamtakenrank1+
								    '&govexamid2='+ govexamid2+'&governmentexamtaken2='+ governmentexamtaken2+'&governmentexamtakenrating2='+ governmentexamtakenrating2+'&governmentexamtakendatetaken2='+ governmentexamtakendatetaken2+'&governmentexamtakenrank2='+ governmentexamtakenrank2+
								    '&govexamid3='+ govexamid3+'&governmentexamtaken3='+ governmentexamtaken3+'&governmentexamtakenrating3='+ governmentexamtakenrating3+'&governmentexamtakendatetaken3='+ governmentexamtakendatetaken3+'&governmentexamtakenrank3='+ governmentexamtakenrank3+
								    '&govexamid4='+ govexamid4+'&governmentexamtaken4='+ governmentexamtaken4+'&governmentexamtakenrating4='+ governmentexamtakenrating4+'&governmentexamtakendatetaken4='+ governmentexamtakendatetaken4+'&governmentexamtakenrank4='+ governmentexamtakenrank4+
								    '&govexamid5='+ govexamid5+'&governmentexamtaken5='+ governmentexamtaken5+'&governmentexamtakenrating5='+ governmentexamtakenrating5+'&governmentexamtakendatetaken5='+ governmentexamtakendatetaken5+'&governmentexamtakenrank5='+ governmentexamtakenrank5+
									'&certid1='+ certid1+'&certification1='+ certification1+'&certificationrating1='+ certificationrating1+'&certificationdatetaken1='+ certificationdatetaken1+'&certificationrank1='+ certificationrank1+
									'&certid2='+ certid2+'&certification2='+ certification2+'&certificationrating2='+ certificationrating2+'&certificationdatetaken2='+ certificationdatetaken2+'&certificationrank2='+ certificationrank2+
									'&certid3='+ certid3+'&certification3='+ certification3+'&certificationrating3='+ certificationrating3+'&certificationdatetaken3='+ certificationdatetaken3+'&certificationrank3='+ certificationrank3+
									'&certid4='+ certid4+'&certification4='+ certification4+'&certificationrating4='+ certificationrating4+'&certificationdatetaken4='+ certificationdatetaken4+'&certificationrank4='+ certificationrank4+
									'&weid1='+ weid1+'&wecompany1='+ wecompany1+'&weposition1='+ weposition1+'&wefrom1='+ wefrom1+'&weto1='+ weto1+'&weresonforleaving1='+ weresonforleaving1+'&wesalary1='+ wesalary1+
									'&weid2='+ weid2+'&wecompany2='+ wecompany2+'&weposition2='+ weposition2+'&wefrom2='+ wefrom2+'&weto2='+ weto2+'&weresonforleaving2='+ weresonforleaving2+'&wesalary2='+ wesalary2+
								    '&weid3='+ weid3+'&wecompany3='+ wecompany3+'&weposition3='+ weposition3+'&wefrom3='+ wefrom3+'&weto3='+ weto3+'&weresonforleaving3='+ weresonforleaving3+'&wesalary3='+ wesalary3+
								    '&weid4='+ weid4+'&wecompany4='+ wecompany4+'&weposition4='+ weposition4+'&wefrom4='+ wefrom4+'&weto4='+ weto4+'&weresonforleaving4='+ weresonforleaving4+'&wesalary4='+ wesalary4+
								    '&weid5='+ weid5+'&wecompany5='+ wecompany5+'&weposition5='+ weposition5+'&wefrom5='+ wefrom5+'&weto5='+ weto5+'&weresonforleaving5='+ weresonforleaving5+'&wesalary5='+ wesalary5+
								    '&weid6='+ weid6+'&wecompany6='+ wecompany6+'&weposition6='+ weposition6+'&wefrom6='+ wefrom6+'&weto6='+ weto6+'&weresonforleaving6='+ weresonforleaving6+'&wesalary6='+ wesalary6+
								    '&weid7='+ weid7+'&wecompany7='+ wecompany7+'&weposition7='+ weposition7+'&wefrom7='+ wefrom7+'&weto7='+ weto7+'&weresonforleaving7='+ weresonforleaving7+'&wesalary7='+ wesalary7+
								    '&weid8='+ weid8+'&wecompany8='+ wecompany8+'&weposition8='+ weposition8+'&wefrom8='+ wefrom8+'&weto8='+ weto8+'&weresonforleaving8='+ weresonforleaving8+'&wesalary8='+ wesalary8+
									'&charefid1='+ charefid1+'&charefname1='+ charefname1+'&charefaddress1='+ charefaddress1+'&charefprofession1='+  charefprofession1+		
									'&charefid2='+ charefid2+'&charefname2='+ charefname2+'&charefaddress2='+ charefaddress2+'&charefprofession2='+  charefprofession2+	
									'&charefid3='+ charefid3+'&charefname3='+ charefname3+'&charefaddress3='+ charefaddress3+'&charefprofession3='+  charefprofession3+	
									'&charefid4='+ charefid4+'&charefname4='+ charefname4+'&charefaddress4='+ charefaddress4+'&charefprofession4='+  charefprofession4+	
									'&charefid5='+ charefid5+'&charefname5='+ charefname5+'&charefaddress5='+ charefaddress5+'&charefprofession5='+  charefprofession5+	
									'&refid1='+ refid1+'&refcompletename1='+ refcompletename1+'&refpositionappliedfor1='+ refpositionappliedfor1+'&refcontactnos1='+  refcontactnos1+	
									'&refid2='+ refid2+'&refcompletename2='+ refcompletename2+'&refpositionappliedfor2='+ refpositionappliedfor2+'&refcontactnos2='+  refcontactnos2+	
									'&refid3='+ refid3+'&refcompletename3='+ refcompletename3+'&refpositionappliedfor3='+ refpositionappliedfor3+'&refcontactnos3='+  refcontactnos3+	
									'&refid4='+ refid4+'&refcompletename4='+ refcompletename4+'&refpositionappliedfor4='+ refpositionappliedfor4+'&refcontactnos4='+  refcontactnos4+	
									'&refid5='+ refid5+'&refcompletename5='+ refcompletename5+'&refpositionappliedfor5='+ refpositionappliedfor5+'&refcontactnos5='+  refcontactnos5+'&prefjobfunc2='+  prefjobfunc2+
									'&philhealth='+  philhealth+'&uploadedfile='+  uploadedfile+'&twitter='+  twitter+'&instagram='+  instagram+'&blacklisted='+  blacklisted;									
									
									//alert(dataString);
									
									$.ajax({
									type: "GET",
									url: "savedata2.php",
									data: dataString,
									cache: false,									
												beforeSend: function(html) 
												{			   
													$("#flash2zyt").show();
													$("#flash2zyt").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Saving...Please Wait.');				
												},															
											  success: function(html)
											    {
												   $("#insert_search2zyt").show();
												   $('#insert_search2zyt').empty();
												   $("#insert_search2zyt").append(html);
												   $("#flash2zyt").hide();																		   
											   },
											  error: function(html)
											    {
												   $("#insert_search2zyt").show();
												   $('#insert_search2zyt').empty();
												   $("#insert_search2zyt").append(html);
												   $("#flash2zyt").hide();													   												   		
											   }											   
							             });
										
							}
							//if(stat7=='1')
		    });		    
        //--------------------------file upload----------------------------------  
        var url = window.location.hostname === 'localhost/hris/' ?
                '//localhost/hris' : '../registration/server/php/';
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
    });
