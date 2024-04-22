/** @format */

import { WishList } from "./wishlist.js"; // Adjust the import path if necessary

// Select DOM elements
const form = document.querySelector("#submitForm");
const makeInput = document.querySelector("#make");
const modelInput = document.querySelector("#model");
const yearInput = document.querySelector("#year");
const makeDisplay = document.querySelector("#make-display");
const modelDisplay = document.querySelector("#model-display");
const yearDisplay = document.querySelector("#year-display");
const removeBtn = document.querySelector("#remove-btn");
const wishlistUl = document.querySelector("#wishlist");

if (
  !form ||
  !makeInput ||
  !modelInput ||
  !yearInput || 
  !makeDisplay ||
  !modelDisplay ||
  !yearDisplay ||
  !removeBtn ||
  !wishlistUl
) {
  console.error(
    "One or more DOM elements are missing, please check the selectors!"
  );
  // Optionally disable functionality or inform the user if essential elements are missing
}

const wishlist = new WishList();

// DOM manipulation functions
function showCarDetails(car) {
  makeDisplay.textContent = car.make;
  modelDisplay.textContent = car.model;
  yearDisplay.textContent = car.year;
  removeBtn.disabled = false;
  removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMList() {
  while (wishlistUl.firstChild) {
    wishlistUl.removeChild(wishlistUl.firstChild);
  }

  wishlist.list.forEach(car => {
    const li = document.createElement("li");
    li.textContent = `${car.make} ${car.model}`;
    li.addEventListener("click", () => showCarDetails(car));
    wishlistUl.appendChild(li);
  });
}

function addCar(event) {
  event.preventDefault();
  if (makeInput.value && modelInput.value && yearInput.value) {
    // Ensure all fields are filled
    wishlist.add(makeInput.value, modelInput.value, yearInput.value);
    updateDOMList();
  } else {
    console.log("All input fields must be filled out.");
  }
}

function removeCar() {
  const carId = Number(removeBtn.getAttribute("data-carId"));
  wishlist.remove(carId);
  updateDOMList();
  makeDisplay.textContent = "";
  modelDisplay.textContent = "";
  yearDisplay.textContent = "";
  removeBtn.disabled = true;
}

// Event listeners
form.addEventListener("submit", addCar);
removeBtn.addEventListener("click", removeCar);
