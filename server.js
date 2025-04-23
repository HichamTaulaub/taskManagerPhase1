require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    const PORT = process.env.PORT || 5001; 
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    })
  }
  )
  
  .catch(err => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', async (req, res) => {

  res.send('Task Manager');
  // first create the model that communicate with the database 
  
});


