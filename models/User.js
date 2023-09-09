const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
// const uuid = require('uuid'); if you want to do email verification this module will help you 

const userSchema =  new mongoose.Schema({ 
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email:{
    type: String,
    unique: true,
    required: [true, 'Email is required'],
    lowercase:true,
    validate: [isEmail, 'Please enter an vaild email']
},
password:{
    type : String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password should be minimum 8 cheracters'], 

},
age:{
  type:Number,
  required: [true, 'age is required'],
},
});
// password hashing 
userSchema.pre('save', async function (next) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  });
  
  // seachma for saving token

  

  const User = mongoose.model('User', userSchema);
  
  module.exports = User;