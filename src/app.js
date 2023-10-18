const express = require('express');
const mongoose = require('mongoose');
const indexRouter = require('./routers/index');
require('dotenv').config();

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'src/views');
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(indexRouter);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Connected to mongodb! Server runningon PORT ${PORT}`);
    });
})
.catch((err) => {
    console.log(err);
});