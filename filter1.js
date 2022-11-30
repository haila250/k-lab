// filter and show the product that will be bought when you don't have much money 
const products =[
{name: 'Bike', price:100},
{name: 'TV', price:200},
{name: 'Album', price:10},
{name: 'Book', price:5},
{name: 'Phone', price:500},
{name: 'Computer', price:1000},
]
const filteredProducts= products.filter((product) =>{
return product.price <=100
})
console.log(filteredProducts);


