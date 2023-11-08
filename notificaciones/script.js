const url = 'https://randomuser.me/api/?results=3';
const avatar = document.querySelectorAll('img');
const h3Elements = document.querySelectorAll('h3');

// Obtener los datos del usuario
fetch(url, {
  method: 'GET',
}).then(response => response.json())
.then(data => {
  const users = data.results;

  // Establecer la imagen del usuario y el nombre en el h3
  for (let i = 0; i < users.length; i++) {
    avatar[i].src = users[i].picture.medium;
    h3Elements[i].textContent = users[i].name.first+ ' ' + users[i].name.last;
  }
});
