import React from 'react'
import "./HomePage.css";

function AboutFourth(props) {
  return (
  <>
  <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
    <div className="gradient5 aboutcontainer" style={{backgroundColor:`${props.colour}`, display:"flex", justifyContent:"center", alignItems:"center"}}>

      <div className="container aboutcontainer1Container1">
        <div className="aboutcontainer1">

          <div className="aboutcontainer1Logo" style={{display:"flex", alignItems:"start"}}>
            <img className="aboutcontainer1LogoImg" src={props.logoUrl} alt="logo"></img>
          </div>

          <div className="aboutcontainer1HeadingContainer" style={{color:"#ffffff"}}>
            <h1 className="aboutcontainer1Heading">{props.heading}</h1>
          </div>

          <div className="aboutcontainer1SubHeadingContainer" style={{color:"#ffffff"}}>
            <h3 className="aboutcontainer1SubHeading">{props.subHeading}</h3>
          </div>

        

          <div className="aboutFeaturesContainer" style={{color:"#ffffff", borderRadius:"5px", display:"flex"}}>
            <div className="aboutFeaturesContainer1" style={{color:"#ffffff", borderRadius:"5px", display:"flex", alignItems:"center"}}>
              <div>
                <img className="aboutFeature1img" src={props.firstIcon} alt="plusstar" style={{alignSelf:"center", borderRadius:"50%"}}/>
              </div>
              <div>
                <h3 className="aboutFeature1">{props.firstFeature}</h3>
              </div> 
            </div>

            <div className="aboutFeaturesContainer2" style={{color:"#ffffff", borderRadius:"5px", display:"flex", alignItems:"center"}}>
              <div>
                <img className="aboutFeature2img" src={props.secondIcon} alt="plusstar" style={{alignSelf:"center", borderRadius:"50%"}}/>
              </div>
              <div>
                <h3 className="aboutFeature2" >{props.secondFeature}</h3>
              </div> 
            </div>
          </div>

          <div className="aboutFeaturesContainer" style={{color:"#ffffff", borderRadius:"5px",  display:"flex"}}>
            <div className="aboutFeaturesContainer1" style={{color:"#ffffff", borderRadius:"5px",  display:"flex", alignItems:"center"}}>
              <div>
                <img className="aboutFeature1img"  src={props.thirdIcon} alt="plusstar" style={{alignSelf:"center", borderRadius:"50%"}}/>
              </div>
              <div>
                <h3 className="aboutFeature1">{props.thirdFeature}</h3>
              </div> 
            </div>

            <div className="aboutFeaturesContainer2" style={{color:"#ffffff", borderRadius:"5px", display:"flex", alignItems:"center"}}>
              <div>
                <img className="aboutFeature2img" src={props.fourthIcon} alt="plusstar" style={{alignSelf:"center", borderRadius:"50%"}}/>
              </div>
              <div>
                <h3 className="aboutFeature2">{props.fourthFeature}</h3>
              </div> 
            </div>
          </div>



          <div className="aboutBtnContainer" style={{color:"#ffffff"}}>
            <button className="btn aboutBtn" type="button" style={{color:"#ffffff"}}><p className="aboutBtnText">Learn more<img className="aboutArrow" src="white_arrow.png" alt="arrow" style={{color:"red"}}/></p></button>
          </div>


        </div>
      </div>

      <div className="aboutcontainer1Container2">
        <div className="aboutcontainer1">

          <div className="aboutcontainer1Logo" style={{display:"flex", alignItems:"start"}}>
            <img className="aboutcontainer1LogoImg" src={props.logoUrl} alt="logo"></img>
          </div>

          <div className="aboutcontainer1HeadingContainer" style={{color:"#ffffff"}}>
            <h1 className="aboutcontainer1Heading">{props.heading}</h1>
          </div>

          <div className="aboutcontainer1SubHeadingContainer" style={{color:"#ffffff"}}>
            <h3 className="aboutcontainer1SubHeading">{props.subHeading}</h3>
          </div>

        

          <div className="aboutFeaturesContainer" style={{color:"#ffffff", borderRadius:"5px", display:"flex"}}>
            <div className="aboutFeaturesContainer1" style={{color:"#ffffff", borderRadius:"5px", display:"flex", alignItems:"center"}}>
              <div>
                <img className="aboutFeature1img" src={props.firstIcon} alt="plusstar" style={{alignSelf:"center", borderRadius:"50%"}}/>
              </div>
              <div>
                <h3 className="aboutFeature1">{props.firstFeature}</h3>
              </div> 
            </div>

            <div className="aboutFeaturesContainer2" style={{color:"#ffffff", borderRadius:"5px", display:"flex", alignItems:"center"}}>
              <div>
                <img className="aboutFeature2img" src={props.secondIcon} alt="plusstar" style={{alignSelf:"center", borderRadius:"50%"}}/>
              </div>
              <div>
                <h3 className="aboutFeature2" >{props.secondFeature}</h3>
              </div> 
            </div>
          </div>

          <div className="aboutFeaturesContainer" style={{color:"#ffffff", borderRadius:"5px",  display:"flex"}}>
            <div className="aboutFeaturesContainer1" style={{color:"#ffffff", borderRadius:"5px",  display:"flex", alignItems:"center"}}>
              <div>
                <img className="aboutFeature1img"  src={props.thirdIcon} alt="plusstar" style={{alignSelf:"center", borderRadius:"50%"}}/>
              </div>
              <div>
                <h3 className="aboutFeature1">{props.thirdFeature}</h3>
              </div> 
            </div>

            <div className="aboutFeaturesContainer2" style={{color:"#ffffff", borderRadius:"5px", display:"flex", alignItems:"center"}}>
              <div>
                <img className="aboutFeature2img" src={props.fourthIcon} alt="plusstar" style={{alignSelf:"center", borderRadius:"50%"}}/>
              </div>
              <div>
                <h3 className="aboutFeature2">{props.fourthFeature}</h3>
              </div> 
            </div>
          </div>



          <div className="aboutBtnContainer" style={{color:"#ffffff"}}>
            <button className="btn aboutBtn" type="button" style={{color:"#ffffff"}}><p className="aboutBtnText">Learn more<img className="aboutArrow" src="white_arrow.png" alt="arrow" style={{color:"red"}}/></p></button>
          </div>


        </div>
      </div>

      <div className="container" style={{backgroundColor:"transparent"}}>
        <div className="aboutcontainer2" style={{padding:"0"}}>
          <img src={props.aboutImage} className="aboutcontainer2img" alt="futurenselife4"/>  
        </div>
      </div>



    </div>
  </div>
  </>
  )
}

export default AboutFourth