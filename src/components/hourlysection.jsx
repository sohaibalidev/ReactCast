import { useEffect, useState } from "react";
import '../css/hourlysection.css';

const Hourlysection = ({ data }) => {
    const [tempC, settempC] = useState(
        Array.from({ length: 24 }, (_, i) => {
            const hourStr = i.toString().padStart(2, '0');
            return {
                time: `0 ${hourStr}:00`,
                temp_f: 0,
                temp_c: 0,
                condition: {
                    code: 1000,
                    icon: "https://cdn.weatherapi.com/weather/64x64/day/113.png"
                }
            };
        })
    );

    useEffect(() => {
        if (data?.forecast?.forecastday?.[0]?.hour) {
            settempC(data.forecast.forecastday[0].hour);
        }
    }, [data]);

    return (
        <div className="container-hourlysection">
            <div className="container-items">
                {tempC.map((x, i) => (
                    <div className="items-hourly" key={i}>
                        <div className="div-parts-top">{x.time.split(' ')[1]}</div>
                        <div className="div-parts-mid"><img className="mid-img" src={x.condition.icon} alt="" /></div>
                        <div className="div-parts-mid-bot">{x.temp_f}°F</div>
                        <div className="div-parts-bot">
                            <span>
                                {Math.floor(x.temp_c)}°C
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hourlysection;