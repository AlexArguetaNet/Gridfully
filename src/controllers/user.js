const User = require('../models/user');

// GET: Get the user's home page
const getHomePage = (req, res, next) => {

    User.findById({ _id: req.params.userId })
    .then((userDoc) => {

        res.render('user/home', { user: userDoc });

    });

}

module.exports = {
    getHomePage
}