const user = document.querySelector('.user_input');
const btnAdd = document.querySelector('.btn_add');

btnAdd.addEventListener('click',function(e){  //callback함수   - 시스템에서 이벤트가 감지되었을 때 - 너가 버튼을 누르면 호출 된다.
    console.log("plus버튼 호출");
    addRow();
}); //btnAdd라는 버튼에 액션이벤트 걸어준 것 

user.addEventListener('keypress',(e)=>{
    console.log("key==>"+e.key);
    
    if(e.key==="Enter"){
        console.log("Enter 이벤트 호출성공");
    addRow();//호출 
    }
});

function addRow(){
    //사용자가 입력한 운동명을 받아온다
    const workName=user.value; // 변수로 user에 다가 무언가를 썼을떄 
    console.log(`사용자가 입력한 값 => ${workName}`); /*??????*/

    if(workName===""){
        // 만약에 workName 과 값가 타입이 모두 같으면 
        user.focus();//커서의 위치를 input type =text로 가져옴 
        return; //계속진행되면 안되니깐 
        //return; // addrow탈출 
    }
// 위 조건을 수렴하지 않으면 input text를 초기화 한다. 
user.value =""; 
user.focus();
}

//try catch? 예외 잡는 것? 