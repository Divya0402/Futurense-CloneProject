import React from 'react';
import "./HomePage.css";


function ReviewCard(props) {

  return (
    <>
    <div className="reviewCardContainer" style={{backgroundColor:"#141414"}}>
      <div className="reviewCardContainer2">

      <div className="ratingContainer" style={{display:"flex", alignItems:"start"}}>
        <img clasName="ratingImg" src={props.ratingImg} className="img-fluid" alt="ratingimg"/>
      </div>

      <div className="reviewContainer" style={{color:"#ffffff"}}>
        <h3 className="review">{props.review}</h3>
      </div>

      <div className="personDetails" style={{color:"#ffffff", display:"flex"}}>
        <div>
          <img className="personImg" src={props.personImg} alt="personimg" style={{borderRadius:"50%", alignSelf:"center"}}/>
        </div>
        <div style = {{alignSelf:"start"}}>
          <h2 className="personName"><strong>{props.name}</strong></h2>
          <h3 className="personDesignation">{props.designation}</h3>
        </div> 
      </div>

      </div>
    </div>
    </>
  )
}

export default ReviewCard