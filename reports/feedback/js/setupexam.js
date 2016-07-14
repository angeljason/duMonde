function getexporttoxls23() { 

           $('#example').tableExport({type:'excel',escape:'false'});
	} 
function updateexam(id2) {
										
				//var id = $("#id").val();
				var id2 = id2;
				//alert(id2);	
																																	
				var dataString = 'id2='+ id2;									
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "updateexam.php",
							data: dataString,
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modalxx_22").show();
										   $('#insert_modalxx_22').empty();
										   $("#insert_modalxx_22").append(html);																	   
									   },
									  error: function(html)
									    {
										   $("#insert_modalxx_22").show();
										   $('#insert_modalxx_22').empty();
										   $("#insert_modalxx_22").append(html);	
										   $("#insert_modalxx_22").hide();											   												   		
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
		   $("#deletebtnx").popConfirm({
			   	title: "Are you sure you want to Delete?", // The title of the confirm
		        content: "This transaction will permanently erase the record in the database. Do you want to continue?", // The message of the confirm
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
						            question: {
							                validators: {
						                            notEmpty: {
						                                message: 'Question is required'
						                            }
							                }
						            },
									choice1: {
							                validators: {
						                            notEmpty: {
						                                message: 'Choice # 1 is required'
						                            }
							                }
						            },	
									choice2: {
							                validators: {
						                            notEmpty: {
						                                message: 'Choice # 2 is required'
						                            }
							                }
						            },	
									choice3: {
							                validators: {
						                            notEmpty: {
						                                message: 'Choice # 3 is required'
						                            }
							                }
						            },	
									choice4: {
							                validators: {
						                            notEmpty: {
						                                message: 'Choice # 4 is required'
						                            }
							                }
						            },	
									choice5: {
							                validators: {
						                            notEmpty: {
						                                message: 'Choice # 5 is required'
						                            }
							                }
						            },	
									answer: {
							                validators: {
						                            notEmpty: {
						                                message: 'Answer is required'
						                            },
													 digits: {
														message: 'Answer must be a digit'
													},
													greaterThan: {
														value: 1
													},
													lessThan: {
														value: 5
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
						    $('#addrecordbtnx').click(function() {
						        $('#defaultForm66x').bootstrapValidator('validate');
						        			var bootstrapValidator = $('#defaultForm66x').data('bootstrapValidator');
											var stat2 = bootstrapValidator.isValid();
											if(stat2=='1')
											{
												//alert(stat2);
																var question = $("#question").val();								
																var category_id = $("#category_id").val();
																var choice1 = $("#choice1").val();	
																var choice2 = $("#choice2").val();	
																var choice3 = $("#choice3").val();	
																var choice4 = $("#choice4").val();	
																var choice5 = $("#choice5").val();
																var answer = $("#answer").val();	
																var password = $("#password").val();	
																var myflag= $("#myflag").val();
																var crud= 'ADDUPDATE';
																																																																																																																												
																var dataString = 'question='+ question+'&category_id='+ category_id+'&choice1='+ choice1+'&choice2='+ choice2+'&choice3='+ choice3+'&choice4='+ choice4+'&choice5='+ choice5+'&answer='+ answer+'&password='+ password+'&myflag='+ myflag+'&crud='+ crud;																								
																//alert(dataString);
												
																			$.ajax({
																			type: "POST",
																			url: "saveexam.php",
																			data: dataString,
																			cache: false,									
																						beforeSend: function(html) 
																						{			   
																							$("#flash8").show();
																							$("#flash8").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Inserting Record...Please Wait.');		
																						},															
																					  success: function(html)
																					    {
																						   $('#insert_search8x').empty();
																						   $("#insert_search8x").show();
																						   $("#insert_search8x").append(html);
																						   $("#flash8").hide();	
				
																						    $('#defaultForm2x')[0].reset(); 																	   
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
						    //$('#addbtnx').click(function() {	 
						   
						   
						   
						   //delete button
						    $('#deletebtnx').click(function() {
						       event.preventDefault();	
						    });	
	
    //-------------------popover----------------------------------
$('.popoversaveuser').popover({
                trigger: "hover",
                placement: "LEFT",
                content: "Add New User Account",	
                 });

});

