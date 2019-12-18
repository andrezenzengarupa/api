const jwt = require('jsonwebtoken');
const authConfig = require('../helper/auth');

function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not sent!' });
  }

  const token = authHeader.split(' ')[1];

  try {
    jwt.verify(token, authConfig.secret, {
      ignoreExpiration: true
    });

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid Token' });
  }
}

module.exports = auth;
