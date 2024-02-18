/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from "react";
import ProfileHeader from "./ProfileHeader";
import "../styles/profile.css";
import { BiBook } from "react-icons/bi";
import Cupheads from "../assets/images/cuphead-mumgn-bothers.png";

const courses = [
    {
        title: "English",
        duration: "2 hours",
        icon: <BiBook/>,
    },
    {
        title: "Korean",
        duration: "2 hours",
        icon: <BiBook/>,
    },
    {
        title: "Computer Science",
        duration: "2 hours",
        icon: <BiBook/>,
    },
    {
        title: "Philosophy",
        duration: "2 hours",
        icon: <BiBook/>,
    },
]

const Profile = () => {
    return <div className="profile">
        <ProfileHeader/>
        <div className="user--profile">
            <div className="user--detail">
                <img src={Cupheads} alt="" />
                <h3 className="username">Cupheads</h3>
                <span className="profession">Teacher</span>
            </div>
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
    </div>;
};

export default Profile;