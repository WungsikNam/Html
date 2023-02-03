const btns=document.querySelectorAll('.list li')


let isFlag =1


for(let i =0;i<btns.length;i++){
    btns[i].addEventListener('click',function(e){
        console.log(e.target);
if(isFlag){
--isFlag//원래대로 들어감 
btns[i].setAttribute('class','on')
}else{
    btns[i].setAttribute('class','off')
++isFlag
}

    })
    
    for(let i =0;i<btns.length;i++){
        btns[i].addEventListener('click',e=>{
            console.log(e.target);
        })
    }
}