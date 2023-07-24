import "./aboutus.css"
import {IoEarthOutline }from "react-icons/io5";
import {BiCodeCurly} from "react-icons/bi";

import iphone from '../assets/iphone.png'

function Aboutus() {
    
    return (
        <div id='#AboutUs' className='aboutus-container' >
            <h1 className='aboutus-heading'>من نحن </h1>
            <h3 className='aboutus-subtitle'>هؤلاء وثقوا بنا , كن انت التالي</h3>
            <p className='aboutus-description'>
                نحن نقوم بتوظيف امهر المهندسين من حول العالم ولدينا سجل حافل من العملاء حول العالم حيث اننا نحن نقدم جودة عالمية بافضل الخبرات والمطورين مع تكلفة مناسبة للجميع بداية من طلاب التخرج , مرورا باصحاب الشركات والافكار الناشئه , انتهاء بالشركات العملاقه وأنظمة الدفع والبنوك
            </p>
            <div className='imageDev w-[100%] mt-[20px] grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] text-center gap-10 '>
       <div className='card1-container left flex flex-col mt-[30px]'>
       <div className='card1 bg-{#fff} shadow-md rounded-lg  '>
        <div className='icons-aboutus flex flex-row justify-end ml-[10px] mt-[20px] '> 
        <BiCodeCurly className='text-[#37ABDE] text-[30px] '/>
        </div>
        <h1 className='text-[24px] font-semibold mx-4 text-right text-[#000000]'>+10</h1>
        <p className='text-[14px] font-medium mx-4 text-right mt-[10px] pb-[20px]'>عمل تطبيقات هاتف في الشرق الاوسط و الوطن العربي</p>

       </div>

       </div>
       <div className='iphoneimage'>
        <img src={iphone} alt="iphone-image" className='iphone1 w-full' />

       </div>
       <div className='card2-container left flex flex-col mt-[30px]'>
       <div className='card3 bg-{#fff} shadow-md rounded-lg'>
        <div className='icons-aboutus flex flex-row justify-end ml-[10px] mt-[20px] '> 
        <IoEarthOutline className='text-[#37ABDE] text-[30px] '/>
        </div>
        <h1 className='text-[24px] font-semibold mx-4 text-right text-[#000000]'>+13</h1>
        <p className='text-[14px] font-medium mx-4 text-right mt-[10px] pb-[20px]'>عمل تطبيقات هاتف في الشرق الاوسط و الوطن العربي</p>

       </div>

       </div>
      </div>
        </div>
    )
}

export default Aboutus