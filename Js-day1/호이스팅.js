console.log(text);
text = 'hello';
var text;
console.log(text);

/*
호이스팅(hoisting)
:블록안에서 선언된 지역변수가 코드 블록 밖으로 끌어 올려지면서 
강제로 전역변수화 되는 현상 
*/

const btns = document.querySelectorAll('ul li')

/*for(let j=0;j<btns.length;j++){
    btns[j].addEventListener('click',()=>{
        console.log(j);
    })
}*/

/*즉시실행함수를 통해 호이스팅 문제를 해결할 수 있다 */


/*
괄호가 2개 들어감
첫번째 - 함수의 선언부 
두번째 - 함수 호출하는 괄호
익명함수 형태인데 호출이 되는 이유는 
두번째 괄호가 있기 때문에 가능함 

함수가 자기자신을 정의하자마자 바로 자신을 호출하는 것 

*/
/* 이와 같다 */
for(var j=0;j<btns.length;j++){
    ((index)=>{

        btns[j].addEventListener('click',()=>{
            console.log(index);
        }//end of click event
        )})(j)
    
}//end of for
/*index값이 j값 */