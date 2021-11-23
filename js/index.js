// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

    const quantity = product.querySelector(".quantity input").value;
    const price = product.querySelector(".price span").innerHTML;
    const result = price*quantity
    
    subtotal = product.querySelector('.subtotal span')
    subtotal.innerHTML = result;
    
    return result;
  }
  

function calculateAll() {

  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

 
  // ITERATION 2
  let all = 0
  const products = document.getElementsByClassName('product')
  for (let i = 0; i < products.length; i++){
   all = all + updateSubtotal(products[i])
  }

  
  // ITERATION 3
  let total = document.querySelector('#total-value span');
  total.innerHTML = all;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
