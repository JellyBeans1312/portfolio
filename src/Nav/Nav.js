import React from 'react';
import './Nav.scss'
import { NavLink } from 'react-router-dom'
import resume from '../files/AidanMcKayResume.pdf'


export const Nav = () => {
  return (
  <nav>
    <h1 className='name'> Aidan McKay </h1>
    <div className='link-container'>
      <NavLink className='navlink' to='/my-story'> My Story </NavLink>
      <NavLink className='navlink' to='/projects'> Projects </NavLink>
      <NavLink className='navlink' to='/interests'> Interests</NavLink>
      <NavLink className='navlink' to='/contact-me'> Contact</NavLink>
      <NavLink className='navlink' to='/references'> References</NavLink>
      <a href={resume} className='navlink'> Resume</a>
    </div>


  </nav>
  )
}