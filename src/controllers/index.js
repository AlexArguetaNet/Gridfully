const User = require('../models/user');
const bcrypt = require('bcrypt');

// GET: Get the landing page
const getLandingPage = (req, res) => {

    if (req.session.user) {
        res.redirect(`/user/home/${req.session.user._id}`);
    } else {
        res.render('index');
    }
    
}


// POST: Sign up for an account
const createAccount = async (req, res, next) => {

    // Get request body and hash password
    const newUser = req.body;
    newUser.password = await bcrypt.hash(newUser.password, 10);

    // Create new user document in the database
    User.create(newUser)
    .then((userDoc) => {
        res.redirect(`/user/home/${userDoc._id}`);
    })
    .catch((err) => {
        res.json({ msg: err });
    });
    
}

// POST: Login the user
const login = (req, res, next) => {

    const { email, password } = req.body;

    // Find the user by email
    User.findOne({ email: email })
    .then((userDoc) => {

        // Check the password
        bcrypt.compare(password, userDoc.password)
        .then((result) => {
            
            if (result) {
                res.redirect(`/user/home/${userDoc._id}`);
            } else {
                res.send({ msg: 'Invalid password' });
            }

        });

    })
    .catch((err) => {
        res.json({ msg: 'Invalid Email' });
    });

}

module.exports = {
    getLandingPage,
    createAccount,
    login
}