function requestbi(id2) {

				var id2 = id2;																															
				var dataString = 'id2='+ id2;									

							$.ajax({
							type: "GET",
							url: "birequests.php",
							data: dataString,
							cache: false,
									 beforeSend: function(html) 
										{			   
											$("#flash_bi").show();
											$("#flash_bi").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Requesting Background Investigation...Please Wait.');				
										},																							
									  success: function(html)
									    {
										   $("#flash_bi").show();
										   $('#flash_bi').empty();
										   $("#flash_bi").append(html);																	   
									   },
									  error: function(html)
									    {
										   $("#flash_bi").show();
										   $('#flash_bi').empty();
										   $("#flash_bi").append(html);	
										   $("#flash_bi").hide();											   												   		
									   }											   
					             });

}
$('#tabUL a[href="#new"]').on('click', function(event){				
			gototop(); 
			shownewinvited();
				
});	

$('#myinvitedid').click(function() {				
			gototop(); 
			shownewinvited();
				
});	
function shownewinvited() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "loadnewinvited.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_myinvited").show();
											$("#insert_myinvited").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_myinvited").show();
										   $('#insertbody_myinvited').empty();
										   $("#insertbody_myinvited").append(html);
										   $("#insert_myinvited").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_myinvited").show();
										   $('#insertbody_myinvited').empty();
										   $("#insertbody_myinvited").append(html);	
										   $("#insertbody_myinvited").hide();	
										   $("#insert_myinvited").hide();										   												   		
									   }													   
					             });		
}
$('#newapplicantsid').click(function() {				
			gototop(); 
			//alert("test");
			shownew();				
});	
function shownew() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "loadnew.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_newapplicants").show();
											$("#insert_newapplicants").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_newapplicants").show();
										   $('#insertbody_newapplicants').empty();
										   $("#insertbody_newapplicants").append(html);
										   $("#insert_newapplicants").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_newapplicants").show();
										   $('#insertbody_newapplicants').empty();
										   $("#insertbody_newapplicants").append(html);	
										   $("#insertbody_newapplicants").hide();	
										   $("#insert_newapplicants").hide();										   												   		
									   }													   
					             });		
}
$('#tabUL a[href="#placement"]').on('click', function(event){				
			gototop(); 
			showplacement();
				
});
function showplacement() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "loadplacement.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_placement").show();
											$("#insert_placement").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_placement").show();
										   $('#insertbody_placement').empty();
										   $("#insertbody_placement").append(html);
										   $("#insert_placement").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_placement").show();
										   $('#insertbody_placement').empty();
										   $("#insertbody_placement").append(html);	
										   $("#insertbody_placement").hide();	
										   $("#insert_placement").hide();										   												   		
									   }													   
					             });		
}
$('#tabUL a[href="#hired"]').on('click', function(event){				
			gototop(); 
			showhired();
				
});
function showhired() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "loadhired.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_hired").show();
											$("#insert_hired").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_hired").show();
										   $('#insertbody_hired').empty();
										   $("#insertbody_hired").append(html);
										   $("#insert_hired").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_hired").show();
										   $('#insertbody_hired').empty();
										   $("#insertbody_hired").append(html);	
										   $("#insertbody_hired").hide();	
										   $("#insert_hired").hide();										   												   		
									   }													   
					             });		
}
$('#tabUL a[href="#activefile"]').on('click', function(event){				
			gototop(); 
			showactivefile();
				
});
function showactivefile() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "loadactivefile.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_activefile").show();
											$("#insert_activefile").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_activefile").show();
										   $('#insertbody_activefile').empty();
										   $("#insertbody_activefile").append(html);
										   $("#insert_activefile").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_activefile").show();
										   $('#insertbody_activefile').empty();
										   $("#insertbody_activefile").append(html);	
										   $("#insertbody_activefile").hide();	
										   $("#insert_activefile").hide();										   												   		
									   }													   
					             });		
}
$('#tabUL a[href="#notqualified"]').on('click', function(event){				
			gototop(); 
			shownotqualified();
				
});
function shownotqualified() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "loadnotqualified.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_notqualified").show();
											$("#insert_notqualified").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_notqualified").show();
										   $('#insertbody_notqualified').empty();
										   $("#insertbody_notqualified").append(html);
										   $("#insert_notqualified").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_notqualified").show();
										   $('#insertbody_notqualified').empty();
										   $("#insertbody_notqualified").append(html);	
										   $("#insertbody_notqualified").hide();	
										   $("#insert_notqualified").hide();										   												   		
									   }													   
					             });		
}
$('#tabUL a[href="#qualified"]').on('click', function(event){				
			gototop(); 
			showqualified();
				
});
function showqualified() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "loadqualified.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_qualified").show();
											$("#insert_qualified").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_qualified").show();
										   $('#insertbody_qualified').empty();
										   $("#insertbody_qualified").append(html);
										   $("#insert_qualified").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_qualified").show();
										   $('#insertbody_qualified').empty();
										   $("#insertbody_qualified").append(html);	
										   $("#insertbody_qualified").hide();	
										   $("#insert_qualified").hide();										   												   		
									   }													   
					             });		
}
$('#myforwardedid').click(function() {				
			gototop(); 
			showmyforwarded();
				
});	
function showmyforwarded() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "loadmyforwarded.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_myforwarded").show();
											$("#insert_myforwarded").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_myforwarded").show();
										   $('#insertbody_myforwarded').empty();
										   $("#insertbody_myforwarded").append(html);
										   $("#insert_myforwarded").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_myforwarded").show();
										   $('#insertbody_myforwarded').empty();
										   $("#insertbody_myforwarded").append(html);	
										   $("#insertbody_myforwarded").hide();	
										   $("#insert_myforwarded").hide();										   												   		
									   }													   
					             });		
}
$('#tabUL a[href="#forwarded"]').on('click', function(event){				
			gototop(); 
			showforwarded();
				
});	

$('#allforwardedid').click(function() {				
			gototop(); 
			showforwarded();
				
});	
function showforwarded() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "loadforwarded.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_forwarded").show();
											$("#insert_forwarded").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_forwarded").show();
										   $('#insertbody_forwarded').empty();
										   $("#insertbody_forwarded").append(html);
										   $("#insert_forwarded").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_forwarded").show();
										   $('#insertbody_forwarded').empty();
										   $("#insertbody_forwarded").append(html);	
										   $("#insertbody_forwarded").hide();	
										   $("#insert_forwarded").hide();										   												   		
									   }													   
					             });		
}

function showupdateapplicant(id2) {
										
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
							url: "sourcingmodapplicant.php",
							data: dataString,
							cache: false,																							
									  success: function(html)
									    {
										   $("#myModal").show();
										   $('#myModal').empty();
										   $("#myModal").append(html);
																	   
									   },
									  error: function(html)
									    {
										   $("#myModal").show();
										   $('#myModal').empty();
										   $("#myModal").append(html);	
										   $("#myModal").hide();											   												   		
									   }											   
					             });

}

//get category function
function getcategory(id) {
										
				//var id = $("#id").val();
				var id = id;
				//alert(id);	
												
				/*var searchstring =  '';																
				if(id ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+id;}
				*/																																	
				var dataString = 'id='+ id;									
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "applicantprofile.php",
							data: dataString,
							cache: false,									
										beforeSend: function(html) 
										{			   
											$("#flash").show();
											$("#flash").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},															
									  success: function(html)
									    {
										   $("#myModal_xxx").show();
										   $('#myModal_xxx').empty();
										   $("#myModal_xxx").append(html);
										   $("#flash").hide();	
										   
										   scrollToID('#' + insert_search, 750);																	   
									   },
									  error: function(html)
									    {
										   $("#myModal_xxx").show();
										   $('#myModal_xxx').empty();
										   $("#myModal_xxx").append(html);
										   $("#flash").hide();													   												   		
									   }											   
					             });

}	
/*
$('#insert_modal').on('hidden.bs.modal', function () {
			//referesh page using ajax
		    $.ajax({
		    url: "",
		    context: document.body,
		    success: function(s,x){
		        $(this).html(s);
		    }
		});
})
*/

function showmodal(id2) {
										
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
							url: "sourcingmodal.php",
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

	


function showmodaltransaction(id2) {
										
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
							url: "modaltransaction.php",
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
function modalclose() {
	 //close modal	
	 $('#insert_modal2').modal("hide");

}
function showmodal2(id2) {
										
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
							url: "reforwardmodal.php",
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

function forwardapplicant() {
	
		$('#mymodalform_xyz').bootstrapValidator('validate');
		var bootstrapValidator = $('#mymodalform_xyz').data('bootstrapValidator');
		var stat2 = bootstrapValidator.isValid();
		if(stat2=='1')
		{	
										
				var myapplicantid = $("#myapplicantid").val();
				var recruiterid = $("#recruiterid").val();
				var accountid = $("#accountid").val();
				var remarks = $("#remarks").val();				
																																												
				var dataString = 'myapplicantid='+ myapplicantid+'&recruiterid='+ recruiterid+'&accountid='+ accountid+'&remarks='+ remarks;										
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "myapplicantid.php",
							data: dataString,
							cache: false,									
										beforeSend: function(html) 
										{			   
											$("#flashapplicantid").show();
											$("#flashapplicantid").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Forwarding...Please Wait.');				
										},															
									  success: function(html)
									    {
										    $("#insert_applicantid").show();
										    $('#insert_applicantid').empty();
										    $("#insert_applicantid").append(html);
										    $("#flashapplicantid").hide();	
										   																   
									   },
									  error: function(html)
									    {
										   $("#insert_applicantid").show();
										   $('#insert_applicantid').empty();
										   $("#insert_applicantid").append(html);
										   $("#flashapplicantid").hide();													   												   		
									   }											   
					             });
	}			             

}

function getexporttoxls() { 
	$("#insert_search").btechco_excelexport({
                containerid: "insert_search", datatype: $datatype.Table
            });
	} 
	
function getexporttoxls3() { 
	$("#insert_search_export3").btechco_excelexport({
                containerid: "insert_search_export3", datatype: $datatype.Table
            });
	} 
	
function getexporttoxls4() { 
	$("#insert_search_export4").btechco_excelexport({
                containerid: "insert_search_export4", datatype: $datatype.Table
            });
	} 	

function gototop() {			
	  		//event.preventDefault();
			$('html, body').animate({scrollTop:0}, 'slow'); 				
				$('#insert_search').fadeOut(500, function() {
				   $('#insert_search').empty();
				});
	}  
	
function refreshdiv() {
		$("#forwardbtn").prop('disabled', true);
		
					setTimeout(function(){
								   location.reload();
			    }, 2000);
		
	}  	

// scroll function
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

$(document).ready(function() {
	// navigation click actions	
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});
	
	$('.popovercreateactionslip').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});	
	

	//search applicant
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
								url: "search.php",
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

	//-----------store tab values to has-----------------
	$('#tabUL a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // store the currently selected tab in the hash value
    $("ul.nav-tabs > li > a").on("shown.bs.tab", function (e) {
        var id = $(e.target).attr("href").substr(1);
        window.location.hash = id;
    });
    
     //-------on load of the page: switch to the currently selected tab-----
    var hash = window.location.hash;
    $('#tabUL a[href="' + hash + '"]').tab('show');
    //alert(hash);
    
    //if hash is this value query
    if(hash == "#placement") {
    	//alert("placement");
		gototop(); 
		showplacement();
		
	}
	else if(hash == "#forwarded") {
		//alert("forwarded");
		gototop(); 
		showforwarded();
			
	}
	else if(hash == "#qualified") {
		//alert("qualified");
		gototop(); 
		showqualified();
			
	}
	else if(hash == "#notqualified") {
		//alert("notqualified");
		gototop(); 
		shownotqualified();
			
	}
	else if(hash == "#activefile") {
		//alert("activefile");
		gototop(); 
		showactivefile();
			
	}
	else if(hash == "#hired") {
		//alert("hired");
		gototop(); 
		showhired();
			
	}
	else if(hash == "#new") {
		//alert("hired");
		gototop(); 
		shownewinvited();
			
	}
	else {
		//new
		//alert("new");
		gototop(); 
		shownewinvited();
	}
    
    
    //-------------------popover----------------------------------
	$('.scroll-link').popover({
	                trigger: "hover",
	                placement: "right",
	                content: "View Applicant Profile",
	                });
	$('.popovercreateactionslip').popover({
	                trigger: "hover",
	                placement: "left",
	                content: "Create Action Slip",
	                });   
	$('.popoverprocessingapplicant').popover({
	                trigger: "hover",
	                placement: "left",
	                content: "Process Applicant",
	                });  
	$('.popoverprocessingapplicant2').popover({
	                trigger: "hover",
	                placement: "left",
	                content: "Reforward Applicant to Recruiter",
	                });  
	                	                
	                
	$('.popoversourcinghistory').popover({
	                trigger: "hover",
	                placement: "right",
	                content: "View Sourcing History",
	                });  
	$('.popoverforwardapplicant').popover({
	                trigger: "hover",
	                placement: "left",
	                content: "Forward Applicant to Recruiter",
	                });  
	$('.popoverupdateapplicant').popover({
	                trigger: "hover",
	                placement: "right",
	                content: "Update Applicant Profile",
	                });  	
	    $('#searchbtn2x99').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
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
			            remarks: {
			                validators: {
			                    notEmpty: {
			                        message: 'Remarks is required and can\'t be empty'
			                    },
			                    regexp: {
											regexp: /^[a-zA-Z0-9_\-,. ]+$/,
											message: 'Remarks can only consist of alphabetical,space,comma,dash, number, dot and underscore'
										}			                    
			                }
			            },	
			            accountid: {
			                validators: {
			                    notEmpty: {
			                        message: 'Account field is required and can\'t be empty'
			                    }
			                }
			            },	
			            recruiterid: {
			                validators: {
			                    notEmpty: {
			                        message: 'Recruiter Name is required and can\'t be empty'
			                    }
			                }
			            }						           
			        }
			    });
	            // Validate the form manually
			     $('#forwardbtn').on('click', function(event){
			        event.preventDefault();	
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
										            applicantstatusidz: {
										                validators: {
									                         notEmpty: {
									                                message: 'Applicant Status is required'
									                            }
										                }
										            },						        	
										            startdatez: {
										                validators: {
										                    date: {
										                        format: 'MM/DD/YYYY',
										                        message: 'The start date is not valid. Should be in mm/dd/yyyy'
										                    }
										                }
										            },
										            enddatez: {
										                validators: {
										                    date: {
										                        format: 'MM/DD/YYYY',
										                        message: 'The end date is not valid. Should be in mm/dd/yyyy'
										                    }
										                }
										            },
										            dateneededfromz: {
										                validators: {
										                    date: {
										                        format: 'MM/DD/YYYY',
										                        message: 'The date needed is not valid. Should be in mm/dd/yyyy'
										                    }
										                }
										            },
										            dateneededtoz: {
										                validators: {
										                    date: {
										                        format: 'MM/DD/YYYY',
										                        message: 'The date needed is not valid. Should be in mm/dd/yyyy'
										                    }
										                }
										            },
										            datecreatedfromz: {
										                validators: {
										                    date: {
										                        format: 'MM/DD/YYYY',
										                        message: 'The date created from is not valid. Should be in mm/dd/yyyy'
										                    }
										                }
										            },
										            datecreatedtoz: {
										                validators: {
										                    date: {
										                        format: 'MM/DD/YYYY',
										                        message: 'The date created to is not valid. Should be in mm/dd/yyyy'
										                    }
										                }
										            }
						            //---------------------
						        }
						    });
						     $('#applicantstatusidz').change(function () {	
							   // var value = $(this).val();
							    var value = $("#applicantstatusidz").val();
							    //alert(value); 
							        if(value=='1')
							        {
							        	//New
							        	//alert("New");
							        	//disable form fields
							        	$('#recruiter_useridz').attr('disabled','disabled');
							        	$('#accountsidz').attr('disabled','disabled');
							        	$('#positionidz').attr('disabled','disabled');
							        	$('#startdatez').attr('disabled','disabled');
							        	$('#enddatez').attr('disabled','disabled');									        	
							        	$('#dateneededfromz').attr('disabled','disabled');	
							        	$('#dateneededtoz').attr('disabled','disabled');	
							        	$('#areaofassignmentidz').attr('disabled','disabled');	
							        	
							        	//$('#mycompanyid').reset();
							        	$('#mycompanyid').get(0).selectedIndex = 0;
							        	$('#mycompanyid').attr('disabled','disabled');	
							        	
							        	
							        	//enable form fields
							        	$('#firstnamez').removeAttr('disabled');
							        	$('#lastnamez').removeAttr('disabled');
							        	$('#sourcethruz').removeAttr('disabled');
							        	$('#firstchoicez').removeAttr('disabled','disabled');
							        	$('#secondchoicez').removeAttr('disabled','disabled');
							        	$('#prefworklocationz').removeAttr('disabled');							        	
							        	$('#emailz').removeAttr('disabled');
							        	$('#mobilenoz').removeAttr('disabled','disabled');
							        	$('#datecreatedfromz').removeAttr('disabled','disabled');
							        	$('#datecreatedtoz').removeAttr('disabled');	
							        	$('#createdbyidz').removeAttr('disabled');							        	

							        }
							        else if(value=='2')
							        {
										//Forwarded
										//alert("Forwarded");
							        	//disable form fields
							        	$('#positionidz').attr('disabled','disabled');
							        	$('#areaofassignmentidz').attr('disabled','disabled');
							        	$('#startdatez').attr('disabled','disabled');
							        	$('#enddatez').attr('disabled','disabled');									        	
							        	$('#dateneededfromz').attr('disabled','disabled');	
							        	$('#dateneededtoz').attr('disabled','disabled');
							        	
							        	$('#mycompanyid').get(0).selectedIndex = 0;	
							        	$('#mycompanyid').attr('disabled','disabled');						        	
     	
							        	//enable form fields
							        	$('#recruiter_useridz').removeAttr('disabled');
							        	$('#accountsidz').removeAttr('disabled');
							        	$('#firstnamez').removeAttr('disabled');
							        	$('#lastnamez').removeAttr('disabled');
							        	$('#sourcethruz').removeAttr('disabled');
							        	$('#firstchoicez').removeAttr('disabled','disabled');
							        	$('#secondchoicez').removeAttr('disabled','disabled');
							        	$('#prefworklocationz').removeAttr('disabled');							        	
							        	$('#emailz').removeAttr('disabled');
							        	$('#mobilenoz').removeAttr('disabled','disabled');
							        	$('#datecreatedfromz').removeAttr('disabled','disabled');
							        	$('#datecreatedtoz').removeAttr('disabled');	
							        	$('#createdbyidz').removeAttr('disabled');										
							        }
							        else if(value=='3')
							        {
										//Qualified
										//alert("Qualified");
							        	//disable form fields
							        	$('#areaofassignmentidz').attr('disabled','disabled');
							        	$('#startdatez').attr('disabled','disabled');
							        	$('#enddatez').attr('disabled','disabled');									        	
							        	$('#dateneededfromz').attr('disabled','disabled');	
							        	$('#dateneededtoz').attr('disabled','disabled');	
							        	
							        	$('#mycompanyid').get(0).selectedIndex = 0;
							        	$('#mycompanyid').attr('disabled','disabled');						        	
     	
							        	//enable form fields
							        	$('#positionidz').removeAttr('disabled');
							        	$('#recruiter_useridz').removeAttr('disabled');
							        	$('#accountsidz').removeAttr('disabled');
							        	$('#firstnamez').removeAttr('disabled');
							        	$('#lastnamez').removeAttr('disabled');
							        	$('#sourcethruz').removeAttr('disabled');
							        	$('#firstchoicez').removeAttr('disabled','disabled');
							        	$('#secondchoicez').removeAttr('disabled','disabled');
							        	$('#prefworklocationz').removeAttr('disabled');							        	
							        	$('#emailz').removeAttr('disabled');
							        	$('#mobilenoz').removeAttr('disabled','disabled');
							        	$('#datecreatedfromz').removeAttr('disabled','disabled');
							        	$('#datecreatedtoz').removeAttr('disabled');	
							        	$('#createdbyidz').removeAttr('disabled');										
							        }	
							        else if(value=='4')
							        {
										//Not Qualified
										//alert("Not Qualified");
							        	$('#recruiter_useridz').attr('disabled','disabled');
							        	$('#accountsidz').attr('disabled','disabled');
							        	$('#positionidz').attr('disabled','disabled');
							        	$('#startdatez').attr('disabled','disabled');
							        	$('#enddatez').attr('disabled','disabled');									        	
							        	$('#dateneededfromz').attr('disabled','disabled');	
							        	$('#dateneededtoz').attr('disabled','disabled');	
							        	$('#areaofassignmentidz').attr('disabled','disabled');	
							        	
							        	//enable form fields
							        	$('#firstnamez').removeAttr('disabled');
							        	$('#lastnamez').removeAttr('disabled');
							        	$('#sourcethruz').removeAttr('disabled');
							        	$('#firstchoicez').removeAttr('disabled','disabled');
							        	$('#secondchoicez').removeAttr('disabled','disabled');
							        	$('#prefworklocationz').removeAttr('disabled');							        	
							        	$('#emailz').removeAttr('disabled');
							        	$('#mobilenoz').removeAttr('disabled','disabled');
							        	$('#datecreatedfromz').removeAttr('disabled','disabled');
							        	$('#datecreatedtoz').removeAttr('disabled');	
							        	$('#createdbyidz').removeAttr('disabled');	
							        	$('#mycompanyid').removeAttr('disabled');										
							        }
							        else if(value=='5')
							        {
										//Active File
										//alert("Active File");
							        	$('#recruiter_useridz').attr('disabled','disabled');
							        	$('#accountsidz').attr('disabled','disabled');
							        	$('#positionidz').attr('disabled','disabled');
							        	$('#startdatez').attr('disabled','disabled');
							        	$('#enddatez').attr('disabled','disabled');									        	
							        	$('#dateneededfromz').attr('disabled','disabled');	
							        	$('#dateneededtoz').attr('disabled','disabled');	
							        	$('#areaofassignmentidz').attr('disabled','disabled');	
							        	
							        	//enable form fields
							        	$('#firstnamez').removeAttr('disabled');
							        	$('#lastnamez').removeAttr('disabled');
							        	$('#sourcethruz').removeAttr('disabled');
							        	$('#firstchoicez').removeAttr('disabled','disabled');
							        	$('#secondchoicez').removeAttr('disabled','disabled');
							        	$('#prefworklocationz').removeAttr('disabled');							        	
							        	$('#emailz').removeAttr('disabled');
							        	$('#mobilenoz').removeAttr('disabled','disabled');
							        	$('#datecreatedfromz').removeAttr('disabled','disabled');
							        	$('#datecreatedtoz').removeAttr('disabled');	
							        	$('#createdbyidz').removeAttr('disabled');		
							        	$('#mycompanyid').removeAttr('disabled');									
							        }	
							        else if(value=='6')
							        {
										//Hired
										//alert("Hired");
							        	//enable form fields
							        	$('#recruiter_useridz').removeAttr('disabled');
							        	$('#accountsidz').removeAttr('disabled');
							        	$('#positionidz').removeAttr('disabled');
							        	$('#startdatez').removeAttr('disabled');
							        	$('#enddatez').removeAttr('disabled');
							        	$('#dateneededfromz').removeAttr('disabled');
							        	$('#dateneededtoz').removeAttr('disabled');
							        	$('#areaofassignmentidz').removeAttr('disabled');							        								        	
							        	$('#firstnamez').removeAttr('disabled');
							        	$('#lastnamez').removeAttr('disabled');
							        	$('#sourcethruz').removeAttr('disabled');
							        	$('#firstchoicez').removeAttr('disabled','disabled');
							        	$('#secondchoicez').removeAttr('disabled','disabled');
							        	$('#prefworklocationz').removeAttr('disabled');							        	
							        	$('#emailz').removeAttr('disabled');
							        	$('#mobilenoz').removeAttr('disabled','disabled');
							        	$('#datecreatedfromz').removeAttr('disabled','disabled');
							        	$('#datecreatedtoz').removeAttr('disabled');	
							        	$('#createdbyidz').removeAttr('disabled');	
							        	
							        	//disable	
							        	$('#mycompanyid').get(0).selectedIndex = 0;
							        	$('#mycompanyid').attr('disabled','disabled');									
							        }
							        else if(value=='7')
							        {
										//Placement
										//alert("Placement");
							        	//enable form fields
							        	$('#recruiter_useridz').removeAttr('disabled');
							        	$('#accountsidz').removeAttr('disabled');
							        	$('#positionidz').removeAttr('disabled');
							        	$('#startdatez').removeAttr('disabled');
							        	$('#enddatez').removeAttr('disabled');
							        	$('#dateneededfromz').removeAttr('disabled');
							        	$('#dateneededtoz').removeAttr('disabled');
							        	$('#areaofassignmentidz').removeAttr('disabled');							        								        	
							        	$('#firstnamez').removeAttr('disabled');
							        	$('#lastnamez').removeAttr('disabled');
							        	$('#sourcethruz').removeAttr('disabled');
							        	$('#firstchoicez').removeAttr('disabled','disabled');
							        	$('#secondchoicez').removeAttr('disabled','disabled');
							        	$('#prefworklocationz').removeAttr('disabled');							        	
							        	$('#emailz').removeAttr('disabled');
							        	$('#mobilenoz').removeAttr('disabled','disabled');
							        	$('#datecreatedfromz').removeAttr('disabled','disabled');
							        	$('#datecreatedtoz').removeAttr('disabled');	
							        	$('#createdbyidz').removeAttr('disabled');		
							        	
							        	//disable
							        	$('#mycompanyid').get(0).selectedIndex = 0;
							        	$('#mycompanyid').attr('disabled','disabled');								
							        }							        
							        else
							        {
			        					//Not Selected
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
																var applicantstatusid = $("#applicantstatusidz").val();
																var recruiter_userid = $("#recruiter_useridz").val();
																var accountsid = $("#accountsidz").val();
																var positionid = $("#positionidz").val();
																var createdbyid = $("#createdbyidz").val();
																
																var startdate = $("#startdatez").val();
																var enddate = $("#enddatez").val();
																var dateneededfrom = $("#dateneededfromz").val();												
																var dateneededto = $("#dateneededtoz").val();
																
																var firstname = $("#firstnamez").val();
																var lastname = $("#lastnamez").val();
																var areaofassignmentid = $("#areaofassignmentidz").val();
																var sourcethru = $("#sourcethruz").val();																																												
																
																var firstchoice = $("#firstchoicez").val();
																var secondchoice = $("#secondchoicez").val();
																var prefjobfunc = $("#prefjobfuncz").val();
																var prefworklocation = $("#prefworklocationz").val();																												
																								
																var email = $("#emailz").val();
																var mobileno = $("#mobilenoz").val();
																var datecreatedfrom = $("#datecreatedfromz").val();
																var datecreatedto = $("#datecreatedtoz").val();	
																
																var mycompanyid	= $("#mycompanyid").val();	
																
																var companyqx = $("#companyqx").val();
																var positionqx = $("#positionqx").val();
																var reasonforleavingqx = $("#reasonforleavingqx").val();
																var schoolcollegeqx = $("#schoolcollegeqx").val();
																var degreeobtainedqx = $("#degreeobtainedqx").val();																																										
																																																					
																var o = $("#oz").val();
																var t = $("#tz").val();
																																																			
																var dataString = 'applicantstatusid='+ applicantstatusid+'&recruiter_userid='+ recruiter_userid+'&accountsid='+ accountsid+'&positionid='+ positionid+'&createdbyid='+ createdbyid
																+'&startdate='+ startdate+'&enddate='+ enddate+'&dateneededfrom='+ dateneededfrom+'&dateneededto='+ dateneededto+'&firstname='+ firstname
																+'&lastname='+ lastname+'&areaofassignmentid='+ areaofassignmentid+'&sourcethru='+ sourcethru+'&firstchoice='+ firstchoice+'&secondchoice='+ secondchoice
																+'&prefjobfunc='+ prefjobfunc+'&prefworklocation='+ prefworklocation+'&email='+ email+'&mobileno='+ mobileno+'&datecreatedfrom='+ datecreatedfrom
																+'&datecreatedto='+ datecreatedto+'&o='+ o+'&t='+ t+'&mycompanyid='+ mycompanyid+'&companyqx='+ companyqx+'&positionqx='+ positionqx
																+'&reasonforleavingqx='+ reasonforleavingqx+'&schoolcollegeqx='+ schoolcollegeqx+'&degreeobtainedqx='+ degreeobtainedqx;								
																
																//alert(dataString);
												
																			$.ajax({
																			type: "GET",
																			url: "searchadvancerecruitment.php",
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
				
																						    //$('#defaultForm2x9')[0].reset(); 																							    																																									  
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
				
											}
						    });		        		
                
	//-----------------------------------------------------------
});
