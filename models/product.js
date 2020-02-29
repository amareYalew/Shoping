const products = [];
class Product {
    constructor(title, imageUrl, price) {
        this.title = title;
        this.imageUrl = imageUrl
        this.price = price;
    }
    save() {
        products.push(this);
    }
    static getAll() {
        return products;
    }
}
module.exports = Product;