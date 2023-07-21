import React from 'react'
import {PiBracketsCurly }from 'react-icons/pi';
import {TbDevicesStar} from 'react-icons/tb'
import iphone from '../assets/iphone.png'

const Developerflutter = () => {
  return (
    <div className=''>
      <div className='header text-center mt-[20px] '>
        <h1 className='text-[#000000] text-[48px]  font-semibold '>ويمكننا <span className='text-[#37ABDE]' >تطوير تطبيقات الهاتف</span></h1>
        <p className='text-[gray] text-[20px] font-medium m-auto max-w-[600px] md:px-[20px]'>أخبرنا بفكرة تطبيقك وسنساعدك على إحياء هذه الفكرة من خلال إنشاء تطبيقات / موقع ويب من البداية يناسب احتياجاتك</p>
      </div>
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

       <div className='card2 w-[300px] bg-{#fff} shadow-md rounded-lg  mt-[20px] mx-[10px]'>
        <div className='icons flex flex-row  justify-between max-w-[150px] ml-[10px] mt-[20px] '> 
        <PiBracketsCurly className='text-[#37ABDE] text-[40px] '/>
        <TbDevicesStar  className='text-[#37ABDE] text-[30px] ' />
        </div>
        <h1 className='text-[24px] font-semibold text-center text-[#000000]'>سهل الاطلاق</h1>
        <p className='text-[14px] font-medium text-center mt-[10px] pb-[20px]'>سوف نقدم لك لوحه الادارة و كيفيه التعامل معها بشكل كامل </p>
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

       <div className='card4 w-[300px] bg-{#fff} shadow-md rounded-lg  mt-[20px] mx-[10px]'>
        <div className='icons flex flex-row  justify-between max-w-[150px] ml-[10px] mt-[20px] '> 
        <PiBracketsCurly className='text-[#37ABDE] text-[40px] '/>
        <TbDevicesStar  className='text-[#37ABDE] text-[30px] ' />
        </div>
        <h1 className='text-[24px] font-semibold text-center text-[#000000]'>السرعة</h1>
        <p className='text-[14px] font-medium text-center mt-[10px] pb-[20px]'>نحن مرنون في التعديلات ومع اخراج المشروع بأعلى جوده </p>
       </div>
       </div>
      </div>
    </div>
  )
}

export default Developerflutter
