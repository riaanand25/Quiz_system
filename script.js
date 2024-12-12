import {questions} from "./questions.js"
// console.log(questions);

const start = document.querySelector("#btn-start")
const show = document.querySelector("#show")
const inputbox = document.querySelector("#inputbox")
const success = document.querySelector("#success")
const create = document.querySelector("#create")
const quit = document.querySelector("#quit")
const btn_user = document.querySelector("#btn-user")
const input = document.querySelector("#input")
const box = document.querySelector(".box")
const userbox = document.querySelector(".userbox")
const container1 = document.querySelector("#container1")
const pg2 = document.querySelector(".pg2")
const container2 = document.querySelector("#container2")
const person = document.querySelector("#person")
const quiz_start = document.querySelector("#quiz_start")
const coding = document.querySelector("#coding")
const icon = document.querySelector("#icon")
const pg3 = document.querySelector(".pg3")
const quebox = document.querySelector(".quebox")
const blankarr = [];
let musicopt = false;
let modernartopt = false;
let codingopt = false;


start.addEventListener("click",()=>
{
    if(input.value.trim()===""){
        show.style.display = "block";
        setTimeout(() => {
        show.style.display = "none";
        }, 2000);
    }
    else
    {
        pg2.style.display = "block"
    container1.style.display= "none"
    }
})
quit.addEventListener("click",()=>
{
    inputbox.style.display = "none"
})
btn_user.addEventListener("click",()=>
{
    show.style.display = "none";
    inputbox.style.display = "block"
})
create.addEventListener("click",()=>
{
    if(input.value===""){
        alert("Please Enter Name")
    }
    else{
        let userData = input.value;
        person.innerHTML = userData
        let existingdata = JSON.parse(localStorage.getItem("name")) || []
        existingdata.push(userData);
        localStorage.setItem("name",JSON.stringify(existingdata))
        inputbox.style.display = "none"
        success.style.display = "block"
        setTimeout(() => {
        success.style.display = "none"
        }, 2000);
        const span = document.createElement("span");
        span.textContent = userData
        btn_user.style.display = "none"
        userbox.append(span)
    }

})

coding.addEventListener("click",()=>
{
   coding.style.border = "2px solid red"
   icon.style.display = "block"
   codingopt = true;
})

quiz_start.addEventListener("click",()=>
{   
    if(codingopt===false && musicopt===false && modernartopt===false ){
        alert("Please select any Field")
        return
    }
    else{
         pg2.style.display = "none"
          pg3.style.display = "block"
    }
})


