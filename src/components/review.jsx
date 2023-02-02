import ReviewInfoCard from "./reviewInfoCard";

const Review = ({reviews}) => {
    return ( 
    <>
    {reviews.map((data, key) => {
          return (
            <div style={{padding: "10px", backgroundColor:"#D3D3D3"}} key={key} > 
            <ReviewInfoCard reviewInfo={data}/>
            </div>
          );
    })}
    
    </> 
    );
}
 
export default Review;