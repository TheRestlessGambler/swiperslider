import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './cardSlider.css';
import { Autoplay,EffectCoverflow, Pagination } from 'swiper/modules';

// Import JSON file
import imagesData from './images.json';

class CardSlider extends Component {
  render() {
    // Calculate the index of the center image
    const centerIndex = Math.floor(imagesData.length / 2);

    return (
      <div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Autoplay,EffectCoverflow, Pagination]}
          className="mySwiper"
          // Set the initial slide to the center index
          initialSlide={centerIndex}
          // Enable infinite loop
          loop={true}
          
          
        >
          {/* Map through image source links from JSON */}
          {imagesData.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.src} alt={`Image ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}

export default CardSlider;
