//-------------------popover----------------------------------
	$('.popovercreateactionslip').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});	
	
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
	                
//---------
  
$('.printactionslip').popover({
                trigger: "hover",
                placement: "left",
                content: "Print Action Slip",
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
  
$('.popoveractionslip').popover({
                trigger: "hover",
                placement: "right",
                content: "View and Print Action Slip",
});                 