//selectors

var pass = document.getElementById("pass");
var cpass = document.getElementById("cpass");
var form = document.getElementById("form");
var error = document.getElementById("msg");
console.log(form);

form.addEventListener('submit',(e) => {
    let msg = [] 
    console.log('form');

if(pass.value !== cpass.value){
    msg.push('your password not match');
}

if(msg.lenght > 0){
    e.preventDefault()
    error.innerHTML = msg.join(', ')
}
})




//signupform valitdation
// function Validation(){
//     if(pass ==""){
//         msg.innerHTML= "Input Filed is Null";
//         return false;
//     }
//      else if(pass != cpass){
//         msg.innerHTML="**Password not match";
//         return false;
//     }
//     else{
//         return true;
//     }
// } 
