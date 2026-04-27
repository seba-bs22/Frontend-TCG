import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="bloque-buscador">
        <div className="logo">
          <img src="/logo.svg" alt="Logo DecklyBuyTCG" />
        </div>

        <div className="buscador">
          <input
            type="text"
            placeholder="BUSCA TU CARTA"
          />
          <button>Buscar</button>
        </div>

        <div className="boton-ingresar">
          <Link to="/login">
            <button>Cerrar Sesion</button>
          </Link>
        </div>
      </div>

      <nav>
        <ul className="barra-navegacion">
          <li><Link to="/home">INICIO</Link></li>
          <li><Link to="/categories">CATEGORÍAS</Link></li>
          <li><Link to="/offers">OFERTAS</Link></li>
          <li><Link to="/contact">CONTACTO</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;