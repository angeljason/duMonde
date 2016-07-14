
$(function(){ 
var $on = 'section';
    $($on).css({
      'background':'none',
      'border':'none',
      'box-shadow':'none'
    });
	
	$('#tabUL a').click(function (e) {
    //e.preventDefault();
    $(this).tab('show');
    //alert('test');
    });

    // store the currently selected tab in the hash value
    $("ul.panel-tabs > li > a").on("shown.bs.tab", function (e) {
        var id = $(e.target).attr("href").substr(1);
        window.location.hash = id;
    });
    
     //-------on load of the page: switch to the currently selected tab-----
    var hash = window.location.hash;
    $('#tabUL a[href="' + hash + '"]').tab('show');
    //alert(hash);
    
    if(hash == "#pending") {
    	//alert("placement");
		//gototop(); 
		showpending();
		
	}
	else if(hash == "#approved") {
		//alert("forwarded");
		//gototop(); 
		showapproved();
			
	}
	else if(hash == "#disapproved") {
		//alert("qualified");
		//gototop(); 
		showdisapproved();
			
	}
	else if(hash == "#backout") {
		//alert("notqualified");
		//gototop(); 
		showbackout();
			
	}
	else {
		//new
		//alert("new");
		//gototop(); 
		showpending();
	}
});