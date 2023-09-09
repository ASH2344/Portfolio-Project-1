const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

    jwt.verify(token, process.env.JWT_SECRET,  (err, decode)=>{
      if(err){
        return res.status(401).json({message:'invalid token'})

      }else {

        console.log(decode);
        req.userId = decode.userId;
      }
    });
    
   
    next();}


