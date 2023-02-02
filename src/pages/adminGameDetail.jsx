import { useLocation } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const AdminGameDetail = () => {
    let checkAuthSession = false
    let gameDetail
    let gameCurImg = ''
    let gameCurYt = ''
    const [msg, setMsg] = useState('')
    const location = useLocation()
    if(location.state !== null){
        const { isLogin, game } = location.state
        checkAuthSession = isLogin
        gameDetail = game
        gameCurImg = game.cover_img
        gameCurYt = game.youtube_link
    }
   
    const [coverImg, setCoverImg] = useState(gameCurImg)
    const [youtubeLink, setYoutubeLink] = useState(gameCurYt)
    const submitForm = (event)=>{
        event.preventDefault();
        handleGameUpdate(coverImg, youtubeLink)
        setCoverImg(coverImg)
        setYoutubeLink(youtubeLink)
    }

    const handleGameUpdate = async (cover_img, youtube_link) =>{
        console.log("before update:")
        console.log("id:", gameDetail._id)
        console.log("Cover img:", cover_img)
        console.log("YouTube Link:", youtube_link)
        const url = `http://localhost:5001/api/gameInfo/${gameDetail._id}`;
        const { data } = await axios.put(url, {
            cover_img: cover_img,
            youtube_link: youtube_link,
          });
          console.log(data)
          setMsg(data)
    }

    
    if(!checkAuthSession){
        return ( 
            <>
            <h1>You are not allowed to be here. Please login first.</h1>
            </> 
        )
    } else {
        return ( 
            <>
            <h1>{gameDetail.name} Details</h1>
            <div style={{backgroundColor: "white", padding:"10px"}}>
                <p>You can change game's cover img and youtube video link</p>
                <form onSubmit={submitForm} style={{backgroundColor: "grey", padding:"10px"}}>
                    <label ><strong>Game Name:</strong> {gameDetail.name}</label> <br />
                    <label ><strong>Api code name for RAWG:</strong> {gameDetail.api_code_name}</label> <br />
                    <label ><strong>Rank:</strong> {gameDetail.rank}</label> <br />
                    <label ><strong>Category:</strong> {gameDetail.category}</label> <br />
                    <label for="cover_img"><strong>Cover Image link:</strong></label> <br />
                    <input className="form-control" type="text" value={coverImg} id="cover_img" name="cover_img" placeholder="add game image url" onChange={(event)=>setCoverImg(event.target.value)} /><br />
                    <label for="youtube_link"><strong>YouTube Video Link:</strong></label><br />
                    <input className="form-control" type="text" value={youtubeLink} id="youtube_link" name="youtube_link" placeholder="set a YouTube video link" onChange={(event)=>setYoutubeLink(event.target.value)} /><br />
                    <Button style={{marginTop:"25px"}} type="submit" variant="dark">Update</Button>
                </form>
            </div>
            <div style={{backgroundColor: "white", padding:"10px"}}>
                <p >{msg}</p>
            </div>
            </>
         );
    }

}
 
export default AdminGameDetail;