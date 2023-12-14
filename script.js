const formulario = document.getElementById('contact-form');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = formulario.elements['name'].value; // Silvano
  const email = formulario.elements['email'].value;
  const message = formulario.elements['message'].value;
  
  const result = `Nome: ${name}\nE-mail: ${email}\nMessage: ${message}`;

  console.log(result);
  alert(result);
});


