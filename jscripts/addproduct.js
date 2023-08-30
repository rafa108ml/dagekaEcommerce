const logobtn = document.querySelector("[data-logo]");

const backHomeEvent=(event)=>{
    window.location.href ="index.html";
}

logobtn.addEventListener("click",backHomeEvent);