function add() {
	document.getElementById("myDropdown").classList.toggle("show");
}
function specles() {
	document.getElementById("rotateh").classList.toggle("animated");
}

/* por the aside */
function dangsound() {
	var dangle = new Audio();
	dangle.src = "media/dangling.mp3";
	dangle.paused;
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
		document.getElementById("totop").style.display = "block";
	} else {
		document.getElementById("totop").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	/* document.body.scrollTop = 0;*/

	document.documentElement.scrollTop = 0;

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
		pulse.loop = true;
	} else {
		pulse.pause();
	}

}
window.addEventListener("load", pul)
//window.addEventListener("resize",pul)

function collapse() {
	document.getElementById("nav").classList.toggle("show");
}