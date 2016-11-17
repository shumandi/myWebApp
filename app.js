const app = require('express')();

app.get('/', (req, res, next) => {
  res.send('hello world')
})

app.listen(2333);
