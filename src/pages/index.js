import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import GetToKnowSection from "../components/sectionGetToKnow";
import WhoWeWorkFor from '../components/whoWeWorkFor';
import RelyOn from '../components/relyOn';
import ProvideSection from '../components/provideSection';
import ReadMore from '../components/readMore';
import SafeBiopharma from '../components/safebiopharma';
import ContactUs from '../components/contactUs';
import FirstSection from '../components/firstSection'


const IndexPage=()=>{

     return (
      <Layout>
      <SEO title="Home" />
      <FirstSection />
        <div className="bg-second-conatiner">
        <GetToKnowSection />
        <WhoWeWorkFor />
        </div>
        <RelyOn />
        <ProvideSection />
        <ReadMore />
        <SafeBiopharma />
        <ContactUs />
    </Layout>
     )
   }


export default IndexPage