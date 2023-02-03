//Nullish

console.log(null ?? 1);
console.log(undefined ?? 2);//2
console.log(undefined ?? null);//ㅜㅕㅣㅣ

console.log(null ?? 1 ?? 3); //1
console.log(false ?? 1 ?? 3); //1
console.log(0??1??3);//1 

//or 연산자인경우 왼쪽부터 비교한다 

const no = 0  
const num = no||7

console.log(num);

//무엇을 봤냐? Nullish 병합연산자를 이용하면 -왼쪽부터 비교하는 것은 Or연산자나 동일 
// ***그러나 undefined는 건너뛰고 나머지 데이터 만나면 처음 만나자마자 반환해준다. 
const num2 = no ?? 7

console.log(num2);//0