class Product {
	constructor(productName, price, stockQuantity) {
		this.productName = productName;
		this.price = price;
		this.stockQuantity = stockQuantity;
	}

	addToStock(quantity) {
		this.stockQuantity += quantity;
		this.logStockToConsole();
	}

	removeFromStock(quantity) {
		this.stockQuantity -= quantity;
		this.logStockToConsole();
	}

	logStockToConsole() {
		console.log(
			`Current stock for ${this.productName} is now ${this.stockQuantity}.`
		);
	}
}

const bike = new Product(`Bicicleta`, 750, 1000);

// este echivalentul:

const product2 = {
	productName: `Bicicleta`,
	price: 750,
	stockQuantity: 1000,
};

const laptop = new Product(`Laptop`, 2500, 300);

console.log(bike);

console.log(product2);

console.log(laptop);

bike.addToStock(100);

console.log(bike);

laptop.removeFromStock(25);

console.log(laptop);
