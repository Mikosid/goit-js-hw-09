const formData = {
  email: "",
  message: ""
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const saveToLocalStorage = () => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
};

form.addEventListener('input', (event) => {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  } else if (event.target.name === 'message') {
    formData.message = event.target.value.trim();
  }
    saveToLocalStorage();
    });

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (formData.email === "" || formData.message === "") {
    alert('Fill please all fields');
    return;
  }
  
  console.log('Form submitted:', formData);
  
  localStorage.removeItem('feedback-form-state');
  formData.email = "";
  formData.message = "";
  emailInput.value = "";
  messageTextarea.value = "";
});

loadFromLocalStorage();