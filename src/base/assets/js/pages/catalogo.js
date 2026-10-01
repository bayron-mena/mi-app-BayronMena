const contenedor = document.querySelector("#data-catalogo");

cursos.forEach((curso) => contenedor?.append(crearCursoCard(curso)));

function crearCursoCard(curso) {
  const article = document.createElement("article");
  article.className = "card";
  article.innerHTML = `<span class="badge">${curso.nivel}</span>
    <h2>${curso.titulo}</h2>
    <p>${curso.descripcion}</p>
    <p><strong>Duración:</strong> 
    ${curso.duracion} horas</p>
    <button class="btn btn-primary" type="button">Ver curso</button>`;
  article.querySelector("button").addEventListener(
    "click",
    () => alert(`Curso seleccionado: ${curso.titulo}`), // (método ordinario y penca, reemplazar por nueva página con detalle del curso)
  );
  return article;
}
