`use strict`;
console.log("hello world");

// let display_name = 'Developer'

names = ["Developer", "User", "Joe"];
index = -1;

// change name in orange after a 2 second delay and constantly loop
// add container pre-animation then remove to create transition
const text_change = document.getElementById("change");

setInterval(function () {
	// add pre animation on top of container
	text_change.classList.add("pre-animation");

	// change text and remove animation after 1 second
	setTimeout(function () {
		text_change.innerHTML = names[index];
		text_change.classList.remove("pre-animation");
	}, 300);

	// get mod of index / length
	index = (index + 1) % names.length;
}, 5000);

// set initial value to Gradient1
selected_gradient = "Gradient1";

const body_element = document.getElementById("gradient-background");
console.log(body_element.className);

// listen for radio button
// onclick of a radio button, run this function
function get_value(radio) {
	// change gradient type
	// use onchange for each radio to get the value in class
	selected_gradient = radio.value;
	console.log(selected_gradient);
	body_element.classList.replace(body_element.className, selected_gradient);
}

// let shape follow mouse
const shape_follow = document.getElementById("shape-follow");

// increase the size of the blob follow on click, return to normal size on release
document.addEventListener("mousedown", function () {
	// console.log("mouseclick");

	shape_follow.style.backgroundColor = "white";
	const size_big = "70px";
	shape_follow.style.height = size_big;
	shape_follow.style.width = size_big;
});

// mouseup > return blob to initial size
document.addEventListener("mouseup", function () {
	// console.log("mouseup");

	shape_follow.style.backgroundColor = "cyan";
	const size_def = "50px";
	shape_follow.style.height = size_def;
	shape_follow.style.width = size_def;
});

// if mouse moves, then get left and top position
const x_offset = 50;
const y_offset = 340;
window.onmousemove = (e) => {
	const x = e.pageX - window.innerWidth / 40,
		y = e.pageY - window.innerHeight / 2.7;
	// shape_follow.style.left = e.clientX - 20 + "px";
	// shape_follow.style.top = e.clientY - y_offset + "px";
	// console.log(x, y);

	// create keyframe class
	const keyframes = {
		transform: `translate(${x}px, ${y}px)`,
	};

	// animate to new position after 800ms, and retain state after animation done
	shape_follow.animate(keyframes, {
		duration: 800,
		fill: `forwards`,
	});
};
// document.addEventListener("mousemove", onMouseMove);

// move background image based on an Active Index datapoint
// first create a variable for menu options
const menu = document.getElementById("radio_options");
const circle_pattern = document.getElementById("background-pattern");
// create array for each available radio button
Array.from(document.getElementsByClassName("radio_button"))

	// iterate over each and update menu active index for corresponding mouseover
	.forEach((item, index) => {
		item.onmouseover = () => {
			menu.dataset.activeIndex = index;

			// use switch to change property of circle pattern
			switch (index) {
				case 0:
					circle_pattern.style.backgroundPosition = "25% 0%";
					break;
				case 1:
					circle_pattern.style.backgroundPosition = "50% 0%";
					break;
				case 2:
					circle_pattern.style.backgroundPosition = "75% 0%";
					break;
				case 3:
					circle_pattern.style.backgroundPosition = "100% 0%";
					break;
			}
		};
	});
