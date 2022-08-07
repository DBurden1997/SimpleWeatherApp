import React from 'react';
import CityNav from './CityNav';
import WeatherPanel from './WeatherPanel';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CityNav></CityNav>
      </header>
      <main className="App-content">
        <WeatherPanel></WeatherPanel>
      </main>
      <footer className='App-footer'>

      </footer>
    </div>
  );
}

export default App;
