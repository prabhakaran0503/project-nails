import React from "react";
import './Services.css'


const Services=()=>{

    return(
        <div className="services-sec">
             <div className="services-contaner">
                  <h1>Services We Offer</h1>
                  <div className="services-para">
                      <p>We offer a variety of nail artistry and styling services that will<br/>
                          help you to express your creativity and flaunt your style</p>
                  </div>
                  
                <div className="services-row" >
                    <div className="services-card">
                         <h1>Nails</h1>
                         <img src="../imgs/services-nails.jpg"  />
                    </div>  
                    <div className="services-card">
                         <h1>Eye Lashes</h1>
                         <img src="../imgs/services-eyes-1.jpg"  />
                    </div>
                    <div className="services-card">
                         <h1>Eye Brows</h1>
                         <img src="../imgs/services-eyes.jpg"  />
                    </div>
                    
                </div> 
                  
                  <div className="services-emty-content">
                  <button>Our Services</button>
                  </div>
            </div>  
           
             
          </div> 
    )
}

export default Services