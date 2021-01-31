import './App.css';
import Nav from './components/Nav';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import MyPokemonList from './components/MyPokemonList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/pokemonlist" exact component={PokemonList} />
        <Route path="/pokemondetail" component={PokemonDetail} />
        <Route path="/mypokemonlist" component={MyPokemonList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
