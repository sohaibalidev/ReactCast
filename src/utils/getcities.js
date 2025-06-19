async function getRandomCities(countryName) {
    try {
        // Handle special case for USA
        const normalizedCountryName = countryName === 'USA United States of America'
            ? 'United States'
            : countryName;

        const countryCode = await getCountryCode(normalizedCountryName);
        if (!countryCode) {
            return { error: "Invalid country name" };
        }

        // Fetch cities data
        const url = `${process.env.REACT_APP_GET_ALL_CITIES}=${countryCode}&featureClass=P&orderby=population&maxRows=50&username=${process.env.REACT_APP_USER_NAME}`;
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok || !data.geonames) {
            console.log("Failed to fetch cities data");
        }

        // Filter and process cities
        const validCityTypes = ["PPL", "PPLA", "PPLC"];
        const cities = data.geonames
            .filter(city => validCityTypes.includes(city.fcode))
            .map(city => city.name);

        if (cities.length < 2) {
            return null;
        }

        // Select 2 random unique cities
        const selectedCities = [];
        while (selectedCities.length < 2 && cities.length > 0) {
            const randomIndex = Math.floor(Math.random() * cities.length);
            selectedCities.push(cities.splice(randomIndex, 1)[0]);
        }

        return selectedCities;
    } catch (error) {
        console.error("Error in getRandomCities:", error);
        return null;
    }
}

async function getCountryCode(countryName) {
    try {
        const response = await fetch(`${process.env.REACT_APP_COUNTRY_CODE}/${countryName}?fullText=true`);
        const data = await response.json();

        if (!response.ok || !Array.isArray(data) || data.length === 0) {
            return null;
        }

        return data[0]?.cca2 || null;
    } catch (error) {
        console.error("Error in getCountryCode:", error);
        return null;
    }
}

export default getRandomCities;