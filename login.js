const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const loginButton = document.querySelector('.login-button');

const loginEmail = document.querySelector('.login-email');
const loginPassword = document.querySelector('.login-password');
const dalejButton = document.querySelector('.dalej');
let kroki = 0;
const storedUserID = localStorage.getItem('userID');
const chatInput = document.querySelector('.chat');
const loadChatButton = document.querySelector('.load-chat');

passwordInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const userPassword = passwordInput.value;

        localStorage.setItem('userPasswordFromInput', userPassword);
        
        console.log('Zapisane w localStorage:', userPassword);
    }
});

emailInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const userEmail = emailInput.value;
        localStorage.setItem('userEmailFromInput', userEmail);
        console.log('Zapisano w localStorage', userEmail);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const storedEmail = localStorage.getItem('userEmailFromInput');
    const storedPassword = localStorage.getItem('userPasswordFromInput');
    
    console.log('Odczytane z localStorage:', storedEmail, storedPassword);


        

    console.log(storedEmail);
    /*
        SKONCZYLEM NA LOADCHAT 
        CHCE ZEBY CHAT WCZYTYWAL SIE Z STOREDEMAIL CZYLI EMAILA UZYTKOWNIKA KTORY JEST W KONSOLI
    */
});




loginEmail.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        alert('Enter Your Password');
    }
});


const UserName = document.querySelector('.user-name');


dalejButton.addEventListener('click', () => {
    
});

loginPassword.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const storedEmail = localStorage.getItem('userEmailFromInput');
        const enteredPassword = loginPassword.value;
        const storedPassword = localStorage.getItem('userPasswordFromInput');
        
        if (enteredPassword === storedPassword && loginEmail.value === storedEmail) {
            window.location.href = 'https://ktos17.github.io/Portfolio/';
            dalejButton.classList.remove('dalej');
            kroki += 1;
            console.log(kroki);
            console.log('Password accepted');
        } else {
            console.log('Nie działa');
        }

        
        console.log(storedEmail);
        console.log(storedPassword);

    }});
        

const dontHaveAccountYet = document.querySelector('.dont-have-account');
const registerP = document.querySelector('.register-p');

dontHaveAccountYet.addEventListener('click', () => {
    registerP.classList.remove('register-p-hidden');
});