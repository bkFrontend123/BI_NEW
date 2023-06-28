import React, { useState, useEffect } from 'react'
import Toggle from '../Icons/Toggle'
import Link from 'next/link'
import Image from 'next/image'
import WhatsApp from '../Icons/WhatsApp'
import AOS from 'aos';

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false)
  const [menuToggleList, setMenuToggleList] = useState("")
  const menuToggleHandle = () => {
    // alert("hdjasbh1111")
    setMenuToggle(!menuToggle)
    menuToggleList == "" ? setMenuToggleList("menuActive") : setMenuToggleList("")
  }
  // useEffect(() => {
  //   setMenuToggleList("")
  // }, [window.location.pathname])

  console.log(menuToggle)

  const LiabiltyInsurance = [
    { id: "s1", link: "/directors_and_officers", img: "/startup1.png", title: "Directors & Officers Insurance" },
    { id: "s1", link: "/errors_and_omissions", img: "/startup2.png", title: "Errors & Omissions Insurance" },
    { id: "s1", link: "/cyber", img: "/startup3.png", title: "Cyber Crime Insurance" },
    { id: "s1", link: "/general_insurance", img: "/startup4.png", title: "General Liability Insurance" },
    { id: "s1", link: "/crime_fidelity", img: "/startup5.png", title: "Crime/Fidelty Insurance" },
    { id: "s1", link: "/product_liability", img: "/startup6.png", title: "Product Liability Insurance" },
  ]
  const AssetInsurance = [
    { id: "s1", link: "", img: "/startup7.png", title: "Fire Insurance" },
    { id: "s2", link: "", img: "/startup8.png", title: "Marine Insurance" },
    { id: "s1", link: "", img: "/startup9.png", title: "Contractors All Risk" },
    { id: "s1", link: "", img: "/startup10.png", title: "Erection All Risk" },
    { id: "s1", link: "", img: "/startup11.png", title: "Machinery Breakdown" },
  ]
  const subMenu1 = [
    { id: "s1", link: "/directors_and_officers", img: "/startup1.png", title: "Directors & Officers Insurance" },
    { id: "s1", link: "/errors_and_omissions", img: "/startup2.png", title: "Errors & Omissions Insurance" },
    { id: "s1", link: "/cyber", img: "/startup3.png", title: "Cyber Crime Insurance" },
    { id: "s1", link: "/general_insurance", img: "/startup4.png", title: "General Liability Insurance" },
    { id: "s1", link: "/crime_fidelity", img: "/startup5.png", title: "Crime/Fidelty Insurance" },
    { id: "s1", link: "/product_liability", img: "/startup6.png", title: "Product Liability Insurance" },
  ]
  const industryTechnology = [
    { link: "/industry", title: "E-Commerce" },
    { link: "/industry", title: "Ed-Tech" },
    { link: "/industry", title: "E-Sports" },
    { link: "/industry", title: "Fintech" },
    { link: "/industry", title: "MSPs" },
    { link: "/industry", title: "SAAS" },
    { link: "/industry", title: "Startups" },
  ]
  const industryTraditional = [
    { link: "/industry", title: "Financial Services" },
    { link: "/industry", title: "Financial Services" },
    { link: "/industry", title: "Manufacturing" },
    { link: "/industry", title: "Media & Advertising" },
  ]
  const industryEmerging = [
    { link: "/industry", title: "Blockchain" },
    { link: "/industry", title: "Cannabis" },
    { link: "/industry", title: "Cryptocurrency" },
    { link: "/industry", title: "Influencers" },
    { link: "/industry", title: "Electric Mobility" },
    { link: "/industry", title: "On-Demand Delivery" },
    { link: "/industry", title: "Robotics" },
  ]
  const Resources = [
    { link: "/industry", title: "More Blogs" },
    { link: "/industry", title: "Webinars" },
    { link: "/industry", title: "Resource Hub" },
    { link: "/industry", title: "White Papers" },
  ]
  const handleMouseEnter = () => {
    document.body.classList.add('DropdownOverlay');
  }
  const handleMouseLeave = () => {
    document.body.classList.remove('DropdownOverlay');
  }
  // ------ Dropdown ------
  const [productToggle, setProductToggle] = useState(false)
  const ProductMenuToggle = () => {
    (productToggle == false ? setProductToggle(true) : setProductToggle(false))
    setResourceToggle(false);
    setIndusToggle(false);

  }
  const [indusToggle, setIndusToggle] = useState(false)
  const IndusMenuToggle = () => {
    (indusToggle == false ? setIndusToggle(true) : setIndusToggle(false));
    setProductToggle(false);
    setResourceToggle(false);
  }
  const [ResourceToggle, setResourceToggle] = useState(false)
  const ResourceMenuToggle = () => {
    (ResourceToggle == false ? setResourceToggle(true) : setResourceToggle(false))
    setProductToggle(false);
    setIndusToggle(false);

  }


  return (

    <>

      <div className={`navbar-main bg-yellowLight`} id="backToTop">
        <nav className={`navbar p-0 mainMenu  navbar-expand-xl bg-body-tertiary homeNavbar`}>
          <div className="container nabbarStrip position-relative">

            <Link className="navbar-brand" href="/"><img src='/logo-main.svg' /></Link>
            <button className="navbar-toggler p-0" type="button" onClick={menuToggleHandle}>
              <span className="navbar-toggler-icon"><Toggle /></span>
            </button>

            <div className={`collapse navbar-collapse ${menuToggleList}`} >
              <ul className="navbar-nav mb-2 mt-4 m-lg-0 menu-container" >

                <li className={`nav-item menu-containerList ${productToggle ? "active" : ""}`} onClick={ProductMenuToggle}>
                  <Link className="nav-link menu-trigger arrowHide" href="#" >
                    Products
                    <span className='ms-1'>
                      {productToggle 
                       ? <span style={{ }} >
                       <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M1.00148 0.553208L5.55469 5.10642L10.1079 0.553208" stroke="#ffb400" strokeWidth="1.5" strokeLinejoin="bevel" />
                       </svg>
                     </span> 
                     :  <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.00148 0.553208L5.55469 5.10642L10.1079 0.553208" stroke="black" strokeWidth="1.5" strokeLinejoin="bevel"/>
                      </svg>  
                    }
                    </span>
                  </Link>
                  {productToggle
                    ?
                    <div className='mega-menu productMega-menu' >
                      <div className='mega-menuBox'>
                        <div className='container'>
                          <div className='row'>

                            <div className='col-md-9 offset-md-3'>
                              <div className='row'>
                                {/* -------Liability Insurance------- */}
                                <div className='col-md-12'>
                                  <div className='mega-menuBox-title'>
                                    <div className='title-24 font-weight-600 text-primary'>Liability Insurance</div>
                                    <hr className='bg-gray mb-md-4 mt-2'/>
                                  </div>
                                  <div className='row'>
                                    {LiabiltyInsurance.map((item) =>
                                      <div className='col-md-6 startupCols-cardCol'>
                                        <div className='startupCols-cardBox pe-md-3 '>
                                          <div className='d-flex align-items-center'>
                                            <Image
                                              // loader={myLoader}
                                              src={item.img}
                                              alt="Bimakavach"
                                              width={50}
                                              height={50}
                                              className='d-none d-md-block '
                                            />
                                            <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none  text-primary @mt-md-3 font-weight-600 ms-2'>{item.title}</Link>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                {/* -------Asset Insurance------- */}
                                <div className='col-md-12'>
                                  <div className='mega-menuBox-title'>
                                    <div className='title-24 font-weight-600 text-primary'>Asset Insurance</div>
                                    <hr className='bg-gray mb-md-5 mt-2' />
                                  </div>
                                  <div className='row'>
                                    {AssetInsurance.map((item) =>
                                      <div className='col-md-6 startupCols-cardCol'>
                                        <div className='startupCols-cardBox pe-md-3 '>
                                          <div className='d-flex align-items-center'>
                                            <Image
                                              // loader={myLoader}
                                              src={item.img}
                                              alt="Bimakavach"
                                              width={50}
                                              height={50}
                                              className='d-none d-md-block '
                                            />
                                            <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none  text-primary  font-weight-600 ms-2'>{item.title}</Link>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    : ""}
                </li>
                {/*<li className={`nav-item menu-containerList ${indusToggle ? "active" : ""}`} onClick={IndusMenuToggle}>
                  <a className="nav-link menu-trigger arrowHide" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Industries
                    <span className='ms-1'>
                      {indusToggle 
                      ? <span style={{ }} >
                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.00148 0.553208L5.55469 5.10642L10.1079 0.553208" stroke="#ffb400" strokeWidth="1.5" strokeLinejoin="bevel" />
                        </svg>
                      </span> 
                      :  <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M1.00148 0.553208L5.55469 5.10642L10.1079 0.553208" stroke="black" strokeWidth="1.5" strokeLinejoin="bevel"/>
                       </svg>
                       
                      }
                    </span>
                  </a>
                  {indusToggle
                    ?
                    <div className='mega-menu industriesMega-menu '>
                      <div className='mega-menuBox'>
                        <div className='container'>
                          <div className='row'>

                            <div className='col-md-7 offset-md-4'>
                              <div className='row'>
                                {* -------Technology------- *}
                                <div className='col-md-4'>
                                  <div className='mega-menuBox-title'>
                                    <div className='title-24 font-weight-600 text-primary'>Technology</div>
                                    <hr className='bg-gray mb-4 mt-2' />
                                  </div>
                                  <div className='row'>
                                    {industryTechnology.map((item) =>
                                      <div className='col-md-12 startupCols-cardCol'>
                                        <div className='startupCols-cardBox pe-md-3 mb-md-2'>
                                          <div className='d-none d-md-block '>
                                            <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none title24 text-primary mt-md-3 font-weight-600'>{item.title}</Link>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                {* -------Traditional------- *}
                                <div className='col-md-4'>
                                  <div className='mega-menuBox-title'>
                                    <div className='title-24 font-weight-600 text-primary'>Technology</div>
                                    <hr className='bg-gray mb-4 mt-2' />
                                  </div>
                                  <div className='row'>
                                    {industryTraditional.map((item) =>
                                      <div className='col-md-12 startupCols-cardCol'>
                                        <div className='startupCols-cardBox pe-md-3 mb-md-2'>
                                          <div className='d-none d-md-block '>
                                            <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none title24 text-primary mt-md-3 font-weight-600'>{item.title}</Link>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                {* -------Emerging------- *}
                                <div className='col-md-4'>
                                  <div className='mega-menuBox-title'>
                                    <div className='title-24 font-weight-600 text-primary'>Emerging</div>
                                    <hr className='bg-gray mb-4 mt-2' />
                                  </div>
                                  <div className='row'>
                                    {industryEmerging.map((item) =>
                                      <div className='col-md-12 startupCols-cardCol'>
                                        <div className='startupCols-cardBox pe-md-3 mb-md-2'>
                                          <div className='d-none d-md-block '>
                                            <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none title24 text-primary mt-md-3 font-weight-600'>{item.title}</Link>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>

                              </div>
                              <div className='row mt-5'>
                                {* -------Emerging------- *}
                                <div className='col-md-4'>
                                  <div className='mega-menuBox-title'>
                                    <div className='title-24 font-weight-600 text-primary'>Emerging</div>
                                    <hr className='bg-gray mb-4 mt-2' />
                                  </div>
                                  <div className='row'>
                                    {industryEmerging.map((item) =>
                                      <div className='col-md-12 startupCols-cardCol'>
                                        <div className='startupCols-cardBox pe-md-3 mb-md-2'>
                                          <div className='d-none d-md-block '>
                                            <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none title24 text-primary mt-md-3 font-weight-600'>{item.title}</Link>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                {* -------Technology------- *}
                                <div className='col-md-4'>
                                  <div className='mega-menuBox-title'>
                                    <div className='title-24 font-weight-600 text-primary'>Technology</div>
                                    <hr className='bg-gray mb-4 mt-2' />
                                  </div>
                                  <div className='row'>
                                    {industryTechnology.map((item) =>
                                      <div className='col-md-12 startupCols-cardCol'>
                                        <div className='startupCols-cardBox pe-md-3 mb-md-2'>
                                          <div className='d-none d-md-block '>
                                            <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none title24 text-primary mt-md-3 font-weight-600'>{item.title}</Link>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                {* -------Traditional------- *}
                                <div className='col-md-4'>
                                  <div className='mega-menuBox-title'>
                                    <div className='title-24 font-weight-600 text-primary'>Technology</div>
                                    <hr className='bg-gray mb-4 mt-2' />
                                  </div>
                                  <div className='row'>
                                    {industryTraditional.map((item) =>
                                      <div className='col-md-12 startupCols-cardCol'>
                                        <div className='startupCols-cardBox pe-md-3 mb-md-2'>
                                          <div className='d-none d-md-block '>
                                            <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none title24 text-primary mt-md-3 font-weight-600'>{item.title}</Link>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    : ""}
                </li>*/}
                <li className={`nav-item menu-containerList ${ResourceToggle ? "active" : ""}`} onClick={ResourceMenuToggle}>
                  <a className="nav-link menu-trigger arrowHide" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Resources
                    <span className='ms-1'>
                      {ResourceToggle ? 
                         <span style={{ }} >
                         <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1.00148 0.553208L5.55469 5.10642L10.1079 0.553208" stroke="#ffb400" strokeWidth="1.5" strokeLinejoin="bevel" />
                         </svg>
                       </span> 
                       :  <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.00148 0.553208L5.55469 5.10642L10.1079 0.553208" stroke="black" strokeWidth="1.5" strokeLinejoin="bevel"/>
                        </svg>  
                      }
                    </span>
                  </a>
                  {ResourceToggle
                    ?
                    <div className='mega-menu industriesMega-menu '>
                      <div className='mega-menuBox'>
                        <div className='container'>
                          <div className='row'>

                            <div className='col-md-8 offset-md-4'>
                              <div className='row'>
                                {/* -------Technology------- */}
                                <div className='col-md-12'>
                                  <div className='mega-menuBox-title'>
                                    <div className='title-24 font-weight-600 text-primary'>Insights</div>
                                    <hr className='bg-gray mb-4 mt-2 w-25' />
                                  </div>
                                  <div className='row'>
                                    <div className='col-md-3'>
                                      <div className='row'>
                                        {Resources.map((item) =>
                                          <div className='col-md-12 startupCols-cardCol'>
                                            <div className='startupCols-cardBox pe-md-3 mb-md-2'>
                                              <div className='d-none d-md-block '>
                                                <Link href={item.link} className='startupCols-cardBoxTitle text-decoration-none title24 text-primary mt-md-3 font-weight-600'>{item.title}</Link>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                    <div className='col-md-9 '>
                                      <div className=' row  mb-md-2'>
                                        <div className='d-none d-md-block col-md-6'>
                                          <img className='w-100  ' src="/ourBlogAds.jpg" />
                                        </div>
                                        <div className='d-none d-md-block col-md-6'>
                                          <h3 className='title-36 mt-3 mb-0 mb-md-1 text-primary font-secondary font-weight-600'>Different Types of Insured</h3>
                                          <p className='title-18 text-yellow3 font-weight-500 mb-md-0 mb-4'>April 4, 2023 • 5 MINS READ</p>

                                        </div>
                                      </div>
                                      <div className=' row mt-5 d-none d-md-flex '>
                                        <div className='col-md-6'>
                                          <div className=''>
                                            <div className='mb-md-5'>
                                              <div className='me-4'>
                                                <img className='' src="/ourBlogSlide.jpg" />
                                              </div>
                                              <div className='text-start mt-3'>
                                                <p className='title-18 ourBlogsSlide-title text-primary font-weight-600 mb-0 '>What is an Insured in Business Insurance?</p>
                                                <p className='title-12 ourBlogsSlide-descrip text-yellow3 font-weight-500 mb-md-0 mb-4'>May 6, 2023 • 3 MINS READ</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className='col-md-6'>
                                          <div className=''>
                                            <div className='mb-md-5'>
                                              <div className='me-4'>
                                                <img className='' src="/ourBlogSlide.jpg" />
                                              </div>
                                              <div className='text-start mt-3'>
                                                <p className='title-18 ourBlogsSlide-title text-primary font-weight-600 mb-0 '>What is an Insured in Business Insurance?</p>
                                                <p className='title-12 ourBlogsSlide-descrip text-yellow3 font-weight-500 mb-md-0 mb-4'>May 6, 2023 • 3 MINS READ</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    : ""}
                </li>

                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle menu-trigger arrowHide" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     <img src='/dropdown.svg' />
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Resources 1</a></li>
                    <li><a className="dropdown-item" href="#">Resources 2</a></li>
                    <li><a className="dropdown-item" href="#">Resources 3</a></li>
                  </ul>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="/about">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">Sign In</a>
                </li>
              </ul>
              <div className="nabbarStrip-btns d-flex flex-sm-row flex-column ms-auto " >
                <a className="btnCommon scheduleCallBtn me-md-4 btnBorder border-primary  text-primary mb-2 mb-md-0 text-decoration-none" type="submit"> <img className='me-2' src='/icons/calender.svg' width="16px" /> <span> Schedule a call </span></a>
                <a className="btnCommon yellowBtn text-primary text-decoration-none " type="submit"> 
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.40923 4.75927L5.24962 6.23368C5.65317 6.80974 6.11223 7.35881 6.62676 7.87341C7.14136 8.38794 7.69043 8.84701 8.26649 9.25054L9.74089 8.09094L13.6668 9.30248V12.2954C13.6643 12.8467 13.4221 13.3695 13.0033 13.728C12.6571 14.0243 12.2155 14.1919 11.7608 14.1635C8.8947 13.9845 6.07996 12.8001 3.89002 10.6101C1.70011 8.42021 0.515669 5.6055 0.336609 2.7394C0.308202 2.28466 0.475875 1.84305 0.772142 1.49689C1.1306 1.07808 1.6535 0.835884 2.20476 0.833344H5.19772L6.40923 4.75927ZM10.0157 9.57114L12.3335 10.2863V12.2915C12.3321 12.4545 12.2602 12.609 12.1363 12.7151C12.0218 12.813 11.9132 12.8371 11.8439 12.8328C9.2895 12.6732 6.7843 11.6188 4.83283 9.66734C2.88137 7.71588 1.82694 5.21065 1.66735 2.65626C1.66302 2.587 1.68714 2.47835 1.78512 2.36388C1.89118 2.23995 2.0457 2.16805 2.20874 2.16668H4.2138L4.92906 4.48446L3.5895 6.18761L4.15754 6.99861C4.60538 7.63794 5.11434 8.24654 5.68396 8.81621C6.25363 9.38581 6.86223 9.89481 7.50156 10.3426L8.31256 10.9107L10.0157 9.57114Z" fill="#0E2E7D"/>
                </svg>

                <span className='ms-2'> Talk to us </span></a>
              </div>
            </div>

          </div>
        </nav >
      </div >
      <style jsx scope>
        {`
           .mega-menuBox  a{
            text-decoration: none;
          }
          .startupCols-cardBox{
            margin-bottom: 20px;
           }
          @media (min-width: 1300px){
            .nabbarStrip {
              max-width: 1170px !important;
            }
          }
          @media (min-width: 1399px){
            .nabbarStrip {
              max-width: 1300px !important;
            }
          }
          @media (min-width:1600px) {
            .nabbarStrip {
              max-width: 1460px !important;
            }
          }
          @media (min-width:1650px) {
            .nabbarStrip {
              max-width: 1548px !important;
            }
          }
          @media only screen and (max-width: 1450px) {
            .title-36{
              font-size: 30px;
              line-height: 40px;
          
            }
          }
          @media only screen and (max-width: 992px) {
            .mega-menu{
              position: relative; 
            }
            .container{
              max-width: 100% ;
            }
            .mainMenu.navbar .navbar-nav li{              
              text-align: left;
            }
            .mega-menu .mega-menuBox{
              padding: 0;
              padding-left: 8px;
              box-shadow: none;
              margin-top: 0;
              text-align: left;
            }
            .mega-menu .mega-menuBox .container{
              padding: 0;
            }
            .startupCols-cardBox{
              margin-bottom: 10px; 
            }
            .startupCols-cardBox a{
              text-align: left;
              color: #000;
            }
            
          }
        `}
      </style>
    </>
  )
}

export default Navbar