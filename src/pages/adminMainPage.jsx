import { useLocation } from "react-router-dom";
import AdminGameList from "../components/adminGameList";

const AdminMainPage = () => {
    let isLogin = false
    const location = useLocation()

    if(location.state !== null){
        const { authResult } = location.state
        console.log("isLogin? ", authResult)
        isLogin = authResult
    }
    

    if(!isLogin){
        return ( 
            <>
            <h1>You are not allowed to be here. Please login first.</h1>
            </> 
        )
    } else {
        return ( 
            <>
            <div style={{padding:"10px"}}>
                <h1>Admin Dash Board</h1>
                <p>Welcome Back.</p>
            </div>
            
            <div style={{backgroundColor: "white"}}>
                <AdminGameList isLogin={isLogin}/>
            </div>
            </> 
        )
    }

    
}
 
export default AdminMainPage;