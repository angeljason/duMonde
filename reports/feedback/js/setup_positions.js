function getexporttoxls23() { 

           $('#example').tableExport({type:'excel',escape:'false'});
	} 
function showsave_areaofassignment(id2) {
										
				//var id = $("#id").val();
				var id2 = id2;
				//alert(id2);	
																																	
				var dataString = 'id2='+ id2;									
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "addareaofassignment.php",
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
		   $("#addrecordbtnx").popConfirm({
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
						            accountsid: {
							                validators: {
						                            notEmpty: {
						                                message: 'Account/Client Name is required'
						                            }
							                }
						            },
						            moduleidx: {
							                validators: {
						                            notEmpty: {
						                                message: 'Area of Assignment is required'
						                            }
							                }
						            }
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
						    $('#addbtnx').click(function() {
						        $('#defaultForm66x').bootstrapValidator('validate');
						        			var bootstrapValidator = $('#defaultForm66x').data('bootstrapValidator');
											var stat2 = bootstrapValidator.isValid();
											if(stat2=='1')
											{
																var accountsid = $("#accountsid").val();
																var areaofassignment = $("#areaofassignment").val();									
																var password = $("#password").val();	
																var myflag= $("#myflag").val();
																var crud= 'ADDUPDATE';
																																																																																																																												
																var dataString = 'accountsid='+ accountsid+'&areaofassignment='+ areaofassignment+'&password='+ password+'&myflag='+ myflag+'&crud='+ crud;																								
																//alert(dataString);
												
																			$.ajax({
																			type: "POST",
																			url: "savemodule.php",
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

function confirmed() {
	 $('#defaultForm2x').bootstrapValidator('validate');
						        			var bootstrapValidator = $('#defaultForm2x').data('bootstrapValidator');
											var stat2 = bootstrapValidator.isValid();
											if(stat2=='1')
											{
																var useridx = $("#useridx").val();
																var moduleidx = $("#moduleidx").val();
																var authoritystatidx = $("#authoritystatidx").val();
																var userstatidx = $("#userstatidx").val();
																var password = $("#password").val();	
																var myflag= $("#myflag").val();
																var crud= 'DELETE';
																																																																																																																												
																var dataString = 'useridx='+ useridx+'&moduleidx='+ moduleidx+'&authoritystatidx='+ authoritystatidx+'&userstatidx='+ userstatidx+'&password='+ password+'&myflag='+ myflag+'&crud='+ crud;																								
																//alert(dataString);
												
																			$.ajax({
																			type: "POST",
																			url: "savemodule.php",
																			data: dataString,
																			cache: false,									
																						beforeSend: function(html) 
																						{			   
																							$("#flash2").show();
																							$("#flash2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Deleting User Authority...Please Wait.');		
																						},															
																					  success: function(html)
																					    {
																						   $('#insert_search2x').empty();
																						   $("#insert_search2x").show();
																						   $("#insert_search2x").append(html);
																						   $("#flash2").hide();	
				
																						    $('#defaultForm2x')[0].reset(); 																	   
																					   },
																					  error: function(html)
																					    {
																						   $("#insert_search2x").show();
																						   $('#insert_search2x').empty();
																						   $("#insert_search2x").append(html);
																						   $("#flash2").hide();														   												   		
																					   }											   
																	             });
																	             //$.ajax({
				
											}
											//if(stat2=='1')
}
