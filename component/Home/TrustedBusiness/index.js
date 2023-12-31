import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import styles from "./trustedBusiness.module.css";
function TrustedBusiness() {
  const businesses = [
    { id: "b1", img: "/clients/client1.png" },
    { id: "b2", img: "/clients/client2.png" },
    { id: "b3", img: "/clients/client3.png" },
    { id: "b4", img: "/clients/client4.png" },
    { id: "b5", img: "/clients/client5.png" },
    { id: "b6", img: "/clients/client6.png" },
    { id: "b7", img: "/clients/client7.png" },
    { id: "b8", img: "/clients/client8.png" },
    { id: "b9", img: "/clients/client9.png" },
    { id: "b10", img: "/clients/client10.png" },
    { id: "b11", img: "/clients/client11.png" },
    { id: "b12", img: "/clients/client12.svg" },
    { id: "b13", img: "/clients/client13.svg" },
    { id: "b14", img: "/clients/client14.svg" },
    { id: "b15", img: "/clients/client15.svg" },
    { id: "b16", img: "/clients/client16.svg" },
    { id: "b17", img: "/clients/client17.svg" },
    { id: "b18", img: "/clients/client18.svg" },
    { id: "b19", img: "/clients/client19.svg" },
    { id: "b20", img: "/clients/client20.svg" },
    { id: "b21", img: "/clients/client21.svg" },
    { id: "b22", img: "/clients/client1.png" },
    { id: "b23", img: "/clients/client2.png" },
    { id: "b24", img: "/clients/client3.png" },
    { id: "b25", img: "/clients/client4.png" },
    { id: "b26", img: "/clients/client5.png" },
    { id: "b27", img: "/clients/client6.png" },
    { id: "b28", img: "/clients/client7.png" },
    { id: "b29", img: "/clients/client8.png" },
    { id: "b30", img: "/clients/client9.png" },
    { id: "b31", img: "/clients/client10.png" },
    { id: "b32", img: "/clients/client11.png" },
    { id: "b33", img: "/clients/client12.svg" },
    { id: "b34", img: "/clients/client13.svg" },
    { id: "b35", img: "/clients/client14.svg" },
    { id: "b36", img: "/clients/client15.svg" },
    { id: "b37", img: "/clients/client16.svg" },
    { id: "b38", img: "/clients/client17.svg" },
    { id: "b39", img: "/clients/client18.svg" },
    { id: "b40", img: "/clients/client19.svg" },
    { id: "b41", img: "/clients/client20.svg" },
    { id: "b42", img: "/clients/client21.svg" },
  ]
  const params = {
    // direction: 'horizontal',
    // loop: true,
    // speed: 1000,
    // spaceBetween: 30,

  };
  return (
    <div className='container-fluid p-0'>
      <div className='row m-0'>
        <div className={`col-lg-12 p-0 mx-auto text-center trusted-business ${styles.trustedBusiness}`}>
          <h2 className='title24 mb-3 font-weight-500 text-primary px-sm-0 px-5'>Trusted by 500+ businesses across India</h2>
          <div className='pt-2'>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, Autoplay]}
              // arrows={true}
              navigation
              className={`smoothSwiper ${styles.fadeSlider} ${styles.fadeSliderLeft} ${styles.fadeSliderRight}`}
              spaceBetween={50}
              infinite="true"
              loop="true"
              speed={3000}
              autoplay={{
                  delay: 0,
                  disableOnInteraction: false
              }}
              breakpoints={{
                1399: {
                  slidesPerView: 8,
                },
                1200: {
                  slidesPerView: 6,
                },
                992: {
                  slidesPerView: 5,
                },
                0: {
                  slidesPerView: 3,
                },

              }}
            >
              {businesses.map((item) =>
                <SwiperSlide key={item.id}>
                    <div className="cmpnySlideCol">
                      <img src={item.img} width="" height="" alt="Bimakavach" />
                    </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
          <div className='@d-block d-none mt-3'>

            <Swiper
              // {...params}
              modules={[Navigation, Pagination, Scrollbar, Autoplay]}
              spaceBetween={50}

              className={``}
              infinite="true"
              loop="true"
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false
              }}
              breakpoints={{
                1399: {
                  slidesPerView: 7,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 6,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                576: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                320: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },

              }}
            >

              <SwiperSlide><img src='/trusted3.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted1.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted3.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>
              <SwiperSlide><img src='/trusted1.png' /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="d-none d-md-block" style={{ height: "90px" }}></div>
      <div className="d-blok d-md-none" style={{ height: "80px" }}></div>

      <style jsx scope>
        {` 
          .cmpnySlideCol {
            position: relative;
            height: 75px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease 0s;
          }
          .cmpnySlideCol img {
            position: absolute;
            width: auto !important;
            height: auto !important;
            max-width: 90% !important;
            max-height: 90% !important;
            margin: auto;
            filter: grayscale(1);
            opacity: 0.5;
            transition: all 0.4s ease 0s;
          }
          .cmpnySlideCol:hover img {
            filter: grayscale(0);
            opacity: 1;
          }
          @media only screen and (max-width: 575px) {
              .trusted-business {
                  margin-top: 70px;
              }
              .container{
                padding: 0;
              }
              .row{
                margin-left: 0;
                margin-right: 0;
              }
              .swiper-slide{
                width: auto !important;
              }
              .cmpnySlideCol {
                height: 50px;
              }
              .cmpnySlideCol img {
                max-width: 100% !important;
                max-height: 50px !important;
              }
              .startupCols-cardBox{
                margin-bottom: 30px;
              }
          }
        `}
      </style>
    </div>
  )
}

export default TrustedBusiness