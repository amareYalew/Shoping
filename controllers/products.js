const path = require('path')
const Product = require('../models/product');
const cart = require('../models/cart');

exports.getProduct = (req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.render('add-product.ejs', { 'pageTitle': 'My Add product page111111' })
};

exports.postProduct = (req, res, next) => {
    console.log(req.body);
    const imageUrl = req.body.imageURL;
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const prod = new Product(null, title, imageUrl, price, description);

    prod.save();
    console.log(Product.getAll());
    //res.send("created")
    res.redirect('/');
};

exports.saveProduct = (req, res, next) => {
    console.log(req.body);
    const prod = new Product(null,req.body, title, req.body.imageUrl, req.body.price, req.body.description);
    prod.save();
    console.log(Product.getAll());
    res.redirect('/');
}

exports.getAllProduct = (req, res, next) => {
    
    
    // send file is for static content ;
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.ejs'));
    //console.log(Product.getAll())
    const products = Product.getAll();
    res.render('shop', { 'prods': products });
};
exports.getProductById = (req, res, next) => {
    
    console.log(req.params);
    const products = Product.findById(req.params.productId);
    console.log(products);
    // res.send("we get Id")
    res.render('viewDetalPage', { prod: products[0] });
  
};

exports.editProductPage = (req, res, next) => {
    console.log(req.params);
    const products = Product.findById(req.params.productId);
    console.log(products);
    // res.send("we get Id")
    res.render('editProduct', { prod: products[0] });
  
    
}
exports.editProductSave = (req, res, next) => {
    const updatedProduct = new Product(req.body.id, req.body.title, req.body.imageURL, req.body.price, req.body.description);
     updatedProduct.update();
    // console.log(req.body)
    //res.render('')
    //res.send('Update Successfuly');
    res.redirect('/');

};

exports.deleteProduct = (req, res, next) => {
    const prodID = req.body.id;
    console.log(prodID);
    Product.deleteById(prodID);
    res.redirect('/')

}
exports.addToCart = (req, res, next) => {
    const addedProduct = Product.findById(req.body.id)[0];
    cart.save(addedProduct);
    console.log(cart.getCart());
   // res.end("saved succesifu")
    res.redirect('/cart');
}
exports.getCart = (req, res, next) => {
    res.render('cart', { cart: cart.getCart(), pageTitle: 'Shopping Cart Detail', path: '/cart', name: 'Edward' })
}
exports.deleteInCart = (req, res, next) => {
    cart.delete(req.body.prodId);
    res.redirect('/cart');
}