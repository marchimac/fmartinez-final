import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
        <Link to='/' className='site-title'>Fernando Martínez Sánchez</Link>
        <ul>
            <CustomLink to='/myProjects'>My projects</CustomLink>
            <CustomLink to='/aboutMe'>About me</CustomLink>
        </ul>
    </nav>
  )
}

export default Navbar

function CustomLink ({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}