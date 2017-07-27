const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const PassportLocalStrategy = require('passport-local').Strategy;
const db = require('../models/');
const config = require('../../config/index.json');

const comparePassword = (password, callback) => {
    bcrypt.compare(password, this.password, callback);
};
/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
    emailField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const userData = {
        email: email.trim(),
        password: password.trim()
    };

    // find a user by email address
    return db.Client.findOne({where:{ email: userData.email }}, (err, user) => {
        console.log(user);
        if (err) { 
          return done(err);
         }

        if (!user) {
            const error = new Error('Incorrect email or password');
            error.name = 'IncorrectCredentialsError';

            return done(error);
        }

        // check if a hashed user's password is equal to a value saved in the database
        return user.comparePassword(userData.password, (passwordErr, isMatch) => {
            if (err) { return done(err); }

            if (!isMatch) {
                const error = new Error('Incorrect email or password');
                error.name = 'IncorrectCredentialsError';

                return done(error);
            }

            const payload = {
                sub: user.uuid
            };

            // create a token string
            const token = jwt.sign(payload, config.jwtSecret);
            const data = {
                name: user.name
            };
            return done(null, token, data);
        });
    });
});