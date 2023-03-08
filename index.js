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

// listen for radio button
function get_value(radio){
	// change gradient type
	document.getElementById("radio_check").innerHTML = radio.value;
}

console.log(selected_gradient);
