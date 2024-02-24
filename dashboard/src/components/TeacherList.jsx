/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/teacherList.css"
import Image1 from "../assets/images/cuphead-mumgn-bothers.png";
import Image2 from "../assets/images/sam-max.jpeg";
import Image3 from "../assets/images/asterix_obelix.webp";
import Image4 from "../assets/images/teacherspet.jpeg";

const teachers = [
    {
        image: Image1,
        name: 'Prof ID: CHS',
        duration: '20 hours lesson',
        cost: '100'
    },
    {
        image: Image2,
        name: 'Prof ID: AAO',
        duration: '20 hours lesson',
        cost: '100'
    },
    {
        image: Image3,
        name: 'Prof ID: SAK',
        duration: '20 hours lesson',
        cost: '100'
    },
    {
        image: Image4,
        name: 'Prof ID: TSP',
        duration: '20 hours lesson',
        cost: '100'
    },
]

const TeacherList = () => {
    return <div className="teacher--list">
        <div className="list--header">
            <h2>Teachers</h2>
            <select>
                <option value="english">English</option>
                <option value="korean">Korean</option>
                <option value="philosophy">Philosophy</option>
                <option value="history">History</option>
            </select>
        </div>
        <div className="list--container">
            {teachers.map(teacher => (
                <div className="list">
                    <div className="teacher--detail">
                        <img src={teacher.image} alt={teacher.name} />
                        <h2>{teacher.name}</h2>
                    </div>
                    <span>Total: {teacher.duration}</span>
                    <span>Cost: {teacher.cost}</span>
                    <span className="teacher--todo">:</span>
                </div>
            ))}
        </div>
    </div>
}

export default TeacherList;