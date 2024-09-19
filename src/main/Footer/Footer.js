import React from "react";
import './Footer.css'

const Footer=()=>{

    return(
        <>
        <section className="footer-sec">
            <div className="footer-contaner">
                <div className="footer-row">
                    <div className="footer-col1">
                         <div className="footer-col1-img">
                            <img src='https://nailsnbeyond.in/wp-content/uploads/elementor/thumbs/newmainlogo-ql5cqnudspppls20y8gkdqhnv3j0qurqj374qe7s3k.webp' alt='loading'/>    
                        </div> 
                        <div className="footer-col1-icons">
                            <div className='footer-col1-icon'>
                                <i class="bi bi-facebook"></i>    
                            </div> 
                            <div className='footer-col1-icon'>
                                <i class="bi bi-instagram"></i>    
                            </div>    
                        </div>  
                    </div>
                    <div className="footer-col2">
                        <p>Site Links</p>
                        <div className="footer-col2-links">
                            <a href="#">About us</a>
                            <a href="#">Services</a>
                            <a href="#">Gallery</a>
                            <a href="#">Franchise</a>
                            <a href="#">Blogs</a>
                            <a href="#">Contact Us</a>
                        </div>
                    </div>
                    <div className="footer-col3">
                        <p id="footer-col3-header">Subscribe For Newsletter</p>
                        <div className="footer-col3-search">
                            <input type="text" placeholder="Email Address"/>
                            <button>SUBSCRIBE</button>
                        </div>
                        <p>By signing and clicking Submit, you affirm that you have read and agree to the Privacy Policy and Terms of Use. and want to receive news</p>
                    </div>
                </div>
            </div>
        </section>
         <div className="footer-row2">
             <p>GROOM INDIA SALON SPA PRIVATE LIMITED</p>
            <p>Privacy Policy | Terms & Conditions</p>
        </div>
       </> 
    )
}

export default Footer