import React from 'react'
import Icon from '../../assets/white-logo.svg';
import './style.css'
export default function index() {
    return (
        <div className="footer">
            <div className="footer-first-section">
                <Icon  className="white-logo"/>
                <div className="footer-first-section-links-container">
                <h6  style={{fontFamily:"Montserrat"}}> SAFE IDENTITY</h6> 
                    <a href="#" className="footer-first-section-link">What Is SAFE Identity?</a>
                    <a href="#"  className="footer-first-section-link">Qualified Products List</a>
                    <a href="#"  className="footer-first-section-link">Join the Ecosystem</a>
                    <a href="#"  className="footer-first-section-link">Buy a SAFE Certified Credential</a>
                </div>
                <div className="footer-first-section-links-container">
                <h6  style={{fontFamily:"Montserrat"}}> GET INVOLVED</h6>
                    <a href="#" className="footer-first-section-link">Benefits of SAFE</a>
                    <a href="#"  className="footer-first-section-link">Rely on the SAFE Trust Framework</a>
                    <a href="#"  className="footer-first-section-link">Get SAFE Certified Credentials</a>
                    <a href="#"  className="footer-first-section-link">Certify a Technical Solution</a>
                    <a href="#"  className="footer-first-section-link">Become a Bridge Member</a>
                </div>
                <div className="footer-first-section-links-container">
                <h6 style={{fontFamily:"Montserrat"}}>WHAT WE PROVIDE</h6> 
                    <a href="#" className="footer-first-section-link">Trust Framework</a>
                    <a href="#"  className="footer-first-section-link">SAFE Identity Bridge CA</a>
                    <a href="#"  className="footer-first-section-link">Policy Management Authority</a>
                    <a href="#"  className="footer-first-section-link">The SAFE Identity QPL</a>
                    <a href="#"  className="footer-first-section-link">SAFE Global Encryption Directory</a>
                </div>
            </div>
            <div className="footer-second-section">
                <div className="footer-second-section-copy-right">
                © 2010 - 2020 All copy rights reserved for SAFE Identity LLC 
                </div>
                <div className="footer-second-section-links">
                    <a href="#">Privacy Statement</a>
                    <span>|</span>
                    <a href="#"> Terms of Use</a>
                </div>
            </div>
            
        </div>
    )
}
