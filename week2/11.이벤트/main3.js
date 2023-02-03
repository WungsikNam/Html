const a = document.querySelector('a')

a.addEventListener('click',(event)=> {
    event.preventDefault();
})/*파라미터로 인수를 넘길 수 있음*/ 

/*a.addEventListener('click',function(event){

})*/

const box = document.querySelector('.box')
box.addEventListener('mousemove',(event)=>{
    console.log(event);
    console.log(`현제 x축위치 ${event.pageX}`);
    console.log(`현제 y축위치 ${event.pageY}`);
})//이벤트 이름만 바뀌네 마우스트래커 

window.addEventListener('mousewheel',(e)=>{
    console.log(e);
    if(e.deltaY>0)console.log('wheel down');
    if(e.deltaY<0)console.log('wheel up');
})