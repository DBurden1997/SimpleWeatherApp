export type WeatherListItemMain = {
    feels_like : number;
    grnd_level : number;
    humidity : number;
    pressure : number;
    sea_level : number;
    temp : number;
    temp_kf : number;
    temp_max : number;
    temp_min : number;
}
  
export type WeatherListItemWeather = {
    description : string;
    icon : string;
    id : number;
    main : string;
}
  
export type WeatherListItem = {
    dt : number;
    main : WeatherListItemMain;
    weather : Array<WeatherListItemWeather>;
}
  
export type WeatherData = {
    day: string;
    temp : number;
    weatherDesc : string;
    weatherIcon : string;
}
