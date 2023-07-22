import React from 'react'
import "./helpus.css"
import {FiPhoneCall} from "react-icons/fi";
import {IoEarthOutline} from "react-icons/io5";
import {MdDesignServices} from "react-icons/md";
import {BiCodeCurly} from "react-icons/bi";
import {TbBrandSpeedtest} from "react-icons/tb";
import {RiMoneyDollarCircleLine} from "react-icons/ri";


function Helpus() {
    const helpus = [
        {
            heading: 'الاتصال بك',
            description: 'أخبرنا بأي شئ تريد تصميمه',
            icon: <FiPhoneCall/>,
            number: 1
        },
        {
            heading: 'الخطة',
            description: 'سوف نقوم بعمل خطه بناء متكامله',
            icon:<IoEarthOutline/>,
            number: 2
        },
        {
            heading: 'التصميم',
            description: 'تصميم الواجهات تصميم مرن و فعال مع المستخدم',
            icon: <MdDesignServices/>,
            number: 3
        },
        {
            heading: 'البرمجة',
            description: 'نقوم بكتابه الكود و عمل قواعد البيانات و ربطها',
            icon: <BiCodeCurly/>,
            number : 4
        },
        {
            heading: 'الفحص النهائى',
            description: 'سوف نقوم بفحص الكود و تأمينه من الثغرات',
            icon: <TbBrandSpeedtest/>,
            number : 5
        },
        {
            heading: 'النشر',
            description: 'سوف نقوم برفع التطبيق او الموقع و نشرة لتبدا بجني الارباح',
            icon: <RiMoneyDollarCircleLine/>,
            number: 6
        },

    ]
    const listItems = helpus.map((item,index)=>(
        <div className='helpus-card bg-white relative rounded-lg overflow-hidden shadow-lg' key={index}>
            <div className='flex justify-between'>
                <span className='helpus-number'>
							{item.number}
						</span>
                <span className='m-3 helpus-icon'>{item.icon}</span>
            </div>
            <div className='m-16 mt-0 mb-4 flex flex-col justify-between'>
                <h3 className='text-right text-2xl mb-3'>{item.heading}</h3>
                <p className='text-md'>{item.description}</p>
            </div>
        </div>
    ));
  return (
    <div className='helpus_container'>
    <h1 className='helpus_heading'>نحن هنا <span style={{color: "#37ABDE"}}>لمساعدتك</span></h1>
    <p className='helpus_description'>تعرف علي خطوات العمل علي اي مشروع</p>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-16 px-12'>
        {listItems}
    </div>
    </div>
  )
}

export default Helpus