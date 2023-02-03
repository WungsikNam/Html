const { response } = require("express");

const requestOptions={
    method: 'get',
    redirect:"follow",
};

fetch("https://api.hnpwa.com/v0/news/1.json",requestOptions)
.then((response))=>response.json())
.then((result))=>console.log(result);
.then((result))=>{
    const ul = document.createElement('ul')
    for(let i =o;i<5;i++){
        const li = document.createElement('li')
        console.log(result[i].title);
        li.linerHTML = result[i].title;
        ul.appendChild(li)
    }
document.getElementById('root').appendChild(ul)

})
.catch((error)=> console.log('error',);)