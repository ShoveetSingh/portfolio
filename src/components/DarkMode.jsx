import {React,useEffect} from 'react'

import useDarkMode from 'use-dark-mode'

import {FaSun,FaMoon}  from "react-icons/fa";

const DarkMode = () => {

  const Dark=useDarkMode(false);
  

  useEffect(()=>{

    if(Dark.value)
        document.body.classList.add("dark");
    else
    document.body.classList.remove("dark");

  },[Dark.value])

  return (
    <div>
        <button onClick={Dark.toggle}>
        {
        Dark.value?
        <FaMoon className="text-white w-40 h-10"/>
        :
        <FaSun className="text-orange-300 w-40 h-10"/>
        }
        </button>
        
        </div>
  )
}

export default DarkMode