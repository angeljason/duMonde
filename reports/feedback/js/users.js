function getexporttoxls23() { 

           $('#example').tableExport({type:'excel',escape:'false'});
	} 
function showsaveuser(id2) {
										
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
							url: "addusermodal.php",
							data: dataString,
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modal").show();
										   $('#insert_modal').empty();
										   $("#insert_modal").append(html);
																	   
									   },
									  error: function(html)
									    {
										   $("#insert_modal").show();
										   $('#insert_modal').empty();
										   $("#insert_modal").append(html);	
										   $("#insert_modal").hide();											   												   		
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
				$('#insert_modal').modal("hide");
				location.reload();
						    
	    }, 5000);
		
	}  

$(document).ready(function() {	
	
		// Generate a simple captcha
	    function randomNumber(min, max) {
	        return Math.floor(Math.random() * (max - min + 1) + min);
	    };
	    $('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));	
	// navigation click actions	
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});

	//-----------------------------------------------------------
						    $('#defaultForm2')
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
						            username: {
							                validators: {
						                            notEmpty: {
						                                message: 'Username is required'
						                            }
							                }
						            },
						            firstname: {
							                validators: {
						                            notEmpty: {
						                                message: 'Firstname is required'
						                            }
							                }
						            },
						            lastname: {
							                validators: {
						                            notEmpty: {
						                                message: 'Lastname is required'
						                            }
							                }
						            },
						            email: {
							                validators: {
						                            notEmpty: {
						                                message: 'Email is required'
						                            },
													emailAddress: {
								                        message: 'The input is not a valid email address'
								                    }						                            
							                }
						            },
						            companyid: {
							                validators: {
						                            notEmpty: {
						                                message: 'Company is required'
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
						            usergroupmasterid: {
							                validators: {
						                            notEmpty: {
						                                message: 'User Group Master is required'
						                            }
							                }
						            },
						            usergroupid: {
							                validators: {
						                            notEmpty: {
						                                message: 'User Group is required'
						                            }
							                }
						            },
						            userlevelid: {
							                validators: {
						                            notEmpty: {
						                                message: 'User Level is required'
						                            }
							                }
						            },
						           parentuserid: {
							                validators: {
						                            notEmpty: {
						                                message: 'Parent User is required'
						                            }
							                }
						            },
						            userstatid: {
							                validators: {
						                            notEmpty: {
						                                message: 'User Status is required'
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
						            },
						            position: {
							                validators: {
						                            notEmpty: {
						                                message: 'Position is required'
						                            }
							                }
						            }
						        }
						    });
				            // Validate the form manually
						    $('#addbtn').click(function() {
						    	//alert("add btn clicked");
						        $('#defaultForm2').bootstrapValidator('validate');
						        			var bootstrapValidator = $('#defaultForm2').data('bootstrapValidator');
											var stat2 = bootstrapValidator.isValid();
											if(stat2=='1')
											{
												//alert("sample");
																var myuserid = $("#myuserid").val();
																var username = $("#username").val();
																var firstname = $("#firstname").val();
																var lastname = $("#lastname").val();
																var email = $("#email").val();												
																var companyid = $("#companyid").val();
																var position = $("#position").val();
																
																var password = $("#password").val();																
																var usergroupmasterid = $("#usergroupmasterid").val();
																var usergroupid = $("#usergroupid").val();												
																var userlevelid = $("#userlevelid").val();
																								
																var parentuseridx = $("#parentuseridx").val();
																var userstatid = $("#userstatid").val();																																
																																																			
																var dataString = 'myuserid='+ myuserid+'&username='+ username+'&firstname='+ firstname+'&lastname='+ lastname+'&email='+ email
																+'&companyid='+ companyid+'&position='+ position+'&password='+ password+'&usergroupmasterid='+ usergroupmasterid+'&usergroupid='+ usergroupid
																+'&userlevelid='+ userlevelid+'&parentuseridx='+ parentuseridx+'&userstatid='+ userstatid;								
																
																//alert(dataString);
												
																			$.ajax({
																			type: "POST",
																			url: "saveuser.php",
																			data: dataString,
																			cache: false,									
																						beforeSend: function(html) 
																						{			   
																							$("#flash2").show();
																							$("#flash2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Saving User Account...Please Wait.');		
																						},															
																					  success: function(html)
																					    {
																						   $('#insert_search2x').empty();
																						   $("#insert_search2x").show();
																						   $("#insert_search2x").append(html);
																						   $("#flash2").hide();	
				
																						    $('#defaultForm2')[0].reset(); 																	   
																					   },
																					  error: function(html)
																					    {
																						   $("#insert_search2x").show();
																						   $('#insert_search2x').empty();
																						   $("#insert_search2x").append(html);
																						   $("#flash2").hide();	
																						   
																						   //alert('err');												   												   		
																					   }											   
																	             });
				
											}
						    });		        
		
	
	
    //-------------------popover----------------------------------
$('.popoversaveuser').popover({
                trigger: "hover",
                placement: "LEFT",
                content: "Add New User Account",	
                 });

});
