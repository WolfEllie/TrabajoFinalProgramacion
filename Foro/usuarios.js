//Funcion para traer usuarios randoms y seleccionar la foto de perfil y nombre de usuario para mostrarlos
$(document).ready(function () {
    // Selecciona el elemento de la imagen y el nombre del usuario
    const avatarImage = document.querySelector(".avatar");
    let userName = document.querySelector(".usuario");
  
    // Hacer una solicitud GET a la API de Random User Generator
    $.ajax({
      url: "https://randomuser.me/api/",
      dataType: "json",
      success: function (data) {
        // Obtiene el usuario aleatorio de la respuesta
        const user = data.results[0];
  
        // Actualiza la imagen y el nombre del usuario
        avatarImage.src = user.picture.large;
        userName.textContent = user.name.first + " " + user.name.last;
      },
      error: function () {
        console.log("Error al cargar el usuario aleatorio.");
      },
    });
  });