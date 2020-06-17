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
                    Trust is essential for pharma to work with supply chain and third-party vendors, lead virtual clinical trials and comply with FDA – 21 CFR part 11. Leading pharmaceutical companies and the FDA rely on our interoperable and compliant policies to identify and share encrypted information with intended parties.
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
                    We ease the burden of satisfying 21 CFR part 1311 by certifying identity providers who satisfy DEA and federal regulatory requirements for EPCS. We also and support use cases in hospital and laboratory supply chains including health IoT, secure data exchange and physical access to protect patient data.
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
                    Reducing risk and eliminating fraudulent claims with secure patient identities is a critical concern for payers. We simplify the complexity that goes into confirming digital signatures and digital identities for document continuity, data access and telehealth with tested protocols and certified providers
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
                    We define the policies and specifications it takes to properly develop, test and certify that new technologies are secure and interoperable. Healthcare organizations can purchase from SAFE QPL-listed technology providers with assurance that these products have been tested and meet their needs.
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
                    Trust is essential for pharma to work with supply chain and third-party vendors, lead virtual clinical trials and comply with FDA – 21 CFR part 11. Leading pharmaceutical companies and the FDA rely on our interoperable and compliant policies to identify and share encrypted information with intended parties.
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
                    We ease the burden of satisfying 21 CFR part 1311 by certifying identity providers who satisfy DEA and federal regulatory requirements for EPCS. We also and support use cases in hospital and laboratory supply chains including health IoT, secure data exchange and physical access to protect patient data.
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
                    Trust is essential for pharma to work with supply chain and third-party vendors, lead virtual clinical trials and comply with FDA – 21 CFR part 11. Leading pharmaceutical companies and the FDA rely on our interoperable and compliant policies to identify and share encrypted information with intended parties.
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
                    Trust is essential for pharma to work with supply chain and third-party vendors, lead virtual clinical trials and comply with FDA – 21 CFR part 11. Leading pharmaceutical companies and the FDA rely on our interoperable and compliant policies to identify and share encrypted information with intended parties.
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