import React from "react";
import WeatherCard from "./WeatherCard";
import { WeatherData } from "./weatherData";

type Props = {
  loaded : boolean;
  weatherData: Array<WeatherData> | undefined;
};

type State = {
};

class WeatherPanel extends React.Component<Props, State> {
  constructor(props : Props) {
    super(props);
    this.state = {};
  }
  
  render() {
    if(this.props.loaded && this.props.weatherData) {
      let todayData = this.props.weatherData[0];
      let todayCard = <WeatherCard day={"Today"} isLarge={true} temp={Math.round(todayData.temp)} weather={todayData.weatherDesc} icon={todayData.weatherIcon} placeholder={false}></WeatherCard>
      
      let upcomingData = this.props.weatherData.slice(1);
      let upcomingCards = upcomingData.map((dayData, i) => 
        <WeatherCard key={i} day={dayData.day} isLarge={false} temp={Math.round(dayData.temp)} weather={dayData.weatherDesc} icon={dayData.weatherIcon} placeholder={false}></WeatherCard>
      )
      
      return (
        <div className="weather-panel">
          <div className="weather-panel-content">
            <div className="current-weather-section">
              {todayCard}
            </div>
            <div className="upcoming-weather-section">
              {upcomingCards}
            </div>
          </div>
        </div> 
      );
    }
      
    return (
      <div className="weather-panel">
        <div className="weather-panel-content">
          <div className="current-weather-section">
            <WeatherCard day={''} isLarge={true} temp={0} weather={"Loading"} icon={""} placeholder={true}></WeatherCard>
          </div>
          <div className="upcoming-weather-section">
            <WeatherCard day={''} isLarge={false} temp={14} weather={"Clouds"} icon={""} placeholder={true}></WeatherCard>
            <WeatherCard day={''} isLarge={false} temp={18} weather={"Rain"} icon={""} placeholder={true}></WeatherCard>
            <WeatherCard day={''} isLarge={false} temp={21} weather={"Scattered Cloud"} icon={""} placeholder={true}></WeatherCard>
            <WeatherCard day={''} isLarge={false} temp={26} weather={"Snow"} icon={""} placeholder={true}></WeatherCard>
          </div>          
        </div>
      </div>
    );
  }
}
    
    export default WeatherPanel;