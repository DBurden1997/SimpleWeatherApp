import React from "react";
import WeatherCard from "./WeatherCard";

function WeatherPanel() {

    return (
        <div className="weather-panel">
            <div className="weather-panel-content">
                <div className="current-weather-section">
                    <WeatherCard isLarge={true} temp={19} weather={"Rain"}></WeatherCard>
                </div>
                <div className="upcoming-weather-section">
                    <WeatherCard isLarge={false} temp={14} weather={"Clouds"}></WeatherCard>
                    <WeatherCard isLarge={false} temp={18} weather={"Rain"}></WeatherCard>
                    <WeatherCard isLarge={false} temp={21} weather={"Scattered Cloud"}></WeatherCard>
                    <WeatherCard isLarge={false} temp={26} weather={"Snow"}></WeatherCard>
                </div>
            </div>
        </div>
    )
}

export default WeatherPanel;