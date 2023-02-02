import UpComing from "../components/upComing";
// import { getPsUpcoming } from "../service/psUpcoming";
import GameInfoContainer from "../components/gameInfoContainer";
import axios from 'axios';
import { useState, useEffect } from 'react';

const PsUpcoming = () => {
    const[psUpcoming, setPsUpcoming] = useState([]);
    
    useEffect(()=>{
        const url = "http://localhost:5001/api/psUpcomingGameInfo"
    
        axios
          .get(url)
          .then(res=>{
            console.log("psTopten:", res.data)
            setPsUpcoming(res.data)
          })
          .catch(err=>{
            console.log("ERROR:", err)
          })
      }, [])

    return ( 
        <>
        <UpComing consoleName="Playstation" />
        <GameInfoContainer dataFile={ psUpcoming } />
        </>
     );
}
 
export default PsUpcoming;