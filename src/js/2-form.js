const form = document.querySelector('.feedback-form');
// Використовуй ключ "feedback-form-state" для зберігання даних у сховищі.
const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const savedUserData = localStorage.getItem(STORAGE_KEY);
if (savedUserData) {
  const parsedData = JSON.parse(savedUserData);
  formData.email = parsedData.email;
  formData.message = parsedData.message;
  // Якщо є данні - вони з'являться
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', userInput);
function userInput() {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', formSubmit);
function formSubmit(e) {
  e.preventDefault();
  const { email, message } = formData;
  if (email === '' || message === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);

  //  очищення сховища
  localStorage.removeItem(STORAGE_KEY);

  form.reset();

  // очищення об'єкта (полів)
  formData.email = '';
  formData.message = '';
}
