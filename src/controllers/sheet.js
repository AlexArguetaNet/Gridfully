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


    // Get the names of the sheet and columns
    const { name, columns } = req.body;

    // Remove the name and columns from the request body
    delete req.body.name;
    delete req.body.columns;
        
    // Create object to store into the database
    const sheet = {
        name: name,
        columns: columns,
        entries: req.body
    }

    // Get sheet Id from the route parameter and update the
    // sheet in the database
    Sheet.findByIdAndUpdate({ _id: req.params.sheetId }, sheet)
    .then((sheetDoc) => {
        res.redirect(`/sheet/${ sheetDoc._id }`);
    })
    .catch((err) => {
        res.json({ func: 'updateSheet()', msg: err });
    });

}


module.exports = {
    getSheet,
    createSheet,
    updateSheet
}