import React from 'react';
import CityNav from './CityNav';
import WeatherPanel from './WeatherPanel';
import './App.css';
import {WeatherData, WeatherListItem} from './weatherData';

type Props = {

};

type State = {
  cityList : Array<string>;
  cityWeatherIds : Map<string, number>;
  cityWeatherData: Map<string, Array<WeatherData>>,
  activeCity : string;
  loaded : boolean;
};

class App extends React.Component<Props, State>{
  constructor(props : Props) {
    super(props);

    this.state = {
      cityList: ["St. John's", "Tokyo", "Madrid"],
      cityWeatherIds: new Map<string, number>([
        ["St. John's", 6324733],
        ["Tokyo", 1850147],
        ["Madrid", 6359304],
      ]),
      cityWeatherData: new Map<string, Array<WeatherData>>([]),
      activeCity: "St. John's",
      loaded: false,
    };
  }

  getWeatherData(cityId : number) {
    return new Promise((resolve, reject) => {
      let url = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=NULL`
  
      const xhr = new XMLHttpRequest();
      xhr.open('GET',url);
      xhr.onload = () => {
        if(xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    })
  }
  
  parseWeatherData(data : any) {
    const parsedData = JSON.parse(data);

    let weatherList : Array<WeatherListItem> = parsedData.list;
    let daily : Array<WeatherListItem> = weatherList.filter((listItem, index) => {
      return index % 8 === 0;
    });

    let weatherData : Array<WeatherData> = daily.map((dayData) : WeatherData => {
      let mappedData : WeatherData = {
        day: new Date(dayData.dt * 1000).toLocaleString('en-US', {weekday: 'long'}),
        temp: dayData.main.temp,
        weatherDesc: dayData.weather[0].main,
        weatherIcon: dayData.weather[0].icon,
      };

      return mappedData;
    });
  
    return weatherData;
  }

  changeCity(activeCity : string) {
      this.setState((state) => ({
          activeCity
      }));
  }

  componentDidMount() {
    if(!this.state.loaded){
      let stJohnsId = this.state.cityWeatherIds.get("St. John's");
      let tokyoId = this.state.cityWeatherIds.get("Tokyo");
      let madridId = this.state.cityWeatherIds.get("Madrid");
      if(stJohnsId && tokyoId && madridId) {
        let stJohnsPromise = this.getWeatherData(stJohnsId).then(this.parseWeatherData, (error)=>console.log(error));
        let tokyoPromise = this.getWeatherData(tokyoId).then(this.parseWeatherData, (error)=>console.log(error));
        let madridPromise = this.getWeatherData(madridId).then(this.parseWeatherData, (error)=>console.log(error));
  
        Promise.all([stJohnsPromise, tokyoPromise, madridPromise]).then((weatherData) => {
          let cityWeatherData = new Map<string, Array<WeatherData>>();
          if(weatherData[0]) {
            cityWeatherData.set("St. John's", weatherData[0]);
          }
          if(weatherData[1]) {
            cityWeatherData.set("Tokyo", weatherData[1]);
          }
          if(weatherData[2]) {
            cityWeatherData.set("Madrid", weatherData[2]);
          }
          this.setState({cityWeatherData, loaded: true});
        })
      }
    }
  }

  render() {
    let activeData = this.state.cityWeatherData.get(this.state.activeCity);

    return (
      <div className="App">
        <header className="App-header">
          <CityNav cityList={this.state.cityList} activeCity={this.state.activeCity} onCityClick={this.changeCity.bind(this)}></CityNav>
        </header>
        <main className="App-content">
          <WeatherPanel loaded={this.state.loaded} weatherData={activeData}></WeatherPanel>
        </main>
        <footer className='App-footer'>
  
        </footer>
      </div>
    );
  }
  }

export default App;
