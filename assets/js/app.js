// mattfeeney.us jquery 


$( document ).ready(function() {


	 // smooth scroll to anchor links

    $("a").on('click', function(event) {

	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top -100
	      }, 600, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        // window.location.hash = hash;
	      });
	    } // End if
	});





	// static man nav disolve on scroll and reveal menu slides down


    
    // var bar = $('header');
    // $(window).scroll(function() {
    //     if($(this).scrollTop() > 450) {
    //         bar.addClass("sticky")
    //         bar.addClass("animate")
    //         // bar.slideDown(250);
          
    //     } else {
    //         bar.removeClass("sticky")
    //         bar.removeClass("animate")
    //         // bar.slideUp(250);
    //     }
    // });


    $(".main_nav button").on("click", function() {
    	$(".main_nav ul").slideToggle(320);
    });

});







