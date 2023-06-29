import React,{useEffect} from 'react'
import Image from 'next/image'

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

import TeamCard from '../component/TeamCard'
import BestBacked from '../component/Product/BestBacked'

export default function About() {
    useEffect(() => {
        document.body.classList.add("homePageBody")
      }, []);
    return (
        <>
            <Navbar />
            <div className='infrmtnPage'>
                <div className={`container `}>
                    <div className={`row `}>
                        <div className={`col-md-7 offset-md-1`}>
                            <div className='commnHeading text-start'>
                                <div className='polyBox border-primary bg-blueLight mb-md-4 mb-2 text-primary title-12 text-uppercase font-weight-700'>TERMS & CONDITIONS</div>
                                <div className='title-60 font-secondary mb-md-3 mb-2 text-primary font-weight-700'>BimaKavach Technologies Terms & Conditions</div>
                                <p className='title-22 font-weight-500 text-muted mb-0'>
                                    <span className='me-2'>
                                        <svg width="24" height="24" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.53333 1.03333C8.53333 0.738781 8.29455 0.5 8 0.5C7.70545 0.5 7.46667 0.738781 7.46667 1.03333V7.2124L4.22877 3.97451C4.02049 3.76623 3.68281 3.76623 3.47453 3.97451C3.26625 4.18279 3.26625 4.52047 3.47453 4.72875L6.71244 7.96667H0.533333C0.238782 7.96667 0 8.20545 0 8.5C0 8.79455 0.238782 9.03333 0.533333 9.03333H6.71244L3.47453 12.2712C3.26625 12.4795 3.26625 12.8172 3.47453 13.0255C3.68281 13.2338 4.0205 13.2338 4.22878 13.0255L7.46667 9.7876V15.9667C7.46667 16.2612 7.70545 16.5 8 16.5C8.29455 16.5 8.53333 16.2612 8.53333 15.9667V9.78756L11.7712 13.0255C11.9795 13.2338 12.3172 13.2338 12.5255 13.0255C12.7338 12.8172 12.7338 12.4795 12.5255 12.2712L9.2876 9.03333H15.4667C15.7612 9.03333 16 8.79455 16 8.5C16 8.20545 15.7612 7.96667 15.4667 7.96667H9.2876L12.5255 4.72877C12.7338 4.52049 12.7338 4.1828 12.5255 3.97452C12.3172 3.76624 11.9795 3.76624 11.7712 3.97452L8.53333 7.21244V1.03333Z" fill="#575757" />
                                        </svg>
                                    </span> Last updated: 2022-06-26 viz. June 26, 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`container infrmtnCntntDiv pt-0`}>
                    <div className={`row `}>
                        <div className={`col-md-10 mx-auto`}>
                            <h3 className='title-32 font-secondary font-weight-700 text-black m-0'>Introduction</h3>
                            <hr className='bg-gray mt-2'/>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Welcome to BIMAKAVACH INSURANCE BROKING PRIVATE LIMTED (“Company”, “we”, “our”, “us”)<span className='d-lg-block'></span>These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website located at www.bimakavach.com (together or individually “Service” or “BimaKavach”) operated by BIMAKAVACH INSURANCE BROKING PRIVATE LIMTED.<span className='d-lg-block'></span>Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.<span className='d-lg-block'></span>Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood Agreements, and agree to be bound by them.<span className='d-lg-block'></span>If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at support@bimakavach.com so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.</p>
                            <h3 className='title-32 font-secondary font-weight-700 text-black mt-4'>Communications</h3>
                            <hr className='bg-gray mt-2'/>
                            <p className='title-20 mb-0 text-black font-weight-500 mt-4'>By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at support@bimakavach.com.</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />

            <style jsx scope>
                {`
                    .infrmtnPage {
                        padding: 100px 0;   
                    }
                    .infrmtnPage .commnHeading{
                        padding: 0 0 60px 0;   
                    }
                    
                    @media only screen and (max-width: 1450px) {
                        .infrmtnPage .commnHeading{
                            padding: 100px 0 80px 0;
                        }
                      
                    }
                    @media only screen and (max-width: 992px) {
                        .container-fluid {
                            padding: 0 20px;
                        }
                        .title-60{
                            font-size: 30px;
                            line-height: 36px;
                        }
                        .title-64 {
                            font-size: 30px;
                            line-height: 36px;
                        }
                        .title-32{
                            font-size: 24px;
                            line-height: 32px;
                        }
                        .title-24{
                            font-size: 18px;
                            line-height: 27px;
                        }
                        .title-20{
                            font-size: 16px;
                            line-height: 24px;
                        }
                        .title-21{
                            font-size: 15px;
                            line-height: 23px;
                        }
                        .title-18{
                            font-size: 15px;
                            line-height: 23px;
                        }
                        .title-16{
                            font-size: 12px;
                            line-height: 18px;
                        }


                        
                    }
                    @media (max-width: 575px) {
                        .infrmtnPage .commnHeading {
                            padding-bottom: 40px;
                            padding-top: 40px;
                        }
                        .title-22 {
                          font-size: 18px;
                          line-height: 27px;
                        }
                    }
                   
                `}
            </style>
        </>
    )
}
