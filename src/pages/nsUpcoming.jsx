import UpComing from "../components/upComing";
// import { getNsUpcoming } from "../service/nsUpcoming";
import GameInfoContainer from "../components/gameInfoContainer";
import axios from 'axios';
import { useState, useEffect } from 'react';

const NsUpcoming = () => {
    const[nsUpcoming, setNsUpcoming] = useState([]);
    
    useEffect(()=>{
        const url = "http://localhost:5001/api/nsUpcomingGameInfo"
    
        axios
          .get(url)
          .then(res=>{
            console.log("nsTopten:", res.data)
            setNsUpcoming(res.data)
          })
          .catch(err=>{
            console.log("ERROR:", err)
          })
      }, [])

    return ( 
        <>
        <UpComing consoleName="Nintendo Switich" />
        <GameInfoContainer dataFile={ nsUpcoming } />
        </>
     );
}
 
export default NsUpcoming;