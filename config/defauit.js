module.exports = {
  port: 2333,
  session: {
    secret: 'myApp',
    key: 'myApp',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/myApp'
}
