<?php 
include("header.php"); 
?>	
	<div class="container">
		    <div class="row">
                <div class="col-lg-12">
                    <div id="insert_modal" class="modal fade" tabindex="-1" data-width="760" style="display: none;"></div>
                    <div id="insert_modal2" class="modal fade" tabindex="-1" data-width="760" style="display: none;"></div>	
                    <div id="myModal" class="modal container fade" data-replace="true" tabindex="-1" style="display: none;"></div> 
					<div id="myModal_xxx" class="modal container fade" data-replace="true" tabindex="-1" style="display: none;"></div>
				</div>               
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">
                    	&nbsp;Feedback Report
                    </h1>
                </div>               
            </div>
            <div class="row">            	   
				  <form id="defaultForm">
					                <div class="col-lg-12">
					                	<div class="input-group">							                      
							                <input type="text" class="form-control" name="searchfield" id="searchfield" placeholder="Search term...">
							                <span class="input-group-btn">
							                    <button class="btn btn-default" type="button" id="searchbtn" name="searchbtn">
															<span class="pull-right"><i class="fa fa-search"></i></span>
												</button>
							                </span>
							            </div>              	
				                </div>               
				  </form> 	
            </div>  
			<div class="row">
				<div class="col-lg-12">
					<p>&nbsp;</p>
				</div> 
			</div>	
            <div class="row">
            	<form id="defaultForm2x9">
					                <div class="col-lg-12">
						                            <div class="panel-group" id="accordion">
						                                <div class="panel panel-default">
								                                    <div class="panel-heading">
								                                        <h4 class="panel-title">
								                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Advanced Search</a>   
								                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
									                                            <span class="pull-left"><i class="fa fa-search-plus"></i></span>
									                                            <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
								                                            </a>
								                                        </h4>
								                                    </div>
						                                    <div id="collapseOne" class="panel-collapse collapse out">
						                                        <div class="panel-body">
						                                           <form id="defaultForm">    
						                                           				<div class="row">  
						                                           					<div class="col-lg-12">
																						<div class="form-group">
																							<label>Event Name<strong>&nbsp;(* required field)</strong></label>
																									<select class="form-control" id="eventname" name="eventname"> 
																										<option value="">Please select</option>
																											 <?php
																												$sql_query = "SELECT DISTINCT a.FieldValue FROM e27rt_rsform_submission_values a WHERE a.FieldName='Event Name' and a.FormId='14'
																															ORDER BY a.FieldValue ASC";
																												$result_set=mysql_query($sql_query);	
																												while ($row = mysql_fetch_array($result_set, MYSQL_ASSOC)) 
																												{																												   
																													$FieldValuex= $row['FieldValue'];				  
																												 ?>
																													<option value="<?php echo "$FieldValuex"; ?>"> <?php echo "$FieldValuex"; ?> </option>
																											<?php
																												}
																											?>					  
																									</select>
																						</div>			
						                                           					</div>	
						                                           				</div>	
						                                           				<br>
						                                           				<div class="row"> 
						                                           					<div class="col-lg-3">
																                            <div class="form-group">
																                                <label>Company Name</label>
													                                            <input type='text' class="form-control" id='companyname' name='companyname' placeholder="Company Name"/>
																                            </div>                    	
																                    </div> 
																                    <div class="col-lg-3">
																                            <div class="form-group">
																                                <label>Industry Sector</label>
														                                        <input type='text' class="form-control" id='industrysector' name='industrysector' placeholder="Industry Sector"/>   
																                            </div>                    	
																                    </div> 
																                    <div class="col-lg-3">
																                            <div class="form-group">
																                                <label>Location</label>																								
																								<input type='text' class="form-control" id='location' name='location' placeholder="Location"/>	
																                            </div>                    	
																                    </div> 
																                    <div class="col-lg-3">
																                            <div class="form-group">
																                                <label>Complete Name</label>
																								 <input type='text' class="form-control" id='completename' name='completename' placeholder="Complete Name"/>
																                            </div>                    	
																                    </div> 
						                                           				</div>	 
																                <div class="row">
																                    <div class="col-lg-3">
																                            <div class="form-group">
																                                <label>Email</label>
																								<input type='text' class="form-control" id='email' name='email' placeholder="Email"/>
																                            </div>                    	
																                    </div>                    
																                    <div class="col-lg-3">
																                            <div class="form-group">
																                                <label>Position</label>
																								<input type='text' class="form-control" id='position' name='position' placeholder="Position"/>
																                            </div>                    	
																                    </div> 
																                    <div class="col-lg-3">
																                            <div class="form-group">
																                                &nbsp;
																                            </div>                    	
																                    </div>                    
																                    <div class="col-lg-3">
																                            <div class="form-group">
																                                &nbsp;
																                            </div>                    	
																                    </div>  
																                </div>
																				<hr>
																                <div class="row">
																                    <div class="col-lg-3">
																                            <div class="form-group">
																                                <label>Q1</label>
																								<select class="form-control" name="q1" id="q1">
																										<option value="">Please select</option>
																					                    <option value='1 - Strongly Disagree'>1 - Strongly Disagree</option>
																										<option value='2 - Disagree'>2 - Disagree</option>
																										<option value='3 - Neutral'>3 - Neutral</option>
																										<option value='4 - Agree'>4 - Agree</option>
																										<option value='5 - Strongly Agree'>5 - Strongly Agree</option>
																					            </select>	
																                            </div>                    	
																                    </div>                    
																                    <div class="col-lg-3">
																                            <div class="form-group">
																                                <label>Q2</label>
																								<select class="form-control" name="q2" id="q2">
																										<option value="">Please select</option>
																					                    <option value='1 - Strongly Disagree'>1 - Strongly Disagree</option>
																										<option value='2 - Disagree'>2 - Disagree</option>
																										<option value='3 - Neutral'>3 - Neutral</option>
																										<option value='4 - Agree'>4 - Agree</option>
																										<option value='5 - Strongly Agree'>5 - Strongly Agree</option>
																					            </select>
																                            </div>                    	
																                    </div> 
																                    <div class="col-lg-3">
																                            <div class="form-group">
																                                <label>Q2</label>
																								<select class="form-control" name="q3" id="q3">
																										<option value="">Please select</option>
																					                    <option value='1 - Strongly Disagree'>1 - Strongly Disagree</option>
																										<option value='2 - Disagree'>2 - Disagree</option>
																										<option value='3 - Neutral'>3 - Neutral</option>
																										<option value='4 - Agree'>4 - Agree</option>
																										<option value='5 - Strongly Agree'>5 - Strongly Agree</option>
																					            </select>
																                            </div>                    	
																                    </div>                    
																                    <div class="col-lg-3">
																                            <div class="form-group">
																                                <label>Q2</label>
																								<select class="form-control" name="q4" id="q4">
																										<option value="">Please select</option>
																					                    <option value='1 - Strongly Disagree'>1 - Strongly Disagree</option>
																										<option value='2 - Disagree'>2 - Disagree</option>
																										<option value='3 - Neutral'>3 - Neutral</option>
																										<option value='4 - Agree'>4 - Agree</option>
																										<option value='5 - Strongly Agree'>5 - Strongly Agree</option>
																					            </select>																						
																                            </div>                    	
																                    </div>  
																                </div>             
																            <!-- /.row -->
																                <div class="row">
																                    <div class="col-lg-3">
																                            <div class="form-group">
																                                <label>Q5</label>
																								<select class="form-control" name="q5" id="q5">
																										<option value="">Please select</option>
																					                    <option value='1 - Strongly Disagree'>1 - Strongly Disagree</option>
																										<option value='2 - Disagree'>2 - Disagree</option>
																										<option value='3 - Neutral'>3 - Neutral</option>
																										<option value='4 - Agree'>4 - Agree</option>
																										<option value='5 - Strongly Agree'>5 - Strongly Agree</option>
																					            </select>																									
																                            </div>                    	
																                    </div>                    
																                    <div class="col-lg-3">
																                            <div class="form-group">
																                                <label>Q6</label>
																								<select class="form-control" name="q6" id="q6">
																										<option value="">Please select</option>
																					                    <option value='1 - Strongly Disagree'>1 - Strongly Disagree</option>
																										<option value='2 - Disagree'>2 - Disagree</option>
																										<option value='3 - Neutral'>3 - Neutral</option>
																										<option value='4 - Agree'>4 - Agree</option>
																										<option value='5 - Strongly Agree'>5 - Strongly Agree</option>
																					            </select>
																                            </div>                    	
																                    </div> 
																                    <div class="col-lg-3">
																                            <div class="form-group">
																                                <label>Q7</label>
																								<select class="form-control" name="q7" id="q7">
																										<option value="">Please select</option>
																					                    <option value='1 - Strongly Disagree'>1 - Strongly Disagree</option>
																										<option value='2 - Disagree'>2 - Disagree</option>
																										<option value='3 - Neutral'>3 - Neutral</option>
																										<option value='4 - Agree'>4 - Agree</option>
																										<option value='5 - Strongly Agree'>5 - Strongly Agree</option>
																					            </select>																									
																                            </div>                    	
																                    </div>                    
																                    <div class="col-lg-3">
																                            <div class="form-group">
																                                <label>Q8</label>
																								<select class="form-control" name="q8" id="q8">
																										<option value="">Please select</option>
																					                    <option value='1 - Strongly Disagree'>1 - Strongly Disagree</option>
																										<option value='2 - Disagree'>2 - Disagree</option>
																										<option value='3 - Neutral'>3 - Neutral</option>
																										<option value='4 - Agree'>4 - Agree</option>
																										<option value='5 - Strongly Agree'>5 - Strongly Agree</option>
																					            </select>
																                            </div>                    	
																                    </div>  
																                </div>  
																				<hr>						
																                <div class="row">
																                    <div class="col-lg-3">
																                            <div class="form-group">
																                                <label>Scale</label>
																								<select class="form-control" name="scale" id="scale">
																										<option value="">Please select</option>
																					                    <option value='0'>0</option>
																										<option value='1'>1</option>
																										<option value='2'>2</option>
																										<option value='3'>3</option>
																										<option value='4'>4</option>
																										<option value='5'>5</option>
																										<option value='6'>6</option>
																										<option value='7'>7</option>
																										<option value='8'>8</option>
																										<option value='9'>9</option>
																										<option value='10'>10</option>
																					            </select>
																                            </div>                    	
																                    </div>                    
																                    <div class="col-lg-3">
																                            <div class="form-group">
																                                <label>Can be contacted?</label>
																								<select class="form-control" name="canbecontacted" id="canbecontacted">
																										<option value="">Please select</option>
																					                    <option value='Yes'>Yes</option>
																										<option value='No'>No</option>																										
																					            </select>
																                            </div>                    	
																                    </div> 
																                   <div class="col-lg-3">
																                            <div class="form-group">
																                                <label>Want Updates?</label>
																								<select class="form-control" name="wantupdates" id="wantupdates">
																										<option value="">Please select</option>
																					                    <option value='Yes'>Yes</option>
																										<option value='No'>No</option>																										
																					            </select>
																                            </div>                    	
																                    </div>                    
																                    <div class="col-lg-3">
																							<div class="form-group">
																								<label>Year</label>
																								<input type='text' class="form-control" id='year' name='year' placeholder="Year"/>
																							</div>	
																                    </div>  
																                </div> 																		                															               																	            																          															                														                
																                <div class="row">																                   
																                    <div class="col-lg-6">
																                            <div class="form-group">
																                                <label>Logical</label>
																								<input type='hidden' class="form-control" id='oz' name='oz' value="OR"/>
																			               </div>
																                    </div>
																                    <div class="col-lg-6">
																                            <div class="form-group">
																                                <label>Assignment</label>
																								<input type='hidden' class="form-control" id='tz' name='tz' value="="/>																                                        
																			               </div>
																                    </div>                                        
																                </div>             																            
																             <div class="row">
																                <div class="col-lg-12">
																                    <button type="button" class="btn btn-outline btn-primary btn-lg btn-block" name="searchbtn2x99" id="searchbtn2x99" data-id='insert_search2'>Search</button>
																                </div>               																               
																            </div>
						                                           </form>						                                          
						                                        </div>
						                                    </div>
						                                </div>
						                            </div>						                    						                                  	
				                    </div>               				               
				  </form>   				            
            </div>                     
            <div id="flash2"></div>
            <div id="insert_search2" align="left"></div>   
            <div id="flash"></div>
            <div id="insert_search" align="left"></div>											              
        </div>        
    </div>   
   
    <script src="js/jquery-1.11.0.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="js/plugins/metisMenu/metisMenu.min.js"></script>

    <!-- DataTables JavaScript -->
    <script src="js/plugins/dataTables/jquery.dataTables.js"></script>
    <script src="js/dataTables.tableTools.js"></script>
    <script src="js/plugins/dataTables/dataTables.bootstrap.js"></script>
    <script src="js/plugins/dataTables/dataTables.fixedColumns.js"></script>
    
    <!-- Custom Theme JavaScript -->
    <script src="js/sb-admin-2.js"></script>
	
	<!-- Excel File-->  
    <script src="js/jquery.battatech.excelexport.js"></script>
    
    <!-- Custom JS-->
    <script type="text/javascript" src="js/feedback.js"></script>  

    <!-- Modal-->
    <script src="js/bootstrap-modalmanager.js"></script>
    <script src="js/bootstrap-modal.js"></script>
    
    <!-- Validator-->
    <script type="text/javascript" src="js/bootstrapValidator.min.js"></script>  
    <script type="text/javascript" src="js/bootstrapValidator.js"></script>   
    
    <!-- The jQuery UI widget factory, can be omitted if jQuery UI is already included -->
	<script src="js/vendor/jquery.ui.widget.js"></script>  
    <script type="text/javascript">
    	$(function() {
		    	$('.display').dataTable({
								"aaSorting": [],
								"scrollCollapse": true,	
								"autoWidth": true,
								"lengthMenu": [ [10, 25, 50, 100, 200, 300, 400, 500], [10, 25, 50, 100, 200, 300, 400, 500] ]																											
							});
		});			
    </script>

</body>

</html>
