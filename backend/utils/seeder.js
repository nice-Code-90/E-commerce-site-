const Product = require('..models/product');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const products = require('../data/products');

dotenv.config({ path: 'backend/config/config.env'})