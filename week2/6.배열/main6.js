// 배열 내장 함수 

const colors = ["red","gold","white"];

//toString(): 배열을 문자로 변환 
let result = colors.toString()
console.log(typeof result);

// join(): 구분자를 활용해 문자열로 이어붙이기 
let result2 = colors.join("+")
console.log(result2);


/* 예제 
 var a = ['바람', '비', '불'];
var myVar1 = a.join();      // myVar1에 '바람,비,불'을 대입
var myVar2 = a.join(', ');  // myVar2에 '바람, 비, 불'을 대입
var myVar3 = a.join(' + '); // myVar3에 '바람 + 비 + 불'을 대입
var myVar4 = a.join('');    // myVar4에 '바람비불'을 대입* */


//pop( ): 배열의 마지막 요소제거 (리턴값으로 잘라낸 요소반환 )
result = colors.pop()
console.log(result);

//push() 배열의 끝부분에 새로운 요소 추가(리터값으로 배열의 길이 반환)
result = colors.push('yellow')
console.log(result);


//shift():배열의 첫 부분 요소 제거(리턴값으로 잘라낸 요소 반환)
result = colors.shift()
console.log(result);

//unshift(): 배열의 첫 부분에 새로운 요소 추가 (리턴값으로 길이 반환)
result = colors.unshift("kiwi")
console.log(result);

//splice (삽입위치, 잘라낼 갯수, 추가할 내용 )-배열에 새로운 요소를 잘라서 붙임 
colors.splice(1,0,"black")
console.log(colors);

//concat ( ): 두개 배열 합치기 
const color2 = ["cyan","brown"]
result = colors.concat(color2)
console.log(result);

//slice() :배열 잘라내기 - 새로운 배열을 만들어서 잘라내기(리액트 CRUD 처리시 )***
//DB연동안하고 테스트 하고 싶으면 이걸 쓰자 

result = colors.slice(1)
console.log(result);
result=colors.slicez(1,-1)
console.log(result);

const result3 = ['Object Null'] 
console.log(result2,slice(8,-1));