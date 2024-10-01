import React, {useState} from 'react';


function MyBlogs(props) {

  const [hidden, setHidden] =useState(true)

  return (
    <>
    <div className="card d-flex" onMouseEnter={() => setHidden(false)} onMouseLeave={() => setHidden(true)} style={{width:"100%", maxWidth: "30rem", height:"auto", alignItems:"center", justifySelf:"center", paddingTop:!hidden?"30px":"50px", boxShadow:!hidden?"10px 10px 40px #E7E9EB":null, border:"none"}}>
      <div className="card-body text-center">
        <button className="card-title" style={{border:"none", backgroundColor:"#ffffff", fontSize:"1.25rem"}}><strong>{props.title}</strong></button>
        <p className="card-text">{props.text}</p>

        {
          !hidden?<button className="btn" type="button">Explore<img src="arrow.jpg" alt="arrow" style={{height:"12px", width:"12px", color:"red"}}/></button>:null
        }



        
      </div>
    </div>
    </>
  )
}

export default MyBlogs

















