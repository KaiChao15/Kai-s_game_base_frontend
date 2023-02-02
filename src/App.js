import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import NavBar from './components/navBar';
import Home from './pages/home';
import NoPage from './pages/noPage';
import PsTopTen from './pages/psTopTen';
import PsUpcoming from './pages/psUpcoming';
import NsTopTen from './pages/nsTopTen';
import NsUpcoming from './pages/nsUpcoming';
import GameDetailsPage from './pages/gameDetailsPage';
import Admin from './pages/admin';
import AdminMainPage from './pages/adminMainPage';
import AdminReviews from './pages/adminReviews';
import AdminGameDetail from './pages/adminGameDetail';
import AdminReviewDetail from './pages/adminReviewDetail';

function App() {
  return (
    <div style={{
      backgroundColor: '#6B728E'
    }}>
    <NavBar/>
    <BrowserRouter>
    <Routes>
            <Route
            path = "/" // this is for root
            element = {<Home/>}
            />

            <Route
            path = "/home" 
            element = {<Home/>}
            />

            <Route
            path = "/admin" 
            element = {<Admin/>}
            />

            <Route
            path = "/admin/dashboard" 
            element = {<AdminMainPage/>}
            />

            <Route
            path = "/admin/dashboard/:gamename" 
            element = {<AdminGameDetail />}
            />

            <Route
            path = "/admin/dashboard/reviews/:gamename" 
            element = {<AdminReviews />}
            />

            <Route
            path = "/admin/dashboard/reviews/:gamename/reviewDetails" 
            element = {<AdminReviewDetail />}
            />

            <Route
            path = "/playstation/topten" 
            element = {<PsTopTen/>}
            />

            <Route
            path = "/Games/Details" 
            element = {<GameDetailsPage/>}
            />

            <Route
            path = "/playstation/upcoming"
            element = {<PsUpcoming/>}
            />

            <Route
            path = "/nintendoswitch/topten" 
            element = {<NsTopTen/>}
            />

            <Route
            path = "/nintendoswitch/upcoming" 
            element = {<NsUpcoming/>}
            />

            <Route
            path = "*" 
            element = {<NoPage/>}
            />
         </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
