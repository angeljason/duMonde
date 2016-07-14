$('#myPill2 a[href="#activelessthan30days2"]').on('click', function(event){				
			showactivelessthan30days2();				
});
function showactivelessthan30days2() {	
	//alert('inactivelessthan45days');
							$.ajax({
							type: "GET",
							url: "load/loadactivelessthan30days2.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_activelessthan30days2").show();
											$("#insert_activelessthan30days2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_activelessthan30days2").show();
										   $('#insertbody_activelessthan30days2').empty();
										   $("#insertbody_activelessthan30days2").append(html);
										   $("#insert_activelessthan30days2").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_activelessthan30days2").show();
										   $('#insertbody_activelessthan30days2').empty();
										   $("#insertbody_activelessthan30days2").append(html);	
										   $("#insertbody_activelessthan30days2").hide();	
										   $("#insert_activelessthan30days2").hide();										   												   		
									   }													   
					             });		
}
$('#myPill2 a[href="#inactivelessthan45days2"]').on('click', function(event){				
			showinactivelessthan45days2();				
});
function showinactivelessthan45days2() {	
	//alert('inactivelessthan45days');
							$.ajax({
							type: "GET",
							url: "load/loadinactivelessthan45days2.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_inactivelessthan45days2").show();
											$("#insert_inactivelessthan45days2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_inactivelessthan45days2").show();
										   $('#insertbody_inactivelessthan45days2').empty();
										   $("#insertbody_inactivelessthan45days2").append(html);
										   $("#insert_inactivelessthan45days2").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_inactivelessthan45days2").show();
										   $('#insertbody_inactivelessthan45days2').empty();
										   $("#insertbody_inactivelessthan45days2").append(html);	
										   $("#insertbody_inactivelessthan45days2").hide();	
										   $("#insert_inactivelessthan45days2").hide();										   												   		
									   }													   
					             });		
}
$('#myPill2 a[href="#inactivelessthan30days2"]').on('click', function(event){				
			showinactivelessthan30days2();				
});
function showinactivelessthan30days2() {	
	//alert('inactivelessthan30days');
							$.ajax({
							type: "GET",
							url: "load/loadinactivelessthan30days2.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_inactivelessthan30days2").show();
											$("#insert_inactivelessthan30days2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_inactivelessthan30days2").show();
										   $('#insertbody_inactivelessthan30days2').empty();
										   $("#insertbody_inactivelessthan30days2").append(html);
										   $("#insert_inactivelessthan30days2").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_inactivelessthan30days2").show();
										   $('#insertbody_inactivelessthan30days2').empty();
										   $("#insertbody_inactivelessthan30days2").append(html);	
										   $("#insertbody_inactivelessthan30days2").hide();	
										   $("#insert_inactivelessthan30days2").hide();										   												   		
									   }													   
					             });		
}

$('#myPill2 a[href="#activelessthan45days2"]').on('click', function(event){				
			showactivelessthan45days2();				
});
function showactivelessthan45days2() {	
	//alert('activelessthan45days');
							$.ajax({
							type: "GET",
							url: "load/loadactivelessthan45days2.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_activelessthan45days2").show();
											$("#insert_activelessthan45days2").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_activelessthan45days2").show();
										   $('#insertbody_activelessthan45days2').empty();
										   $("#insertbody_activelessthan45days2").append(html);
										   $("#insert_activelessthan45days2").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_activelessthan45days2").show();
										   $('#insertbody_activelessthan45days2').empty();
										   $("#insertbody_activelessthan45days2").append(html);	
										   $("#insertbody_activelessthan45days2").hide();	
										   $("#insert_activelessthan45days2").hide();										   												   		
									   }													   
					             });		
}
$(function(){ 
  
 //-------------------------------list of eoc--------------------------------
 $('#myPill2 a').click(function (e) {
    //e.preventDefault();
    $(this).tab('show');
    //alert('test');
    });
  
  // store the currently selected tab in the hash value
    $("ul.nav-pills > li > a").on("shown.bs.tab", function (e) {
        var id4 = $(e.target).attr("href").substr(1);
        window.location.hash = id4;
    });
    
     //-------on load of the page: switch to the currently selected tab-----
    var hash4 = window.location.hash;
    $('#myPill2 a[href="' + hash4 + '"]').tab('show');
    //alert(hash3);
    /*
	if(hash3 == "#activelessthan45days") {
		alert(hash3);
		//showbirequests();			
	}
    if(hash3 == "#inactivelessthan30days") {
		alert(hash3);
		//showvalidation();			
	}	

	if(hash3 == "#inactivelessthan45days") {
		alert(hash3);
		//showreports();			
	}
	*/
	
						
});

