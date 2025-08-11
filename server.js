const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ✅ Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/clothingDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.log('❌ MongoDB connection error:', err));

// ✅ Dummy products for now (you'll later move to MongoDB)
const products = [
  {
    id: 1,
    name: "T-Shirt for men",
    price: 799,
    image: "https://freakins.com/cdn/shop/files/02aprilpart2_12791.jpg?v=1750064177&width=500"
  },
  {
    id: 2,
    name: "Blue Jeans",
    price: 1299,
    image: "https://freakins.com/cdn/shop/files/29march_2204-Edit.jpg?v=1749907285&width=500"
  },
  {
    id: 3,
    name: "men's green prison oversized tees",
    price: 1099,
    image: "https://freakins.com/cdn/shop/files/DSC00487.jpg?v=1750066357&width=800"
  },
  {
    id: 4,
    name: "angular black men's shirt",
    price: 1099,
    image: "https://freakins.com/cdn/shop/files/21MAY0173-Edit.jpg?v=1750059408&width=800"
  },
  {
    id: 5,
    name: "men's urban distressed wide fit denim jeans",
    price: 1099,
    image: "https://freakins.com/cdn/shop/files/8JULY24_16522-Edit_04335dd6-4040-41cc-b8c4-4529fed66a70.jpg?v=1749906675&width=800"
  },
  {
    id: 6,
    name: "ecru men's straight cargo jeans",
    price: 1099,
    image: "https://freakins.com/cdn/shop/files/Mens01322-Edit.jpg?v=1750056712&width=800"
  },
  {
    id: 7,
    name: "field olive men’s cargo korean pants",
    price: 1099,
    image: "https://freakins.com/cdn/shop/files/27AUG_38175-Edit.jpg?v=1750058279&width=800"
  },
];

// ✅ Product route (from your old code)
app.get('/api/products', (req, res) => {
  res.json(products);
});

// ✅ Auth routes (new)
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

// ✅ Start the server
app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});