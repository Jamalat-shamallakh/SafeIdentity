import React from 'react';
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const WhoWeWorkFor = ()=>{
    const data = useStaticQuery(graphql`
    query {
        image1: file(relativePath: { eq: "group-2.png" }) {
           childImageSharp {
           
             fixed(width: 200) {
               ...GatsbyImageSharpFixed
             }
           }
         }
         image2: file(relativePath: { eq: "group-19.jpg" }) {
           childImageSharp {
           
             fixed(width: 250){
               ...GatsbyImageSharpFixed
             }
           }
         }
         image3: file(relativePath: { eq: "group-20.png" }) {
           childImageSharp {
             fixed(width: 250){
               ...GatsbyImageSharpFixed
             }
           }
         }}`
    )
    return(
      <div>
        <div className="who-we-work-container">
             <h1 className="second-container-heading">
             Who We
            <span className="colored-tittle" style={{marginLeft:"10px"}}>
            Work For
            </span>
        </h1>
            <div className="who-we-work-container-first-row">
                <div className=" who-we-work-container-first-row-col col-width dispaly-img">
                  <Img fixed={data.image2.childImageSharp.fixed}/>
                </div>
                <div  className="who-we-work-container-first-row-col  col-width ">
                    <h3 className="font-family">PHARMA INDUSTRY 
                      <span className="dot-display">
                        <Img fixed={data.image1.childImageSharp.fixed}/>
                      </span>
                    </h3>
                    <p className="parag-style" >
                    Maintaining security across the enterprise border is essential for proper stewardship of intellectual property - a critical element of competitive advantage for the pharmaceutical industry. Reliable digital identity and the ability to share encrypted information with intended parties becomes even more essential. Leading pharmaceutical companies and the FDA rely on our work to define interoperable, compliant and legally binding policies that we use to certify identity providers against as part of our Trust Framework.  
                    </p>
                    <div className="read-more-bt-margin">
                    <a className="read-more-bt">
                        Read More
                    </a>
                    </div>
                </div>
                <div className="who-we-work-container-first-row-col col-width "> 
                    <h3 className="font-family">HEALTHCARE PROVIDERS 
                      <span className="dot-display">
                        <Img fixed={data.image1.childImageSharp.fixed}/>
                      </span>
                    </h3>
                    <p className="parag-style" >
                   Satisfying 21 CFR part 1311 is challenging for prescribers who use e-prescriptions for prescribing controlled substances. We ease the burden of satisfying these requirements by certifying identity providers who satisfy DEA and federal regulatory requirements for EPCS. We also support multiple use cases in hospital and laboratory supply chains including health IoT to secure intellectual property and protect patient data.
                    </p>
                    <div className="read-more-bt-margin">
                    <a className="read-more-bt">
                        Read More
                    </a>
                    </div>
                </div>
            </div>
             <div className="who-we-work-container-second-row">
                <div  className="who-we-work-container-second-row-col  col-width ">
                    <h3 className="font-family">HEALTH INSURANCE
 
                      <span className="dot-display">
                        <Img fixed={data.image1.childImageSharp.fixed}/>
                      </span>
                    </h3>
                    <p className="parag-style" >
                    Fraud protection is top of mind for payers. Document continuity and data access are increasingly essential to maintain critical functionality across the insurance landscape. Privacy isn't only for policyholders and payees. We simplify the complexity that typically goes into the confirmation of digital signatures and digital identities with tested protocols and certified providers that make up the SAFE Identity Trust Framework.
                    </p>
                    <div className="read-more-bt-margin">
                    <a className="read-more-bt">
                        Read More
                    </a>
                    </div>
                </div>
                <div className="who-we-work-container-second-row-col col-width "> 
                    <h3 className="font-family">TECHNOLOGY PROVIDERS
                      <span className="dot-display">
                        <Img fixed={data.image1.childImageSharp.fixed}/>
                      </span>
                    </h3>
                    <p className="parag-style" >
                    The SAFE Identity ecosystem depends on technology providers for everything from certified credentials to applications that use them. We define the policies and specifications it takes to properly develop, test and certify new technologies so healthcare organizations can purchase from SAFE QPL-listed technology providers with assurance.
                    </p>
                    <div className="read-more-bt-margin">
                    <a className="read-more-bt">
                        Read More
                    </a>
                    </div>
                </div>
                <div className=" who-we-work-container-first-row-col col-width dispaly-img">
                  <Img fixed={data.image3.childImageSharp.fixed}/>
                </div>
            </div>
           
            <Carousel className="who-we-work-carousel">
            <Carousel.Item>
                 <div  className="who-we-work-container-first-row-col  col-width ">
                    <h3 className="font-family">PHARMA INDUSTRY 
                      <span className="dot-display">
                        <Img fixed={data.image1.childImageSharp.fixed}/>
                      </span>
                    </h3>
                    <p className="parag-style" >
                    Maintaining security across the enterprise border is essential for proper stewardship of intellectual property - a critical element of competitive advantage for the pharmaceutical industry. Reliable digital identity and the ability to share encrypted information with intended parties becomes even more essential. Leading pharmaceutical companies and the FDA rely on our work to define interoperable, compliant and legally binding policies that we use to certify identity providers against as part of our Trust Framework.  
                    </p>
                    <div className="read-more-bt-margin">
                    <a className="read-more-bt">
                        Read More
                    </a>
                    </div>
                </div>
            </Carousel.Item>
            
            <Carousel.Item>
            <div className="who-we-work-container-first-row-col col-width "> 
                    <h3 className="font-family">HEALTHCARE PROVIDERS 
                      <span className="dot-display">
                        <Img fixed={data.image1.childImageSharp.fixed}/>
                      </span>
                    </h3>
                    <p className="parag-style" >
                   Satisfying 21 CFR part 1311 is challenging for prescribers who use e-prescriptions for prescribing controlled substances. We ease the burden of satisfying these requirements by certifying identity providers who satisfy DEA and federal regulatory requirements for EPCS. We also support multiple use cases in hospital and laboratory supply chains including health IoT to secure intellectual property and protect patient data.
                    </p>
                    <div className="read-more-bt-margin">
                    <a className="read-more-bt">
                        Read More
                    </a>
                    </div>
                </div>
             
            </Carousel.Item>
            <Carousel.Item>
            <div  className="who-we-work-container-first-row-col  col-width ">
                    <h3 className="font-family">PHARMA INDUSTRY 
                      <span className="dot-display">
                        <Img fixed={data.image1.childImageSharp.fixed}/>
                      </span>
                    </h3>
                    <p className="parag-style" >
                    Fraud protection is top of mind for payers. Document continuity and data access are increasingly essential to maintain critical functionality across the insurance landscape. Privacy isn't only for policyholders and payees. We simplify the complexity that typically goes into the confirmation of digital signatures and digital identities with tested protocols and certified providers that make up the SAFE Identity Trust Framework.  
                    </p>
                    <div className="read-more-bt-margin">
                    <a className="read-more-bt">
                        Read More
                    </a>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div  className="who-we-work-container-first-row-col  col-width ">
                    <h3 className="font-family">PHARMA INDUSTRY 
                      <span className="dot-display">
                        <Img fixed={data.image1.childImageSharp.fixed}/>
                      </span>
                    </h3>
                    <p className="parag-style" >
                    The SAFE Identity ecosystem depends on technology providers for everything from certified credentials to applications that use them. We define the policies and specifications it takes to properly develop, test and certify new technologies so healthcare organizations can purchase from SAFE QPL-listed technology providers with assurance.
                    </p>
                    <div className="read-more-bt-margin">
                    <a className="read-more-bt">
                        Read More
                    </a>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>  
        </div>
        </div>
    )
}
export default WhoWeWorkFor