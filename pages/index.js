import React  from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google' 

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

import HeroBanner from '../component/Home/HeroBanner'
import TrustedBusiness from '../component/Home/TrustedBusiness'
import Startup from '../component/Home/Startup'
import Partner from '../component/Home/Partner'
import BusinessRisk from '../component/Home/Risk'
import BusinessInsurance from '../component/Home/BusinessInsurance'
import HowDo from '../component/Home/HowDo'
import IndustryList from '../component/Home/IndustryList'
// import CompaniesReview from '../component/Home/CompaniesReview'
import CompaniesReview from '../component/Product/Review'
import BestBacked from '../component/Home/BestBacked'
import RecentActivity from '../component/Home/RecentActivity'
import HowGetStarted from '../component/Home/HowGetStarted'
import FaqQuestions from '../component/Home/FaqQuestions'
//import Questions from '../component/Home/Questions'
import { useEffect } from 'react'


export default function Home() {

  // let homeBody = document.querySelector("body").classList.add("homePage")
  useEffect(() => {
    // document.body.classList.add = "homePage";
    document.body.classList.add("homePageBody")
  },[]);

  return (
    <>
      <Navbar />
      <Head>
        <title>Bimakavach | Home</title>
        <meta name="description" content="BimaKavach" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main>
          <div className=''>
            <HeroBanner 
              title="Business Insurance"
              subtitle="in Minutes"
              description="Quick questions. Instant quotes. Top insurers."
            />
            <TrustedBusiness />
            {/* <Startup id="PRODUCT" /> */}
            <Partner />
            <BusinessRisk />
            <BusinessInsurance />
            <HowDo />
            {/* <IndustryList /> */}            
            <CompaniesReview customClass="homeReview"/>                
            <FaqQuestions />
            {/* <Questions />   */}           
            <BestBacked />                
            <HowGetStarted />    
            <RecentActivity />
          </div>
      </main>
      <Footer />
    </>
  )
}
