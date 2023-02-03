//구조분해 할당

const fruits = ['🌭','🍟','🍔']

const[f1,f2,f3]= fruits //이게 구조분해 할당
console.log(f1,f2,f3);

//이렇게 안한다? 

const fr1 = fruits[0]
const fr2 = fruits[1]
const fr3 = fruits[2]
console.log(fr1,fr2,fr3);
//이렇게 귀찮게 해야한다. 

const dept1 = {
    no:30,
    name: '개발부',
    loc : '제주'
} //객체생성 

//↓
const {no,name,loc} =dept1 // 구조분해할당 
console.log(dept1);


const emp = {
    empno:7566,
    name: 'scott',
    sal : 2500
} 

const deptnemp = { ...dept1,...emp}
console.log(deptemp);

