import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = import.meta.env.VITE_APP_WEATHER_API_KEY;
const baseUrl = "https://api.openweathermap.org/data/2.5";

const kelvinToCelsius = (temp) => temp - 273.15;

const CityWeather = ({country}) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        if (country) {
            const getData = async () => {
                const capital = country.capital[0];
                const capitalWithCapitalizedLetter = capital.charAt(0).toUpperCase() + capital.slice(1).toLowerCase();
                const url = `${baseUrl}/weather?q=${capitalWithCapitalizedLetter}&appid=${apiKey}`;
                const response = await axios(url);
                setData(response.data);            
            } 
            getData();
        }
        
    }, [country])

    const hasIcon = data?.weather?.[0].icon;
    
    return (
        data &&  
        <>
        <h2>Weather in {country.capital[0]}</h2>
        <p>temperature: {kelvinToCelsius(data?.main?.temp).toFixed(1)} Celsius</p>
        <div>
        {
            hasIcon && <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0].icon}.png`} style={{width: '100px', height: '100px'}}/>
        }
        </div>
        <span>description: {data?.weather?.[0].description}</span>
        <p>wind: {data?.wind?.speed} m/s</p>
        </>
    )
};

export default CityWeather;