document.addEventListener("DOMContentLoaded", function () {
    const postList = document.getElementById("posts");
  
    // URL de JSONPlaceholder para obtener publicaciones con un usuario
    const apiUrl = "https://jsonplaceholder.typicode.com/posts?_limit=10";
    const usersApiUrl = "https://jsonplaceholder.typicode.com/users";
  
    // Obtener usuarios de JSONPlaceholder
    fetch(usersApiUrl)
      .then((response) => response.json())
      .then((users) => {
        cargarPublicacionesConUsuarios(users);
      })
      .catch((error) => {
        console.error("Error al cargar usuarios:", error);
      });
  
    // Función para cargar las publicaciones con usuarios
    function cargarPublicacionesConUsuarios(users) {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Procesar y mostrar las publicaciones con usuarios
          data.forEach((post) => {
            const user = users.find((u) => u.id === post.userId);
            const listItem = document.createElement("li");
            listItem.innerHTML = `
              <div class="post-header">
                <h3>${post.title}</h3>
                <span> ${user ? user.username : 'Usuario desconocido'}</span>
              </div>
              <p>${post.body}</p>
              <img src="https://picsum.photos/200/200" alt="Posted Image"> <!-- Usando picsum.photos para imágenes aleatorias -->
            `;
            postList.appendChild(listItem);
          });
        })
        .catch((error) => {
          console.error("Error al cargar las publicaciones:", error);
        });
    }
  
    const toggleButton = document.getElementById("toggle-form");
    const postForm = document.getElementById("post-form");
    const submitButton = document.getElementById("submit-post");
  
    toggleButton.addEventListener("click", () => {
      postForm.classList.toggle("hidden");
    }); 


    
    //para que el boton de publicar funcione
    submitButton.addEventListener("click", () => {
      const imageInput = document.getElementById("post-image");
      const img = document.getElementById("avatar");
      console.log(img.src);
      const username = document.getElementById("usuario");
      const title = document.getElementById("post-title").value;
      const content = document.getElementById("post-content").value;
      
     
    
      if (username && title && content && img) {
        const postItem = document.createElement("li");
        postItem.className = "post-card";
        postItem.innerHTML = `
      <div class="post-username"><span class="UsuarioPost">${username.textContent}</span></div>
        
          <br>
          <div class="post-header">
            <h3>${title}</h3>
            <span> </span>
          </div>
          <p>${content}</p>
          ${imageInput.files.length > 0 ? `<img src="${URL.createObjectURL(imageInput.files[0])}" alt="Posted Image" class="post-image">` : ''
      }
          `
;
/* */
        
        // Obtener la ruta de la imagen del avatar
        const avatarUrl = img.src;
    
        // Crear un elemento `<img>` para mostrar la imagen del avatar
        const avatarImg = document.createElement("img");
        avatarImg.src = avatarUrl;
        avatarImg.alt = "Avatar";
        
    
        // Agregar el elemento `<img>` al span
        postItem.querySelector(".post-header span").appendChild(avatarImg);
    
        console.log(username);
    
        // Agregar la publicación manualmente al principio de la lista
        postList.insertBefore(postItem, postList.firstChild);
        postItem.querySelector("img").classList.add("post-image")
        document.getElementById("toggle-form").value = "";
        document.getElementById("post-title").value = "";
        document.getElementById("post-content").value = "";
        imageInput.value = null;
        postForm.classList.add("hidden");
        
      }
    });
  });

