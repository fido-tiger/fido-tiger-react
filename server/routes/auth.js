const express = require('express');
const validator = require('validator');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = new express.Router();
var db = require('../models/');
/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateSignupForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
        isFormValid = false;
        errors.email = 'Please provide a correct email address.';
    }

    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
        isFormValid = false;
        errors.password = 'Password must have at least 8 characters.';
    }

    if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
        isFormValid = false;
        errors.name = 'Please provide your name.';
    }

    if (!isFormValid) {
        message = 'Check the form for errors.';
    }

    return {
        success: isFormValid,
        message,
        errors
    };
}

/**
 * Validate the login form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateLoginForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
        isFormValid = false;
        errors.email = 'Please provide your email address.';
    }

    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
        isFormValid = false;
        errors.password = 'Please provide your password.';
    }

    if (!isFormValid) {
        message = 'Check the form for errors.';
    }

    return {
        success: isFormValid,
        message,
        errors
    };
}

/*
 * Validate New Client
 *≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/

function validateNewClientForm(payload) {

    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.first_name !== 'string' || payload.first_name.trim().length === 0) {
        isFormValid = false;
        errors.first_name = 'Please provide your first name.';
    }

    if (!payload || typeof payload.last_name !== 'string' || payload.last_name.trim().length === 0) {
        isFormValid = false;
        errors.last_name = 'Please provide your ARGH name.';
    }

    if (!payload || typeof payload.address !== 'string' || payload.address.trim().length === 0) {
        isFormValid = false;
        errors.address = 'Please provide a valid address.';
    }

    if (!payload || typeof payload.city !== 'string' || payload.city.trim().length === 0) {
        isFormValid = false;
        errors.city = 'Please provide a city.';
    }

    if (!payload || typeof payload.zip_code !== 'string' || payload.zip_code.trim().length < 5) {
        isFormValid = false;
        errors.zip_code = 'Please provide a valid zip code.';
    }

    /*  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
        isFormValid = false;
        errors.email = 'Please provide your email address.';
      }  */

    if (!payload || typeof payload.phone !== 'string' || payload.phone.trim().length < 10) {
        isFormValid = false;
        errors.phone = 'Please provide a valid phone number';
    }

    if (!isFormValid) {
        message = 'Check the form for errors.';
    }

    return {
        success: isFormValid,
        message,
        errors
    };
}

/* Service Form validation */

function validateNewServiceForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';


    if (!payload || typeof payload.pet_name !== 'string' || payload.pet_name.trim().length === 0) {
        isFormValid = false;
        errors.name = 'Please provide your pet name.';
    }

    if (!payload || typeof payload.start_date !== 'string' || payload.start_date.trim().length === 0) {
        isFormValid = false;
        errors.start_date = 'Please provide a date range.';
    }

    if (!payload || typeof payload.start_time !== 'string' || payload.start_time.trim().length === 0) {
        isFormValid = false;
        errors.start_time = 'Please provide a time.';
    }

    if (!payload || typeof payload.end_date !== 'string' || payload.end_date.trim().length === 0) {
        isFormValid = false;
        errors.end_date = 'Please provide a date range.';
    }

    if (!payload || typeof payload.end_time !== 'string' || payload.end_time.trim().length === 0) {
        isFormValid = false;
        errors.end_time = 'Please provide a time.';

    }

    if (!payload || typeof payload.activity_value !== 'string' || payload.activity_value.trim().length === 0) {
        isFormValid = false;
        errors.activity_value = 'Please provide a date range.';
    }

    if (!payload || typeof payload.medications_value !== 'string' || payload.medications_value.trim().length === 0) {
        isFormValid = false;
        errors.medications_value = 'Please provide a date range.';
    }


    if (!isFormValid) {
        message = 'Check the form for errors.';
    }

    return {
        success: isFormValid,
        message,
        errors
    };
}

/*
**  ROUTES 
≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠
≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠**/
/*
 * Decode Token
 *≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
router.post('/token', (req, res, next) => {
    console.log(req.headers);
    let user = {};
    let split = req.headers.authorization.split(' ');
    let token = split[1];
    console.log('token::::::' + token);

    function decodeToken(token) {
        let decoded = jwt.decode(token, { complete: true });
        console.log('DECODED TOKEN:\n≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠');
        console.log(decoded.payload);
        user = decoded.payload;
    }
    if (token === null) {
        return res.status(200).json({
            success: false,
        });
    }
    if (token !== null) {
        decodeToken(token);
        console.log(user);

        return res.status(200).json({
            user_info: { user }
        });
    }


});
/*
 * Client Dashboard
 *≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
router.post('/client', (req, res, next) => {
    /*  Decoded Token
    ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
    let split = req.headers.authorization.split(' ');
    let token = split[1];
    let decoded = jwt.decode(token, { complete: true });
    console.log('DECODED TOKEN:\n ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠');
    console.log(decoded.payload);
    db.Client.findOne({ where: { email: decoded.payload.email } }).then(function(user) {
        return res.status(200).json({
            message: `How's this for a secret message `,
            name: user.name,
            email: user.email,
            registered: user.registered,
            employee: user.employee,
            payload: decoded.payload
        });
    });

});
/*
 * New Client
 *≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
router.post('/newclient', (req, res, next) => {
    let user = {};
    let split = req.headers.authorization.split(' ');
    let token = split[1];
    /*  Decode Token
        ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
    function decodeToken(token) {
        let decoded = jwt.decode(token, { complete: true });
        user = decoded.payload;
    }
    const validationResult = validateNewClientForm(req.body);
    if (!validationResult.success) {
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        });
    }
    decodeToken(token);
    console.log(user);
    let clientData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        phone: req.body.phone,
        parent_user: user.email
    }
    db.ClientInfo.create(clientData).then(function(newClient, created) {
        if (!newClient) {
            return done(null, false);
        }
        if (newClient) {
            return res.status(200).json({
                client_info: newClient,
                user_info: { user }
            });
        }
    });

});
/*
 * Signup
 *≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
router.post('/signup', (req, res, next) => {
    const validationResult = validateSignupForm(req.body);
    if (!validationResult.success) {
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        });
    }


    return passport.authenticate('local-signup', (err) => {
        if (err) {
            console.log(err);
            if (err.name === 'MongoError' && err.code === 11000) {
                // the 11000 Mongo code is for a duplication email error
                // the 409 HTTP status code is for conflict error
                return res.status(409).json({
                    success: false,
                    message: 'Check the form for errors.',
                    errors: {
                        email: 'This email is already taken.'
                    }
                });
            }

            return res.status(400).json({
                success: false,
                message: 'Could not process the form.'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'You have successfully signed up! Now you should be able to log in.'
        });
    })(req, res, next);
});
/*
 * Login
 *≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
router.post('/login', (req, res, next) => {
    const validationResult = validateLoginForm(req.body);
    if (!validationResult.success) {
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        });
    }


    return passport.authenticate('local-login', (err, token, userData) => {

        if (err) {
            if (err.name === 'IncorrectCredentialsError') {
                return res.status(400).json({
                    success: false,
                    message: err.message
                });
            }

            return res.status(400).json({
                success: false,
                message: 'Could not process the form.'
            });
        }

        return res.json({
            success: true,
            message: 'You have successfully logged in!',
            token,
            user: userData
        });
    })(req, res, next);
});

/*Service Routes
 *******************************/
router.post('/service', (req, res, next) => {
    let user = {};
    let split = req.headers.authorization.split(' ');
    let token = split[1];
    /*  Decode Token
        ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
    function decodeToken(token) {
        let decoded = jwt.decode(token, { complete: true });
        user = decoded.payload;
    }

    const validationResult = validateNewServiceForm(req.body);
    if (!validationResult.success) {
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        });
    }
    decodeToken(token);

    let clientData = {
        pet_name: req.body.pet_name,
        start_date: req.body.start_date,
        start_time: req.body.start_time,
        end_date: req.body.end_date,
        end_time: req.body.end_time,
        activity_value: req.body.activity_value,
        medications_value: req.body.medications_value,
        event_notes: req.body.event_notes,
        parent_client: user.email
    }

    db.Services.create(clientData).then(function(newClient, created) {
        if (!newClient) {
            return done(null, false);
        }
        if (newClient) {
            return res.status(200).json({
                client_info: newClient,
                user_info: { user }
            });
        }
    });
});
/*    Employee Job Board
≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
router.post('/jobboard', (req, res, next) => {
    let user = {};
    let split = req.headers.authorization.split(' ');
    let token = split[1];
    /*  Decode Token
        ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
    function decodeToken(token) {
        let decoded = jwt.decode(token, { complete: true });
        user = decoded.payload;
    }
    decodeToken(token);
    db.Services.findAll({ where: { job_accepted: false } }).then(function(data) {
        if (!data) {
            return done(null, false);
        }
        console.log(data)
         return res.status(200).json({
            message: `How's this for a secret message `,
            name: user.name,
            email: user.email,
            registered: user.registered,
            employee: user.employee,
            user_info: { user },
            jobs: data
            });
    })


});




module.exports = router;