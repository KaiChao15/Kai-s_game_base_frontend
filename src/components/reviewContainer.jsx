import Review from "./review";
// import { getReviews } from "../service/reviews";
import ReviewFrom from "./reviewForm";
import axios from 'axios';
import { useState, useEffect } from 'react';

const ReviewContainer = ({ gamename }) => {
    const [playerReviews, setPlayerReviews] = useState([]);
    
    useEffect(()=>{
        const url = `http://localhost:5001/api/reviews/${gamename}`
    
        axios
          .get(url)
          .then(res=>{
            console.log("playerReviews:", res.data)
            setPlayerReviews(res.data)
          })
          .catch(err=>{
            console.log("ERROR:", err)
          })
      }, [])

    // const updateReviews = (username, title, comment)=>{
    //     const newReviews = [...playerReviews,
    //         {
    //             "username": username,
    //             "title": title,
    //             "comment": comment
    //         }
    //     ]
    //     setPlayerReviews(newReviews)
    // }

    const handleAddReview = async (username, title, comment) => {
        const url = `http://localhost:5001/api/review/${gamename}`;
        const { data } = await axios.post(url, {
            username,
            title,
            comment,
          });
        if (typeof data == "object") {
            const newReviews = [...playerReviews, data]
            setPlayerReviews(newReviews)
        } else {
            console.log("Add couldn't be completed.");
        }
    }

    return ( 
    <>
    <div style={{ display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', padding:"15px" }}>
        <Review reviews={playerReviews}/>
    </div>
   
    <div style={{margin:"auto", marginTop:"15px", padding: "10px", backgroundColor:"grey", width:"50%"}}>
        <ReviewFrom onAddReview={ handleAddReview } />
    </div>
    
    </> 
    );
}
 
export default ReviewContainer;