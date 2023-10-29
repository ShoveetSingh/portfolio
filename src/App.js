import Content from './Content';
import Sidebar from './Sidebar';
import { useState } from 'react';

import { Link } from 'react-router-dom';

import  Project from './Project';

import Contacts from './Contacts';

const App = () => {

  const [sidebaropen,issidebaropen] = useState(false);

  const handleChange = () => {
    //e.preventDefault();
    issidebaropen(!sidebaropen); 
  }
  return(
    <div className="flex flex-col min-h-screen grid grid-rows-[auto,1fr,auto]">
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
          <a href="#" onClick={handleChange}>
          <img 
            className="w-16 h-12"
            src="/logo152.jpg"
            alt="menubar"
          />
          </a>
        </div>
      </header>
      {sidebaropen && <Sidebar/>}
      <Content />
      <footer classname="text-center text-yellow-200">
        <h1>Made by Shoveet Singh</h1>
      </footer>
    </div>
  )
}

export default App;
