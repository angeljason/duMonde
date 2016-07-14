function getexporttoxls23() { 

           $('#example').tableExport({type:'excel',escape:'false'});
	} 
function showchangepassword2(id2) {
										
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
							url: "addchangepasswordmodal.php",
							data: dataString,
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modal2").show();
										   $('#insert_modal2').empty();
										   $("#insert_modal2").append(html);
																	   
									   },
									  error: function(html)
									    {
										   $("#insert_modal2").show();
										   $('#insert_modal').empty();
										   $("#insert_modal2").append(html);	
										   $("#insert_modal2").hide();											   												   		
									   }											   
					             });

}

function showchangepassword(id2) {
										
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
							url: "addchangepasswordmodal.php",
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
	
	   $("#changebtnx").popConfirm({
	   	title: "Are you sure you want to change the password?", // The title of the confirm
        content: "This will change the user password. Do you want to continue?", // The message of the confirm
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
						    $('#defaultForm8x')
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
						                newpassword: {
						                validators: {
						                    notEmpty: {
						                        message: 'The password is required and can\'t be empty'
						                    },
						                    identical: {
						                        field: 'confirmpassword',
						                        message: 'The new password and its confirm are not the same'
						                    },
											stringLength: {
												min: 8,												
												message: 'The password must be more than 8 characters long'
											}
						                }
						            },
						            confirmpassword: {
						                validators: {
						                    notEmpty: {
						                        message: 'The confirm password is required and can\'t be empty'
						                    },
						                    identical: {
						                        field: 'newpassword',
						                        message: 'The new password and its confirm are not the same'
						                    },
											stringLength: {
												min: 8,												
												message: 'Confirm password must be more than 8 characters long'
											}
						                }
						            },	
						            currentpassword: {
						                validators: {
						                    notEmpty: {
						                        message: 'The current password is required and can\'t be empty'
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
											$('#defaultForm8x').bootstrapValidator('validate');
						        			var bootstrapValidator = $('#defaultForm8x').data('bootstrapValidator');
											var stat2 = bootstrapValidator.isValid();
											if(stat2=='1')
											{
												//alert("sample");
																var myuserid = $("#myuserid").val();
																var newpassword = $("#newpassword").val();
																var confirmpassword = $("#confirmpassword").val();
																var password = $("#password").val();	
																var currentpassword = $("#currentpassword").val();																																																													
																																																			
																var dataString = 'myuserid='+ myuserid+'&newpassword='+ newpassword+'&confirmpassword='+ confirmpassword+'&password='+ password+'&currentpassword='+ currentpassword;								
																
																//alert(dataString);
												
																			$.ajax({
																			type: "POST",
																			url: "savechangepassword.php",
																			data: dataString,
																			cache: false,									
																						beforeSend: function(html) 
																						{			   
																							$("#flash8").show();
																							$("#flash8").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Changing User Password...Please Wait.');		
																						},															
																					  success: function(html)
																					    {
																						   $('#insert_search8x').empty();
																						   $("#insert_search8x").show();
																						   $("#insert_search8x").append(html);
																						   $("#flash8").hide();	
				
																						   // $('#defaultForm8x')[0].reset(); 																	   
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
