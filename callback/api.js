fetch('https://api.escuelajs.co/api/v1/products').then((response) => {
  return response.json();
}).then((data) => {
    const main = document.getElementById('products');
    if (Array.isArray(data)) {
      data.map((product) => {
        const productTitle = document.createElement('h3');
        productTitle.innerHTML = product.title;
        const productImage = document.createElement('img');
        productImage.src = product?.images[0];
        const productDescription = document.createElement('p');
        productDescription.innerHTML = product?.description;
        const productPrice = document.createElement('p');
        productPrice.innerHTML = `$${product.price}`;
        const productContainer = document.createElement('div');
        productContainer.appendChild(productTitle);
        productContainer.appendChild(productImage);
        productContainer.appendChild(productDescription);
        productContainer.appendChild(productPrice);
        productContainer.classList.add('product');
        main.appendChild(productContainer);
        })
        }
      });