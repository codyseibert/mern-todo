
const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send('unauthorized');
  }
  
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(403).send('invalid credentials');
    } else {
      req.user = decoded;
      next();
    }
  });
};