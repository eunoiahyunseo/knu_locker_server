var fs = require('fs');
var url = require('url');
var qs = require('querystring');
module.exports ={
  main:function(request,response){
    var _url = request.url;
    if(_url == '/favicon.ico'){
      response.writeHead(200);
      response.end(fs.readFileSync("./favicon.ico"));
      return;
    }
    response.writeHead(200);
    var result = `<!doctype html>
    <html>
    <head>
      <title>KNU CSE 사물함</title>
      <meta charset="utf-8">
      <link rel="stylesheet" type="text/css" href="/css/top.css"/>
      <link rel="stylesheet" type="text/css" href="/css/main.css"/>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </head>
    <body>
      ${fs.readFileSync("./template/top.html")}
      <div id="main_container">
      ${fs.readFileSync("./index.html")}
      </div>
    </body>
    </html>`;
    response.end(result);
  }
}
