class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}



class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}


class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        // Vérifie si l'article est déjà dans le panier
        const existingItem = this.items.find(item => item.product.id === product.id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem);
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    displayItems() {
        return this.items.map(item => {
            return {
                id: item.product.id,
                name: item.product.name,
                price: item.product.price,
                quantity: item.quantity,
                totalPrice: item.getTotalPrice()
            };
        });
    }
}





// Créer des produits
const product1 = new Product(1, 'Produit 1', 10);
const product2 = new Product(2, 'Produit 2', 20);
const product3 = new Product(3, 'Produit 3', 30);

// Créer un panier
const shoppingCart = new ShoppingCart();

// Ajouter des articles au panier
shoppingCart.addItem(product1, 2);
shoppingCart.addItem(product2, 1);
shoppingCart.addItem(product1, 3); // Ajouter plus du même produit

// Afficher le panier
console.log(shoppingCart.displayItems());

// Obtenir le total des articles dans le panier
console.log(`Total des articles : ${shoppingCart.getTotalItems()}`);

// Retirer un article du panier
shoppingCart.removeItem(1); // Retirer le produit avec id 1

// Afficher le panier après suppression
console.log(shoppingCart.displayItems());



