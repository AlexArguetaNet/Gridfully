const Sheet = require('../models/sheet'); 

// GET: Get the page to edit a sheet
const getSheet = (req, res, next) => {

    if (req.session.user) {
        res.locals.loggedIn = true;
        res.locals.userId = req.session.user._id;
    }


    // Find the sheet object and pass it to the template
    Sheet.findById({ _id: req.params.sheetId })
    .then((sheetDoc) => {
        res.render('sheet/sheet', { sheet: sheetDoc });
    })
    .catch((err) => {
        res.json({ func: 'getSheet', msg: err });
    });


}

// POST: Create a new sheet and add it to the database
const createSheet = (req, res, next) => {

    console.log(req.session.user);
    const userId = req.session.user._id;


    // Create and store a new sheet document 
    // to the database. Then, redirect to sheet page
    Sheet.create({ name: 'My Sheet', user_id: userId })
    .then((sheetDoc) => {
        res.redirect(`/sheet/${sheetDoc._id}`);
    })
    .catch((err) => {
        res.json({ func: 'createSheet', msg: err });
    });

}

// POST: Update sheet
const updateSheet = (req, res, next) => {

    console.log(req.body);



    res.redirect('/sheet');

}


module.exports = {
    getSheet,
    createSheet,
    updateSheet
}