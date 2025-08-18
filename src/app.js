
// imports


//local storage to get any existing users
const signUpSavedInfo = JSON.parse(localStorage.getItem('users')) || [];

const header = document.querySelector('header');
const toggle_bar = document.querySelector('.toggle_bar');


toggle_bar.addEventListener('click' , function(){
    header.classList.toggle("active");
})


// AOS animation on scroll function calling
AOS.init();


// Accordion
const faqs = document.querySelectorAll('.js-faq');
const faqSing = document.querySelector('.js-faq-sign');

faqs.forEach(faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle("activated");
    })
})


document.addEventListener('DOMContentLoaded', () =>{

    const page = window.location.pathname;


    if (page.includes('log.html') || 
        page.includes('requestPassword.html') || 
        page.includes('resetPassword.html')) {
            
        renderSignForm();
    }

    // checking the file path if it true then render the code.
    if(page.includes('contact_us.html')){

        // first check if user has an account with us
        const user = JSON.parse(localStorage.getItem('loggedInUser'))
    
        // check
        if (user){
            // Render contact form and sign form
            setTimeout(() => {
                
                renderContactForm();
            },500);
    
        }
    }

    // if(page.includes('log.html')){
    //     // renderSignForm();
    //     renderSignForm();

    // }

    // if(page.includes('requestPassword.html')){
    //     requestPasswordEmail ();
    // }

    // if(page.includes('resetPassword.html')){
    //     resettingPassword ();
    // }

    renderSignForm();

})

// contact form validation
const formForm = document.querySelector('#js-form');


function renderContactForm (){
    
    const form = document.querySelector('#js-form');
    
    if(!form){
        console.log('Contact form no found in DOm');
        return;
    }

    form.addEventListener('submit', e =>{
        e.preventDefault();
    
        validateInput ();
    })
    
}

const validateInput = ()=>{
    const username = document.querySelector('#username');
    const email = document.querySelector('#email')
    const subject = document.querySelector('#subject');
    const textArea = document.querySelector('#textArea');


    // input Values
    const userValue = username.value.trim();
    const emailValue = email.value.trim();
    const subValue = subject.value.trim();
    const textArValue = textArea.value.trim();
    
    // conditions
    if(userValue === ''){
        setError(username, 'field is required*');

    }else{
        setSuccess(username);
    }

    // email
    if(emailValue === ''){
        setError(email, 'field is required*');

    }else if(!isValidEmail(emailValue)){
        setError(email, 'not a valide email')

    }else{
        setSuccess(email)
    }

    // subject
    if(subValue === ''){
        setError(subject, 'field is required*')

    }else{
        setSuccess(subject)
    }

    // textAreas
    if(textArValue === ''){
        setError(textArea, 'kindly fill this field, to let us know your request');
    }else{
        setSuccess(textArea);
    }

    username.value = '';
    email.value = '';
    subject.value = '';
    textArea.value = '' // not working yet

}

function isValidEmail (email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(String(email).toLowerCase());
}

function setError (element, message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function setSuccess (element){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}



// signing page
const signButton = document.querySelectorAll('.signBtn');
const signUp = document.querySelector('#form-signUp');
const signIn = document.querySelector('#form-signIn');

signButton.forEach(button =>{

    button.addEventListener('click', ()=>{

        if(button === signButton[0]){
            signUp.parentElement.classList.toggle('formActive')
            
        }else if(button === signButton[1]){
            signIn.parentElement.classList.toggle('formActive')
            
        }
    })
    
})

//checking if all input value are entered 
const validInput = {
    isFirstNameValid : false ,
    isLastNameValid : false, 
    isEmailValid : false,
    isPhoneValid : false,
    isPasswordValid: false,
    isConfirmPasswordValid : false
}

// Sign up and sign in storage
const checkLog = {
    id : 0,
    firstName: '',
    lastName: '',
    email : '',
    password: '',
    confirmPassword : ''
}


// Render sign up and sign in form
let increaseId = 0;

function renderSignForm (){
    

    // Sign up form validation variables
    const formSignUP = document.querySelector('#form-signUp');
    const formSignIn = document.querySelector('#form-signIn');
    const requestPasswordEmailForm = document.querySelector('#request--password__email');
    const resetPasswordForm = document.querySelector('#resetPassword');


    // check if the form exist  
    if(formSignUP){
        formSignUP.addEventListener('submit', e =>{
            e.preventDefault();
        
            validateSignUp ()
            
        }) 

    }

    if(formSignIn){
        
        formSignIn.addEventListener('submit', e =>{
            e.preventDefault();
        
            validateSignIn ();
        })
    }

    if(requestPasswordEmailForm ){
         requestPasswordEmailForm.addEventListener('submit', (e)=>{
            e.preventDefault()

            requestPasswordEmail () ; 
        })
    }

    if( resetPasswordForm ){
        resetPasswordForm.addEventListener('click', (e)=>{
            e.preventDefault()
        
            resettingPassword ();
        })
    }
    
    
}


//sign Up validation
function validateSignUp () {
    
    const firstSignUp = document.querySelector('#firstName-signUp');
    const lastSignUp = document.querySelector('#lastName-signUp');
    const emailSignUp = document.querySelector('#email-signUp');
    const phoneSignUp = document.querySelector('#phone-signUp');
    const passwordSignUp = document.querySelector('#password-signUp');
    const confirmPasswordSignUp = document.querySelector('#confirmPassword-signUp');

    // input Values
    const firstValueSignUp = firstSignUp.value.trim();
    const lastValueSignUp = lastSignUp.value.trim();
    const emailValueSignUp = emailSignUp.value.trim();
    const phoneValueSignUp = phoneSignUp.value.trim();
    const passwordValueSignUp = passwordSignUp.value.trim();
    const confirmPasswordValueSignUp = confirmPasswordSignUp.value.trim();

    // conditions
    // first name
    if(firstValueSignUp === ''){
        setError(firstSignUp, 'field is required*');
    }else{
        setSuccess(firstSignUp);
        checkLog.firstName = firstValueSignUp;
        validInput.isFirstNameValid = true;

    }

    // last name
    if(lastValueSignUp === ''){
        setError(lastSignUp, 'field is required*');
    }else{
        setSuccess(lastSignUp);
        checkLog.lastName = lastValueSignUp;
        validInput.isLastNameValid = true;
    }

    //phone
    if(phoneValueSignUp === ''){
        setError(phoneSignUp, 'field is required&')
    }else{
         setSuccess(phoneSignUp);
         validInput.isPhoneValid = true;
    }

    // email
    if(emailValueSignUp === ''){
        setError(emailSignUp, 'field is required*');

    }else if(!isValidEmail(emailValueSignUp)){
        setError(emailSignUp, 'not a valide email')

    }else{
        setSuccess(emailSignUp)
        
        checkLog.email = emailValueSignUp;
        validInput.isEmailValid = true;
    }

    // password
    if(passwordValueSignUp === ''){
        setError(passwordSignUp, 'field is required*')
        
    }else if(passwordValueSignUp.length < 8){
        setError(passwordSignUp, 'password must be at least 8 characters')

    } else{
        setSuccess(passwordSignUp)
        checkLog.password = passwordValueSignUp;
        validInput.isPasswordValid = true;
    }

    // confirm password
    if(confirmPasswordValueSignUp === ''){
        setError(confirmPasswordSignUp, 'field is required*')

    }else if(confirmPasswordValueSignUp !== passwordValueSignUp){
        setError(confirmPasswordSignUp, 'passwords do not match')

    }else{
        setSuccess(confirmPasswordSignUp);
        checkLog.confirmPassword = confirmPasswordValueSignUp;
        validInput.isConfirmPasswordValid = true;
    }



    const allValid = Object.values(validInput).every(value => value === true);

    if(allValid){

        const newUser ={
            id: increaseId++,
            firstName: checkLog.firstName,
            lastName: checkLog.lastName,
            email: checkLog.email,
            password: checkLog.password,
            confirmPassword: checkLog.confirmPassword
        }
        
        // save into the new array and on local storage
        signUpSavedInfo.push(newUser)
        localStorage.setItem('users', JSON.stringify(signUpSavedInfo))

        setTimeout(()=>{
            emptyInput(firstSignUp,lastSignUp,emailSignUp,phoneSignUp,passwordSignUp,confirmPasswordSignUp);

        },500)

        console.log(signUpSavedInfo);

    }
    
    console.log('Sign-up form submitted'); // inside validateSignUp()
}

// sign In validation
function validateSignIn (){
    const emailSignIn = document.querySelector('#email-signIn');
    const passwordSignIn = document.querySelector('#password-signIn');
    const confirmPasswordSignIn = document.querySelector('#confirmPassword-signIn');
    
    //input values
    const emailSignInValue = emailSignIn.value.trim();
    const passwordSignInValue =passwordSignIn.value.trim()
    const confirmPasswordSignInValue = confirmPasswordSignIn.value.trim();
    
    // condition
    const userFound = signUpSavedInfo.find(user => 
        user.email === emailSignInValue && user.password === passwordSignInValue && user.confirmPassword === confirmPasswordSignInValue
    );

    if(userFound){
        console.log('Logged In: ID =', userFound.id);
        
        // when user is found saved
        localStorage.setItem("loggedInUser", JSON.stringify(userFound))

    } else {
        console.log("Incorrect Info");
    }

    emptyInput(emailSignIn, passwordSignIn, confirmPasswordSignIn);
}

// // Empty input function
function emptyInput(firstName,lastName,email,phone,password,confirmPassword){
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phone.value = '';
    password.value = '';
    confirmPassword.value = ''
}

// Request password email
// take in the user email
// check if the email is in the signUpSavedInfo 
// when clicked to confirm , send to the reset password page


function requestPasswordEmail () {
    
    const requestPasswordEmailInput = document.querySelector('#request-email');
    const requestPasswordEmailInputValue = requestPasswordEmailInput.value.trim();

    // this will return a truthy value
    const userEmailFound = signUpSavedInfo.find ( user =>
        user.email === requestPasswordEmailInputValue
    );    

    if(userEmailFound){

        localStorage.setItem('passwordResetEmail', requestPasswordEmailInputValue);


        // using the setError fun so i can user the other param of message to display a message
        setError( requestPasswordEmailInput , 'Email found! Redirecting...')

        console.log('Redirecting....');
        
        setTimeout(() =>{
            window.location.href = "resetPassword.html";

        },1000)
        
        console.log("error interception");
        
    }else {
        setError( requestPasswordEmailInput , 'Are you sure you are one of us ?')
        
    }

    console.log('Password reset requested redirecting...'); // inside requestPasswordEmail()
    
}


function resettingPassword (){
    const resetForm = document.querySelector('.resetPassword');
    const password = document.querySelector('.js-reset-password-input') ;
    const confirmPassword = document.querySelector('.js-reset-confirm-password-input');
    const resetEmail = localStorage.getItem('passwordResetEmail');
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    const newPasswordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim()

    if(!password || !confirmPassword){
        setError(resetForm.children , 'field is required')
    }

    if(newPasswordValue.length < 8){
        setError(password, 'Paswword must be atleast 8 characters')
        
        return
    }

    if (newPasswordValue !== confirmPasswordValue) {
        setError(confirmPassword, "password must be a match")
        return;
    }

    // update the already stored data of user
    users = users.map(user =>{
        if(user.email === resetEmail){
            user.password = newPasswordValue;
            user.confirmPassword = confirmPasswordValue;
        }

        return user;
    })

    //update new user password and remove old userpassword
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.removeItem('passwordResetEmail');

    // Show thank you message
    document.querySelector('.thankyou-message').classList.remove('cancle-btnActive')

    document.querySelector('.thankyou-message').classList.add('activeThankyou');
}


document.querySelector('.thankyou-message span').addEventListener('click', ()=>{
    document.querySelector('.thankyou-message').classList.add('cancle-btnActive')
    console.log('is clicking cancle');
    
})


// const heading = document.querySelector('.heading0');
// console.log(heading);
// const fire = document.querySelector('.fire');
// console.log(fire);


