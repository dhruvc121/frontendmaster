const error=document.getElementById('error-msg')
const errorIcon=document.getElementById('error-icon')
const email=document.getElementById('email')

const validateEmail=(str)=>{
    //event.preventDefault()
    console.log(str)
    const isValid=str.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    if(!isValid){
        error.classList.remove('hide')
        errorIcon.classList.remove('hide')
    }else{
        error.classList.add('hide')
        errorIcon.classList.add('hide')
    }
    //console.log(event)
}
const checkEmail=(event)=>{
    event.preventDefault();
    validateEmail(email.value)
}