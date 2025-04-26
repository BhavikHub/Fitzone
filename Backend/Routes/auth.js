const express = require('express')
const router = express.Router();
const User = require('../Modals/User');
const {body, validationResult}= require('express-validator');

// route 1: Register users using: POST "/api/auth/contact"
router.post('/contact',[
    body('name', 'Name is required').notEmpty(),
    body('email', 'Enter a valid email').isEmail(),
    body('phone', 'Enter a valid 10-digit phone number').isLength({ min: 10, max: 10 }).isNumeric(),
    body('interestedIn', 'Membership plan is required').notEmpty()
], async(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

   try {
    const user = new User(req.body);
    const savedUser = await user.save();

    res.status(201).json({savedUser});

   } catch (error) {
    console.error('Error saving user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
   }
})
module.exports = router