const mail = document.getElementById('email');
const fullname = document.getElementById('fullname');
const passwordOne = document.getElementById('passwordOne');
// const passwordTwo = document.getElementById('passwordTwo');

const errorMes = document.getElementById('error');
const signUp = document.getElementById('signup');



const signUpFunction = () => {
    const email = mail.value;
    const password = passwordOne.value;

    //Built in firebase function responsible for signing up a user
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log('Signed Up Successfully !');
            window.location.assign('/login.html')

        })
        .catch(error => {
            console.error(error);
            errorMes.innerHTML = error;
        })
}

signUp.addEventListener('click', signUpFunction);