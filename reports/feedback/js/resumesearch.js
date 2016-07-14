function getexporttoxls() { 
	$("#insert_search2").btechco_excelexport({
                containerid: "insert_search2", datatype: $datatype.Table
            });
	} 

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
                    //----2---  
                    lastname: {
                        validators: {
                               regexp: {
			                        regexp: /^[a-zA-Z0-9_\.]+$/,
			                        message: 'The field can only consist of alphabetical, number, dot and underscore'
			                    }                             
                        }
                    },
                    firstname: {
                        validators: {
                               regexp: {
			                        regexp: /^[a-zA-Z0-9_\.]+$/,
			                        message: 'The field can only consist of alphabetical, number, dot and underscore'
			                    }                            
                        }
                    }, 
                    middlename: {
                        validators: {
                               regexp: {
			                        regexp: /^[a-zA-Z0-9_\.]+$/,
			                        message: 'The field can only consist of alphabetical, number, dot and underscore'
			                    }                            
                        }
                    },
                    nickname: {
                        validators: {
                               regexp: {
			                        regexp: /^[a-zA-Z0-9_\.]+$/,
			                        message: 'The field can only consist of alphabetical, number, dot and underscore'
			                    }                           
                        }
                    },  
                    pre_houselot: {
                        validators: {
                               regexp: {
			                        regexp: /^[a-zA-Z0-9_\.]+$/,
			                        message: 'The field can only consist of alphabetical, number, dot and underscore'
			                    }                            
                        }
                    }, 
                    pre_bgy: {
                        validators: {
                               regexp: {
			                        regexp: /^[a-zA-Z0-9_\.]+$/,
			                        message: 'The field can only consist of alphabetical, number, dot and underscore'
			                    }                            
                        }
                    },   
                    per_houselot: {
                        validators: {
                               regexp: {
			                        regexp: /^[a-zA-Z0-9_\.]+$/,
			                        message: 'The field can only consist of alphabetical, number, dot and underscore'
			                    }                           
                        }
                    }, 
                    per_bgy: {
                        validators: {
                               regexp: {
			                        regexp: /^[a-zA-Z0-9_\.]+$/,
			                        message: 'The field can only consist of alphabetical, number, dot and underscore'
			                    }                            
                        }
                    },     
                    mobileno: {
                        validators: {
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
                            emailAddress: {
		                        message: 'The input is not a valid email address'
		                    }
                        }
                    },  
                    social: {
                        validators: {
                               regexp: {
			                        regexp: /^[a-zA-Z0-9_\.]+$/,
			                        message: 'The field can only consist of alphabetical, number, dot and underscore'
			                    }                          
                        }
                    },  
                    //---3---
                   dateofbirth: {
                        validators: {
                            date: {
		                        format: 'MM/DD/YYYY',
		                        message: 'The date of birth is not valid. Should be in mm/dd/yyyy'
		                    }
                        }
                    },
                    age: {
                        validators: {
                            lessThan: {
		                        value: 100,
		                        inclusive: true,
		                        message: 'The ages has to be less than 100'
		                    },
		                    greaterThan: {
		                        value: 10,
		                        inclusive: false,
		                        message: 'The ages has to be greater than or equals to 10'
		                    }                           
                        }
                    },  
                    age2: {
                        validators: {
                            lessThan: {
		                        value: 100,
		                        inclusive: true,
		                        message: 'The ages has to be less than 100'
		                    },
		                    greaterThan: {
		                        value: 10,
		                        inclusive: false,
		                        message: 'The ages has to be greater than or equals to 10'
		                    }                           
                        }
                    },                      
                    spouseage: {
                        validators: {
			                    lessThan: {
			                        value: 100,
			                        inclusive: true,
			                        message: 'The ages has to be less than 100'
			                    },
			                    greaterThan: {
			                        value: 10,
			                        inclusive: false,
			                        message: 'The ages has to be greater than or equals to 10'
			                    }                           
                        }
                    }, 
                    spouseage2: {
                        validators: {
			                    lessThan: {
			                        value: 100,
			                        inclusive: true,
			                        message: 'The ages has to be less than 100'
			                    },
			                    greaterThan: {
			                        value: 10,
			                        inclusive: false,
			                        message: 'The ages has to be greater than or equals to 10'
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
                    fathersname: {
                        validators: {
                                regexp: {
			                        regexp: /^[a-zA-Z0-9_\.]+$/,
			                        message: 'The field can only consist of alphabetical, number, dot and underscore'
			                    }                            
                        }
                    }, 
                    fathersage: {
                        validators: {
                                 lessThan: {
			                        value: 100,
			                        inclusive: true,
			                        message: 'The ages has to be less than 100'
			                    },
			                    greaterThan: {
			                        value: 10,
			                        inclusive: false,
			                        message: 'The ages has to be greater than or equals to 10'
			                    }                                                       
                        }
                    },  
                    fathersage2: {
                        validators: {
                                 lessThan: {
			                        value: 100,
			                        inclusive: true,
			                        message: 'The ages has to be less than 100'
			                    },
			                    greaterThan: {
			                        value: 10,
			                        inclusive: false,
			                        message: 'The ages has to be greater than or equals to 10'
			                    }                                                       
                        }
                    },                      
                    mothersname: {
                        validators: {
                                regexp: {
			                        regexp: /^[a-zA-Z0-9_\.]+$/,
			                        message: 'The field can only consist of alphabetical, number, dot and underscore'
			                    }                            
                        }
                    }, 
                    mothersage: {
                        validators: {
                                 lessThan: {
			                        value: 100,
			                        inclusive: true,
			                        message: 'The ages has to be less than 100'
			                    },
			                    greaterThan: {
			                        value: 10,
			                        inclusive: false,
			                        message: 'The ages has to be greater than or equals to 10'
			                    } 
                        }
                    },  
                   mothersage2: {
                        validators: {
                                 lessThan: {
			                        value: 100,
			                        inclusive: true,
			                        message: 'The ages has to be less than 100'
			                    },
			                    greaterThan: {
			                        value: 10,
			                        inclusive: false,
			                        message: 'The ages has to be greater than or equals to 10'
			                    } 
                        }
                    }, 
                    addressofparentbgy: {
                        validators: {
                                regexp: {
			                        regexp: /^[a-zA-Z0-9_\.]+$/,
			                        message: 'The field can only consist of alphabetical, number, dot and underscore'
			                    }                            
                        }
                    },                         
                    addressofparentpostalcode: {
                        validators: {
                                regexp: {
			                        regexp: /^[a-zA-Z0-9_\.]+$/,
			                        message: 'The field can only consist of alphabetical, number, dot and underscore'
			                    }                             
                        }
                    }
		             //------- 
		            }                     
                    
                
            })
            .on('error.field.bv', function(e, data) {
                console.log(data.field, data.element, '-->error');
            })
            .on('success.field.bv', function(e, data) {
                console.log(data.field, data.element, '-->success');
            });
            // Validate the form manually
		    $("#searchbtnx").click(function(e) {	
		    e.preventDefault();
		        $('#form7').bootstrapValidator('validate');
		        			var bootstrapValidator = $('#form7').data('bootstrapValidator');
							var stat7 = bootstrapValidator.isValid();
							if(stat7=='1')
							{		
									var dateavailability2 = $("#dateavailability2").val();	
									var currentsalary2 = $("#currentsalary2").val();	
									var expectedsalary2 = $("#expectedsalary2").val();	
									var dateofbirth2 = $("#dateofbirth2").val();	
									var age2 = $("#age2").val();	
									var spouseage2 = $("#spouseage2").val();	
									var spousenoofchildren2 = $("#spousenoofchildren2").val();	
									var fathersage2 = $("#fathersage2").val();	
									var mothersage2 = $("#mothersage2").val();	
									var governmentexamtakendatetaken2 = $("#governmentexamtakendatetaken2").val();
									var certificationdatetaken2 = $("#certificationdatetaken2").val();		
																																					
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
									
									var dateofbirth = $("#dateofbirth").val();
									var placeofbirth = $("#placeofbirth").val();
									var age = $("#age").val();
									var sex = $("#sex").val();
									var citizenship = $("#citizenship").val();
									var civilstatus = $("#civilstatus").val();																		
									var religion = $("#religion").val();
									var sssno = $("#sssno").val();
									var hdmfno = $("#hdmfno").val();
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
																																																
									var specialskills = $("#specialskills").val();
									var languages = $("#languages").val();																				
																											
									var chareftelno = $("#chareftelno").val();		
									var charefnotifiedincaseofermergency = $("#charefnotifiedincaseofermergency").val();	
									var chareffriendsrelatives = $("#chareffriendsrelatives").val();	
									var charefwhoreferred = $("#charefwhoreferred").val();	
									
									var applicantstatusid = $("#applicantstatusid").val();
									
									var companyqx = $("#companyqx").val();
									var positionqx = $("#positionqx").val();
									var reasonforleavingqx = $("#reasonforleavingqx").val();
									var schoolcollegeqx = $("#schoolcollegeqx").val();
									var degreeobtainedqx = $("#degreeobtainedqx").val();
									
									var o =$("#o").val();
									var t =$("#t").val();
									
									var dataString=null;						
																																												
									dataString = 'tempempno='+ tempempno+'&sourcethru='+ sourcethru+'&firstchoice='+ firstchoice+'&prefjobfunc='+ prefjobfunc+
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
									'&dateavailability2='+ dateavailability2+'&currentsalary2='+ currentsalary2+'&expectedsalary2='+ expectedsalary2+'&dateofbirth2='+ dateofbirth2+
									'&age2='+ age2+'&spouseage2='+ spouseage2+'&spousenoofchildren2='+ spousenoofchildren2+'&fathersage2='+ fathersage2+
									'&mothersage2='+ mothersage2+'&governmentexamtakendatetaken2='+ governmentexamtakendatetaken2+'&certificationdatetaken2='+ certificationdatetaken2+										
									'&prefjobfunc2='+  prefjobfunc2+'&o='+ o+'&t='+ t+'&applicantstatusid='+ applicantstatusid+
									'&companyqx='+  companyqx+'&positionqx='+ positionqx+'&reasonforleavingqx='+ reasonforleavingqx+
									'&schoolcollegeqx='+ schoolcollegeqx+'&degreeobtainedqx='+ degreeobtainedqx+
									'&twitter='+ twitter+'&instagram='+ instagram;									
									
									//alert(dataString);
									
									$.ajax({
									type: "POST",
									url: "searchdata.php",
									data: dataString,
									cache: false,									
												beforeSend: function(html) 
												{			   
													$("#flash2").show();
													$("#flash2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching Database...Please Wait.');	
													$('#insert_search2').empty();	
												},															
											  success: function(html)
											    {											    												       	
												   $("#insert_search2").show();
												   $('#insert_search2').empty();
												   $("#insert_search2").append(html);
												   $("#flash2").hide();		
												   																   
											   },
											  error: function(html)
											    {
											       console.log('error');
												   $("#insert_search2").show();
												   $('#insert_search2').empty();
												   $("#insert_search2").append(html);
												   $("#flash2").hide();		
												   
												   alert('err');	
									   												   		
											   }	
											   										   
							             });
										
							}
							//if(stat7=='1')
		    });		    
        //------------------------------------------------------------  
    //search action slip
     $('#searchbtn').click(function() {
				//var id = $("#id").val();
				var searchfield = $("#searchfield").val();
				var filter = document.URL.substr(document.URL.indexOf('#')+1)
				//alert(filter);	
												
				/*var searchstring =  '';																
				if(id ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+id;}
				*/																																	
				var dataString = 'searchfield='+ searchfield+'&filter='+ filter;									
				
				//alert(dataString);
				
								$.ajax({
								type: "GET",
								url: "searchdata2.php",
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
											   // $("#searchbtn").prop('disabled', true);	
				   
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
     	});        
        
    });
