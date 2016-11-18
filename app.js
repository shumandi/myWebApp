const express = require('express');
const app = express();
const path = require('path');

const indexRouter = require('./routes/index')
const userRouter = require('./routes/users');

// app.set('views', path.join(__dirname, 'views')); // 设置存放模板文件的目录
app.use(express.static(path.join(__dirname + '/public'))); //静态目录
app.use('/', indexRouter);
app.use('/users', userRouter);


app.listen(2333);
