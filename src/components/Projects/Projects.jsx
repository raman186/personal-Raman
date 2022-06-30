import React, { useContext } from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import headphoneZone from "../../img/headphoneZone.png";
import spotify from "../../img/spotify.png";
// import airbnb from "../../img/airbnb.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="project" id="projects">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>project</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="project-slider"
      >
        <SwiperSlide className="project-items">
          <img src={headphoneZone} alt="" />
          <br />
          <br />
          
          <span style={{color:"orange"}}>Headphone Zone</span>
          <br />
          <br />
          <div className="features">
            <span style={{color: darkMode?'white': ''}}> Features -</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Social Sign-in/Sign-up</span>
            <span style={{color:"gray", fontSize:".8rem"}}>●	Add to Cart Functionality</span>
            <span style={{color:"gray", fontSize:".8rem"}}>●	Increase and Decrease Functionality for products</span><br /><br />

          </div>

          <a href='https://unique-sprite-5a80fe.netlify.app/' target="blank"><button className="c-button" >Check it</button></a>
        </SwiperSlide>
        <SwiperSlide className="project-items">
          <img src={spotify} alt="" />
          <br />
          <br />
          
          <span style={{color:"orange"}}>Spotify</span>
          <br />
          <br />
          <div className="features">
            <span style={{color: darkMode?'white': ''}}> Features -</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Social Sign-in/Sign-up</span>
            <span style={{color:"gray", fontSize:".8rem"}}>●	Add and Delete Playlist Functionality</span>
            <span style={{color:"gray", fontSize:".8rem"}}>●	Search Functionality</span>       
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Listening Music </span><br />

          </div>

          <a href='https://rgoyal0001.github.io/Spotify_Clone/' target="blank"><button className="c-button" >Check it</button></a>
        </SwiperSlide>
         {/* <SwiperSlide className="project">
          <img src={airbnb} alt="" />
          <br />
          <br />
          
          <span style={{color:"orange"}}>Airbnb </span>
          <br />
          <br />
          <a href='https://www.airbnb.co.in/'><button className="c-button" >Check it</button></a>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
