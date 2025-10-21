var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }


function createListElement() {
	var li = document.createElement("li");
	var text = document.createTextNode(input.value);
	li.appendChild(text);

	// Create delete button
	var deleteBtn = document.createElement("button");
	deleteBtn.textContent = "Delete";
	deleteBtn.style.marginLeft = "10px";
	deleteBtn.style.marginBottom = "2%"

	// Add functionality to the parent <li>
	deleteBtn.addEventListener("click", function()
{
	if(confirm("Are you sure you want to delete this item?"))
	{
		li.remove();
	}
});

// Add button to <li>
li.appendChild(deleteBtn);
// Add <li> to <ul>
ul.appendChild(li);
// Clear input
input.value = ""
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}



function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// make existing button work
const existingDeleteButtons = document.querySelectorAll("ul button");

existingDeleteButtons.forEach(function(button)
{
	button.addEventListener("click", function()
{
	if(confirm("Are you sure you want to delete this item?"))
	{
		this.parentElement.remove();
	}
});
});