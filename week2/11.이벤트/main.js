//클래스 값이면 붙임 태그이면 안붙임 
const a =document.querySelector("a")
console.dir(a)//Dom 구조를 봄
console.log(a);


//dom 
//window 최상위 객체 
//document 
//html 자녀 head body 안엔 a태그가 있지

a.onclick = () => {
    console.log('링크클릭');
}
a.onclick = () => {
    console.log('링크클릭 다시');
}


a.addEventListener('click',()=> {
    console.log('클릭');
})
a.addEventListener('click',()=> {
    console.log('클릭다시');
})