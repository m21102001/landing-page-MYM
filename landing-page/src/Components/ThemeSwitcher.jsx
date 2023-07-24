import { useEffect, useState } from "react";
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs'

const ThemeSwitcher = () => {
	const [theme, setTheme] = useState(null);
	// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	// 	document.documentElement.classList.add('dark')
	// } else {
	// 	document.documentElement.classList.remove('dark')
	// }
	// Whenever the user explicitly chooses light mode
	// localStorage.theme = 'light'

	// // Whenever the user explicitly chooses dark mode
	// localStorage.theme = 'dark'

	// // Whenever the user explicitly chooses to respect the OS preference
	// localStorage.removeItem('theme')
	
	useEffect(() => {
		if (window.matchMedia("prefer-color-schema:dark").matches) {
			// document.documentElement.classList.add('dark')
			setTheme("dark")
		} else {
			// document.documentElement.classList.remove('dark')
			setTheme('light')
		}
	}, []);
	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<button onClick={handleThemeSwitch} className='dark:bg-slate-600 rounded-bl-lg p-2 text-yellow-500 dark:text-white'>
			{theme === 'dark' ? <FaMoon /> : <BsSunFill />}
		</button>
	)
}
export default ThemeSwitcher