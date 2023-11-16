const Product = require('../models/product')

//uj projekt keszitese => /api/v1/product/new
exports.newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product
  })
}

exports.getProducts = async(req, res, next) => {

 
  res.status(200).json({
    success: true,
    count: products.length,
    products
  });
};
