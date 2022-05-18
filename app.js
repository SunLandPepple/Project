var username = document.querySelector('.username');
var email = document.querySelector('.email');
var password = document.querySelector('.password');
var confirmPassword = document.querySelector('.confirm-password');
var form = document.querySelector('form');

var signUpBtn = document.querySelector('.navbar.navbar_signup');
var signUpFreeBtn = document.querySelector('.direction__btn--sign');
var modalSign = document.querySelector('.modal_Sign');
var signBtn = document.querySelector('.modal_signUp-inner button');

var closeBtn = document.querySelector('.close_btn');

function showError(input, masage) {
   
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = masage;


}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText = '';


}

function checkEmptyEroor(ArrayInput){
    ArrayInput.forEach(input => {
        input.value = input.value.trim();
        if (input.value == ''){
            showError(input, 'Khong duoc de trong');
        }else{
            showSuccess(input);
        }
    });

    
};


form.addEventListener('submit', function(e){
    e.preventDefault();
    checkEmptyEroor([username, email, password, confirmPassword]);
});


signUpBtn.onclick = function (){
    modalSign.classList.remove('display');
    
};
signUpFreeBtn.onclick = function (){
    modalSign.classList.remove('display');
    
};

closeBtn.onclick = function (){
    modalSign.classList.add('display');
}




