import Card from 'react-bootstrap/Card';

const ReviewInfoCard = ({reviewInfo}) => {
    return ( 
        <>
        <Card style={{width: "50vw"}}>
        <Card.Header>{reviewInfo.username}</Card.Header>
        <Card.Body>
            <Card.Title>{reviewInfo.title}</Card.Title>
            <Card.Text>
            {reviewInfo.comment}
            </Card.Text>
        </Card.Body>
        </Card>
        </>
     );
}
 
export default ReviewInfoCard;