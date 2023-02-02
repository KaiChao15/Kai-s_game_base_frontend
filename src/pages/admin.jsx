import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const navigate = useNavigate();

    const handleAuth = (username, password)=>{
        console.log("Username: ", username, " Password: ", password)
        const url = `http://localhost:5001/api/checkAdmin`
        axios
            .post(url,{username, password})
            .then((res) => {
                console.log("Auth Response: ",res.data)
                setErrorMsg(res.data)
                if(res.data === "Admin login successfully."){
                    navigate("/admin/dashboard", {state: {authResult: true}})
                }
            })
            .catch((err) => {
                console.log("ERROR: ", err);
            });
    }


    const checkAdmin = (event)=>{
        event.preventDefault()
        handleAuth(username, password)
        setUsername('')
        setPassword('')
    }

    return ( 
    <>
    <h1 style={{padding: "3px", textAlign: "center"}}>Admin Login Page</h1>
    <div style={{padding: "3px", textAlign: "center"}}>
    <form onSubmit={checkAdmin}>
        <label for="username"><strong>UserName:</strong> </label>
        <input style={{ margin: "5px"}} type="text" id="username" name="username" value={username} onChange={(event)=>setUsername(event.target.value)} /> <br />
        <label for="Password"><strong>Password:</strong> </label>
        <input style={{ margin: "5px"}} type="password" id="password" name="password" value={password} onChange={(event)=>setPassword(event.target.value)}/> <br />
        <p style={{color: "#B33A3A" }} id="errorMsg" name="errorMsg" >{errorMsg}</p>
        <button class="btn btn-dark" type="submit" id="submit" name="submit">Submit</button>
    </form>
    </div>
    
    </> 
    );
}
 
export default Admin;