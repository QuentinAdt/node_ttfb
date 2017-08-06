var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({message:"Mon premier serveur Node.js !!!"}));
}).listen(8080);
console.log('Le serveur est accessible ici : http://localhost:8080/');
var q = require('hmetrics');
var test=function() {
    q.request({
      hostname: 'www.freecodecamp.com',
      path: '/the-fastest-web-page-on-the-internet'
    }, function(err, data) {
      if (err) return console.log(err);
      console.log(data.time_starttransfer, data.size_download);
     // console.log(data.size_download);
    });
}
    
setInterval(test, 1000);
