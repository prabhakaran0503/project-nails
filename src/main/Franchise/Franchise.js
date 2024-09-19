import React from "react"
import './Franchise.css'


const Franchise=()=>{
   

    return(
        <>
        <section className="Franchise-sec">
            <div className="Franchise-contaner">
                <div className="Franchise-row1">
                    <div className="Franchise-row1-col1">
                        <div className="Franchise-row1-col1-content">
                            <p id="Franchise-row1-col1-content-header">Franchise</p>
                            <h1>Be Part of Our<br/> Franchise Network!</h1>
                            <p id="Franchise-row1-col1-content-para">Join our network of highly successful salons to provide the best, high-quality nail artistry services to customers across the city</p>
                            <div className="Franchise-row1-col1-btn">
                                <button>Read More</button>
                            </div>    
                        </div>
                    </div>
                    <div className="Franchise-row1-col2">
                         <img src="https://nailsnbeyond.in/wp-content/uploads/2024/03/nailFranchise.webp"  alt="..."/>
                    </div>
                </div>
             </div>
             <div className="Franchise-contaner2">
             <div className="Franchise-row2">
                    <div className="Franchise-row2-col1">
                        <img src="../imgs/franchise-img1.jpg" />
                    </div>
                    <div className="Franchise-row2-col2">
                         <img src="https://nailsnbeyond.in/wp-content/uploads/2024/03/rectangle1-1.webp" alt="..."/>
                    </div>
                    <div className="Franchise-row2-col3">
                        <h1>Our Portfolio</h1>
                        <p>Take a look at some of our best works</p>
                        <button>View Gallery</button>
                    </div>
                    <div className="Franchise-row2-col4">
                        <img src="https://nailsnbeyond.in/wp-content/uploads/2024/03/rectangle2.webp" />
                    </div>
                    <div className="Franchise-row2-col5">
                        <img src="../imgs/franchise-img4.jpg" />
                    </div>
                    <div className="Franchise-row2-col6">
                        <img src="https://nailsnbeyond.in/wp-content/uploads/2024/03/rectangle3.webp" />
                    </div>
                    <div className="Franchise-row2-col7">
                         <img src="https://nailsnbeyond.in/wp-content/uploads/2024/03/square3.webp" />
                    </div>
                </div>
             </div>
        </section>

        </>
    )
}

export default Franchise