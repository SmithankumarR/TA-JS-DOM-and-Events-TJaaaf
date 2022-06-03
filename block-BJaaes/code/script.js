let form = document.querySelector('form');
let Error = document.querySelectorAll('small');
let userNameError = Error.forEach((e => e));
function handleSubmit(event){
    event.preventDefault();
    let userNameElm = event.target.elements.username;
    let nameElm = event.target.elements.name;
    let emailElm = event.target.elements.email;


     if(userNameElm.value.length < 4){
        userNameError ="can't be less then four chharacters"
    }else if(nameElm.value !== Number(nameElm)){
        userNameError ="can't be Numbers"
    }else if(emailElm.includes('@')){
        userNameError ="Email must contain @ symbol"
    userNameElm.nextElementSibling.innerText = userNameError;
    }
}
 form.addEventListener('click', handleSubmit)