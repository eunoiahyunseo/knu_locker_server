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
        <form id="apply" action="/sendMail/" method="post">
        <label>이름</label><input type="text" id="name" name="name" placeholder="ex)홍길동"/>
        <br>
        <label>학번</label><input type="text" id="number" name="number" placeholder="ex)2022123456"/>
        <br>
        <label>학교 이메일</label><input type="email" id="number" name="number" placeholder="ex)aaaa@knu.ac.kr"/>
        <br>
        <fieldset>
          <legend>희망 층수</legend>
          <label>1순위</label>
          <br>
          <label><input type="radio" name="first_floor" value="-1"> 지하1층</label>
          <label><input type="radio" name="first_floor" value="1"> 1층</label>
          <label><input type="radio" name="first_floor" value="3"> 3층</label>
          <br>
          <label>2순위</label>
          <br>
          <label><input type="radio" name="second_floor" value="-1"> 지하1층</label>
          <label><input type="radio" name="second_floor" value="1"> 1층</label>
          <label><input type="radio" name="second_floor" value="3"> 3층</label>
        </fieldset>
        <fieldset>
          <legend>희망 높이</legend>
          <label>1순위</label>
          <br>
          <label><input type="radio" name="first_height" value="2"> 상</label>
          <label><input type="radio" name="first_height" value="1"> 중</label>
          <label><input type="radio" name="first_height" value="0"> 하</label>
          <br>
          <label>2순위</label>
          <br>
          <label><input type="radio" name="second_height" value="2"> 상</label>
          <label><input type="radio" name="second_height" value="1"> 중</label>
          <label><input type="radio" name="second_height" value="0"> 하</label>
        </fieldset>
        <p><input type="submit" value="제출"></p>
        </form>
      </div>
    </body>
    </html>`;
    response.end(result);
  }
}
