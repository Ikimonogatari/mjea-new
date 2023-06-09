import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "./../assets/img/zuraglal.png";
import { EffectFade } from "swiper";
import LazyLoad from "react-lazyload";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Pagination } from "swiper";

const Hero2Mobile = () => {
  return (
    <section className='agency-hero-wrapper hero-wrapper fix'>
      {/* <img
        src={slide1}
        className='w-full h-full absolute
      '
      /> */}
      <Swiper
        className='agency-slider-active'
        pagination={true}
        modules={[Pagination, EffectFade]}
        effect={"fade"}
        loop>
        <SwiperSlide>
          <LazyLoad>
            <div
              className='single-agency-slide bg-cover'
              style={{ backgroundImage: `url(${slide1})` }}>
              <div className='container'>
                <div className='row'>
                  <div className='col-xl-9 col-md-10 col-12'>
                    <div className='hero-contents'>
                      <h1 className='text-white'>
                        <br />
                        <br />
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </LazyLoad>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero2Mobile;
