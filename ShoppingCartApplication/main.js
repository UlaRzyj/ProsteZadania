class Cart {
    constructor() {
        this.productsList =[];
    }

    addProduct(...name) {
        this.productsList.push(...name);
    }

    removeProduct(name) {
        let i = 0;
         for(i; i < this.productsList.length; i++) {
            if(this.productsList[i] === name) {
                break;
            }
        }
        delete this.productsList[i];
    }

    showCart() {
        this.productsList.forEach(product => console.log(product));
    }
}

class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const p = new Product('apple', 2);


const cart = new Cart();
cart.addProduct(p);
// cart.showCart();
// cart.removeProduct('banana');
// cart.showCart();