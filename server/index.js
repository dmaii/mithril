var express = require('express')
var fetch = require('./services/fetchMessages')
var multer = require('multer')
var upload = multer({ dest: '/tmp' })
var morgan = require('morgan')

var PORT = 8080

var app = express()

app.set('view engine', 'jade')
app.set('views', __dirname + '/../views')
app.use(express.static(__dirname + '/../client'))
app.use(morgan('combined'))

app.get('/', function (req, res) {
  res.render('home')
})

app.post('/parse', upload.single('replay'), function (req, res, next) {
  fetch(req.file.path)
  .then(function (game) {
    res.render('parsed', {
      messages: game.Messages,
      matchId: game.MatchId
    })
  })
  .catch(function (err) {
    next(err)
  })
})

app.listen(PORT)
console.log('Running on http://localhost:' + PORT)
