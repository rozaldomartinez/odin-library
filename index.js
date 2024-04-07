// Get Elements By ID
const modal = document.getElementById("modal");
const bookName = document.getElementById("bookName");
const author = document.getElementById("author");
const year = document.getElementById("year");
const myLibrary = [];
const table = document.getElementById("displayElements");
const tbody = document.getElementById("elementBody");

// Show Modal
document.getElementById('showModal').onclick = function(){
	modal.show();
}
// Close Modal
document.getElementById('closeModal').onclick = function(){
	modal.close();
}

function Book(title, year, author){
	this.title = title;
	this.year = year;
	this.author = author;
	this.info = function(){
		console.log("The Title is " + this.title);
		console.log("Year Published is " + this.year);
		console.log("The Author is " + this.author);
	}
}
// Add Book to Library
document.getElementById("submit").onclick = function(){
	myLibrary.push(new Book(bookName.value, year.value, author.value));
	bookName.value = "";
	author.value = "";
	year.value = "";
	alert("Book Added!");
	modal.close();
	// Show Elements (Add myLibrary as parameter)
	showElements(myLibrary);

}

function showElements(arr){
	// If myLibrary is empty hide the table else show
	if(myLibrary.length < 1){
		table.hidden = true;
	}
	else{
		table.hidden = false;
		
	}
	// Reset the table
	removeBookRows(tbody);
	for (let book in arr){
		// Create Row
		let row = document.createElement("tr");

		// Create Cells
		let c1 = document.createElement("td");
		let c2 = document.createElement("td");
		let c3 = document.createElement("td");
		let c4 = document.createElement("td");
		c1.innerText = arr[book].title;
		c2.innerText = arr[book].author;
		c3.innerText = arr[book].year;
		c4.innerHTML = "<button onclick = 'removeBook("+book+")'>Remove</button>"
		row.appendChild(c1);
		row.appendChild(c2);
		row.appendChild(c3);
		row.appendChild(c4);
		tbody.appendChild(row);

	}


}
function removeBook(key){
	myLibrary.splice(key, 1);
	console.log(myLibrary);
	console.log(myLibrary.length);
	if(myLibrary.length < 1){
		table.hidden = true;
	}
	showElements(myLibrary);
	alert("done");

}

function removeBookRows(parent){
	while(parent.firstChild){
		parent.removeChild(parent.firstChild);
	}
}