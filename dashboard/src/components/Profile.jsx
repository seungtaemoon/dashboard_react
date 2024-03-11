/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import ProfileHeader from "./ProfileHeader";
import "../styles/profile.css"
import Image1 from '../assets/images/cuphead-mumgn-bothers.png'
import {
    BiBook
} from "react-icons/bi"

const courses = [
    {
        title: 'Ancient English',
        duration: '2 Hours',
        icon: <BiBook/>,
    },
    {
        title: 'Medieval English Literature',
        duration: '2 Hours',
        icon: <BiBook/>,
    },
    {
        title: 'Modern English Literature',
        duration: '2 Hours',
        icon: <BiBook/>,
    },
    {
        title: 'American Literature',
        duration: '2 Hours',
        icon: <BiBook/>,
    },
]

const Profile = () => {
    return <div className="profile">
        <ProfileHeader/>
        <div className="user--profile">
            <div className="user--detail">
            <img src={Image1}/>               
                <h3 className="username">Cupheads</h3>
                <span className="profession">Teacher</span>
            </div>
            <h3>Responsible Courses: </h3>
            <div className="user-courses">
                {courses.map(course => (
                    <div className="course">
                    <div className="course--detail">
                        <div className="course--cover">{course.icon}</div>
                        <div className="course--name">
                            <h5 className="title">{course.title}</h5>
                            <span className="duration">{course.duration}</span>
                        </div>
                    </div>
                    <div className="action">:</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
};

export default Profile;