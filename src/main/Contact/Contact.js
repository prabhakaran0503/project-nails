import React from "react"; 
import './Contact.css'


const Contact=()=>{

  return(
    <section className="contact-sec">
        <div className="contact-contaner">
            <div className="contact-row">
                <div className="contact-col1">
                    <h1>Locate Us</h1>
                    <p>GROOM INDIA SALON SPA PRIVATE LIMITED</p>
                    <div className="contact-col1-search">
                     <i class="bi bi-search"></i>
                     <input type="text"  placeholder="Search Tour Store"/>
                    </div>
                    <div className="contact-col1-content">
                        <p>Naturals Signature, Shop No:B1, 27 Express Mall, No:2, Club House Road, Anna Salai, Chennai, Opp zaitoon, Royapettah, Tamil Nadu, Chennai, 600002</p>
                        <a href="https://www.google.com/maps/place/Naturals+Signature+Salon/@13.0587332,80.2607971,17z/data=!3m1!4b1!4m6!3m5!1s0x3a526617a58b9175:0xf22feb933c9ef9a5!8m2!3d13.0587332!4d80.2633774!16s%2Fg%2F124swn2t4?entry=ttu">View On Map</a>
                    </div>
                </div>
                <div className="contact-col2">
                    <h1>Contact Us</h1>
                    <div className="contact-col2-search">
                        <input type="text" placeholder="Name"/><br/>
                        <input type="text" placeholder="Email"/><br/>
                        <input type="text" placeholder="Message"/>
                    </div>
                    <dic className='contact-col2-but'>
                            <button>SUBMIT</button>
                        </dic>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Contact