import React from 'react'
import LinkedIn from '../../assets/combined-shape.svg';
import Tweeter from '../../assets/shape.svg';
import './style.css'
export default function index() {
    return (
        <div className="contact-us-section">
            <div className='contact-us-section-display'>
            
            <div className="contact-us-form">
                 <div  className="input-section">
                     <label for="userName"  className="input-section-label">Your Name</label>
                     <input id="userName" placeholder ="John Doe"  className="input-section-input"/>
                 </div>
                 <div className="input-section">
                     <label for="email" className="input-section-label">Your Email</label>
                     <input id="email" placeholder ="john.doe@mydomian.com"  className="input-section-input"/>
                 </div> 
                 <textarea placeholder="Message"className="textarea" />
                 
                     <input type="submit" vlaue="SEND MESSAGE" className="send-button" />
             
            </div>
            <div className="contact-us-details">
                <h3 className="contact-us-tittle">
                GET IN TOUCH WITH SAFE IDENTITY <span style={{fontSize: "2.5rem",
                      color: "#f4d35e" ,display:"block"}}>...</span>
                </h3>
                <div className="contact-us-detail">
                <h6 className="contact-us-detail-tittle">Address</h6>
                <p className='contact-us-detail-parag'> 1900 Reston Metro Plaza,<br/>
                Suite 303, Reston, VA 20190</p>
                </div>
            
                <div className="contact-us-detail">
                <h6 className="contact-us-detail-tittle">Phone</h6>
                <p className='contact-us-detail-parag'> 703.705.2920</p>
                </div>
                <div className="social-contact">
                <span className="bg-social-contact"><LinkedIn /></span>
                <span className="bg-social-contact"><LinkedIn /></span>
                <span className="bg-social-contact"><Tweeter /></span>
                </div>

            </div>   
            </div>
        </div>
    )
}
