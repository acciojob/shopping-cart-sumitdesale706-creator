//your code here
let name = document.querySelector("#item-name-input");
let price = document.querySelector("#item-price-input");
let button = document.querySelector("#add");
let table = document.querySelector("#t");
let grandTotal = document.querySelector("#total");

var nameToAdd;
var priceToAdd = 0;
var sum = 0;


name.addEventListener("change", () => {
	 nameToAdd = name.value;
});

price.addEventListener("change", () => {
	 priceToAdd = Number(price.value);
});


function addRow(){
	   if(name.value && price.value){
		   var row = document.createElement("tr");
           var col1 = document.createElement("td");
           var col2 = document.createElement("td");
		   col1.innerText = nameToAdd;
	       col2.innerText = priceToAdd;
	       row.appendChild(col1);
	       row.appendChild(col2);
	       table.appendChild(row);
	   }
}

function findTotal(){
	  if(priceToAdd){
		   sum = sum + priceToAdd;
	       grandTotal.innerText = `GrandTotal=${sum}`;
	  }
}

function emptyAll(){
	  name.value = "";
	  price.value = "";
}

button.addEventListener("click", () => {
	   addRow();
	   findTotal();
       emptyAll(); 
})