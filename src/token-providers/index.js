'use strict';
const BearerTokenProvider = require('./bearer');
const CookieTokenProvider = require('./cookie');

module.exports = [
    { key: 'bearer', provider: BearerTokenProvider },
    { key: 'cookie', provider: CookieTokenProvider }
];
