var htmlQuiz = [
    {
        question: 'HTML Stands for ?' ,
        option1: 'Hypertext' ,
        option2: 'Markup' , 
        option3: 'HyperSuperText' , 
        option4: 'HyperText Markup Language' , 
        answer: 'HyperText Markup Language'
    },
    {
        question: 'Which Element used to bold text in HTML?' ,
        option1: 'img' ,
        option2: 'h1' , 
        option3: 'strong' , 
        option4: 'p' , 
        answer: 'strong'
    },
    {
        question: 'Which Element used for Image in HTML?' ,
        option1: 'span' ,
        option2: 'div' , 
        option3: 'image' , 
        option4: 'img' , 
        answer: 'img'
    },

]

let quizContainer = document.querySelector(".quiz-container");

let question = document.querySelector(".question")

let option1 = document.querySelector("#option1");

let option2 = document.querySelector("#option2");

let option3 = document.querySelector("#option3");

let option4 = document.querySelector("#option4");

let label1 = document.querySelector("#label1");

let label2 = document.querySelector("#label2");

let label3 = document.querySelector("#label3");

let label4 = document.querySelector("#label4");