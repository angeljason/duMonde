<?php
	
	
	$host = "localhost";
	$user = "nickmond_dumonde";
	$pass = "73A-mvVR2*Kf159635";
	$db = "nickmond_dumonde";
	$conn  = new mysqli($host, $user, $pass, $db);
			
	if($conn->connect_error){
		die("Connection Failed: " . $conn->connect_error);
	}
	
	$subid=$_POST['subid'];

	$qsent=$conn->query("SELECT * FROM e27rt_microscr_invoice WHERE SubmissionId = $subid");
				if($qsent->num_rows>0){
					while($row = $qsent->fetch_assoc()){
						echo 
				'<center>
					<div style="max-width:600px;">
						<table  style="padding:5px;max-width:600px;">
							<tr>
								<td>
									<img src="https://drive.google.com/uc?id=0B1B6LQn95Q0vbGFDVjg2YnZnNTg" width="100%">
								</td>
							</tr>
							
							<tr>
								<td>
									<table style="background-color:#32337f;color:#fff;font-family:Arial;padding:5px;max-width:600px;" width="100%">
										<tr>
											<td>
												<strong>Job Summary</strong>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							
							<tr>
								<td>
									<table style="padding:5px;max-width:600px;font-family:Arial;" width="100%">
										<tr>
											<td width="50%">
												<font face="Arial"><strong>Bill to:</strong></font>
											</td>
											<td width="50%">
												<font face="Arial"><strong>Invoice No:</strong></font>
											</td>
										</tr>
										<tr>
											<td width="50%">
												<p>'.$row['CompanyName'].'</p>
											</td>
											<td width="50%">
												<p>'.$row['InvoiceNo'].'</p>
											</td>
										</tr>
										<tr>
											<td width="50%">
												<p>'.$row['Name'].'</p>
											</td>
											<td width="50%">
												<font face="Arial"><strong>Invoice Date:</strong></font>
											</td>
										</tr>
										<tr>
											<td width="50%">
												<p>'.$row['Address'].'</p>
											</td>
											<td width="50%">
												<p>'.$row['InvoiceDate'].'</p>
											</td>
										</tr>
										<tr>
											<td width="50%">
												<p>'.$row['State'].' '.$row['Postal'].'</p>
											</td>
											<td width="50%">
												<font face="Arial"><strong>Due Date:</strong></font>
											</td>
										</tr>
										<tr>
											<td width="50%">
												<p>'.$row['Country'].'</p>
											</td>
											<td width="50%">
												<p>'.$row['DueDate'].'</>
											</td>
										</tr>
										<tr>
											<td width="50%">
												<p>'.$row['Phone'].'</p>
											</td>
											<td width="50%">
												<font face="Arial"><strong>Duration:</strong></font>
											</td>
										</tr>
										<tr>
											<td width="50%">
												<p>'.$row['ABN'].'</p>
											</td>
											<td width="50%">
												<p>'.$row['Duration'].'</p>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							
							<tr>
								<td>
									<table style="background-color:#32337f;color:#fff;font-family:Arial;padding:5px;max-width:600px;" width="100%">
										<tr>
											<td width="80%">
												<strong>Description</strong>
											</td>
											<td width="20%">
												<strong>Tax Type</strong>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							
							<tr>
								<td>
									<table style="font-family:Arial;padding:5px;max-width:600px;" width="100%">
										<tr>
											<td width="80%" style="border-bottom:1px solid #000">
												<p>'.$row['Description'].'</p>
											</td>
											<td width="20%" style="border-bottom:1px solid #000">
												<p>'.$row['TaxType'].'</p>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							
							<tr>
								<td>
									<table style="font-family:Arial;padding:5px;max-width:600px;" width="100%">
										<tr>
											<td width="80%">
												<p>Subtotal (ex '.$row['TaxType'].')</p>
											</td>
											<td width="30%">
												<p>'.$row['Subtotal'].'</p>
											</td>
										</tr>
										<tr>
											<td width="80%">
												<p>'.$row['TaxType'].':</p>
											</td>
											<td width="30%">
												<p>'.$row['Tax'].'</p>
											</td>
										</tr>
										<tr>
											<td width="80%">
												<p>Total (inc '.$row['TaxType'].'):</p>
											</td>
											<td width="30%">
												<p>'.$row['AmountDue'].'</p>
											</td>
										</tr>
										<tr>
											<td width="80%">
												Amount Paid:
											</td>
											<td width="30%">
												<p>$0.00</p>
											</td>
										</tr>
										<tr>
											<td width="80%">
											<strong>Amount Due:</strong>
											</td>
											<td width="30%">
												<strong><p>'.$row['AmountDue'].'</p></strong>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							
							<tr>
								<td>
									<table style="background-color:#32337f;color:#fff;font-family:Arial;padding:5px;width:600px;" width="100%">
										<tr>
											<td>
												<strong>Notes</strong>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							
							<tr>
								<td>
									<table style="font-family:Arial;padding:5px;max-width:600px;" width="100%">
										<tr>
											<td>
												<p>'.$row['Notes'].'</p>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							
							<tr>
								<td>
									<table style="max-width:600px;padding:5px;font-family:Arial;background-color:#32337f" width="100%" border="0">
										<tr>
											<td style="text-align:right;color:#fff;" width="60%">
												<strong>Social Media:</strong>
											</td>
											<td style="text-align:right;color:#fff;">
										
												<a href="https://www.facebook.com/thedumondegroup/">
													<img src="https://drive.google.com/uc?id=0B1B6LQn95Q0vaERaNDdQcV8wTTQ" >
												</a>
												<a href="https://twitter.com/dumondegrp">
													<img src="https://drive.google.com/uc?id=0B1B6LQn95Q0vUl9NNHFPUHZIWnM" >
												</a>
												<a href="https://www.youtube.com/channel/UCQLlFtloZKSbZzibpyBcX2w">
													<img src="https://drive.google.com/uc?id=0B1B6LQn95Q0vM1R0M2d5SzZWZTA" >
												</a>
												<a href="http://www.linkedin.com/company/dumonde-group-pty-ltd">
													<img src="https://drive.google.com/uc?id=0B1B6LQn95Q0vRkQ4R0xHQWwteUk" >
												</a>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
						
					</div>
				</center>';
						
			
					}
				}else{
					$results ="No results";
				}	
?>