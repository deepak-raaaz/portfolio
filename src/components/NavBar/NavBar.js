import React from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';
function NavBar() {
  return (
    <nav className='container nav-bar'>
      <div className='nav-container'>
      <h4 className='logo'>Deepak</h4>
       
       <div className='desktopMenu'>
         <Link className='desktopMenuListItem'>Home</Link>
         <Link className='desktopMenuListItem'>About</Link>
         <Link className='desktopMenuListItem'>Skills</Link>
         <Link className='desktopMenuListItem'>Portfolio</Link>
         <Link className='desktopMenuListItem'>Contact</Link>
       </div>
       <div className='desktopMenuBtn'>
         <button className='contactBtn'>Contact</button>
       </div>
      </div>
    </nav>
  );
}

export default NavBar