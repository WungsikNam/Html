//변수 선언시 var는 사용하지 않음- 호이스팅 때문 
//const -재할당 불가 

const num =5 

const num2 = 1

console.log(num +1); //6이 출력이 됨 
console.log(num + num2);//6 
console.log(num + null);//5가나옴 null에대해선 덧셈연산자는 영향을 안줌 
console.log(num + undefined);//NaN  

