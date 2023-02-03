// 배열 : Array 
//연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조이다. 

const colors = ["red","gold","","white"]

console.log(colors);

//arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])


//a.f [ES6]는 파라미터가 한개이면 괄호 생략가능함
// a.f  실행문이 단일행이면 좌중우중괄호 생략가능함 
//파라미터 가 한개면 생략가능함 

colors.forEach(color=>  console.log(color)) //함수의 이름이 없다 사용자 호출이 불가하다.  console.log(color))
colors.forEach(color=>  {console.log(color)}) //함수의 이름이 없다 사용자 호출이 불가하다.  console.log(color))



/*colors.forEach function(color,index,colors) {//함수 이름이 없다.
    console.log(color);
})*/ 