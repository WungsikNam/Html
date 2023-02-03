//arr.filter(callback(element[, index[, array]])[, thisArg])


function Counter ()
{

    this.sum =0
    this.count =0
}

//사용자 정의 prototye을 이용하면 나도 자바스크립트처럼 
//사용자 정의 객체를 선언한 뒤 사용자 정의함수를 정의 할 수 있다.
// react , redux?? 사상을 이해하는데 자스의 문법기초가 필요함 사용자정의로 구현해보는  vue.js 
//+typescript - 바닐라스크립트기반 위에 얹혀진 언어 - 객체지향 - 캡슐화,상속,다형성
//자스에서도 사용자정의 객체를 만들 수 있다. funtion을 이용해서
//사용자정의 함수를 정의할때는 prototype을 사용한다. 
//prototye을사용하여 함수를 정의한다는 건 사용자 정의 API를 만드는 것이다. 
//우리가 정의한 객체 Counter는 표준이 아니다. 
//또한 배포가 되지않았다. 그러니깐 구글에서 사용불가 
Counter.prototype.add = function(array){//array-> [2,5,9]
    array.forEach (function(item){
    this.sum += item//0->2->7->16 
    ++this.count //3
    },this);
}


const obj = new Counter()
obj.add([3,5,15])
console.log(obj.sum);

//자바스크립트에서는 함수를 만들때도 function 
//객체를 선언할때도 function
//객체가 정의하는 함수를 만들때는 prototype
//바닐라스크립트 -순수한 자바스크립트 
//전변선언없이도 생성자에서 초기화 가능함 
//나도 API(객체와 함수 그리고 변수[ var ])를 만들수있는 개발자가 되자 
function Sonata(){
    this.wheelNum
    this.speed
    this.carName
}

Sonata.prototype.stop = function(){
    console.log('stop 호출+wheelNum');

}

const myCar = new Sonata()
myCar.stop(4)