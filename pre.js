// script.js

// document.addEventListener("DOMContentLoaded", function() {
//   const productContainer = document.querySelector(".product-list");

//   // Sample product data
//   const products = [
//     { name: "Cute Dress", price: "$29.99" },
//     { name: "Cool T-shirt", price: "$19.99", image: "tshirt.jpg" },
//     { name: "Stylish Jeans", price: "$39.99", image: "jeans.jpg" }
//   ];

//   // Function to generate product HTML
//   function generateProductHTML(product) {
//     return `
//       <div class="product">
//         <img src="${product.image}" alt="${product.name}">
//         <h3>${product.name}</h3>
//         <p>${product.price}</p>
//         <button>Add to Cart</button>
//       </div>
//     `;
//   }

  // Function to render products
//   function renderProducts() {
//     productContainer.innerHTML = "";
//     products.forEach(product => {
//       const productHTML = generateProductHTML(product);
//       productContainer.insertAdjacentHTML("beforeend", productHTML);
//     });
//   }

//   // Render products on page load
//   renderProducts();
// });



document.addEventListener("DOMContentLoaded", function() {
  const productContainer = document.querySelector(".product-list");

  // Sample product data
  const products = [
    { name: "Cute Dress", price: "$29.99", image: "dress.jpg" },
    { name: "Cool T-shirt", price: "$19.99", image: "tshirt.jpg" },
    { name: "Stylish Jeans", price: "$39.99", image: "jeans.jpg" }
  ];

  // Function to generate product HTML
  function generateProductHTML(product) {
    return `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    `;
  }

  // Function to render products
  function renderProducts() {
    productContainer.innerHTML = "";
    products.forEach(product => {
      const productHTML = generateProductHTML(product);
      productContainer.insertAdjacentHTML("beforeend", productHTML);
    });
  }

  // Render products on page load
  renderProducts();

  // Add event listener to "Add to Cart" buttons
  productContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("add-to-cart")) {
      const productElement = event.target.closest(".product");
      const productName = productElement.querySelector("h3").textContent;
      // Assuming you have a function addToCart(productName) to add the product to the cart
      addToCart(productName);
      // Redirect to the cart page
      window.location.href = "cart.html";
    }
  });
});

