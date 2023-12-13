document.addEventListener("mousemove", function (event) {
    // Obtén las coordenadas del mouse
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // Crea un nuevo div de destello en las coordenadas del mouse
    var destello = document.createElement("div");
    destello.className = "destello";
    destello.style.left = mouseX - 10 + "px";
    destello.style.top = mouseY - 10 + "px";

    // Agrega el destello al contenedor específico
    document.querySelector('.destello-container').appendChild(destello);

    // Elimina el destello después de la animación
    destello.addEventListener("animationend", function () {
      document.querySelector('.destello-container').removeChild(destello);
    });
  });