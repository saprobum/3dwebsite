function add(event) {
	if (event) {
		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();
	}
	const nav = document.getElementById("navigation");
	if (!nav) {
		console.error("❌ ERROR: Navigation element with id='navigation' not found!");
		return;
	}
	nav.classList.toggle("show");
	const isOpen = nav.classList.contains("show");

	// Animate hamburger to X
	const hamburger = document.getElementById("hamburger-btn");
	if (hamburger) {
		const spans = hamburger.querySelectorAll("span");
		if (isOpen) {
			// Transform to X
			spans[0].style.transform = "rotate(45deg) translateY(6px)";
			spans[1].style.opacity = "0";
			spans[2].style.transform = "rotate(-45deg) translateY(-6px)";
		} else {
			// Back to hamburger
			spans[0].style.transform = "";
			spans[1].style.opacity = "1";
			spans[2].style.transform = "";
		}
	}

	console.log("✅ Menu toggled. Menu is now:", isOpen ? "OPEN" : "CLOSED");
}

// Setup event listeners on page load
document.addEventListener('DOMContentLoaded', function () {
	const nav = document.getElementById("navigation");
	const hamburger = document.getElementById("hamburger-btn");

	console.log("🔍 Mobile Menu System Check:");
	console.log("  Navigation element:", nav ? "✅ Found" : "❌ Not found");
	console.log("  Hamburger button:", hamburger ? "✅ Found" : "❌ Not found");

	if (nav && hamburger) {
		console.log("  Status: ✅ Mobile menu ready!");

		// Add click event listener
		hamburger.addEventListener('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
			e.stopImmediatePropagation();
			console.log("🍔 Hamburger clicked!");
			add(e);
		}, true);

		console.log("  Event listeners: ✅ Attached");
	} else {
		console.error("  Status: ❌ Mobile menu NOT ready!");
	}
});

/* Theme Switcher Logic - Tailwind Only */
function initTheme() {
	const savedTheme = localStorage.getItem('theme') || 'light';

	// Apply Tailwind dark mode class
	if (savedTheme === 'dark') {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
	updateThemeIcon(savedTheme);
}

function toggleTheme() {
	// Check current state via class
	const isDark = document.documentElement.classList.contains('dark');
	const newTheme = isDark ? 'light' : 'dark';

	// Save preference
	localStorage.setItem('theme', newTheme);

	// Toggle Tailwind class
	if (newTheme === 'dark') {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}

	updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
	const btn = document.getElementById('theme-toggle');
	if (btn) {
		btn.innerHTML = theme === 'light' ? '<i class="fa fa-moon-o"></i>' : '<i class="fa fa-sun-o"></i>';
	}
}

// Init on load
document.addEventListener('DOMContentLoaded', initTheme);

function specles() {
	document.getElementById("rotateh").classList.toggle("animated");
}

/* por the aside */
function dangsound() {
	var dangle = new Audio();
	dangle.src = "media/dangling.mp3";
	dangle.paused;
	/* Theme Switcher Logic moved to global scope */


	var poster = document.getElementById("as");
	function dangp() {
		dangle.play();
		dangle.loop = true;
	}
	poster.addEventListener("mouseenter", dangp);
	poster.addEventListener("mouseleave", dangs);
	function dangs() {
		//dangle.stop;
		dangle.pause();
	}
}
window.addEventListener("load", dangsound);
/* for the aside */

/* for the logo */


// var button ; 


function welcome() {
	var song = new Audio();
	song.src = "media/sa.mp3";
	song.paused;
	//var button = document.getElementById("logo"); //id itself an object in the DOM
	logop.addEventListener("click", playPause);
	function playPause() {
		if (song.paused) {
			song.play();
		}
		else {
			song.pause();
		}
	}
}

window.addEventListener("load", welcome);



/* for the logo */

function pro() {
	var song = new Audio();
	song.src = "media/bleepy.mp3";
	song.play();
}


/* main 3d rotate */

function rotate() {
	document.getElementById("rotatep").classList.toggle("rotate");
}



/* main 3d rotate */

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (/*document.body.scrollTop > 20 ||*/ document.documentElement.scrollTop > 200) {
		document.getElementById("totop").style.display = "flex";
	} else {
		document.getElementById("totop").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction(e) {
	// Trigger explosion
	const button = document.getElementById("totop");
	const rect = button.getBoundingClientRect();
	const x = rect.left + rect.width / 2;
	const y = rect.top + rect.height / 2;

	createParticles(x, y);

	// Scroll to top
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

function createParticles(x, y) {
	const particleCount = 30;
	for (let i = 0; i < particleCount; i++) {
		const particle = document.createElement('div');
		particle.style.position = 'fixed';
		particle.style.left = x + 'px';
		particle.style.top = y + 'px';
		particle.style.width = '5px';
		particle.style.height = '5px';
		particle.style.backgroundColor = i % 2 === 0 ? '#00ffff' : '#ffb300';
		particle.style.borderRadius = '50%';
		particle.style.pointerEvents = 'none';
		particle.style.zIndex = '10000';
		document.body.appendChild(particle);

		const angle = Math.random() * Math.PI * 2;
		const velocity = Math.random() * 100 + 50;
		const tx = Math.cos(angle) * velocity;
		const ty = Math.sin(angle) * velocity;

		particle.animate([
			{ transform: 'translate(0, 0) scale(1)', opacity: 1 },
			{ transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
		], {
			duration: 1000,
			easing: 'cubic-bezier(0, .9, .57, 1)',
		}).onfinish = () => particle.remove();
	}
}



/* for the fixed navigation */

function fixed() {
	var x = document.getElementById("navigation");
	if (window.pageYOffset > 180) {
		x.classList.add("fixed");
	} else {
		x.classList.remove("fixed");
	}

}
window.addEventListener("scroll", fixed);

/* for the fixed navigation */




/* for the paralax */
function sc() {
	if (window.pageYOffset > 250) {
		para.style.top = -(window.pageYOffset / 3) + "px";
	} else {
		para.style.top = 0;
	}
}
window.addEventListener("scroll", sc);


/* for the paralax */

//PULSE SOUND WHEN THE window is resized to less than 200px
function pul() {
	let pulse = new Audio();
	pulse.src = "media/bleepy.mp3";
	let width = window.innerWidth;
	if (width <= 500) {
		pulse.play();
		// pulse.loop = true;
	} else {
		pulse.pause();
	}

}
window.addEventListener("load", pul)
//window.addEventListener("resize",pul)

function collapse() {
	document.getElementById("nav").classList.toggle("show");
}

/* Timeline Intersection Observer */
document.addEventListener("DOMContentLoaded", function () {
	// Select all elements to animate
	const timelineItems = document.querySelectorAll(".timeline-content-animate, .timeline-dot-animate");

	if (timelineItems.length > 0) {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Remove the opacity-0 and translate classes to show the element
						entry.target.classList.remove("opacity-0");
						entry.target.classList.remove("translate-x-[100px]");
						entry.target.classList.remove("-translate-x-[100px]");
						entry.target.classList.remove("-translate-y-10");
						// Stop observing once integrated
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.1, // Trigger when 10% of the item is visible
				rootMargin: "0px 0px -50px 0px", // Offset a bit so it triggers before fully scrolling past
			}
		);

		timelineItems.forEach((item) => {
			observer.observe(item);
		});
	}
});