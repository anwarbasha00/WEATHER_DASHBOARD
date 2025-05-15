🌦️ WeatherApp
A sleek and responsive React-based weather application that provides real-time weather data and a 5-day forecast using the OpenWeatherMap API. Built with React, Tailwind CSS, and React Icons for a clean and interactive UI.

🚀 Features
🌍 City Search with dynamic weather updates

🌡️ Current Weather including:

Temperature (Celsius)

Feels Like

Humidity

Wind Speed

🌄 Sunrise and Sunset times

📅 5-Day Forecast with:

Daily icons

Daily average temperatures

Weather conditions

🎨 Beautiful, responsive UI with Tailwind CSS

🧭 Local time and full date display

🧩 Technologies Used
React

Axios

Tailwind CSS

OpenWeatherMap API

React Icons

📁 Project Structure
weather-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js        // Handles search, API calls, and layout
│   │   └── MainComp.js      // Displays weather and forecast data
│   ├── App.js
│   └── index.js
├── tailwind.config.js
├── package.json
└── README.md

🧠 How It Works
Header.js
Manages the app’s state (city, current data, forecast)

Fetches weather and forecast data on city search or load

Passes the data to MainComp

MainComp.js
Displays current weather data including temperature, wind, humidity, and icon

Formats sunrise and sunset times

Filters the forecast to show daily noon values

Shows a 5-day preview with icons, temperatures, and weather summaries

