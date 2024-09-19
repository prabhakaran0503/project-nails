import React from "react"
import './Best-Sellers.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Best_Sellers=(props)=>{

    const{trendingData} = props


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
        <div className="Best-Sellers-sec">
            <div className="Best-sellere-contaner">
                <div className="Best-Sellers-contaner-content1">
                    <div className='Best-sellere-row'>
                        <Slider {...settings} > 
                            {trendingData.map((data)=>{
                            // console.log(e.name)
                            return(
                            <div className="Best-sellere-col-1">
                                <div className="Best-sellere-content">
                                    <img src={data.img} />
                                    <h2>{data.name}</h2>  
                                    <button>Choose Design</button>
                                </div>
                            </div>
                            )
                        })}
                        </Slider>
                    </div>


                    <div className='Best-sellere-row1'>
                        <Slider {...settingss} > 
                            {trendingData.map((data)=>{
                            // console.log(e.name)
                            return(
                            <div className="Best-sellere-col-2">
                                <div className="Best-sellere-content-1">
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
                <div className="Best-Sellers-contaner-content2">
                    <p id="Best-Sellers-header"> Best Sellers</p>
                    <h1>Unleash your cosmic side with celestial themed nail art</h1>
                    <p>Embrace the beauty of the stars, moons, and galaxies through shimmering metallic hues, celestial motifs, and celestial accents. These designs are perfect for adding a touch of magic to your nails.</p>
                </div>
            </div>
        </div>
    )
}

export default Best_Sellers