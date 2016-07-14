<?php
require('conn/db.php');

function alphanumericAndSpace( $string ) {
   return preg_replace( "/[^,;a-zA-Z0-9 _-]|[,; ]$/s", "", $string );
}

$eventname=trim($_GET['eventname']);
$companyname=trim($_GET['companyname']);
$industrysector=trim($_GET['industrysector']);
$location=trim($_GET['location']);
$completename=trim($_GET['completename']);
$email=trim($_GET['email']);
$position=trim($_GET['position']);

$q1=trim($_GET['q1']);
$q2=trim($_GET['q2']);
$q3=trim($_GET['q3']);
$q4=trim($_GET['q4']);
$q5=trim($_GET['q5']);
$q6=trim($_GET['q6']);
$q7=trim($_GET['q7']);
$q8=trim($_GET['q8']);

$scale=trim($_GET['scale']);
$canbecontacted=trim($_GET['canbecontacted']);
$wantupdates=trim($_GET['wantupdates']);
$year=trim($_GET['year']);

$o=trim($_GET['o']);
$t=trim($_GET['t']);

if (($eventname == '')||($eventname== null)||($eventname == 'NULL')){$eventname=null;}
if (($companyname == '')||($companyname== null)||($companyname == 'NULL')){$companyname=null;}
if (($industrysector == '')||($industrysector== null)||($industrysector == 'NULL')){$industrysector=null;}
if (($location == '')||($location== null)||($location == 'NULL')){$location=null;}
if (($completename == '')||($completename== null)||($completename == 'NULL')){$completename=null;}
if (($email == '')||($email== null)||($email == 'NULL')){$email=null;}
if (($position == '')||($position== null)||($position == 'NULL')){$position=null;}

if (($q1 == '')||($q1== null)||($q1 == 'NULL')){$q1=null;}
if (($q2 == '')||($q2== null)||($q2 == 'NULL')){$q2=null;}
if (($q3 == '')||($q3== null)||($q3 == 'NULL')){$q3=null;}
if (($q4 == '')||($q4== null)||($q4 == 'NULL')){$q4=null;}
if (($q5 == '')||($q5== null)||($q5 == 'NULL')){$q5=null;}
if (($q6 == '')||($q6== null)||($q6 == 'NULL')){$q6=null;}
if (($q7 == '')||($q7== null)||($q7 == 'NULL')){$q7=null;}
if (($q8 == '')||($q8== null)||($q8 == 'NULL')){$q8=null;}

if (($scale == '')||($scale== null)||($scale == 'NULL')){$scale=null;}
if (($canbecontacted == '')||($canbecontacted== null)||($canbecontacted == 'NULL')){$canbecontacted=null;}
if (($wantupdates == '')||($wantupdates== null)||($wantupdates == 'NULL')){$wantupdates=null;}
if (($year== '')||($year== null)||($year == 'NULL')){$year=null;}

		$rest="";			
		//----------------------------eventname--------------------
			if($eventname!="")
			 {
				if($t=="LIKE")
					{	
					$eventname=mysql_escape_string($eventname);
					$eventname=str_replace(" ","%",$eventname);
					if($rest=="")
						{$rest.=" WHERE (b.FieldName='Event Name' AND b.FieldValue LIKE '%$eventname%' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='Event Name' AND b.FieldValue LIKE '%$eventname%' AND b.FormId='14') ";}
					}	
				else
					{
					 if($rest=="")
						{$rest.=" WHERE (b.FieldName='Event Name' AND b.FieldValue = '$eventname' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='Event Name' AND b.FieldValue = '$eventname' AND b.FormId='14') ";}							
					}	
			  }	
		//----------------------------companyname--------------------
			if($companyname!="")
			 {
				if($t=="LIKE")
					{
					$companyname=mysql_escape_string($companyname);
					$companyname=str_replace(" ","%",$companyname);					    
					if($rest=="")
						{$rest.=" WHERE (b.FieldName='CompanyName' AND b.FieldValue LIKE '%$companyname%' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='CompanyName' AND b.FieldValue LIKE '%$companyname%' AND b.FormId='14') ";}
					}	
				else
					{
					 if($rest=="")
						{$rest.=" WHERE (b.FieldName='CompanyName' AND b.FieldValue = '$companyname' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='CompanyName' AND b.FieldValue = '$companyname' AND b.FormId='14') ";}							
					}	
			  }
		//----------------------------industrysector--------------------
			if($industrysector!="")
			 {
				if($t=="LIKE")
					{	
					$industrysector=mysql_escape_string($industrysector);
					$industrysector=str_replace(" ","%",$industrysector);				
					if($rest=="")
						{$rest.=" WHERE (b.FieldName='IndustrySector' AND b.FieldValue LIKE '%$industrysector%' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='IndustrySector' AND b.FieldValue LIKE '%$industrysector%' AND b.FormId='14') ";}
					}	
				else
					{
					 if($rest=="")
						{$rest.=" WHERE (b.FieldName='IndustrySector' AND b.FieldValue = '$industrysector' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='IndustrySector' AND b.FieldValue = '$industrysector' AND b.FormId='14') ";}							
					}	
			  }	  
		//----------------------------location--------------------
			if($location!="")
			 {
				if($t=="LIKE")
					{	
					$location=mysql_escape_string($location);
					$location=str_replace(" ","%",$location);				
					if($rest=="")
						{$rest.=" WHERE (b.FieldName='Location' AND b.FieldValue LIKE '%$location%' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='Location' AND b.FieldValue LIKE '%$location%' AND b.FormId='14') ";}
					}	
				else
					{
					 if($rest=="")
						{$rest.=" WHERE (b.FieldName='Location' AND b.FieldValue = '$location' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='Location' AND b.FieldValue = '$location' AND b.FormId='14') ";}							
					}	
			  }	
		//----------------------------completename--------------------
			if($completename!="")
			 {
				if($t=="LIKE")
					{
					$completename=mysql_escape_string($completename);
					$completename=str_replace(" ","%",$completename);					    
					if($rest=="")
						{$rest.=" WHERE (b.FieldName='Complete Name' AND b.FieldValue LIKE '%$completename%' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='Complete Name' AND b.FieldValue LIKE '%$completename%' AND b.FormId='14') ";}
					}	
				else
					{
					 if($rest=="")
						{$rest.=" WHERE (b.FieldName='Complete Name' AND b.FieldValue = '$completename' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='Complete Name' AND b.FieldValue = '$completename' AND b.FormId='14') ";}							
					}	
			  }	
		//----------------------------email--------------------
			if($email!="")
			 {
				if($t=="LIKE")
					{					    
					if($rest=="")
						{$rest.=" WHERE (b.FieldName='Email' AND b.FieldValue LIKE '%$email%' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='Email' AND b.FieldValue LIKE '%$email%' AND b.FormId='14') ";}
					}	
				else
					{
					 if($rest=="")
						{$rest.=" WHERE (b.FieldName='Email' AND b.FieldValue = '$email' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='Email' AND b.FieldValue = '$email' AND b.FormId='14') ";}							
					}	
			  }	
		//----------------------------position--------------------
			if($position!="")
			 {
				if($t=="LIKE")
					{	
					$position=mysql_escape_string($position);
					$position=str_replace(" ","%",$position);				
					if($rest=="")
						{$rest.=" WHERE (b.FieldName='Position' AND b.FieldValue LIKE '%$position%' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='Position' AND b.FieldValue LIKE '%$position%' AND b.FormId='14') ";}
					}	
				else
					{
					 if($rest=="")
						{$rest.=" WHERE (b.FieldName='Position' AND b.FieldValue = '$position' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='Position' AND b.FieldValue = '$position' AND b.FormId='14') ";}							
					}	
			  }	
		//----------------------------q1--------------------
			if($q1!="")
			 {
				if($t=="LIKE")
					{					    
					if($rest=="")
						{$rest.=" WHERE (b.FieldName='q1' AND b.FieldValue LIKE '%$q1%' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='q1' AND b.FieldValue LIKE '%$q1%' AND b.FormId='14') ";}
					}	
				else
					{
					 if($rest=="")
						{$rest.=" WHERE (b.FieldName='q1' AND b.FieldValue = '$q1' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='q1' AND b.FieldValue = '$q1' AND b.FormId='14') ";}							
					}	
			  }	
		//----------------------------q2--------------------
			if($q2!="")
			 {
				if($t=="LIKE")
					{					    
					if($rest=="")
						{$rest.=" WHERE (b.FieldName='q2' AND b.FieldValue LIKE '%$q2%' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='q2' AND b.FieldValue LIKE '%$q2%' AND b.FormId='14') ";}
					}	
				else
					{
					 if($rest=="")
						{$rest.=" WHERE (b.FieldName='q2' AND b.FieldValue = '$q2' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='q2' AND b.FieldValue = '$q2' AND b.FormId='14') ";}							
					}	
			  }	
		//----------------------------q3--------------------
			if($q3!="")
			 {
				if($t=="LIKE")
					{					    
					if($rest=="")
						{$rest.=" WHERE (b.FieldName='q3' AND b.FieldValue LIKE '%$q3%' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='q3' AND b.FieldValue LIKE '%$q3%' AND b.FormId='14') ";}
					}	
				else
					{
					 if($rest=="")
						{$rest.=" WHERE (b.FieldName='q3' AND b.FieldValue = '$q3' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='q3' AND b.FieldValue = '$q3' AND b.FormId='14') ";}							
					}	
			  }	
		//----------------------------q4--------------------
			if($q4!="")
			 {
				if($t=="LIKE")
					{					    
					if($rest=="")
						{$rest.=" WHERE (b.FieldName='q4' AND b.FieldValue LIKE '%$q4%' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='q4' AND b.FieldValue LIKE '%$q4%' AND b.FormId='14') ";}
					}	
				else
					{
					 if($rest=="")
						{$rest.=" WHERE (b.FieldName='q4' AND b.FieldValue = '$q4' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='q4' AND b.FieldValue = '$q4' AND b.FormId='14') ";}							
					}	
			  }	
		//----------------------------q5--------------------
			if($q5!="")
			 {
				if($t=="LIKE")
					{					    
					if($rest=="")
						{$rest.=" WHERE (b.FieldName='q5' AND b.FieldValue LIKE '%$q5%' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='q5' AND b.FieldValue LIKE '%$q5%' AND b.FormId='14') ";}
					}	
				else
					{
					 if($rest=="")
						{$rest.=" WHERE (b.FieldName='q5' AND b.FieldValue = '$q5' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='q5' AND b.FieldValue = '$q5' AND b.FormId='14') ";}							
					}	
			  }	
		//----------------------------q6--------------------
			if($q6!="")
			 {
				if($t=="LIKE")
					{					    
					if($rest=="")
						{$rest.=" WHERE (b.FieldName='q6' AND b.FieldValue LIKE '%$q6%' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='q6' AND b.FieldValue LIKE '%$q6%' AND b.FormId='14') ";}
					}	
				else
					{
					 if($rest=="")
						{$rest.=" WHERE (b.FieldName='q6' AND b.FieldValue = '$q6' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='q6' AND b.FieldValue = '$q6' AND b.FormId='14') ";}							
					}	
			  }	
		//----------------------------q7--------------------
			if($q7!="")
			 {
				if($t=="LIKE")
					{					    
					if($rest=="")
						{$rest.=" WHERE (b.FieldName='q7' AND b.FieldValue LIKE '%$q7%' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='q7' AND b.FieldValue LIKE '%$q7%' AND b.FormId='14') ";}
					}	
				else
					{
					 if($rest=="")
						{$rest.=" WHERE (b.FieldName='q7' AND b.FieldValue = '$q7' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='q7' AND b.FieldValue = '$q7' AND b.FormId='14') ";}							
					}	
			  }	
		//----------------------------q8--------------------
			if($q8!="")
			 {
				if($t=="LIKE")
					{					    
					if($rest=="")
						{$rest.=" WHERE (b.FieldName='q8' AND b.FieldValue LIKE '%$q8%' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='q8' AND b.FieldValue LIKE '%$q8%' AND b.FormId='14') ";}
					}	
				else
					{
					 if($rest=="")
						{$rest.=" WHERE (b.FieldName='q8' AND b.FieldValue = '$q8' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='q8' AND b.FieldValue = '$q8' AND b.FormId='14') ";}							
					}	
			  }	
		//----------------------------scale--------------------
			if($scale!="")
			 {
				if($t=="LIKE")
					{					    
					if($rest=="")
						{$rest.=" WHERE (b.FieldName='scale' AND b.FieldValue LIKE '%$scale%' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='scale' AND b.FieldValue LIKE '%$scale%' AND b.FormId='14') ";}
					}	
				else
					{
					 if($rest=="")
						{$rest.=" WHERE (b.FieldName='scale' AND b.FieldValue = '$scale' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='scale' AND b.FieldValue = '$scale' AND b.FormId='14') ";}							
					}	
			  }	
		//----------------------------canbecontacted--------------------
			if($canbecontacted!="")
			 {
				if($t=="LIKE")
					{					    
					if($rest=="")
						{$rest.=" WHERE (b.FieldName='canbecontacted' AND b.FieldValue LIKE '%$canbecontacted%' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='canbecontacted' AND b.FieldValue LIKE '%$canbecontacted%' AND b.FormId='14') ";}
					}	
				else
					{
					 if($rest=="")
						{$rest.=" WHERE (b.FieldName='canbecontacted' AND b.FieldValue = '$canbecontacted' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='canbecontacted' AND b.FieldValue = '$canbecontacted' AND b.FormId='14') ";}							
					}	
			  }	
		//----------------------------wantupdates--------------------
			if($wantupdates!="")
			 {
				if($t=="LIKE")
					{					    
					if($rest=="")
						{$rest.=" WHERE (b.FieldName='wantupdates' AND b.FieldValue LIKE '%$wantupdates%' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='wantupdates' AND b.FieldValue LIKE '%$wantupdates%' AND b.FormId='14') ";}
					}	
				else
					{
					 if($rest=="")
						{$rest.=" WHERE (b.FieldName='wantupdates' AND b.FieldValue = '$wantupdates' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='wantupdates' AND b.FieldValue = '$wantupdates' AND b.FormId='14') ";}							
					}	
			  }	
		//----------------------------year--------------------
			if($year!="")
			 {
				if($t=="LIKE")
					{					    
					if($rest=="")
						{$rest.=" WHERE (b.FieldName='Year' AND b.FieldValue LIKE '%$year%' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='Year' AND b.FieldValue LIKE '%$year%' AND b.FormId='14') ";}
					}	
				else
					{
					 if($rest=="")
						{$rest.=" WHERE (b.FieldName='Year' AND b.FieldValue = '$year' AND b.FormId='14') ";}
						else
						{$rest.=" $o (b.FieldName='Year' AND b.FieldValue = '$year' AND b.FormId='14') ";}							
					}	
			  }		

			if($rest!="")
			 {				
						
			 }				
			else
			{
					    $rest="WHERE a.FormId='14'";
			}
			
			  //echo $rest;
			  //die();
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
                            <strong>Advance Search Result | <a href="#" onclick="getexporttoxls4();"> Export to Excel </a>|</strong>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                        	<div class="datatable-scroll" id="insert_search_export3">
                            <div class="table-responsive">
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
	
     <!-- Custom JS-->
    <script type="text/javascript" src="js/feedback.js"></script>  
    
     <!-- Excel File-->  
    <script src="js/jquery.battatech.excelexport.js"></script>	
			            
		<!-- /.row -->	