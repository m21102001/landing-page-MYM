// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {MdDeveloperMode} from "react-icons/md"
import {MdDesignServices} from "react-icons/md"
import {IoEarthOutline} from "react-icons/io5";
import {LiaCopy} from "react-icons/lia"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
// import Card from '../Card';

// import services from '../../Data'

export default function Services() {
  const swipers = [
    {
      id: 1,
      image: <MdDeveloperMode/>,
      title: 'برمجة التطبقيات',
      content: 'تصميم جذاب , يدعم جميع الاجهزة الاندرويد و الايفون بكل الاصدارات ، حق تملك كامل ل السورس كود, دعم ٢٤ ساعة'
    },
    {
      id: 2,
      image: <LiaCopy/>,
      title: 'تصميم واجهة المستخدم',
      content: 'تصميم جذاب , يدعم جميع الاجهزة الاندرويد و الايفون بكل الاصدارات ، حق تملك كامل ل السورس كود, دعم ٢٤ ساعة'
    },
    {
      id: 3,
      image: <MdDesignServices/>,
      title: 'التصميم الجرافيك',
      content: 'تصميم جذاب , يدعم جميع الاجهزة الاندرويد و الايفون بكل الاصدارات ، حق تملك كامل ل السورس كود, دعم ٢٤ ساعة'
    },
    {
      id: 4,
      image: <IoEarthOutline/>,
      title: 'مواقع الويب',
      content: 'تصميم جذاب , يدعم جميع الاجهزة الاندرويد و الايفون بكل الاصدارات ، حق تملك كامل ل السورس كود, دعم ٢٤ ساعة'
    },

  ]
  return (
    <>
      <Swiper
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        // slidesPerView={width > 1200 ? 2.3 : width > 1025 ? 1.7 : 1}
        watchOverflow={true}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {swipers.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div key={item.id} className="flex flex-col items-center pb-10">
                  <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={item.image} alt="Bonnie image" />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.title}</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.content}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </>
  );
}
