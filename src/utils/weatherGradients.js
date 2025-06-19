/**
 * Weather code to gradient mapping for day/night themes.
 */
const weatherBackgrounds = {
    1000: { // Clear sky
        day: "linear-gradient(to right, #ff9800, #ff5722)",
        night: "linear-gradient(to right, #141e30, #243b55)"
    },
    1003: { // Partly cloudy
        day: "linear-gradient(to right, #84b5ff, #e6d9d9)",
        night: "linear-gradient(to right, #232526, #414345)"
    },
    1006: { // Cloudy
        day: "linear-gradient(to right, #d3d3d3, #a3a3a3)",
        night: "linear-gradient(to right, #2c3e50, #4ca1af)"
    },
    1009: { // Overcast
        day: "linear-gradient(to right, #37474f, #263238)",
        night: "linear-gradient(to right, #0f2027, #203a43, #2c5364)"
    },
    1030: { // Mist
        day: "linear-gradient(to right, #a1c4fd, #c2e9fb)",
        night: "linear-gradient(to right, #3a6186, #89253e)"
    },
    1063: { // Patchy rain
        day: "linear-gradient(to right, #8ea6c7, #4a90e2)",
        night: "linear-gradient(to right, #2c3e50, #3498db)"
    },
    1183: { // Light rain
        day: "linear-gradient(to right, #4a90e2, #005bea)",
        night: "linear-gradient(to right, #232526, #414345)"
    },
    1195: { // Heavy rain
        day: "linear-gradient(to right, #2b5876, #4e4376)",
        night: "linear-gradient(to right, #141e30, #243b55)"
    },
    1273: { // Patchy snow
        day: "linear-gradient(to right, #616161, #424242)",
        night: "linear-gradient(to right, #000000, #434343)"
    },
    1276: { // Heavy snow
        day: "linear-gradient(to right, #2c3e50, #000000)",
        night: "linear-gradient(to right, #000000, #1a1a1a)"
    },
    1210: { // Light snow
        day: "linear-gradient(to right, #eef2f3, #8e9eab)",
        night: "linear-gradient(to right, #b3cde0, #011f4b)"
    },
    1225: { // Blizzard
        day: "linear-gradient(to right, #e6dada, #274046)",
        night: "linear-gradient(to right, #5a3f37, #2c7744)"
    },
    1237: { // Ice pellets
        day: "linear-gradient(to right, #d7d2cc, #304352)",
        night: "linear-gradient(to right, #4b6cb7, #182848)"
    },
    1135: { // Fog
        day: "linear-gradient(to right, #606c88, #3f4c6b)",
        night: "linear-gradient(to right, #2c3e50, #4ca1af)"
    },
    1147: { // Freezing fog
        day: "linear-gradient(to right, #757f9a, #d7dde8)",
        night: "linear-gradient(to right, #283048, #859398)"
    },
    default: { // Fallback
        day: "linear-gradient(to right, #667db6, #0082c8)",
        night: "linear-gradient(to right, #141e30, #243b55)"
    }
};

export default weatherBackgrounds;