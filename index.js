const form = document.querySelector("#form")
const btn = document.querySelector("#btn")
const username = document.querySelector("#username")
const bio = document.querySelector("#bio")
const wordcount = document.querySelector("#word-count")
const checkbox = document.querySelector("#checkbox")
const country= document.querySelector("#country")
const password = document.querySelector("#password")
const passwordHint = document.querySelector("#passwordHint")
const usernameError = document.querySelector("#usernameError")
const email = document.querySelector("#email")




const LIMIT = 300

wordcount.textContent = `${LIMIT} words remaining`

function showError(input, errormessage) {
    input.parentElement.querySelector(".Error").textContent = errormessage
}

function clearError(input){
    input.parentElement.querySelector(".Error").textContent = ""
}

function validUsername(username){
    if(username.value.trim().length === 0){
        showError(username, "Please Enter your name")
        return false;
    }
    clearError(username)
    return true;
    
}

function validPassword(password){
    if(password.value.trim().length === 0){
        showError(password , "Enter your password")
        return false;
    }
    clearError(password)
    return true;
}

function validEmail(email){
    if(email.value.trim().length === 0){
        showError(email , "Enter your email")
        return false;
    }
    clearError(email)
    return true;
}

function validBio(bio){
    if(bio.value.trim().length === 0){
        showError(bio , "Enter a bio")
        return false;
    }
    clearError(bio)
    return true;
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

   const isUsernameValid  = validUsername(username)
   const ispasswordValid  = validPassword(password)
   const isemailValid  = validEmail(email)
   const isbioValid = validBio(bio)

    if(isUsernameValid && ispasswordValid && isemailValid && isbioValid){
        document.querySelector("h1").classList.remove("hidden")
    }else{
        document.querySelector("h1").classList.add("hidden")
    }


    // const password = document.querySelector("#password").value
    // const email = document.querySelector("#email").value

    // console.log({username : username.value , password : password.value , email});
})
// "click" for btn and "submit" for form

username.addEventListener("input", (e) => {
    console.log(username.value);
})

bio.addEventListener("input", (e) => {
    const remaining = LIMIT - bio.value.length
    console.log(remaining);
    wordcount.textContent = `${remaining} words remaining`;
})

// username.addEventListener("input", (e) => {
//     console.log("input event", username.value);
// })

// username.addEventListener("change", (e) => {
//     console.log("change event", username.value);
// })

// checkbox.addEventListener("change", (e) => {
//     console.log(checkbox.checked);
// })

// country.addEventListener("input", ( e) => {
//     console.log(country.value);
// })

// username.addEventListener("focus", (e) => {
//     console.log("focus event", username.value);
// })

// username.addEventListener("blur", (e) => {
//     console.log("blur event", username.value);
// })

// password.addEventListener("focus", (e) => {
//     passwordHint.classList.remove("hidden")
// })
// password.addEventListener("blur", (e) => {
//     passwordHint.classList.add("hidden")
// })


