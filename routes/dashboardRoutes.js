const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Protected Route
// only login user can access this route

    router.get('/dashboard', authMiddleware, (req, res) => {
        res.json({ message: 'Welcome to the dashboard, ' , userId: req.userId });  
    }); 

module.exports = router;