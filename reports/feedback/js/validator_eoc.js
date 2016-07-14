$('#myPill a[href="#inactivelessthan45days"]').on('click', function(event){				
			showinactivelessthan45days();				
});
function showinactivelessthan45days() {	
	//alert('inactivelessthan45days');
							$.ajax({
							type: "GET",
							url: "load/loadinactivelessthan45days.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_inactivelessthan45days").show();
											$("#insert_inactivelessthan45days").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_inactivelessthan45days").show();
										   $('#insertbody_inactivelessthan45days').empty();
										   $("#insertbody_inactivelessthan45days").append(html);
										   $("#insert_inactivelessthan45days").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_inactivelessthan45days").show();
										   $('#insertbody_inactivelessthan45days').empty();
										   $("#insertbody_inactivelessthan45days").append(html);	
										   $("#insertbody_inactivelessthan45days").hide();	
										   $("#insert_inactivelessthan45days").hide();										   												   		
									   }													   
					             });		
}
$('#myPill a[href="#inactivelessthan30days"]').on('click', function(event){				
			showinactivelessthan30days();				
});
function showinactivelessthan30days() {	
	//alert('inactivelessthan30days');
							$.ajax({
							type: "GET",
							url: "load/loadinactivelessthan30days.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_inactivelessthan30days").show();
											$("#insert_inactivelessthan30days").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_inactivelessthan30days").show();
										   $('#insertbody_inactivelessthan30days').empty();
										   $("#insertbody_inactivelessthan30days").append(html);
										   $("#insert_inactivelessthan30days").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_inactivelessthan30days").show();
										   $('#insertbody_inactivelessthan30days').empty();
										   $("#insertbody_inactivelessthan30days").append(html);	
										   $("#insertbody_inactivelessthan30days").hide();	
										   $("#insert_inactivelessthan30days").hide();										   												   		
									   }													   
					             });		
}

$('#myPill a[href="#activelessthan45days"]').on('click', function(event){				
			showactivelessthan45days();				
});
function showactivelessthan45days() {	
	//alert('activelessthan45days');
							$.ajax({
							type: "GET",
							url: "load/loadactivelessthan45days.php",
							cache: false,	
									beforeSend: function(html) 
										{			   
											$("#insert_activelessthan45days").show();
											$("#insert_activelessthan45days").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Loading...Please Wait.');				
										},	
									  success: function(html)
									    {
										   $("#insertbody_activelessthan45days").show();
										   $('#insertbody_activelessthan45days').empty();
										   $("#insertbody_activelessthan45days").append(html);
										   $("#insert_activelessthan45days").hide();											   										   																  
									   },
									  error: function(html)
									    {
										   $("#insertbody_activelessthan45days").show();
										   $('#insertbody_activelessthan45days').empty();
										   $("#insertbody_activelessthan45days").append(html);	
										   $("#insertbody_activelessthan45days").hide();	
										   $("#insert_activelessthan45days").hide();										   												   		
									   }													   
					             });		
}
$(function(){ 
  
 //-------------------------------list of eoc--------------------------------
 $('#myPill a').click(function (e) {
    //e.preventDefault();
    $(this).tab('show');
    //alert('test');
    });
  
  // store the currently selected tab in the hash value
    $("ul.nav-pills > li > a").on("shown.bs.tab", function (e) {
        var id3 = $(e.target).attr("href").substr(1);
        window.location.hash = id3;
    });
    
     //-------on load of the page: switch to the currently selected tab-----
    var hash3 = window.location.hash;
    $('#myPill a[href="' + hash3 + '"]').tab('show');
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

