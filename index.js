`use strict`;
console.log("hello world");

// let display_name = 'Developer'

names = ["Developer", "User", "Joe"];
index = 0;

// change name in orange after a 2 second delay and constantly loop
setInterval(function () {
	document.getElementById("change").innerHTML = names[index];

	// get mod of index / length
	index = (index + 1) % names.length;
}, 2000);

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
let shape_follow = document.getElementById("shape-follow");

// if mouse moves, then get left and top position
const x_offset = 50;
const y_offset = 360;
window.onMouseMove = (e) => {
	// const x = e.clientX = shape_follow.offsetWidth / 2,
	// y = e.clientY = shape_follow.offsetHeight / 2;
	shape_follow.style.left = e.clientX - 20 + "px";
	shape_follow.style.top = e.clientY - y_offset + "px";
	// console.log(typeofe.pageX, e.pageY);
};

document.addEventListener("mousemove", onMouseMove);
