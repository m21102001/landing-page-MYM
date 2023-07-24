import {PiBracketsCurly }from 'react-icons/pi';
import {TbBrandSpeedtest} from "react-icons/tb";
import {TbDevicesStar} from 'react-icons/tb'
import iphone2 from '../assets/iphone2.png'
import {FaEarthAfrica} from "react-icons/fa6";
import {TbDeviceMobileCode} from "react-icons/tb";

const Developerflutter = () => {
  return (
    <div className=''>
      <div className=' text-center  '>
        <h1 className='text-[#000000] text-[48px]  font-semibold '>ويمكننا <span className='text-[#37ABDE]' >تطوير تطبيقات الهاتف</span></h1>
        <p className='text-[gray] text-[20px] font-medium m-auto max-w-[600px] md:px-[20px]'>أخبرنا بفكرة تطبيقك وسنساعدك على إحياء هذه الفكرة من خلال إنشاء تطبيقات / موقع ويب من البداية يناسب احتياجاتك</p>
      </div>
      <div className='imageDev w-[80%] m-auto mt-[20px] grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] text-center gap-10 '>
       <div className='left flex flex-col mt-[30px]'>
       <div className='helpus-card mb-[16px] bg-white relative rounded-lg overflow-hidden shadow-lg pb-5 h-fit'>
                    <div className='flex justify-between'>
                    <span className='helpus-number'>1</span>
                        <span className='m-3 helpus-icon'>
                            <PiBracketsCurly/>
                        </span>
                    </div>
                    <div className='mx-16 flex flex-col justify-between'>
                        <h3 className='text-right text-2xl mb-0'>كود قوي و مرن</h3>
                        <p className='text-md'>يتم تنظيم الكود الخاص بك و تأمينه ليمنحك افضل أداء</p>
                    </div>
                </div>
                <div className='helpus-card bg-white relative rounded-lg overflow-hidden shadow-lg pb-5 h-fit'>
                    <div className='flex justify-between'>
                    <span className='helpus-number'>2</span>
                        <span className='m-3 helpus-icon'>
                            <TbDeviceMobileCode/>
                        </span>
                    </div>
                    <div className='mx-16 flex flex-col justify-between'>
                        <h3 className='text-right text-2xl mb-0'>سهل الاطلاق</h3>
                        <p className='text-md'>سوف نقدم لك لوحه الادارة و كيفيه التعامل معها بشكل كامل</p>
                    </div>
                </div>
       </div>
                
       <div className='iphoneimage'>
        <img src={iphone2} alt="iphone-image" className='w-full' />
       </div>
       <div className='left flex flex-col mt-[30px]'>
       <div className='helpus-card mb-[16px] bg-white relative rounded-lg overflow-hidden shadow-lg pb-5 h-fit'>
                    <div className='flex justify-between'>
                    <span className='helpus-number'>3</span>
                        <span className='m-3 helpus-icon'>                          
                            <TbDevicesStar/>
                        </span>
                    </div>
                    <div className='mx-16 flex flex-col justify-between'>
                        <h3 className='text-right text-2xl mb-0'>تصميم واجهة المستخدم</h3>
                        <p className='text-md'>من خلال تزودنا بما تحتاجه سنعمل علي انشاء واجهه مصتخدم سهله و مرنه</p>
                    </div>
                </div>
                <div className='helpus-card bg-white relative rounded-lg overflow-hidden shadow-lg pb-5 h-fit'>
                    <div className='flex justify-between'>
                    <span className='helpus-number'>4</span>
                        <span className='m-3 helpus-icon'>
                            <TbBrandSpeedtest/>
                        </span>
                    </div>
                    <div className='mx-16 flex flex-col justify-between'>
                        <h3 className='text-right text-2xl mb-0'>السرعة</h3>
                        <p className='text-md'>نحن مرنون في التعديلات ومع اخراج المشروع بأعلى جوده</p>
                    </div>
                </div>
       </div>
      </div>
    </div>
  )
}

export default Developerflutter


