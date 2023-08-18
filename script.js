const email = document.getElementById('email');
const btn = document.getElementById('submit');
const formContainer = document.querySelector('.sign-up__container');
const successContainer = document.querySelector('.success__container');
const emailOutput = document.getElementById('emailOutput');
const backBtn = document.getElementById('dis-btn')
const errorContainer = document.querySelector('.alert')

const toggleClasses = () => {
  formContainer.classList.toggle('hidden');
  successContainer.classList.toggle('hidden');
}

const getSuccessMessage = () => {
  emailOutput.innerText = email.value;

  toggleClasses()
}

const goBack = () => {
  email.value = ''
  toggleClasses()
  email.classList.remove('error-input')
  errorContainer.classList.add('hidden')

}

const checkEmail = () => {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (pattern.test(email.value)) {
    getSuccessMessage()
  } else {
    email.classList.add('error-input')
    errorContainer.classList.remove('hidden')
  };
}

btn.addEventListener('click', checkEmail);
backBtn.addEventListener('click', goBack);

