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
$('#searchbtn').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});	
$(document).ready(function() {

		    
		    $('#defaultForm').bootstrapValidator({
		        message: 'This value is not valid',
                live: 'enabled',
			    submitButtons: 'button[type="button"]',			        
		        feedbackIcons: {
		            valid: 'glyphicon glyphicon-ok',
		            invalid: 'glyphicon glyphicon-remove',
		            validating: 'glyphicon glyphicon-refresh'
		        },
		        fields: {
		            login: {
		                validators: {
		                    date: {
		                        format: 'YYYY-MM-DD hh:mm:ss'
		                    }
		                }
		            },
		            logout: {
		                validators: {
		                    date: {
		                        format: 'YYYY-MM-DD hh:mm:ss'
		                    }
		                }
		            }
		        }
		    });
		
		    $('#login')
		        .on('dp.change dp.show', function(e) {
		            // Validate the date when user change it
		           $('#defaultForm').data('bootstrapValidator').revalidateField('login');
		           $('#defaultForm').data('bootstrapValidator').revalidateField('logout');
		        });
            // Validate the form manually
		    $('#searchbtn').click(function() {
		        $('#defaultForm').bootstrapValidator('validate');
		        			var bootstrapValidator = $('#defaultForm').data('bootstrapValidator');
							var stat2 = bootstrapValidator.isValid();
							if(stat2=='1')
							{
												var myuserid = $("#myuserid").val();
												var usergroupid = $("#usergroupid").val();
												var login = $("#login").val();
												var logout = $("#logout").val();												
												var position = $("#position").val();
												var companyid = $("#companyid").val();
												var o = $("#o").val();
												var t = $("#t").val();
												//alert(id);						
																				
															
												if(myuserid ==''){myuserid="undefined";}
												if(usergroupid ==''){usergroupid="undefined";}
												if(login ==''){login="undefined";}
												if(logout ==''){logout="undefined";}
												if(position ==''){position="undefined";}
												if(companyid ==''){companyid="undefined";}
																																
												var dataString = 'myuserid='+ myuserid+'&usergroupid='+ usergroupid+'&login='+ login+'&logout='+ logout+'&position='+ position+'&companyid='+ companyid+'&o='+ o+'&t='+ t;								
												
												//alert(dataString);
								
															$.ajax({
															type: "GET",
															url: "searchlogs.php",
															data: dataString,
															cache: false,									
																		beforeSend: function(html) 
																		{			   
																			$("#flash").show();
																			$("#flash").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');		
																		},															
																	  success: function(html)
																	    {
																		   $('#insert_search').empty();
																		   $("#insert_search").show();
																		   $("#insert_search").append(html);
																		   $("#flash").hide();	

																		    $('#defaultForm')[0].reset(); 		
																		   // $("#searchbtn").prop('disabled', true);	
																		   $('#defaultForm')[0].reset(); 
											   
																	   },
																	  error: function(html)
																	    {
																		   $("#insert_search").show();
																		   $('#insert_search').empty();
																		   $("#insert_search").append(html);
																		   $("#flash").hide();	
																		   
																		   //alert('err');												   												   		
																	   }											   
													             });

							}
		    });		        
	
});
