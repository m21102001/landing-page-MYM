import React from 'react'
import "./aboutus.css"
import {PiBracketsCurly }from 'react-icons/pi';
import {TbDevicesStar} from 'react-icons/tb'
import iphone from '../assets/iphone.png'

function Aboutus() {
    
    return (
        <div className='aboutus-container'>
            <h1 className='aboutus-heading'>من نحن </h1>
            <h3 className='aboutus-subtitle'>هؤلاء وثقوا بنا , كن انت التالي</h3>
            <p className='aboutus-description'>
                نحن نقوم بتوظيف امهر المهندسين من حول العالم ولدينا سجل حافل من العملاء حول العالم حيث اننا نحن نقدم جودة عالمية بافضل الخبرات والمطورين مع تكلفة مناسبة للجميع بداية من طلاب التخرج , مرورا باصحاب الشركات والافكار الناشئه , انتهاء بالشركات العملاقه وأنظمة الدفع والبنوك
            </p>
            <div className='imageDev w-[80%] m-auto mt-[20px] grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] text-center gap-10 '>
       <div className='left flex flex-col mt-[30px]'>
       <div className='card1 w-[300px] bg-{#fff} shadow-md rounded-lg  '>
        <div className='icons flex flex-row  justify-between max-w-[150px] ml-[10px] mt-[20px] '> 
        <PiBracketsCurly className='text-[#37ABDE] text-[40px] '/>
        <TbDevicesStar  className='text-[#37ABDE] text-[30px] ' />
        </div>
        <h1 className='text-[24px] font-semibold text-center text-[#000000]'>كود قوي و مرن</h1>
        <p className='text-[14px] font-medium text-center mt-[10px] pb-[20px]'>يتم تنظيم الكود الخاص بك و تأمينه ليمنحك افضل أداء</p>
       </div>

       </div>
       <div className='iphoneimage'>
        <img src={iphone} alt="iphone-image" className='w-full' />

       </div>
       <div className='left flex flex-col mt-[30px]'>
       <div className='card3 w-[300px] bg-{#fff} shadow-md rounded-lg  '>
        <div className='icons flex flex-row  justify-between max-w-[150px] ml-[10px] mt-[20px] '> 
        <PiBracketsCurly className='text-[#37ABDE] text-[40px] '/>
        <TbDevicesStar  className='text-[#37ABDE] text-[30px] ' />
        </div>
        <h1 className='text-[24px] font-semibold text-center text-[#000000]'>تصميم واجهة المستخدم</h1>
        <p className='text-[14px] font-medium text-center mt-[10px] pb-[20px]'>من خلال تزودنا بما تحتاجه سنعمل علي انشاء واجهه مصتخدم سهله و مرنه</p>
       </div>

       </div>
      </div>
        </div>
    )
}

export default Aboutus