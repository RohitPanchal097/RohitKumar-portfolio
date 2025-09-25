import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'


const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() =>{
        const storedTheme = localStorage.getItem('theme');
        if(storedTheme === 'dark'){
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }else{
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
          
        }
    },[])
    const toggleTheme = () =>{
        if(isDarkMode){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        }else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    }

  return (
    <div>
        <button onClick={toggleTheme}
        className='fixed top-4 right-4 z-50 max-sm:hidden p-2 rounded-full transition-colors duration-300 focus: outline-hidden'
        > {isDarkMode ? <Sun className='w-6 h-6 text-yellow-300'/> : <Moon className='w-6 h-6 text-blue-950'/>}</button>
    </div>
  )
}

export default ThemeToggle