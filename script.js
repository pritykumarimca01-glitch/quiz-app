let questions = [
    { q: "Java is?", options: ["Language","Animal","Car","Fruit"], answer: "a" },
    { q: "HTML stands for?", options: ["Wrong","Hyper Text Markup Language","Wrong","Wrong"], answer: "b" },
    { q: "CPU stands for?", options: ["Central Processing Unit","Wrong","Wrong","Wrong"], answer: "a" }
];

let index = 0;
let score = 0;
let user = "";
let time = 10;
let timer;

// Start Quiz
function startQuiz() {
    user = document.getElementById("username").value;
    if(user === "") {
        alert("Enter name!");
        return;
    }

    document.getElementById("login").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    document.getElementById("welcome").innerText = "Welcome " + user;

    loadQuestion();
}

// Load Question
function loadQuestion() {
    document.getElementById("question").innerText = questions[index].q;

    document.getElementById("btn1").innerText = "A. " + questions[index].options[0];
    document.getElementById("btn2").innerText = "B. " + questions[index].options[1];
    document.getElementById("btn3").innerText = "C. " + questions[index].options[2];
    document.getElementById("btn4").innerText = "D. " + questions[index].options[3];

    startTimer();
}

// Check Answer
function checkAnswer(ans) {
    if(ans === questions[index].answer) {
        score++;
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Wrong!";
    }
    clearInterval(timer);
}

// Next Question
function nextQuestion() {
    index++;
    time = 10;

    if(index < questions.length) {
        document.getElementById("result").innerText = "";
        loadQuestion();
    } else {
        saveScore();
        showLeaderboard();
    }
}

// Timer
function startTimer() {
    document.getElementById("timer").innerText = "Time: " + time;

    timer = setInterval(() => {
        time--;
        document.getElementById("timer").innerText = "Time: " + time;

        if(time === 0) {
            clearInterval(timer);
            document.getElementById("result").innerText = "Time's up!";
        }
    }, 1000);
}

// Save Score
function saveScore() {
    let scores = JSON.parse(localStorage.getItem("quizScores")) || [];
    scores.push({ name: user, score: score });
    localStorage.setItem("quizScores", JSON.stringify(scores));
}

// Show Leaderboard
function showLeaderboard() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("leaderboard").style.display = "block";

    let scores = JSON.parse(localStorage.getItem("quizScores")) || [];
    let list = document.getElementById("scores");
    list.innerHTML = "";

    scores.forEach(s => {
        let li = document.createElement("li");
        li.innerText = s.name + " - " + s.score;
        list.appendChild(li);
    });
}

// Restart
function restartQuiz() {
    index = 0;
    score = 0;
    time = 10;

    document.getElementById("leaderboard").style.display = "none";
    document.getElementById("login").style.display = "block";
}
// let questions = [
//     {
//         q: "Java is?",
//         options: ["Language", "Animal", "Car", "Fruit"],
//         answer: "a"
//     },
//     {
//         q: "HTML stands for?",
//         options: [
//             "Hyper Trainer Marking Language",
//             "Hyper Text Markup Language",
//             "High Text Machine Language",
//             "None"
//         ],
//         answer: "b"
//     },
//     {
//         q: "CPU stands for?",
//         options: [
//             "Central Processing Unit",
//             "Computer Processing Unit",
//             "Central Print Unit",
//             "None"
//         ],
//         answer: "a"
//     }
// ];

// let index = 0;
// let score = 0;
// let time = 10;
// let timer;

// function loadQuestion() {
//     document.getElementById("question").innerText = questions[index].q;

//     document.getElementById("btn1").innerText = "A. " + questions[index].options[0];
//     document.getElementById("btn2").innerText = "B. " + questions[index].options[1];
//     document.getElementById("btn3").innerText = "C. " + questions[index].options[2];
//     document.getElementById("btn4").innerText = "D. " + questions[index].options[3];

//     startTimer();
// }

// function checkAnswer(ans) {
//     if (ans === questions[index].answer) {
//         score++;
//         document.getElementById("result").innerText = "Correct!";
//     } else {
//         document.getElementById("result").innerText = "Wrong!";
//     }
//     clearInterval(timer);
// }

// function nextQuestion() {
//     index++;
//     if (index < questions.length) {
//         document.getElementById("result").innerText = "";
//         time = 10;
//         loadQuestion();
//     } else {
//         document.getElementById("question").innerText =
//             "Quiz Finished! Score: " + score;
//         document.getElementById("timer").innerText = "";
//     }
// }

// function startTimer() {
//     document.getElementById("timer").innerText = "Time: " + time;

//     timer = setInterval(() => {
//         time--;
//         document.getElementById("timer").innerText = "Time: " + time;

//         if (time === 0) {
//             clearInterval(timer);
//             document.getElementById("result").innerText = "Time's up!";
//         }
//     }, 1000);
// }

// function restartQuiz() {
//     index = 0;
//     score = 0;
//     time = 10;
//     loadQuestion();
// }

// start
// loadQuestion();
// let questions = [
//     {
//         q: "Java is?",
//         options: ["Language", "Animal", "Car", "Fruit"],
//         answer: "a"
//     },
//     {
//         q: "HTML stands for?",
//         options: [
//             "Hyper Trainer Marking Language",
//             "Hyper Text Markup Language",
//             "High Text Machine Language",
//             "None"
//         ],
//         answer: "b"
//     },
//     {
//         q: "CPU stands for?",
//         options: [
//             "Central Processing Unit",
//             "Computer Processing Unit",
//             "Central Print Unit",
//             "None"
//         ],
//         answer: "a"
//     }
// ];

// let index = 0;
// let score = 0;

// function loadQuestion() {
//     document.getElementById("question").innerText =
//         questions[index].q;

//     let btns = document.querySelectorAll("button");

//     btns[0].innerText = "A. " + questions[index].options[0];
//     btns[1].innerText = "B. " + questions[index].options[1];
//     btns[2].innerText = "C. " + questions[index].options[2];
//     btns[3].innerText = "D. " + questions[index].options[3];
// }

// function checkAnswer(ans) {
//     if (ans === questions[index].answer) {
//         score++;
//         document.getElementById("result").innerText = "Correct!";
//     } else {
//         document.getElementById("result").innerText = "Wrong!";
//     }
// }

// function nextQuestion() {
//     index++;
//     if (index < questions.length) {
//         loadQuestion();
//         document.getElementById("result").innerText = "";
//     } else {
//         document.getElementById("question").innerText =
//             "Quiz Finished! Score: " + score;
//     }
// }

// // start
// loadQuestion();