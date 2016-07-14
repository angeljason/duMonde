function saveremarks() {
										
				var jomonthtodateid = $("#jomonthtodateid").val();
				//var remarks2zxy = $("#remarks2zxy").val();
				var remarks2zxy= CKEDITOR.instances.remarks2zxy.getData();
																																
				var dataString = 'jomonthtodateid='+ jomonthtodateid+'&remarks2zxy='+ escape(remarks2zxy);								
				
				//alert(dataString);
				
							$.ajax({
							type: "POST",
							url: "updatejoremarks.php",
							data: dataString,
							cache: false,									
										beforeSend: function(html) 
										{			   
											$("#flashaupdateremarks").show();
											$("#flashaupdateremarks").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Updating Remarks...Please Wait.');				
										},															
									  success: function(html)
									    {
										   $("#insert_updateremarks").show();
										   $('#insert_updateremarks').empty();
										   $("#insert_updateremarks").append(html);
										   $("#flashaupdateremarks").hide();											   															  
									   },
									  error: function(html)
									    {
										   $("#insert_updateremarks").show();
										   $('#insert_updateremarks').empty();
										   $("#insert_updateremarks").append(html);
										   $("#flashaupdateremarks").hide();													   												   		
									   }											   
					             });

}	
	
function getexporttoxls23() { 

           $('#mytable').tableExport({type:'excel',escape:'false'});
	}

function gototop4() {			
	  		//event.preventDefault();
			$('html, body').animate({scrollTop:0}, 'slow'); 				
				$('#insert_insert_user').fadeOut(500, function() {
				   $('#insert_insert_user').empty();
				});
				
				$("#flash5").hide();		
				$("#flash").hide();
				
	}  
function showupdatcalendar(id2) {
										
				//var id = $("#id").val();
				var id2 = id2;
				//alert(id2);	
												
																																	
				var dataString = 'id2='+ id2;									
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "jomodalcalendar.php",
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

function getEnableMonth()
{
	var isoyear = $("#isoyear").val();
	
	//alert(isoyear);
	
	if((isoyear == null)||(isoyear == '')){
		$('#monthno_fromyear').attr('disabled','disabled');
	}
	else{
		$('#monthno_fromyear').removeAttr('disabled');
	}
}

function getWeekly() {
//alert("test");
	var isoyear = $("#isoyear").val();
	var monthno_fromyear = $("#monthno_fromyear").val();
	
	var dataString = 'isoyear='+ isoyear+'&monthno_fromyear='+ monthno_fromyear;
	
	$.ajax({
							type: "GET",
							url: "shownotice.php",
							data: dataString,
							cache: false,									
										beforeSend: function(html) 
										{			   
											$("#flash_xyz").show();
											$("#flash_xyz").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading notice...Please Wait.');				
										},															
									  success: function(html)
									    {
										   $("#insert_search_xyz").show();
										   $('#insert_search_xyz').empty();
										   $("#insert_search_xyz").append(html);
										   $("#flash_xyz").hide();	
										   															   
									   },
									  error: function(html)
									    {
										   $("#insert_search_update").show();
										   $('#insert_search_update').empty();
										   $("#insert_search_update").append(html);
										   $("#flash_xyz").hide();													   												   		
									   }											   
					             });
}
function joupdate() {
										
				//var monthno_fromyear4 = $("#monthno_fromyear4").val();
				var jodetailid = $("#jodetailid").val();
				var beginningjo = $("#beginningjo").val();
				var newjo = $("#newjo").val();
				var replacementjo = $("#replacementjo").val();
				var cancelledjo = $("#cancelledjo").val();
				//var remarks2zx = $("#remarks2zx").val();
				var remarks2zx = CKEDITOR.instances.remarks2zx.getData();
				//alert(id);	
												
				/*var searchstring =  '';																
				if(id ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+id;}
				*/																																	
				var dataString = 'jodetailid='+ jodetailid+'&beginningjo='+ beginningjo
				+'&newjo='+ newjo+'&replacementjo='+ replacementjo+'&cancelledjo='+ cancelledjo+'&remarks2zx='+ escape(remarks2zx);								
				
				//alert(dataString);
				
							$.ajax({
							type: "POST",
							url: "updatejo.php",
							data: dataString,
							cache: false,									
										beforeSend: function(html) 
										{			   
											$("#flash_update").show();
											$("#flash_update").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Updating...Please Wait.');				
										},															
									  success: function(html)
									    {
										   $("#insert_search_update").show();
										   $('#insert_search_update').empty();
										   $("#insert_search_update").append(html);
										   $("#flash_update").hide();	
										   															   
									   },
									  error: function(html)
									    {
										   $("#insert_search_update").show();
										   $('#insert_search_update').empty();
										   $("#insert_search_update").append(html);
										   $("#flash_update").hide();													   												   		
									   }											   
					             });

}	

function showmodaljo(id2) {
										
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
							url: "jomodal.php",
							data: dataString,
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modal33").show();
										   $('#insert_modal33').empty();
										   $("#insert_modal33").append(html);																	  
									   },
									  error: function(html)
									    {
										   $("#insert_modal33").show();
										   $('#insert_modal33').empty();
										   $("#insert_modal33").append(html);	
										   $("#insert_modal33").hide();											   												   		
									   }											   
					             });

}
function showjologs(id2) {
										
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
							url: "jomodallogs.php",
							data: dataString,
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modal44").show();
										   $('#insert_modal44').empty();
										   $("#insert_modal44").append(html);																	  
									   },
									  error: function(html)
									    {
										   $("#insert_modal44").show();
										   $('#insert_modal44').empty();
										   $("#insert_modal44").append(html);	
										   $("#insert_modal44").hide();											   												   		
									   }											   
					             });

}
function showhiredlogs(id2) {
										
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
							url: "johiredmodallogs.php",
							data: dataString,
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modal44").show();
										   $('#insert_modal44').empty();
										   $("#insert_modal44").append(html);																	  
									   },
									  error: function(html)
									    {
										   $("#insert_modal44").show();
										   $('#insert_modal44').empty();
										   $("#insert_modal44").append(html);	
										   $("#insert_modal44").hide();											   												   		
									   }											   
					             });

}
function showmodalupodatejo(id2) {
										
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
							url: "jomodalupdate.php",
							data: dataString,
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modal44").show();
										   $('#insert_modal44').empty();
										   $("#insert_modal44").append(html);																	  
									   },
									  error: function(html)
									    {
										   $("#insert_modal44").show();
										   $('#insert_modal44').empty();
										   $("#insert_modal44").append(html);	
										   $("#insert_modal44").hide();											   												   		
									   }											   
					             });

}

//delete button
$('#deletebtn').click(function() {
   event.preventDefault();	
});	

function confirmed(id2) {
	var id2 = id2;
	var dataString = 'id2='+ id2;

																																																																																																																												
																var dataString = 'joid='+ id2;																								
																//alert(dataString);
												
																			$.ajax({
																			type: "POST",
																			url: "deletejo.php",
																			data: dataString,
																			cache: false,									
																						beforeSend: function(html) 
																						{			   
																							$("#flash8").show();
																							$("#flash8").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Deleting Job Order..Please Wait.');		
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
  $("#searchBtn4").click(function(){
        
				var monthno_fromyear4 = $("#monthno_fromyear4").val();
				var isoyear4 = $("#isoyear4").val();
				var periodcoveredfrom4 = $("#periodcoveredfrom4").val();
				var periodcoveredto4 = $("#periodcoveredto4").val();
				var quarter4 = $("#quarter4").val();
				var recruiter_userid4 = $("#recruiter_userid4").val();
				var datecreatedfrom4 = $("#datecreatedfrom4").val();
				var datecreatedto4 = $("#datecreatedto4").val();
				var statusid4 = $("#statusid4").val();
				var recruiterid4 = $("#recruiterid4").val();			
				var o =$("#o").val();
				var t =$("#t").val();
				var accountsid4	 =$("#accountsid4").val();
														
																																
				var dataString = 'monthno_fromyear4='+ monthno_fromyear4+'&isoyear4='+ isoyear4
				+'&periodcoveredfrom4='+ periodcoveredfrom4+'&periodcoveredto4='+ periodcoveredto4+'&quarter4='+ quarter4
				+'&recruiter_userid4='+ recruiter_userid4+'&datecreatedfrom4='+ datecreatedfrom4
				+'&datecreatedto4='+ datecreatedto4+'&statusid4='+ statusid4+'&recruiterid4='+ recruiterid4+'&o='+ o+'&t='+ t+'&accountsid4='+ accountsid4;									
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "searchjo.php",
							data: dataString,
							cache: false,																							
										beforeSend: function(html) 
										{			   
											$("#flash4").show();
											$("#flash4").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching...Please Wait.');	
											
											$("#flash").show();
											$("#flash").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading Data...Please Wait.');
										},															
									  success: function(html)
									    {
										    $("#insert_search").show();
										    $('#insert_search').empty();
										    $("#insert_search").append(html);
										    $("#flash4").hide();	
										    $("#flash").hide();	
										    
										    scrollToID('#' + insert_search, 750);																	   																   
									   },
									  error: function(html)
									    {
										   $("#insert_search").show();
										   $('#insert_search').empty();
										   $("#insert_search").append(html);
										   $("#flash4").hide();		
										   $("#flash").hide();												   												   		
									   }												   
					             });        
        
        
    });
  $("#resetBtn4").click(function(){
        $('#form44')[0].reset(); 
    });
$("#searchBtn5").click(function(){
        		var appstat5 = $("#appstat5").val();
				var monthno_fromyear5 = $("#monthno_fromyear5").val();
				var isoyear5 = $("#isoyear5").val();
				var periodcoveredfrom5 = $("#periodcoveredfrom5").val();
				var periodcoveredto5 = $("#periodcoveredto5").val();
				var quarter5 = $("#quarter5").val();
				var recruiter_userid5 = $("#recruiter_userid5").val();
				var datecreatedfrom5 = $("#datecreatedfrom5").val();
				var datecreatedto5 = $("#datecreatedto5").val();
				var statusid5 = $("#statusid5").val();
				var recruiterid5 = $("#recruiterid5").val();			
				var o5 =$("#o5").val();
				var t5 =$("#t5").val();
				var accountsid5	 =$("#accountsid5").val();
														
																																
				var dataString = 'appstat5='+ appstat5+'&monthno_fromyear5='+ monthno_fromyear5+'&isoyear5='+ isoyear5
				+'&periodcoveredfrom5='+ periodcoveredfrom5+'&periodcoveredto5='+ periodcoveredto5+'&quarter5='+ quarter5
				+'&recruiter_userid5='+ recruiter_userid5+'&datecreatedfrom5='+ datecreatedfrom5
				+'&datecreatedto5='+ datecreatedto5+'&statusid5='+ statusid5+'&recruiterid5='+ recruiterid5+'&o5='+ o5+'&t5='+ t5+'&accountsid5='+ accountsid5;									
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "searchappjo.php",
							data: dataString,
							cache: false,																							
										beforeSend: function(html) 
										{			   
											$("#flash5").show();
											$("#flash5").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Searching...Please Wait.');	
											
											$("#flash").show();
											$("#flash").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading Data...Please Wait.');
										},															
									  success: function(html)
									    {
										    $("#insert_app").show();
										    $('#insert_app').empty();
										    $("#insert_app").append(html);
										    $("#flash5").hide();	
										    $("#flash").hide();	
										    
										    scrollToID('#' + insert_app, 750);																	   																   
									   },
									  error: function(html)
									    {
										   $("#insert_app").show();
										   $('#insert_app').empty();
										   $("#insert_app").append(html);
										   $("#flash5").hide();		
										   $("#flash").hide();												   												   		
									   }												   
					             });        
        
        
    });
  $("#resetBtn5").click(function(){
        $('#form45')[0].reset(); 
    });        
     

function modalclose() {
	 //close modal	
	 $('#insert_modal33').modal("hide");
}

function modalcloseall() {
$('.modal').modal('hide');
}

function modalclose44() {
	 //close modal	
	 $('#insert_modal44').modal("hide");
}


$('#insert_modal33').on('hidden', function () {
   // location.reload();
    var hash = document.URL.substr(document.URL.indexOf('#')+1) 
    //alert (hash);
    if(hash == 'currentmonthjo')
    {
    	//alert (hash);
    	$('#tabUL a[href="#currentmonthjo"]').trigger('click');
    }
    else if(hash == 'nextmonthjo')
    {
    	$('#tabUL a[href="#nextmonthjo"]').trigger('click');
    }
    else if(hash == 'lastmonthjo')
    {
    	$('#tabUL a[href="#lastmonthjo"]').trigger('click');
    }   
    else if(hash == 'newjoborders')
    {
    	$('#tabUL a[href="#newjoborders"]').trigger('click');
    }  
    else
    {
    	$('#tabUL a[href="#createjoborders"]').trigger('click');
    }
       
})


function modalcloseupdate() {
	 //close modal	
	 $('#insert_modal44').modal("hide");
}

function getexporttoxls() { 
	$("#insert_search").btechco_excelexport({
                containerid: "insert_search", datatype: $datatype.Table
            });
	} 
function gototop() {			
	  		//event.preventDefault();
			$('html, body').animate({scrollTop:0}, 'slow'); 				
				$('#insert_search').fadeOut(500, function() {
				   $('#insert_search').empty();
				});
				
				$("#flash4").hide();		
				$("#flash").hide();
				
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
	//initialize datepicker
	$('#periodcoveredfrom4').datepicker();
	$('#periodcoveredto4').datepicker();	
	$('#datecreatedfrom4').datepicker();
	$('#datecreatedto4').datepicker();		
	
	// navigation click actions	
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});
	
	 $("#searchBtn4").click(function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});	
	
	$('.popovercreateactionslip').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});		
	
	$('#tabUL a[href="#createjoborders"]').on('click', function(event){				
			gototop(); 
	});	
	
	$('#tabUL a[href="#newjoborders"]').on('click', function(event){				
			gototop(); 
			shownewjoborder();
			
	});	
	
	$("#deletebtn").popConfirm({
	   	title: "Are you sure you want to Delete?", // The title of the confirm
        content: "This transaction will permanently erase the job order in the database. Do you want to continue?", // The message of the confirm
        placement: "right", // The placement of the confirm (Top, Right, Bottom, Left)
        container: "body", // The html container
        yesBtn: "Yes",
        noBtn: "No"
   });
	
	function shownewjoborder() {
							$.ajax({
							type: "GET",
							url: "loadnewjoborder.php",
							cache: false,	
										beforeSend: function(html) 
										{			   
											$("#insert_jo2").show();
											$("#insert_jo2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insert_jo").show();
										   $('#insert_jo').empty();
										   $("#insert_jo").append(html);
										   $("#insert_jo2").hide();
																	   
									   },
									  error: function(html)
									    {
										   $("#insert_jo").show();
										   $('#insert_jo').empty();
										   $("#insert_jo").append(html);	
										   $("#insert_jo").hide();	
										   $("#insert_jo2").hide();										   												   		
									   }											   
					             });		
	}
	
	
	$('#tabUL a[href="#currentmonthjo"]').on('click', function(event){				
			gototop(); 
			showcurrentmonthjo();
				
	});	
	function showcurrentmonthjo() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "loadcurrentjoborder.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_jo3").show();
											$("#insert_jo3").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_jo3").show();
										   $('#insertbody_jo3').empty();
										   $("#insertbody_jo3").append(html);
										   $("#insert_jo3").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_jo3").show();
										   $('#insertbody_jo3').empty();
										   $("#insertbody_jo3").append(html);	
										   $("#insertbody_jo3").hide();	
										   $("#insert_jo3").hide();										   												   		
									   }													   
					             });		
	}
	
	$('#navUL a[href="#profile-pills"]').on('click', function(event){				
			gototop(); 
			showmyforwarded();
				
	});	
	function showmyforwarded() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "loadmyjoborder.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_jo8").show();
											$("#insert_jo8").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_jo8").show();
										   $('#insertbody_jo8').empty();
										   $("#insertbody_jo8").append(html);
										   $("#insert_jo8").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_jo8").show();
										   $('#insertbody_jo8').empty();
										   $("#insertbody_jo8").append(html);	
										   $("#insertbody_jo8").hide();	
										   $("#insert_jo8").hide();										   												   		
									   }													   
					             });		
	}
	
	$('#tabUL a[href="#nextmonthjo"]').on('click', function(event){				
			gototop(); 
			shownextmonthjo();						
	});	
	function shownextmonthjo() {
							$.ajax({
							type: "GET",
							url: "loadnextjoborder.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_jo4").show();
											$("#insert_jo4").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_jo4").show();
										   $('#insertbody_jo4').empty();
										   $("#insertbody_jo4").append(html);
										   $("#insert_jo4").hide();																	  
									   },
									  error: function(html)
									    {
										   $("#insertbody_jo4").show();
										   $('#insertbody_jo4').empty();
										   $("#insertbody_jo4").append(html);	
										   $("#insertbody_jo4").hide();	
										   $("#insert_jo4").hide();										   												   		
									   }													   
					             });		
		}	
		
		
	$('#tabUL a[href="#lastmonthjo"]').on('click', function(event){				
			gototop(); 
			showlastmonthjo();
			
	});	
	function showlastmonthjo() {
							$.ajax({
							type: "GET",
							url: "loadlastjoborder.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_jo5").show();
											$("#insert_jo5").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_jo5").show();
										   $('#insertbody_jo5').empty();
										   $("#insertbody_jo5").append(html);
										   $("#insert_jo5").hide();																	  
									   },
									  error: function(html)
									    {
										   $("#insertbody_jo5").show();
										   $('#insertbody_jo5').empty();
										   $("#insertbody_jo5").append(html);	
										   $("#insertbody_jo5").hide();	
										   $("#insert_jo5").hide();										   												   		
									   }													   
					             });
		}	
	$('#tabUL a[href="#quickreport"]').on('click', function(event){				
			gototop(); 
	});

	
    //-------------------popover----------------------------------
$('.popoverinsertjo').popover({
                trigger: "hover",
                placement: "left",
                content: "View Job Order",	
                 });
                 
$('.popoverviewjoapplicants').popover({
                trigger: "hover",
                placement: "left",
                content: "View Applicants",	
                 });
                                  
$('.popoverupdatejo').popover({
                trigger: "hover",
                placement: "left",
                content: "Update Job Order",	
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
    
     // on load of the page: switch to the currently selected tab
    var hash = window.location.hash;
    $('#tabUL a[href="' + hash + '"]').tab('show');
    										
    									 //------------------------bootstrap validator------------------		
									      $('#form33').on('init.field.bv', function(e, data) {	
									        var $parent    = data.element.parents('.form-group'),
									            $icon      = $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]'),
									            options    = data.bv.getOptions(),                      // Entire options
									            validators = data.bv.getOptions(data.field).validators; // The field validators
									
									        if (validators.notEmpty && options.feedbackIcons && options.feedbackIcons.required) {
									            $icon.addClass(options.feedbackIcons.required).show();
									        }
									    })
									  .bootstrapValidator({
											live: 'enabled',
									        message: 'This value is not valid',
									        submitButtons: 'button[type="button"]',	
									        feedbackIcons: {
									                	required: 'glyphicon glyphicon-asterisk',
									                    valid: 'glyphicon glyphicon-ok',
									                    invalid: 'glyphicon glyphicon-remove',
									                    validating: 'glyphicon glyphicon-refresh'
									        },
									        //--fields
									        fields: {
													            monthno_fromyear: {
													                validators: {
												                            notEmpty: {
												                                message: 'The Month is required'
												                            }
													                }
													            },
													            isoyear: {
													                validators: {
												                            notEmpty: {
												                                message: 'Year is required'
												                            }
													                }
													            },
													            recruiter_userid: {
													                validators: {
												                            notEmpty: {
												                                message: 'Recruiter Name is required'
												                            }
													                }
													            },
													           accountsid: {
													                validators: {
												                            notEmpty: {
												                                message: 'Client Name is required'
												                            }
													                }
													            },	
													            joreplacement: {
													                validators: {
												                            integer: {
																			    message: 'Replacement JO is not an integer'
																			}	
													                }
													            },	
													            jocancelled: {
													                validators: {
												                            integer: {
																			    message: 'Cancelled JO is not an integer'
																			}	
													                }
													            },		
													            remarks2z: {
													                validators: {
												                            regexp: {
																				regexp: /^[a-zA-Z0-9_\-,.() ]+$/,
																				message: 'Remarks can only consist of alphabetical,space,comma,dash, number, dot and underscore'
																			}	
													                }
													            },	
													            jonew: {
													                validators: {
												                            notEmpty: {
												                                message: 'New JO is required'
												                            },
																			integer: {
																			    message: 'New JO is not an integer'
																			}												                            
													                }
													            }				                        
									          }  
									          //--fields
									    })
									    .on('error.field.bv', function(e, data) {
									    	//alert('error');
									        console.log(data.field, data.element, '-->error');
									        //$("#validateBtn").prop('disabled', true);	
									    })
									    .on('success.field.bv', function(e, data) {
									        console.log(data.field, data.element, '-->success'); 
									    });
									            
									    // Validate the form manually
									    $('#validateBtn').click(function() {
									    	//alert('test');
									        $('#form33').bootstrapValidator('validate');
									        		        	var bootstrapValidator = $('#form33').data('bootstrapValidator');
																var stat1 = bootstrapValidator.isValid();
																if(stat1=='1')
																{
																	//alert('success');
																	
																					var monthno_fromyear = $("#monthno_fromyear").val();
																					var isoyear = $("#isoyear").val();
																					var recruiter_userid = $("#recruiter_userid").val();	
																					var accountsid = $("#accountsid").val();
																					var jonew = $("#jonew").val();
																					var joreplacement = $("#joreplacement").val();	
																					var jocancelled = $("#jocancelled").val();
																					//var jobeginninngradiobutton = $("#jobeginninngradiobutton").val();
																					var jobeginninngradiobutton = $('input[name=jobeginninngradiobutton]:checked').val();	
																					var jobeginninng= $("#jobeginninng").val();
																					//var remarks2z= encodeURIComponent($("#remarks2z").val());
																					var remarks2z= CKEDITOR.instances.remarks2z.getData();
																					 
																																																																																																							
																					var dataString = 'monthno_fromyear='+ monthno_fromyear+'&isoyear='+ isoyear
																					+'&recruiter_userid='+ recruiter_userid+'&accountsid='+ accountsid+'&jonew='+ jonew
																					+'&joreplacement='+ joreplacement+'&jocancelled='+ jocancelled
																					+'&jobeginninngradiobutton='+ jobeginninngradiobutton+'&jobeginninng='+ jobeginninng+'&remarks2z='+ escape(remarks2z);										
																					
																					//alert(dataString);
																					
																								$.ajax({
																								type: "POST",
																								url: "createjoborder.php",
																								data: dataString,
																								//data: { html: dataString },
																								cache: false,									
																											beforeSend: function(html) 
																											{			   
																												$("#flash2").show();
																												$("#flash2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Creating Job Order...Please Wait.');				
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
																											   $("#insert_search2").show();
																											   $('#insert_search2').empty();
																											   $("#insert_search2").append(html);
																											   $("#flash2").hide();													   												   		
																										   }											   
																						             });
																						             
																}
									    });
									
									    $('#resetBtn').click(function() {
									        $('#form33').data('bootstrapValidator').resetForm(true);
									    });
										//disable BeginningJO
										$("#jobeginninng").prop('disabled', true);
										
									    // Enable street/city/country validators if user want to ship to other address
									    $('input[name="jobeginninngradiobutton"]').on('change', function() {
									        var bootstrapValidator = $('#form33').data('bootstrapValidator'),
									            shipNewAddress     = ($(this).val() == '2');
									
									        shipNewAddress ? $('#newAddress').find('.form-control').removeAttr('disabled')
									                       : $('#newAddress').find('.form-control').attr('disabled', 'disabled');
									
									        bootstrapValidator.enableFieldValidators('jobeginninng', shipNewAddress);
									    });									    
									    
     	                				//-!-----------------------bootstrap validator------------------
});
