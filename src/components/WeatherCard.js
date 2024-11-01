// src/components/WeatherCard.js
import React from 'react';

const WeatherCard = ({ day, temp, description, icon }) => {
  return (
    <div className="weather-card">
      <h3>{day}</h3>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
      <p>{description}</p>
      <h4>{temp}°C</h4>
    </div>
  );
};

export default WeatherCard;