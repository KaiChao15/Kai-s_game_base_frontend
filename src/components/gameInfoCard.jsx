import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';


const styles = {
    card: {
      backgroundColor: '#F5EBE0',
    },
    cardImage: {
      objectFit: 'cover'
    }
  }

const GameInfoCard = ({gameInfo}) => {
    console.log("game code name: ", gameInfo.api_code_name)
    const [rawgInfo, setRawgInfo] = useState([])

    useEffect(()=>{
      const apiKey = "fd47c8a2e41b4535bf0d0c383ec9b944"
      const url = `https://api.rawg.io/api/games/${gameInfo.api_code_name}?key=${apiKey}`

      axios
        .get(url)
        .then(res=>{
          console.log("rawgInfo:", res.data)
          setRawgInfo(res.data)
        })
        .catch(err=>{
          console.log("ERROR:", err)
        })
    }, [])
   

    return ( 
    <Container fluid>
      <CardGroup className="m-5 d-block">
        <Card className="m-5 border-0 shadow" style={styles.card}>
          <Row>
            <Col>
              <Card.Img src={gameInfo.cover_img} style={styles.cardImage} />
            </Col>
            <Col>
              <Card.Body>
              <Card.Title as="h1">Rank {gameInfo.rank} {gameInfo.name}</Card.Title>
              <Card.Text as="p" style={styles.cardText}>
                    <strong>Genres: </strong>
                    {Array.isArray(rawgInfo.genres)
                    ? rawgInfo.genres.map((genre,key) => (
                      <span key={key}>{genre.name}/</span>
                      ))
                    : null}
              </Card.Text>
              <Card.Text as="p" style={styles.cardText}>
                  <strong>Platforms: </strong>
                  {Array.isArray(rawgInfo.platforms)
                    ? rawgInfo.platforms.map((platform,key) => (
                      <span key={key}>{platform.platform.name}/</span>
                      ))
                    : null}
                  
              </Card.Text>
              <Card.Text as="p" style={styles.cardText}>
                    <strong>Developer: </strong>
                    {Array.isArray(rawgInfo.developers)
                    ? rawgInfo.developers.map((developer,key) => (
                      <span key={key}>{developer.name} </span>
                      ))
                    : null}
              </Card.Text>
              <Card.Text as="p" style={styles.cardText}>
                    <strong>Publishers: </strong>
                    {Array.isArray(rawgInfo.publishers)
                    ? rawgInfo.publishers.map((publisher,key) => (
                      <span key={key}>{publisher.name} </span>
                      ))
                    : null}
              </Card.Text>
              <Link to="/Games/Details" state={{ from: gameInfo,  rawgInfo: rawgInfo}} className="btn btn-primary">Learn More</Link>
              </Card.Body>
            </Col>
                
          </Row>  
        </Card>
      </CardGroup>
    </Container>
     );
}
 
export default GameInfoCard;