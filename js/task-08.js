const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

 const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
      return alert('All fields must be filled! Please enter your credentials');
  }

  const userCredentials = {
    email: email.value,
    password: password.value
  }
  console.log(userCredentials);

  event.currentTarget.reset();
}
