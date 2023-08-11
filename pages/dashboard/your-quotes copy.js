import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import {Row, Col} from 'react-bootstrap';

export default function YourQuotes() {

  return (
    <>
      <Head>
        <title>Your Quotes | BimaKavach</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Head>
      <section class="dashboardOuter dashboardOuterMedium">
        <div className='dashboardMobileHeader'>
          <Row className="align-items-center">
            <Col>
              <div className='mblLogo'>
                <Link href="/">
                  <svg width="93" height="76" viewBox="0 0 93 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.26987 75.7847C13.3591 37.5135 51.68 6.37232 91.705 6.33506L92.2137 3.56916C92.557 1.70591 91.0598 0 89.0827 0H16.0724C14.5297 0 13.2102 1.05998 12.9414 2.51332L0.0491879 72.4308C-0.294108 74.2941 1.20316 76 3.18021 76H6.27814C6.27814 75.9296 6.25746 75.8592 6.27401 75.7847H6.26987Z" fill="#0E2B72"/>
                    <path d="M50.8104 59.5832H47.0093C46.8604 59.5832 46.7363 59.6826 46.7074 59.8193L46.1035 62.8419C46.0663 63.024 46.2111 63.1897 46.4055 63.1897H50.1693C51.3315 63.1897 53.1597 62.8253 53.139 61.2105C53.1183 60.0801 51.8361 59.5791 50.8104 59.5791V59.5832Z" fill="#0E2B72"/>
                    <path d="M51.7947 54.1521H48.0391C47.8902 54.1521 47.762 54.2556 47.7372 54.3922L47.245 57.0091C47.2119 57.1871 47.3566 57.3527 47.5469 57.3527H51.2363C52.9238 57.3527 53.7841 56.5288 53.7841 55.6054C53.7841 54.6821 53.1017 54.1479 51.7988 54.1479L51.7947 54.1521Z" fill="#0E2B72"/>
                    <path d="M9.13086 75.9927H76.1935C77.7362 75.9927 79.0556 74.9327 79.3245 73.4794L91.1992 9.06885C52.7666 9.36697 16.0878 39.2453 9.13086 75.9927ZM54.5245 58.8177C55.6247 59.4967 56.1086 60.6561 55.8604 61.8858C55.3186 64.5938 52.5888 65.397 49.739 65.397H43.4398C43.2495 65.397 43.1047 65.2314 43.1378 65.0534L45.4995 52.2052C45.5243 52.0644 45.6526 51.9609 45.8015 51.9609H52.2083C54.9381 51.9609 56.303 53.4764 56.3444 55.203C56.3609 56.3002 55.8191 57.5672 54.5328 58.3167C54.3342 58.4326 54.3342 58.6976 54.5245 58.8135V58.8177ZM71.8009 52.288C69.9521 53.9153 68.1074 55.5466 66.2586 57.1739C66.1138 57.3022 65.9815 57.3933 66.1097 57.6376C67.4415 60.1468 68.7568 62.6601 70.0762 65.1734C70.1093 65.2356 70.2995 65.4426 70.1631 65.4467C67.9461 65.4591 69.0711 65.4509 66.8542 65.4633C66.606 65.4633 66.515 65.3556 66.4199 65.1693C65.5058 63.3433 64.5835 61.5215 63.6652 59.6996C63.5453 59.4595 63.2227 59.4056 63.0242 59.5795C62.3913 60.1427 61.7668 60.6892 61.1588 61.2441C61.0719 61.3227 61.0512 61.4759 61.0264 61.6001C60.8072 62.7678 60.5839 63.9396 60.3853 65.1113C60.3191 65.4881 60.2033 65.484 59.463 65.484C58.7805 65.484 57.2791 65.4426 57.0516 65.4302C57.8747 60.9915 58.6895 56.5776 59.5126 52.1472C59.5292 52.052 59.616 51.9858 59.7111 51.9858H62.565C62.6891 51.9858 62.7884 52.0934 62.7636 52.2135C62.4699 53.8407 62.1763 55.4556 61.866 57.149C62.0398 57.0041 62.139 56.9213 62.2342 56.8344C63.9341 55.2941 65.634 53.7579 67.3257 52.2135C67.5284 52.0272 67.7352 51.9568 68.0123 51.9568C69.2324 51.9692 70.4526 51.9609 71.6686 51.9609H72.0532C72.0739 52.0437 71.8795 52.2094 71.7968 52.2797L71.8009 52.288Z" fill="#0E2B72"/>
                  </svg>
                </Link>
              </div>
            </Col>
            <Col xs="auto">
              <div className='mblMenu'>
                <svg xmlns="http://www.w3.org/2000/svg" width="37.263" height="23.304" viewBox="0 0 37.263 23.304">
                  <g id="Group_2935" data-name="Group 2935" transform="translate(-310.737 -79.519)">
                    <path id="Path_46" data-name="Path 46" d="M0,0H26.517" transform="translate(319.982 81.019)" fill="none" stroke="#351562" strokeLinecap="round" strokeWidth="3"/>
                    <path id="Path_47" data-name="Path 47" d="M0,0H20.689" transform="translate(325.811 91.17)" fill="none" stroke="#351562" strokeLinecap="round" strokeWidth="3"/>
                    <path id="Path_48" data-name="Path 48" d="M0,0H34.263" transform="translate(312.237 101.322)" fill="none" stroke="#351562" strokeLinecap="round" strokeWidth="3"/>
                  </g>
                </svg>
              </div>
            </Col>
          </Row>
        </div>
        <div className='dashSidebar'>
          <div className='sdbrClosebtn'>
            <button type="button" class="btn-close text-reset"></button>
          </div>
          <div className='sdbrLogo'>
            <Link href="/">
              <span>
                <svg width="93" height="76" viewBox="0 0 93 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.26987 75.7847C13.3591 37.5135 51.68 6.37232 91.705 6.33506L92.2137 3.56916C92.557 1.70591 91.0598 0 89.0827 0H16.0724C14.5297 0 13.2102 1.05998 12.9414 2.51332L0.0491879 72.4308C-0.294108 74.2941 1.20316 76 3.18021 76H6.27814C6.27814 75.9296 6.25746 75.8592 6.27401 75.7847H6.26987Z" fill="#0E2B72"/>
                  <path d="M50.8104 59.5832H47.0093C46.8604 59.5832 46.7363 59.6826 46.7074 59.8193L46.1035 62.8419C46.0663 63.024 46.2111 63.1897 46.4055 63.1897H50.1693C51.3315 63.1897 53.1597 62.8253 53.139 61.2105C53.1183 60.0801 51.8361 59.5791 50.8104 59.5791V59.5832Z" fill="#0E2B72"/>
                  <path d="M51.7947 54.1521H48.0391C47.8902 54.1521 47.762 54.2556 47.7372 54.3922L47.245 57.0091C47.2119 57.1871 47.3566 57.3527 47.5469 57.3527H51.2363C52.9238 57.3527 53.7841 56.5288 53.7841 55.6054C53.7841 54.6821 53.1017 54.1479 51.7988 54.1479L51.7947 54.1521Z" fill="#0E2B72"/>
                  <path d="M9.13086 75.9927H76.1935C77.7362 75.9927 79.0556 74.9327 79.3245 73.4794L91.1992 9.06885C52.7666 9.36697 16.0878 39.2453 9.13086 75.9927ZM54.5245 58.8177C55.6247 59.4967 56.1086 60.6561 55.8604 61.8858C55.3186 64.5938 52.5888 65.397 49.739 65.397H43.4398C43.2495 65.397 43.1047 65.2314 43.1378 65.0534L45.4995 52.2052C45.5243 52.0644 45.6526 51.9609 45.8015 51.9609H52.2083C54.9381 51.9609 56.303 53.4764 56.3444 55.203C56.3609 56.3002 55.8191 57.5672 54.5328 58.3167C54.3342 58.4326 54.3342 58.6976 54.5245 58.8135V58.8177ZM71.8009 52.288C69.9521 53.9153 68.1074 55.5466 66.2586 57.1739C66.1138 57.3022 65.9815 57.3933 66.1097 57.6376C67.4415 60.1468 68.7568 62.6601 70.0762 65.1734C70.1093 65.2356 70.2995 65.4426 70.1631 65.4467C67.9461 65.4591 69.0711 65.4509 66.8542 65.4633C66.606 65.4633 66.515 65.3556 66.4199 65.1693C65.5058 63.3433 64.5835 61.5215 63.6652 59.6996C63.5453 59.4595 63.2227 59.4056 63.0242 59.5795C62.3913 60.1427 61.7668 60.6892 61.1588 61.2441C61.0719 61.3227 61.0512 61.4759 61.0264 61.6001C60.8072 62.7678 60.5839 63.9396 60.3853 65.1113C60.3191 65.4881 60.2033 65.484 59.463 65.484C58.7805 65.484 57.2791 65.4426 57.0516 65.4302C57.8747 60.9915 58.6895 56.5776 59.5126 52.1472C59.5292 52.052 59.616 51.9858 59.7111 51.9858H62.565C62.6891 51.9858 62.7884 52.0934 62.7636 52.2135C62.4699 53.8407 62.1763 55.4556 61.866 57.149C62.0398 57.0041 62.139 56.9213 62.2342 56.8344C63.9341 55.2941 65.634 53.7579 67.3257 52.2135C67.5284 52.0272 67.7352 51.9568 68.0123 51.9568C69.2324 51.9692 70.4526 51.9609 71.6686 51.9609H72.0532C72.0739 52.0437 71.8795 52.2094 71.7968 52.2797L71.8009 52.288Z" fill="#0E2B72"/>
                </svg>
              </span>
            </Link>
          </div>
          <div className='sdbrDropOuter mt-3 mt-md-4'>
            <div className='sdbrDrop'>
              <div className='sdbrDropInput'>
                <input type="text" placeholder="" className="bInsurance" readonly="" />
                <span>
                  <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_9_2)">
                    <path d="M0.665025 3.166C2.85302 3.166 6.00202 3.266 8.18902 3.225C7.95302 3.463 7.72003 3.703 7.49503 3.951C6.89503 4.604 7.86803 5.578 8.46603 4.922C9.12703 4.197 9.83502 3.522 10.566 2.861C10.6362 2.80122 10.6921 2.72651 10.7296 2.64234C10.7672 2.55817 10.7854 2.46666 10.783 2.37453C10.7806 2.28239 10.7576 2.19196 10.7158 2.10985C10.6739 2.02775 10.6142 1.95605 10.541 1.9C10.49 1.82721 10.4264 1.76421 10.353 1.714C9.67803 1.229 9.03103 0.713999 8.39703 0.172999C7.72503 -0.396001 6.74902 0.573 7.42602 1.144C7.70802 1.38267 7.99336 1.616 8.28203 1.844C6.06403 1.89 2.88202 1.792 0.665025 1.787C0.482158 1.787 0.306781 1.85964 0.177475 1.98895C0.0481685 2.11825 -0.0244751 2.29363 -0.0244751 2.4765C-0.0244751 2.65937 0.0481685 2.83474 0.177475 2.96405C0.306781 3.09336 0.482158 3.166 0.665025 3.166V3.166Z" fill="white"/>
                    <path d="M10.115 5.914C7.896 5.914 4.715 6.01399 2.498 5.97099C2.786 5.73966 3.07133 5.50633 3.354 5.27099C4.031 4.69799 3.054 3.73098 2.383 4.29998C1.749 4.83698 1.102 5.35598 0.426997 5.84098C0.355791 5.89171 0.294167 5.9547 0.244997 6.02699C0.17183 6.08304 0.112126 6.15474 0.070257 6.23684C0.0283878 6.31895 0.0054135 6.40939 0.00301665 6.50152C0.000619803 6.59366 0.0188611 6.68516 0.0564046 6.76933C0.0939482 6.8535 0.149843 6.92821 0.219997 6.98799C0.945997 7.64699 1.654 8.32399 2.315 9.04899C2.915 9.70499 3.882 8.73098 3.286 8.07798C3.06 7.82998 2.827 7.58999 2.592 7.35199C4.779 7.39399 7.928 7.297 10.116 7.293C10.2989 7.29286 10.4742 7.22009 10.6034 7.09069C10.7326 6.96129 10.8051 6.78586 10.805 6.60299C10.8049 6.42013 10.7321 6.24479 10.6027 6.11558C10.4733 5.98637 10.2979 5.91387 10.115 5.914Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_9_2">
                    <rect width="10.779" height="9.261" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
              <div className='sdbrDropInputSmall'>
                <span className="bInsurance">BI</span>
              </div>
            </div>
          </div>
          <div className='sdbrLnksList'>
            <div className='sdbrLnksItem active'>
              <Link href="/">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24.737" height="24.74" viewBox="0 0 24.737 24.74">
                    <path id="Path_253" data-name="Path 253" d="M368.445,795.422l0,0-10.092-10.092a2.276,2.276,0,0,0-3.221,0l-10.087,10.086-.01.01a2.277,2.277,0,0,0,1.516,3.88l.07,0h.4v7.427a2.669,2.669,0,0,0,2.665,2.665h3.948a.725.725,0,0,0,.725-.725v-5.822a1.217,1.217,0,0,1,1.216-1.217h2.33a1.217,1.217,0,0,1,1.216,1.217v5.822a.725.725,0,0,0,.725.725h3.949a2.669,2.669,0,0,0,2.666-2.665v-7.427h.373a2.277,2.277,0,0,0,1.612-3.886Zm-1.026,2.195a.825.825,0,0,1-.586.243h-1.1a.725.725,0,0,0-.725.724v8.152a1.217,1.217,0,0,1-1.216,1.216h-3.223v-5.1a2.669,2.669,0,0,0-2.665-2.665h-2.33a2.668,2.668,0,0,0-2.665,2.665v5.1h-3.223a1.218,1.218,0,0,1-1.217-1.216v-8.152a.725.725,0,0,0-.724-.724h-1.079l-.034,0a.827.827,0,0,1-.57-1.412h0l10.092-10.091a.826.826,0,0,1,1.17,0l10.089,10.088.005,0A.83.83,0,0,1,367.419,797.616Z" transform="translate(-344.372 -784.661)" fill="currentColor"/>
                  </svg>
                </span>
                <h4>Your Quotes</h4>
              </Link>
            </div>
            <div className='sdbrLnksItem'>
              <Link href="/">
                <span>

                </span>
                <h4>Your Policies</h4>
              </Link>
            </div>
            <div className='sdbrLnksItem'>
              <Link href="/">
                <span>
                  
                </span>
                <h4>Claims & Requests</h4>
              </Link>
            </div>
            <div className='sdbrLnksItem'>
              <Link href="/">
                <span>
                  
                </span>
                <h4>Shop Coverages</h4>
              </Link>
            </div>
            <div className='sdbrLnksItem'>
              <Link href="/">
                <span>
                  
                </span>
                <h4>Support</h4>
              </Link>
            </div>
            <div className='sdbrLnksItem'>
              <Link href="/">
                <span>
                  
                </span>
                <h4>Profile</h4>
              </Link>
            </div>
            <div className='sdbrLnksItem'>
              <Link href="/">
                <span>
                  
                </span>
                <h4>Logout</h4>
              </Link>
            </div>
          </div>
        </div>
        <div className='dashboardMainCard'>
          <div className='hideSidebarBtn'>
            <div className='hideBtn'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="4.562" height="18.345" viewBox="0 0 4.562 18.345">
                  <path id="Path_993" data-name="Path 993" d="M2.28,0,0,7.737,2.28,15.87" transform="translate(1.04 1.242)" fill="none" stroke="#210647" strokeLinecap="round" strokeWidth="2"/>
                </svg> 
              </span>
            </div>
          </div>
          <div className='dashboardHeader mb-3 mb-md-4 d-none d-md-block'>
            <Row className='g-2 g-md-3 d-md-flex align-items-center justify-content-between'>
              <Col md>
                <div className='dashUserProCol'>
                  <span>F</span>
                  <div className='dashUserTtl'>
                    <h4>Welcome back, <span>Frontend</span></h4>
                    <p>CEO</p>
                  </div>
                </div>
              </Col>
              <Col md="auto">
                <div className='dashUserInfoCol'>
                  <h4>
                    <Link href="mailto:frontend@bimakavach.com">frontend@bimakavach.com</Link>
                  </h4>
                  <p>Last Login: 27 Jul 2023, 10:58 am</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className='dashboardBody'>

          </div>
        </div>
      </section>
    </>
  )
}
