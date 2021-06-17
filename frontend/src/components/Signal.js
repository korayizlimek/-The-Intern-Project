import React from "react";
import "./Signal.css";

const Signal = ({ company, name, city, district, data }) => {
    return (
        <div className="signal">
            <div className="signal__info">
                <p className="signal__company">{company}</p>
                <p className="signal__name">{name}</p>
                <p className="signal__city">{city}</p>
                <p className="signal__district">{district}</p>
                <p className="signal__data">{data}</p>
            </div>
        </div>
    );
};

export default Signal;
