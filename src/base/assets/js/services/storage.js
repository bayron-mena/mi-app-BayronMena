const USERS_KEY = "aulaDigital.usuarios";
const SESSION_KEY = "aulaDigital.sesion";

function obtenerUsuarios() {
  return JSON.parse(localStorage.getItem(USERS_KEY) ?? "[]");
}
function registrarUsuario(usuario) {
  const usuarios = obtenerUsuarios();
  if (usuarios.some((u) => u.email === usuario.email))
    throw new Error("El correo ya está registrado.");
  usuarios.push(usuario);
  localStorage.setItem(USERS_KEY, JSON.stringify(usuarios));
}
function iniciarSesion(email, password) {
  const usuario = obtenerUsuarios().find(
    (u) => u.email === email && u.password === password,
  );
  if (!usuario) throw new Error("Correo o contraseña incorrectos.");
  const sesion = { nombre: usuario.nombre, email: usuario.email };
  localStorage.setItem(SESSION_KEY, JSON.stringify(sesion));
  return sesion;
}
function obtenerSesion() {
  return JSON.parse(localStorage.getItem(SESSION_KEY) ?? "null");
}
function cerrarSesion() {
  localStorage.removeItem(SESSION_KEY);
}
