const fetchWeather = async (city, country) => {
    try {
        let query = city;
        if (country) {
            query = `${city},${country}`;
        }

        const response = await fetch(
            `${process.env.REACT_APP_WEATHER_API_URL}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${query}&aqi=no`
        );

        if (!response.ok) {
            console.log(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
};

export default fetchWeather;