import GridCards from "../components/gridCards";

const Home = () => {
    return ( 
        <div>
        <h1 style={{textAlign:'center'}}>Kai's Gaming Base</h1>
        <p style={{textAlign:'center'}}> Welcome to Kai's gaming base.<br /> Let's check out our favorite Playstation and Nintendo Switich Games. <br /> There are Kai's Top ten game and 2023 Upcoming games.</p>
        <GridCards />
        </div>
        
     );
}
 
export default Home;