class Product {
	constructor(productName, price, stockQuantity) {
		this.productName = productName;
		this.price = price;
		this.stockQuantity = stockQuantity;
	}
}

const product1 = new Product(`Bicicleta`, 750, 1000);

// este echivalentul:

const product2 = {
	productName: `Bicicleta`,
	price: 750,
	stockQuantity: 1000,
};

const product3 = new Product(`Laptop`, 2500, 300);

console.log(product1);

console.log(product2);

console.log(product3);
