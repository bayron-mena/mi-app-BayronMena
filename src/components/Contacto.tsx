

export const Contacto = () => {
  return (
    <section className="section section-dark" id="contacto">
        <div className="container contact-grid">
          <div>
            <span className="badge">Conversemos</span>
            <h2>¿Tienes una consulta?</h2>
            <p className="muted">
              Completa el formulario y déjanos tu mensaje. Esta sección forma
              parte de la experiencia demostrativa del sitio.
            </p>
          </div>
          <div className="contact-panel">
            <form className="form-grid" data-contact>
              <label className="field"
                >Nombre<input
                  name="nombre"
                  required
                  placeholder="Tu nombre" /></label
              ><label className="field"
                >Correo<input
                  type="email"
                  name="email"
                  required
                  placeholder="nombre@correo.cl" /></label
              ><label className="field"
                >Mensaje<textarea
                  name="mensaje"
                  rows={5}
                  required
                  placeholder="Escribe tu consulta"
                ></textarea></label
              ><button className="btn btn-primary" type="submit">
                Enviar mensaje
              </button>
              <p className="message" data-contact-message hidden>
                Gracias. Tu mensaje fue recibido en esta demostración.
              </p>
            </form>
          </div>
        </div>
      </section>
  )
}
