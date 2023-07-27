import React from 'react'
import "./helpus.css"
import {FiPhoneCall} from "react-icons/fi";
import {IoEarthOutline} from "react-icons/io5";
import {MdDesignServices} from "react-icons/md";
import {BiCodeCurly} from "react-icons/bi";
import {TbBrandSpeedtest} from "react-icons/tb";
import {RiMoneyDollarCircleLine} from "react-icons/ri";
import { useTranslation } from 'react-i18next'



function Helpus() {

    const { t, i18n } = useTranslation()

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
    const helpusen = [
        {
            heading: 'Calling you',
            description: 'Tell us anything you want to design',
            icon: <FiPhoneCall/>,
            number: 1
        },
        {
            heading: 'Plan',
            description: 'We will make an integrated building plan',
            icon:<IoEarthOutline/>,
            number: 2
        },
        {
            heading: 'Design',
            description: 'Interface design is flexible and effective design with the user',
            icon: <MdDesignServices/>,
            number: 3
        },
        {
            heading: 'Programming',
            description: 'We write the code and create databases and link them',
            icon: <BiCodeCurly/>,
            number : 4
        },
        {
            heading: 'Final Check',
            description: 'We will check the code and secure it from vulnerabilities',
            icon: <TbBrandSpeedtest/>,
            number : 5
        },
        {
            heading: 'Publish',
            description: 'We will upload the application or website and a newsletter to start making profits',
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
    <div className='helpus_container' id='Help-us'>
    <h1 className='helpus_heading'>{t('helpus-heading')} <span style={{color: "#37ABDE"}}>{t('helpus-span')}</span></h1>
    <p className='helpus_description'>{t('helpus-description')}</p>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-16 px-12'>
        {listItems}
    </div>
    </div>
  )
}

export default Helpus