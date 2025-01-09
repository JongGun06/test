const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Получить всех пользователей
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Создать нового пользователя
router.post('/', async (req, res) => {
  const { name, age, isMarried } = req.body;

  const user = new User({
    name,
    age,
    isMarried,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
