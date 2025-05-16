import React, { useEffect, useState } from 'react';
import { TiWeatherDownpour } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import axios from 'axios';

import Main_comp from './Main_comp'; // Displays weather UI

const Header = () => {
  const [city, setCity] = useState("london"); // City input
  const [info, setInfo] = useState([]);       // Current weather data
  const [forecast, setForecast] = useState([]); // Forecast data

  const API_KEY = 'd05dbbe9cdca940d1fa70e004437daf4';

  // API URLs
  const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;

  // Fetch current weather data
  const getWeatherData = async () => {
    try {
      const response = await axios.get(currentWeatherURL);
      setInfo(response.data);
    } catch (error) {
      console.error("Error fetching current weather:", error);
    }
  };

  // Fetch 5-day forecast data
  const getForecastData = async () => {
    try {
      const response = await axios.get(forecastURL);
      setForecast(response.data);
    } catch (error) {
      console.error("Error fetching forecast:", error);
    }
  };

  // Fetch data on initial load and when city changes
  useEffect(() => {
    getWeatherData();
    getForecastData();
  }, [city]);

  return (
    <div className='bg-linear-to-l from-orange-400 to-blue-400 w-[100vw] md:w-full'>
      
      {/* Header Bar */}
      <div className='max-w-full shadow-2xl grid lg:grid-cols-4 md:grid-cols-3'>

        {/* Logo Section */}
        <div className='max-w-full h-[10vh] flex items-center'>
          <TiWeatherDownpour size={40} />
          <p className='text-2xl ml-2'>WeatherApp</p>
        </div>

        {/* Search Input Field */}
        <div className='max-w-full h-[10vh] sm:col-span-1 md:col-span-2 lg:col-span-2 flex items-center px-[10px]'>
          <input
            type="text"
            className='w-[80%] lg:w-[80%] h-[80%] border-2 rounded-l-2xl p-[20px] text-2xl bg-white'
            id='inp'
            placeholder="search city--"
          />
          <button
            className='w-[20%] lg:w-[10%] h-[80%] border-2 rounded-r-2xl cursor-pointer bg-white'
            id='btn'
            onClick={() => {
              const inp = document.querySelector("#inp");
              if (inp.value.trim() !== "") setCity(inp.value);
            }}
          >
            Search
          </button>
        </div>

      </div>

      {/* Weather Display Component */}
      <Main_comp data={info} fdata={forecast} />

    </div>
  );
};

export default Header;
