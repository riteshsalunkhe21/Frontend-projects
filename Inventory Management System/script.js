document.addEventListener("DOMContentLoaded", function () {
  // Get references to HTML elements
  const productNameInput = document.getElementById("productName");
  const productQuantityInput = document.getElementById("productQuantity");
  const productIdInput = document.getElementById("productId");
  const productPriceInput = document.getElementById("productPrice");
  const productDateInput = document.getElementById("productDate");
  const addProductButton = document.getElementById("addProduct");
  const totalAmountElement = document.getElementById("totalAmount");
  const inventoryListBody = document.getElementById("inventoryList").getElementsByTagName("tbody")[0];
  const deletedProductListBody = document.getElementById("deletedProductList").getElementsByTagName("tbody")[0];
  const removeAllDeletedButton = document.getElementById("removeAllDeleted");
  const printInventoryButton = document.getElementById("printInventoryButton");
  const printDeletedInventoryButton = document.getElementById("printDeletedInventoryButton");

  const currentDate = new Date();
  const currentDateFormatted = currentDate.toISOString().slice(0, 10); // Format: YYYY-MM-DD
  productDateInput.value = currentDateFormatted;

  // Event listener for the "Print Inventory" button
  printInventoryButton.addEventListener("click", function () {
    printInventory();
  });

  // Add an event listener for the "Print Deleted Inventory" button

  printDeletedInventoryButton.addEventListener("click", function () {
    printDeletedInventory();
  });

  // Function to generate the inventory table for printing
  function generateInventoryTableForPrinting() {
    let tableHTML = `
      <table border="1">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Product Image</th>
                  <th>Quantity</th>
                  <th>Product ID</th>
                  <th>Unit Price</th>
                  <th>Date</th>
                  <th>Total Amount</th>
              </tr>
          </thead>
          <tbody>
  `;

    inventory.forEach(function (product) {
      const totalAmount = product.quantity * product.price;
      const imageSrc = product.image || 'placeholder.png'
      tableHTML += `
          <tr>
              <td>${product.name}</td>

              <td class="image-cell">
            <img src="${imageSrc}" alt="Product Image" id="productImage-${product.id}" onclick="handleImageClick('${product.id}')">
          </td>

              <td>${product.quantity}</td>
              <td>${product.id}</td>
              <td>${product.price}</td>
              <td>${product.date}</td>
              <td>${totalAmount.toFixed(2)}</td>
          </tr>
      `;
    });

    tableHTML += `
          </tbody>
      </table>
  `;

    return tableHTML;
  }

  // Function to print the inventory
  function printInventory() {
    const printWindow = window.open("", "", "width=800,height=600");

    printWindow.document.open();
    printWindow.document.write(`
    <html>
    <head>
      <title>Inventory</title>
      <style>
        /* Define your print styles here */
        * {
          text-align: center;
        }
        table {
          border-collapse: collapse;
          width: 100%;
        }
        th,
        td {
          border: 1px solid black;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f2f2f2;
        }
        h1 {
          text-align: center;
        }
        .contact {
          display: flex;
          justify-content: space-evenly;
        }
        .table{
          border: 1px solid #8f8f8f;
        }

        .image-cell img {
          max-width: 50px;
          max-height: 50px;
          border: 1px solid #ccc;
          background-color: #f0f0f0; 
          color: #777;
          text-align: center;
          padding: 5px;
        }
        
        .image-cell img[src]:not([src=""]) {
          border: none; 
          background-color: transparent; 
          color: inherit; 
          padding: 0; 
        }
        
        
      </style>
    </head>
    <body>
      <h1>Available Inventory</h1>
      <div class="contact">
        <div class="git">
          <p>
            For Source Code : <a href="https://github.com/VAggarwal97"> Github</a>
          </p>
        </div>
        <div class="email">
          <p>
            For More Useful Webapp Contact Here :
            <a href="https://mail.google.com/"> vishalaggarwal8978@gmail.com</a>
          </p>
        </div>
      </div>
      <hr />
      <div class="table">${generateInventoryTableForPrinting()}</div>
      <p>Total Amount of All Products: Rs ${calculateTotalAmount().toFixed(2)}</p>
    </body>
  </html>
  `);

    printWindow.document.close();
    printWindow.print();
  }

  // Function to calculate total amount of all products
  function calculateTotalAmount() {
    return inventory.reduce((total, product) => total + product.quantity * product.price, 0);
  }

  // !===================================================================================

  // Function to generate the deleted inventory table for printing
  function generateDeletedInventoryTableForPrinting() {
    let tableHTML = `
    <table border="1">
        <thead>
            <tr>
                <th>Name</th>
                <th>Product Image</th>
                <th>Quantity</th>
                <th>Product ID</th>
                <th>Unit Price</th>
                <th>Date</th>
                <th>Total Amount</th>
            </tr>
        </thead>
        <tbody>
  `;

    deletedProducts.forEach(function (product) {
      const totalAmount = product.quantity * product.price;
      tableHTML += `
        <tr>
            <td>${product.name}</td>
            <td class="image-cell">
               <img src="${product.image || 'placeholder.png'}" alt="Product Image" id="productImage-${product.id}" onclick="handleImageClick('${product.id}')">
            </td>
            <td>${product.quantity}</td>
            <td>${product.id}</td>
            <td>${product.price}</td>
            <td>${product.date}</td>
            <td>${totalAmount.toFixed(2)}</td>
        </tr>
    `;
    });

    tableHTML += `
        </tbody>
    </table>
  `;

    return tableHTML;
  }

  // Function to print the deleted inventory
  function printDeletedInventory() {
    const printWindow = window.open("", "", "width=800,height=600");

    printWindow.document.open();
    printWindow.document.write(`
    <html>
    <head>
      <title>Deleted Inventory</title>
      <style>
        /* Define your print styles here */
        * {
          text-align: center;
        }
        table {
          border-collapse: collapse;
          width: 100%;
        }
        th,
        td {
          border: 1px solid black;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f2f2f2;
        }
        h1 {
          text-align: center;
        }
        .contact {
          display: flex;
          justify-content: space-evenly;
        }
        .table {
          border: 1px solid #8f8f8f;
        }
        .image-cell img {
          align-items: center;
          max-width: 50px;
          max-height: 50px;
          border: 1px solid #ccc;
          background-color: #f0f0f0; 
          color: #777;
          text-align: center;
          padding: 5px;
        }
        
        .image-cell img[src]:not([src=""]) {
          border: none; 
          background-color: transparent; 
          color: inherit; 
          padding: 0; 
        }
        
      </style>
    </head>
    <body>
      <h1>Deleted Inventory</h1>
      <div class="contact">
        <div class="git">
          <p>
            For Source Code : <a href="https://github.com/VAggarwal97">Github</a>
          </p>
        </div>
        <div class="email">
          <p>
            For More Useful Webapp Contact Here :
            <a href="https://mail.google.com/">vishalaggarwal8978@gmail.com</a>
          </p>
        </div>
      </div>
      <hr />
      <div class="table">${generateDeletedInventoryTableForPrinting()}</div>
    </body>
    </html>
  `);

    printWindow.document.close();
    printWindow.print();
  }

  // !===================================================================================

  // Initialize inventory and deleted products arrays
  let inventory = JSON.parse(localStorage.getItem("inventory")) || [];
  let deletedProducts = JSON.parse(localStorage.getItem("deletedProducts")) || [];

  // Function to save the inventory to localStorage
  function saveInventoryToLocalStorage() {
    localStorage.setItem("inventory", JSON.stringify(inventory));
  }

  // Function to save deleted products to localStorage
  function saveDeletedProductsToLocalStorage() {
    localStorage.setItem("deletedProducts", JSON.stringify(deletedProducts));
  }

  // Load the inventory from localStorage when the page loads
  if (localStorage.getItem("inventory")) {
    inventory = JSON.parse(localStorage.getItem("inventory"));
  }

  // Load deleted products from localStorage when the page loads
  if (localStorage.getItem("deletedProducts")) {
    deletedProducts = JSON.parse(localStorage.getItem("deletedProducts"));
  }

  // Event listener for adding a new product
  addProductButton.addEventListener("click", function () {
    const productName = productNameInput.value;
    const productQuantity = parseInt(productQuantityInput.value);
    const productId = productIdInput.value;
    const productPrice = parseFloat(productPriceInput.value);
    const productDate = productDateInput.value;

    // Automatically set the current date
    const currentDate = new Date();
    const currentDateFormatted = currentDate.toISOString().slice(0, 10); // Format: YYYY-MM-DD
    productDateInput.value = currentDateFormatted;

    // Get the uploaded image file (if any)
    const imageUploadInput = document.getElementById("imageUpload");
    const uploadedImage = imageUploadInput.files[0];

    // Validate input
    if (!productName || isNaN(productQuantity) || !productId || isNaN(productPrice) || !productDate) {
      alert("Please fill in all fields with valid data.");
      return;
    }

    // Read the uploaded image as a data URL
    const reader = new FileReader();
    reader.onload = function () {
      const imageDataUrl = reader.result;

      // Create a new product object with image (or without image if not provided)
      const newProduct = {
        name: productName,
        quantity: productQuantity,
        id: productId,
        price: productPrice,
        date: productDate,
        image: imageDataUrl || '', // Set image to an empty string if not provided
      };

      // Add the product to the inventory
      inventory.push(newProduct);

      // Clear input fields and image input
      productNameInput.value = "";
      productQuantityInput.value = "";
      productIdInput.value = "";
      productPriceInput.value = "";
      productDateInput.value = "";
      imageUploadInput.value = ""; // Reset the file input

      // Save the updated inventory to localStorage
      saveInventoryToLocalStorage();

      // Update the inventory list
      updateInventoryList();

      // Calculate and display the total amount
      updateTotalAmount();

      // Prevent form submission
      event.preventDefault();
    };

    // Read the uploaded image, or set imageDataUrl to an empty string if no image is provided
    reader.readAsDataURL(uploadedImage || new Blob());
  });


  // Event listener for removing all deleted products
  removeAllDeletedButton.addEventListener("click", function () {
    // Clear the deleted products array
    deletedProducts = [];

    // Update the deleted products list
    updateDeletedProductList();

    // Save the updated deleted products to localStorage
    saveDeletedProductsToLocalStorage();
  });

  // Function to update the inventory list
  function updateInventoryList() {
    // Clear the current inventory list
    inventoryListBody.innerHTML = "";

    // Populate the inventory list with the updated data
    inventory.forEach(function (product) {
      const row = inventoryListBody.insertRow();
      const totalAmount = product.quantity * product.price;
      row.innerHTML = `
      <tr>
      <td>${product.name}</td>

      <td class="image-cell">
          <img src="${product.image || 'placeholder.png'}" alt="Product Image" id="productImage-${product.id}" onclick="handleImageClick('${product.id}')">
      </td>
      
      <td><span class="quantity">${product.quantity}</span></td>
      <td>${product.id}</td>
      <td>${product.price}</td>
      <td>${product.date}</td>
      <td class="total-amount">${totalAmount.toFixed(2)}</td>
      <td>
          <button class="edit-quantity">Edit</button>
          <button class="delete-product">Delete</button>
      </td>
  </tr>
  
          `;

      // Add a click event listener to the delete button
      const deleteButton = row.querySelector(".delete-product");
      deleteButton.addEventListener("click", function () {
        // Move the deleted product to the deleted products array
        deletedProducts.push(product);

        // Remove the product from the inventory
        inventory.splice(inventory.indexOf(product), 1);

        // Update both lists
        updateInventoryList();
        updateDeletedProductList();
        updateTotalAmount();

        // Save the updated inventory to localStorage
        saveInventoryToLocalStorage();

        // Save the updated deleted products to localStorage
        saveDeletedProductsToLocalStorage();
      });

      // Add a click event listener to the edit button
      const editButton = row.querySelector(".edit-quantity");
      editButton.addEventListener("click", function () {
        const quantitySpan = row.querySelector(".quantity");
        const newQuantity = prompt("Enter new quantity:", product.quantity);

        // Validate the new quantity
        if (newQuantity !== null && !isNaN(newQuantity)) {
          const parsedQuantity = parseInt(newQuantity);

          // Check if the new quantity is zero or less
          if (parsedQuantity <= 0) {
            // Move the deleted product to the deleted products array
            deletedProducts.push(product);

            // Remove the product from the inventory
            inventory.splice(inventory.indexOf(product), 1);

            // Update both lists
            updateInventoryList();
            updateDeletedProductList();
            updateTotalAmount();

            // Save the updated inventory to localStorage
            saveInventoryToLocalStorage();

            // Save the updated deleted products to localStorage
            saveDeletedProductsToLocalStorage();
          } else {
            // Update the product quantity and display
            product.quantity = parsedQuantity;
            quantitySpan.textContent = parsedQuantity;

            // Update the total amount column
            const newTotalAmount = product.quantity * product.price;
            row.querySelector(".total-amount").textContent = newTotalAmount.toFixed(2);

            // Update the total amount
            updateTotalAmount();

            // Save the updated inventory to localStorage
            saveInventoryToLocalStorage();
          }
        }
      });
    });
  }

  // Function to update the deleted products list
  function updateDeletedProductList() {
    // Clear the current deleted products list
    deletedProductListBody.innerHTML = "";

    // Populate the deleted products list with the updated data
    deletedProducts.forEach(function (product) {
      const row = deletedProductListBody.insertRow();
      const totalAmount = product.quantity * product.price;
      row.innerHTML = `
      <td>${product.name}</td>
      <td class="image-cell">
          <img class="" src="${product.image || 'placeholder.png'}" alt="Product Image" id="productImage-${product.id}" onclick="handleImageClick('${product.id}')">
      </td>
              <td>${product.quantity}</td>
              <td>${product.id}</td>
              <td>${product.price}</td>
              <td>${product.date}</td>
              <td class="total-amount">${totalAmount.toFixed(2)}</td>
          `;
    });
  }

  // Function to calculate and display the total amount
  function updateTotalAmount() {
    const totalAmount = inventory.reduce((total, product) => total + product.quantity * product.price, 0);
    totalAmountElement.textContent = `Total Amount : Rs ${totalAmount.toFixed(2)}`;
  }

  // Initial setup: Update both lists and total amount
  updateInventoryList();
  updateDeletedProductList();
  updateTotalAmount();
});
