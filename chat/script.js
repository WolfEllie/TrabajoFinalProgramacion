  async function simulateMessage() {
    // Realiza la solicitud a la API
    const response = await fetch("https://api.generadordni.es/v2/text/characters?characters=35");
    /* OTRA OPCION*/
    /*https://clientes.api.greenborn.com.ar/public-random-word*/
  
    // Procesa la respuesta
    const data = await response.json();
  
    // Genera un mensaje aleatorio
    const mensaje = data[Math.floor(Math.random() * data.length)];
  
    const mensajes = document.getElementById("mensajes");
    mensajes.innerHTML += `
      <div class="mensaje">
        <img src="https://randomuser.me/api/portraits/med/men/36.jpg" class="imagen-perfil" alt="Imagen de perfil">
        <div class="usuarionom">Brandon</div><div class="message-text">${mensaje}</div>
      </div>
    `
    ;
  
    
    
    //Evento de temporizador para enviar el siguiente mensaje
  setTimeout(() => simulateMessage(), 25000);
  }
  async function simulateMessage1() {
    // Realiza la solicitud a la API
    const response = await fetch("https://api.generadordni.es/v2/text/characters?characters=35");
  
  
    // Procesa la respuesta
    const data = await response.json();
  
    // Genera un mensaje aleatorio
    const mensaje = data[Math.floor(Math.random() * data.length)];
  
    const mensajes = document.getElementById("mensajes");
    mensajes.innerHTML += `
      <div class="mensaje">
        <img src="https://randomuser.me/api/portraits/med/women/75.jpg" class="imagen-perfil" alt="Imagen de perfil">
        <div class="usuarionom">Jennie</div><div class="message-text">${mensaje}</div>
      </div>
    `
    ;
  
    
    
    //Evento de temporizador para enviar el siguiente mensaje
  setTimeout(() => simulateMessage(), 15000);
  }
  
  simulateMessage();
  simulateMessage1();

  function enviarMensaje() {
    // Obtener el input y el div de mensajes
    var input = document.getElementById("mensaje");
    var mensajes = document.getElementById("mensajes");
    // Crear un elemento p con el texto del input
    var p = document.createElement("p");
    p.textContent = input.value;
    // Añadir el elemento p al div de mensajes
    mensajes.appendChild(p);
    // Limpiar el input
    input.value = "";
  }
  
  