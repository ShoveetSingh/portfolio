import Content from './Content';
import Sidebar from './Sidebar';
import { useState } from 'react';

import { Link } from 'react-router-dom';


import { DarkMode,Project,Contacts } from './components';

import { FaBars} from 'react-icons/fa';
import {FaXmark} from 'react-icons/fa6';

//import  useTypewriter from "react-typewriter-hook"
import Typewriter from 'typewriter-effect';

const App = () => {

  const [sidebaropen,issidebaropen] = useState(false);
   

  //const automation = useTypewriter(text);

  const handleChange = () => {
    //e.preventDefault();
    issidebaropen(!sidebaropen); 
  }
  return(
    <div className="flex min-h-screen flex-col min-h-screen grid grid-rows-[auto,1fr,auto]">
      <header className="bg-gradient-to-r from-purple-900 to-indigo-800 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/Project"> 
            <img
              className="rounded-full w-12 h-16"
              src="/logo192.jpg"
              alt="Logo"
            />
            </Link>
            <h1 className="text-3xl text-white ml-4 font-semibold">Shoveet Singh</h1>
          </div>
          
          <DarkMode/>

          <a href="#" onClick={handleChange}>
          
         {
         sidebaropen?
         <FaXmark className="text-white dark:text-yellow-200 h-10 w-40"/>
         :
         <FaBars className='text-white dark:text-yellow-200 h-10 w-40'/>
         }
          </a>
        </div>
      </header>
      <div className="dark:bg-black dark:text-white">
      <div className="flex relative">


      <div className=' absolute '>
      <Content />
      <p  className=" opacity-75 px-8  text-xl font-semibold">
      <Typewriter
        options={{

        strings: ["Hi, I'm Shoveet Singh.I'm a passionate Web Developer and a Computer Science student.I love building interactive user experiences.Currently diving deeper into React, Tailwind, and Machine Learning.Let's build something amazing together!"],
        autoStart: true,
        loop: true,

      }}
/>
</p>
</div>
{sidebaropen && <Sidebar/>}
</div>
</div>  
<div className="dark:bg-black dark:text-yellow-200">
      <footer className="text-center font-bold">

        <h1>-Made by Shoveet Singh-</h1>

      </footer>
      </div>
    </div>
  
)
}

export default App;
