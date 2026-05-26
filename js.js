// script.js

function showAlert(){
    alert("Thanks for visiting Arshia's portfolio ✨");
}

function sendMsg(){
    document.getElementById("message").innerHTML =
    "Message sent successfully 🚀";
}

function scrollProjects(){
    document.getElementById("projects")
    .scrollIntoView({
        behavior:"smooth"
    });
}

function darkMode(){

    if(document.body.style.background === "white"){

        document.body.style.background = "#0f172a";
        document.body.style.color = "white";

    }
    else{

        document.body.style.background = "white";
        document.body.style.color = "black";
    }
}