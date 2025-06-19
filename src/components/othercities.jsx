import '../css/othercities.css';

const Othercities = ({ city_1, city_2 }) => {
    const ts = (strg, len) => {
        if (!(typeof strg === "string")) return;
        if (strg.length > len) return `${strg.slice(0, len)}...`;
        return strg;
    }

    return (
        <div className="container-othercities" role="region" aria-label="Other cities weather">
            <div>
                <span className="other-cities" role="heading" aria-level="2">
                    More From {city_1?.location?.country ? city_1?.location?.country : '-'}
                </span>
            </div>
            <div className="other-divs">
                <div className="other-city-details">
                    <div className="div-details-text" style={{ fontSize: '11px' }}>{city_1?.location?.country || 'Country'}</div>
                    <div className="div-details-text" style={{ width: '100px' }}>{ts(city_1?.location?.name, 15) || 'City'}</div>
                    <div className="div-details-text" style={{ fontSize: '11px' }}>{city_1?.current?.condition?.text || 'weather'}</div>
                </div>
                <div className="other-city-img">
                    <img
                        src={city_1?.current?.condition?.icon || 'https://cdn.weatherapi.com/weather/64x64/day/113.png'}
                        alt={city_1?.current?.condition?.text || 'Weather icon'}
                        width="64"
                        height="64"
                    />
                </div>
                <div className="other-city-temp">
                    <span aria-label={`Temperature in Celsius: ${Math.round(city_1?.current?.temp_c)} degrees`}>
                        {Math.round(city_1?.current?.temp_c) || '0'} °C
                    </span>
                    <span className="temp-fa" aria-label={`Temperature in Fahrenheit: ${Math.round(city_1?.current?.temp_f)} degrees`}>
                        {Math.round(city_1?.current?.temp_f) || '0'} °F
                    </span>
                </div>
            </div>
            <div className="other-divs">
                <div className="other-city-details">
                    <div className="div-details-text" style={{ fontSize: '11px' }}>{city_2?.location?.country || 'Country'}</div>
                    <div className="div-details-text" style={{ width: '100px' }}>{ts(city_2?.location?.name, 15) || 'City'}</div>
                    <div className="div-details-text" style={{ fontSize: '11px' }}>{city_2?.current?.condition?.text || 'weather'}</div>
                </div>
                <div className="other-city-img">
                    <img
                        src={city_2?.current?.condition?.icon || 'https://cdn.weatherapi.com/weather/64x64/day/113.png'}
                        alt={city_2?.current?.condition?.text || 'Weather icon'}
                        width="64"
                        height="64"
                    />
                </div>
                <div className="other-city-temp">
                    <span aria-label={`Temperature in Celsius: ${Math.round(city_2?.current?.temp_c)} degrees`}>
                        {Math.round(city_2?.current?.temp_c) || '0'} °C
                    </span>
                    <span className="temp-fa" aria-label={`Temperature in Fahrenheit: ${Math.round(city_2?.current?.temp_f)} degrees`}>
                        {Math.round(city_2?.current?.temp_f) || '0'} °F
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Othercities;