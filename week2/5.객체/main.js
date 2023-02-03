//객체 

const student = { 
    name: '이순신',
    age: 26,    

}

console.log(student);
console.log(student.name);
console.log(student['name']);
let key = 'name'
console.log(student['key']);


function student(){
    this.name = '강감찬'
    this.age = 20; 
}

const student = new student(); 
console.log(student);
console.log(student.name);
console.log(student['name']);

const student = new Object(); 
console.log(student);
console.log(student.name);
console.log(student['name']);//결과값은 똑같음 
///////////////////////////////////////////////////////////////////////////////////////

const s1 = { 
    name: '남웅식',
    age: 26,    

}

const s2 = { 
    name: '남아정',
    age: 28,  
    parent : s1//   

}

console.log(s1);
console.log(s2); // 하이브리드 앱 개발할때 자주 나오는 타입 


const sa = [s1,s2]

//접근시 
console.log(sa[0]);
console.log(sa[1]);
console.log(sa[0].name);
console.log(sa[0].age);
console.log(sa[1]['parent']['name']); // 똑바로 확인해 
