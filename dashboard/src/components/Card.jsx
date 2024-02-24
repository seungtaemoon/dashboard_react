/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import {BiBookOpen, BiHistory, BiArchive} from 'react-icons/bi'

const course = [
    {
        title: 'Language anad Literature',
        icon: <BiBookOpen/>,
    },
    {
        title: 'History and Society',
        icon: <BiHistory/>,
    },
    {
        title: 'Philosophy and Humanities',
        icon: <BiArchive/>,
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