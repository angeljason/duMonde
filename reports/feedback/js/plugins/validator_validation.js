$(function(){ 
  // Run code
 $('#myTab a').click(function (e) {
    //e.preventDefault();
    $(this).tab('show');
    //alert('test');
    });
  
  // store the currently selected tab in the hash value
    $("ul.nav-tabs > li > a").on("shown.bs.tab", function (e) {
        var id = $(e.target).attr("href").substr(1);
        window.location.hash = id;
    });
    
     //-------on load of the page: switch to the currently selected tab-----
    var hash = window.location.hash;
    $('#myTab a[href="' + hash + '"]').tab('show');
    //alert(hash);
    
    if(hash == "#validation") {
		//alert("validation");
		showvalidation();			
	}	
	if(hash == "#birequests") {
		//alert("birequests");
		showbirequests();			
	}
	if(hash == "#reports") {
		//alert("reports");
		showreports();			
	}
	if(hash == "#validatedchecklists") {
		//alert("reports");
		showreports_documentation();			
	}		
	
	
	
	//---documentation checklist--
	
	$('#checklistUL a').click(function (e) {
    //e.preventDefault();
    $(this).tab('show');
    //alert('test');
    });
  
  // store the currently selected tab in the hash value
    $("ul.panel-tabs > li > a").on("shown.bs.tab", function (e) {
        var id2 = $(e.target).attr("href").substr(1);
        window.location.hash = id2;
    });
    
     //-------on load of the page: switch to the currently selected tab-----
    var hash2 = window.location.hash;
    $('#checklistUL a[href="' + hash2 + '"]').tab('show');
    //alert(hash2);
    
   if(hash2 == "#validated") {
		//alert("validated");
		showvalidated();			
	}
	if(hash2 == "#drafts") {
		//alert("drafts");
		showdrafts();			
	}
	if(hash2 == "#incomplete") {
		//alert("incomplete");
		showincomplete();			
	}	
	if(hash2 == "#notifications") {
		//alert("notifications");
		shownotifications();			
	}	
	if(hash2 == "#doc_reports") {
		//alert("notifications");
		//alert("test");
		showreports_documentation();					
	}	
						
});
