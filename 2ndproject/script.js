// Dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Resume
function downloadResume() {
    window.open("resume.pdf");
}

// Contact
function sendMessage() {
    let name = document.getElementById("name").value;

    if(name === "") {
        alert("Enter your name!");
    } else {
        alert("Thanks " + name + "!");
    }
}

// Typing effect
let text = "Java Developer | Web Developer";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}
type();

// Scroll animation
let elements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;

        if(position < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});
//  function downloadResume() {
//     alert("Resume download feature coming soon!");
// }
// function toggleDarkMode() {
//     document.body.classList.toggle("dark");
// }

//  function sendMessage() {
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;

//     if(name === "" || email === "" || message === "") {
//         alert("Please fill all fields!");
//     } else {
//         alert("Thank you " + name + "! Message sent.");
//     }
// }
// function toggleDarkMode() {
//     document.body.classList.toggle("dark");
// }

// function downloadResume() {
//     window.open("resume.pdf");
// }

// function sendMessage() {
//     let name = document.getElementById("name").value;

//     if(name === "") {
//         alert("Enter your name!");
//     } else {
//         alert("Thanks " + name + "! Message sent.");
//     }
// }