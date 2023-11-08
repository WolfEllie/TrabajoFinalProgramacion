const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    if (validarRegistro(username, email, password, password2)){
        alert(`El usuario "${username}" Se registró exitosamente!`);
        registerForm.reset();
    } else {
        alert("Algo salio mal, verifique si la información está bien.")
    }
});

function validarRegistro(username, email, password, password2) {
    console.log(password, password2);
    // Validar nombre
    if (username.length < 6) {
      return false;
    }
  
    // Validar correo
    if (!/\S+@\S+\.\S+/.test(email)) {
      return false;
    }
  
    // Validar contraseña
    if (password.length < 6) {
      return false;
    }
  
     // Validar contraseñas iguales
  if (password != password2) {
    return false;
  } 

    return true;
  }

