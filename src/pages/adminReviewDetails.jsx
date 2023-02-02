import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

const AdminReviewDetails = ({game, isLogin}) => {
    const[gameReviews, setGameReviews] = useState([])
    const[reviewLen, setReviewLen] = useState(0)
    const[msg, setMsg] = useState("")
    const [username, setUsername] = useState('')
    const [title, setTitle] = useState('')
    const [comment, setComment] = useState('')
    const submitForm = (event)=>{
        event.preventDefault();
        handleAddReview(username, title, comment)
        setUsername('')
        setTitle('')
        setComment('')
    }

    const handleDeleteReview = async (review) => {
        if(window.confirm("Are you sure deleting this comment?")){
            console.log("deleting...", review._id)
            const url = `http://localhost:5001/api/gameReviews/${review._id}`
            const { data } = await axios.delete(url)
            console.log(data)
            const newGameReviews = gameReviews.filter((r) => r._id !== review._id)
            const newReviewLen = reviewLen-1
            setGameReviews(newGameReviews)
            setReviewLen(newReviewLen)
            if(newReviewLen === 0){
                setMsg(`No reviews for ${game} yet`)
            } else {
                setMsg(`${newReviewLen} review for ${game}`)
            }

        } else {
            console.log("canceling...")
        }

        
    }

    const handleAddReview = async (username, title, comment) => {
        const url = `http://localhost:5001/api/review/${game}`;
        const { data } = await axios.post(url, {
            username,
            title,
            comment,
          });
        if (typeof data == "object") {
            const newReviews = [...gameReviews, data]
            setGameReviews(newReviews)
            const newReviewLen = newReviews.length
            setReviewLen(newReviewLen)
            if(newReviewLen === 0){
                setMsg(`No reviews for ${game} yet`)
            } else {
                setMsg(`${newReviewLen} review for ${game}`)
            }

        } else {
            console.log("Add couldn't be completed.");
        }
    }

    //fetch game reviews
    useEffect(()=>{
        const url = `http://localhost:5001/api/reviews/${game}`
    
        axios
          .get(url)
          .then(res=>{
            setGameReviews(res.data)
            setReviewLen(res.data.length)
            if(res.data.length === 0){
                setMsg(`No reviews for ${game} yet`)
            } else {
                setMsg(`${res.data.length} review for ${game}`)
            }
            
            // console.log(res.data)
          })
          .catch(err=>{
            console.log("ERROR:", err)
          })
      }, [])


    return ( 
        <div style={{backgroundColor: "white"}}>
            <div style={{backgroundColor: "grey", textAlign:"center", padding:"15px"}}>
            <h4>Add new Review</h4>
            <form onSubmit={submitForm}>
                <label for="username">Username:</label> 
                <input type="text" value={username} id="username" name="username" placeholder="pick a username" onChange={(event)=>setUsername(event.target.value)} />
                <label for="title">Title:</label>
                <input type="text" value={title} id="title" name="title" placeholder="set a title" onChange={(event)=>setTitle(event.target.value)} /> <br />
                <label for="comment">Comment:</label> <br />
                <textarea id="comment" value={comment} name="comment" rows="4" cols="50" placeholder="share your thought" onChange={(event)=>setComment(event.target.value)}></textarea> <br />
                <input type="submit" id="submit" name="submit"></input>
            </form>
            </div>
            <p style={{textAlign:"center", padding: "10px"}}>{msg}</p>
            <Table striped>
                <thead>
                    <tr>
                    <th>Username</th>
                    <th>Title</th>
                    <th>Comment</th>
                    <th>Edit Change</th>
                    <th>Remove Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(gameReviews)
                                ? gameReviews.map((review,key) => (
                                    <tr key={key}>
                                    <td>{review.username}</td>
                                    <td>{review.title}</td>
                                    <td>{review.comment}</td>
                                    <td><Link to={`/admin/dashboard/reviews/${game}/reviewDetails`} state={{ isLogin: isLogin, review: review }}> <FaEdit /></Link></td>
                                    <td><Button variant="danger" onClick={()=>handleDeleteReview(review)}><FaRegTrashAlt /></Button></td>
                                    </tr>
                                ))
                                : null}
                </tbody>
            </Table>
        </div>
        );
    

    
}
 
export default AdminReviewDetails;