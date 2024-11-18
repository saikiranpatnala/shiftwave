import React from 'react';
import './Successstories.css';
import Successicon from "./success-head-icon.svg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sample data for cards
const cardData = [
  { id: 1, image: "/components/successstories/images/5am-banner.webp", badge: "5am Fresh", title: "New heights, ranking for over 1000 keywords & 10000+ orders", para: "Online soared to new heights, ranking for over 1000 keywords and processing 10,000+ orders, solidifying its ..." },
  { id: 2, image: "/components/successstories/images/sushoku.webp", badge: "Soshoku", title: "Lorem ipsum dolor sit explicabo adipisicing elit", para: "Online soared to new heights, ranking for over 1000 keywords and processing 10,000+ orders, solidifying its ..." },
  { id: 3, image: "/components/successstories/images/koncept.webp", badge: "Koncept Skin", title: "Lorem ipsum dolor sit explicabo adipisicing elit", para: "Online soared to new heights, ranking for over 1000 keywords and processing 10,000+ orders, solidifying its ..." },
  { id: 4, image: "/components/successstories/images/5am-banner.webp", badge: "5am Fresh", title: "Lorem ipsum dolor sit explicabo adipisicing elit", para: "Online soared to new heights, ranking for over 1000 keywords and processing 10,000+ orders, solidifying its ..." },
  { id: 5, image: "/components/successstories/images/sushoku.webp", badge: "Koncept Skin", title: "Lorem ipsum dolor sit explicabo adipisicing elit", para: "Online soared to new heights, ranking for over 1000 keywords and processing 10,000+ orders, solidifying its ..." },
  { id: 6, image: "/components/successstories/images/koncept.webp", badge: "Designer", title: "Lorem ipsum dolor sit explicabo adipisicing elit", para: "Online soared to new heights, ranking for over 1000 keywords and processing 10,000+ orders, solidifying its ..." },
];

const Successstories = () => {
  return (
    <div className="container padding-1">
      <div className="ourprocess-main ">
        <div className="heading-with-icon">
          <img src={Successicon} alt="Our Process" />
          <h2>Success Stories</h2>
          
          {/* Custom Navigation Buttons */}
          <div className="custom-navigation">
            <div><button className="custom-prev"><IoIosArrowBack /></button></div>
            <div><button className="custom-next"><IoIosArrowForward /></button></div>
          </div>
        </div>
      </div>
      <div className='success-slider'>
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={30}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id} className="card-item">
              <a href="#" className="card-link">
                <img src={card.image} alt={card.badge} className="card-image" />
                <p className={`badge badge-${card.badge.toLowerCase()}`}>{card.badge}</p>
                <h2 className="card-title">{card.title}</h2>
                <p className="card-para">{card.para}</p>
                <button className="card-button book-button"><a href="#">Explore</a></button>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom-navigation-mob">
            <div><button className="custom-prev"><IoIosArrowBack /></button></div>
            <div><button className="custom-next"><IoIosArrowForward /></button></div>
          </div>
    </div>
  );
};

export default Successstories;
