function getexporttoxls3() { 
	$("#example").battatech_excelexport({
                containerid: "example", datatype: 'table'
            });
	} 
	
function getexporttoxls4() { 
	$("#example").battatech_excelexport({
                containerid: "example", datatype: 'table'
            });
	}
	
$(document).ready(function() {

	//search 
     $('#searchbtn').click(function() {
		 
				var searchfield = $("#searchfield").val();
				//var theyear = $("#theyear").val();
																																
				//var dataString = 'searchfield='+ searchfield+'&theyear='+ theyear;	
				var dataString = 'searchfield='+ searchfield;				
				
				//alert(dataString);
				
								$.ajax({
								type: "GET",
								url: "search.php",
								data: dataString,
								cache: false,									
											beforeSend: function(html) 
											{			   
												$("#flash2").show();
												$("#flash2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching Feedback Database...Please Wait.');		
											},															
										  success: function(html)
										    {
											   $("#insert_search2").empty();
											   $("#insert_search2").show();
											   $("#insert_search2").append(html);
											   $("#flash2").hide();	

											   $('#defaultForm')[0].reset(); 		
	
				   
										   },
										  error: function(html)
										    {
											   $("#insert_search2").show();
											   $("#insert_search2").empty();
											   $("#insert_search2").append(html);
											   $("#flash2").hide();	
											   											   												   		
										   }											   
						             });
     	});    

	//-----------------------------------------------------------
				//-------------------------------------------                  	
			    $('#mymodalform_xyz').on('init.field.bv', function(e, data) {	
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
			            oz: {
			                validators: {
			                    notEmpty: {
			                        message: 'This field is required and can\'t be empty'
			                    }
			                }
			            }						           
			        }
			    });
 
	             //-----------------------------------------------------------  
						    $('#defaultForm2x9').bootstrapValidator({
						        message: 'This value is not valid',
				                live: 'enabled',
							    submitButtons: 'button[type="button"]',			        
						        feedbackIcons: {
						            valid: 'glyphicon glyphicon-ok',
						            invalid: 'glyphicon glyphicon-remove',
						            validating: 'glyphicon glyphicon-refresh'
						        },
						        fields: {										            
											oz: {
												validators: {
													notEmpty: {
														message: 'This field is required and can\'t be empty'
													}
												}
											}
						            //---------------------
						        }
						    });
						    					    
				            // Validate the form manually
						    $('#searchbtn2x99').click(function() {
						        $('#defaultForm2x9').bootstrapValidator('validate');
						        			var bootstrapValidator = $('#defaultForm2x9').data('bootstrapValidator');
											var stat2 = bootstrapValidator.isValid();
											if(stat2=='1')
											{
												//alert("sample");
																var eventname = $("#eventname").val();
																var companyname = $("#companyname").val();
																var industrysector = $("#industrysector").val();
																var location = $("#location").val();
																var completename = $("#completename").val();																
																var email = $("#email").val();
																var position = $("#position").val();
																
																var q1 = $("#q1").val();												
																var q2 = $("#q2").val();																
																var q3 = $("#q3").val();
																var q4 = $("#q4").val();
																var q5 = $("#q5").val();
																var q6 = $("#q6").val();																																																												
																var q7 = $("#q7").val();
																var q8 = $("#q8").val();
																
																var scale = $("#scale").val();
																var canbecontacted = $("#canbecontacted").val();																																																				
																var wantupdates = $("#wantupdates").val();
																var year = $("#year").val();
																																																																																																														
																var o = $("#oz").val();
																var t = $("#tz").val();
																																																			
																var dataString = 'eventname='+ eventname+'&companyname='+ companyname+'&industrysector='+ industrysector+'&location='+ location+'&completename='+ completename
																+'&email='+ email+'&position='+ position+'&q1='+ q1+'&q2='+ q2+'&q3='+ q3
																+'&q4='+ q4+'&q5='+ q5+'&q6='+ q6+'&q7='+ q7+'&q8='+ q8
																+'&scale='+ scale+'&canbecontacted='+ canbecontacted+'&wantupdates='+ wantupdates+'&year='+ year+'&o='+ o
																+'&t='+ t;								
																
																//alert(dataString);
												
																			$.ajax({
																			type: "GET",
																			url: "searchadvance.php",
																			data: dataString,
																			cache: false,									
																						beforeSend: function(html) 
																						{			   
																							$("#flash2").show();			
																							$('#collapseOne').collapse("hide");
																							$("#flash2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching Feedback Database...Please Wait.');		
																						},															
																					   success: function(html)
																						{
																						   $("#flash2").hide();	
																						   $("#insert_search2").empty();
																						   $("#insert_search2").append(html);
																						   $("#insert_search2").show();																						   																						   
																					   },
																					  error: function(html)
																						{
																						   $("#insert_search2").show();
																						   $("#insert_search2").empty();
																						   $("#insert_search2").append(html);
																						   $("#flash2").hide();	
																																															
																					   }											   
																	             });
				
											}
						    });		        		
                
	//-----------------------------------------------------------
});
