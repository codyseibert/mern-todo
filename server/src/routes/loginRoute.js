const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  if (req.body.password === process.env.PASSWORD) {
    const token = jwt.sign({
      userId: 1,
    }, process.env.JWT_SECRET);
    res.json({
      token
    });
  } else {
    res.status(403).send('invalid credentials');
  }
};