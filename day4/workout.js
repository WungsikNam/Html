const user = document.querySelector('.user_input');
const btnAdd = document.querySelector('.btn_add');

btnAdd.addEventListener('click',function(e){  //callback함수   - 시스템에서 이벤트가 감지되었을 때 - 너가 버튼을 누르면 호출 된다.
    console.log("plus버튼 호출");
    addRow();
});

user.addEventListener('keypress',(e)=>{
    console.log("key==>"+e.key);
    /* */
    if(e.key==="Enter"){
        console.log("Enter 이벤트 호출성공");
    addRow();//호출 
    }
});

function addRow(){
    //사용자가 입력한 운동명을 받아온다
    const workName=user.value;
    console.log(`사용자가 입력한 값 => ${workName}`);

    if(workName===""){
        user.focus();//커서으ㅢ 위치를 input type =text로 가져옴 
        return; //계속진행되면 안되니깐 
        return; // addrow탈출 

    }
// 위 조건을 수렴하지 않으면 input text를 초기화 한다. 
user.value ="";
user.focus();
}
