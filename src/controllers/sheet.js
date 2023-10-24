
// GET: Get the page to edit a sheet
const getSheet = (req, res, next) => {

    res.locals.loggedIn = true;
    res.render('sheet/sheet');

}


module.exports = {
    getSheet
}