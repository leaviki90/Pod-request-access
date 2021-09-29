const form = document.getElementById("form");
const email = document.getElementById("email");





function showError(email, message) {
const formControl = email.parentElement;
formControl.className ="form-control error";
const small = formControl.querySelector("small");
small.innerText = message;
}


function showSuccess(email){
const formControl = email.parentElement;
formControl.className = "form-control success";
}


function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}






form.addEventListener("submit", function(e){
    e.preventDefault();



if(email.value.trim() === ""){
    showError(email, "Oops! Please add your email");
    }else if(!isValidEmail(email.value)){
        showError(email, "Oops! Please check your email");
    }
    
    else {
        showSuccess(email)
    }

})