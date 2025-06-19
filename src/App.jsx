import { useEffect, useState } from "react";
import NavBar from "./components/navbar";
import WeatherCard from "./components/weathercard";
import Othercities from "./components/othercities";
import DetailedSection from "./components/detailedsection";
import Hourlysection from "./components/hourlysection";
import fetchWeather from './utils/weather';
import getRandomCities from "./utils/getcities";
import './app.css';

const App = () => {
  // State for weather data
  const [autoData, setAutoData] = useState(null);
  const [finalData, setFinalData] = useState(null);

  // State for random cities
  const [cities, setCities] = useState([]);
  const [city1, setCity1] = useState(null);
  const [city2, setCity2] = useState(null);
  const [finalCity1, setFinalCity1] = useState(null);
  const [finalCity2, setFinalCity2] = useState(null);

  /**
   * Handles search functionality
   * @param {string} query - Location search query
   */
  const handleSearch = (query) => {
    if (query) fetchWeatherData(query);
  };

  /**
   * Fetches weather data for given coordinates or location
   * @param {number|string} param1 - Latitude or location name
   * @param {number} [param2] - Longitude (optional)
   */
  const fetchWeatherData = (param1, param2) => {
    fetchWeather(param1, param2).then(data => {
      if (data?.location) {
        setAutoData(data);
        getRandomCities(data.location.country).then(setCities);
      }
    });
  };

  // Initial geolocation fetch
  useEffect(() => {
    const getCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    };

    getCurrentLocation();
  }, []);

  // Fetch weather for random cities when cities list updates
  useEffect(() => {
    if (cities.length === 2) {
      setCity1(null);
      setCity2(null);

      fetchWeather(`${cities[0]} ${autoData?.location?.country}`).then(setCity1);
      fetchWeather(`${cities[1]} ${autoData?.location?.country}`).then(setCity2);
    }
  }, [cities, autoData?.location?.country]);

  // Set final data when all required data is available
  useEffect(() => {
    if (cities.length === 2 && city1 && city2 && autoData) {
      setFinalCity1(city1);
      setFinalCity2(city2);
      setFinalData(autoData);
    }
  }, [city1, city2, autoData, cities.length]);

  return (
    <div className="container">
      <NavBar
        weatherData={finalData}
        onSearch={handleSearch}
      />

      <div className="sub-container">
        {/* Left column */}
        <div className="vertical-divs" style={{ width: '45%' }}>
          <div className="mini-divs-a min-div">
            <WeatherCard searchQuery={finalData} />
          </div>
          <div className="mini-divs-b min-div">
            <Othercities
              city_1={finalCity1}
              city_2={finalCity2}
            />
          </div>
        </div>

        {/* Right column */}
        <div className="vertical-divs" style={{ width: '55%' }}>
          <div className="mini-divs-b min-div">
            <DetailedSection data={finalData} />
          </div>
          <div className="mini-divs-a min-div">
            <Hourlysection data={finalData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;