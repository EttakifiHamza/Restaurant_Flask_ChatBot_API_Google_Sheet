

	$(document).ready(function () {
		$(document).on("scroll", onScroll);
 
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
 
			$('a').each(function () {
				$(this).removeClass('navactive');
			})
			$(this).addClass('navactive');
 
			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});
 
	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('.nav li a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('ul.nav li a').removeClass("navactive");
				currentLink.addClass("navactive");
			}
			else{
				currentLink.removeClass("navactive");
			}
		});
	
       
        $(function(){
            $('#portfolio').mixitup({
                targetSelector: '.item',
                transitionSpeed: 350
            });
        });

          $(function() {
            $( "#datepicker" ).datepicker();
        });
    
    };


// Get DOM Elements


// Events
var modal = document.querySelector('#my-modal');

var closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

var but = document.getElementById("Book");
var Name = document.getElementById("Name");
var Phone = document.getElementById("Phone");
var date = document.getElementById("Dates");
var Time = document.getElementById("Time");
var Person = document.getElementById("Person");

but.addEventListener('click',function(e){
                    e.preventDefault();

                    if(Phone.value=="" || Name.value=="" || date.value=="" || Time.value=="" || Person.value==""){
                        aler("the  field empty")
                    }else{
                            if(window.XMLHttpRequest){
                            xhr = new XMLHttpRequest();
                        }else if(window.ActiveXobject){
                            xhr = new ActiveXobject("Microsoft.XMLHTTP");
                        }else{
                            alert("Votre navigateur n'est pas compatibli avec AJAX");
                        }


                        if(xhr){
                            xhr.onreadystatechange = function(){
                                if (xhr.readyState  === 4 && xhr.status === 200) {
                                    alert("Your Reservation is successful");
                                    window.location="/";
                                }
                            }

                            xhr.open('GET','/book?Phone='+Phone.value+"&Name="+Name.value+"&Date="+date.value+"&Time="+Time.value+"&Person="+Person.value,true);
                            xhr.send();
                        }
                    }

});