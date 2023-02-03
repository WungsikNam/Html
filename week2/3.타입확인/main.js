//데이터타입 

const a =5

console.log(typeof a);
console.log(typeof '이순신' ==='string');// 
console.log(typeof a ==='number');// 
console.log(typeof undefined ==='undefined');// 
console.log(typeof null ==='object');// 
console.log(typeof true ==='boolean');// 
console.log(typeof [] ==='object');// 대괄호 배열  [] {}  차이점을 알아야함 자스의 배열은 더 쓰임새 가 많음 
console.log(typeof {} ==='object');// 중괄호 객체   
console.log(typeof function(){} ==='funtion');// 중괄호-객체   

function methodA(){//funtion도 객체 
    console.log('methodA');
}
methodA();
console.log(methodA);//funtionA가 찍힘 

console.log([].constructor===Array);//타입체크까지 같이 한다. 
console.log({}.constructor===Object);//true 
console.log(Object.prototype.toString.call(null).slice(8,-1)==='null');//복습 

function checkType (data)  { 
    return Object.prototype.toString.call(data).slice(8,-1)
}
//slice 찾아보기 
const checkType2 = (data)=> { //Es6는 arrowfuntion 을 쓰자  위에거보다 이걸 쓰자고!!!!!! 
    return Object.prototype.toString.call(data).slice(8,-1)
}

console.log(checkType(null));
console.log(checkType(undefined));
console.log(checkType('강감찬'));
console.log(checkType(null));
console.log(checkType(undefined));
console.log(checkType('강감찬'));

// 자세하게 보자 ! 