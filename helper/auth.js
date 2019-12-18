const config = {
  secret: `${process.env.APP_PRIVATE_AUTH_KEY}` || `pelias_OSM_2019`,
  expiresIn: '365d',
  authToken: process.env.PASSWORD_AUTH_TOKEN || 'pelias_2019'
};

module.exports = config;
