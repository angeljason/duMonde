/* Copyright (C) YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */


jQuery(function($) {
	
	$("#btnExport").click(function () {
            $("#tblExport").battatech_excelexport({
                containerid: "tblExport"
               , datatype: 'table'
            });
    });
	
	$("#btnExport2").click(function () {
            $("#tblExport2").battatech_excelexport({
                containerid: "tblExport2"
               , datatype: 'table'
            });
    });
	
	//events archive
	$("#btnExport3").click(function () {
            $("#tblExport3").battatech_excelexport({
                containerid: "tblExport3"
               , datatype: 'table'
            });
    });
	
	$(document).ready(function() {
		$('#tblExport2').DataTable( {
			scrollY:        450,
			scrollX:        true,
			scrollCollapse: true,
			paging:         false,
			fixedColumns:   {
            leftColumns: 5
			},
			"createdRow": function( row, data, dataIndex ) {
				if ( data[19] == "Queued" ) {
				 // $(row).addClass( 'danger' );
				  $(row).children('td, th').css('background-color','#FFFFF0');
				}
				if ( data[19] == "On-hold" ) {
				 $(row).children('td, th').css('background-color','#FFCCCC');
				}
				if ( data[19] == "Ongoing Preparation" ) {
				  $(row).children('td, th').css('background-color','#CCFFFF');
				}
				if ( data[19] == "" ) {
				   $(row).children('td, th').css('background-color','#FFFFF0');
				}
			}
		} );
		
		//events archive
		$('#tblExport3').DataTable( {
			scrollY:        450,
			scrollX:        true,
			scrollCollapse: true,
			paging:         false,
			"info":     	false,
			fixedColumns:   {
            leftColumns: 6
			}
		} );
	} );

});

