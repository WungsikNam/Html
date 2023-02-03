const express = require('express');
const app = express();
const client_id = 'V3dY425uFY0UMm3FJFLc';//개발자센터에서 발급받은 Client ID
const client_secret = 'BJaKqzpSwh'; //개발자센터에서 발급받은 Client Secret
const fs = require('fs');
app.get('/captcha/image', function (req, res) {
   /* 네이버 서버가 제안하는 url주소 키값을 받아와야 함(인증과정) */
   const api_url = 'https://openapi.naver.com/v1/captcha/ncaptcha.bin?key=' + req.query.key;
   //네이버가 제공하눈 URL주소로 네이버서버에 요청해야 하니깐 
   //npm i request 
   const request = require('request');
   const options = {
       url: api_url,
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
    const writeStream = fs.createWriteStream('./captcha.jpg');
    const _req = request.get(options).on('response', function(response) {
       console.log(response.statusCode) // 200
       console.log(response.headers['content-type'])
    });
  _req.pipe(writeStream); // file로 출력
  _req.pipe(res); // 브라우저로 출력
 });
 app.listen(3000, function () {
   console.log('http://127.0.0.1:3000/captcha/image?key=캡차키 app listening on port 3000!');
 });