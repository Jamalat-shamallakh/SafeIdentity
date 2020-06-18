import React from 'react';
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby";
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css'

export default function Index() {
    const data = useStaticQuery( graphql`  
  query {
   image1: file(relativePath: { eq: "1110.jpg" }) {
      childImageSharp {
      
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "1110-copy.jpg" }) {
      childImageSharp {
      
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "1110-copy-2.jpg" }) {
      childImageSharp {
      
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
    
  }
  `)
    return (
        <div className="read-more-carousel">
            <h1 style={{marginBottom:"2rem"}}>
            Read More 
                <span className="colored-tittle" style={{marginLeft:"10px"}}>
                About SAFE
                </span>
            </h1>
                <Carousel  >
                    <Carousel.Item>
                      <div className="read-more-item">
                          <div className="img-container">
                             <Img fluid= {data.image1.childImageSharp.fluid} />
                          </div>
                         <h5>
                          SAFE Identity Announces Revamped SAFE-Biopharma Trust Framework
                          </h5>
						<p>and New Services to Expand and Evolve Digital Trust in Healthcare Sector.</p>
                        <div>
                            <a className="read-more">READ MORE</a>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="read-more-item">
                    <div className="img-container">
                             <Img fluid= {data.image2.childImageSharp.fluid} />
                          </div>
                         <h5>
                         What is SAFE Identity?
                          </h5>
						<p>SAFE Identity is an industry consortium and certification body supporting identity assurance and cryptography in healthcare to enable trust, and security</p>
                        <div>
                            <a className="read-more">READ MORE</a>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="read-more-item">
                    <div className="img-container">
                             <Img fluid= {data.image3.childImageSharp.fluid} />
                          </div>
                         <h5>
                         Bettering Healthcare Through Digital Patient Identification
                          </h5>
						<p>It is a marvel of the modern, interconnected age that all of our medical data is now on one network</p>
                        <div>
                            <a className="read-more">READ MORE</a>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="read-more-item">
                    <div className="img-container">
                             <Img fluid= {data.image3.childImageSharp.fluid} />
                          </div>
                         <h5>
                         Bettering Healthcare Through Digital Patient Identification
                          </h5>
						<p>It is a marvel of the modern, interconnected age that all of our medical data is now on one network</p>
                        <div>
                            <a className="read-more">READ MORE</a>
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
          
        </div>
    )
}
