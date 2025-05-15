const count=document.querySelector(".count");
const button=document.querySelector(".btn");

const generateColor =()=>{
    const color= Math.random().toString(16).substring(2,8);  
    document.body.style.backgroundColor="#"+color;
    count.innerHTML="#"+color;
}

button.addEventListener("click",generateColor);


