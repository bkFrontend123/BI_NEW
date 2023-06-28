import React from 'react'
import Button from 'react-bootstrap/Button';
import Link from 'next/link'
import Form from 'react-bootstrap/Form';
import RatingCard from '../RatingCard'
import SubscribeArrow from '../Icons/SubscribeArrow';
import Building from '../Icons/Building';
import Clock from '../Icons/Clock';


export default function ProductBanner(props) {
    const { title, description, customClass, children } = props;
    return (
        <>
            <div className={`ProductBanner ${customClass}`}>
                <div className='ProductBannerBox'>
                    <div className='container'>
                        <div className='row g-4'>
                            <div className='col-lg-6'>
                                <div className='ProductBannerText'>
                                    <h1 className='title-60 ProductBannerTextTitle text-black font-weight-700 font-secondary'>{title}</h1>
                                    <p className='ProductBannerTextDescrip title20  text-primaryDark font-primaryNormal font-weight-500 pe-md-4'>
                                        {description}
                                        {/*<Link className="d-block text-primary" href="/">Read More...</Link>*/}
                                    </p>
                                    <div className='ProductBannerRibbon d-flex align-items-center position-relative'>
                                        <div className='ProductBannerRibbon-left ProductBannerRibbonCol bg-white border-primary'>
                                            <div className='ProductBannerRibbonBox'>
                                                <img className='ribbonProduct' src='/ribbonProduct.svg' />
                                                <div className='title-20 text-primary font-weight-500'>Insurance worth</div>
                                                <div className='title-32 text-primary font-weight-600 mt-n2'> ₹ 3 Crore</div>
                                            </div>
                                        </div>
                                        <div className='ProductBannerRibbon-right ProductBannerRibbonCol bg-primary'>
                                            <div className='ProductBannerRibbonBox'>
                                                <div className='title-20 text-yellow font-weight-500'> at just</div>
                                                <div className='title-48 text-yellow font-weight-600 mt-n2'> ₹ 15,000</div>
                                                <div className='bg-yellow h-3 mt-1'></div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className='mt-4'>
                                        <RatingCard
                                            reviews="450"
                                            stars="4.5"
                                            background="true"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='ProductBanner-form'>
                                    <div className='bg-white ProductBanner-formBg p-4 p-xl-5'>
                                        <p className='ProductBanner-formTopHeading title22 font-primaryNormal font-weight-500'>Analyse your Business Risk. <span className='d-inlline d-md-none'><br></br></span>Buy the right Policy within 10 Minutes</p>
                                        {/*<div className='row'>
                                            <div className='col-lg-12 mx-auto'>
                                                <div className='ProductBanner-formTop  d-flex flex-md-row flex-column '>
                                                    <p className=' title20 font-weight-500 me-4 mb-0 d-flex  align-items-center'>
                                                        <Building iconColor="green " width="20" height="21" />
                                                        <span className='ms-2 font-primaryNormal'>Trusted by 340 businesses</span>
                                                    </p>
                                                    <p className='title20 font-weight-500 me-4 mb-0 d-flex  align-items-center'>
                                                        <Clock iconColor="green stroke" width="20" height="21" />
                                                        <span className='ms-2 font-primaryNormal'>Policy in Minutes</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>*/}
                                        <div className='ProductBanner-formBox'>
                                            {children}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx scope>
                {`
                    .ProductBanner{
                        padding: 125px 0 215px 0;
                        background: url(/productHero.jpg) no-repeat center left/cover;
                        margin-top: -165px;
                        padding-top: 165px;
                        position: relative;
                    }
                    .ProductBannerBox{
                        margin-top: 100px;
                    }
                    .ProductBannerText{
                        padding-left: 30px;
                    }
                    .ProductBannerTextTitle{
                        margin-bottom: 50px;
                    }
                    .ProductBannerTextDescrip{
                        margin-bottom: 50px;
                    }
                    .ProductBanner-formTop {
                        margin-bottom: 48px;
                    }
                    .ProductBanner-formBox a.btnCommon {
                        padding: 21px 70px;
                        box-shadow: 0 0 25px 0 rgb(0 0 0 / 15%);
                     }
                    .ProductBanner-formTopHeading{
                        margin-bottom: 20px
                    }
                    .ProductBannerRibbon{
                        height: 98px;

                    }
                    .ProductBannerRibbonCol{
                        padding: 0 25px;
                        height: 100%;
                        display: flex;
                        align-items: center;
                    }
                    .ProductBannerRibbonCol .title-20{
                        line-height: 25px;
                    }
                    .ProductBannerRibbonCol.ProductBannerRibbon-right .title-20{
                        line-height: 20px;
                    }

                    .ProductBannerRibbonCol .title-32{
                        line-height: 32px;
                    }
                    .ProductBannerRibbonCol .title-48{
                        line-height: 44px;
                    }
                    .ProductBannerRibbon-left{
                        padding-left: 50px;
                        border: 2px dashed ;
                    }
                    .ribbonProduct{
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                    .ProductBannerRibbon-right{
                        padding-right: 60px;
                        clip-path: polygon(100% 0%, 89% 49%, 100% 100%, 0 100%, 0% 50%, 0 0);
                    }
                    
                    @media (min-width: 1300px){
                        .container {
                          max-width: 1170px !important;
                        }
                      }
                      
                      @media (min-width: 1399px){
                        .container {
                          max-width: 1300px !important;
                        }
                      }
                      @media (min-width:1600px) {
                        .container {
                          max-width: 1460px !important;
                        }
                        .ProductBanner-form{
                            max-width: 665px;
                            margin-left: auto;
                        }
                      }
                      @media (min-width:1650px) {
                        .container {
                          max-width: 1548px !important;
                        }
                      }
                     @media only screen and (max-width: 1650px) {
                        .ProductBanner-formTop p{
                            font-size: 18px; 
                            line-height: 27px;
                        }
                        .title-64{
                            font-size: 55px;
                            line-height: 55px;
                         }
                        .title20{
                            font-size: 18px;
                            line-height: 26px;
                         }
                     }
                     @media only screen and (max-width: 1399px){
                        .ProductBanner-form{
                            
                        }
                        .ProductBanner-formBox{
                            padding: 0;
                        }
                    }
                     @media only screen and (max-width: 767px) {
                        .ProductBanner{
                            padding: 48px 0;
                        }
                        .ProductBannerTextTitle{
                            margin-bottom: 10px;
                            font-size: 34px;
                            line-height: 42px;
                        }
                        .ProductBannerText{
                            padding: 50px 0;
                        }
                        .ProductBannerTextDescrip{
                            margin-bottom: 34px;
                        }
                        .ProductBannerRibbon {
                            height: 80px;
                        }
                        .ProductBannerRibbonCol {
                            padding: 0 16px;
                        }
                        .ProductBannerRibbon-right {
                            padding-right: 30px;
                        }
                        .ProductBannerRibbon-left {
                            padding-left: 30px;
                        }
                        .ribbonProduct {
                            width: 24px;
                        }
                        .ProductBannerRibbonCol .title-20 {
                            font-size: 16px;
                        }
                        .ProductBannerRibbonCol .title-48 {
                            font-size: 20px;
                            line-height: 30px;
                        }
                        .ProductBannerRibbonCol .title-32 {
                            font-size: 22px;
                        }
                        .ProductBanner-form {
                            padding: 0;                            
                         }
                         .ProductBanner-formBox {
                            padding: 0 105px;
                        }
                         .ProductBanner-formBg {
                            padding: 30px;
                            padding-bottom: 60px;
                         }
                         .ProductBanner-form .title20{
                            font-size: 15px;
                            line-height: 20px;
                            margin-bottom: 4px;
                         }
                         .ProductBanner-formTop {
                             max-width: 85%;
                             justify-content: center;

                         }
                         .ProductBanner-formTop p{
                                padding: 0;
                                margin: 0 !important;
                            }
                            .ProductBanner-formTop p svg{
                                width: 16px;
                            }
                            .ProductBanner-formBox{
                                padding: 0 !important;
                            }
                            .ProductBanner-formBox input{
                                height: 54px; 
                            }
                            .ProductBanner-formBox a.btnCommon {
                                padding: 22px 70px;
                                width: 100%;
                                justify-content: center;
                            }
                        }
                        @media only screen and (max-width: 420px) {
                            
                        } 
                      
                        @media only screen and (max-width: 370px) {
                            .ProductBanner-form{
                                padding: 0 0px !important;
                            }
                            .ProductBanner-formBox{
                                padding: 0 0px !important;
                            }
                            .ProductBanner-formBg{
                                padding: 30px 21px;
                                padding-bottom: 70px;
                            }
                            .ProductBanner-form .title20{
                                font-size: 14px;
                            }
                            .ProductBannerText{
                                padding: 0;
                            }
                        }
                     
                     
               `}
            </style>
        </>
    )
}
