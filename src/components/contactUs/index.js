import React from 'react'
import './style.css'
export default function index() {
    return (
        <div className="contact-us-section">
            <div className='contact-us-section-display'>
            
            <div className="contact-us-form">
                 <div  className="input-section">
                     <label for="userName"  className="input-section-label">Your Name</label>
                     <input id="userName" placeholder ="Your Name"  className="input-section-input"/>
                 </div>
                 <div className="input-section">
                     <label for="email" className="input-section-label">Your Email</label>
                     <input id="email" placeholder ="Your Email"  className="input-section-input"/>
                 </div> 
                 <textarea placeholder="Message"className="textarea" />
                 
                     <input type="submit" vlaue="SEND MESSAGE" className="send-button" />
             
            </div>
            <div className="contact-us-details">
                <h3 className="contact-us-tittle">
                Get in touch with SAFE Identity <span style={{fontSize: "2.5rem",
                      color: "#f4d35e" ,display:"block"}}>...</span>
                </h3>
                <div className="contact-us-detail">
                <h6 className="contact-us-detail-tittle">Address</h6>
                <p className='contact-us-detail-parag'> 1900 Reston Metro Plaza,<br/>
                Suite 303, Reston, VA 20190</p>
                </div>
            
                <div className="contact-us-detail">
                <h6 className="contact-us-detail-tittle">Email
</h6>
                <p className='contact-us-detail-parag'> info@makeidentitysafe.com</p>
                </div>
                <div className="contact-us-detail">
                <h6 className="contact-us-detail-tittle">Phone
</h6>
                <p className='contact-us-detail-parag'> 703.705.2920</p>
                </div>
                

            </div>   
            </div>
        </div>
    )
}
