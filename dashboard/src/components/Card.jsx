/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import {BiLogoHtml5, BiLogoAndroid, BiBuilding} from 'react-icons/bi'

const course = [
    {
        title: 'Web Development',
        icon: <BiLogoHtml5/>,
    },
    {
        title: 'App Development',
        icon: <BiLogoAndroid/>,
    },
    {
        title: 'UX & UI',
        icon: <BiBuilding/>,
    },
]

const Card = () => {
    return <div className='card--container'>
        {course.map((item) => (
            <div className='card'>
                <div className='card--cover'>{item.icon}</div>
                <div className='card--title'>
                    <h2>{item.title}</h2>
                </div>
            </div>
        ))}
    </div>
}

export default Card;