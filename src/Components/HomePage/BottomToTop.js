import React, {useEffect, useState} from "react";


const BottomToTop = () => {

  const [isVisible, setisVisible] = useState(false);

  const handleBottomToTopClick = () => {
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  };

  const listenToScroll = () => {
    let hiddenHeight = 350;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > hiddenHeight) {
      setisVisible(true);
    } else {
      setisVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return(
    <>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      {isVisible && (
        <div className="bottomToTopBtn" onClick={handleBottomToTopClick}>
          <i className="fa-solid fa-angle-up bottomToTopIcon"></i>
        </div>
      )}
    </div>
    </>
  );
};

export default BottomToTop;