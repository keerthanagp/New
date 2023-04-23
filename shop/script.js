const url = "https://fakestoreapi.com/products?limit=5";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data); 

    const productsDiv = document.getElementById("products");
    data.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.innerHTML = `
      <div class='body'>
      <div class='box'>
      <div class='images'>
        <img src="${product.image}" alt="${product.title}">
        </div>
      <div class="info">
        <h2>${product.title}</h2>
        <p><b>Price:</b> ${product.price}</p>
        </div>
        </div>
        </div>
      `;
      productsDiv.appendChild(productDiv);
    });
  })
  .catch(error => console.error(error));







