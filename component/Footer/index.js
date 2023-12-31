import React, { useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { Form, Button } from 'react-bootstrap';

import Youtube from '../Icons/Youtube'
import Insta from '../Icons/Insta'
import Twitter from '../Icons/Twitter'
import Linkdin from '../Icons/Linkdin'

export default function Footer(props) {
  const { starContent } = props;
  return (
    <>
      <Head>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" />
      </Head>
      <div className="footer ">
        <div className="container">
          <div className="row">
            {/* <div className="col-auto d-none d-md-block">
            <div className="polyBox opacity-0 border-primary bg-blueLight text-primary title16 font-weight-600 mt-2">Our Culture</div>
          </div> */}
            <div className="col-xl-11 mx-auto pe-xl-5">
              <div className=''>
                <div className="row">
                  <div className="col-md footerLogo">
                    <Link href="/">
                      <Image
                        // loader={myLoader}
                        src="/logo-white.svg"
                        alt="Picture of the author"
                        width={400}
                        height={68}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                  <div className="col-md-auto">
                    <p className='title18 text-primarySkyLight2 font-weight-400 mb-3'>Subscribe to our Newsletter</p>
                    <div className='ftrNwsltr'>
                      <Form>
                        <Form.Control
                          type="email"
                          id="inputEmail"
                          aria-describedby="emailHelpBlock"
                          placeholder='Your Mail Address'
                          required
                        />
                        <Button type='submit'>Subscribe</Button>
                      </Form>
                    </div>
                  </div>
                </div>
                <div className='d-none d-md-block' style={{ height: "90px" }}></div>
                <div className='d-block d-md-none' style={{ height: "0" }}></div>
                <div className="text-white title-30 font-weight-600 mt-4 mt-md-0 mb-2 mb-md-4 text-start">Our Products</div>
                <div className="row footer-listMenu">
                  <div className="col-md-4">
                    <div className="footer-listMenu-list border-0">
                      <ul className="list-group list-group-borderless bg-transparent">
                        <li className="list-group-item text-yellow title20 font-weight-600">Liability</li>
                        <li className="list-group-item">
                          <Link href="/directors-and-officers-insurance" className='title18 font-weight-400'>Directors & Officers Insurance</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/errors-and-omissions-insurance" className='title18 font-weight-400'>Errors & Omissions Insurance</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/general-liability-insurance" className='title18 font-weight-400'>General Liability Insurance</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/product-liability-insurance" className='title18 font-weight-400'>Product Liability Insurance</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/cyber-insurance" className='title18 font-weight-400'>Cyber Insurance</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/commercial-crime-insurance" className='title18 font-weight-400'>Crime Insurance</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/workmens-compensation-insurance" className='title18 font-weight-400'>Workmen’s Compensation</Link>
                        </li>
                        {/*<li className="list-group-item">
                        <span className='title18 font-weight-400'>Fidelity Insurance</span>
                      </li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Workman's Compensation</span>
                      </li>*/}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="footer-listMenu-list footer-listMenu-listALign">
                      <ul className="list-group list-group-borderless bg-transparent">
                        <li className="list-group-item text-yellow title20 font-weight-600">Asset</li>
                        <li className="list-group-item">
                          <Link href="/fire-and-burglary-insurance" className='title18 font-weight-400'>Fire Insurance</Link>
                        </li>
                        {/*<li className="list-group-item">
                        <span className='title18 font-weight-400'>Office Package</span>
                      </li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Shop Owner’s</span>
                      </li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Restaurant Hotels & Cafes</span>
                      </li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Educational Institutes</span>
                      </li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Hospitals & Clinics</span>
                      </li>*/}
                      </ul>
                      <ul className="list-group list-group-borderless bg-transparent">
                        {/*<li className="list-group-item text-yellow title20 font-weight-600">For Employees</li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Group Health Insurance</span>
                      </li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Group Personal Accident</span>
                      </li>*/}
                        <li className="list-group-item text-yellow title20 font-weight-600 mt-3">Marine</li>
                        <li className="list-group-item">
                          <Link href="/marine-cargo-insurance" className='title18 font-weight-400'>Marine Transit</Link>
                        </li>
                      </ul>
                      <ul className="list-group list-group-borderless bg-transparent">
                        <li className="list-group-item text-yellow title20 font-weight-600 mt-3">Engineering</li>
                        <li className="list-group-item">
                          <Link href="/contractor-all-risk-policy" className='title18 font-weight-400'>Contractor's All Risk</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/erection-all-risk-insurance" className='title18 font-weight-400'>Erection All Risk</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/contractor-plant-and-machinery-insurance" className='title18 font-weight-400'>Contractor's Plant & Machinery</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*<div className="col-md-4">
                  <div className="footer-listMenu-list footer-listMenu-listALign">
                    <ul className="list-group list-group-borderless bg-transparent ">
                      <li className="list-group-item text-yellow title20 font-weight-600">Engineering</li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Contractors All Risk</span>
                      </li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Erection All Risk</span>
                      </li>
                      <li className="list-group-item">
                        <span className='title18 font-weight-400'>Contractors Plant & Machinery</span>
                      </li>
                    </ul>
                  </div>
                </div>*/}
                  <div className="col-md-4">
                    <div className="footer-listMenu-list border-0">
                      <ul className="list-group list-group-borderless bg-transparent ">
                        <li className="list-group-item text-primarySkyLight2 title20 font-weight-600">Company</li>
                        <li className="list-group-item">
                          <Link href="/about" className='title18 font-weight-400'>About Us</Link>
                        </li>
                        <li className="list-group-item">
                          <Link target='_blank' href="https://www.bimakavach.com/blog/" className='title18 font-weight-400'>Blog</Link>
                        </li>
                        {/*<li className="list-group-item">
                          <Link href="/" className='title18 font-weight-400'>Resource Hub</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/" className='title18 font-weight-400'>White Papers</Link>
                        </li>
                        <li className="list-group-item">
                          <Link href="/career" className='title18 font-weight-400'>Careers at BimaKavach</Link>
                        </li>*/}
                      </ul>
                      <ul className="list-group list-group-borderless bg-transparent ">
                        <li className="list-group-item text-primarySkyLight2 title20 font-weight-600">Get in Touch</li>
                        <li className="list-group-item">
                          <Link href="mailto:support@bimakavach.co" className='title18 font-weight-400'>support@bimakavach.com</Link>
                        </li>
                        <li className="list-group-item text-primarySkyLight2 title20 font-weight-600">For Liability Insurance</li>
                        <li className="list-group-item">
                          <Link href="tel:+91 9036554785" className='title18 font-weight-400'>+91 9036554785</Link>
                        </li>
                        <li className="list-group-item text-primarySkyLight2 title20 font-weight-600">For P&C Insurance</li>
                        <li className="list-group-item">
                          <Link href="tel:+91 9035492594" className='title18 font-weight-400'>+91 9035492594</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='d-none d-md-block' style={{ height: "90px" }}></div>

                {starContent == 'true' ? (
                  <div className="row footer-note">
                    <div className="col-md-12">
                      <p className='title14 text-yellow font-weight-500 mb-1'>*The estimated premium mentioned above is calculated under ideal conditions. The actual pricing will vary based on the specific information provided by the insured.</p>
                    </div>
                  </div>
                ) : (
                  null
                )
                }
                <div className="row footer-note mt-4">
                  <div className="col-md-12">
                    <p className='title14 text-primarySkyLight1 font-weight-600 mb-2'>Disclaimer:</p>
                    <p className='title14 text-primarySkyLight2 font-weight-500 mb-2'>BimaKavach Insurance Broking Pvt. Ltd. | CIN- U66010MP2022PTC059393 | Registered  Office- Flat No 201, Classic Avenue, 184 Shrinagar Main, Indore Madhya Pradesh India- 452018 | Phone No.- 9036554785 | Email- support@bimakavach.com </p>

                    <p className='title14 text-primarySkyLight2 font-weight-500 mb-2'>BimaKavach is registered as a Direct Broker | Registration No. 901, Registration Code No.  IRDAI / DB 985/ 2022, Valid till 25/06/2026, License category- Direct Broker (General).</p>

                    <p className='title14 text-primarySkyLight2 font-weight-500 mb-0'>Visitors are being informed that BimaKavach Insurance Broking Pvt. Ltd. holds the right to share the information submitted by you on the website with Insurers. Product information is genuine and exclusively based on information obtained from insurers.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='d-none d-md-block' style={{ height: "90px" }}></div>
          <div className='d-md-none' style={{ height: "50px" }}></div>
          <div className="row">
            <div className="col-xl-11 mx-auto">
              <div className='copyrightDivider w-100'></div>
            </div>
            <div className="col-xl-11 mx-auto copyright">
              <div className='row align-items-center justify-content-between'>
                <div className='col-md'>
                  <p className='title-15 text-primarySkyLight2 font-weight-500 m-0'>© 2023 BimaKavach Insurance Broking Pvt. Ltd. All Rights Reserved</p>
                </div>
                <div className='col-md-auto'>
                  <div className='d-md-flex align-items-center gap-3 mt-3 mt-md-0'>
                    <div className="ftrLinks">
                      <Link href="/privacy-policy">Privacy Policy</Link>
                      <Link href="/terms-and-conditions">Terms & Conditions</Link>
                    </div>
                    <div className='footerSocial d-flex align-items-center'>
                      {/*<div className='footerSocialIco'>
                          <Link href="/">
                            <Insta iconColor="white" width="20" height="20" />
                          </Link>
                        </div>
                        <div className='footerSocialIco'>
                          <Twitter iconColor="white" width="20" height="20" />
                        </div>*/}
                      <div className='footerSocialIco'>
                        <Link target='_blank' href="https://www.linkedin.com/company/bimakavach/">
                          <Linkdin iconColor="white" width="20" height="20" />
                        </Link>
                      </div>
                      <div className='footerSocialIco'>
                        <Link target='_blank' href="https://www.youtube.com/@bimakavach">
                          <Youtube iconColor="white" width="20" height="20" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
              .footerSocialIco{
                margin-right: 36px;
              }
              .footerSocialIco:last-child {
                margin-right: 0;
              }
              .backToTop{
                font-size: 18px;
                color: #0e2b72;
                border: 2px solid #0e2b72;
                width: 35px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;  
                margin-bottom: 40px;
              }

                @media only screen and (min-width: 1750px) {
                      .container{
                          max-width: 1600px;
                      }
                }
                @media only screen and (max-width: 575px) {
                  .title18 {
                    font-size: 16px;
                    line-height: 28px;
                  }
                  .title-30 {
                    font-size: 22px;
                    line-height: 32px;
                  }
                }
            `}
      </style>

    </>

  )
}
