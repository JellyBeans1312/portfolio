import React from 'react';
import './Nav.scss'
import { NavLink } from 'react-router-dom'
import resume from '../files/AidanMcKayResume.pdf'
export const Nav = () => {
  return (
  <nav>
    <h1 className='name'> Aidan McKay </h1>
    <NavLink className='navlink'> My Story </NavLink>
    <NavLink className='navlink'> Projects </NavLink>
    <NavLink className='navlink'> Contact </NavLink>
    <a href={resume} className='navlink'> Resume</a>

  </nav>
  )
}