"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: '/cover1.jpg',
      title: 'Discover Your Perfect Aesthetic',
      description: 'Explore premium ceramic and geometric tile finishes tailored for modern spaces.',
    },
    {
      id: 2,
      image: '/cover2.jpg',
      title: 'Elevate Your Interior Design',
      description: 'Handpicked patterns that seamlessly bridge traditional craftsmanship with minimal luxury.',
    },
    {
      id: 3,
      image: '/cover3.jpg',
      title: 'Premium Technology That Resonates Environment',
      description: 'Soft, contemporary surfaces reinterpret resin with balance and light, creating minimal and sophisticated spaces.',
    },
    {
      id: 4,
      image: '/cover4.jpg',
      title: 'Enrich Your Lifestyle Moments',
      description: 'HDiscover the ceramic and porcelain stoneware collections, ideal for all spaces, indoors and outdoors.',
    }
  ];

  return (
    <div className="w-full h-[85vh] md:h-screen relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">

            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />


            <div className="absolute inset-0 bg-black/50 grid place-items-center">
              <div className="text-center text-neutral-content max-w-2xl px-4">
                <h1 className="mb-5 text-4xl md:text-6xl font-bold tracking-tight animate__animated animate__fadeInDown">
                  {slide.title}
                </h1>
                <p className="mb-10 text-sm md:text-lg opacity-90">
                  {slide.description}
                </p>


                <a href="/all-tiles" className="px-10 py-3 rounded-sm font-bold bg-[#000000] text-amber-50 hover:bg-amber-50 hover:text-[#000000] transition-all">
                  Browse Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  );
};

export default Carousel;