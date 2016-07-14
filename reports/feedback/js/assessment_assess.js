$(function(){ 
   			
	//-------------------------assessmenttabs checklist-------------------------------
	
	$('#assesspaneltabs a').click(function (e) {
    //e.preventDefault();
    $(this).tab('show');
    //alert('test');
    });
  
  // store the currently selected tab in the hash value
    $("ul.nav-tabs > li > a").on("shown.bs.tab", function (e) {
        var id2 = $(e.target).attr("href").substr(1);
        window.location.hash = id2;
    });
    
     //-------on load of the page: switch to the currently selected tab-----
    var hash3 = window.location.hash;
    $('#assesspaneltabs a[href="' + hash3 + '"]').tab('show');
    //alert(hash3);
    
   if(hash3 == "#enrollment") {
		//alert("enrollment");
		showenrollment(1);	
		//showstep(1);		
	}
	if(hash3 == "#dtrvalidation") {
		//alert("dtrvalidation");
		showenrollment(2);			
	}
	if(hash3 == "#idprinting") {
		//alert("idprinting");
		showenrollment(3);			
	}	
	if(hash3 == "#transmittals") {
		//alert("transmittals");
		showenrollment(4);				
	}	
	if(hash3 == "#transmittals") {
		//alert("reports");
		showenrollment(5);				
	}	
	
	if((hash3 == "#step1")||(hash3 == "#step2")||(hash3 == "#step3")||(hash3 == "#step4")||(hash3 == "#step5")||(hash3 == "#step6")) {
		showenrollment(1);			
	}
	
									
});
