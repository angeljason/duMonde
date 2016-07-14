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
$('#tabUL a[href="#placement"]').on('click', function(event){				
			gototop(); 
			showallplacement();
				
});
$('#allplacementid').click(function() {				
			gototop(); 
			showallplacement();
				
});	
function showallplacement() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "loadplacement.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_allplacement").show();
											$("#insert_allplacement").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_allplacement").show();
										   $('#insertbody_allplacement').empty();
										   $("#insertbody_allplacement").append(html);
										   $("#insert_allplacement").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_allplacement").show();
										   $('#insertbody_allplacement').empty();
										   $("#insertbody_allplacement").append(html);	
										   $("#insertbody_allplacement").hide();	
										   $("#insert_allplacement").hide();										   												   		
									   }													   
					             });		
}
$('#tabUL a[href="#hired"]').on('click', function(event){				
			gototop(); 
			showallhired();
				
});
$('#allhiredid').click(function() {				
			gototop(); 
			showallhired();
				
});	
function showallhired() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "loadhired.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_allhired").show();
											$("#insert_allhired").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_allhired").show();
										   $('#insertbody_allhired').empty();
										   $("#insertbody_allhired").append(html);
										   $("#insert_allhired").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_allhired").show();
										   $('#insertbody_allhired').empty();
										   $("#insertbody_allhired").append(html);	
										   $("#insertbody_allhired").hide();	
										   $("#insert_allhired").hide();										   												   		
									   }													   
					             });		
}
$('#tabUL a[href="#activefile"]').on('click', function(event){				
			gototop(); 
			showallactivefile();
				
});
$('#allactivefileid').click(function() {				
			gototop(); 
			showallactivefile();
				
});	
function showallactivefile() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "loadactivefile.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_allactivefile").show();
											$("#insert_allactivefile").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_allactivefile").show();
										   $('#insertbody_allactivefile').empty();
										   $("#insertbody_allactivefile").append(html);
										   $("#insert_allactivefile").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_allactivefile").show();
										   $('#insertbody_allactivefile').empty();
										   $("#insertbody_allactivefile").append(html);	
										   $("#insertbody_allactivefile").hide();	
										   $("#insert_allactivefile").hide();										   												   		
									   }													   
					             });		
}
$('#tabUL a[href="#notqualified"]').on('click', function(event){				
			gototop(); 
			showallnotqualified();
				
});
$('#allnotqualified').click(function() {				
			gototop(); 
			showallnotqualified();
				
});	
function showallnotqualified() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "loadallnotqualified.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_allnotqualified").show();
											$("#insert_allnotqualified").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_allnotqualified").show();
										   $('#insertbody_allnotqualified').empty();
										   $("#insertbody_allnotqualified").append(html);
										   $("#insert_allnotqualified").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_allnotqualified").show();
										   $('#insertbody_allnotqualified').empty();
										   $("#insertbody_allnotqualified").append(html);	
										   $("#insertbody_allnotqualified").hide();	
										   $("#insert_allnotqualified").hide();										   												   		
									   }													   
					             });		
}
$('#tabUL a[href="#qualified"]').on('click', function(event){				
			gototop(); 
			showallqualified();
				
});
$('#allqualifiedid').click(function() {				
			gototop(); 
			showallqualified();
				
});	
function showallqualified() {
		//alert('test');
		
							$.ajax({
							type: "GET",
							url: "loadallqualified.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_allqualified").show();
											$("#insert_allqualified").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_allqualified").show();
										   $('#insertbody_allqualified').empty();
										   $("#insertbody_allqualified").append(html);
										   $("#insert_allqualified").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_allqualified").show();
										   $('#insertbody_allqualified').empty();
										   $("#insertbody_allqualified").append(html);	
										   $("#insertbody_allqualified").hide();	
										   $("#insert_allqualified").hide();										   												   		
									   }													   
					             });		
}

$('#tabUL a[href="#new"]').on('click', function(event){				
			gototop(); 
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
											$("#insert_new").show();
											$("#insert_new").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_new").show();
										   $('#insertbody_new').empty();
										   $("#insertbody_new").append(html);
										   $("#insert_new").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_new").show();
										   $('#insertbody_new').empty();
										   $("#insertbody_new").append(html);	
										   $("#insertbody_new").hide();	
										   $("#insert_new").hide();										   												   		
									   }													   
					             });		
}
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
$('#navUL6 a[href="#profile-pills6"]').on('click', function(event){				
			gototop(); 
			showmynotqualified();						
	});	
	function showmynotqualified() {
							$.ajax({
							type: "GET",
							url: "loadmynotqualified.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_app7").show();
											$("#insert_app7").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_app7").show();
										   $('#insertbody_app7').empty();
										   $("#insertbody_app7").append(html);
										   $("#insert_app7").hide();																	  
									   },
									  error: function(html)
									    {
										   $("#insertbody_app7").show();
										   $('#insertbody_app7').empty();
										   $("#insertbody_app7").append(html);	
										   $("#insertbody_app7").hide();	
										   $("#insert_app7").hide();										   												   		
									   }													   
					             });
}
$('#navUL8 a[href="#profile-pills8"]').on('click', function(event){				
			gototop(); 
			showmyqualified();						
	});	
function showmyqualified() {
							$.ajax({
							type: "GET",
							url: "loadmyqualified.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_app8").show();
											$("#insert_app8").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_app8").show();
										   $('#insertbody_app8').empty();
										   $("#insertbody_app8").append(html);
										   $("#insert_app8").hide();																	  
									   },
									  error: function(html)
									    {
										   $("#insertbody_app8").show();
										   $('#insertbody_app8').empty();
										   $("#insertbody_app8").append(html);	
										   $("#insertbody_app8").hide();	
										   $("#insert_app8").hide();										   												   		
									   }													   
					             });
}
$('#navUL0 a[href="#profile-pills0"]').on('click', function(event){				
			gototop(); 
			showmyactiveapplicants();						
	});	
	function showmyactiveapplicants() {
							$.ajax({
							type: "GET",
							url: "loadmyactiveapplicants.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_app6").show();
											$("#insert_app6").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_app6").show();
										   $('#insertbody_app6').empty();
										   $("#insertbody_app6").append(html);
										   $("#insert_app6").hide();																	  
									   },
									  error: function(html)
									    {
										   $("#insertbody_app6").show();
										   $('#insertbody_app6').empty();
										   $("#insertbody_app6").append(html);	
										   $("#insertbody_app6").hide();	
										   $("#insert_app6").hide();										   												   		
									   }													   
					             });	
					             	
}
$('#navUL2 a[href="#profile-pills2"]').on('click', function(event){				
			gototop(); 
			showmyplacedapplicants();						
	});	
	function showmyplacedapplicants() {
							$.ajax({
							type: "GET",
							url: "loadmyplacedapplicants.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_app4").show();
											$("#insert_app4").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_app4").show();
										   $('#insertbody_app4').empty();
										   $("#insertbody_app4").append(html);
										   $("#insert_app4").hide();																	  
									   },
									  error: function(html)
									    {
										   $("#insertbody_app4").show();
										   $('#insertbody_app4').empty();
										   $("#insertbody_app4").append(html);	
										   $("#insertbody_app4").hide();	
										   $("#insert_app4").hide();										   												   		
									   }													   
					             });		
		}
$('#navUL1 a[href="#profile-pills1"]').on('click', function(event){				
			gototop(); 
			showmyhiredapplicants();						
	});	
	function showmyhiredapplicants() {
							$.ajax({
							type: "GET",
							url: "loadmyhiredapplicants.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_app5").show();
											$("#insert_app5").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_app5").show();
										   $('#insertbody_app5').empty();
										   $("#insertbody_app5").append(html);
										   $("#insert_app5").hide();																	  
									   },
									  error: function(html)
									    {
										   $("#insertbody_app5").show();
										   $('#insertbody_app5').empty();
										   $("#insertbody_app5").append(html);	
										   $("#insertbody_app5").hide();	
										   $("#insert_app5").hide();										   												   		
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

function getactionslip(id) {
										
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
							url: "actionslip.php",
							data: dataString,
							cache: false,									
										beforeSend: function(html) 
										{			   
											$("#flash").show();
											$("#flash").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},															
									  success: function(html)
									    {
										   $("#insert_modal5").show();
										   $('#insert_modal5').empty();
										   $("#insert_modal5").append(html);
										   $("#flash").hide();	
										   
										   scrollToID('#' + insert_search, 750);																	   
									   },
									  error: function(html)
									    {
										   $("#insert_modal5").show();
										   $('#insert_modal5').empty();
										   $("#insert_modal5").append(html);
										   $("#flash").hide();													   												   		
									   }											   
					             });

}

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
							url: "recruitmentmodal.php",
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

function showmodaloverwrite(id2,applicantprofilestatid) {
										
				//var id = $("#id").val();
				var id2 = id2;
				var applicantprofilestatid = applicantprofilestatid;
				//alert(applicantprofilestat);	
																																													
				var dataString = 'id2='+ id2+'&applicantprofilestatid='+ applicantprofilestatid;									
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "modaloverwrite.php",
							data: dataString,
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modal3").show();
										   $('#insert_modal3').empty();
										   $("#insert_modal3").append(html);																	  
									   },
									  error: function(html)
									    {
										   $("#insert_modal3").show();
										   $('#insert_modal3').empty();
										   $("#insert_modal3").append(html);	
										   $("#insert_modal3").hide();											   												   		
									   }											   
					             });
}

function showmodalplacement(id2,applicantprofilestatid) {
										
				//var id = $("#id").val();
				var id2 = id2;
				var applicantprofilestatid = applicantprofilestatid;
				//alert(applicantprofilestat);	
												
				/*var searchstring =  '';																
				if(id ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+id;}
				*/																																	
				var dataString = 'id2='+ id2+'&applicantprofilestatid='+ applicantprofilestatid;									
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "modalplacement.php",
							data: dataString,
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modal4").show();
										   $('#insert_modal4').empty();
										   $("#insert_modal4").append(html);																	  
									   },
									  error: function(html)
									    {
										   $("#insert_modal4").show();
										   $('#insert_modal4').empty();
										   $("#insert_modal4").append(html);	
										   $("#insert_modal4").hide();											   												   		
									   }											   
					             });
}
function showmodalplacement_backout(id2) {
										

				var id2 = id2;																																
				var dataString = 'id2='+ id2;									
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "modalplacement_backout.php",
							data: dataString,
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modalbackout").show();
										   $('#insert_modalbackout').empty();
										   $("#insert_modalbackout").append(html);																	  
									   },
									  error: function(html)
									    {
										   $("#insert_modalbackout").show();
										   $('#insert_modalbackout').empty();
										   $("#insert_modalbackout").append(html);	
										   $("#insert_modalbackout").hide();											   												   		
									   }											   
					             });
}
function showmodalactionslip(id2,applicantprofilestatid) {
										
				//var id = $("#id").val();
				var id2 = id2;
				var applicantprofilestatid = applicantprofilestatid;
				//alert(applicantprofilestat);	
												
				/*var searchstring =  '';																
				if(id ==''){searchstring=searchstring;}else{searchstring=searchstring+" "+id;}
				*/																																	
				var dataString = 'id2='+ id2+'&applicantprofilestatid='+ applicantprofilestatid;									
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "modalactionslip.php",
							data: dataString,
							cache: false,																							
									  success: function(html)
									    {
										   $("#insert_modal4").show();
										   $('#insert_modal4').empty();
										   $("#insert_modal4").append(html);																	  
									   },
									  error: function(html)
									    {
										   $("#insert_modal4").show();
										   $('#insert_modal4').empty();
										   $("#insert_modal4").append(html);	
										   $("#insert_modal4").hide();											   												   		
									   }											   
					             });
}
function modalclose() {
	 //close modal	
	 $('#insert_modal2').modal("hide");
}

function modalclose2() {
	 //close modal	
	 $('#insert_modal').modal("hide");
	 //$('#insert_modal').modal("hide");
}

function modalclose3() {
	 //close modal	
	 $('#insert_modal4').modal("hide");
	 //$('#insert_modal').modal("hide");
}

function modalclose4() {
	 //close modal	
	 $('#insert_modal3').modal("hide");
	 //$('#insert_modal').modal("hide");
}

function recruitapplicant() {
	
							$('#mymodalform').bootstrapValidator('validate');
		        			var bootstrapValidator = $('#mymodalform').data('bootstrapValidator');
							var stat2 = bootstrapValidator.isValid();
							if(stat2=='1')
							{
										
									var myapplicantid = $("#myapplicantid").val();
									var accountid = $("#accountid").val();
									var positionid = $("#positionid").val();	
									var forwardprofileid = $("#forwardprofileid").val();
									var statusid = $("#statusid").val();
									var remarks = $("#remarks").val();	
									var companyid = $("#companyid").val();
									var userid = $("#userid").val();						
																																																	
									var dataString = 'myapplicantid='+ myapplicantid+'&accountid='+ accountid
									+'&positionid='+ positionid+'&forwardprofileid='+ forwardprofileid+'&statusid='+ statusid
									+'&remarks='+ remarks+'&companyid='+ companyid+'&userid='+ userid;										
									
									//alert(dataString);
									
												$.ajax({
												type: "GET",
												url: "recruit.php",
												data: dataString,
												cache: false,									
															beforeSend: function(html) 
															{			   
																$("#flashapplicantid").show();
																$("#flashapplicantid").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Submitting Data...Please Wait.');				
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

function overwrite() {
							
				var statusid = $("#statusid").val();
				var myapplicantid = $("#myapplicantid").val();						
				var companyid = $("#companyid").val();
				var userid = $("#userid").val();
				var recruitprofileid = $("#recruitprofileid").val();	
				
				var oldstatusid = $("#oldstatusid").val();
				var applicantprofilestatid = $("#applicantprofilestatid").val();
				var moduleid = $("#moduleid").val();	
																																																										
				var dataString = 'myapplicantid='+ myapplicantid+'&statusid='+ statusid
				+'&companyid='+ companyid+'&userid='+ userid+'&recruitprofileid='+ recruitprofileid
				+'&oldstatusid='+ oldstatusid+'&applicantprofilestatid='+ applicantprofilestatid+'&moduleid='+ moduleid;										
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "overwrite.php",
							data: dataString,
							cache: false,									
										beforeSend: function(html) 
										{			   
											$("#flashapplicantid2").show();
											$("#flashapplicantid2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Submitting Data...Please Wait.');				
										},															
									  success: function(html)
									    {
										    $("#insert_applicantid2").show();
										    $('#insert_applicantid2').empty();
										    $("#insert_applicantid2").append(html);
										    $("#flashapplicantid2").hide();	
										   																   
									   },
									  error: function(html)
									    {
										   $("#insert_applicantid2").show();
										   $('#insert_applicantid2').empty();
										   $("#insert_applicantid2").append(html);
										   $("#flashapplicantid2").hide();													   												   		
									   }											   
					             });
}
function overwrite2() {
							
				var statusid = $("#statusid").val();
				var myapplicantid = $("#myapplicantid").val();						
				var companyid = $("#companyid").val();
				var userid = $("#userid").val();
				var recruitprofileid = $("#recruitprofileid").val();	
				
				var oldstatusid = $("#oldstatusid").val();
				var applicantprofilestatid = $("#applicantprofilestatid").val();
				var moduleid = $("#moduleid").val();	
																																																										
				var dataString = 'myapplicantid='+ myapplicantid+'&statusid='+ statusid
				+'&companyid='+ companyid+'&userid='+ userid+'&recruitprofileid='+ recruitprofileid
				+'&oldstatusid='+ oldstatusid+'&applicantprofilestatid='+ applicantprofilestatid+'&moduleid='+ moduleid;										
				
				//alert(dataString);
				
							$.ajax({
							type: "GET",
							url: "overwrite2.php",
							data: dataString,
							cache: false,									
										beforeSend: function(html) 
										{			   
											$("#flashapplicantid2").show();
											$("#flashapplicantid2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Submitting Data...Please Wait.');				
										},															
									  success: function(html)
									    {
										    $("#insert_applicantid2").show();
										    $('#insert_applicantid2').empty();
										    $("#insert_applicantid2").append(html);
										    $("#flashapplicantid2").hide();	
										   																   
									   },
									  error: function(html)
									    {
										   $("#insert_applicantid2").show();
										   $('#insert_applicantid2').empty();
										   $("#insert_applicantid2").append(html);
										   $("#flashapplicantid2").hide();													   												   		
									   }											   
					             });
}

function placement() {
							$('#mymodalform2z').bootstrapValidator('validate');
		        			var bootstrapValidator = $('#mymodalform2z').data('bootstrapValidator');
							var stat2 = bootstrapValidator.isValid();
							if(stat2=='1')
							{							
											var actionslipid = $("#actionslipid").val();
											var myapplicantid = $("#myapplicantid").val();						
											var companyid = $("#companyid").val();
											var userid = $("#userid").val();
											var statusid = $("#statusid").val();
											var placementremarks = $("#placementremarks").val();	
											var accountsid = $("#accountsid").val();	
											var recruiter_userid = $("#recruiter_userid").val();									
																																																																	
											var dataString = 'myapplicantid='+ myapplicantid+'&actionslipid='+ actionslipid
											+'&companyid='+ companyid+'&userid='+ userid+'&statusid='+ statusid
											+'&placementremarks='+ placementremarks+'&accountsid='+ accountsid+'&recruiter_userid='+ recruiter_userid;										
											
											//alert(dataString);
											
														$.ajax({
														type: "GET",
														url: "placement.php",
														data: dataString,
														cache: false,									
																	beforeSend: function(html) 
																	{			   
																		$("#flashapplicantid").show();
																		$("#flashapplicantid").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Submitting Data...Please Wait.');				
																	},															
																  success: function(html)
																    {
																    	$("#flashapplicantid").empty();	
																	    $("#flashapplicantid").hide();	
																	    
																	    $("#insert_applicantid").show();
																	    $('#insert_applicantid').empty();
																	    $("#insert_applicantid").append(html);
																	    
							
																	   	$("#mynotify").hide();																   
																   },
																  error: function(html)
																    {
																	   $("#insert_applicantid").show();
																	   $('#insert_applicantid').empty();
																	   $("#insert_applicantid").append(html);
																	   $("#flashapplicantid").hide();	
																	   
																	   $("#mynotify").hide();												   												   		
																   }											   
												             });
							}													             

}

function getexporttoxls() { 
	$("#insert_search").btechco_excelexport({
                containerid: "insert_search", datatype: $datatype.Table
            });
	} 
function getexporttoxls2() { 
	$("#insert_search_export").btechco_excelexport({
                containerid: "insert_search_export", datatype: $datatype.Table
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
		$("#recruitbtn").prop('disabled', true);
		$("#validateBtn").prop('disabled', true);
			
			setTimeout(function(){
						   location.reload();
						    
	    }, 3000);
		
	}  
	
	function refreshdiv2x() {

		setTimeout(function(){
						   location.reload();
						    
	    }, 1000);
		
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

function closeplacement() {
	 //close modal	
	 $('#insert_modal4').modal("hide");
	 refreshdiv2x();

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
    
     //if hash is this value query
    if(hash == "#placement") {
    	//alert("placement");
		gototop(); 
		showallplacement();
	}
	else if(hash == "#new") {
		//new
		//alert("new");
		shownew();	
	}
	else if(hash == "#qualified") {
		//alert("qualified");
		gototop();
		showallqualified();		
	}
	else if(hash == "#notqualified") {
		//alert("notqualified");
		gototop();
		showallnotqualified();		
	}
	else if(hash == "#activefile") {
		//alert("activefile");
		gototop(); 
		showallactivefile();		
	}
	else if(hash == "#hired") {
		//alert("hired");
		gototop(); 
		showallhired();		
	}
	else {		
		//alert("forwarded");
		gototop();
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
$('.printactionslip').popover({
                trigger: "hover",
                placement: "left",
                content: "Print Action Slip",
                });                 
$('.popoverprocessingapplicant').popover({
                trigger: "hover",
                placement: "left",
                content: "Process Applicant",
                });  
                
$('.popoversourcinghistory').popover({
                trigger: "hover",
                placement: "right",
                content: "View Sourcing History",
                });    
                
$('.popoveroverwrite').popover({
                trigger: "hover",
                placement: "right",
                content: "Overwrite Transaction",
                });   
$('.popoverplacement').popover({
                trigger: "hover",
                placement: "left",
                content: "For Placement",
                });  
$('.popoverplacement_backout').popover({
                trigger: "hover",
                placement: "left",
                content: "Click here if the applicant has backed out.",
                }); 
$('.popoverupdateapplicant').popover({
				trigger: "hover",
				placement: "right",
				content: "Update Applicant Profile?",
});  
$('.popoveractionslip').popover({
                trigger: "hover",
                placement: "right",
                content: "View and Print Action Slip",
                });   
    //-----------------------------------------------------------
   $('#searchbtn2x99').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
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
																
																var mycompanyid	 = $("#mycompanyid").val();	
																
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
						    $('#mymodalform')
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
						                accountid: {
						                validators: {
						                    notEmpty: {
						                        message: 'Accounts field is required and can\'t be empty'
						                    }
						                }
						            },
						            positionid: {
						                validators: {
						                    notEmpty: {
						                        message: 'Position is required and can\'t be empty'
						                    }
						                }
						            },	
						            statusid: {
						                validators: {
						                    notEmpty: {
						                        message: 'Status is required and can\'t be empty'
						                    }
						                }
						            },						            
						            remarks: {
						                validators: {
						                    notEmpty: {
						                        message: ' Interview Inputs is required and can\'t be empty.'
						                    },
						                    regexp: {
												regexp: /^[a-zA-Z0-9_\-,. ]+$/,
												message: 'Remarks can only consist of alphabetical,space,comma,dash, number, dot and underscore'
											}
						                }
						            }						           
						        }
						    });
				            // Validate the form manually
						     $('#recruitbtn').on('click', function(event){
						        event.preventDefault();	
						    });	  
  			//-------------------------------------------                  	
						    $('#mymodalform2z')
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
						            placementremarks: {
						                validators: {
						                    notEmpty: {
						                        message: 'Remarks is required and can\'t be empty'
						                    }
						                }
						            },							            
						            recruiter_userid: {
						                validators: {
						                    notEmpty: {
						                        message: 'Recruiter Name is required and can\'t be empty'
						                    }
						                }
						            }						           
						        }
						    });
				            // Validate the form manually
						     $('#placementbtn').on('click', function(event){
						        event.preventDefault();	
						    });	 
             //-----------------------------------------------------------              
	
  $('#form22').on('init.field.bv', function(e, data) {	
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
				            startdate: {
				                validators: {
			                            notEmpty: {
			                                message: 'The date started is required'
			                            },  
			                             date: {
					                        format: 'MM/DD/YYYY',
					                        message: 'The start date is not valid. Should be in mm/dd/yyyy'
					                    }
				                }
				            },
				            enddate: {
				                validators: {
			                            notEmpty: {
			                                message: 'The date started is required'
			                            },  
			                             date: {
					                        format: 'MM/DD/YYYY',
					                        message: 'The end date is not valid. Should be in mm/dd/yyyy'
					                    }
				                }
				            },
				            otherinstructions: {
				                validators: {
			                            regexp: {
					                        regexp: /^[a-zA-Z0-9_\. ]+$/,
					                        message: 'Other Instructions field can only consist of alphabetical, space, number, dot and underscore'
					                    }	
				                }
				            },		
				           workschedule: {
				                validators: {
			                            regexp: {
					                        regexp: /^[a-zA-Z0-9_\. ]+$/,
					                        message: 'Work Schedule field can only consist of alphabetical, number, space, dot and underscore'
					                    }	
				                }
				            },	
				           payrollcutoff: {
				                validators: {
			                            regexp: {
					                        regexp: /^[a-zA-Z0-9_\. ]+$/,
					                        message: 'Payroll Cut-off field can only consist of alphabetical, number, space, dot and underscore'
					                    }	
				                }
				            },	
				            payday: {
				                validators: {
			                            regexp: {
					                        regexp: /^[a-zA-Z0-9_\.]+$/,
					                        message: 'Payday field can only consist of alphabetical, number, dot and underscore'
					                    }	
				                }
				            },	
				            cashbond: {
				                validators: {
			                            regexp: {
					                        regexp: /^[a-zA-Z0-9_\.]+$/,
					                        message: 'Cash Bond field can only consist of alphabetical, number, dot and underscore'
					                    }	
				                }
				            },					            
				            areaofassignmentid: {
				                validators: {
			                            notEmpty: {
			                                message: 'Area of Assignment is required'
			                            }
				                }
				            },				            
				            neededdate: {
				                validators: {
			                            notEmpty: {
			                                message: 'The date started is required'
			                            },  
			                             date: {
					                        format: 'MM/DD/YYYY',
					                        message: 'The date needed is not valid. Should be in mm/dd/yyyy'
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
            
    // Validate the form manually
    $('#validateBtn').click(function() {
    	//alert('test');
        $('#form22').bootstrapValidator('validate');
        		        	var bootstrapValidator = $('#form22').data('bootstrapValidator');
							var stat1 = bootstrapValidator.isValid();
							if(stat1=='1')
							{
								//alert('success');
												var recruitprofileid = $("#recruitprofileid").val();
												var applicantid = $("#applicantid").val();
												var companyid = $("#companyid").val();	
												var areaofassignmentid = $("#areaofassignmentid").val();
												var startdate = $("#startdate").val();
												var enddate = $("#enddate").val();	
												var neededdate = $("#neededdate").val();

												var employmentstatusidradios = $('input[name=employmentstatusidradios]:checked').val();																
																									
												var workschedule = $("#workschedule").val();
												var payrollcutoff = $("#payrollcutoff").val();
												var payday = $("#payday").val();	
												var payingrate = $("#payingrate").val();
												var paymentstatusid = $("#paymentstatusid").val();
												
												var mandatoryidradios = $('input[name=employmentstatusidradios]:checked').val();	
												
												var otherinstructions = $("#otherinstructions").val();
												var cashbond = $("#cashbond").val();
												
												var accountsid2 = $("#accountsid2").val();
												var positionid2 = $("#positionid2").val();	
																																																				
												var dataString = 'recruitprofileid='+ recruitprofileid+'&applicantid='+ applicantid
												+'&companyid='+ companyid+'&areaofassignmentid='+ areaofassignmentid+'&startdate='+ startdate
												+'&enddate='+ enddate+'&neededdate='+ neededdate+'&employmentstatusidradios='+ employmentstatusidradios
												+'&employmentstatusidradios='+ employmentstatusidradios+'&workschedule='+ workschedule+'&payrollcutoff='+ payrollcutoff
												+'&payday='+ payday+'&payingrate='+ payingrate+'&paymentstatusid='+ paymentstatusid
												+'&mandatoryidradios='+ mandatoryidradios+'&otherinstructions='+ otherinstructions+'&cashbond='+ cashbond+'&accountsid2='+ accountsid2+'&positionid2='+ positionid2;										
												
												//alert(dataString);
												
															$.ajax({
															type: "GET",
															url: "processactionslip.php",
															data: dataString,
															cache: false,									
																		beforeSend: function(html) 
																		{			   
																			$("#flash2x9").show();
																			$("#flash2x9").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Creating Action Slip...Please Wait.');				
																		},															
																	  success: function(html)
																	    {
																		    $("#insert_search2x9").show();
																		    $('#insert_search2x9').empty();
																		    $("#insert_search2x9").append(html);
																		    $("#flash2x9").hide();																			   																   
																	   },
																	  error: function(html)
																	    {
																		   $("#insert_search2x9").show();
																		   $('#insert_search2x9').empty();
																		   $("#insert_search2x9").append(html);
																		   $("#flash2x9").hide();													   												   		
																	   }											   
													             });
							}
    });

    $('#resetBtn').click(function() {
        $('#form22').data('bootstrapValidator').resetForm(true);
    });
    		
});
