import React from "react";
import './Trending.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Trending=(props)=>{

    const{trendingData} = props

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      const settingss = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div className='trending-sec'>
            <div className='trending-container'>
              <div className="trending-head">
                  <h1>What’s Trending?</h1>
                  <p>Discover the latest designs to glam up your nails</p>              
              </div>
                <div className='trending-row'>
                  <Slider {...settings} > 
                    {trendingData.map((data)=>{
                      // console.log(e.name)
                    return(
                      <div className="trending-col-1">
                        <div className="trending-content">
                          <img src={data.img} />
                          <h2>{data.name}</h2>  
                          <button>Choose Design</button>
                        </div>
                     </div>
                    )
                  })}
                 </Slider>
               </div>


               <div className='trending-row1'>
                  <Slider {...settingss} > 
                    {trendingData.map((data)=>{
                      // console.log(e.name)
                    return(
                      <div className="trending-col-2">
                        <div className="trending-content-1">
                          <img src={data.img} />
                          <h2>{data.name}</h2>  
                          <button>Choose Design</button>
                        </div>
                     </div>
                    )
                  })}
                 </Slider>
               </div>
            </div>
          </div>
    )

}
export default Trending