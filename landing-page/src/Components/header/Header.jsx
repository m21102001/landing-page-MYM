import Navbar from "../navbar/Navbar"

const Header = () => {
    return (
        <container className='header h-screen w-screen bg-light-800 '>
            <Navbar />
            <div>
                <h1 className="text-center">ابحث عن أفضل الحلول البرمجية</h1>
                <h5>خيارك الاول لتحول فكرتك الي واقع مع افضل سعر ل اعلي جودة</h5>
            </div>
            <input type="button" value="الحصول علي استشارة" disabled className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>

        </container>
    )
}

export default Header