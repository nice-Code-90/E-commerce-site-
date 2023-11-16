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

  const products = await Product.find();
  res.status(200).json({
    success: true,
    count: products.length,
    products
  });
};

exports.getSingleProduct = async (req, res, next) => {

  const products = await Product.findById(req.params.id);

  if(!product){
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    })
  }

  res.status(200).json({
    success: true,
    product
  })
}
