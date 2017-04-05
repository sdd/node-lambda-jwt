'use strict';
const JWT = require('jsonwebtoken');
const availabletokenProviders = require('./token-providers');

module.exports = config => {

    const { secret, jwt } = config;

    const tokenProviders = availabletokenProviders
        .filter(p => !config[p.key])
        .map(p => p.provider(config[p.key]));

    return async (event, context) => {

        let token;
        tokenProviders.find(provider => token = provider(event, context));

        if (!token) {
            throw new Error('Token Not Found');
        }

        const user = await JWT.verify(
            token,
            secret,
            jwt
        );

        return user;
    }
};
