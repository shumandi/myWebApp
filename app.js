const express = require('express');
const app = express();
const path = require('path');

let post = null;

const indexRouter = require('./routes/index')
const userRouter = require('./routes/users');

// app.set('views', path.join(__dirname, 'views')); // 设置存放模板文件的目录
// app.use('/', indexRouter);
// app.use('/users', userRouter);

app.get('/ajax', (req, res) => {
  res.json({"hello": "world"});
});

if (process.env.NODE_ENV == 'development') {
  post = 2333;
} else {
  post = process.env.POST || 3000;
  app.use(express.static(path.join(__dirname + '/client/build/'))); //静态目录
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/build/'));
  })
}

app.listen(post || 2333);
