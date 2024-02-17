/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/teacherList.css";
import Cupheads from "../assets/images/cuphead-mumgn-bothers.png";
import Samandmax from "../assets/images/sam-max.jpeg";
import Teacherspet from "../assets/images/teacherspet.jpeg";
import Sonicandknuckles from "../assets/images/sonic_and_knuckles.jpeg";

const teachers = [
    {
        image: Cupheads,
        name: "Prof. Cupheads",
        duration: "20 hours lesson",
        cost: "100",
    },
    {
        image: Samandmax,
        name: "Prof. Sam and Max",
        duration: "20 hours lesson",
        cost: "100",
    },
    {
        image: Teacherspet,
        name: "Prof. Teacher's Pet",
        duration: "20 hours lesson",
        cost: "100",
    },
    {
        image: Sonicandknuckles,
        name: "Prof. Sonic and Knuckles",
        duration: "20 hours lesson",
        cost: "100",
    },
];

const TeacherList = () => {
    return <div className="teacher--list">
        <div className="list--header">
            <h2>Teachers</h2>
            <select name="" id="">
                <option value="english">English</option>
                <option value="korean">Korean</option>
                <option value="computer science">Computer Science</option>
                <option value="philosophy">Philosophy</option>
            </select>
        </div>
        <div className="list--container">
            {teachers.map((teacher) => (
                <div className="list">
                    <div className="teacher--detail">
                        <img src={teacher.image} alt={teacher.name} />
                        <h2>{teacher.name}</h2>
                    </div>
                    <span>{teacher.duration}</span>
                    <span>{teacher.cost}</span>
                    <span className="teacher--todo">:</span>
                </div>
            ))}
        </div>
    </div>;
};

export default TeacherList;