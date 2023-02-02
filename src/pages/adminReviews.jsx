import { useLocation } from 'react-router-dom'
import AdminReviewDetails from './adminReviewDetails'

const AdminReviews = () => {
    const location = useLocation()
    let checkAuthSession = false
    let gamename = ""

    if(location.state !== null){
        const { isLogin, game } = location.state
        checkAuthSession = isLogin
        gamename = game
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
            <h1>{gamename}'s Player Reviews</h1>
            <AdminReviewDetails game={gamename} isLogin={checkAuthSession}/>
            </>
         );
    }
}
 
export default AdminReviews;