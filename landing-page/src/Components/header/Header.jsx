import Navbar from "../navbar/Navbar"
import './headar.css'
import { useTranslation } from 'react-i18next'
import Saly from "../../assets/Saly-19.png"

const Header = () => {
    const { t, i18n } = useTranslation()

    return (
        <div className='header h-full overflow-hidden'>
            <Navbar />
            <div className='flex container mx-5 space-around'>
                <div className='header-text text-white mx-5'>
                    <h1 className="text-5xl font-bold text-white">
                        {t('Header-title')}<span className='text-blue-600 border-green-800 p-1 border-2'>{t('Header-span1')}</span> {t('Header-span2')}
                    </h1>
                    <h5 className='my-4'>{t('Header-description')}</h5>
                    <button>{t('button')}</button>
                </div>
                <div className='header-image'>
                     <img className='' src={Saly} alt='image'/>
                </div>
            </div>
        </div>
    )
}

export default Header