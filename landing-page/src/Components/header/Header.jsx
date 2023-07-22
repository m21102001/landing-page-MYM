import Navbar from "../navbar/Navbar"
import './headar.css'

const Header = () => {
    return (
        <div className='header h-full overflow-hidden'>
            <Navbar />
            <div className='flex container mx-auto justify-between'>
                <div className='header-text text-white'>
                    <h1 className="text-5xl font-bold text-white">
                        ابحث عن أفضل <span className='text-blue-600 border-green-800 p-1 border-2'>الحلول</span> البرمجية
                    </h1>
                    <h5 className='my-4'>خيارك الاول لتحول فكرتك الي واقع مع افضل سعر ل اعلي جودة</h5>
                    <button>الحصول علي استشارة</button>
                </div>
                <div className='header-image'>
                    <img className='' src='src/assets/images/Saly-19.png' alt='image'/>
                </div>
            </div>
        </div>
    )
}

export default Header