const fruits = ['🌭','🍟','🍔']
const fruits2 = ['🍷','🍗','🍜']

const fruits3 = ['🍙',...fruits2]

fruits3.forEach((fruit,index)=>{
    console.log(`${index}-${fruit}`);
})


//합집합 
const fruits4 = [...fruits,...fruits2]

fruits4.forEach(function(fruit,index){
    console.log(`${index}-${fruit}`);
})


const dept1 = {
    no:30,
    name: '개발부',
    loc : '제주'
} //객체생성 

const emp = {
    empno : 7566, 
    ename : 'wing',
    sal: 2500
}

const emp2 = {...emp,empno:7499,ename: 'Tiger',sal:3000}
console.log(emp);
console.log(emp2);

let items = [ 
{id:1,name:"런닝",count:10},
{id:2,name:"복싱",count:12},
{id:3,name:"클라이밍",count:15}

];

let items2=[...items]
console.log(items2);

item2 = [...items,{id:4,name: "축구",count:9}]
console.log(items2);

item2 = [...items,{id:5,name: "축구",count:23}]
console.log(items2);// 