let products = [];
class Product {
    constructor(id, title, imageUrl, price, description) {
        this.id=id
        this.title = title;
        this.imageUrl = imageUrl
        this.price = price;
        this.description= description;
    }
    save() {
        this.id=Math.floor(Math.random()*10000)
        products.push(this);

    }
    static getAll() {
        return products;
    }
    static findById(prodId) {
        return products.filter(p => p.id == prodId);
        console.log(products);
    }
    update() {
        const findProduct = products.findIndex(p => p.id == this.id);
        products[findProduct] = this;
        console.log(products);
    }
    static deleteById(PrId) {
        products = products.filter(p => p.id != PrId);

    }
}
module.exports = Product;