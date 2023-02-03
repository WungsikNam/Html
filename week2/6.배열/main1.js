//Array - 구조분해할당 문법 
//배열요소 
//배열생성방법 2가지 
//1) new Array
//2) 리터럴 이용

const fruits = new Array('apple','kiwi','mango') /*생성자*/ 

const fruits2 = ['cherry','orange']

console.log(fruits);
console.log(fruits2);
console.log(fruits[1]);
console.log(fruits2[1]);
console.log(fruits2.length); 
console.log(fruits2.[fruits2.length-1]);//맨마지막꺼가 나옴  근데 배열의 숫자를 모르니깐 length 써주자 
console.log(fruits2.[fruits.length-1]);//맨마지막꺼가 나옴  