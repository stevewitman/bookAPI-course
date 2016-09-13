var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/books')
  .get(function(req, res) {
    var responseJSON = {hello: 'This is my API'};
    res.json(responseJSON)
  });

app.use('/api', bookRouter)


app.get('/', function(req, res) {
  res.send('welcome to my API');
});

app.listen(port, function() {
  console.log('Gulp is running my app on PORT: ', port);
})
