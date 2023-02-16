import { Card, Badge } from 'react-bootstrap';

function Character({character}) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={character.image} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Badge bg="warning">{character.gender}</Badge>
        <Badge bg="info">{character.species}</Badge>
        <Badge bg="danger">{character.status}</Badge>
      </Card.Body>
    </Card>
  );
}

export default Character;