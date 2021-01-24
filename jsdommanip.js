const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.onclick = function () {
	let inputCurrentValue = input.value;
	input.value = "";

	const liItem = document.createElement("li");
	const span = document.createElement("span");
	const myButton = document.createElement("button");

	liItem.appendChild(span);
	liItem.appendChild(myButton);

	span.innerText = inputCurrentValue;
	myButton.innerText = "Delete";

	ul.appendChild(liItem);

	myButton.onclick = function () {
		ul.removeChild(liItem);
	};
	input.focus();
};
