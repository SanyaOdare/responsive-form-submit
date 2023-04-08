const form = document.querySelector('form');
const fnameInput = document.querySelector('#fname');
const lnameInput = document.querySelector('#lname');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  // prevent default form submission behaviour
    event.preventDefault();
    
  // send form data to server using fetch API
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        fname: fnameInput.value,
        lname: lnameInput.value,
        email: emailInput.value,
        message: messageInput.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Form submitted successfully', data);
  // reset form after submission
      form.reset();
    })
    .catch(error => {
      console.log('Error submitting form', error);
    });
  });