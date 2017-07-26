const bcrypt = require('bcrypt');

const db = require('../models/');
const PassportLocalStrategy = require('passport-local').Strategy;



/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    var generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    db.Client.findOne({ where: { email: email } }).then(function(user) {

        if (user) {
            return done(null, false, { message: 'That username is already taken' });
        } else {
            var userPassword = generateHash(password);
            var data = {
                name: req.body.name.trim(),
                password: userPassword.trim(),
                email: req.body.email.trim()
            };
            db.Client.create(data).then(function(newUser, created) {
                if (!newUser) {
                    return done(null, false);
                }

                if (newUser) {
                    return done(null, newUser);

                }
            });
        }
    });
});