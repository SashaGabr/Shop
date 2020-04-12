var basketJson = localStorage.getItem("basket");

var basketProducts = JSON.parse(basketJson);

var productsTable = document.getElementById("products-table");

for (let product of basketProducts){
  AddProductToHtml(product);
}

function AddProductToHtml(product){
  var tr = document.createElement("tr");

  var nameTd = document.createElement("td");
  var priceTd = document.createElement("td");

  nameTd.innerText = product.Name;
  priceTd.innerText = product.Price;

  tr.appendChild(nameTd);
  tr.appendChild(priceTd);

  productsTable.appendChild(tr);
}