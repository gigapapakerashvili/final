var form = document.getElementById("form")
var email = document.getElementById("email")
var password = document.getElementById("password")
var button = document.querySelector(".btn_Logout")
var emailErro = document.getElementById("email_error")
var passEror = document.getElementById("pass_error")

email.addEventListener("textInput", verify);
password.addEventListener("textInput", verify)

form.addEventListener("submit", (e) => {
    e.preventDefault()
   
    validated();
    
    

        
})
    

    



function validated(){
    
    if(email.value === "" || email.length < 6){
        email.style.border = "2px solid red"
        emailErro.style.display = "block"
        email.focus();
        return false
    }

    if(password.value === "" || password.length < 6){
        password.style.border = "2px solid red"
        passEror.style.display = "block"
        password.focus();
        return false
    }

}

function verify(){
    if(email.value === ""){
        email.style.border = "2px solid silver"
        emailErro.style.display = "none"
        return false
    }

    if(password.value === ""){
        password.style.border = "2px solid silver"
        passEror.style.display = "none"
        return false
    }
}