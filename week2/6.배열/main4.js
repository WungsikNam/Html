// 배열 : Array 
//연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조이다. 
//얕은 복사와 깊은 복사

const colors = ["red","gold","","white"]

const copy = []

//이전방식 
for(let i = 0; i< colors.length; i++) {
copy.push(colors[i])
console.log(`copy[${i}:${copy[i]}]`);
}

//이후 방식 for each 
colors.forEach(function(color){
    copy.push(color);
console.log(`${copy}`);
});

//이렇게 쓸 수 있음 
['red','gold','white'].forEach(color=>{
    copy.push(color)
})