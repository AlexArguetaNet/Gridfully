const User = require('../models/user');
const Sheet = require('../models/sheet');

// GET: Get the user's home page
const getHomePage = async (req, res, next) => {

    const userId = req.params.userId;

    const sheets = await Sheet.find({ user_id: userId });

    User.findById({ _id: req.params.userId })
    .then((userDoc) => {

        req.session.user = userDoc;
        res.locals.loggedIn = true;
        res.locals.userId = userDoc._id;
        req.session.save(() => {
            res.render('user/home', { user: userDoc, sheets: sheets });
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

