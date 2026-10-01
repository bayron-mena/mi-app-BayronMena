
export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="index.html"
              ><span className="brand-mark" aria-hidden="true"></span>Aula
              Digital</a
            >
            <p>
              Plataforma educativa demostrativa para aprender desarrollo
              frontend mediante experiencias prácticas.
            </p>
          </div>
          <div>
            <h2 className="footer-title">Explora</h2>
            <ul className="footer-links">
              <li><a href="index.html">Inicio</a></li>
              <li><a href="catalogo.html">Catálogo de cursos</a></li>
              <li><a href="registro.html">Crear cuenta</a></li>
            </ul>
          </div>
          <div>
            <h2 className="footer-title">Proyecto</h2>
            <ul className="footer-links">
              <li><a href="index.html#nosotros">Quiénes somos</a></li>
              <li><a href="index.html#contacto">Contacto</a></li>
              <li><span className="school-tag">Área Informática</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          Aula Digital · Proyecto educativo demostrativo · 2026
        </div>
      </div>
    </footer>
  )
}
