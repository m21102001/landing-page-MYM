import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import services from '../../Data'
export default function Services() {
  const swipers = [
    {
      id: 1,
      image:'https://t3.ftcdn.net/jpg/03/36/94/42/240_F_336944276_tpWzmwFi6JfZln5VlfBC1BZu5jgDOAl8.jpg ',
      title: 'التصميم الجرافك',
      content:'غلافات صفحات الفيسبوك, قنوات اليوتيوب, تصميم اعلانات لمنتجك, دعم تصاميم ثلاثية الابعاد, متاح جميع الاحجام'
    },
    {
      id: 2,
      image:'https://t3.ftcdn.net/jpg/03/36/94/42/240_F_336944276_tpWzmwFi6JfZln5VlfBC1BZu5jgDOAl8.jpg ',
      title: 'تصميم واجهة المستخدم',
      content: 'التصميم المرئي للواجهة الرقمية للبرامج أو التطبيقات أو مواقع الويب و تشمل ضبط الخصائص المرئية والتفاعلية للمنتجات الرقمية'
    },
    {
      id: 3,
      image:'https://t3.ftcdn.net/jpg/03/36/94/42/240_F_336944276_tpWzmwFi6JfZln5VlfBC1BZu5jgDOAl8.jpg ',
      title: 'برمجة التطبقيات',
      content: 'تصميم جذاب , يدعم جميع الاجهزة الاندرويد و الايفون بكل الاصدارات ، حق تملك كامل ل السورس كود, دعم ٢٤ ساعة'
    },
    {
      id: 4,
      image:'https://t3.ftcdn.net/jpg/03/36/94/42/240_F_336944276_tpWzmwFi6JfZln5VlfBC1BZu5jgDOAl8.jpg ',
      title: 'برمجة التطبقيات',
      content: 'تصميم جذاب , يدعم جميع الاجهزة الاندرويد و الايفون بكل الاصدارات ، حق تملك كامل ل السورس كود, دعم ٢٤ ساعة'
    },
    {
      id: 5,
      image:'https://t3.ftcdn.net/jpg/03/36/94/42/240_F_336944276_tpWzmwFi6JfZln5VlfBC1BZu5jgDOAl8.jpg ',
      title: 'برمجة التطبقيات',
      content: 'تصميم جذاب , يدعم جميع الاجهزة الاندرويد و الايفون بكل الاصدارات ، حق تملك كامل ل السورس كود, دعم ٢٤ ساعة'
    },
    {
      id: 6,
      image:'https://t3.ftcdn.net/jpg/03/36/94/42/240_F_336944276_tpWzmwFi6JfZln5VlfBC1BZu5jgDOAl8.jpg ',
      title: 'برمجة التطبقيات',
      content: 'تصميم جذاب , يدعم جميع الاجهزة الاندرويد و الايفون بكل الاصدارات ، حق تملك كامل ل السورس كود, دعم ٢٤ ساعة'
    },

  ]
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      setWidth(window.innerWidth);
    });
  }, []);
  return (
    <div className='services'>
      <div className=" bg-white py-3 services-tital dark:bg-gray-800 dark:border-gray-700 ">
      <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>خدمتنا</h3>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>كل الخدمات التي تحتاجونها في مكان واحد وبأيد أمينة</p>
      </div>
      <Swiper
        // slidesPerView={3}
        centeredSlides={true}
        spaceBetween={10}
        autoplay={{
          delay: 2000000000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        slidesPerView={width > 1200 ? 3 : width > 1025 ? 1.7 : 1}
        watchOverflow={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {swipers.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              {/* <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <a href="#">
                <img className="w-18 h-18 m-auto mb-3 rounded-full shadow-lg" src={item.image} alt="Bonnie image" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.content}</p>

                </div>
              </div> */}
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
    </div>
  );
}
