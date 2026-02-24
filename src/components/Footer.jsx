import { NavLink } from "react-router-dom"
export default function Footer() {
  return (
  <footer className="navbar navbar-expand-lg navbar-dark bg-dark">
    <section className="container">
      <div className="row">
        <div className="col-md-4" style={{color:"white"}}>
          <p>John Doe</p>
          <p>40 rue Laure Diebold
              69009 Lyon France
              10 20 30 40 50 
              john.doe@gmail.com
          </p>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer nofollow">
          <i className="bi bi-github"></i>
          </a>
          <a href="https://fr.linkedin.com/" target="_blank" rel="noopener noreferrer nofollow">
          <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://x.com/?lang=fr" target="_blank" rel="noopener noreferrer nofollow">
          <i className="bi bi-twitter"></i>
          </a>
        </div>
        <div className="col-md-4" style={{color:"white"}}>
          <p>Liens utiles</p>
          <ul className="list-unstyled">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Accueil</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Me contacter</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/mentions">Mentions lègales</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-4" style={{color:"white"}}>
          <p>Mes dernières réalisations</p>
          <ul className="list-unstyled">
             <li className="nav-item">
              <NavLink className="nav-link" to="/Portfolio">fresh food</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/Portfolio">Restaurant Akira</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/Portfolio">Espace bien être</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/Portfolio">SEO</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/Portfolio">Création API</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/Portfolio">Maquette d'un site</NavLink>
            </li>
          </ul>

        </div>
    </div>
    </section>
  </footer>
  )
}