/**
 * Weather condition categorization utilities.
 * All functions return human-readable descriptions of weather metrics.
 */

// Wind speed categories (km/h)
const WIND_CATEGORIES = [
    { threshold: 5, label: "Calm" },
    { threshold: 15, label: "Light Breeze" },
    { threshold: 30, label: "Moderate Breeze" },
    { threshold: 50, label: "Strong Breeze" },
    { threshold: 75, label: "Very Windy" },
    { threshold: 100, label: "Stormy" },
    { threshold: Infinity, label: "Hurricane Force" }
];

// Humidity categories (%)
const HUMIDITY_CATEGORIES = [
    { threshold: 20, label: "Very Dry" },
    { threshold: 35, label: "Dry" },
    { threshold: 50, label: "Comfortable" },
    { threshold: 65, label: "Slightly Humid" },
    { threshold: 75, label: "Moderate Humidity" },
    { threshold: 85, label: "High Humidity" },
    { threshold: 95, label: "Very Humid" },
    { threshold: Infinity, label: "Extremely Humid" }
];

// UV index categories
const UV_CATEGORIES = [
    { threshold: 3, label: "Low" },
    { threshold: 6, label: "Moderate" },
    { threshold: 8, label: "High" },
    { threshold: 11, label: "Very High" },
    { threshold: Infinity, label: "Extreme" }
];

// Pressure categories (hPa)
const PRESSURE_CATEGORIES = [
    { threshold: 980, label: "Very Low Pressure" },
    { threshold: 1000, label: "Low Pressure" },
    { threshold: 1020, label: "Normal Pressure" },
    { threshold: 1040, label: "High Pressure" },
    { threshold: Infinity, label: "Very High Pressure" }
];

/**
 * Categorizes wind speed into human-readable descriptions.
 * @param {number} speed - Wind speed in km/h
 * @returns {string} Wind category description
 */
function getWindCategory(speed) {
    return categorize(WIND_CATEGORIES, speed);
}

/**
 * Categorizes humidity percentage into human-readable descriptions.
 * @param {number} humidity - Humidity percentage (0-100)
 * @returns {string} Humidity category description
 */
function getHumidityCategory(humidity) {
    return categorize(HUMIDITY_CATEGORIES, humidity);
}

/**
 * Categorizes UV index into standard risk levels.
 * @param {number} uvIndex - UV index value
 * @returns {string} UV risk category
 */
function getUVCategory(uvIndex) {
    return categorize(UV_CATEGORIES, uvIndex);
}

/**
 * Categorizes atmospheric pressure into descriptive levels.
 * @param {number} pressure - Pressure in hPa
 * @returns {string} Pressure category description
 */
function getPressureCategory(pressure) {
    return categorize(PRESSURE_CATEGORIES, pressure);
}

// Helper function for category lookup
function categorize(categories, value) {
    if (value < 0) console.log("Value cannot be negative");
    const found = categories.find(cat => value < cat.threshold);
    return found ? found.label : categories[categories.length - 1].label;
}

export { getWindCategory, getHumidityCategory, getUVCategory, getPressureCategory };