import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';

function GridCards() {
  return (
    <>
    <CardGroup>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images2.alphacoders.com/106/1064201.png" />
      <Card.Body>
        <Card.Title>PlayStation Game</Card.Title>
        <Card.Text>
            Discover the games you want, from exclusive blockbusters to innovative indies, all brought to life with the power of the PS5 and PS4 console.
        </Card.Text>
        <p>
        <a style={{margin:'3px'}} class="btn btn-primary" href="/playstation/topTen" role="button">Top Ten</a>
        <a style={{margin:'3px'}} class="btn btn-primary" href="/playstation/Upcoming" role="button">2023 Upcoming</a>
        </p>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/bc/42/64/bc42641a7f7a27a4c9ef9b9a3c8c54a0.jpg" />
      <Card.Body>
        <Card.Title>Nintendo Switch</Card.Title>
        <Card.Text>
            We will provide various information about Nintendo, including Nintendo Switch games, and characters from game series such as Super Mario and
            The Legend of Zelda.
        </Card.Text>
        <p>
        <a style={{margin:'3px'}} class="btn btn-primary" href="/nintendoswitch/topTen" role="button">Top Ten</a>
        <a style={{margin:'3px'}} class="btn btn-primary" href="/nintendoswitch/Upcoming" role="button">2023 Upcoming</a>
        </p>
      </Card.Body>
    </Card>
    </CardGroup>
    </>
  );
}

export default GridCards;