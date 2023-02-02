import TopTen from "../components/topTen";
// import { getNsTopTens } from "../service/nsTopTens";
import GameInfoContainer from "../components/gameInfoContainer";
import axios from 'axios';
import { useState, useEffect } from 'react';

const NsTopTen = () => {
    const[nsTopten, setNsTopten] = useState([]);
    
    useEffect(()=>{
        const url = "http://localhost:5001/api/nsToptenGameInfo"
    
        axios
          .get(url)
          .then(res=>{
            console.log("nsTopten:", res.data)
            setNsTopten(res.data)
          })
          .catch(err=>{
            console.log("ERROR:", err)
          })
      }, [])
      

    return ( 
        <>
        <TopTen consoleName="Nintendo Switch" />
        <GameInfoContainer dataFile={ nsTopten } />
        </>
     );
}
 
export default NsTopTen;