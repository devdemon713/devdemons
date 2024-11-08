const express = require('express');
const authenticateToken = require('../middleware/auth').authenticateToken;
const Product = require('../models/Product');

const router = express.Router();

// Get farmer's products
router.get('/products', authenticateToken, async (req, res) => {
  try {
    const products = await Product.find({ farmerId: req.user.userId });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
});

// Add new product
router.post('/products', authenticateToken, async (req, res) => {
  try {
    const product = new Product({
      ...req.body,
      farmerId: req.user.userId
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
});

module.exports = router;
