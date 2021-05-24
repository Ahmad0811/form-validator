const from=document.getElementById('form');
const userName=document.getElementById('UserName');
const email=document.getElementById('Email');
const password=document.getElementById('Password');
const password2=document.getElementById('Password2');

//show input error message
function showError(input,message)
{
    const formCotrol=input.parentElement;
    formCotrol.className='formControl error';
    const small=formCotrol.querySelector('small');
    small.innerText=message;
}
//show success outline
function showSuccesss(input)
{
    const formCotrol=input.parentElement;
    formCotrol.className='formControl success';
}
//checking email validation
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
        showSuccesss(input)
    }else{
        showError(input,'Email is not valid');
    }
}
//check input length
function checkLength(input,min,max)
{
    if(input.value.length<min){
        showError(
            input,
            `${input.id} must be at least ${min} characters`
        );
    }else if(input.value.length>max){
        showError(
            input,
            `${input.id} must be less then ${max} characters`
        );
    }
    else{
        showSuccesss(input);
    }
}
//check required fields
function checkRequired(inputArr)
{
    inputArr.forEach(function(input) {
        if(input.value.trim()===''){
            showError(input,`${input.id} is required`);
        }else{
            showSuccesss(input);
        }
    });
}
// check password match
function checkPasswordMatch(inpu1,input2){
    if(inpu1.value!==input2.value)
    {
        showError(input2,'Password do not match');
    }
}
//event listeners
from.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([userName ,email,password,password2]);
    checkLength(userName,3,15);
    checkLength(password,8,25);
    checkEmail(email);
    checkPasswordMatch(password,password2)
});