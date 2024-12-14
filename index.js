import { questions } from "./questions.js";
console.log(questions);

const start = document.querySelector("#btn-start");
const show = document.querySelector("#show");
const inputbox = document.querySelector("#inputbox");
const success = document.querySelector("#success");
const create = document.querySelector("#create");
const quit = document.querySelector("#quit");
const btn_user = document.querySelector("#btn-user");
const input = document.querySelector("#input");
const infobox = document.querySelector(".infobox");
const userbox = document.querySelector(".userbox");
const container1 = document.querySelector("#container1");
const pg2 = document.querySelector(".pg2");
const person = document.querySelector("#person");
const quiz_start = document.querySelector("#quiz_start");
const coding = document.querySelector("#coding");
const icon = document.querySelector("#icon");
const pg3 = document.querySelector(".pg3");
const questionBox = document.querySelector("#questionBox");
const optionBox = document.querySelector("#optionsBox");
const nextBtn = document.querySelector("#next");
const quit_quiz = document.querySelector("#quit_quiz");

let musicopt = false;
let modernartopt = false;
let codingopt = false;
let arr = [];
let correctAns = [];


start.addEventListener("click", () => {
    if (input.value === "") {
        show.style.display = "block";
        setTimeout(() => {
            show.style.display = "none";
        }, 2000);
    } else {
        pg2.style.display = "block";
        container1.style.display = "none";
    }
});


//--------------------------------------------------------------

btn_user.addEventListener("click", () => {
    show.style.display = "none";
    inputbox.style.display = "block";
});

//----------------------------------------------------------------

create.addEventListener("click", () => {
    if (input.value === "") {
        alert("Please Enter Name");
    } else {
        let userData = input.value;
        person.innerHTML = userData;

        let existingdata = JSON.parse(localStorage.getItem("name")) || [];
        existingdata.push(userData);
        localStorage.setItem("name", JSON.stringify(existingdata));

        inputbox.style.display = "none";
        success.style.display = "block";

        setTimeout(() => {
            success.style.display = "none";
        }, 2000);

        const span = document.createElement("span");
        span.textContent = userData;
        btn_user.style.display = "none";
        userbox.append(span);
    }
});

//--------------------------------------------------------------------

coding.addEventListener("click", () => {
    coding.style.border = "2px solid red";
    icon.style.display = "block";
    codingopt = true;
});

//-------------------------------------------------------------------------


quiz_start.addEventListener("click", () => {
    if (codingopt === false && musicopt === false && modernartopt === false) {
        alert("Please select any Field");
        return;
    } else {
        pg2.style.display = "none";
        pg3.style.display = "block";
        showQuestion();
    }
});

//--------------------------------------------------------------------------------

function randomQuestions() {
    if (arr.length === questions.length) {
        infobox.style.display = "none"
        result.style.display = "block"
    }
    let allQuestions = Math.floor(Math.random() * questions.length);
    if (arr.includes(allQuestions)) {
        return randomQuestions();
    } else {
        arr.push(allQuestions);
        return allQuestions;
    }
}

//------------------------------------------------------------------------------------

function showQuestion() {
    const randomIndex = randomQuestions();
    if (randomIndex === null) {
        pg3.style.display = "none";
        container1.style.display = "block";
        return;
    }

    questionBox.innerHTML = "";
    optionBox.innerHTML = "";

    let que = document.createElement("h3");
    que.innerHTML = `Q: ${questions[randomIndex].q}`;
    correctAns = questions[randomIndex].a;

    que.classList = "Heading";
    que.style.color = "black";
    questionBox.appendChild(que);

    let options = questions[randomIndex].opt;
    options.forEach(option => {
        let opt_btn = document.createElement("p");
        opt_btn.textContent = option;
        opt_btn.className = "options";
        opt_btn.style.color = "black";
        opt_btn.style.margin = "10px";

        optionBox.appendChild(opt_btn);

        opt_btn.addEventListener("click", () => {
            checkAnswer(option, opt_btn);
        });
    });
}


//----------------------------------------------------------------------------

function checkAnswer(selectedOption, btn) {
    if (selectedOption === correctAns) {
        btn.style.backgroundColor = "green"; 
        nextBtn.style.display = "block"
    } else {
        btn.style.backgroundColor = "red"
    }
}

//-------------------------------------------------------------------------------
nextBtn.addEventListener("click", () => {
    // nextBtn.style.display = "none";
    showQuestion()
});


//--------------------------------------------------------------------------------

quit.addEventListener("click", () => {
  input.value = "";
  inputbox.style.display = "none"
  
});


quit_quiz.addEventListener("click",()=>{
    pg3.style.display = "none"
    pg2.style.display = "none"
    container1.style.display = "block"
})


