// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector(".price span").innerText;
  const quantityElement = product.querySelector(".quantity input").value;
  let subtotalElement = product.querySelector(".subtotal span");

  subtotalElement.innerText = parseFloat(priceElement * quantityElement);

  return subtotalElement;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelectorAll('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const items = document.querySelectorAll(".product");
  items.forEach((item) => {
    updateSubtotal(item);
  });

  // ITERATION 3
  let totalSubs = 0;
  let allSubtotalElements = document.querySelectorAll(".subtotal span");
  let total = document.querySelector("#total-value span");

  allSubtotalElements.forEach((element) => {
    totalSubs += Number(element.innerText);
  });

  total.innerText = totalSubs;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const parentNode = target.parentNode.parentNode;
  parentNode.remove();

  // const cart = document.querySelector("#cart");
  // const tableBody = document.querySelector("tbody");
  // cart.removeChild(tableBody);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector(".create-product input").value;
  const unitPrice = document.querySelector(
    '.create-product input[type="number"]'
  ).value;
  
  const cart = document.querySelector("#cart");

  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const td5 = document.createElement("td");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");
  const input = document.createElement("input");
  const button = document.createElement("button");

  tr.className = "product";

  td1.className = "name";
  td2.className = "price";
  td3.className = "quantity";
  td4.className = "subtotal";
  td5.className = "action";

  span1.innerHTML = productName;
  span2.innerHTML = unitPrice;
  span3.innerHTML = 0;

  input.type = "number";
  input.value = "0";
  input.min = "0";
  input.placeholder = "Quantity";

  button.className = "btn btn-remove";
  button.innerText = "Remove";

  cart.appendChild(tbody);
  tbody.appendChild(tr);
  tr.appendChild(td1);
  td1.appendChild(span1);
  tr.appendChild(td2);
  td2.appendChild(span2);
  tr.appendChild(td3);
  td3.appendChild(input);
  tr.appendChild(td4);
  td4.appendChild(span3);
  tr.appendChild(td5);
  td5.appendChild(button);

  calculateAll();
  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach((button) => { button.addEventListener("click", removeProduct);});
}



window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });

  const createBtn = document.querySelector("#create");
  createBtn.addEventListener("click", createProduct);
});
