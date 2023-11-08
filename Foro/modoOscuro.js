  // Obtener elementos del DOM
  const modoOscuroToggle = document.getElementById("modo-oscuro-toggle");
  const body = document.body;
  
  // Función para cambiar entre el modo claro y el modo oscuro
  function toggleModoOscuro() {
    if (modoOscuroToggle.checked) {
      body.classList.add("modo-oscuro");
    } else {
      body.classList.remove("modo-oscuro");
    }
  }
  
  
  // Escuchar el cambio en el interruptor (switch)
  modoOscuroToggle.addEventListener("change", toggleModoOscuro);
  
  // Verificar el estado del interruptor al cargar la página
  if (localStorage.getItem("modoOscuro") === "true") {
    modoOscuroToggle.checked = true;
    toggleModoOscuro();

$(document).ready(function () {
  const sideNav = $(".side-nav");
  const toggleButton = $("#toggle-form");

  // Función para abrir y cerrar la barra lateral
  toggleButton.click(function () {
    sideNav.toggleClass("open");
  });
});
}

