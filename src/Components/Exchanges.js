import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import altex from "../assets/img/altex.png";
import capex from "../assets/img/capexEdited.png";
import complex from "../assets/img/Logo-black.png";
import corex from "../assets/img/corex.png";
import denode from "../assets/img/White-base.png";
import idax from "../assets/img/logo-dark.png";
import nce from "../assets/img/nce.png";
import octagon from "../assets/img/octagon.png";
import trade from "../assets/img/trade.svg";
import xmeta from "../assets/img/x-meta.png";
import zoos from "../assets/img/zoos.png";
import coinhub from "../assets/img/coinhub.png";
import { nanoid } from "nanoid";
import LazyLoad from "react-lazyload";

function IndividualIntervalsExample() {
  const companies = [
    { img: altex, link: "https://altex.mn" },
    { img: capex, link: "https://capex.mn" },
    { img: complex, link: "https://complex.mn" },
    { img: corex, link: "https://www.corex.mn" },
    { img: denode, link: "https://denode.io" },
    { img: nce, link: "https://ncx.mn" },
    { img: octagon, link: "https://octagon.mn" },
    { img: trade, link: "https://trade.mn" },
    { img: zoos, link: "https://zoos.digital" },
  ];
  const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2850,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    dots: false,
  };

  return (
    <LazyLoad>
      <div id='partners' className=''>
        <Slider
          {...settings}
          adaptiveHeight={false}
          className='h-[40px] lg:h-[60px]'>
          {companies.map((company) => (
            <div
              key={nanoid()}
              className='mx-auto relative sm:w-[60px] w-[120px] text-center h-[40px] lg:h-[60px] transition ease-in shadow-left-right duration-100 mt-[6px]'>
              <div className='md:w-7/12 w-10/12 shrink-0 mx-auto'>
                <div className='flex justify-center items-center relative w-full bg-white lg:h-12 h-5'>
                  <a
                    href={company.link}
                    target='_blank'
                    className='flex items-center'>
                    <img
                      src={company.img}
                      alt=''
                      layout='fill'
                      className='mx-auto mt-3 lg:h-8 h-5'
                      loading='lazy'
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div className='mx-auto relative sm:w-[60px] w-[120px] text-center h-[40px] lg:h-[60px] transition ease-in shadow-left-right duration-100 mt-[6px]'>
            <div className='md:w-7/12 w-10/12 shrink-0  mx-auto'>
              <div className='flex justify-center items-center relative w-full bg-white lg:h-12 h-5'>
                <a
                  href='https://www.idax.exchange'
                  target='_blank'
                  className='flex items-center'>
                  <img
                    src={idax}
                    alt=''
                    layout='fill'
                    className='mx-auto mt-3 sm:mt-2 lg:h-6 md:h-5 sm:h-4 h-3'
                    loading='lazy'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='mx-auto relative sm:w-[60px] w-[120px] text-center h-[40px] lg:h-[60px] transition ease-in shadow-left-right duration-100 mt-[6px]'>
            <div className='md:w-7/12 w-10/12 shrink-0  mx-auto'>
              <div className='flex justify-center items-center relative w-full bg-white lg:h-12 h-5'>
                <a
                  href='https://www.coinhub.mn'
                  target='_blank'
                  className='flex items-center'>
                  <img
                    src={coinhub}
                    alt=''
                    layout='fill'
                    className='mx-auto mt-3 sm:mt-4 md:h-4 h-2'
                    loading='lazy'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='mx-auto relative sm:w-[60px] w-[120px] text-center h-[40px] lg:h-[60px] transition ease-in shadow-left-right duration-100 mt-[6px]'>
            <div className='md:w-7/12 w-10/12 shrink-0  mx-auto'>
              <div className='flex justify-center items-center relative w-full bg-white lg:h-12 h-5'>
                <a
                  href='https://www.x-meta.com'
                  target='_blank'
                  className='relative flex justify-center items-center'>
                  <img
                    src={xmeta}
                    layout='fill'
                    alt=''
                    className='mx-auto h-8 mt-4 sm:h-12'
                    loading='lazy'
                  />
                </a>
              </div>
            </div>
          </div>
        </Slider>
        {/* <Carousel
        pause={false}
        slide={true}
        interval={1750}
        keyboard={false}
        indicators={false}
        controls={false}
        className='smooth-carousel'>
        <Carousel.Item>
          <div className='flex'>
            {companies.slice(0, 4).map((company) => (
              <div
                key={nanoid()}
                className='mx-auto relative sm:w-full text-center h-[30px] sm:h-[60px] transition ease-in lg:shadow-md duration-100 my-2'>
                <div className='md:w-7/12 w-10/12 shrink-0 mx-auto'>
                  <div className='flex justify-center items-center relative w-full lg:h-12 h-5'>
                    <a href={company.link} target='_blank'>
                      <img
                        src={company.img}
                        alt=''
                        layout='fill'
                        className='mx-auto sm:h-8 h-5'
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='flex'>
            {companies.slice(4, 8).map((company) => (
              <div
                key={nanoid()}
                className='mx-auto relative sm:w-full text-center h-[30px] sm:h-[60px] transition ease-in lg:shadow-md duration-100 my-2'>
                <div className='md:w-7/12 w-10/12 shrink-0 mx-auto'>
                  <div className='flex justify-center items-center relative w-full lg:h-12 h-5'>
                    <a href={company.link} target='_blank'>
                      <img
                        src={company.img}
                        alt=''
                        layout='fill'
                        className='mx-auto sm:h-8 h-5'
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          {" "}
          <div className='flex'>
            <div className='mx-auto relative sm:w-full text-center h-[30px] sm:h-[60px] transition ease-in lg:shadow-md duration-100 my-2'>
              <div className='md:w-7/12 w-10/12 shrink-0  mx-auto'>
                <div className='flex justify-center items-center relative w-full lg:h-12 h-5'>
                  <a href='https://www.idax.exchange' target='_blank'>
                    <img
                      src={idax}
                      alt=''
                      layout='fill'
                      className='mx-auto mt-[5px] lg:mt-0 sm:h-6 h-4'
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='mx-auto relative sm:w-full text-center h-[30px] sm:h-[60px] transition ease-in lg:shadow-md duration-100 my-2'>
              <div className='md:w-7/12 w-10/12 shrink-0  mx-auto'>
                <div className='flex justify-center items-center relative w-full lg:h-12 h-5'>
                  <a href='https://www.coinhub.mn' target='_blank'>
                    <img
                      src={coinhub}
                      alt=''
                      layout='fill'
                      className='mx-auto mt-0 lg:mt-2 sm:h-4 h-3'
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='mx-auto relative sm:w-full text-center h-[30px] sm:h-[60px] transition ease-in lg:shadow-md duration-100 my-2'>
              <div className='md:w-7/12 w-10/12 shrink-0  mx-auto'>
                <div className='flex justify-center items-center relative w-full lg:h-12 h-5'>
                  <a href='https://www.x-meta.com' target='_blank'>
                    <img
                      src={xmeta}
                      layout='fill'
                      alt=''
                      className='mx-auto mt-3 lg:mt-4 sm:h-16 h-10'
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              key={nanoid()}
              className='mx-auto relative sm:w-full text-center h-[30px] sm:h-[60px] transition ease-in lg:shadow-md duration-100 my-2'>
              <div className='md:w-7/12 w-10/12 shrink-0 mx-auto'>
                <div className='flex justify-center items-center relative w-full lg:h-12 h-5'>
                  <a href='https://zoos.digital' target='_blank'>
                    <img
                      src={zoos}
                      alt=''
                      layout='fill'
                      className='mx-auto sm:h-8 h-5'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel> */}
      </div>
    </LazyLoad>
  );
}

export default IndividualIntervalsExample;
