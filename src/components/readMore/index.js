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
            <div className="read-more-items">
                      <div className="read-more-item">
                          <div className="img-container">
                              <Img fluid= {data.image1.childImageSharp.fluid} />
                          </div>
                          <h5>
                          Press Release Title SAFE launching something huge today 
                          </h5>
                          <p>provides input and recommendations to the PMA on technical matters associated with the SAFE Identity Bridge including policy updates, operational updates and evaluating new applicants.</p>
                          <div>
                              <a className="bt-read-more">READ MORE ></a>
                          </div>
                      </div>
                      <div className="read-more-item">
                          <div className="img-container">
                              <Img fluid= {data.image2.childImageSharp.fluid} />
                          </div>
                          <h5>
                          Some document title, you can look at if your intersted
                          </h5>
                          <p>goal is to establish procurement guidance and language for interfacing with vendors and partners in a federated environment.</p>
                          <div>
                              <a className="bt-read-more">READ MORE ></a>
                          </div>
                      </div>
                      <div className="read-more-item">
                          <div className="img-container">
                              <Img fluid= {data.image3.childImageSharp.fluid} />
                          </div>
                          <h5>
                          Some other thing happening in the news about SAFE
                          </h5>
                          <p> helps to define desired behavior for document flattening and develop test cases that can be published as an optional certification track on the QPL.</p>
                          <div>
                              <a className="bt-read-more">READ MORE ></a>
                          </div>
                      </div>
            </div>
                <Carousel className="carousel-read-more-items">
                    <Carousel.Item>
                    <div className="read-more-item">
                          <div className="img-container">
                              <Img fluid= {data.image1.childImageSharp.fluid} />
                          </div>
                          <h5>
                          Press Release Title SAFE launching something huge today 
                          </h5>
                          <p>provides input and recommendations to the PMA on technical matters associated with the SAFE Identity Bridge including policy updates, operational updates and evaluating new applicants.</p>
                          <div>
                              <a className="bt-read-more">READ MORE ></a>
                          </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="read-more-item">
                          <div className="img-container">
                              <Img fluid= {data.image2.childImageSharp.fluid} />
                          </div>
                          <h5>
                          Some document title, you can look at if your intersted
                          </h5>
                          <p>goal is to establish procurement guidance and language for interfacing with vendors and partners in a federated environment.</p>
                          <div>
                              <a className="bt-read-more">READ MORE ></a>
                          </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="read-more-item">
                          <div className="img-container">
                              <Img fluid= {data.image3.childImageSharp.fluid} />
                          </div>
                          <h5>
                          Some other thing happening in the news about SAFE
                          </h5>
                          <p> helps to define desired behavior for document flattening and develop test cases that can be published as an optional certification track on the QPL.</p>
                          <div>
                              <a className="bt-read-more">READ MORE ></a>
                          </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
          
        </div>
    )
}
