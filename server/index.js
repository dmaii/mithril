var express = require('express')
var fetch = require('./services/fetchMessages')
var multer = require('multer')
var upload = multer({ dest: '/tmp' })

// Constants
var PORT = 8080

// App
var app = express()

app.set('view engine', 'jade')
app.set('views', __dirname + '/../views')
app.use(express.static(__dirname + '/../client'))

// TODO Use jade
app.get('/', function (req, res) {
  res.render('home')
})

app.post('/parse', upload.single('replay'), function (req, res, next) {
  // TODO Stop hard coding this

  fetch(req.file.path)
  .then(function (arr) {
    res.render('parsed', {
      messages: arr
    })
  })
  .catch(function (err) {
    next(err)
  })
})

app.listen(PORT)
console.log('Running on http://localhost:' + PORT)
console.log('foo')
