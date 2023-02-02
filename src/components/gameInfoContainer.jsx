import GameInfoCard from "../components/gameInfoCard";
import Row from 'react-bootstrap/Row';

const GameInfoContainer = ({dataFile}) => {
    return ( 
        <>
        <Row xs={1} md={1} className="g-4">
        {dataFile.map((data, key) => {
          return (
            <div key={key}> 
            <GameInfoCard gameInfo={data}/>
            </div>
          );
        })}

            
        </Row>
        </>
     );
}
 
export default GameInfoContainer;