import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
// import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css'; // import the styles
import gsap from 'gsap';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import { Link, animateScroll as scroll } from "react-scroll";

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

import ProductBanner from '../component/Product/ProductBanner'
import SubscribeArrow from '../component/Icons/SubscribeArrow';
import WhatsApp from '../component/Icons/WhatsApp'
import IndustryBlock from '../component/IndustryBlock'
import ProductSchedule from '../component/Product/ProductSchedule'
import BestBacked from '../component/Product/BestBacked'
import HowGetStarted from '../component/Home/HowGetStarted'
import Accordion from '../component/Accordion'

import form from '@/assets/css/form.module.css'
import productStyle from '@/assets/css/product.module.css'

export default function product() {
    const navbarExample2Ref = useRef(null);
    const [activeC, setActiveC] = useState(1);
    useEffect(() => {

        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });

    });
    useEffect(() => {
        const btns = document.querySelectorAll('#tabBtn');
        const tabs = document.querySelectorAll('[data-tab]');

        btns.forEach((btn, btnIndex, btnArr) => {
            btn.addEventListener('click', function () {
                tabs.forEach((tab, tabIndex) => {
                    if (btnIndex === tabIndex) {
                        if (!tab.classList.contains('hidden')) {
                            return;
                        } else {
                            tab.classList.remove('hidden');
                            gsap.from(tab, { opacity: 0, scale: 0.95 });
                        }
                    } else {
                        tab.classList.add('hidden');
                    }
                });

                btnArr.forEach((b, bi) => {
                    if (bi === btnIndex) {
                        b.classList.add('active');
                    } else {
                        b.classList.remove('active');
                    }
                });
            });
        });
    }, []);

    useEffect(() => {
        const btns = document.querySelectorAll('#inciTabBtn');
        const tabs = document.querySelectorAll('[data-incitab]');

        btns.forEach((btn, btnIndex, btnArr) => {
            btn.addEventListener('click', function () {
                tabs.forEach((tab, tabIndex) => {
                    if (btnIndex === tabIndex) {
                        if (!tab.classList.contains('hidden')) {
                            return;
                        } else {
                            tab.classList.remove('hidden');
                            gsap.from(tab, { opacity: 0, scale: 0.95 });
                        }
                    } else {
                        tab.classList.add('hidden');
                    }
                });

                btnArr.forEach((b, bi) => {
                    if (bi === btnIndex) {
                        b.classList.add('active');
                    } else {
                        b.classList.remove('active');
                    }
                });
            });
        });
    }, []);


    /**** accordion ***/

    useEffect(() => {
        const btns = document.querySelectorAll('#startupTabBtn');
        const tabs = document.querySelectorAll('[data-startup]');

        btns.forEach((btn, btnIndex, btnArr) => {
            btn.addEventListener('click', function () {
                tabs.forEach((tab, tabIndex) => {
                    if (btnIndex === tabIndex) {
                        if (!tab.classList.contains('hidden')) {
                            return;
                        } else {
                            tab.classList.remove('hidden');
                            gsap.from(tab, { opacity: 0, scale: 0.95 });
                        }
                    } else {
                        tab.classList.add('hidden');
                    }
                });

                btnArr.forEach((b, bi) => {
                    if (bi === btnIndex) {
                        b.classList.add('active');
                    } else {
                        b.classList.remove('active');
                    }
                });
            });
        });
    }, []);


    const [openIndex, setOpenIndex] = useState(null);

    // ------ Acrodion -------

    // ------ Acrodion End-------
    // const Accordion = [
    //     { title: "Simple1", content: "Answer a few simple questions to get instant recommendations.", btnText: 'Next: Digital' },
    //     { title: "Simple2", content: "22Answer a few simple questions to get instant recommendations.", btnText: 'Next: Digital'},
    //     { title: "Simple3", content: "33Answer a few simple questions to get instant recommendations.", btnText: 'Next: Digital' },
    // ]

    const ProductList = [
        { id: "1", list: "What" },
        { id: "2", list: "Who" },
        { id: "3", list: "Why" },
        {
            id: "4", list: "Coverages & Exceptions",
            svg: "/icons/start.svg",
            svgActive: "/icons/starYellow.svg",
            uId: 'sep4'
        },
    ]

    const activeList = (val) => {
        setActiveC(val)
    }
    useEffect(() => {
        const handleScroll = () => {
            const scrollspyHeading4 = document.getElementById('sep4');
            if (scrollspyHeading4.classList.contains('active')) {
                // navbarExample2Ref.current.classList.add('nav-yellow');
            } else {
                // navbarExample2Ref.current.classList.remove('nav-yellow');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // Cleanup event listener when component unmounts
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.classList.add("homePageBody")
    }, []);

    const router = useRouter();
    const goToNextPage = () => {
        router.push('/directors_and_officers_form');
    };
    return (
        <>
            <Head>
                <title>Marine Cargo Insurance | BimaKavach Insurance for Marine Cargo</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="" />
            </Head>
            <Navbar />
            <div className={`productPage ${productStyle.productPage}`}>
                {/* product banner start */}
                <div className='bg-yellowLight'>
                    <ProductBanner
                        title="Marine Cargo Insurance"
                        description="Damage to valuable cargo while in transit can lead to significant losses for any business. Marine Cargo Insurance safeguards your goods during transit, whether by sea, road, rail, or air. With customizable coverage based on the nature of goods and their travel routes, this policy ensures peace of mind during transportation."
                        customClass="marineBnr"
                    >
                        <div className={`${form.commonForm}`}>
                            <Form>
                                <Form.Group className="mb-4">
                                    <Form.Control className={`${form.formInput}`} type="text" placeholder="Your Name" />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Control className={`${form.formInput}`} type="text" placeholder="Your Company Name" />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Control className={`${form.formInput}`} type="email" placeholder="Your Work Email Address" />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Control className={`${form.formInput}`} type="number" placeholder="Your Phone Number" />
                                </Form.Group>
                                <div className={`${form.fromButtonDiv} d-sm-flex`}>
                                    <Button variant="primary" className='btnCommon yellowBtn' type="button" onClick={goToNextPage}>
                                        <span className='me-2'>Buy Now</span>
                                        <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </ProductBanner>
                </div>
                {/* product banner end */}

                {/* product main start */}
                <div className={`${productStyle.ProdMain}`}>
                    <div className={`${productStyle.ProductNavbar}`}>
                        <Container>
                            <nav ref={navbarExample2Ref} className={`bg-white ${productStyle.navbar}`}>
                                <ul className={`nav nav-pills ProductList ${productStyle.ProductList}`}>
                                    {ProductList.map((item) => {
                                        return (<li key={item.id} className={`nav-item ${activeC == item.id ? "activeList" : ""}`} onClick={() => activeList(item.id)}>
                                            <Link
                                                activeClass={`active ${productStyle.active}`}
                                                className='nav-link text-blueGray'
                                                to={`scrollspyHeading${item.id}`}
                                                spy={true}
                                                smooth={true}
                                                offset={-350}
                                                duration={500}
                                                id={item?.uId && item?.uId}
                                            >
                                                {item.svg
                                                    ?
                                                    <>
                                                        <img className={`me-2 ${productStyle.svg}`} src={item.svg} />
                                                        <img className={`me-2 ${productStyle.svgActive}`} src={item.svgActive} />
                                                    </>
                                                    :
                                                    null
                                                }
                                                {item.list}
                                            </Link>
                                        </li>)
                                    }
                                    )}
                                </ul>
                            </nav>
                        </Container>
                    </div>
                    <div className={`${productStyle.ProductNavbarContent} ${productStyle.ProductTab}`}>
                        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
                            <div id="scrollspyHeading1" className={`pt-0 ${productStyle.tabWhat}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>What is</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Marine Cargo Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Marine Cargo Insurance is designed to safeguard your business against losses incurred during the transportation of goods. It's not limited to sea transport — it encompasses all modes, including air, land (road and rail), and inland waterways. It offers coverage for a wide array of risks, including container damage, cargo loss, liability for third-party property damage or personal injury.</p>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Companies that regularly transport valuable or fragile goods need this insurance policy for their shipments.</p>
                                    </div>
                                </Container>
                                <div className={`bg-yellowLight3 position-relative ${productStyle.lightYellowSec}`}>
                                    <img className={`d-none d-lg-block ${productStyle.lightYellowSecImg}`} src='/product/slideBg.png' />
                                    <img className={`d-block d-lg-none ${productStyle.lightYellowSecImg}`} src='/product/slideBgMob.png' />
                                    <Container className='position-relative'>
                                        <h3 className='title-36 font-secondary font-weight-700 text-primary mb-0'>Types of Marine Cargo Insurance</h3>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>There are various kinds of marine insurance policies. Our insurance experts can help you secure the most appropriate type of policy for your business.</p>
                                        <div className={`${productStyle.lightYellowSecCards}`}>
                                            <Row className='gx-lg-5'>
                                                <Col lg={4}>
                                                    <div className={`pt-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/importIcon.svg' width="100" height="100" alt="Import Marine Insurance" />
                                                            <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>Import Marine Insurance</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>This policy provides comprehensive coverage for any kind of import, from any global location to any destination in India. The primary modes of transit covered under this policy typically include air and sea transport.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/exportIcon.svg' width="100" height="100" alt="Export Marine Insurance" />
                                                            <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>Export Marine Insurance</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Specifically designed for exporters, this policy offers protection for any form of export, emanating from any part of India to destinations worldwide. The key transit methods incorporated in this policy are air and sea transport.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 border-0 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/inlandIcon.svg' width="100" height="100" alt="Inland Marine Insurance" />
                                                            <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>Inland Marine Insurance</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Catering to domestic transportation needs, this policy ensures coverage for the transfer of goods across India, predominantly by road and rail. This insurance type is ideal for mitigating risks associated with inland goods transportation.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className='gx-lg-5'>
                                                <Col lg={4}>
                                                    <div className={`pt-0 mt-lg-5 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/alopIcon.svg' width="100" height="100" alt="ALOP Insurance" />
                                                            <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>ALOP Insurance</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>It stands for Advanced Loss of Profit and is a particular type of business interruption insurance. It relates to the financial consequences of a project delay due to the occurrence of material damage to critical equipment during shipment. It is also known by the various names like Delay in Start-up, and Project-Cargo Marine/Consequential loss</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`mt-lg-5 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/eProductIcon.svg' width="100" height="100" alt="E-product Specific Voyage" />
                                                            <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>E-product Specific Voyage</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>This insurance covers any manufactured e-product or device or any component of the same, and other interests from various losses and damages, such as fire, collisions, earthquakes, and lightning during a specific voyage.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 border-0 mt-lg-5 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/coverIcon.svg' width="100" height="100" alt="Open Cover Agreement" />
                                                            <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>Open Cover Agreement</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>It is an agreement (not a policy) in which the insurer will accept responsibility for the insurance of all shipments for a fixed period, usually 12 months, within the terms of the cover. Here, the insured party does not need to arrange separate insurance for each individual shipment.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className='gx-lg-5'>
                                                <Col lg={4}>
                                                    <div className={`pt-0 mt-lg-5 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/lossIcon.svg' width="100" height="100" alt="Direct Loss" />
                                                            <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>Direct Loss</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>Unlike other marine policies that cover the value of items, this policy covers the sales turnover of a company. In this case, the insured receives coverage for all transits required to achieve sales. In this policy, imports & customs duties, raw materials, consumables, inter-factory, inter-depot, and job worker movement are covered. Along with that, export transit and temporary storage at intermediary locations such as ports and C&F facilities are covered also. Therefore, an annual turnover policy can satisfy all the requirements of a marine cargo insurance policy.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`mt-lg-5 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/voyageIcon.svg' width="100" height="100" alt="Specific Voyage Policy" />
                                                            <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>Specific Voyage Policy</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>It provides coverage for a specific single transit, from one location to another. It typically includes protection against various perils and risks that may occur during the transportation of goods. This policy concludes upon the journey's completion.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className={`pb-0 border-0 mt-lg-5 ${productStyle.lightYellowSecCardCol}`}>
                                                        <div className={`${productStyle.lightYellowSecCardBox}`}>
                                                            <Image src='/icons/policyIcon.svg' width="100" height="100" alt="nnual Policy" />
                                                            <h3 className='title-26 font-secondary font-weight-600 text-black my-2'>Annual Policy</h3>
                                                            <p className='title-18 font-weight-500 text-black m-0'>This policy is issued to cover marine cargo shipments from all potential perils for a period of 12 months.</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Container>
                                </div>
                            </div>
                            <div id="scrollspyHeading2" className={`${productStyle.whoNeed}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Who Needs</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Marine Cargo Insurance?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Obtaining a marine cargo insurance policy is highly recommended for any company involved in the transportation of goods, whether it's by sea, air, land, or inland waterways. It is highly sought after by shippers, cargo owners, logistic service providers, operators, freight forwarders, importers and exporters, etc. It protects shipping companies and couriers from potential losses stemming from natural disasters, cross-border conflicts, water transportation issues, inland & air transportation issues or cargo mishandling. It is an indemnity contract in which the insurer agrees to compensate the insured, within the policy's limits, for any loss or damage to property caused by specified perils.</p>
                                    </div>
                                    <div className={`mt-4 mt-xl-5 ${productStyle.tabChecklist}`}>
                                        <div className='title-28 font-black font-weight-700 text-black font-secondary'>Which factors are considered when determining the premium for Marine Cargo Insurance?</div>
                                        <Row>
                                            <Col lg={4}>
                                                <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                    <span>
                                                        <Image src='/icons/retailIcon.svg' width="100" height="100" alt="Nature of the goods being transported" />
                                                    </span>
                                                    <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Nature of the goods being transported</p>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                    <span>
                                                        <Image src='/icons/retailIcon1.svg' width="100" height="100" alt="The modes of transportation" />
                                                    </span>
                                                    <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>The modes of transportation</p>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                    <span>
                                                        <Image src='/icons/contractorsIcon.svg' width="100" height="100" alt="Type of packaging" />
                                                    </span>
                                                    <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Type of packaging</p>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                    <span>
                                                        <Image src='/icons/fitnessIcon.svg' width="100" height="100" alt="Geographical trading restrictions" />
                                                    </span>
                                                    <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Geographical trading restrictions</p>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                    <span>
                                                        <Image src='/icons/cleaningIcon.svg' width="100" height="100" alt="Type of Chosen insurance coverage" />
                                                    </span>
                                                    <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Type of Chosen insurance coverage</p>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className={`d-flex align-items-center ${productStyle.productInfoCard}`}>
                                                    <span>
                                                        <Image src='/icons/eventIcon.svg' width="100" height="100" alt="Ownership and contractual terms" />
                                                    </span>
                                                    <p className={`ms-3 mb-0 text-primary font-weight-600 ${productStyle.productInfoCardTitle}`}>Ownership and contractual terms</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Container>
                            </div>
                            <div id="scrollspyHeading3" className={`${productStyle.whyGet}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-0'>Why Get</h3>
                                        <div className='title-28 font-black font-weight-700 text-black'>Marine Cargo Insurance ?</div>
                                        <p className='title-20 mb-0 text-black font-weight-500 mt-4'>Business shipments often hold significant value, and any damage can directly affect a company's bottom line. Marine cargo insurance policies can provide coverage for theft, malicious damage, shortages, non-delivery of goods, damages during loading and unloading, and cargo mishandling. You can tailor marine cargo insurance coverage to meet your specific business requirements, and it is available for a broad range of cargo and goods.</p>
                                    </div>
                                </Container>

                                <div className={`bg-yellowLight3 position-relative ${productStyle.lightYellowSec}`}>
                                    <img className={`${productStyle.whyGetImg}`} src='/product/whyGetBg.png' />
                                    <Container className='position-relative'>
                                        <h3 className='title-36 font-secondary font-weight-700 text-black mb-0'>How to File a Claim Under Marine Cargo Insurance?</h3>
                                        <ol className={`text-black title-20 mt-4 mt-xl-5 ${productStyle.listOrderData}`}>
                                            <li>Provide a copy of the insurance policy as proof of coverage.</li>
                                            <li>Submit the surveyor's report detailing the extent of damage or loss.</li>
                                            <li>Produce a copy of the bill of lading as proof of the shipping contract.</li>
                                            <li>Present a claim bill, specifying the incurred losses or damages.</li>
                                            <li>Share the original invoice list to provide details of shipped items and their values.</li>
                                            <li>Any correspondence with carriers demonstrating efforts to resolve the issue.</li>
                                        </ol>
                                    </Container>
                                </div>
                            </div>
                            <div id="scrollspyHeading4" className={`pt-0 ${productStyle.coverage}`}>
                                <Container>
                                    <div className={`${productStyle.tabWhatHeading}`}>
                                        <h3 className='title-42 font-secondary font-weight-700 text-yellow mb-lg-4'>
                                            <span className='d-none d-lg-inline-block me-2'>
                                                <svg width="40" height="40" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.53333 1.03333C8.53333 0.738781 8.29455 0.5 8 0.5C7.70545 0.5 7.46667 0.738781 7.46667 1.03333V7.2124L4.22877 3.97451C4.02049 3.76623 3.68281 3.76623 3.47453 3.97451C3.26625 4.18279 3.26625 4.52047 3.47453 4.72875L6.71244 7.96667H0.533333C0.238782 7.96667 0 8.20545 0 8.5C0 8.79455 0.238782 9.03333 0.533333 9.03333H6.71244L3.47453 12.2712C3.26625 12.4795 3.26625 12.8172 3.47453 13.0255C3.68281 13.2338 4.0205 13.2338 4.22878 13.0255L7.46667 9.7876V15.9667C7.46667 16.2612 7.70545 16.5 8 16.5C8.29455 16.5 8.53333 16.2612 8.53333 15.9667V9.78756L11.7712 13.0255C11.9795 13.2338 12.3172 13.2338 12.5255 13.0255C12.7338 12.8172 12.7338 12.4795 12.5255 12.2712L9.2876 9.03333H15.4667C15.7612 9.03333 16 8.79455 16 8.5C16 8.20545 15.7612 7.96667 15.4667 7.96667H9.2876L12.5255 4.72877C12.7338 4.52049 12.7338 4.1828 12.5255 3.97452C12.3172 3.76624 11.9795 3.76624 11.7712 3.97452L8.53333 7.21244V1.03333Z" fill="#ffb400" />
                                                </svg>
                                            </span>
                                            <span className='d-lg-none me-1'>
                                                <svg width="32" height="32" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.53333 1.03333C8.53333 0.738781 8.29455 0.5 8 0.5C7.70545 0.5 7.46667 0.738781 7.46667 1.03333V7.2124L4.22877 3.97451C4.02049 3.76623 3.68281 3.76623 3.47453 3.97451C3.26625 4.18279 3.26625 4.52047 3.47453 4.72875L6.71244 7.96667H0.533333C0.238782 7.96667 0 8.20545 0 8.5C0 8.79455 0.238782 9.03333 0.533333 9.03333H6.71244L3.47453 12.2712C3.26625 12.4795 3.26625 12.8172 3.47453 13.0255C3.68281 13.2338 4.0205 13.2338 4.22878 13.0255L7.46667 9.7876V15.9667C7.46667 16.2612 7.70545 16.5 8 16.5C8.29455 16.5 8.53333 16.2612 8.53333 15.9667V9.78756L11.7712 13.0255C11.9795 13.2338 12.3172 13.2338 12.5255 13.0255C12.7338 12.8172 12.7338 12.4795 12.5255 12.2712L9.2876 9.03333H15.4667C15.7612 9.03333 16 8.79455 16 8.5C16 8.20545 15.7612 7.96667 15.4667 7.96667H9.2876L12.5255 4.72877C12.7338 4.52049 12.7338 4.1828 12.5255 3.97452C12.3172 3.76624 11.9795 3.76624 11.7712 3.97452L8.53333 7.21244V1.03333Z" fill="#ffb400" />
                                                </svg>
                                            </span>
                                            Coverages & Exceptions in
                                        </h3>
                                        <div className='title-28 font-black font-weight-700 text-black font-secondary'>Marine Cargo Insurance</div>
                                    </div>
                                    <div className={`tabContainer my-4 my-lg-5 ${productStyle.coverageTab}`}>
                                        <span id='tabBtn' className="tabLink title-22 transition-all active">Coverages</span>
                                        <span id='tabBtn' className="tabLink title-22 transition-all">Exceptions</span>
                                    </div>
                                    <div className={`overflow-hidden ${productStyle.coverageTabPanel}`}>
                                        <div data-tab className="place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>Whether the cargo is being transported by sea, air, land, or inland waterways, marine insurance protects it against various risks and perils that may occur throughout the journey. Major accidents covered under marine insurance include:</div>
                                                </Col>
                                            </Row>
                                            <Row className='justify-content-between g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Collision</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This cover refers to the protection provided for physical damage or loss to cargo resulting from a collision or accident during transit. For example, If the vessel carrying the insured goods collides with another vessel, resulting in damage or loss to the cargo, the policy will provide coverage for the resulting expenses. It may also be extended to include collisions or accidents that may occur during the inland transportation of goods or cargo, by truck, train, or other forms of inland transport.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 font-secondry'>Fire accident</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This coverage protects against damages to any cargo or property on board that may be affected by a fire accident. It also covers additional expenses related to the fire, such as firefighting efforts or damages caused by smoke or water used to extinguish the fire.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Sinking</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Sinking coverage includes damages to any cargo or property on board resulting from the sinking or capsizing of the carrier. It also covers additional expenses incurred due to the sinking, such as salvage and recovery efforts, and liability for damages caused to other vessels or properties.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Natural calamities</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This coverage protects against damages or losses to the cargo caused by natural disasters like storms, hurricanes, earthquakes, or tsunamis. It covers losses to cargo or property on board and includes costs associated with salvage and recovery efforts, as well as liability for damages caused to other carriers or properties.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Reconditioning cost</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Reconditioning cost coverage provides reimbursement for expenses incurred to repair or restore a carrier to its original condition following a covered loss or damage. This may include repairs to the machinery, equipment as well as replacement of damaged or lost items. It also covers labor and materials costs for reconditioning, along with related expenses like shipping and storage</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Overturning</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>This coverage protects against damages or losses to cargo or property on board, as well as additional expenses related to the overturning, such as salvage and recovery efforts.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Explosion</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Explosion coverage protects against damages to the shipment and any cargo or property on board resulting from an explosion or similar event. It also covers additional expenses incurred due to the explosion, such as salvage and recovery efforts, and liability for damages caused to other carrier or property.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Stranding</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Stranding coverage protects against damages or losses to a shipment caused by it becoming stranded on a shoal, reef, or other obstruction. This coverage also includes damages to any cargo or property on board affected by the stranding.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Crisis Communication Cover</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>It covers the reasonable costs, charges, fees, and expenses incurred by an organization, in attaining the services of any public relations firm or crisis management firm to advise the organization for managing public communication.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Dedicated additional limit for Non-Executive Directors and Officers</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>With this add-on cover, you get an extra layer of protection that is added to the overall coverage limit for non-executive directors and officers of a company.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Bribes and Commission</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Directors & Officers policy excludes claims and losses arising from bribes and commissions.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Money Laundering</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Money laundering is a process that criminals use to hide the illegal source of their income. If a claim is made against a director or officer for something related to money laundering, they will not be covered under this policy.</div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div data-tab className="hidden place-content-center">
                                            <Row>
                                                <Col lg={8}>
                                                    <div className='title-20 text-black mb-4'>There are specific scenarios that a standard Marine Cargo insurance policy does not cover, including but not limited to:</div>
                                                </Col>
                                            </Row>
                                            <Row className='justify-content-between g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Willful acts by the insured</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>It excludes losses or damages arising from intentional or willful acts by the insured or its representatives, such as causing intentional damage to their own cargo and filing a fraudulent insurance claim.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 font-secondry'>Weight loss, volume loss, liquid leakage, or normal wear and tear:</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Coverage is excluded for losses or damages resulting from weight loss, volume loss, liquid leakage, or normal wear and tear of the insured item.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Inadequate packaging</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>It excludes losses arising from the insured's negligence or failure to take reasonable precautions in packaging or preparing the insured item for transport.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Inherent vice or nature</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Losses or damages arising from inherent defects or characteristics of the insured item are excluded.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Inadequate packaging</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>It excludes losses arising from the insured's negligence or failure to take reasonable precautions in packaging or preparing the insured item for transport.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Inherent vice or nature</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Losses or damages arising from inherent defects or characteristics of the insured item are excluded.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Damages arising from riots, strikes, or war</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>There is exclusion for losses or damages resulting from insured party's cargo being damaged or lost during events like riots, civil commotions, or war. However, some of these perils can be covered under certain conditions with an additional premium.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Delay in the delivery of goods</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>It excludes losses or damages resulting from a delay in the delivery of the insured goods, which doesn't result in any physical damage or loss to the goods themselves.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Default on financial obligation</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>It excludes coverage for losses or damages caused by the financial failure or default (such as failure of loan payments) of a party involved in the transportation or delivery of the insured goods. For example, this exclusion typically applies when the loss or damage to the cargo results from the financial inability of a party (such as a Freight Forwarder) to fulfill his contractual obligations related to the transportation or delivery of the goods.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>No Cover for Auditors Qualification, Emphasis Matter, a Contingent Liability, if any</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>If any claims or losses arise against the Director and Officer and the same is related to auditors' qualifications, emphasis matters, or contingent liabilities, they will not be covered.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Bribes and Commission</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Directors & Officers policy excludes claims and losses arising from bribes and commissions.</div>
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.coverageTabPanelCard}`}>
                                                        <div className='title-26 text-primary font-weight-600 mb-2 font-secondry'>Money Laundering</div>
                                                        <div className={`title-18 text-black ${productStyle.coverageTabPanelCardTitle}`}>Money laundering is a process that criminals use to hide the illegal source of their income. If a claim is made against a director or officer for something related to money laundering, they will not be covered under this policy.</div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>
                {/* product main end */}

                {/* --------claim example start---------- */}
                <div className={`${productStyle.claimSec}`}>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className={`${productStyle.ProductSecLeft}`}>
                                    <div className='polyBox border-primary bg-blueLight mb-4 text-primary title12 text-uppercase font-weight-600'>Some Examples</div>
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>Marine Cargo Examples</h3>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className={`tabContainer my-4 my-lg-5 ${productStyle.inciTab}`}>
                                    <span id='inciTabBtn' className="tabLink title-22 transition-all active">Incident 1</span>
                                    <span id='inciTabBtn' className="tabLink title-22 transition-all">Incident 2</span>
                                </div>
                                <div className={`pt-1 overflow-hidden ${productStyle.inciTabPanel}`}>
                                    <div data-incitab className={`${productStyle.inciTabPanelBox}`}>
                                        <Row className='g-4'>
                                            <Col lg={7}>
                                                <div className={`${productStyle.inciTabPanelBoxLeft}`}>
                                                    <div className='title-32 font-secondary font-weight-600 text-yellow mb-4'>Lorem Ipsum</div>
                                                    <div className='mb-4'>
                                                        <div className='title-18 font-weight-500 text-black m-0'>A company manufacturing electronics ships a cargo worth Rs 5 crore from India to Myanmar. During the voyage, a severe storm damages the shipment, causing the electronic goods to become inoperable and leading to a total loss. If the company had obtained marine cargo insurance before shipping the goods, they could have filed a claim with their insurer and received compensation for the damages incurred.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={5} className='col-lg-5 ps-lg-5 text-end'>
                                                <img src='/sample.png' />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div data-incitab className={`hidden ${productStyle.inciTabPanelBox}`}>
                                        <Row className='g-4'>
                                            <Col lg={7}>
                                                <div className={`${productStyle.inciTabPanelBoxLeft}`}>
                                                    <div className='title-32 font-secondary font-weight-600 text-yellow mb-4'>Lorem Ipsum</div>
                                                    <div className='mb-4'>
                                                        <div className='title-18 font-weight-500 text-black m-0'>A 35 yr old young entrepreneur runs an e-commerce store exporting wallets to customers worldwide, using a third-party courier for shipping. Regrettably, the entrepreneur didn't secure marine insurance, resulting in lost goods during transit. This loss led to financial difficulties and dissatisfied customers. With an appropriate insurance policy in place, the entrepreneur might have been able to recover the losses from the misplaced shipments.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={5} className='col-lg-5 ps-lg-5 text-end'>
                                                <img src='/sample.png' />
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* --------claim example end---------- */}

                {/* --------FAQ start---------- */}
                <div className={`${productStyle.ProdFAQ}`}>
                    <Container>
                        <Row>
                            <Col md={8} lg={6}>
                                <div className={`${productStyle.ProductSecLeft}`}>
                                    <div className='polyBox border-primary bg-blueLight mb-4 text-primary title12 text-uppercase font-weight-600'>Frequently Answered Questions</div>
                                    <h3 className={`title-42 font-secondary font-weight-700 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>About Marine Cargo Insurance</h3>
                                </div>
                            </Col>
                        </Row>
                        <div className='mt-4'>
                            <Accordion
                                title="What are the most common types of marine cargo insurance?"
                                content="Lorem ipsum dolor sit amet,"
                            />
                            <Accordion
                                title="What is inland marine insurance?"
                                content="Lorem ipsum dolor sit amet,"
                            />
                            <Accordion
                                title="What is the general average in marine insurance?"
                                content="Lorem ipsum dolor sit amet,"
                            />
                            <Accordion
                                title="What is an insurable interest in marine cargo insurance?"
                                content="Lorem ipsum dolor sit amet,"
                            />
                            <Accordion
                                title="What is marine cargo insurance?"
                                content="Lorem ipsum dolor sit amet,"
                            />
                            <Accordion
                                title="What is a constructive total loss in marine insurance?"
                                content="Lorem ipsum dolor sit amet,"
                            />
                            <Accordion
                                title="What is jettison in marine insurance?"
                                content="Lorem ipsum dolor sit amet,"
                            />
                            <Accordion
                                title="What is a marine survey for insurance?"
                                ccontent="Lorem ipsum dolor sit amet,"
                            />
                            <Accordion
                                title="What are the 5 principles of Marine Insurance?"
                                ccontent="Lorem ipsum dolor sit amet,"
                            />
                        </div>
                    </Container>
                </div>
                {/* --------FAQ end---------- */}

                {/* --------productStartup start---------- */}
                <div className={`${productStyle.productStartup}`}>
                    <Container>
                        <div className={`${productStyle.prodContainer}`}>
                            <div className='commonHeading text-center'>
                                <div className='polyBox border-primary bg-blueLight mb-4 text-primary title12 text-uppercase font-weight-600'>Our Products</div>
                                <h3 className={`title-42 font-secondary font-weight-600 text-black mb-0 ${productStyle.ProductSecLeftTitle}}`}>Business Protection for Startups & SMEs</h3>
                                <h4 className='title-20 text-black font-weight-500 mt-3 mb-0'>Secure the business & stakeholders against lawsuit expenses - Legal + Settlement</h4>
                            </div>
                            <div className={`${productStyle.productStartupListSec}`}>
                                {/*<div className={`tabContainer my-4 my-lg-5 ${productStyle.productStartupTab}`}>
                                    <span id='startupTabBtn' className="tabLink title-22 transition-all active">Liability Insurance</span>
                                    <span id='startupTabBtn' className="tabLink title-22 transition-all">Asset Insurance</span>
                                </div>
                                <div className={`pt-1 overflow-hidden ${productStyle.inciTabPanel}`}>
                                    <div data-startup className={`${productStyle.inciTabPanelBox}`}>
                                        <div className={`${productStyle.productStartupAsset}`}>
                                            <Row className='g-4'>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup1.png" />
                                                            <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Directors & Officers Insurance</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Venenatis at at magna ut vestibulum odio sed at faucibus. Ultrices facilisis laoreet sed porta id duis sapien et. Enim sem facilisis suscipit.</p>
                                                    </div>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup2.png" />
                                                            <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Cyber Crime  Insurance</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Diam at sit scelerisque nam. Vestibulum nunc gravida sed quisque. Nunc id diam non neque porttitor sed fermentum. Eu justo quis maecenas.</p>
                                                    </div>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup3.png" />
                                                            <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Crime/Fidelty Insurance</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Non enim maecenas purus aliquet tincidunt arcu. Lacus mi ullamcorper bibendum sed risus eget. Orci facilisis sit sodales nibh purus sed habitant.</p>
                                                    </div>
                                                </Col>
                                                <Col lg={2} className='d-none d-lg-inline-block'></Col>
                                                <Col lg={5}>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup4.png" />
                                                            <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Errors & Omissions Insurance</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Pulvinar nunc in sed malesuada congue. Dignissim sed aliquet vehicula facilisis natoque in ut. Urna ultrices vivamus quam vitae quam tortor.</p>
                                                    </div>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup5.png" />
                                                            <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>General Liability Insurance</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Morbi velit in quisque commodo enim penatibus. Dui posuere purus duis turpis integer ullamcorper. Arcu dignissim ultrices eu sapien.</p>
                                                    </div>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup6.png" />
                                                            <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Product Liability Insurance</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Lorem ipsum dolor sit amet consectetur. In quam euismod vestibulum in commodo. Massa tellus sit interdum pulvinar. Mus imperdiet scelerisque.</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                    <div data-incitab className={`hidden ${productStyle.inciTabPanelBox}`}>
                                        <div className={`${productStyle.productStartupAsset}`}>
                                            <Row className='g-4'>
                                                <Col md={5}>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup7.png" />
                                                            <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Fire Insurance</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Venenatis at at magna ut vestibulum odio sed at faucibus. Ultrices facilisis laoreet sed porta id duis sapien et. Enim sem facilisis suscipit.</p>
                                                    </div>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup8.png" />
                                                            <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Marine Insurance</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Diam at sit scelerisque nam. Vestibulum nunc gravida sed quisque. Nunc id diam non neque porttitor sed fermentum. Eu justo quis maecenas.</p>
                                                    </div>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup9.png" />
                                                            <h4 className='title-24 font-weight-600 text-primary font-secondary mt-2 mb-0'>Machine Breakdown</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Non enim maecenas purus aliquet tincidunt arcu. Lacus mi ullamcorper bibendum sed risus eget. Orci facilisis sit sodales nibh purus sed habitant.</p>
                                                    </div>
                                                </Col>
                                                <Col md={2}></Col>
                                                <Col md={5}>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup10.png" />
                                                            <h4 className='title-26 font-weight-600 text-primary font-secondary mb-0'>Contractors All Risk</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Ullamcorper elementum interdum pulvinar ut eget elit. Massa nibh eget morbi malesuada massa sed id sodales. Bibendum ipsum et a.</p>
                                                    </div>
                                                    <div className={`${productStyle.productStartupCard}`}>
                                                        <div>
                                                            <img src="/startup11.png" />
                                                            <h4 className='title-26 font-weight-600 text-primary font-secondary mb-0'>Erection All Risk</h4>
                                                        </div>
                                                        <p className='title-18 text-blueGray mt-2 mb-0'>Morbi velit in quisque commodo enim penatibus. Dui posuere purus duis turpis integer ullamcorper. Arcu dignissim ultrices eu sapien.</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>*/}
                                <IndustryBlock />
                                <div className={`${productStyle.productStartupIcon}`}>
                                    <Image src="/prdct_SDT_icon.svg" width="272" height="272" alt="Simple Digital & Transparent" />
                                </div>
                            </div>
                            <div className={`mt-5 ${productStyle.productStartupBottom}`}>
                                <Row>
                                    <Col>
                                        <ProductSchedule />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </div>
                {/* --------productStartup end---------- */}

                <BestBacked />

                <HowGetStarted />

                <div className="d-none d-md-block" style={{ height: "100px" }}></div>
                <div className="d-blok d-md-none" style={{ height: "40px" }}></div>
            </div>
            <Footer />

            <style jsx scope>
                {`
                .title-15 {
                    font-size: 15px;
                    line-height: 22.5px;
                }

                @media only screen and (max-width: 1699px) {
                    .title-42 {
                        font-size: 38px;
                        line-height: 52px;
                    }
                    .title-32 {
                        font-size: 28px;
                        line-height: 36px;
                    }
                    .title-24 {
                        font-size: 20px;
                        line-height: 32px;
                    } 
                }
                @media only screen and (max-width: 992px) {
                    .title-42 {
                        font-size: 26px;
                        line-height: 38px;
                    }
                    .title-36 {
                        font-size: 28px;
                        line-height: 34px;
                    }
                    .title-32 {
                        font-size: 26px;
                        line-height: 32px;
                    }
                    .title-28 {
                        font-size: 22px;
                        line-height: 30px;
                    }
                    .title-26 {
                        font-size: 22px;
                        line-height: 30px;
                    }
                    .title-24 {
                        font-size: 20px;
                        line-height: 26px;
                    }
                    .title-22 {
                        font-size: 18px;
                        line-height: 24px;
                    }
                    .title-20 {
                        font-size: 16px;
                        line-height: 24px;
                    }
                    .title-18 {
                        font-size: 16px;
                        line-height: 24px;
                    }
                }
            `}
            </style>
        </>
    )
}
