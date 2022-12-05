// Other important pens.
// Map: https://codepen.io/themustafaomar/pen/ZEGJeZq
// Dashboard: https://codepen.io/themustafaomar/pen/jLMPKm

let dropdowns = document.querySelectorAll('.navbar-c .dropdown-toggler')
let dropdownIsOpen = false

// Handle dropdown menues
if (dropdowns.length) {
    // Usually I don't recommend doing this (adding many event listeners to elements have the same handler)
    // Instead use event delegation: https://javascript.info/event-delegation
    // Why: https://gomakethings.com/why-event-delegation-is-a-better-way-to-listen-for-events-in-vanilla-js
    // But since we only have two dropdowns, no problem with that. 
    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('click', (event) => {
            let target = document.querySelector(`#${event.target.dataset.dropdown}`)

            if (target) {
                if (target.classList.contains('show')) {
                    target.classList.remove('show')
                    dropdownIsOpen = false
                } else {
                    target.classList.add('show')
                    dropdownIsOpen = true
                }
            }
        })
    })
}

// Handle closing dropdowns if a user clicked the body
window.addEventListener('mouseup', (event) => {
    if (dropdownIsOpen) {
        dropdowns.forEach((dropdownButton) => {
            let dropdown = document.querySelector(`#${dropdownButton.dataset.dropdown}`)
            let targetIsDropdown = dropdown == event.target

            if (dropdownButton == event.target) {
                return
            }

            if ((!targetIsDropdown) && (!dropdown.contains(event.target))) {
                dropdown.classList.remove('show')
            }
        })
    }
})

// Open links in mobiles
function handleSmallScreens() {
    document.querySelector('.navbar-c-toggler')
        .addEventListener('click', () => {
            let navbarMenu = document.querySelector('.navbar-c-menu')

            if (navbarMenu.style.display === 'flex') {
                navbarMenu.style.display = 'none'
                return
            }

            navbarMenu.style.display = 'flex'
            navbarMenu.style.background = '#fff'
        })
}

handleSmallScreens()

$(document).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
           $('.navbar-c').addClass('box-hover');
        } else {
           $('.navbar-c').removeClass('box-hover');
        }
    });
  });



// slider

$(document).ready(function ($) {
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		dots: false,
		nav: true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
	});
	var owl = $(".owl-carousel");
	owl.owlCarousel();
	$(".next-btn").click(function () {
		owl.trigger("next.owl.carousel");
	});
	$(".prev-btn").click(function () {
		owl.trigger("prev.owl.carousel");
	});
	$(".prev-btn").addClass("disabled");
	$(owl).on("translated.owl.carousel", function (event) {
		if ($(".owl-prev").hasClass("disabled")) {
			$(".prev-btn").addClass("disabled");
		} else {
			$(".prev-btn").removeClass("disabled");
		}
		if ($(".owl-next").hasClass("disabled")) {
			$(".next-btn").addClass("disabled");
		} else {
			$(".next-btn").removeClass("disabled");
		}
	});
});


// slider-end