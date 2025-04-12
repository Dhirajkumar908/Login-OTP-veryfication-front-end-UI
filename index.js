// user details caputer 
const name=document.getElementById('name')
const email=document.getElementById('email')
const pass=document.getElementById('password')
// button 
const loginBtn=document.getElementById('submit')

// opt input 
const otp_section=document.getElementById('otp_main')
const otp_msg_email=document.getElementById('msg_email')
const otp=document.getElementById('otp')
const verifyBtn=document.getElementById('verify')
const resendbtn=document.querySelector('.resend_btn')

// user details 
loginBtn.addEventListener('click', ()=>{
    let nameValue=name.value;
    let emailValue=email.value;
    let passValue=pass.value;
    if(!nameValue){
        alert('Name shoud not empty')
        return
    }
    if(!emailValue){
        alert('Email shoud not empty')
        return
    }
    if (!passValue){
        alert('Password can not be empty')
        return
    }
    console.log(`name=${nameValue} email=${emailValue} password=${passValue}`);
    otp_msg_email.innerText=emailValue
    otp_section.style.display='inline-block'
    resendOTP()
})


verifyBtn.addEventListener('click', ()=>{
    const error=document.querySelector('.error')
    let otpValue=otp.value;
    if(/^\d{6}$/.test(otpValue)){
        alert("OTP verify successfull")
        error.classList.add('hidden')
        console.log(`OTP: ${otpValue}`);
    }else{
        error.classList.remove('hidden')
    }
})

function resendOTP(){
    
    const countdown=document.querySelector('.countdown')
    const timer=document.querySelector('.resend_msg')
    let timeleft=30;

    resendbtn.disabled=true;
    resendbtn.style.cursor='none'

    const interval=setInterval(()=>{
        timeleft--
        countdown.innerText=timeleft
        timer.classList.remove('hidden')

        if (timeleft===0){
            clearInterval(interval);
            timer.classList.add("hidden");
            resendbtn.disabled=false;
            resendbtn.style.cursor='pointer'
        }
    },1000)
}

resendbtn.addEventListener('click', ()=>{
    alert("OTO resent")
    console.log('resend');
    resendOTP()
})