/*========== NAVBAR TRANSPARENT TO SOLID ==========*/

$(document).ready(function() { //when document(DOM) loads completely. 
        // Transition effect for navbar 
        $(window).scroll(function() { //function is called while you scrolls 
          // checks if window is scrolled more than 300px, adds/removes solid class
          if($(this).scrollTop() > 300) { 
              $('.navbar').addClass('solid'); //add class 'solid' in any element which has class 'navbar'
          } else {
              $('.navbar').removeClass('solid'); //remove class 'solid' in any element which has class 'navbar'
          }
        });
});

/*========== CLOSE MOBILE NAV ON CLICK ==========*/

$(document).ready(function () { //when document loads completely.
    $(document).click(function (event) { //click anywhere
        var clickover = $(event.target); //get the target element where you clicked
        var _opened = $(".navbar-collapse").hasClass("show"); //check if element with 'navbar-collapse' class has a class called show. Returns true and false.
        if (_opened === true && !clickover.hasClass("navbar-toggler")) { // if _opened is true and clickover(element we clicked) doesn't have 'navbar-toggler' class
            $(".navbar-toggler").click(); //toggle the navbar; close the navbar menu in mobile.
        }
    });
});

/*========== SMOOTH SCROLLING TO LINKS ==========*/

$(document).ready(function(){
	$("a").on('click', function(event) {
		if(this.hash != ""){
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate( {
				scrollTop: $(hash).offset().top
			}, 800, function() {
				window.location.hash =hash;
			});
		}//End if
	});
});


/*========== Boucing DOWN ARROW==========*/
$(document).ready(function() { 
        $(window).scroll(function() {  
        $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
        });
});

