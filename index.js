var express = require('express')
var parse = require('./server/daos/parser')
var multer = require('multer')
var upload = multer({ dest: '/tmp' })

// Constants
var PORT = 8080

// App
var app = express()

app.set('view engine', 'jade')
app.set('views', './views')
app.use(express.static(__dirname + '/client'))

// TODO Use jade
app.get('/', function (req, res) {
  res.render('home')
})

app.post('/parse', upload.single('replay'), function (req, res, next) {
  // TODO Stop hard coding this

  res.render('parsed')
//  parse(req.file.path, function (err, arr) {
//    if (err) {
//      next(err)
//    } else {
//      res.render('parsed', {
//        messages: arr
//      })
//    }
//  })
})

app.listen(PORT)
console.log('Running on http://localhost:' + PORT)
