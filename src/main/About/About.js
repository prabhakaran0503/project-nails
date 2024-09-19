import React from "react";
import './About.css'



const About=()=>{

  return(
    <div className="about-sec">
              <div className="about-contaner">
                  <div className="about-row">
                      <div className="about-col-1">
                          <img src="../imgs/about-1.jpg" id="about-img1" alt="..."/>
                          <div id="about-div1"></div>
                          
                          <div id="about-div2"></div>
                          <img src="../imgs/girl-eyes.jpg" id="about-img2" alt="..."/>
                      </div>  
                      <div className="about-col2">
                            <p id="about-content">About us</p>
                            <h1>Discover the passion behind our</h1>
                            <h1>artistic nail designs!</h1>
                            <p id="about-content-2">Nails’n Beyond was founded by a team of experienced nail artists who saw the<br/>
                            need for high-quality, affordable nail artistry services</p>

                            <button>Know More</button>
                      </div>
                  </div>  
              </div>  
          </div>
  )

}


export default About