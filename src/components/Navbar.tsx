export const Navbar = () => {

  return (

    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="index.html"
          ><span className="brand-mark" aria-hidden="true"></span>Aula Digital</a
        >
        <nav aria-label="Principal">
          <ul className="nav-links">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="catalogo.html">Catálogo</a></li>
            <li><a href="registro.html">Registro</a></li>
            <li><a href="login.html">Ingresar</a></li>
          </ul>
        </nav>
      </div>
    </header>

  )
}
