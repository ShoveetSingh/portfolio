import React from 'react'

import DarkMode from './DarkMode'

const Contacts = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-black dark:text-yellow-200  py-8 text-center">
    <DarkMode/>
     <h1>  gmail - shoveetsingh2002@gmail.com</h1>
       <br/>
      <h2> phone - 8910132770 </h2>
      <footer>Made by shoveeet</footer>
      </div>
  )
}

export default Contacts