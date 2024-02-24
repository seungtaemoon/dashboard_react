/* eslint-disable no-unused-vars */
import React from "react";
import "../App.css"
import {
    BsFillArchiveFill,
    BsFillGrid3X3GapFill,
    BsPeopleFill,
    BsFillBellFill
} from 'react-icons/bs'

const Content = () => {
    return <main className="main-container">
                <div className="main--title">
                    Dashboard
                </div>
                <div className="main-cards">
                    <div className="card">
                        <div className="card-inner">
                            <h3>PRODUCTS</h3>
                            <BsFillArchiveFill className="card_icon"/>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <h3>CATEGORIES</h3>
                            <BsFillGrid3X3GapFill className="card_icon"/>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <h3>CUSTOMERS</h3>
                            <BsPeopleFill className="card_icon"/>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <h3>ALERTS</h3>
                            <BsFillBellFill className="card_icon"/>
                        </div>
                    </div>
                </div>
        </main>;
};

export default Content;