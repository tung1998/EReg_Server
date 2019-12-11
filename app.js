const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookie = require('cookie');
const logger = require('morgan');
const mongoose = require('mongoose');


//router
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
// const loginRouter = require('./routes/login');


const app = express();


//other setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));


//connect mysql
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DATABASE}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => {
        app.locals.db = db;

        app.use(checkUser);

        //add router
        app.use('/users', usersRouter);
        // app.use('/login', loginRouter);
        app.use('/', indexRouter);


        // catch 404 and forward to error handler
        app.use((req, res, next) => {
            next(createError(404));
        });

        // error handler
        app.use((err, req, res, next) => {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};

            // render the error page
            res.status(err.status || 500);
            res.render('error/error');
        });

    }).catch(error=>{
        console.log(error)
    });



function checkUser(req, res, next) {
    let cookies = cookie.parse(req.headers.cookie || '');
    if (!cookies.name) {
        req.user = false;
        next();
    } else {
        connection.query(`SELECT id, RootID, username FROM account WHERE cookie = "${cookies.name}"AND activate="1"`, (err, result, field) => {
            // console.log(result);
            if (result.length) {
                req.user = result[0];
                next();
            } else {
                req.user = false;
                next();
            }
        })
    }
}

module.exports = app;