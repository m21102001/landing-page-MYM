import "./aboutus.css"
import {IoEarthOutline }from "react-icons/io5";
import {BiCodeCurly} from "react-icons/bi";

import iphone from '../assets/iphone.png'
import React from "react";
import {FaEarthAfrica} from "react-icons/fa6";
import {TbDeviceMobileCode} from "react-icons/tb";

function Aboutus() {
    
    return (
        <div id='#AboutUs' className='aboutus-container my-10' >
            <h1 className='aboutus-heading text-4xl mb-5'>من نحن </h1>
            <h3 className='aboutus-subtitle mb-2'>هؤلاء وثقوا بنا , كن انت التالي</h3>
            <p className='aboutus-description w-fit font-normal'>
                نحن نقوم بتوظيف امهر المهندسين من حول العالم ولدينا سجل حافل من العملاء حول العالم حيث اننا نحن نقدم جودة عالمية بافضل الخبرات والمطورين مع تكلفة مناسبة للجميع بداية من طلاب التخرج , مرورا باصحاب الشركات والافكار الناشئه , انتهاء بالشركات العملاقه وأنظمة الدفع والبنوك
            </p>
            <div className='imageDev w-[100%] mt-[20px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-center gap-10 '>
                <div className='helpus-card bg-white relative rounded-lg overflow-hidden shadow-lg pb-5 h-fit'>
                    <div className='flex justify-between'>
                        <span className='helpus-number'>1</span>
                        <span className='m-3 helpus-icon'>
                            <TbDeviceMobileCode/>
                        </span>
                    </div>
                    <div className='mx-16 flex flex-col justify-between'>
                        <h3 className='text-right text-2xl mb-0'>10+</h3>
                        <p className='text-md'>عمل تطبيقات هاتف في الشرق الاوسط و الوطن العربي</p>
                    </div>
                </div>
               <div className='iphoneimage'>
                <img src={iphone} alt="iphone-image" className='iphone1 w-full' />

               </div>
                <div className='helpus-card bg-white relative rounded-lg overflow-hidden shadow-lg pb-5 h-fit'>
                    <div className='flex justify-between'>
                        <span className='helpus-number'>2</span>
                        <span className='m-3 helpus-icon'>
                            <FaEarthAfrica/>
                        </span>
                    </div>
                    <div className='mx-16 my-0 flex flex-col justify-between'>
                        <h3 className='text-right text-2xl mb-3'>13+</h3>
                        <p className='text-md'>عمل تطبيقات هاتف في الشرق الاوسط و الوطن العربي</p>
                    </div>
                </div>
      </div>
        </div>
    )
}


// </div>

export default Aboutus