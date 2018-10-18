var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var httpPort = process.env.httpPort || 8000;


var app = express();



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
 
app.use(express.static(path.join(__dirname, 'views')));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

if (require.main === module) {
  app.listen(httpPort, function() {
    console.log('Server http listening on port %d', this.address().port);
  });

}
