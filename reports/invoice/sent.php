<?php
	require 'PHPMailer/PHPMailerAutoload.php';
	header('Location: http://dumonde.com.au/reports/invoice/index.php');
		$mail = new PHPMailer;
		
		$numid = $_POST['numid'];
		
		$company = $_POST['company'];
		$name = $_POST['name'];
		$address = $_POST['address'];
		$state = $_POST['state'];
		$postal = $_POST['postal'];
		$country = $_POST['country'];
		$phone = $_POST['phone'];
		$abn = $_POST['abn'];
		
		$invoiceno = $_POST['invoiceno'];
		$invoicedate = $_POST['invoicedate'];
		$duedate = $_POST['duedate'];
		$duration = $_POST['duration'];
		
		$description = $_POST['description'];
		$taxtype = $_POST['taxtype'];
		$subtotal = $_POST['subtotal'];
		$tax = $_POST['tax'];
		$paid = $_POST['paid'];
		$due = "$".$subtotal.".".$tax."0";
		
		$notes = $_POST['notes'];
		
		$subtotalprice = "$".$subtotal.".00";
		$taxprice = "$0.".$_POST['tax']."0";
		
		$email = $_POST['email'];
		
		//Insert Start
		
			$host = "localhost";
			$user = "nickmond_dumonde";
			$pass = "73A-mvVR2*Kf159635";
			$db = "nickmond_dumonde";
			$conn  = new mysqli($host, $user, $pass, $db);
			
			if($conn->connect_error){
				die("Connection Failed: " . $conn->connect_error);
			}
			
			$sql = "INSERT INTO e27rt_microscr_invoice(SubmissionId,
					CompanyName,
					Name,
					Address,
					State,
					Postal,
					Country,
					Phone,
					ABN,
					InvoiceNo,
					InvoiceDate,
					DueDate,
					Duration,
					Description,
					TaxType,
					Subtotal,
					Tax,
					AmountDue,
					Notes,
					Email,
					SentInvoice)
					VALUES('$numid',
					'$company',
					'$name',
					'$address',
					'$state',
					'$postal',
					'$country',
					'$phone',
					'$abn',
					'$invoiceno',
					'$invoicedate',
					'$duedate',
					'$duration',
					'$description',
					'$taxtype',
					'$subtotalprice',
					'$taxprice',
					'$due',
					'$notes',
					'$email',
					'Sent')";
					
					if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
		//Insert End	

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'abyssinian.arvixe.com'; 				  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'intern@dumonde.com.au';                 // SMTP username
$mail->Password = 'dumonde01';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

//$mail->setFrom('mail.dumonde.com.au', 'The duMonde Group');
$mail->From ='intern@dumonde.com.au';
$mail->FromName='The duMonde Group';   // Add a recipient
$mail->addAddress('intern@dumonde.com.au');    
$mail->addAddress($email);           // Name is optional
$mail->addReplyTo('mail.dumonde.com.au', 'The duMonde Group');
//$mail->addCC('cc@example.com');

$body =   "<center>
		<div style='max-width:600px;'>
			<table  style='padding:5px;max-width:600px;'>
				<tr>
					<td>
						<img src='https://drive.google.com/uc?id=0B1B6LQn95Q0vbGFDVjg2YnZnNTg' width='100%'>
					</td>
				</tr>
				
				<tr>
					<td>
						<table style='background-color:#32337f;color:#fff;font-family:Arial;padding:5px;max-width:600px;' width='100%'>
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
						<table style='padding:5px;max-width:600px;font-family:Arial;' width='100%'>
							<tr>
								<td width='50%'>
									<font face='Arial'><strong>Bill to:</strong></font>
								</td>
								<td width='50%'>
									<font face='Arial'><strong>Invoice No:</strong></font>
								</td>
							</tr>
							<tr>
								<td width='50%'>
									$company 
								</td>
								<td width='50%'>
									$invoiceno
								</td>
							</tr>
							<tr>
								<td width='50%'>
									$name
								</td>
								<td width='50%'>
									<font face='Arial'><strong>Invoice Date:</strong></font>
								</td>
							</tr>
							<tr>
								<td width='50%'>
									$address
								</td>
								<td width='50%'>
									$invoicedate
								</td>
							</tr>
							<tr>
								<td width='50%'>
									$state $postal
								</td>
								<td width='50%'>
									<font face='Arial'><strong>Due Date:</strong></font>
								</td>
							</tr>
							<tr>
								<td width='50%'>
									$country
								</td>
								<td width='50%'>
									$duedate
								</td>
							</tr>
							<tr>
								<td width='50%'>
									$phone
								</td>
								<td width='50%'>
									<font face='Arial'><strong>Duration:</strong></font>
								</td>
							</tr>
							<tr>
								<td width='50%'>
									$abn
								</td>
								<td width='50%'>
									$duration
								</td>
							</tr>
						</table>
					</td>
				</tr>
				
				<tr>
					<td>
						<table style='background-color:#32337f;color:#fff;font-family:Arial;padding:5px;max-width:600px;' width='100%'>
							<tr>
								<td width='80%'>
									<strong>Description</strong>
								</td>
								<td width='20%'>
									<strong>Tax Type</strong>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				
				<tr>
					<td>
						<table style='font-family:Arial;padding:5px;max-width:600px;' width='100%'>
							<tr>
								<td width='80%' style='border-bottom:1px solid #000'>
									$description
								</td>
								<td width='20%' style='border-bottom:1px solid #000'>
									$taxtype
								</td>
							</tr>
						</table>
					</td>
				</tr>
				
				<tr>
					<td>
						<table style='font-family:Arial;padding:5px;max-width:600px;' width='100%'>
							<tr>
								<td width='80%'>
									Subtotal (ex $taxtype):
								</td>
								<td width='30%'>
									 $$subtotal.00
								</td>
							</tr>
							<tr>
								<td width='80%'>
									$taxtype:
								</td>
								<td width='30%'>
									$$tax.00
								</td>
							</tr>
							<tr>
								<td width='80%'>
									Total (inc $taxtype):	
								</td>
								<td width='30%'>
									$due
								</td>
							</tr>
							<tr>
								<td width='80%'>
									Amount Paid:
								</td>
								<td width='30%' >
									 $$paid.00
								</td>
							</tr>
							<tr>
								<td width='80%'>
								<strong>Amount Due:</strong>
								</td>
								<td width='30%' >
									<strong>$due</strong>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				
				<tr>
					<td>
						<table style='background-color:#32337f;color:#fff;font-family:Arial;padding:5px;width:600px;' width='100%'>
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
						<table style='font-family:Arial;padding:5px;max-width:600px;' width='100%'>
							<tr>
								<td>
									$notes
								</td>
							</tr>
						</table>
					</td>
				</tr>
				
				<tr>
					<td>
						<table style='max-width:600px;padding:5px;font-family:Arial;background-color:#32337f' width='100%' border='0'>
							<tr>
								<td style='text-align:right;color:#fff;' width='60%'>
									<strong>Social Media:</strong>
								</td>
								<td style='text-align:right;color:#fff;'>
							
									<a href='https://www.facebook.com/thedumondegroup/'>
										<img src='https://drive.google.com/uc?id=0B1B6LQn95Q0vaERaNDdQcV8wTTQ' >
									</a>
									<a href='https://twitter.com/dumondegrp'>
										<img src='https://drive.google.com/uc?id=0B1B6LQn95Q0vUl9NNHFPUHZIWnM' >
									</a>
									<a href='https://www.youtube.com/channel/UCQLlFtloZKSbZzibpyBcX2w'>
										<img src='https://drive.google.com/uc?id=0B1B6LQn95Q0vM1R0M2d5SzZWZTA' >
									</a>
									<a href='http://www.linkedin.com/company/dumonde-group-pty-ltd'>
										<img src='https://drive.google.com/uc?id=0B1B6LQn95Q0vRkQ4R0xHQWwteUk' >
									</a>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			
			</table>
		</div>
	</center>";

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Invoice Receipt';
$mail->AltBody    = "Any message.";
$mail->MsgHTML($body);   

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
	
}

?>