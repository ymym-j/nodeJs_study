const express = require('express');

//express morgan
const morgan = require('morgan');

const app = express();

//미들웨어 > next를 추가하면 다음 미들웨어를 실행하지 않음.
function logger(req, res, next){
    console.log('logger');
    next();
    console.log('next ??');
}

function logger2(req, res, next){
    console.log('logger2');
    next();
}

app.use(logger);
app.use(logger2);
app.use(morgan('dev'));

app.listen(3000, function(){
    console.log('Server is running');
})
