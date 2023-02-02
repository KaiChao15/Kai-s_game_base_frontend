import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";

const AdminGameList = ({isLogin}) => {
    const[gameInfo, setGameInfo] = useState([])

    // fetch all games
    useEffect(()=>{
        const url = "http://localhost:5001/api/allGameInfo"
    
        axios
          .get(url)
          .then(res=>{
            setGameInfo(res.data)
          })
          .catch(err=>{
            console.log("ERROR:", err)
          })
      }, [])

    return ( 
        <>
        <h2 style={{padding:"20px", color:"Black"}}><FaPlaystation /><strong> Playstation Top ten</strong></h2>
         <Table striped>
            <thead>
                <tr>
                <th>Rank</th>
                <th>Game name</th>
                <th>Game api code name</th>
                <th>Edit Game info</th>
                <th>Manage Game Review</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(gameInfo)
                            ? gameInfo.filter((game) => game.category === "psTopten").map((game,key) => (
                                <tr key={key}>
                                <td>{game.rank}</td>
                                <td>{game.name}</td>
                                <td>{game.api_code_name}</td>
                                <td><Link to={`${game.name}`} state={{ isLogin: isLogin, game: game}}> <FaEdit /></Link></td>
                                <td>
                                    <Link to={`reviews/${game.name}`} state={{ isLogin: isLogin,  game: game.name}} className="btn btn-primary">Manage Reviews</Link>
                                </td>
                                </tr>
                            ))
                            : null}
            </tbody>
        </Table>
        <h2 style={{padding:"20px", color:"Black"}}><FaPlaystation /><strong> Playstation Upcoming</strong></h2>
        <Table striped>
            <thead>
                <tr>
                <th>Rank</th>
                <th>Game name</th>
                <th>Game api code name</th>
                <th>Edit Game info</th>
                <th>Manage Game Review</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(gameInfo)
                            ? gameInfo.filter((game) => game.category === "psUpcoming").map((game,key) => (
                                <tr key={key}>
                                <td>{game.rank}</td>
                                <td>{game.name}</td>
                                <td>{game.api_code_name}</td>
                                <td><Link to={`${game.name}`} state={{ isLogin: isLogin, game: game}}> <FaEdit /></Link></td>
                                <td>
                                    <Link to={`reviews/${game.name}`} state={{ isLogin: isLogin,  game: game.name}} className="btn btn-primary">Manage Reviews</Link>
                                </td>
                                </tr>
                            ))
                            : null}
            </tbody>
        </Table>
        <h2 style={{padding:"20px", color:"Black"}}><SiNintendoswitch /><strong> Nintendo Switch Top ten</strong></h2>
        <Table striped>
            <thead>
                <tr>
                <th>Rank</th>
                <th>Game name</th>
                <th>Game api code name</th>
                <th>Edit Game info</th>
                <th>Manage Game Review</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(gameInfo)
                            ? gameInfo.filter((game) => game.category === "nsTopten").map((game,key) => (
                                <tr key={key}>
                                <td>{game.rank}</td>
                                <td>{game.name}</td>
                                <td>{game.api_code_name}</td>
                                <td><Link to={`${game.name}`} state={{ isLogin: isLogin, game: game}}> <FaEdit /></Link></td>
                                <td>
                                    <Link to={`reviews/${game.name}`} state={{ isLogin: isLogin,  game: game.name}} className="btn btn-primary">Manage Reviews</Link>
                                </td>
                                </tr>
                            ))
                            : null}
            </tbody>
        </Table>
        <h2 style={{padding:"20px", color:"Black"}}><SiNintendoswitch /><strong> Nintendo Switch Upcoming</strong></h2>
        <Table striped>
            <thead>
                <tr>
                <th>Rank</th>
                <th>Game name</th>
                <th>Game api code name</th>
                <th>Edit Game info</th>
                <th>Manage Game Review</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(gameInfo)
                            ? gameInfo.filter((game) => game.category === "nsUpcoming").map((game,key) => (
                                <tr key={key}>
                                <td>{game.rank}</td>
                                <td>{game.name}</td>
                                <td>{game.api_code_name}</td>
                                <td><Link to={`${game.name}`} state={{ isLogin: isLogin, game: game}}> <FaEdit /></Link></td>
                                <td>
                                    <Link to={`reviews/${game.name}`} state={{ isLogin: isLogin,  game: game.name}} className="btn btn-primary">Manage Reviews</Link>
                                </td>
                                </tr>
                            ))
                            : null}
            </tbody>
        </Table>
        </>
     );
}
 
export default AdminGameList;