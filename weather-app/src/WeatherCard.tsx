import React from "react";

interface WeatherCardProps{
    isLarge : boolean;
    temp : number;
    weather : string;
}

function WeatherCard(props : WeatherCardProps) {

    return (
        <div className={`weather-card ${props.isLarge ? "large" : ""}`}>
            <div className="card-title">Today</div>
            <div className="card-content">
                <i className="fa-solid fa-cloud"></i>
                <div className="card-content-info">
                    <div className="card-content-info-temp">{`${props.temp}°`}</div>
                    {props.isLarge ? <div className="card-content-info-weather">{props.weather}</div> : ""}
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;