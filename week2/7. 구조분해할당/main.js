const obj={
    a:1,
    b:2,
    c:3,
    e: null,
};

// 구조분해시 같은 변수를 사용불가 
const {a,b} = obj// 필요한 것 만꺼내서 해체시킨다. 
console.log(a)
console.log(b)
console.log(e)
const {c} = obj
//초기화도 가능하다 - 구조분해 할당시 가능하다 
const {e1=5} = obj
console.log(c);
console.log(e1);
console.log(e);
console.log(y);//obj에 y가 없으니 14번초기화 된값이 출력 

const arr = [1,2,3,4,5]
const [i,j,...rest]=arr //구조분해할당 
const [i2,j2,...abc]=arr    //구조분해할당 
console.log(i);
console.log(j);
console.log(rest);