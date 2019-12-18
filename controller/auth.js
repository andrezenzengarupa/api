const jwt = require('jsonwebtoken');
const _ = require('lodash');
const authConfig = require('../helper/auth');

class AuthController {
  createToken(req, res) {
    if (!req.body.password || !_.isString(req.body.password)) {
      return res.status(400).json({ error: 'Required field not entered.' });
    }

    const password = req.body.password;

    if (password !== authConfig.authToken) {
      return res.status(401).json({ error: 'Oops! Invalid access.' });
    }

    return res.json({
      token: jwt.sign({}, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    });
  }
}

module.exports = new AuthController();
