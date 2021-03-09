const express = require('express');
const app = express();

function commonMw(req, res, next){
    console.log('commonMw');
    next(new Error('error ouccered'));
}

function errorMw(err, req, res, next){
    console.log(err.message);
    next();
}

app.use(commonMw);
app.use(errorMw);

app.listen(3000, function(){
    console.log('Server is running');
});