import React from "react";
import './home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Trending from "../Trending/Trending";
import About from "../About/About";
import Services from "../Services/Services";
import Franchise from "../Franchise/Franchise";
import Best_Sellers from "../Best-Sellers/Best-Sellers"
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";


const Home=(props)=>{

  const{trendingData} = props

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // };
  // const settingss = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
    return(
     
      <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel"  >
             <div className="carousel-inner">
                <div className="carousel-item active" >
                   <img src="../imgs/franchise-img4.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                   <img src="../imgs/img2.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                   <img src="../imgs/img3.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                   <img src="../imgs/about-1.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                   <img src="../imgs/img3.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>

        <div className="home-content">
            <div className="home-corsal-content">
                <h2>Nails That Go Beyond</h2>
                <p>Experience our curated collection of expert nail artistry services to take your nail art game to the next level</p>
                <button>Our Services</button>    
            </div>
        </div>

              <Trending  trendingData={trendingData}/>
              <About/>
              <Services/>
              <Franchise/>
              <Best_Sellers trendingData={trendingData}/>
              <Contact/>
              <Footer/>
      </>
      
 )

                           


}
export default Home