import React from 'react';
import { BsThermometerSun } from "react-icons/bs";
import { WiHumidity, WiDayWindy, WiSunset } from "react-icons/wi";
import { LuCloudSunRain } from "react-icons/lu";

const MainComp = ({ data, fdata }) => {
  
  const {
    name,
    main,
    weather,
    wind,
    sys,
  } = data;

  // Extract weather details
  const temp = (main?.temp - 273.15).toFixed(1);
  const feelsLike = (main?.feels_like - 273.15).toFixed(1);
  const humidity = main?.humidity;
  const windSpeed = (wind?.speed * 3.6).toFixed(1); // Convert m/s to km/h
  const description = weather?.[0]?.description;
  const iconCode = weather?.[0]?.icon;

  // Sunrise and sunset formatting
  const sunrise = new Date(sys?.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const sunset = new Date(sys?.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  //image url
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // Extract 6 daily forecasts 
  const dailyForecast = fdata?.list?.filter((item)=>
    new Date(item.dt_txt).getHours() === 12
  ).slice(1,6);
  console.log(dailyForecast)
  return (
    <div>
      {/* Date and Time */}
      <div className='location_bar w-full my-3'>
        <p className='capitalize font-medium text-center py-6'>
          {new Date().toLocaleDateString('en-GB', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })} | local time {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>

        {/* Location */}
        <div className='flex justify-center'>
          <p className='capitalize font-medium text-3xl'>{name}, {sys?.country}</p>
        </div>

        {/* Weather Description */}
        <p className='capitalize text-center py-5 font-bold text-2xl'>{description}</p>

        {/* Current Weather Info */}
        <div className='w-full md:flex md:justify-evenly md:items-center  grid grid-cols-2'>
          <img src={iconUrl} alt="Weather Icon" className='h-[150px] w-[150px]' />
          <p className='lg:text-8xl  md:text-6xl lg:pl-[100px] text-5xl pt-[40px]'>{temp}°C</p>
          <div className=' col-span-full pl-[50px]'>
            <div className='flex items-center py-1'>
              <BsThermometerSun size={30} />
              <p className='lg:text-[25px] pl-1 md:text-[15px]'>Real Feel: {feelsLike}°</p>
            </div>
            <div className='flex items-center py-1'>
              <WiHumidity size={30} />
              <p className='lg:text-[25px] pl-1'>Humidity: {humidity}%</p>
            </div>
            <div className='flex items-center py-1'>
              <WiDayWindy size={30} />
              <p className='lg:text-[25px] pl-1'>Wind Speed: {windSpeed} km/h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sunrise and Sunset */}
      <div className='w-full flex md:justify-center md:gap-[150px] py-2 justify-between'>
        <div className='flex items-center md:text-2xl text-[19px] md:gap-3'>
          <LuCloudSunRain size={30} />
          <p>Sunrise {sunrise}</p>
        </div>
        <div className='flex items-center md:text-2xl text-[19px] md:gap-3'>
          <WiSunset size={30} />
          <p>Sunset {sunset}</p>
        </div>
      </div>

      {/* Weekly Forecast */}
      <div className='w-full px-5 mt-5'>
        <hr className='md:mx-10 mb-5 ' />

        {/* Weekday Labels */}
        <div className='flex md:justify-around justify-between text-2xl md:font-bold text-center capitalize'>
          {dailyForecast?.map((item, i) => (
            <p key={i}>
              {new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}
            </p>
          ))}
        </div>

        {/* Forecast Icons */}
        <div className='flex justify-around items-center mt-2'>
          {dailyForecast?.map((item, i) => (
            <img
              key={i}
              src={`https://openweathermap.org/img/wn/${item.weather?.[0]?.icon}@2x.png`}
              alt={item.weather?.[0]?.description}
              className='md:size-[100px] size-[70px]'
            />
          ))}
        </div>

        {/* Forecast Temperatures */}
        <div className='flex justify-between md:justify-around md:text-2xl md:font-bold text-center mt-2'>
          {dailyForecast?.map((item, i) => (
            <p key={i}>{(item.main?.temp - 273.15).toFixed(1)}°</p>
          ))}
        </div>

        {/* Forecast Descriptions */}
        <div className='flex md:justify-around md:text-xl md:font-medium capitalize mt-1'>
          {dailyForecast?.map((item, i) => (
            <p key={i}>{item.weather?.[0]?.description}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComp;
