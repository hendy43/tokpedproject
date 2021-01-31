import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white',
        margin: '1.5em',
        fontSize: '1.2em'
    };


  return (
    <nav>
        <h3 style={{float: "left", margin: "0.7em"}}>Logo</h3>
        <ul className="nav-links mr-auto">
            <Link style={navStyle} to='/pokemonlist'>
            <li>PokemonList</li>
            </Link>
            <Link style={navStyle} to='/pokemondetail'>
            <li>PokemonDetail</li>
            </Link>
            <Link style={navStyle} to='/mypokemonlist'>
            <li>MyPokemonList</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
