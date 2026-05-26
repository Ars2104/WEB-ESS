// DARK MODE TOGGLE

function darkMode() {

    document.body.classList.toggle("light-mode");

}


// HIRE ME BUTTON

function showAlert() {

    alert("Thanks for visiting my portfolio ✨");

}


// SCROLL TO PROJECTS

function scrollProjects() {

    document.getElementById("projects")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// CONTACT MESSAGE

function sendMsg() {

    let message = document.getElementById("message");

    message.innerHTML =
        "✨ Message sent successfully!";

}
