import './assets/css/style.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel, Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css';

import AnimatedCursor from "react-animated-cursor"

import { Header } from './components/header';
import { Hero } from './components/hero';

SwiperCore.use([Mousewheel, Pagination]);


function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={5}
        outerSize={1}
        color='196, 40, 143'
        outerAlpha={0.5}
        innerScale={0}
        outerScale={80}
      />
      <Header />
      <Swiper className='swiper-page' spaceBetween={0} slidesPerView={1} pagination={{ clickable: true }} direction={'vertical'} speed={1000} mousewheel={true}>
        <SwiperSlide><Hero /></SwiperSlide>
        <SwiperSlide><section>section</section></SwiperSlide>
        <SwiperSlide><section>section</section></SwiperSlide>
        <SwiperSlide><section id='faq'>section</section></SwiperSlide>


      </Swiper>
    </>
  );
}

export default App;
