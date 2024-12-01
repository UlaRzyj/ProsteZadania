const products = [
    {name: 'Samsung Galaxy S8', price: 799.99, category: 'smartphones'},
    {name: 'iPhone 7', price: 699.99, category: 'smartphones'},
    {name: 'Xiaomi Redmi Note 4', price: 299.99, category: 'smartphones'},
    {name: 'Samsung Galaxy Tab 4', price: 399.99, category: 'tablets'},
    {name: 'Sony Xperia Z4', price: 249.99, category: 'smartphones'},
    {name: 'LG G5', price: 349.99, category: 'smartphones'},
    {name: 'HTC U Ultra', price: 499.99, category: 'smartphones'},
    {name: 'iPad Pro', price: 599.99, category: 'tablets'},
    {name: 'Google Pixel', price: 499.99, category: 'smartphones'},
    {name: 'Nokia 3310', price: 149.99, category: 'smartphones'},
]

function filterCategory(category1) {
    const category = products.filter(products => products.category === category1);

    console.log(`Produkty z kategorii ${category1}: `);
    category.forEach(product => console.log(product.name));
}

function filterPrice(type) {


    let maxPrice = Math.max(...products.map(product => product.price));
    let minPrice = Math.min(...products.map(product => product.price));
        if(type === "max") {
            products.sort((a, b) => a.price - b.price);
            console.log(`Produkty zposortowane rosnąco po cenie:`);
        }
        else if(type === "min") {
            products.sort((a, b) => b.price - a.price);
            console.log(`Produkty posortowane malejąco po cenie: `);
        }
    

    products.forEach(product => console.log(product));
    
}

filterPrice("min");

filterCategory('smartphones');