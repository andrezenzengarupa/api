var peliasConfig = require('pelias-config').generate();

const config = {
  secret: peliasConfig.auth.secret || 'pelias_OSM_2019',
  expiresIn: peliasConfig.auth.expiresin || '365d',
  authToken: peliasConfig.auth.authtoken || 'pelias_2019'
};

module.exports = config;
