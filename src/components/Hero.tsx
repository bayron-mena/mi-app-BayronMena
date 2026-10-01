

export const Hero = () => {
  return (
    <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="badge">Aprendizaje práctico</span>
            <h1>Aprende tecnología <span>construyendo.</span></h1>
            <p className="lead">
              Explora cursos pensados para transformar conceptos en proyectos
              reales. Aprende paso a paso, practica y desarrolla nuevas
              habilidades digitales.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="catalogo.html">Explorar cursos</a
              ><a className="btn btn-outline" href="registro.html">Crear cuenta</a>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="fondo.avif"
              alt="Estudiantes trabajando juntos en un proyecto"
            />
            <div className="hero-stat">
              <strong>Aprender haciendo</strong
              ><span
                >Proyectos claros, progresivos y conectados con habilidades
                reales.</span
              >
            </div>
          </div>
        </div>
      </section>
  )
}
