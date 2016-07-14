/* Copyright (C) YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

jQuery(function($) {

    //function to trigger the hidden links
    function area1func(event) {		
		   $("a[data-modal-class-name='area1_a']")[0].click();
      }
	  
	function area2func(event) {		
		   $("a[data-modal-class-name='area2_a']")[0].click();
      }
	  
	function area3func(event) {		
		   $("a[data-modal-class-name='area3_a']")[0].click();
      }
	  
	function area4func(event) {		
		   $("a[data-modal-class-name='area4_a']")[0].click();
      }
	  
	  //if user clicked the link in the map-call the function
      $('#area1').click(area1func);
	  $('#area2').click(area2func);
      $('#area3').click(area3func);
      $('#area4').click(area4func);
	  
	   /*---------------------sticky-----------------------------------------------*/
	   $("#sticker").sticky({ topSpacing: 50 });
	   $("#sticker_left").sticky({ topSpacing: 50 });
	   $("#sticker_menu").sticky({ topSpacing: 50 });
	   
	   
	   /*------------------------inpage anchor scroll--------------------------------*/
	   $('a[href*=#StrategicPlanningServices]').on('click', function(event){     
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		});
		
		$('a[href*=#SalesandMarketingServices]').on('click', function(event){     
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		});
				
		$('a[href*=#ManagementAdvisoryServices]').on('click', function(event){     
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		});
		
		$('a[href*=#SubmitOrder]').on('click', function(event){     
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		});		
		
		 $('a[href*="#SubmitOrder"]').attr('data-uk-smooth-scroll','');  
		
		//--------------
		$('a[href*=#StrategyandBusinessWinningWorkshops]').on('click', function(event){     
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		});
		$('a[href*=#InCompanyTrainings]').on('click', function(event){     
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		});
		$('a[href*=#ELearningOnlineCourses]').on('click', function(event){     
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		});
		$('a[href*=#MoreValueAddingServices]').on('click', function(event){     
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		});		
});

