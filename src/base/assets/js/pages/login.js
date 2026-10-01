const form = document.querySelector("#data-login");
const mensaje = document.querySelector("#data-message");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  try {
    iniciarSesion(
      String(data.get("email")).trim().toLowerCase(),
      String(data.get("password")),
    );
    mensaje.textContent = "Inicio de sesión exitoso. Redirigiendo...";
    mensaje.hidden = false;

    setTimeout(() => {
      location.href = "catalogo.html";
    }, 2000);
  } catch (error) {
    mensaje.textContent = error.message;
    mensaje.hidden = false;
  }
});
