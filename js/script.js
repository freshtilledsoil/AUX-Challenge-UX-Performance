/*global jQuery */


// Typographic scale toggle function
$(document).ready(function(e) {
	// Type scale toggle button
	$(".toggle-scale").click(function(){
		$("html").toggleClass("font-scale-active font-scale-inactive");
		$(this).toggleClass("on off");
	});
	// Type fonts toggle button
	$(".toggle-fonts").click(function(e){
		e.preventDefault();
		if($("html").hasClass("wf-active")) {
			$("html").removeClass("wf-active");
			$("html").addClass("wf-inactive");
			$(this).removeClass("on");
			$(this).addClass("off");
		} else {
			$("html").removeClass("wf-inactive");
			$("html").addClass("wf-active");
			$(this).removeClass("off");
			$(this).addClass("on");
			// reset correction
			$("html").addClass("corrected");
			$(".toggle-font-correction").removeClass("off");
			$(".toggle-font-correction").addClass("on");
		}
	});
	// Type font correction toggle button
	$(".toggle-font-correction").click(function(e){
		e.preventDefault();
		if($("html").hasClass("corrected")) {
			$("html").removeClass("corrected");
			$(this).removeClass("on");
			$(this).addClass("off");
		} else {
			$("html").addClass("corrected");
			$(this).removeClass("off");
			$(this).addClass("on");
		}
	});
	// OTF Features toggle button
	$(".toggle-otf-features").click(function(){
		$("html").toggleClass("otf-active otf-inactive");
		$(this).toggleClass("on off");
	});
});

function checkMq() {
	$('body').removeClass('mq-l-desk');
	$('body').removeClass('mq-desk');
	$('body').removeClass('mq-l-tab');
	$('body').removeClass('mq-s-tab');
	$('body').removeClass('mq-phone');
	if(Modernizr.mq('only all and (min-width: 80.0625em)')) { 
		$('body').addClass('mq-l-desk');
		resetMenu();
	} else if(Modernizr.mq('only all and (min-width: 58em)')) {
		$('body').addClass('mq-desk');
		resetMenu();
	} else if(Modernizr.mq('only all and (min-width: 44em)')) {
		$('body').addClass('mq-l-tab');
	} else if(Modernizr.mq('only all and (min-width: 25em)')) {
		$('body').addClass('mq-s-tab');
	} else {
		$('body').addClass('mq-phone');
	}
};

$(function() {
    // the call to checkMq here will execute after the document has loaded
    checkMq();

    $(window).resize(function() {
        // the call to checkMq here will execute every time the window is resized
        checkMq();
    });

    // you can add other listeners here click, hover, etc.  
});


