const path = require('path')
const Product = require('../models/product');

exports.getProduct = (req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.render('add-product.ejs', { 'pageTitle': 'My Add product page' })
};

exports.postProduct = (req, res, next) => {
    console.log(req.body);
    const imageUrl = req.body.imageURL;
    const title = req.body.title
    const price = req.body.price
    const prod = new Product(title, imageUrl, price)
    prod.save();
    console.log(Product.getAll());
    //res.send("created")
    res.redirect('/');
};

exports.getAllProduct = (req, res, next) => {
    
    // send file is for static content ;
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.ejs'));

    const products= Product.getAll();
    res.render('shop',{'prods':products});
}