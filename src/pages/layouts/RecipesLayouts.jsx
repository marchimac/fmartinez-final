import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function RecipesLayouts() {
  return (
    <>
      <ul>
        <li>
          <Link to='/books/1'>Book 1</Link>
        </li>
        <li>
          <Link to='/books/2'>Book 2</Link>
        </li>
        <li>
          <Link to='/books/3'>Book 3</Link>
        </li>
        <li>
          <Link to='/books/new'>New Book</Link>
        </li>
      </ul>
      <Outlet />
      <div style={{ height:'15px', width:'100%', backgroundColor:'#000' }}></div>
    </>
  )
}
