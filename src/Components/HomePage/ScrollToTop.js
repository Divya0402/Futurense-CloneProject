import React, {useState, useEffect} from "react";
import {FaAngleUp} from "react-icons/fa";
import "./HomePage.css";

const scrollToTop = () => {

  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  useEffect(() =>{
    window.addEventListener('scroll', () =>{
      if (Window.screenY > 300) {
        setShowScrollToTopButton(true);
      } else {
        setShowScrollToTopButton(false);
      }
    })
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <div>
      {
        showScrollToTopButton && <FaAngleUp className="bottomToTopBtn" onClick={scrollTop}/>
      }
    </div>
    </>
  )
}

export default scrollToTop;