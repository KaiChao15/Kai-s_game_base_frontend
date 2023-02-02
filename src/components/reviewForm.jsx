import { useState } from "react";

const ReviewFrom = ({onAddReview=f=>f}) => {
    const [username, setUsername] = useState('')
    const [title, setTitle] = useState('')
    const [comment, setComment] = useState('')
    const submitForm = (event)=>{
        event.preventDefault();
        onAddReview(username, title, comment)
        // onNewComment(username,title, comment);
        setUsername('')
        setTitle('')
        setComment('')
    }

    return ( 
        <>
        <h1>Share your thought</h1>
        <form onSubmit={submitForm}>
            <label for="username">Name:</label> <br />
            <input type="text" value={username} id="username" name="username" placeholder="pick a username" onChange={(event)=>setUsername(event.target.value)} /><br />
            <label for="title">Title:</label><br />
            <input type="text" value={title} id="title" name="title" placeholder="set a title" onChange={(event)=>setTitle(event.target.value)} /><br />
            <label for="comment">Comment:</label><br />
            <textarea id="comment" value={comment} name="comment" rows="4" cols="50" placeholder="share your thought" onChange={(event)=>setComment(event.target.value)}></textarea><br />
            <input type="submit" id="submit" name="submit"></input>
        </form>
        </>
     );
}
 
export default ReviewFrom;