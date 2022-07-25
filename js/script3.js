gsap.from("#wobble", {
	xPercent: 100,
	yPercent: 100,
	ease: "power2.out",
	duration: 2,
	scrollTrigger: {
		trigger: "#ourSVG",
		pin: true, // pin the trigger element while active
		start: "center 40%", // when the center of the trigger hits 40% from the top of the viewport
		end: "+=1000", // end after scrolling 1000px beyond the start
		scrub: 2 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
	}
});