var basketProducts = [];

localStorage.removeItem("basket");

function basket(number){
  var product = products[number-1];

  basketProducts.push(product);
  
  var json = JSON.stringify(basketProducts);

  localStorage.setItem("basket", json);
}


var products = [
  {
    "Name": "Shirt",
    "Price": 15,
    "Image": "http://Shirt.com"
  },
  {
    "Name": "Shoes",
    "Price": 120,
    "Image": "http://Shoes.com"
  },
  {
    "Name": "Shorts",
    "Price": 20,
    "Image": "http://Shirt.com"
  },
  {
    "Name": "Sunglasses",
    "Price": 30,
    "Image": "http://Shoes.com"
  },
  {
    "Name": "T-shirt",
    "Price": 25,
    "Image": "http://Shoes.com"
  },
  {
    "Name": "Suit",
    "Price": 130,
    "Image": "http://Shoes.com"
  },
  {
    "Name": "Sweater",
    "Price": 50,
    "Image": "http://Shoes.com"
  },
  {
    "Name": "Sweatshirt",
    "Price": 70,
    "Image": "http://Shoes.com"
  },
  {
    "Name": "Cardigan",
    "Price": 90,
    "Image": "http://Shirt.com"
  },
  {
    "Name": "Dress",
    "Price": 330,
    "Image": "http://Shoes.com"
  },
  {
    "Name": "Blazer",
    "Price": 220,
    "Image": "http://Shoes.com"
  },
  {
    "Name": "Sport suit",
    "Price": 80,
    "Image": "http://Shoes.com"
  }
]




