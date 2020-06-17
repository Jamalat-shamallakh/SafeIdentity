import React from 'react'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby";
import './style.css'
export default function Index() {
    const data = useStaticQuery(graphql`
    query {
        image1:  file(relativePath: { eq: "group-13.jpg" }) {
            childImageSharp {
            
              fixed(width: 400) {
                ...GatsbyImageSharpFixed
              }
            }
          }
         image2: file(relativePath: { eq: "group-2.png" }) {
              childImageSharp {
              
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
        }`
    )
    return (
        <div className="bg-first-container">
        <div className="first-section">
          <h1 className ="first-section-tittle"> 
                    Making Digital 
              <span className="colored-tittle">
              Identity SAFE
              </span>
              <span className="dot-img">
              <Img fixed={data.image2.childImageSharp.fixed} />
              </span>
          </h1>
          <p className="title-parg">SAFE indentity is an industry consortium and standards organization that provides an ecosystem for indentity assurance in the healthcare sector to enable trust, security and user convenience
          </p>
        </div>
        <div className="background-responsive-img">
        <Img fixed={data.image1.childImageSharp.fixed} />
        </div>
        <div className="second-section">
          <h1 className ="first-section-tittle"> 
               WHAT IS 
              <span className="colored-tittle">
              SAFE
              </span>
              <span  className="dot-img">
              <Img fixed={data.image2.childImageSharp.fixed} />
              </span>
          </h1>
          <p className="title-parg">
          Sensitive healthcare data requires high levels of security and assurance - but the integrity and confidence of digital credentials vary widely across the health industry.
          </p>
          <p className="title-parg">
          SAFE Identity ensures that digital identities issued by a provider can be trusted throughout the entire SAFE Identity community. With an ecosystem of certified, tested and interoperable application solutions for digital signatures, authentication, encryption and identity verification, SAFE Identity facilitates trust and security between different credential issuers and relying parties.
          </p>
          <a className="learn-more-button" >LEARN MORE</a>
        </div>
        <div>
  
        </div>
        </div>
    )
}