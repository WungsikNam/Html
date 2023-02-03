//array for each 
let color = ['red','green','blue']//리터널 이용한 배열선언 및 초기화 

//콜백함수 함수호출할때 인수(파라미터)로 함수가 들어가는 형태  
//arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
//ES5 순수한 배열 유사배열도 처리해줌 ES6 - 순수배열만 
/*https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach*/

//이전
colors.forEach(function(color,index,items){//3번반복
    console.log(color);//red green blue
    console.log(index);//0     1     2
    console.log(items);//["red","green","blue"] ["red","green","blue"] ["red","green","blue"]
})

//이후버전 - React수업 -데이터 변하면 변하는것만 랜더링처리함 
colors.forEach((color,index)=>{
console.log(color);//red green blue
    console.log(index);//0     1     2
    console.log(items);//["red","green","blue"] ["red","green","blue"] ["red","green","blue"]
})

//map을 이해서 반복적으로 값을 낼 수 있음 
colors.map((color,index)=>{
console.log(color);//red green blue
    console.log(index);//0     1     2
    console.log(items);//["red","green","blue"] ["red","green","blue"] ["red","green","blue"]
})