import React from 'react';
import '../App.css';
import { ListGroup, ListGroupItem, Button, Image, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



export class PokemonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       pokeDetail: [],
       pokeImage: []
    }
 }
 

 
  componentDidMount = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=12')
      .then(response => {
          if (response.status === 200 && response != null) {
            for (let i = 0; i < response.data.results.length; i++){
              axios.get(response.data.results[i].url)
              .then(res => {
                this.setState({
                  pokeDetail: res.data,
                  pokeImage: res.data.sprites.other.dream_world.front_default
                });
              })
            }
    } else {
      console.log('error');
    }
  })
  .catch(error => {
    console.log(error);
  });
  }

  
  
  render(){
  const { pokeDetail, pokeImage} = this.state;
  console.log(pokeDetail.name)
  // console.log("ini atas",pokeDetail)
  // {Object.entries(pokeDetail).forEach(([i, data]) => {
  //   console.log(data.name)
  // })}
  return (
    <div className="App">
        <h1 className="title">My Pokemon List</h1>
        <Container fluid="md">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
              My Pokemon List
            </Navbar.Brand>
          </Navbar>
          <ListGroup>
          {Object.keys(pokeDetail).map((data, i) => {
          return(
            // console.log(data[1].name)
              <ListGroupItem className="d-flex" key={i}>
              <Image style={{width: "50px"}} src={pokeImage} rounded />
                <strong style={{padding: "10px"}}>
                  {pokeDetail[data].name}
                </strong>
                <div className="ml-auto">
                  <Button>Detail</Button>
                </div>
              </ListGroupItem>
              );}
          )}
          </ListGroup>
        </Container>
    </div>
    );
  }
}

export default PokemonList;
