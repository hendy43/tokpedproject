import '../App.css';
import { Card, Button, Container } from 'react-bootstrap';

function PokemonDetail() {
  return (
    <Container>
    <h1 className="title">
      Pokemon Detail
    </h1>
      <Card style={{ width: 'auto'}}>
        <Card.Img style={{height: '35em', border: '1px solid black' }} variant="top" src="https://i.pinimg.com/originals/fd/18/c6/fd18c6d26d4d9d26a0bd9d1a2fb2bd04.png" />
        <Card.Body style={{border: '1px solid black'}}>
          <Card.Title>Type :</Card.Title>
          <br/>
          <Card.Title>Moves :</Card.Title>
          <br/>
          <Button variant="primary">Catch</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PokemonDetail;
