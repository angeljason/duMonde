$(document).ready(function() {	

				$("#synchronizebtn").click(function (e) {
								e.preventDefault();
								//alert('Synchronizing Database');
								
								 $.ajax({
									type: "GET",
									url: "synchronize.php",
									cache: false,	
											  beforeSend: function(html) 
												{			   
													$("#flashx").show();
													$("#flashx").html('<img src="ajax-loader.gif" align="absmiddle">&nbsp;Synchronizing Database...Please Wait.');		
												},																						
											  success: function(html)
											    {
												   $("#insert_searchx").show();
												   $('#insert_searchx').empty();
												   $("#insert_searchx").append(html);
												   $("#flashx").hide();	
																			   
											    },
											  error: function(html)
											    {
												   $("#insert_searchx").show();
												   $('#insert_searchx').empty();
												   $("#insert_searchx").append(html);	
												   $("#insert_searchx").hide();	
												   $("#flashx").hide();											   												   		
											   }											   
							             });
														  		
				});
	
});