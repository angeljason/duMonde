<?php
include('check_session.php'); 
?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Administration</title>

    <!-- Bootstrap Core CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../css/plugins/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- DataTables CSS -->
    <link href="../css/plugins/dataTables.bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../css/jquery.dataTables2.css">
	<style type="text/css">						
			th, td { white-space: nowrap; }
		    table.dataTables_wrapper {
		        width: 900px;
		        margin: 0 auto;
		        padding-right: 100px !important;
		    }
    </style>    

    <!-- Custom CSS -->
    <link href="../css/sb-admin-2.css" rel="stylesheet">  
    
    <!-- BS WizardCSS -->
    <link href="../css/bswizard.css" rel="stylesheet">      

    <!-- Custom Fonts -->
    <link href="../font-awesome-4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    
    <!-- Modal CSS -->
    <link href="../css/bootstrap-modal-bs3patch.css" rel="stylesheet" />
    <link href="../css/bootstrap-modal.css" rel="stylesheet" />
    
    <!-- Date Picker -->
    <link href="../css/datepicker.css" rel="stylesheet">    
    
    <!-- DATA TABLE CSS -->
    <link href="../css/jquery-ui.css" rel="stylesheet">     
    <link href="../css/dataTables.jqueryui.css" rel="stylesheet">    
    
    <!-- Validator -->
    <link rel="../stylesheet" href="css/bootstrap.css"/>
	<link rel="../stylesheet" href="css/bootstrapValidator.min.css"/>    

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="../index.php">Human Resources Information System (HRIS)</a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
                <!-- /.dropdown -->
                <?php echo "Welcome ". $userfirstname."!";?>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="../userprofile.php"><i class="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="../logout.php"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->
				<?php 
				include("navigation.php"); 
				?>
            <!-- /.navbar-static-side -->
        </nav>