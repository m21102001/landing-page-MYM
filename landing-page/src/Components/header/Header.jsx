import Navbar from "../navbar/Navbar"
import './headar.css'
import { useTranslation } from 'react-i18next'
import Saly from "../../assets/Saly-19.png"

const Header = () => {
    const { t, i18n } = useTranslation()

    return (
        <div className='header h-full overflow-hidden'>
            <Navbar />
            <div className='flex container mx-5  space-around'>
                <div className='header-text text-white mx-5'>
                    <h1 className="sm:text-4xl md:text-5xl font-bold text-white">
                        {t('Header-title')}<span className='text-[#FF1013] p-1'>{t('Header-span1')}</span> {t('Header-span2')}
                    </h1>
                    <h5 className='my-4 text-2xl'>{t('Header-description')}</h5>
                    {/* <button><a rel='noreferrer' href="https://wa.me/qr/2PUHCENU7QALF1" target="_blank">{t('button')}</a></button> */}
                    <a rel='noreferrer' href="https://wa.me/201126765371" target="_blank"><button>{t('button')}</button></a>
                </div>
                <div className='header-image'>
                     <img className='' src={Saly} alt='image'/>
                </div>
            </div>
        </div>
    )
}

export default Header