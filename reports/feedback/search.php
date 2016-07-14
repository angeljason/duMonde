<?php
require('conn/db.php');

function alphanumericAndSpace( $string ) {
  return preg_replace( "/[^,;a-zA-Z0-9 _-]|[,; ]$/s", "", $string );
}

$searchfield=trim($_GET['searchfield']);
//$theyear=trim($_GET['theyear']);


if (($searchfield == 'undefined')||($searchfield == null)||($searchfield == "")){$searchfield=null;}
else
{
	$searchfield=mysql_escape_string($searchfield);
	$searchfield=str_replace(" ","%",$searchfield);
}
//if (($theyear == 'undefined')||($theyear == null)||($theyear == "")){$theyear='2015';}

//echo "searchfield: ".$searchfield."<br>";
//echo "theyear: ".$theyear."<br>";



//die();
		$rest="";			
		//----------------------------$searchfield--------------------
			if($searchfield!="")
			 {
			 	$searchfield=mysql_escape_string($searchfield);
				$searchfield=str_replace(" ","%",$searchfield); // Space replacing with %	
				
				//$rest.=" WHERE ((b.FieldValue LIKE '%$searchfield%') AND a.FormId='14') AND b.FieldValue = '$theyear'";	
				$rest.=" WHERE ((b.FieldValue LIKE '%$searchfield%') AND a.FormId='14')";					    	
					
			 }				
			else
			{
					    //$rest="WHERE a.FormId='14' AND b.FieldValue = '$theyear'";
						$rest="WHERE a.FormId='14'";
			}				
				//echo $rest;  
?>     
	<script type="text/javascript" language="javascript" class="init">
		$(document).ready(function() {
			var table = $('#example').DataTable( {
											aaSorting: [], 												
											"lengthMenu": [ [10, 25, 50, 100, 200, 300, 400, 500, -1], [10, 25, 50, 100, 200, 300, 400, 500, "All"] ],
											dom: 'T<"clear">lfrtip',
											"searching": false,
											tableTools: {
												"sSwfPath": "swf/copy_csv_xls_pdf.swf",												
												"aButtons": [																											                												                
												                "print"
												            ]
														}														
									} );									
				} );
	</script> 
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <strong>Search Result | <a href="#" onclick="getexporttoxls3();"> Export to Excel </a>|</strong>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                        	<div class="datatable-scroll">
                            <div class="table-responsive" id="insert_search_export4">
                               <?php
									$total_8 = 0;$total_7 = 0;$total_6 = 0;$total_5 = 0;$total_4 = 0;$total_3 = 0;$total_2 = 0;$total_1 = 0;
									$q1_total =0;$q2_total =0;$q3_total =0;$q4_total =0;$q5_total =0;$q6_total =0;$q7_total =0;$q8_total =0;
									$scale_total =0;
								?>
                            	<table id="example" class="display" cellspacing="0" width="100%">
                                    <thead>
                                        <tr>     
	                                        <th>Event Name</th>
	                                        <th>Company Name</th>
	                                        <th>Industry Sector</th>						                                    
	                                        <th>Location</th>
	                                        <th>Complete Name</th>
	                                        <th>Email</th>
	                                        <th>Position</th>  
											<th>Phone</th>											
	                                        <th>Q1</th>
	                                        <th>Q2</th>						                                    
	                                        <th>Q3</th>
	                                        <th>Q4</th>
	                                        <th>Q5</th>
	                                        <th>Q6</th>  
											<th>Q7</th>
											<th>Q8</th>	
											<th>Scale</th>	
											<th>Can be contacted</th>	
											<th>Receive updates</th>
											<th>Comments</th>	
											<th>Other Topics</th>
											<th>Year</th>
                                        </tr>
                                    </thead>							                                           
                                    <tbody>
									<?php
                							 $myclass="even gradeA";
											 $sql_query = "SELECT distinct a.SubmissionId as SubmissionIdx FROM e27rt_rsform_submissions a
														LEFT JOIN e27rt_rsform_submission_values b ON a.SubmissionId=b.SubmissionId
														$rest
														ORDER BY a.SubmissionId DESC";
											   $result_set=mysql_query($sql_query);
											   $num_rows = mysql_num_rows($result_set);
											   //echo $sql_query;
											   //die();
												
											    while ($row = mysql_fetch_array($result_set, MYSQL_ASSOC)) 
												{
												  $q1=0;$q2=0;$q3=0;$q4=0;$q5=0;
											
												  $SubmissionIdx= $row['SubmissionIdx'];
												  
												  //insert year
												   //$sql_query = "INSERT INTO e27rt_rsform_submission_values(FormId,SubmissionId,FieldName,FieldValue) VALUES('14','$SubmissionIdx','Year','2015')";
												   //mysql_query($sql_query);
												   
												  if($myclass == 'even gradeA'){$myclass ="odd gradeA";}else {$myclass ="even gradeA";}	
									?>					  											                                   	
			                                    <tr class="<?php echo $myclass; ?>">
													<td>
														<!--Event Name-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='Event Name' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_Event_Name="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_Event_Name= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_Event_Name;
														?>
													</td>
													<td>
														<!--Company Name-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='CompanyName' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_Company_Name="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_Company_Name= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_Company_Name;
														?>
													</td>
													<td>
														<!--Industry Sector-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='IndustrySector' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_IndustrySector="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_IndustrySector= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_IndustrySector;
														?>
													</td>						                                    
													<td>
														<!--Location-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='Location' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_Location="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_Location= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_Location;
														?>
													</td>
													<td>
														<!--Complete Name-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='Complete Name' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_Complete_Name="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_Complete_Name= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_Complete_Name;
														?>
													</td>
													<td>
														<!--Email-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='Email' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_Email="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_Email= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_Email;
														?>
													</td>
													<td>
														<!--Position-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='Position' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_Position="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_Position= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_Position;
														?>
													</td>  
													<td>
														<!--Phone-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='Phone' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_Phone="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_Phone= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_Phone;
														?>
													</td>											
													<td>
														<!--Q1-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='q1' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_q1="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_q1= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_q1;															
															$q1 = $FieldValue_q1[0];
															$q1_total=$q1_total+$q1;
															
															if ($q1 == '5'){$total_5=$total_5+$q1;}
															if ($q1 == '4'){$total_4=$total_4+$q1;}
															if ($q1 == '3'){$total_3=$total_3+$q1;}
															if ($q1 == '2'){$total_2=$total_2+$q1;}
															if ($q1 == '1'){$total_1=$total_1+$q1;}
														?>
													</td>
													<td>
														<!--Q2-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='q2' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_q2="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_q2= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_q2;
															$q2 = $FieldValue_q2[0];
															$q2_total=$q2_total+$q2;
															
															
														?>
													</td>						                                    
													<td>
														<!--Q3-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='q3' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_q3="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_q3= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_q3;
															$q3 = $FieldValue_q3[0];
															$q3_total=$q3_total+$q3;
														?>
													</td>
													<td>
														<!--Q4-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='q4' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_q4="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_q4= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_q4;
															$q4 = $FieldValue_q4[0];
															$q4_total=$q4_total+$q4;
														?>
													</td>
													<td>
														<!--Q5-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='q5' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_q5="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_q5= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_q5;
															$q5 = $FieldValue_q5[0];
															$q5_total=$q5_total+$q5;
														?>
													</td>
													<td>
														<!--Q6-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='q6' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_q6="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_q6= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_q6;
															$q6 = $FieldValue_q6[0];
															$q6_total=$q6_total+$q6;
														?>
													</td>  
													<td>
														<!--Q7-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='q7' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_q7="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_q7= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_q7;
															$q7 = $FieldValue_q7[0];
															$q7_total=$q7_total+$q7;
														?>
													</td>
													<td>
														<!--Q8-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='q8' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_q8="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_q8= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_q8;
															$q8 = $FieldValue_q8[0];
															$q8_total=$q8_total+$q8;
														?>
													</td>	
													<td>
														<!--Scale-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='scale' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_scale="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_scale= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_scale;
															$scale_total=$scale_total+$FieldValue_scale;
														?>
													</td>	
													<td>
														<!--Can be contacted-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='canbecontacted' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_canbecontacted="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_canbecontacted= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_canbecontacted;
														?>
													</td>	
													<td>
														<!--Receive updates-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='wantupdates' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_wantupdates="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_wantupdates= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_wantupdates;
														?>
													</td> 
													<td>
														<!--Comments-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='Comments' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_Comments="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_Comments= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_Comments;
														?>
													</td>
													<td>
														<!--Other Topic-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='othertopic' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_othertopic="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_othertopic= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_othertopic;
														?>
													</td>
													<td>
														<!--Year-->
														<?php 
															$sql_query1 = "SELECT distinct a.* from e27rt_rsform_submission_values a 
															WHERE a.SubmissionId='".$SubmissionIdx."' and a.FieldName='Year' and a.FormId='14'
															ORDER BY a.SubmissionId DESC";
															$result_set1=mysql_query($sql_query1);
															$FieldValue_year="";
															while ($row1 = mysql_fetch_array($result_set1, MYSQL_ASSOC)) 
																{	
																	$FieldValue_year= $row1['FieldValue'];
																}	
															
														    echo $FieldValue_year;
														?>
													</td>
			                                    </tr>	
					                                   <?php
														 }
														?>
												<tfoot>		
														<tr>
															<th>&nbsp;</th>
															<th>&nbsp;</th>
															<th>&nbsp;</th>						                                    
															<th>&nbsp;</th>
															<th>&nbsp;</th>
															<th>&nbsp;</th>
															<th>&nbsp;</th>  
															<th>Total</th>											
															<th><?php echo $q1_total;?></th>
															<th><?php echo $q2_total;?></th>						                                    
															<th><?php echo $q3_total;?></th>
															<th><?php echo $q4_total;?></th>
															<th><?php echo $q5_total;?></th>
															<th><?php echo $q6_total;?></th> 
															<th><?php echo $q7_total;?></th>
															<th><?php echo $q8_total;?></th>
															<th><?php echo $scale_total;?></th>	
															<th>&nbsp;</th>	
															<th>&nbsp;</th> 
															<th>&nbsp;</th>	
															<th>&nbsp;</th>	
															<th>&nbsp;</th>
														</tr>
														<tr>
															<th>&nbsp;</th>
															<th>&nbsp;</th>
															<th>&nbsp;</th>						                                    
															<th>&nbsp;</th>
															<th>&nbsp;</th>
															<th>&nbsp;</th>
															<th>&nbsp;</th>  
															<th>Percentage</th>											
															<th><?php echo @$q1_per=number_format(($q1_total/(5*$num_rows))*100)."%";?></th>
															<th><?php echo @$q2_per=number_format(($q2_total/(5*$num_rows))*100)."%";?></th>						                                    
															<th><?php echo @$q3_per=number_format(($q3_total/(5*$num_rows))*100)."%";?></th>
															<th><?php echo @$q4_per=number_format(($q4_total/(5*$num_rows))*100)."%";?></th>
															<th><?php echo @$q5_per=number_format(($q5_total/(5*$num_rows))*100)."%";?></th>
															<th><?php echo @$q6_per=number_format(($q6_total/(5*$num_rows))*100)."%";?></th>
															<th><?php echo @$q7_per=number_format(($q7_total/(5*$num_rows))*100)."%";?></th>
															<th><?php echo @$q8_per=number_format(($q8_total/(5*$num_rows))*100)."%";?></th>																														
															<th><?php echo @$scale_per=number_format(($scale_total/(10*$num_rows))*100)."%";?></th>															
															<th>&nbsp;</th>	
															<th>&nbsp;</th> 
															<th>&nbsp;</th>	
															<th>&nbsp;</th>	
															<th>&nbsp;</th>
														</tr>
														<tr>
															<th>&nbsp;</th>
															<th>&nbsp;</th>
															<th>&nbsp;</th>						                                    
															<th>&nbsp;</th>
															<th>&nbsp;</th>
															<th>&nbsp;</th>
															<th>&nbsp;</th>  
															<th>Average</th>											
															<th><?php echo @$q1_average=number_format($q1_total/$num_rows, 2, '.', '');?></th>
															<th><?php echo @$q2_average=number_format($q2_total/$num_rows, 2, '.', '');?></th>						                                    
															<th><?php echo @$q3_average=number_format($q3_total/$num_rows, 2, '.', '');?></th>
															<th><?php echo @$q4_average=number_format($q4_total/$num_rows, 2, '.', '');?></th>
															<th><?php echo @$q5_average=number_format($q5_total/$num_rows, 2, '.', '');?></th>
															<th><?php echo @$q6_average=number_format($q6_total/$num_rows, 2, '.', '');?></th> 
															<th><?php echo @$q7_average=number_format($q7_total/$num_rows, 2, '.', '');?></th>
															<th><?php echo @$q8_average=number_format($q8_total/$num_rows, 2, '.', '');?></th>
															<th><?php echo @$scale_average=number_format($scale_total/$num_rows, 2, '.', '');?></th>	
															<th>&nbsp;</th>	
															<th>&nbsp;</th> 
															<th>&nbsp;</th>	
															<th>&nbsp;</th>	
															<th>&nbsp;</th>
														</tr>
												</tfoot>		
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.table-responsive -->
                            </div>
                            <!-- /.datatable-scroll -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->		
            
	<!-- jQuery Version 1.11.0 -->
    <script src="js/jquery-1.11.0.js"></script>            
       
    <!-- Custom Theme JavaScript -->
    <script src="js/sb-admin-2.js"></script>    
    
    <!-- Metis Menu Plugin JavaScript -->
    <script src="js/plugins/metisMenu/metisMenu.min.js"></script>    
    
    <!-- Validator-->
    <script type="text/javascript" src="js/bootstrapValidator.min.js"></script>  
    <script type="text/javascript" src="js/bootstrapValidator.js"></script>  
    
    <!-- DataTables JavaScript -->
    <script src="js/plugins/dataTables/jquery.dataTables.js"></script>
	<script src="js/jquery-ui.js"></script> 
	
     <!-- Excel File-->  
    <script src="js/jquery.battatech.excelexport.js"></script>   	
	 
		
	