import React, { useContext } from "react";
import "./Projects.css";
// import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import headphoneZone from "../../img/headphoneZone.png";
import spotify from "../../img/spotify.png";
import unacademy from "../../img/unacademy.png";
import weatherApp from "../../img/weatherApp.png";
import grocery from "../../img/grocery.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="project" id="projects">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>project</span>

      
    
      <div className="project-slider">
       
        <div className="project-items">
        <img src={spotify} alt=""  className="demo-image"/>
          <br />
          <br />
          
          <span style={{color:"orange"}}>Spotify</span>
          <br />
          <br />
          <div className="features">
            <span style={{color: darkMode?'white': ''}}> Summary-</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}>  
              Spotify is a proprietary Swedish audio streaming and media services provider . 
              It is one of the largest music streaming service providers, with over 422 million monthly active users. 
            </span>
            <br />
            <br />

          </div>
          <div className="features">
            <span style={{color: darkMode?'white': ''}}> Features -</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Social Sign-in/Sign-up</span>
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Add and Delete Playlist Functionality</span>
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Search Functionality</span>       
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Listening Music </span><br />
          </div>
          <div className="tech-stack">
            <span style={{color: darkMode?'white': ''}}> Tech Stack Used -</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}> 	HTML</span> |
            <span style={{color:"gray", fontSize:".8rem"}}> 	CSS</span> |
            <span style={{color:"gray", fontSize:".8rem"}}> 	JavaScript</span> |
            <span style={{color:"gray", fontSize:".8rem"}}> 	JSON</span><br /><br />
          </div>
          <div className="buttons">
            <a href='https://spotify-webapp-clone.netlify.app/' target="blank"><button className="c-button" >Live</button></a>
            <a href='https://github.com/deepaksahu3698/Spotify_webapp_Clone' target="blank"><button className="c-button" > Code</button></a>
          </div>
          
        </div>
        <div className="project-items">
        <img src={unacademy} alt=""  className="demo-image"/>
          <br />
          <br />
          
          <span style={{color:"orange"}}>Unacademy</span>
          <br />
          <br />
          <div className="features">
            <span style={{color: darkMode?'white': ''}}> Summary-</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}>  
              Unacademy is an online platform that makes both learning and teaching easy with its educational videos and lectures. 
              Initially, it was founded in the year 2010 with videos streaming on YouTube. but it officially got launched in the year 2015.            
            </span>
            <br />
          </div>
          <div className="features">
            <span style={{color: darkMode?'white': ''}}> Features -</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Social Sign-in/Sign-up </span>
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Payment</span>
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Purchase a couse</span><br /><br />
          </div>
          <div className="tech-stack">
            <span style={{color: darkMode?'white': ''}}> Tech Stack Used -</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}> 	HTML</span> |
            <span style={{color:"gray", fontSize:".8rem"}}> 	CSS</span> |
            <span style={{color:"gray", fontSize:".8rem"}}> 	JavaScript</span> |
            <span style={{color:"gray", fontSize:".8rem"}}> 	React</span><br /><br />
          </div>
          <div className="buttons">
            <a href='https://unacademy-explore-clone.netlify.app/' target="blank"><button className="c-button" >Live</button></a>
            {/* <a href='/' onClick={()=>{alert("There is some issue on the server side of this project. I am working on it.")}}><button className="c-button" >Live</button></a> */}
            <a href='https://github.com/Irshad-1/unacademy-clone.git' target="blank"><button className="c-button" >Code</button></a>
          </div>
          
        </div>
        <div className="project-items">
        <img src={headphoneZone} alt="" className="demo-image" />
          <br />
          <br />
          
          <span style={{color:"orange"}}>Headphone Zone</span>
          <br />
          <br />
          <div className="features">
            <span style={{color: darkMode?'white': ''}}> Summary-</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}>  
              A young company of music lovers, for music lovers. Let’s help you find your dream gear. 
              Curated products. 250,000+ happy customers. 70+ brands. Express shipping. Easy returns. 
              We're Customer Obsessed.
            </span>
            <br />
          </div>
          <div className="features">
            <span style={{color: darkMode?'white': ''}}> Features -</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Social Sign-in/Sign-up</span>
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Add to Cart Functionality</span>
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Increase and Decrease Functionality for products</span><br /><br />
          </div>
          <div className="tech-stack">
            <span style={{color: darkMode?'white': ''}}> Tech Stack Used -</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}> 	HTML</span> |
            <span style={{color:"gray", fontSize:".8rem"}}> 	CSS</span> |
            <span style={{color:"gray", fontSize:".8rem"}}> 	JavaScript</span><br /><br />
          </div>

          <div className="buttons">
            <a href='https://unique-sprite-5a80fe.netlify.app/' target="blank"><button className="c-button" >Live</button></a>
            <a href='https://github.com/rgoyal0001/Headphone-Zone-Clone' target="blank"><button className="c-button" >Code</button></a>
          </div>
          
        </div>
        <div className="project-items">
        <img src={weatherApp} alt="" className="demo-image" />
          <br />
          <br />
          
          <span style={{color:"orange"}}>Weather App</span>
          <br />
          <br />
          <div className="features">
            <span style={{color: darkMode?'white': ''}}> Summary-</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}>  
              This is a simple project to check Weather report of a city.
              You can check weather as well as location of a city that you want to know.
              This is build by using simply using HTML, CSS and JavaScript.
            </span>
            <br />
          </div>
          <div className="features">
            <span style={{color: darkMode?'white': ''}}> Features -</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Check Weather Report</span>
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Find Location </span>
          </div>
          <br />
          <div className="tech-stack">
            <span style={{color: darkMode?'white': ''}}> Tech Stack Used -</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}> 	HTML</span> |
            <span style={{color:"gray", fontSize:".8rem"}}> 	CSS</span> |
            <span style={{color:"gray", fontSize:".8rem"}}> 	JavaScript</span><br /><br />
          </div>

          <div className="buttons">
            <a href='https://weather-app-rgoyal0001.netlify.app/' target="blank"><button className="c-button" >Live</button></a>
            <a href='https://github.com/rgoyal0001/weather-app' target="blank"><button className="c-button" >Code</button></a>
          </div>
          <br />
          
        </div>
        <div className="project-items">
        <img src={grocery} alt="" className="demo-image" />
          <br />
          <br />
          
          <span style={{color:"orange"}}>Grocery App</span>
          <br />
          <br />
          <div className="features">
            <span style={{color: darkMode?'white': ''}}> Summary-</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}>  
              This is a simple single page project to add and remove your grocery items in a list.
               This is build by using HTML, CSS, JavaScript and React.
            </span>
            <br />
            <br/>
          </div>
          <div className="features">
            <span style={{color: darkMode?'white': ''}}> Features -</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Add New Items</span>
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Remove items from the list</span>
          </div>
          <br />
          <div className="tech-stack">
            <span style={{color: darkMode?'white': ''}}> Tech Stack Used -</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}> 	HTML</span> |
            <span style={{color:"gray", fontSize:".8rem"}}> 	CSS</span> |
            <span style={{color:"gray", fontSize:".8rem"}}> 	JavaScript</span> |
            <span style={{color:"gray", fontSize:".8rem"}}> 	React</span> 

            <br /><br />
          </div>

          <div className="buttons">
            <a href='https://gocery-list.netlify.app/' target="blank"><button className="c-button" >Live</button></a>
            <a href='https://github.com/rgoyal0001/grocery-list' target="blank"><button className="c-button" >Code</button></a>
          </div>
          <br />
          
        </div>
      </div>
    </div>
  );
};

export default Portfolio;