//product that will be expensive
const products =[
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
    ]
    let expensiveProduct= products.reduce((max,min)=>max.price > min.price ? max:min);

    console.log(expensiveProduct.name)
    console.log(expensiveProduct)