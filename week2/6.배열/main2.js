// 배열 : Array 
//연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조이다. 

const colors = ["red","gold","blue","white"]

console.log(colors);

//arr.filter(callback(element[, index[, array]])[, thisArg]) 기본 API 
                                            //     파라미터 아님      callback을 실행할 때 this로 사용하는 값.
colors.filter(function(a,index,array){ 
    // 실행문    함수   단수라서 
console.log(a);
console.log(index);
console.log(array);
}) 



/*callback은 다음 세 인수와 함께 호출됩니다:

요소값
요소 인덱스
순회(traverse)되는 배열 객체*/ 

/*https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter */