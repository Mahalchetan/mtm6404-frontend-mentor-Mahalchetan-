const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");
const quantityInput = document.getElementById("quantity");

let quantity = 0;

decreaseButton.addEventListener("click", () => {
  if (quantity > 0) {
    quantity--;
    quantityInput.value = quantity;
  }
});

increaseButton.addEventListener("click", () => {
  quantity++;
  quantityInput.value = quantity;
});

// Handle add to cart functionality
const addToCartButton = document.getElementById("add-to-cart");
addToCartButton.addEventListener("click", () => {
  if (quantity > 0) {
    alert(`${quantity} items added to the cart!`);
  } else {
    alert("Please add at least 1 item to the cart.");
  }
});
