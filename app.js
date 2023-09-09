const mongoose = require('mongoose');
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
require('dotenv').config();


const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/', dashboardRoutes);
// PORT
const PORT = process.env.PORT || 5000;

// database connection
mongoose.connect('mongodb://localhost/login-auth', {useNewUrlParser: true, useUnifiedTopology: true,})
.then(() => console.log("Database connected"))
.catch(err=>console.error(`Error connecting to the Database ${err}`));



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });