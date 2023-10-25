
// GET: Get the page to edit a sheet
const getSheet = (req, res, next) => {

    if (req.session.user) {
        res.locals.loggedIn = true;
        res.locals.userId = req.session.user._id;
    }
    
    res.render('sheet/sheet');

}

// POST: Update sheet
const updateSheet = (req, res, next) => {

    console.log(req.body);

    res.redirect('/sheet');

}


module.exports = {
    getSheet,
    updateSheet
}