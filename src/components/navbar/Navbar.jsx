import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <nav id="navbar" className="navbar navbar-expand-md p-md-1">
     <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <NavLink className={styles.NavLink} to="/index">Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={styles.NavLink} to="/Diseño">Diseño</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={styles.NavLink} to="/Marketing">Marketing</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={styles.NavLink} to="/Nosotros">Nosotros</NavLink>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    </div>
    
  );
};

export default Navbar;