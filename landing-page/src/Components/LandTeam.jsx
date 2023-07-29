import Data from "../data.json";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useTranslation } from 'react-i18next'


const LandTeam = () => {

  const { t, i18n } = useTranslation()


  const [images, setImage] = useState(Data);
  const [filter, setFilter] = useState("all");
  const HandelJobfilter = (job) => {
    setFilter(job);
  };
  const filteredImages =
    filter === "all" ? images : images.filter((image) => image.job === filter);

  return (
    <div className="  content w-full p-0 m-0 justify-center " id="Team">
      <div className="container-Landing">
        <div className="head">
          <h2 className="text-center pt-20 text-4xl font-bold">{t('Team-heading')}</h2>
        </div>
        <div className="pt-8 text-center">
          <ul className="flex flex-wrap justify-center">
          <li className="p-3 rounded-lg">
              <button
                onClick={() => HandelJobfilter("all")}
                className="border border-[#37ABDE] p-2 text-center w-32 bg-white text-[#9D9D9D]   rounded-lg font-custom transition duration-300 ease-in-out transform hover:bg-[#37ABDE] hover:text-white active:bg-[#37ABDE] active:text-white"
              >
                {" "}
                {t('land-Team-All')}
              </button>
            </li>
            <li className="p-3 rounded-lg">
              <button
                onClick={() => HandelJobfilter("Frontend")}
                className="border border-[#37ABDE] p-2 text-center w-32 bg-white text-[#9D9D9D] rounded-lg  font-custom transition duration-300 ease-in-out transform hover:bg-[#37ABDE] hover:text-white active:bg-[#37ABDE] active:text-white "
              >
                {" "}
                {t('land-Team-Web')}
              </button>
            </li>
            <li className="p-3 rounded-lg">
              <button
                onClick={() => HandelJobfilter("Flutter")}
                className="border border-[#37ABDE] p-2 text-center w-40 text-[14px] bg-white text-[#9D9D9D] rounded-lg font-custom transition duration-300 ease-in-out transform hover:bg-[#37ABDE] hover:text-white active:bg-[#37ABDE] active:text-white"
              >
                {t('land-Team-Flutter')}
              </button>
            </li>
            <li className="p-3 rounded-lg">
              <button
                onClick={() => HandelJobfilter("UI-UX")}
                className="border border-[#37ABDE] p-2 text-center w-32 bg-white text-[#9D9D9D] rounded-lg text-[14px] font-custom transition duration-300 ease-in-out transform hover:bg-[#37ABDE] hover:text-white active:bg-[#37ABDE] active:text-white"
              >
                {" "}
                {t('land-Team-UX-UI')}
              </button>
            </li>
            <li className="p-3 rounded-lg">
              <button
                onClick={() => HandelJobfilter("Owner")}
                className="border border-[#37ABDE] p-2 text-center w-32 bg-white text-[#9D9D9D] rounded-lg font-custom transition duration-300 ease-in-out transform hover:bg-[#37ABDE] hover:text-white active:bg-[#37ABDE] active:text-white "
              >
                {" "}
                {t('land-Team-Manager')}
              </button>
            </li>
            <li className="p-3 rounded-lg">
              <button
                onClick={() => HandelJobfilter("Back-End")}
                className="border border-[#37ABDE] p-2 text-center w-32 bg-white text-[#9D9D9D] rounded-lg  font-custom transition duration-300 ease-in-out transform hover:bg-[#37ABDE] hover:text-white active:bg-[#37ABDE] active:text-white"
              >
                {t('land-Team-Backend')}
              </button>
            </li>
          </ul>
        </div>

        <div className="landteam-container m-10">
          <Swiper
            slidesPerView={"1"}
            centeredSlides={true}
            spaceBetween={20}
            pagination={{
              clickable: true
            }}
            modules={[Pagination]}
            breakpoints={{
              // Set different settings for different screen sizes
              768: {
                slidesPerView: 2, // Show two cards at a time on tablets
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 4, // Show four cards at a time on larger screens
                spaceBetween: 20
              }
            }}
            className="mySwiper"
          >
            {filteredImages.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="bg-white rounded-lg shadow-md p-4  flex flex-col items-center justify-center">
                  <img
                    src={data.link}
                    alt=""
                    className="w-full h-full object-cover mb-4 rounded-[9%]"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{data.Name}</h3>
                    <p className="text-gray-600 mb-4"> {data.job}</p>
                    <div className="flex space-x-2 space-x-reverse justify-center">
                      <a
                        href={data.Linked}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="rounded-full text-[#37ABDE] bg-[#fff]" />
                      </a>
                      <a
                        href={data.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="rounded-full text-[#37ABDE] bg-[#fff]" />
                      </a>
                      <a href="" target="_blank" rel="noopener noreferrer">
                        <FaBehance className="rounded-full text-[#37ABDE] bg-[#fff]" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LandTeam;
