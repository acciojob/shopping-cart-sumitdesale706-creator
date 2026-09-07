//your code here
let name = document.querySelector("#item-name-input");
let price = document.querySelector("#item-price-input");
let button = document.querySelector("#add");
let table = document.querySelector("#t");
let grandTotal = document.querySelector("#total");

var sum = 0;

function addRow(){
	   if(name.value !== "" && price.value !== ""){
		   var row = document.createElement("tr");
           var col1 = document.createElement("td");
           var col2 = document.createElement("td");
		   col1.innerText = name.value;
	       col2.innerText = Number(price.value);
	       row.appendChild(col1);
	       row.appendChild(col2);
	       table.appendChild(row);
	   }
}

function findTotal(){
	  if(price.value !== ""){
		   sum = sum + Number(price.value);
	       grandTotal.innerText = `GrandTotal=${sum}`;
	  }
}

function emptyAll(){
	  name.value = "";
	  price.value = "";
}

button.addEventListener("click", () => {
	   if(name.value === "" || price.value === ""){
		   return;
	   }
	   addRow();
	   findTotal();
       emptyAll(); 
})