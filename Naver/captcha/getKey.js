/*
 Express는 웹 및 모바일 앱[하이브리드앱(웹+앱{네이티브})]을 위한 일련의 강력한 기능을 제공하는 간결하고 
 유연한 Node.js 웹 앱 프레임워크입니다. 
 ExpressAPI를 이용하면 
 */

const express = require('express');//웹어플리케이션을 위한 프레임워크를 선언하는것이다 
//선언하면 프레임워크가 제공하는 API를 누릴수있다. 그럴때 node,js에서는 require라는 함수를 사용함 
//리액느에서는 import가 제공됨 
//<script type = 'module"> </script> 지원하게 되면서 넷플릭스가 서버사이드를 노드제이에스기반 
const app = express();//받은거
//네이버서버에서 발급한 고유아이디 값 -회원가입이 되어있고 개발자센터에서 어플리케이션을 등록한자 에게 발급되는 것 
const client_id = 'V3dY425uFY0UMm3FJFLc';//개발자센터에서 발급받은 Client ID
//개발자센터에서 어플리케이션을 등록하고 받는 비번 
const client_secret = 'BJaKqzpSwh'; //개발자센터에서 발급받은 Client Secret
const fs = require('fs');
//express에서는 restapi를 지원하는 메소드를 제공하고 있다. 
//두번째 팔가미터는 콜백함수임 
//첫번째 파라미터 요청에 대한 응답을 받기위해 호출되는 함수임 
//http프로토콜을 이용하여 서버에 요청하고 응답처리를 위해서는 
//반드시 어떤언어이든 요청객체와 응답객체를 제공받아야 함 
//익스프레스도 그래서 제공하고있다. 
//req는 요청객체의 인스턴스변수로 express로 부터 객체주입 받는다.-사용자가 생성할 수 없다. 
//이런경우 의존성 주입(dependency injection)이라고 할 수 있다.  
app.get('/captcha/image', function (req, res) {
   const api_url = 'https://openapi.naver.com/v1/captcha/ncaptcha.bin?key=' + req.query.key;
   const request = require('request');//요청객체 
   const options = {
       url: api_url,
       //http 프로토콜을 통해 전송할때 header body가 있는데 get은 그중 header를 이용함 
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
 //express로 구성하는 서버의 포트번호는 3000번 
 //완성URL
 app.listen(3000, function () {
   console.log('http://127.0.0.1:3000/captcha/image?key=캡차키 app listening on port 3000!');
 });

 /*
 REST API 
 우리가 하고싶은 작업에 따라 다른 메소드로 요청을 하는 방법을 제공 
 http - 메소드 수단으로 이용
 get - 데이터 조회 
 post - 데이터 등록 및 전송 
put - 데이터 수정
delete - 데이터 삭제 
 */