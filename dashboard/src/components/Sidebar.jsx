/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import {
    BiHome,
    BiBookAlt,
    BiMessage,
    BiSolidReport,
    BiStats,
    BiTask,
    BiHelpCircle
}
 from 'react-icons/bi'
 import "../App.css"

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BiBookAlt  className='icon_header'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BiTask className='icon'/> Tasks
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BiStats className='icon'/> Stats
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BiSolidReport className='icon'/> Report
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BiMessage className='icon'/> Message
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BiHelpCircle className='icon'/> Help
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar