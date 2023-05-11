const throttle = require('lodash.throttle');

refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name=\'email\']'),
  message: document.querySelector('textarea[name=\'message\']'),
};
const STORAGE_KEY = 'feedback-form-state';

populateMessageOutput();

refs.form.addEventListener('submit', onSubmitForm);
refs.form.addEventListener('input',
  throttle(onInputForm, 500, { leading: false, trailing: true }));

function onSubmitForm(e) {
  e.preventDefault();

  if(refs.email.value && refs.message.value) {
    console.log(`Email: ${refs.email.value}, message: ${refs.message.value}`);
  }

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInputForm() {
  const formData = {
    email: refs.email.value,
    message: refs.message.value,
  };

  console.log(formData);

  const formDataJSON = JSON.stringify(formData);

  localStorage.setItem(STORAGE_KEY, formDataJSON);
}

function populateMessageOutput() {
  const formDataObj = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if(formDataObj) {
    refs.email.value = formDataObj.email;
    refs.message.value = formDataObj.message;
  }
}
