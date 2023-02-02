import { useLocation } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const AdminReviewDetail = () => {
    let checkAuthSession = false
    let reviewDetail
    let curUsername = ''
    let curTitle = ''
    let curComment = ''
    const [msg, setMsg] = useState('')
    const location = useLocation()

    const submitForm = (event)=>{
        event.preventDefault();
        handleReviewUpdate(username, title, comment)
        setUsername(username)
        setTitle(title)
        setComment(comment)
    }

    const handleReviewUpdate = async (username, title, comment) =>{
        const url = `http://localhost:5001/api/gameReview/${reviewDetail._id}`;
        const { data } = await axios.put(url, {
            username: username,
            title: title,
            comment: comment,
          });
          console.log(data)
          setMsg(data)
    }

    if(location.state !== null){
        const { isLogin, review } = location.state
        checkAuthSession = isLogin
        reviewDetail = review
        curUsername = review.username
        curTitle = review.title
        curComment = review.comment
    }

    const [username, setUsername] = useState(curUsername)
    const [title, setTitle] = useState(curTitle)
    const [comment, setComment] = useState(curComment)

    if(!checkAuthSession){
        return ( 
            <>
            <h1>You are not allowed to be here. Please login first.</h1>
            </> 
        )
    } else {
        return ( 
            <>
            <h1>{username}'s' Review</h1>
            <div style={{backgroundColor: "white", padding:"10px"}}>
                <p>You can change username, title and comment</p>
                <form onSubmit={submitForm} style={{backgroundColor: "grey", padding:"10px"}}>
                    <label ><strong>Game Name:</strong> {reviewDetail.game}</label> <br />
                    <label for="username"><strong>Username:</strong></label> <br />
                    <input className="form-control" type="text" value={username} id="username" name="username" placeholder="enter a username" onChange={(event)=>setUsername(event.target.value)} /><br />
                    <label for="title"><strong>Title:</strong></label><br />
                    <input className="form-control" type="text" value={title} id="title" name="title" placeholder="enter a title" onChange={(event)=>setTitle(event.target.value)} /><br />
                    <label for="comment"><strong>Comment:</strong></label><br />
                    <textarea className="form-control" type="text" value={comment} id="comment" name="comment" placeholder="enter the comment" onChange={(event)=>setComment(event.target.value)} /><br />
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
 
export default AdminReviewDetail;