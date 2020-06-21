import React from 'react'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
export default function Index() {
    
  const data = useStaticQuery( graphql`  
  query {
   image1: file(relativePath: { eq: "group-10.png" }) {
      childImageSharp {
      
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image2: file(relativePath: { eq: "group-5.png" }) {
      childImageSharp {
      
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image3: file(relativePath: { eq: "group-22.png" }) {
      childImageSharp {
      
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image4: file(relativePath: { eq: "group-2.png" }) {
      childImageSharp {
      
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  
  }
  `)
    return (
        <div className="provide-conatiner">
           <h1 className="second-container-heading">
                What We 
                <span className="colored-tittle" style={{marginLeft:"10px"}}>
                Provide
                </span>
           </h1>
           <div className="provide-sections">
               <div className="provide-section">
                <Img fixed= {data.image1.childImageSharp.fixed} />
                <h3 className="provide-section-tittle">
                The Trust Framework 
                <span  style={{display:"block"}}>
                <Img fixed= {data.image4.childImageSharp.fixed} />
                </span>   
                </h3>
                <p className="provide-section-parag">
                Using our in-house lab, we test products available around the world for adherence to industry standards that define proper handling and interoperability of digital identity software products. Our testing allows enterprises to support multiple identity providers and enables digital identities to function across various applications.
                </p>
                <div className="provide-bt-container">
                    <a href="#" className="provide-bt">READ MORE</a>
                </div>
               </div>
               <div className="provide-section">
                <Img fixed= {data.image2.childImageSharp.fixed} />
                <h3 className="provide-section-tittle">
                The SAFE Identity QPL 
                <span  style={{display:"block"}}>
                <Img fixed= {data.image4.childImageSharp.fixed} />
                </span>   
                </h3>
                <p className="provide-section-parag">
                Our Trust Framework facilitates trust by providing a combination of policies and services for digital signatures, authentication, federation and encryption that are implemented by our certified product and service providers. The Trust Framework defines the standards and test use cases that form the backbone of the SAFE Identity ecosystem.
                </p>
                <div className="provide-bt-container">
                    <a href="#"  className="provide-bt">READ MORE</a>
                </div>
               </div>
               <div className="provide-section">
                <Img fixed= {data.image3.childImageSharp.fixed} />
                <h3 className="provide-section-tittle">
                SAFE Global Encryption Directory 
                <span  style={{display:"block"}}>
                <Img fixed= {data.image4.childImageSharp.fixed} />
                </span>   
                </h3>
                <p className="provide-section-parag">
                SGED is a central repository of all SAFE Certified Certificates that seamlessly integrates with Outlook. Senders can choose the most current and valid recipient certificate when sending encrypted emails, inside and outside their enterprise. SGED automatically updates when new certificates are issued by a SAFE Bridge CA Member.
                </p>
                <div className="provide-bt-container">
                    <a href="#" className="provide-bt">READ MORE</a>
                </div>
               </div>
           </div>
            <Carousel className="provid-carousel"
            >
                <Carousel.Item >
                <div className="provide-section">
                <Img fixed= {data.image2.childImageSharp.fixed} />
                <h3 className="provide-section-tittle">
                The SAFE Identity QPL 
                <span  style={{display:"block"}}>
                <Img fixed= {data.image4.childImageSharp.fixed} />
                </span>   
                </h3>
                <p className="provide-section-parag">
                Our Trust Framework facilitates trust by providing a combination of policies and services for digital signatures, authentication, federation and encryption that are implemented by our certified product and service providers. The Trust Framework defines the standards and test use cases that form the backbone of the SAFE Identity ecosystem.
                </p>
                <div className="provide-bt-container">
                    <a href="#" className="provide-bt">READ MORE</a>
                </div>
                </div>
                </Carousel.Item>
                <Carousel.Item >
                <div className="provide-section">
                <Img fixed= {data.image3.childImageSharp.fixed} />
                <h3 className="provide-section-tittle">
                SAFE Global Encryption Directory 
                <span  style={{display:"block"}}>
                <Img fixed= {data.image4.childImageSharp.fixed} />
                </span>   
                </h3>
                <p className="provide-section-parag">
                SGED is a central repository of all SAFE Certified Certificates that seamlessly integrates with Outlook. Senders can choose the most current and valid recipient certificate when sending encrypted emails, inside and outside their enterprise. SGED automatically updates when new certificates are issued by a SAFE Bridge CA Member.
                </p>
                <div className="provide-bt-container">
                    <a href="#" className="provide-bt">READ MORE</a>
                </div>
                </div>
                </Carousel.Item>
                <Carousel.Item >
                <div className="provide-section">
                <Img fixed= {data.image3.childImageSharp.fixed} />
                <h3 className="provide-section-tittle">
                SAFE Global Encryption Directory 
                <span  style={{display:"block"}}>
                <Img fixed= {data.image4.childImageSharp.fixed} />
                </span>   
                </h3>
                <p className="provide-section-parag">
                SGED is a central repository of all SAFE Certified Certificates that seamlessly integrates with Outlook. Senders can choose the most current and valid recipient certificate when sending encrypted emails, inside and outside their enterprise. SGED automatically updates when new certificates are issued by a SAFE Bridge CA Member.
                </p>
                <div className="provide-bt-container">
                    <a href="#" className="provide-bt">READ MORE</a>
                </div>
                </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
