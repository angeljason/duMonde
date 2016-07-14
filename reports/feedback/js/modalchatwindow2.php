<?php
 require('conn/db.php');	
 include('check_session.php'); 
  
 $id2=strtoupper(trim($_GET['id2']));
																                                    
$queryu2 = "SELECT a.id as uid,a.userfirstname as ufname,a.userlastname as ulastname FROM sys_usertb a WHERE a.id = $id2 AND a.companyid=$companyid ORDER BY a.userfirstname ASC LIMIT 1";
$resultu2 = pg_query($conn, $queryu2);
while ($rowu2= pg_fetch_array($resultu2, NULL, PGSQL_ASSOC))
{
	$uid2= $rowu2['uid'];
	$ufname2= mb_convert_case($rowu2['ufname'], MB_CASE_TITLE, "UTF-8");	
	$ulastname2= mb_convert_case($rowu2['ulastname'],MB_CASE_TITLE, "UTF-8");	
}

$chatconversationid=0;
$queryu3 = "SELECT a.id as chatconversationid
FROM sys_chatconversationtb a 
WHERE ((a.userid1 = $userid AND a.userid2 = $id2)
OR
(a.userid1 = $id2 AND a.userid2 = $userid))
AND a.companyid=$companyid 
ORDER BY a.id DESC LIMIT 1";
$resultu3 = pg_query($conn, $queryu3);
while ($rowu2= pg_fetch_array($resultu3, NULL, PGSQL_ASSOC))
{
	$chatconversationid= $rowu2['chatconversationid'];	
}
	
	$totalrows = pg_num_rows($resultu3);	
	//echo $queryu3;
		if ($totalrows==1)
			{													                                   	
?>

																		                            <ul class="chat">
																		                            	
																		                            	<?php
																		                            	$queryu4 = "SELECT a.chatconversationid,a.datetimecreated,a.reply,a.userid as useridx 
																		                            				,b.userfirstname as ufname2,b.userlastname as ulastname2
																													FROM sys_chatconversationreplytb a
																													LEFT JOIN sys_usertb b ON a.userid=b.id
																													WHERE a.chatconversationid=$chatconversationid 
																													ORDER BY a.id ASC LIMIT 100";
																											$resultu4 = pg_query($conn, $queryu4);
																											while ($rowu4= pg_fetch_array($resultu4, NULL, PGSQL_ASSOC))
																											{
																												$chatconversationid= $rowu4['chatconversationid'];
																												$datetimecreated= $rowu4['datetimecreated'];
																												$reply= $rowu4['reply'];
																												$useridx= $rowu4['useridx'];
																												$ufname2= $rowu4['ufname2'];
																												$ulastname2= $rowu4['ulastname2'];
																												
																																if($useridx=$userid)
																																{
																																		echo "<li class='left clearfix'>";
																										                                    echo "<div class='chat-body clearfix'>";
																										                                        echo "<div class='header'>";
																										                                            echo "<strong class='primary-font'>";
																										                                            	echo $ufname2." ".$ulastname2;
																										                                            echo "</strong>"; 
																										                                            echo "<small class='pull-right text-muted'>".$datetimecreated;
																										                                            echo "</small>";
																										                                        echo "</div>";
																										                                        echo "<p>";
																										                                            echo $reply;
																										                                        echo "</p>";
																										                                    echo "</div>";
																										                                echo "</li>";
																								                                }
																																else {
																										                                echo "<li class='right clearfix'>";
																										                                    echo "<div class='chat-body clearfix'>";
																										                                        echo "<div class='header'>";
																										                                            echo "<small class='text-muted'>";
																										                                            echo $datetimecreated;
																										                                            echo "</small>";
																										                                            echo "<strong class='pull-right primary-font'>";
																										                                           		echo $ufname2." ".$ulastname2;
																										                                            echo "</strong>";
																										                                        echo "</div>";
																										                                        echo "<p>";
																										                                            echo $reply;
																										                                        echo "</p>";
																										                                    echo "</div>";
																										                                echo "</li>";																																		
																																}
																											}
																										?>												
																		                            </ul>
																		                        </div>
																
																		                    </div>
																		                    <!-- /.panel .chat-panel -->
			                                              </div>
			                                              <!-- <div class="col-lg-8">-->
			                                              	
<?php
}
else {

?>

																										<?php echo "No Recent Conversation"; ?>
																		            
			                                              </div>
			                                              <!-- <div class="col-lg-8">-->
<?php			
}
?>
<!-- Custom JS-->
<script type="text/javascript" src="js/index.js"></script>   	                           	
<script type="text/javascript">
$(document).ready(function() {
	jQuery("abbr.timeago").timeago();
    showmodalchatwindow2(<?php echo $id2; ?>);

} );   
</script> 