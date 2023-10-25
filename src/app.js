const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const methodOverride = require('method-override');
const indexRouter = require('./routers/index');
const userRouter = require('./routers/user');
const sheetRouter = require('./routers/sheet');
require('dotenv').config();

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'src/views');
const PORT = process.env.PORT;

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60*60*1000 }
}));

app.use(express.static('src/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(indexRouter);
app.use(methodOverride('_method'));
app.use('/user', userRouter);
app.use('/sheet', sheetRouter);


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Connected to mongodb! Server runningon PORT ${PORT}`);
    });
})
.catch((err) => {
    console.log(err);
});