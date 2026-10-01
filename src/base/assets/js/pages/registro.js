const form = document.querySelector("#data-register");
const mensaje = document.querySelector("#data-message");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const usuario = {
    nombre: String(data.get("nombre")).trim(),
    email: String(data.get("email")).trim().toLowerCase(),
    password: String(data.get("password")),
  };
  try {
    registrarUsuario(usuario);
    mensaje.textContent = "Registro exitoso. Ya puedes iniciar sesión.";
    mensaje.hidden = false;
    form.reset();
  } catch (error) {
    mensaje.textContent = error.message;
    mensaje.hidden = false;
  }
});
