function showkillswitch() {
										
						$.ajax({
							type: "GET",
							url: "addkillswitch.php",
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

function showkillswitchlogs(id2) {
	
	var id2 = id2;
	var dataString = 'id2='+ id2;
										
						$.ajax({
							type: "GET",
							url: "viewkillswitchlogs.php",
							data: dataString,
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modal55").show();
										   $('#insert_modal55').empty();
										   $("#insert_modal55").append(html);
																	   
									   },
									  error: function(html)
									    {
										   $("#insert_modal55").show();
										   $('#insert_modal55').empty();
										   $("#insert_modal55").append(html);	
										   $("#insert_modal55").hide();											   												   		
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
	
	   $("#killbtnx").popConfirm({
	   	title: "Are you sure you want to deactivate the selected users?", // The title of the confirm
        content: "User Accounts will be deactivated. Do you want to continue?", // The message of the confirm
        placement: "right", // The placement of the confirm (Top, Right, Bottom, Left)
        container: "body", // The html container
        yesBtn: "Yes",
        noBtn: "No"
	   });	
	
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
						    $('#defaultForm77x')
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
						                whattokillx: {
						                validators: {
						                    notEmpty: {
						                        message: 'What to Kill dropdown is required and can\'t be empty'
						                    }
						                }
						            },
						            victimx: {
						                validators: {
						                    notEmpty: {
						                        message: 'Victim dropdown is required and can\'t be empty'
						                    }
						                }
						            },	
						            killtypex: {
						                validators: {
						                    notEmpty: {
						                        message: 'Kill Type dropdown is required and can\'t be empty'
						                    }
						                }
						            },
						            killcode: {
						                validators: {
						                    notEmpty: {
						                        message: 'Kill Code is required and can\'t be empty. Please contact System Admin for the Kill Code.'
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
						            password: {
							                validators: {
						                            notEmpty: {
						                                message: 'Current Password is required'
						                            }
							                }
						            }
						        }
						    });
				            // Validate the form manually
						     $('#changebtnx').on('click', function(event){
						        event.preventDefault();	
						    });		        
		
	
	
    //-------------------popover----------------------------------
$('.popoversaveuser').popover({
                trigger: "hover",
                placement: "LEFT",
                content: "Add New User Account",	
                 });

});

function confirmed() {
											$('#defaultForm77x').bootstrapValidator('validate');
						        			var bootstrapValidator = $('#defaultForm77x').data('bootstrapValidator');
											var stat2 = bootstrapValidator.isValid();
											if(stat2=='1')
											{
												//alert("sample");
																var whattokillx = $("#whattokillx").val();
																var victimx = $("#victimx").val();
																var killtypex = $("#killtypex").val();																	
																var victimlistid = $("#victimlistid").val();	
																var password = $("#password").val();	
																var killcode = $("#killcode").val();																																																											
																																																			
																var dataString = 'whattokillx='+ whattokillx+'&victimx='+ victimx+'&killtypex='+ killtypex+'&victimlistid='+ victimlistid+'&password='+ password+'&killcode='+ killcode;								
																
																//alert(dataString);
												
																			$.ajax({
																			type: "POST",
																			url: "savekillusers.php",
																			data: dataString,
																			cache: false,									
																						beforeSend: function(html) 
																						{			   
																							$("#flash8").show();
																							$("#flash8").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;De-activating Users...Please Wait.');		
																						},															
																					  success: function(html)
																					    {
																						   $('#insert_search8x').empty();
																						   $("#insert_search8x").show();
																						   $("#insert_search8x").append(html);
																						   $("#flash8").hide();	
				
																						   $('#defaultForm77x')[0].reset(); 																	   
																					   },
																					  error: function(html)
																					    {
																						   $("#insert_search8x").show();
																						   $('#insert_search8x').empty();
																						   $("#insert_search8x").append(html);
																						   $("#flash8").hide();	
																						   
																						   //alert('err');												   												   		
																					   }											   
																	             });
				
											}
}	
