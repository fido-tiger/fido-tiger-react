const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const PassportLocalStrategy = require('passport-local').Strategy;
const db = require('../models/');
const config = require('../../config/index.json');


/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const userData = {
        email: email.trim(),
        password: password.trim()
    };

    // find a user by email address
    db.Client.findOne({ where: { email: email } }).then(function(user) {
        if (!user) {
            const error = new Error('Incorrect email or password');
            error.name = 'IncorrectCredentialsError';

            return done(error);
        }
        // check if a hashed user's password is equal to a value saved in the database
        return user.comparePassword(userData.password, (passwordErr, isMatch) => {
            
            if (!isMatch) {
                const error = new Error('Incorrect email or password');
                error.name = 'IncorrectCredentialsError';

                return done(error);
            }

            /*  Token Payload
            ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
            const payload = {
                sub: user.uuid,
                name: user.name,
                employee: user.employee
            };

            // create a token string
            const token = jwt.sign(payload, config.jwtSecret);
            const data = {
                name: user.name,
                email: user.email
            };
            return done(null, token, data);
        });
    });
});