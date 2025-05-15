Company:Codetech It Solutions

Name:Sk Anwar Basha

Intern ID :CT04DM650

Domain: React.js Web Development

Duration: 4 weeks

Mentor: Neela Santosh

🌦️ WeatherApp

WeatherApp is a responsive and user-friendly weather forecast application built using React, Tailwind CSS, and the OpenWeatherMap API. It allows users to search for any city and view real-time weather data along with a 5-day forecast. The app displays current temperature, weather conditions, humidity, wind speed, sunrise/sunset times, and a visually appealing multi-day outlook with icons.

📌 Features

Search by City: Type a city name and view its weather instantly.

Current Weather Display:

Temperature in Celsius

"Feels Like" temperature

Humidity percentage

Wind speed (converted from m/s to km/h)

Weather description and icon

Location and local time

Sunrise and Sunset Times: Displays in readable 12-hour format.

5-Day Forecast:

Midday temperatures for the next five days

Daily weather icons and conditions

Responsive UI: Mobile-first design with Tailwind CSS

Real-Time Updates: Automatically fetches and updates data when a new city is searched.

⚙️ Technologies Used

React: Component-based UI development

Axios: For making API requests

Tailwind CSS: Utility-first styling framework

React Icons: To display weather and UI icons

OpenWeatherMap API: Source for weather and forecast data

🧠 How It Works

The app uses two API endpoints from OpenWeatherMap:

Current Weather Data API: Retrieves real-time conditions

5-Day Forecast API: Provides weather predictions every 3 hours

From the forecast data, the app filters out one data point per day (specifically at 12 PM) to simplify the display and maintain visual consistency. The data is passed from the Header.js component to MainComp.js, which renders the current and forecast weather information dynamically.

Tailwind CSS is used throughout for a clean, responsive layout. Weather icons and data are matched using the OpenWeatherMap-provided icon codes and formatted using helper libraries like toLocaleTimeString() for time display.

📁 File Structure

src/

├── components/

│   ├── Header.js      // Input field, API calls, and layout

│   └── MainComp.js    // Displays current and forecast data

├── App.js

└── index.js

output:

Laptop and Desktop view

![Image](https://github.com/user-attachments/assets/98897d50-ebd0-4ebc-8a09-f46c074ecd81)

Tablet view

![Image](https://github.com/user-attachments/assets/df2a594a-5989-4ea8-9bf4-167df01827d9)

Mobile view

![Image](https://github.com/user-attachments/assets/5fc607ce-7462-4fa3-bc43-6325b33920cd)
