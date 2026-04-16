    let questions = [
  { question: "Java is?", options: ["Programming Language","Animal","Car","Fruit"], answer: 0 },
  { question: "HTML stands for?", options: ["Hyper Text Markup Language","High Text Machine Language","Home Tool Markup Language","None"], answer: 0 },
  { question: "CSS is used for?", options: ["Styling Web Pages","Database","Game","OS"], answer: 0 },
  { question: "JavaScript is?", options: ["Programming Language","Database","OS","Machine"], answer: 0 },
  { question: "CPU stands for?", options: ["Central Processing Unit","Computer Personal Unit","Central Program Unit","Control Processing Unit"], answer: 0 },

  { question: "Which tag is used for paragraph?", options: ["<p>","<h1>","<div>","<span>"], answer: 0 },
  { question: "Which is browser language?", options: ["JavaScript","C++","Python","Java"], answer: 0 },
  { question: "HTTP stands for?", options: ["HyperText Transfer Protocol","High Transfer Text Protocol","Home Tool Transfer Protocol","None"], answer: 0 },
  { question: "Which symbol is used for ID in CSS?", options: [".","#","*","&"], answer: 1 },
  { question: "Which symbol is used for class in CSS?", options: [".","#","@","$"], answer: 0 },

  { question: "HTML file extension?", options: [".html",".css",".js",".txt"], answer: 0 },
  { question: "CSS full form?", options: ["Cascading Style Sheets","Computer Style System","Color Style Sheet","None"], answer: 0 },
  { question: "JS full form?", options: ["JavaScript","Java Source","Just Script","None"], answer: 0 },
  { question: "Which is backend language?", options: ["Java","HTML","CSS","Bootstrap"], answer: 0 },
  { question: "Which is frontend tool?", options: ["HTML","Database","Server","API"], answer: 0 },

  { question: "Which is database?", options: ["MySQL","HTML","CSS","JS"], answer: 0 },
  { question: "Which is version control system?", options: ["Git","HTML","CSS","JS"], answer: 0 },
  { question: "GitHub is used for?", options: ["Code hosting","Design","Game","Browser"], answer: 0 },
  { question: "API stands for?", options: ["Application Programming Interface","Android Program Interface","App Private Interface","None"], answer: 0 },
  { question: "JSON stands for?", options: ["JavaScript Object Notation","Java Simple Object Name","None","Java Source Object"], answer: 0 },

  { question: "Which is correct JS print?", options: ["console.log()","print()","echo()","write()"], answer: 0 },
  { question: "Which is loop in JS?", options: ["for","if","else","switch"], answer: 0 },
  { question: "Which is condition?", options: ["if","for","while","loop"], answer: 0 },
  { question: "Which is array symbol?", options: ["[]","{}","()","<>"], answer: 0 },
  { question: "Which is object symbol?", options: ["{}","[]","()","//"], answer: 0 },

  { question: "Which is cloud platform?", options: ["AWS","HTML","CSS","JS"], answer: 0 },
  { question: "Which is UI tool?", options: ["Figma","Java","C++","SQL"], answer: 0 },
  { question: "Which is search engine?", options: ["Google","HTML","CSS","JS"], answer: 0 },
  { question: "Which is mobile OS?", options: ["Android","HTML","CSS","JS"], answer: 0 },
  { question: "Which is Apple OS?", options: ["iOS","Windows","Linux","DOS"], answer: 0 },

  { question: "Which is input device?", options: ["Keyboard","Monitor","Speaker","Printer"], answer: 0 },
  { question: "Which is output device?", options: ["Monitor","Keyboard","Mouse","Mic"], answer: 0 },
  { question: "RAM is?", options: ["Memory","Processor","Software","App"], answer: 0 },
  { question: "ROM is?", options: ["Read Only Memory","Random Memory","Run Memory","None"], answer: 0 },
  { question: "Which is storage device?", options: ["Hard Disk","CPU","RAM","Monitor"], answer: 0 },

  { question: "AI stands for?", options: ["Artificial Intelligence","Auto Internet","Advanced Input","None"], answer: 0 },
  { question: "ML stands for?", options: ["Machine Learning","Main Language","Model Logic","None"], answer: 0 },
  { question: "Which is data type?", options: ["String","Screen","System","Server"], answer: 0 },
  { question: "Which is string?", options: ["Text","Number","Boolean","Object"], answer: 0 },
  { question: "Which is boolean?", options: ["True/False","1/2","Yes/No","A/B"], answer: 0 },

  { question: "Which tag for table?", options: ["<table>","<tab>","<grid>","<td>"], answer: 0 },
  { question: "Which tag for row?", options: ["<tr>","<td>","<th>","<row>"], answer: 0 },
  { question: "Which tag for cell?", options: ["<td>","<tr>","<cell>","<table>"], answer: 0 },
  { question: "Which tag for header cell?", options: ["<th>","<td>","<tr>","<head>"], answer: 0 },
  { question: "Which is correct HTML structure?", options: ["html-head-body","body-head-html","head-html-body","none"], answer: 0 },

  { question: "React is?", options: ["Library","Database","OS","Language"], answer: 0 },
  { question: "Node.js is used for?", options: ["Backend","Frontend only","Design","Game"], answer: 0 },
  { question: "Which runs JS outside browser?", options: ["Node.js","HTML","CSS","Java"], answer: 0 },
  { question: "Which is API format?", options: ["JSON","HTML","CSS","TXT"], answer: 0 },
  { question: "Which is correct git command?", options: ["git commit","git start","git run","git code"], answer: 0 },

  { question: "Which is programming language?", options: ["Java","HTML","CSS","XML"], answer: 0 },
  { question: "Which is markup language?", options: ["HTML","Java","Python","C"], answer: 0 },
  { question: "Which is style language?", options: ["CSS","Java","C++","Python"], answer: 0 },
  { question: "Which is used for logic?", options: ["JavaScript","HTML","CSS","XML"], answer: 0 },
  { question: "Which is NOT web tech?", options: ["MS Word","HTML","CSS","JS"], answer: 0 },

  { question: "Which tag for image?", options: ["<img>","<image>","<pic>","<src>"], answer: 0 },
  { question: "Which attribute for image?", options: ["src","href","link","alt"], answer: 0 },
  { question: "Which tag for link CSS?", options: ["<link>","<style>","<css>","<script>"], answer: 0 },
  { question: "Which is responsive design?", options: ["Adapts screen size","Only mobile","Only desktop","None"], answer: 0 },
  { question: "Which function prints console?", options: ["console.log()","print()","echo()","log.print()"], answer: 0 }
];
    // let questions = [
//   {
//     question: "Java is?",
//     options: ["Programming Language", "Operating System", "Browser", "Database"],
//     answer: 0
//   },
//   {
//     question: "HTML stands for?",
//     options: [
//       "Hyper Text Markup Language",
//       "High Text Machine Language",
//       "Home Tool Markup Language",
//       "Hyper Transfer Mark Language"
//     ],
//     answer: 0
//   },
//   {
//     question: "CPU stands for?",
//     options: [
//       "Central Processing Unit",
//       "Computer Personal Unit",
//       "Central Program Unit",
//       "Control Processing Unit"
//     ],
//     answer: 0
//   },
//   {
//     question: "CSS is used for?",
//     options: ["Styling Web Pages", "Database Handling", "Logic Building", "Networking"],
//     answer: 0
//   },
//   {
//     question: "JavaScript is?",
//     options: ["Programming Language", "Markup Language", "Database", "Server"],
//     answer: 0
//   },
//   {
//     question: "Which tag is used for paragraph?",
//     options: ["<p>", "<h1>", "<div>", "<span>"],
//     answer: 0
//   },
//   {
//     question: "Which is browser language?",
//     options: ["JavaScript", "C++", "Python", "Java"],
//     answer: 0
//   },
//   {
//     question: "HTTP stands for?",
//     options: [
//       "HyperText Transfer Protocol",
//       "High Transfer Text Protocol",
//       "Home Tool Transfer Protocol",
//       "Hyper Tool Text Program"
//     ],
//     answer: 0
//   },
//   {
//     question: "Which symbol is used for ID in CSS?",
//     options: [".", "#", "*", "&"],
//     answer: 1
//   },
//   {
//     question: "Which symbol is used for class in CSS?",
//     options: [".", "#", "@", "$"],
//     answer: 0
//   }
// ];
//  let questions = [
//   { question: "Java is?", options: ["Language","Animal","Car","Fruit"], answer: 0 },
//   { question: "HTML stands for?", options: ["Hyper Text Markup Language","Wrong","Wrong","Wrong"], answer: 0 },
//   { question: "CPU stands for?", options: ["Central Processing Unit","Wrong","Wrong","Wrong"], answer: 0 },
//   { question: "CSS is used for?", options: ["Styling","Database","OS","Game"], answer: 0 },
//   { question: "JavaScript is?", options: ["Programming Language","Car","Food","None"], answer: 0 },

//   { question: "Which tag is used for paragraph?", options: ["<p>","<h1>","<div>","<span>"], answer: 0 },
//   { question: "Which is browser language?", options: ["JavaScript","C++","Python","Java"], answer: 0 },
//   { question: "HTTP stands for?", options: ["HyperText Transfer Protocol","Wrong","Wrong","Wrong"], answer: 0 },
//   { question: "Which symbol is used for ID in CSS?", options: [".","#","*","&"], answer: 1 },
//   { question: "Which symbol is used for class in CSS?", options: [".","#","@","$"], answer: 0 },

//   { question: "Which tag is used to link CSS?", options: ["<link>","<style>","<css>","<script>"], answer: 0 },
//   { question: "Which tag is used for image?", options: ["<img>","<image>","<pic>","<src>"], answer: 0 },
//   { question: "Which company made JavaScript?", options: ["Netscape","Google","Microsoft","Oracle"], answer: 0 },
//   { question: "DOM stands for?", options: ["Document Object Model","Data Object Model","None","Digital Object"], answer: 0 },
//   { question: "Which is correct variable keyword?", options: ["let","int","define","varr"], answer: 0 },

//   { question: "Which is backend language?", options: ["Java","HTML","CSS","Bootstrap"], answer: 0 },
//   { question: "Which is database?", options: ["MySQL","HTML","CSS","JS"], answer: 0 },
//   { question: "Which is version control system?", options: ["Git","HTML","CSS","JS"], answer: 0 },
//   { question: "GitHub is used for?", options: ["Code hosting","Design","Game","Browser"], answer: 0 },
//   { question: "API stands for?", options: ["Application Programming Interface","None","Wrong","Wrong"], answer: 0 },

//   { question: "Which is JSON format?", options: ["{}","[]","()","<>"], answer: 0 },
//   { question: "Which is correct JS print?", options: ["console.log()","print()","echo()","write()"], answer: 0 },
//   { question: "Which is loop in JS?", options: ["for","if","else","switch"], answer: 0 },
//   { question: "Which is condition?", options: ["if","for","loop","break"], answer: 0 },
//   { question: "Which is array symbol?", options: ["[]","{}","()","<>"], answer: 0 }
// ];

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
    document.getElementById("qno").innerText =
        "Question " + (index + 1) + " / " + questions.length;

    document.getElementById("question").innerText =
        questions[index].question;

    document.getElementById("btn1").innerText = questions[index].options[0];
    document.getElementById("btn2").innerText = questions[index].options[1];
    document.getElementById("btn3").innerText = questions[index].options[2];
    document.getElementById("btn4").innerText = questions[index].options[3];

    startTimer();
}
// function loadQuestion() {
//     document.getElementById("question").innerText =
//         questions[index].question;

//     document.getElementById("btn1").innerText = questions[index].options[0];
//     document.getElementById("btn2").innerText = questions[index].options[1];
//     document.getElementById("btn3").innerText = questions[index].options[2];
//     document.getElementById("btn4").innerText = questions[index].options[3];

//     startTimer();
// }

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
    clearInterval(timer);
    document.getElementById("timer").innerText = "Time: " + time;

    timer = setInterval(() => {
        time--;
        document.getElementById("timer").innerText = "Time: " + time;

        if(time <= 0) {
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
