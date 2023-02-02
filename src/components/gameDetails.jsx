import { useLocation } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import SlideShow from './slideShow';
import ReviewContainer from './reviewContainer';
import parse from 'html-react-parser'

const styles = {
    card: {
      backgroundColor: '#F5EBE0',
    },
    cardImage: {
      objectFit: 'cover'
    }
  }

const GameDetails = () => {
    const location = useLocation()
    const { from, rawgInfo } = location.state
return ( 
        <>
         <div style={{
            backgroundImage: `url(${rawgInfo.background_image})`,
            height: "1500px",
            backgroundSize: "contain",
            }}>
            <h1 style={{
                height:"60px",
                textAlign: "center",
                padding: "30px"
            }}>{from.name} </h1>
            <Container fluid >
            <CardGroup className="m-5 d-block">
                <Card className="m-5 border-0 shadow" style={styles.card}>
                <Row>
                    <Col>
                    <Card.Img src={from.cover_img} style={styles.cardImage} />
                    </Col>
                    <Col>
                    <Card.Body>
                    <Card.Title as="h1">Rank {from.rank} {from.name}</Card.Title>
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
                    </Card.Body>
                    </Col>
                        
                </Row>  
                </Card>
            </CardGroup>
            </Container>
            <div style={{
                backgroundColor: "white",
                textAlign: "center",
                padding: "30px"}}>
                <h2 style={{textDecoration:"underline"}}>Description: </h2> 
                
                {parse(rawgInfo.description)}
            </div>

            <div style={{
                backgroundColor: "#F5EBE0",
                textAlign: "center",
                padding: "30px"}}>
                    <h1>Trailer Video</h1>
                    <iframe width="50%" height="500px" src={from.youtube_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h1 style={{
                    padding: "50px"
                }}>In Game Screenshots</h1>
                
                <SlideShow apiCode={from.api_code_name}/>
            </div>
            
            <div style={{
                height:"60px",
                textAlign: "center",
                padding: "30px"
            }}>
            <h1>Player's Reviews</h1>
            <div style={{
            backgroundImage: `url(${rawgInfo.background_image})`,
            backgroundSize: "cover",
            }}>
                <ReviewContainer gamename={ from.name }/>
            </div>
            

            <footer style={{
            backgroundColor: "white",
            height: "50px",
            }}>
            </footer>
            </div>
        </div>
       
        </>
 );
}
 
export default GameDetails;