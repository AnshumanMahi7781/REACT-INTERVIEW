import React from 'react'
import HomeCompo from './HomeCompo'
import StudentCompo from './StudentCompo'
import ContactCompo from './ContactCompo'
import AboutCompo from './AboutCompo'
import DynamicCompo from './DynamicCompo'
import { Link, Route, Routes } from 'react-router-dom'

function RouteCompo() {
    return (
        <div>
            <Link className='link' to='/'>HOME</Link>
            <Link className='link' to='/student'>STUDENT</Link>
            <Link className='link' to='/contact'>CONTACT</Link>
            <Link className='link' to='/about'>ABOUT</Link>
            <Routes>
                <Route path='/' element={<HomeCompo/>} />
                <Route path='/student' element={<StudentCompo/>} />
                <Route path='/student/:ID' element={<DynamicCompo/>} />
                <Route path='/contact' element={<ContactCompo/>} />
                <Route path='/about' element={<AboutCompo/>} />

            </Routes>
        </div>
    )
}

export default RouteCompo
