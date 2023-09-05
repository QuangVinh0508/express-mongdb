const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const token = req.header('x-auth-token');

  if(!token) {
    res.status(403).json({
      msg: 'Access Denied',
      isSuccess: false,
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch(err) {
    res.status(401).json({
      msg: 'Invalid Token',
      isSuccess: false,
    })
  }
}