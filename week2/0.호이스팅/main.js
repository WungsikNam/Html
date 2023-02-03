// 호이스팅 때문에 선언이 끌어올려져서 오류 안남.
//변수 : 특정 데이터값을 임시로 저장하는 공간 
//=> 특정값을 자주사용할때 
//=>반복적인 값이 여러코드에 걸쳐서 빈번히 쓰일때 
// 변수선언방식 
//ES5 var 
//ES let,const 사용해 a.f es7
//숫자로 시작불가 특수문자 (_,$불가) 예약어 불가 대소문자 구분 
const text = 'default';
text = 'Ha'
console.log(text);//undefined or null or ''
console.log(text);
console.log(`text의 값은 ${text}입니다.`);//템퍼럴이터널 
//고정값
//let은 변경될수있는 값 

const 변수명 = "안녕"
console.log('변수명');