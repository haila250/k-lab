//the price of all product combined
const products =[
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
    ]
    const total= products.reduce((currentTotal,product) =>{
    return product.price +currentTotal
    }, 0)
    console.log(total)