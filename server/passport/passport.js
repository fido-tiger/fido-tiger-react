//load bcrypt
const bCrypt = require('bcrypt');
const ENV = require('../../env');

module.exports = function(passport, user) {

    var User = user;
    var GOOGLE_CLIENT_ID = process.env.CLIENT_ID;
    var GOOGLE_CLIENT_SECRET = process.env.CLIENT_SECRET;
    var LocalStrategy = require('passport-local').Strategy;
    var GoogleStrategy = require('passport-google-oauth2').Strategy;

    /*Serialize & Deserialize User (Login & Logout)*/
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });
    /*Google OAuth Strategy*/
    passport.use(new GoogleStrategy({
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:8080/auth/google/callback",
            passReqToCallback: true
        },
        function(request, accessToken, refreshToken, profile, done) {
            User.findOrCreate({ googleId: profile.id }, function(err, user) {
                process.nextTick(function() {

                    // To keep the example simple, the user's Google profile is returned to
                    // represent the logged-in user.  In a typical application, you would want
                    // to associate the Google account with a user record in your database,
                    // and return that user instead.
                    return done(err, user);
                });
            });
        }
    ));
    /*Local Signup Strategy*/
    passport.use('local-signup', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function(req, username, password, done) {


            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            User.findOne({ where: { username: username } }).then(function(user) {

                if (user) {
                    return done(null, false, { message: 'That username is already taken' });
                } else {
                    var userPassword = generateHash(password);
                    var data = {
                        username: username,
                        password: userPassword,
                        email: req.body.email
                    };


                    User.create(data).then(function(newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }

                        if (newUser) {
                            return done(null, newUser);

                        }


                    });
                }


            });



        }



    ));

    /*Local Signin Strategy*/
    passport.use('local-signin', new LocalStrategy(

        {

            // by default, local strategy uses username and password, we will override with username
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function(req, username, password, done) {

            var User = user;

            var isValidPassword = function(userpass, password) {
                return bCrypt.compareSync(password, userpass);
            };

            User.findOne({ where: { username: username } }).then(function(user) {

                if (!user) {
                    return done(null, false, { message: 'username does not exist' });
                }

                if (!isValidPassword(user.password, password)) {

                    return done(null, false, { message: 'Incorrect password.' });

                }

                var userinfo = user.get();

                return done(null, userinfo);

            }).catch(function(err) {

                console.log("Error:", err);

                return done(null, false, { message: 'Something went wrong with your Signin' });


            });

        }
    ));

};