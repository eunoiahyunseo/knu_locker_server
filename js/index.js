var fs = require('fs');
var url = require('url');
var qs = require('querystring');
module.exports ={
  main:function(request,response){
    var _url = request.url;
    fs.exists("."+_url,  function(exists){
        if(exists){
          response.writeHead(200);
          response.end(fs.readFileSync("."+_url));
        } else {
          response.writeHead(404);
          response.end('Not found');
        }
     });
  }
}
