import TopTen from "../components/topTen";
// import { getPsTopTens } from "../service/psTopTens";
import GameInfoContainer from "../components/gameInfoContainer";
import axios from 'axios';
import { useState, useEffect } from 'react';

const PsTopTen = () => {
    const[psTopten, setPsTopten] = useState([]);
    
    useEffect(()=>{
        const url = "http://localhost:5001/api/psToptenGameInfo"
    
        axios
          .get(url)
          .then(res=>{
            console.log("psTopten:", res.data)
            setPsTopten(res.data)
          })
          .catch(err=>{
            console.log("ERROR:", err)
          })
      }, [])
      
    return ( 
        <>
        <TopTen consoleName="PlayStation"/>
        <GameInfoContainer dataFile={ psTopten } />
        
        </>
     );
}
 
export default PsTopTen;