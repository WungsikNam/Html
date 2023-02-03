function fun1(){//이름이 있는 함수 
    console.log('func1');

    func2(func1)
}

func1()

function func2(func1){
console.log(func1);// 함수를 파라미터로 넘길 수 있다. 
}