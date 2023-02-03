const dept = {
    deptno :10,
    dname : 'sales',
    loc: '서울'
}

console.log(dept); 
console.log(dept.dname); 
console.log(dept.loc); 

// 자바와 다른 문법 
console.log(dept[`deptno`]); // 가능함 ㅇㅋ? 
console.log(dept[`year`]); // undefined
console.log(dept[`boss`]); // null