$(document).ready(function(){
		

	$('.parallax').parallax();
	// $('.button-collapse').sideNav({
	//       menuWidth: 300, // Default is 240
	//       edge: 'left', // Choose the horizontal origin
	//       closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
	//     }
	// );
	
	
	$(window).scroll(function() {



	    if ($(this).scrollTop() > 800) {
	        $('#left').removeClass("hidden").addClass("animated once rollIn");
	    }
	    if ($(this).scrollTop() > 2000 && $(this).scrollTop() < 2450) {
	    	
	    	$('#proj1').removeClass("hidden").addClass("animated once flipInX");
	    }
	    else if ($(this).scrollTop() > 3400 || $(this).scrollTop() < 1800) {
	    	
	    	$('#proj1').removeClass("animated once flipInX").addClass("hidden");
	    }
	    if ($(this).scrollTop() > 2050 && $(this).scrollTop() < 2450) {
	    	
	    	$('#proj2').removeClass("hidden").addClass("animated once flipInX");
	    }
	    else if ($(this).scrollTop() > 3400 || $(this).scrollTop() < 1800) {
	    
	    	$('#proj2').removeClass("animated once flipInX").addClass("hidden");
	    }
	    if ($(this).scrollTop() > 2100 && $(this).scrollTop() < 2450) {

	    	$('#proj3').removeClass("hidden").addClass("animated once flipInX");
	    }
	    else if ($(this).scrollTop() > 3400 || $(this).scrollTop() < 1800) {
	    	
	    	$('#proj3').removeClass("animated once flipInX").addClass("hidden");
	    }
	    if ($(this).scrollTop() > 2100 && $(this).scrollTop() < 2450) {

	    	$('#proj4').removeClass("hidden").addClass("animated once flipInX");
	    }
	    else if ($(this).scrollTop() > 3400 || $(this).scrollTop() < 1800) {
	    	
	    	$('#proj4').removeClass("animated once flipInX").addClass("hidden");
	    }

	    if ($(window).scrollTop() != 0){
	    	//console.log("IM scrolling");
	    	
	    	$("#bar").removeClass('customnavbartop').addClass("customnavbar");
	    	
	    	

	    }
	    else if ($(window).scrollTop() === 0){
	    	//console.log("im on top");
	    	$('#bar').removeClass("customnavbar").addClass('customnavbartop');
	    }
	});

	$("#navleft").click(function(){
		$('html, body').animate({
	        scrollTop: $("#background").offset().top
	    }, 2000);
	});

	$("#sum").click(function() {
		
	    $('html, body').animate({
	        scrollTop: $("#one").offset().top -65
	    }, 2000);
	});
	$("#project").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#two").offset().top-65
	    }, 2000);
	});
	$("#contact").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#3").offset().top-65
	    }, 2000);
	});
	$(function(){
				$( "#drag" ).draggable();
			});
	$(".rotate").textrotator({
        animation: "flip",
        separator: ",",
    speed: 2000
    });


});	
