const express = require('express');
const authenticateToken = require('../middleware/auth').authenticateToken;
const Order = require('../models/Order');

const router = express.Router();

// Get buyer's orders
router.get('/orders', authenticateToken, async (req, res) => {
  try {
    const orders = await Order.find({ buyerId: req.user.userId });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
});

// Create new order
router.post('/orders', authenticateToken, async (req, res) => {
  try {
    const order = new Order({
      ...req.body,
      buyerId: req.user.userId
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error: error.message });
  }
});

module.exports = router;
