const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const SECRET_KEY = 'yourSecretKey';

// ✅ Register
router.post('/register', async (req, res) => {
  try {
    const { phone, password } = req.body;

    const existing = await User.findOne({ phone });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const user = new User({ phone, password });
    await user.save();

    const token = jwt.sign({ id: user._id, phone: user.phone }, SECRET_KEY, { expiresIn: '1h' });
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed' });
  }
});

// ✅ Login
router.post('/login', async (req, res) => {
  try {
    const { phone, password } = req.body;

    const user = await User.findOne({ phone });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, phone: user.phone }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Login failed' });
  }
});

module.exports = router;