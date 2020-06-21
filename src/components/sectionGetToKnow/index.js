import React from 'react';
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const GetToKnowSection = () => {
    
  const data = useStaticQuery( graphql`  
query {
 image1: file(relativePath: { eq: "group-18.png" }) {
    childImageSharp {
    
      fixed(width: 200) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  image2: file(relativePath: { eq: "group-17.png" }) {
    childImageSharp {
    
      fixed(width: 200) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  image3: file(relativePath: { eq: "group-15.png" }) {
    childImageSharp {
    
      fixed(width: 200) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  image4: file(relativePath: { eq: "arrow.png" }) {
    childImageSharp {
    
      fixed(width: 200) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  image5: file(relativePath: { eq: "arrow-copy.png" }) {
    childImageSharp {
    
      fixed(width: 200) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`)
     return (
        <div className="bg-second-container">
          <div>
          <h1 className="second-container-heading">
          Get to know  
            <span className="colored-tittle" style={{marginLeft:"10px"}}>
              SAFE IDENTITY
            </span>
        </h1>
          </div>
       
        <div className="get-to-know-conatiner">
          <div className="get-to-know-section">
          <Img fixed={data.image1.childImageSharp.fixed} />
            <span className="arrow">
            <Img fixed={data.image4.childImageSharp.fixed} />

            </span>
            
            <h4 className ="get-to-know-section-tittle">How can you benefit from SAFE Identity? </h4>
            <p className="get-to-know-section-parag">Who is SAFE Identity for – and how can it make trust easier for you?</p>
            <a className="read-more"> START HERE > </a>
          </div>
          <div className="get-to-know-section" style={{paddingTop:"73px"}}>
          <Img fixed={data.image2.childImageSharp.fixed} />
            <span className="arrow2">
            <Img fixed={data.image5.childImageSharp.fixed} className="arrow-resize"/>

            </span>
            <h4 className ="get-to-know-section-tittle">Rely on Safe</h4>
            <p className="get-to-know-section-parag">Root your trust in the SAFE Identity ecosystem.
               Get the answers you need. </p>
            <a className="read-more">GET THE ANSWERS ></a>
          </div>
          <div className="get-to-know-section" style={{paddingTop:"128px"}}>
          <Img fixed={data.image3.childImageSharp.fixed} />
            <h4 className ="get-to-know-section-tittle">Become a Part of the SAFE Identity Ecosystem. </h4>
            <p className="get-to-know-section-parag">Find out why you should join us.</p>
            <a className="read-more"> WHY JOIN SAFE ></a>
          </div>

        </div>

           
          <Carousel className="carousel-get-to-know">
            <Carousel.Item>
            <div className="get-to-know-section">
              <Img fixed={data.image1.childImageSharp.fixed} />
              <h4 className ="get-to-know-section-tittle">HOW CAN YOU BENEFIT FROM SAFE IDENTITY?</h4>
              <p className="get-to-know-section-parag">Who is SAFE Identity for – and how can it make trust easier for you?</p>
              <a className="read-more"> START HERE > </a>
            </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="get-to-know-section">
                <Img fixed={data.image2.childImageSharp.fixed} />
            <h4 className ="get-to-know-section-tittle">RELY ON SAFE</h4>
            <p className="get-to-know-section-parag">Root your trust in the SAFE Identity ecosystem. Get the answers you need.</p>
            <a className="read-more">GET THE ANSWERS ></a>
              </div> 
            </Carousel.Item>
            <Carousel.Item>
            <div className="get-to-know-section">
          <Img fixed={data.image3.childImageSharp.fixed} />
            <h4 className ="get-to-know-section-tittle">BECOME A PART OF THE SAFE IDENTITY ECOSYSTEM.</h4>
            <p className="get-to-know-section-parag">Find out why you should join us.</p>
            <a className="read-more"> WHY JOIN SAFE ></a>
          </div>
            </Carousel.Item>
            
</Carousel> 
        </div> 

    )
  
}

export default GetToKnowSection;


