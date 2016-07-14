<?php
			$host = "localhost";
			$user = "nickmond_dumonde";
			$pass = "73A-mvVR2*Kf159635";
			$db = "nickmond_dumonde";
			$conn  = new mysqli($host, $user, $pass, $db);
			
			
			$subid=$_POST['subid'];
			$company ="";
			$name = "";
			$duedate ="";
			$email ="";
			$description ="";
			
			$results ="";
			
			if($conn->connect_error){
				die("Connection Failed: " . $conn->connect_error);
			}
			
			
				//Company
				$qcompany=$conn->query("SELECT SubmissionId,FieldName,FieldValue 
						FROM e27rt_rsform_submission_values 
						WHERE SubmissionId = $subid
						AND FieldName = 'Company'");
				if($qcompany->num_rows>0){
					while($row = $qcompany->fetch_assoc()){
						//echo $row['SubmissionId']." ".$row['FieldName']." ".$row['FieldValue']. "<br>";
						$company = $row['FieldValue'];
					}
				}else{
					$results ="No results";
				}	
			//FirstName	
				$qfname=$conn->query("SELECT SubmissionId,FieldName,FieldValue 
						FROM e27rt_rsform_submission_values 
						WHERE SubmissionId = $subid
						AND FieldName = 'FirstName'");
				if($qfname->num_rows>0){
					while($row = $qfname->fetch_assoc()){
						//echo $row['SubmissionId']." ".$row['FieldName']." ".$row['FieldValue']. "<br>";
						$fname = $row['FieldValue'];
					}
				}else{
					$results ="No results";
				}
			//LastName
				$qlname=$conn->query("SELECT SubmissionId,FieldName,FieldValue 
						FROM e27rt_rsform_submission_values 
						WHERE SubmissionId = $subid
						AND FieldName = 'LastName'");
				if($qlname->num_rows>0){
					while($row = $qlname->fetch_assoc()){
						//echo $row['SubmissionId']." ".$row['FieldName']." ".$row['FieldValue']. "<br>";
						$lname = $row['FieldValue'];
					}
				}else{
					$results ="No results";
				}
			//Name
				$name = $fname.' '.$lname;
			//Email
				$qemail=$conn->query("SELECT SubmissionId,FieldName,FieldValue 
						FROM e27rt_rsform_submission_values 
						WHERE SubmissionId = $subid
						AND FieldName = 'Email'");
				if($qemail->num_rows>0){
					while($row = $qemail->fetch_assoc()){
						//echo $row['SubmissionId']." ".$row['FieldName']." ".$row['FieldValue']. "<br>";
						$email= $row['FieldValue'];
					}
				}else{
					$results ="No results";
				}
				
			//Deliver Date
				$qduedate=$conn->query("SELECT SubmissionId,FieldName,FieldValue 
						FROM e27rt_rsform_submission_values 
						WHERE SubmissionId = $subid
						AND FieldName = 'DeliverDate'");
				if($qduedate->num_rows>0){
					while($row = $qduedate->fetch_assoc()){
						//echo $row['SubmissionId']." ".$row['FieldName']." ".$row['FieldValue']. "<br>";
						$duedate = $row['FieldValue'];
					}
				}else{
					$results ="No results";
				}	
				
			//Description
				$qdescription=$conn->query("SELECT SubmissionId,FieldName,FieldValue 
						FROM e27rt_rsform_submission_values 
						WHERE SubmissionId = $subid
						AND FieldName = 'ServiceTypes'");
				if($qdescription->num_rows>0){
					while($row = $qdescription->fetch_assoc()){
						//echo $row['SubmissionId']." ".$row['FieldName']." ".$row['FieldValue']. "<br>";
						$description = $row['FieldValue'];
					}
				}else{
					$results ="No results";
				}
			
			$conn->close();
			
?>
<html>
	<head>
		<link rel="stylesheet" href="bootstrap/css/bootstrap.css"/>
		<link rel="stylesheet" href="bootstrap/css/bootstrapValidator.css"/>

		<script type="text/javascript" src="bootstrap/jquery/jquery.min.js"></script>
		<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="bootstrap/js/bootstrapValidator.js"></script>
		
		<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/css/datepicker.min.css" />
		<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/css/datepicker3.min.css" />

		<script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.min.js"></script>
		
		<script type="text/javascript">
			$(document).ready(function() {
				validate();
				$('#company,#name,#address,#state,#postal,#country,#phone,#abn,#invoiceno,#invoicedate,#duedate,#duration,#description,#taxtype,#subtotal,#tax,#paid,#notes').change(validate);
				$('#form').bootstrapValidator({
					message: 'This value is not valid',
					feedbackIcons: {
						valid: 'glyphicon glyphicon-ok',
						invalid: 'glyphicon glyphicon-remove',
						validating: 'glyphicon glyphicon-refresh'
					},
					fields: {
						address:{
							validators:{
								notEmpty:{
									message: 'The address is required and cannot be empty'
								}
							}
						},
						state:{
							validators:{
								notEmpty:{
									message: 'The state is required and cannot be empty'
								},
								regexp: {
									regexp: /^[a-zA-Z]+$/,
									message: 'Invalid input'
								}
							}
						},
						postal:{
							validators:{
								notEmpty:{
									message: 'The postal number is required and cannot be empty'
								},
								regexp: {
									regexp: /^[0-9]+$/,
									message: 'Invalid input'
								}
							}
						},
						country:{
							validators:{
								notEmpty:{
									message: 'The country is required and cannot be empty'
								},
								regexp: {
									regexp: /^[a-zA-Z]+$/,
									message: 'Invalid input'
								}
							}
						},
						phone:{
							validators:{
								notEmpty:{
									message: 'The phone number is required and cannot be empty'
								},
								regexp: {
									regexp: /^[0-9]+$/,
									message: 'Invalid input'
								}
							}
						},
						abn:{
							validators:{
								notEmpty:{
									message: 'The abn is required and cannot be empty'
								},
								regexp: {
									regexp: /^[0-9 ]+$/,
									message: 'Invalid input'
								}
							}
						},
						invoiceno:{
							validators:{
								notEmpty:{
									message: 'The invoice number is required and cannot be empty'
								},
								regexp: {
									regexp: /^[0-9]+$/,
									message: 'Invalid input'
								}
							}
						},
						invoicedate:{
							validators:{
								notEmpty:{
									message: 'The invoice date is required and cannot be empty'
								},date: {
									format: 'DD/MM/YYYY',
									message: 'The value is not a valid date'
								}
							}
						},
						duration:{
							validators:{
								notEmpty:{
									message: 'The duration is required and cannot be empty'
								},
								regexp: {
									regexp: /^[a-zA-Z0-9 ]+$/,
									message: 'Invalid input'
								}
							}
						},
						taxtype:{
							validators:{
								notEmpty:{
									message: 'The tax type is required and cannot be empty'
								},
								regexp: {
									regexp: /^[a-zA-Z]+$/,
									message: 'Invalid input'
								}
							}
						},
						subtotal:{
							validators:{
								notEmpty:{
									message: 'The subtotal is required and cannot be empty'
								},
								regexp: {
									regexp: /^[0-9]$/,
									message: 'Invalid input'
								}
							}
						},
						tax:{
							validators:{
								notEmpty:{
									message: 'The tax price is required and cannot be empty'
								},
								regexp: {
									regexp: /^[0-9]$/,
									message: 'Invalid input'
								}
							}
						},
						paid:{
							validators:{
								notEmpty:{
									message: 'The amount paid is required and cannot be empty'
								},
								regexp: {
									regexp: /^[0-9]+$/,
									message: 'Invalid input'
								}
							}
						},
						notes:{
							validators:{
								notEmpty:{
									message: 'The notes is required and cannot be empty'
								}
							}
						}
					}
				});
				
				 $('#datePicker')
					.datepicker({
						format: 'dd/mm/yyyy'
					});
			});
			
			
			function validate(){
				if($('#company').val().length >0&&
					$('#name').val().length >0&&
					$('#address').val().length>0&&
					$('#state').val().length >0&&
					$('#postal').val().length >0&&
					$('#country').val().length >0&&
					$('#phone').val().length >0&&
					$('#abn').val().length >0&&
					$('#invoiceno').val().length >0&&
					$('#invoicedate').val().length >0&&
					$('#duedate').val().length >0&&
					$('#duration').val().length >0&&
					$('#description').val().length >0&&
					$('#taxtype').val().length >0&&
					$('#subtotal').val().length >0&&
					$('#tax').val().length >0&&
					$('#paid').val().length >0&&
					$('#notes').val().length >0){
						$('#send').prop("disabled",false);
					}else{
						$('#send').prop("disabled",true);
					}
			}
			
			function preview(){
						var company = document.getElementById('company').value;
				var name = document.getElementById('name').value;
				var address = document.getElementById('address').value;
				var state = document.getElementById('state').value;
				var postal = document.getElementById('postal').value;
				var country = document.getElementById('country').value;
				var phone = document.getElementById('phone').value;
				var abn = document.getElementById('abn').value;
				
				var invoiceno = document.getElementById('invoiceno').value;
				var invoicedate = document.getElementById('invoicedate').value;
				var duedate = document.getElementById('duedate').value;
				var duration = document.getElementById('duration').value;
				
				var description = document.getElementById('description').value;
				var taxtype= document.getElementById('taxtype').value;
				var subtotal = document.getElementById('subtotal').value;
				var tax = document.getElementById('tax').value;
				var paid = document.getElementById('paid').value;
				
				var notes = document.getElementById('notes').value;
				
				document.getElementById('rcompany').innerHTML = company;
				document.getElementById('rname').innerHTML = name;
				document.getElementById('raddress').innerHTML = address;
				document.getElementById('rstatepostal').innerHTML = state+" "+postal;
				document.getElementById('rcountry').innerHTML = country;
				document.getElementById('rphone').innerHTML = phone;
				document.getElementById('rabn').innerHTML = abn;
				
				document.getElementById('rinvoiceno').innerHTML = invoiceno;
				document.getElementById('rinvoicedate').innerHTML = invoicedate;
				document.getElementById('rduedate').innerHTML = duedate;
				document.getElementById('rduration').innerHTML = duration;
				
				document.getElementById('rdescription').innerHTML = description;
				document.getElementById('rtaxtype').innerHTML = taxtype;
				document.getElementById('rsubtotal').innerHTML = "$"+subtotal+".00";
				document.getElementById('rtax').innerHTML = "$0."+tax+"0";
				document.getElementById('rpaid').innerHTML = "$"+paid+".00";
				document.getElementById('rdue').innerHTML = "$"+subtotal+"."+tax+"0";
				document.getElementById('rdue1').innerHTML = "$"+subtotal+"."+tax+"0";
				document.getElementById('rnotes').innerHTML = notes;
				
				document.getElementById('tsubtotal').innerHTML = "Subtotal (ex "+taxtype+"):";
				document.getElementById('ttax').innerHTML = taxtype+":";
				document.getElementById('ttotal').innerHTML = "Total (inc "+taxtype+"):";
				
				
				
				$("#myModal").modal("show");
				
			}
			
			function back(){
				 window.history.back();
			}
		</script>
	</head>
	<body>

			<center>
				<img src="form_logo.png" style="margin-left:auto;margin-right:auto;">
			</center>
			<hr>
			<div class="row">
            <div class="col-lg-8 col-lg-offset-2">
               

                <form id="form" method="post" class="form-horizontal" action="sent.php">
                    <div class="form-group">
                        <div class="group">
                            <label class="col-sm-2 control-label">Company Name</label>
                            <div class="col-sm-3">
                                <input type="text" class="form-control" name="company" id="company" value="<?php echo $company?>"/>
                            </div>
                        </div>
                        <div class="group">
                            <label class="col-sm-2 control-label">Invoice No.</label>
                            <div class="col-sm-3">
                                <input type="text" class="form-control" id="invoiceno" name="invoiceno"/>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
						<div class="group">
							<label class="col-sm-2 control-label">Name</label>
							<div class="col-sm-3">
								<input type="text" class="form-control" id="name" name="name" value="<?php echo $name?>"/>
							</div>
						</div>
						<div class="group">
							<label class="col-sm-2 control-label">Invoice Date</label>
							<div class="col-sm-3">
								<div class="input-group input-append date" id="datePicker">
									<input type="text" class="form-control" id="invoicedate" name="invoicedate" />
									<span class="input-group-addon add-on"><span class="glyphicon glyphicon-calendar"></span></span>
								</div>
							</div>
						</div>
                    </div>
                   
                    <div class="form-group">
						<div class="group">
							<label class="col-sm-2 control-label">Address</label>
							<div class="col-sm-3">
								<textarea type="text" class="form-control" id="address" name="address" rows="4"></textarea>
							</div>
						</div>
						<div class="group">
							<label class="col-sm-2 control-label">Due Date</label>
							<div class="col-sm-3">
								<input type="text" class="form-control" id="duedate" name="duedate" value="<?php echo str_replace(".","/",$duedate)?>"/>
							</div>
						</div>
						<br><br><br><br>
						<div class="group">
							<label class="col-sm-2 control-label">Duration</label>
							<div class="col-sm-3">
								<input type="text" class="form-control" id="duration" name="duration" />
							</div>
						</div>
                    </div>

					<div class="form-group">
							<label class="col-sm-2 control-label">State</label>
							<div class="col-sm-3">
								<input type="text" class="form-control" id="state" name="state" />
							</div>
					</div>
					
					<div class="form-group">
							<label class="col-sm-2 control-label">Postal No.</label>
							<div class="col-sm-3">
								<input type="text" class="form-control" id="postal" name="postal" />
							</div>
					</div>
					
					<div class="form-group">
							<label class="col-sm-2 control-label">Country</label>
							<div class="col-sm-3">
								<input type="text" class="form-control" id="country" name="country" />
							</div>
					</div>
					
					<div class="form-group">
							<label class="col-sm-2 control-label">Phone</label>
							<div class="col-sm-3">
								<input type="text" class="form-control" id="phone" name="phone" />
							</div>
					</div>
					
					<div class="form-group">
							<label class="col-sm-2 control-label">ABN</label>
							<div class="col-sm-3">
								<input type="text" class="form-control" id="abn" name="abn" />
							</div>
					</div>
					
					<hr>
					
					<div class="form-group">
						<div class="group">
							<label class="col-sm-2 control-label">Description</label>
							<div class="col-sm-3">
								<input type="text" class="form-control" id="description" name="description" value="<?php echo $description?>"/>
							</div>
						</div>
						<div class="group">
							<label class="col-sm-2 control-label">Email</label>
							<div class="col-sm-3">
								<input type="text" class="form-control" id="email" readonly name="email" value="<?php echo $email?>"/>
							</div>
						</div>
					</div>
					
					<div class="form-group">
						<label class="col-sm-2 control-label">Tax Type</label>
						<div class="col-sm-3">
								<input type="text" class="form-control" id="taxtype" name="taxtype" />
						</div>
						<div class="group">
							
							<div class="col-sm-3">
								<input type="hidden" class="form-control" name="numid" value="<?php echo $subid?>"/>
							</div>
						</div>
					</div>
					
					<div class="form-group">
						<label class="col-sm-2 control-label">Subtotal</label>
						<div class="col-sm-3">
								<input type="text" class="form-control" id="subtotal" name="subtotal" />
							</div>
					</div>
					
					<div class="form-group">
						<label class="col-sm-2 control-label">Tax</label>
						<div class="col-sm-3">
								<input type="text" class="form-control" id="tax" name="tax" />
							</div>
					</div>
					
					<div class="form-group">
						<label class="col-sm-2 control-label">Amount Paid</label>
						<div class="col-sm-3">
								<input type="text" class="form-control" id="paid" name="paid" />
							</div>
					</div>
					
					<div class="form-group">
						<label class="col-sm-2 control-label">Notes</label>
						<div class="col-sm-3">
								<textarea type="text" class="form-control" id="notes" name="notes" rows="4"></textarea>
							</div>
					</div>
					
                    <div class="form-group">
						<div class="group">
						<label class="col-sm-2 control-label">&nbsp;</label>
							<div class="col-sm-3">
								<button type="submit" id="send" class="btn btn-primary" data-toggle="modal" data-target="#sentModal" >Send</button>
								<button type="button" class="btn btn-primary" onclick="preview();">Preview</button>
								<button type="button" class="btn btn-primary" onclick="back();">Back</button>
							</div>
						</div>
                    </div>
                </form>
				
            </div>
        </div>
		
		
		 <!-- Preview Modal -->
<div class="modal fade" id="myModal" role="dialog">
	<div class="modal-dialog modal-lg">
			
			  <!-- Modal content-->
		 <div class="modal-content">
				<div class="modal-header">
				  <button type="button" class="close" data-dismiss="modal">&times;</button>
				  <h4 class="modal-title">Preview</h4>
				</div>
				<div class="modal-body">
				  <!--Preview-->
				  
				  
				  <center>
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
												<p id="rcompany"></p>
											</td>
											<td width='50%'>
												<p id="rinvoiceno"></p>
											</td>
										</tr>
										<tr>
											<td width='50%'>
												<p id="rname"></p>
											</td>
											<td width='50%'>
												<font face='Arial'><strong>Invoice Date:</strong></font>
											</td>
										</tr>
										<tr>
											<td width='50%'>
												<p id="raddress"></p>
											</td>
											<td width='50%'>
												<p id="rinvoicedate"></p>
											</td>
										</tr>
										<tr>
											<td width='50%'>
												<p id="rstatepostal"></p>
											</td>
											<td width='50%'>
												<font face='Arial'><strong>Due Date:</strong></font>
											</td>
										</tr>
										<tr>
											<td width='50%'>
												<p id="rcountry">
											</td>
											<td width='50%'>
												<p id="rduedate"
											</td>
										</tr>
										<tr>
											<td width='50%'>
												<p id="rphone"></p>
											</td>
											<td width='50%'>
												<font face='Arial'><strong>Duration:</strong></font>
											</td>
										</tr>
										<tr>
											<td width='50%'>
												<p id="rabn"></p>
											</td>
											<td width='50%'>
												<p id="rduration">
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
												<p id="rdescription"></p>
											</td>
											<td width='20%' style='border-bottom:1px solid #000'>
												<p id="rtaxtype"></p>
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
												<p id="tsubtotal"></p>
											</td>
											<td width='30%'>
												<p id="rsubtotal"></p>
											</td>
										</tr>
										<tr>
											<td width='80%'>
												<p id="ttax"></p>
											</td>
											<td width='30%'>
												<p id="rtax"></p>
											</td>
										</tr>
										<tr>
											<td width='80%'>
												<p id="ttotal"></p>
											</td>
											<td width='30%'>
												<p id="rdue"></p>
											</td>
										</tr>
										<tr>
											<td width='80%'>
												Amount Paid:
											</td>
											<td width='30%'>
												<p id="rpaid"></p>
											</td>
										</tr>
										<tr>
											<td width='80%'>
											<strong>Amount Due:</strong>
											</td>
											<td width='30%'>
												<strong><p id="rdue1"></p></strong>
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
												<p id="rnotes"></p>
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
				</center>
							  
						  
				</div>
				<div class="modal-footer">
					 <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
		</div>				  
	</div>	
</div>


	<!--Sent Modal-->
	<div class="modal fade" id="sentModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">    
        <div class="modal-body">
		<center>
          <h3>Invoice Email Sent</h3>
		</center>
        </div>
      </div>
      
    </div>
  </div>
		
		<!--Empty Fields Modal-->
  
	<div class="modal fade" id="emptyModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">    
        <div class="modal-body">
		<center>
          <h3>Empty Fields</h3>
		</center>
        </div>
      </div>
      
    </div>
  </div>
		
	</body>
</html>