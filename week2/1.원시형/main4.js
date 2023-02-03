//undefined 값이 할당되지 않은 상태 기본적으로 가지는 값 값이 할당되지 않는 상태 

let age = undefined 

console.log(age);

setTimeout(function () { // 콜백 함수 이벤트 
    age =10 
    console.log(age);
},2000)// 밀리세크 단위   10초 있다가 undefined

