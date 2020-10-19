const form = document.getElementById("form");
const email  = document.getElementById("email");
const message = document.getElementById("message");

const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;



const action = e =>{
    e.preventDefault();

    if(email.value ===""){
        message.textContent = ("Whoops! It looks like you forgot to add your email");
        message.classList.add ("message");
        email.classList.add("mail--error");

    } else if (!email.value.match(re)) {
        message.textContent = ("Please provide a valid email address");
        message.classList.add ("message");
        email.classList.add("mail--error");

    } else {
        message.classList.add ("message");
        message.textContent = ("Valid email");

    }


}


form.addEventListener("submit",action);
