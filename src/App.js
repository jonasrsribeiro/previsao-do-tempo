// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import './App.css';

const App = () => {
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("São José dos Campos");
  const API_KEY = "b276a4b812249a8153512786dcf11585";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}&lang=pt_br`
        );        
        setForecast(response.data.list);
      } catch (error) {
        console.error("Erro ao buscar dados da API", error);
      }
    };
    fetchWeather();
  }, [city]);

  return (
    <div className="App">
      <h1>Previsão do Tempo para {city}</h1>
      <div className="weather-container">
        {forecast.filter((_, index) => index % 8 === 0).map((day, index) => (
          <WeatherCard
            key={index}
            day={new Date(day.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long' })}
            temp={Math.round(day.main.temp)}
            description={day.weather[0].description}
            icon={day.weather[0].icon}
          />
        ))}
      </div>
    </div>
  );
};

export default App;