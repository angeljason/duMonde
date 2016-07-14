<?php
			$host = "localhost";
			$user = "nickmond_dumonde";
			$pass = "73A-mvVR2*Kf159635";
			$db = "nickmond_dumonde";
			$conn  = new mysqli($host, $user, $pass, $db);
			
			if($conn->connect_error){
				die("Connection Failed: " . $conn->connect_error);
			}	
?>
				
<html>
	<head>
		<title>Invoice List</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
		<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	</head>
	<body>
		
			<div style="margin-left:auto;margin-right:auto;width:800px;box-shadow:0px 0px 2px 3px #e9e9e9;padding:30px;font-family:Arial;">
				<center>
				<img src="list_logo.png" style="margin-left:auto;margin-right:auto;">
			</center>
			<div style="background-color:#5051a0;padding-left:30px;padding-bottom:10px;padding-top:10px;color:#fff;">
			<h3>Registered Without Invoice Mail</h3>
			</div>
			
			<?php
			//List registered without invoice
				$num = "
						SELECT  a.SubmissionId as id,
						a.FieldValue as company,
						b.FieldValue as industry,
						c.FieldValue as fname,
						d.FieldValue as lname,
						e.FieldValue as email,
						f.FieldValue as servicetype,
						g.FieldValue as deliverdate,
						h.FieldValue as message
							FROM e27rt_rsform_submission_values AS a,
							e27rt_rsform_submission_values AS b,
							e27rt_rsform_submission_values AS c,
							e27rt_rsform_submission_values AS d,
							e27rt_rsform_submission_values AS e,
							e27rt_rsform_submission_values AS f,
							e27rt_rsform_submission_values AS g,
							e27rt_rsform_submission_values AS h
                            
                             
							WHERE a.FormId=13
							AND a.SubmissionId = b.SubmissionId
							AND a.SubmissionId = c.SubmissionId
							AND a.SubmissionId = d.SubmissionId
							AND a.SubmissionId = e.SubmissionId
							AND a.SubmissionId = f.SubmissionId
							AND a.SubmissionId = g.SubmissionId
							AND a.SubmissionId = h.SubmissionId
							AND a.FieldName = 'Company'
							AND b.FieldName = 'Industry'
							AND c.FieldName = 'FirstName'
							AND d.FieldName = 'LastName'
							AND e.FieldName = 'Email'
							AND f.FieldName = 'ServiceTypes'
							AND g.FieldName = 'DeliverDate'
							AND h.FieldName = 'Message'
                            
							AND a.SubmissionId NOT IN (SELECT SubmissionId 
							FROM e27rt_microscr_invoice 
							WHERE SubmissionId is not null)";
				
					$id=$conn->query($num);
					if($id->num_rows>0){
						while($row = $id->fetch_assoc()){
							
							echo '<br>'.
							'<div style="box-shadow:0px 0px 2px 3px #e9e9e9;padding:30px;">'.
							'<strong>Company: </strong>'.$row['company'].'<br>'.
							'<strong>Name: </strong>'.$row['fname'].' '.$row['lname'].'<br>'.
							'<strong>Email: </strong>'.$row['email'].'<br>'.
							'<strong>Service Type: </strong>'.$row['servicetype'].'<br>'.
							'<strong>Due Date: </strong>'.$row['deliverdate'].'<br>'.
							'<strong>Message: </strong><br>'.$row['message'].'<br><br>'.
							'<form action="form.php" method="post">
							<input type="hidden" name="subid" value="'.$row['id'].'"/>
							<input type="submit" value="Create Invoice"/>
							</form>'.
							'</div>';
						}
					}else{
						$results ="No results";
					}
			
			?>
			<br>
			<div style="background-color:#5051a0;padding-left:30px;padding-bottom:10px;padding-top:10px;color:#fff;">
			<h3>Registered With Invoice Mail</h3>
			</div>
			
			<?php
			
			echo 
						'<script>
							function sample(){
								var num = document.getElementById("testnum").value;
								alert(num);
							}
						</script>';
			//Sent Invoice
				$qsent=$conn->query("SELECT * FROM e27rt_microscr_invoice");
				if($qsent->num_rows>0){
					while($row = $qsent->fetch_assoc()){
						echo '<br>'.
						'<div style="box-shadow:0px 0px 2px 3px #e9e9e9;padding:30px;">'.
						'<strong>Company: </strong>'.$row['CompanyName'].
						'<br>'.
						'<strong>Name: </strong>'.$row['Name'].
						'<br>'.
						'<strong>Invoice No: </strong>'.$row['InvoiceNo'].
						'<br>'.
						'<strong>Invoice Date: </strong>'.$row['InvoiceDate'].
						'<br>'.
						'<strong>Due Date: </strong>'.$row['DueDate'].
						'<br>'.
						'<strong>Duration: </strong>'.$row['Duration'].
						'<br>'.
						'<form action="preview.php" method="post" target="_blank"><input type="hidden" name="subid" value="'.$row['SubmissionId'].'"/><br><input type="submit" value="Preview Invoice" class="uk-button"></form>'.
						'</div>';
						$result = "result";
						
			
					}
				}else{
					$results ="No results";
				}	
			
			?>
			</div>
		

	</body>
</html>