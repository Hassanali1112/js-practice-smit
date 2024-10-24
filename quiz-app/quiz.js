const quizData =[
    {
        question : "What is the most used programming language in 2021",
        and1 : "java",
        and2 : "kkk",
        and3 : "Python",
        and4 : "JavaScript",
        correctAns : "javaScript"
    },
    {
        question : "What does HTML stand for?",
        and1 : "Hyper Text Markup Language",
        ans2 : "Hyper Text Machine Language",
        and3 : "kkkkkk",
        and4 : "ffffff",
        correctAns : "Hyper Text Markup Language"
    },
    {
        question : "Who is the President of US?",
        and1 : "Joe Biden",
        ans2 : "Donald Trump",
        and3 : "Barack Obama",
        and4 : "George Bush",
        correctAns : "Joe Biden"
    },
]

const question = document.querySelector("#Question");
const optionA = document.querySelector("#text-a");
const optionB = document.querySelector("#text-b");
const optionC = document.querySelector("#text-c");
const optionD = document.querySelector("#text-d");
console.log(optionA.textContent)
console.log(optionB.textContent)
console.log(optionC.textContent)
console.log(optionD.textContent)

let currentQuestion = 0;
let score = 0;
 question.textContent = quizData[currentQuestion].question;
 optionA.textContent =quizData[currentQuestion].and1
 optionB.textContent =quizData[currentQuestion].and2
 optionC.textContent =quizData[currentQuestion].and3
 optionD.textContent =quizData[currentQuestion].and4