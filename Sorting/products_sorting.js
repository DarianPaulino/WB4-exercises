let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
];


let Id = products.length;
for (i = 0; i < Id ; i++){
  console.log(products[i].product)
}

products.sort(function(a, b){
 if (a.product < b.product){
   return -1;
 } else if (a.item == b.item){
   return 0;
  } else {
    return 1;
  }
});
