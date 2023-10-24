const User = require('../models/user');

// GET: Get the user's home page
const getHomePage = (req, res, next) => {

    User.findById({ _id: req.params.userId })
    .then((userDoc) => {

        req.session.user = userDoc;
        res.locals.loggedIn = true;
        req.session.save(() => {
            res.render('user/home', { user: userDoc });
        }); 

    });

}

// GET: Handle logout request
const logout = (req, res, next) => {

    req.session.destroy(() => {
        res.redirect('/');
    });

}

module.exports = {
    getHomePage,
    logout
}

