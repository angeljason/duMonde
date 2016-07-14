function getexporttoxls23() { 

           $('#example').tableExport({type:'excel',escape:'false'});
	} 
function showcopyformsettings(id2) {
										
				//var id = $("#id").val();
				var id2 = id2;
				//alert(id2);	
																																	
				var dataString = 'id2='+ id2;									
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "addcopyformsettings.php",
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
	
	   //POP Confirm
	   //$("#copybtnx").popConfirm();
	   $("#copybtnx").popConfirm({
	   	title: "Copy Module Settings?", // The title of the confirm
        content: "Copying module settings will override the selected user existing module settings. Do you want to continue?", // The message of the confirm
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
						    $('#defaultForm9x')
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
						            copyfromuseridx: {
							                validators: {
						                            notEmpty: {
						                                message: 'Copy From User is required'
						                            }
							                }
						            },
						            copytouseridx: {
							                validators: {
						                            notEmpty: {
						                                message: 'Copy To User is required'
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
				            //copy button
						   $('.copybtnx').on('click', function(event){
						   	    event.preventDefault();				        
						    });	
						    //$('#copybtnx').click(function() {	 

    //-------------------popover----------------------------------
$('.popoversaveuser').popover({
                trigger: "hover",
                placement: "LEFT",
                content: "Add New User Account",	
                 });

});

function confirmed2() {
											$('#defaultForm9x').bootstrapValidator('validate');
						        			var bootstrapValidator = $('#defaultForm9x').data('bootstrapValidator');
											var stat2 = bootstrapValidator.isValid();
											if(stat2=='1')
											{
																var copyfromuseridx = $("#copyfromuseridx").val();
																var copytouseridx = $("#copytouseridx").val();
																var password = $("#password").val();
																																																																																																																																																											
																var dataString = 'copyfromuseridx='+ copyfromuseridx+'&copytouseridx='+ copytouseridx+'&password='+ password;																								
																//alert(dataString);
												
																			$.ajax({
																			type: "POST",
																			url: "savecopysettings.php",
																			data: dataString,
																			cache: false,									
																						beforeSend: function(html) 
																						{			   
																							$("#flash3").show();
																							$("#flash3").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Copying Module Settings...Please Wait.');		
																						},															
																					  success: function(html)
																					    {
																						   $('#insert_search3x').empty();
																						   $("#insert_search3x").show();
																						   $("#insert_search3x").append(html);
																						   $("#flash3").hide();	
				
																						    $('#defaultForm9x')[0].reset(); 																	   
																					   },
																					  error: function(html)
																					    {
																						   $("#insert_search3x").show();
																						   $('#insert_search3x').empty();
																						   $("#insert_search3x").append(html);
																						   $("#flash3").hide();														   												   		
																					   }											   
																	             });
																	             //$.ajax({
				
											}
											//if(stat2=='1')
}

function showmodalauthorityreview(id2) {
	
				//var id = $("#id").val();
				var id2 = id2;
				//alert(id2);	
																																
				var dataString = 'id2='+ id2;													
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "modaluserauthorityreview.php",
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
										   $('#insert_modal2').empty();
										   $("#insert_modal2").append(html);	
										   $("#insert_modal2").hide();											   												   		
									   }											   
					             });
}
