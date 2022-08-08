import React from "react";
import WeatherIcon from "./WeatherIcon";

type Props = {
    day : string;
    isLarge : boolean;
    temp : number;
    weather : string;
    icon: string;
    placeholder : boolean;
};

type State = {

};

class WeatherCard extends React.Component<Props, State> {
    constructor(props : Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={`weather-card ${this.props.isLarge ? "large" : ""}`}>
                <div className="card-title">{this.props.placeholder ? "Loading..." : this.props.day}</div>
                <div className="card-content">
                    <WeatherIcon icon={this.props.icon}></WeatherIcon>
                    <div className="card-content-info">
                        <div className="card-content-info-temp">{this.props.placeholder ? "-°" : `${this.props.temp}°`}</div>
                        {this.props.isLarge ? <div className="card-content-info-weather">{this.props.weather}</div> : ""}
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherCard;