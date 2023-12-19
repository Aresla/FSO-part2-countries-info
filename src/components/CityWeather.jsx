import { useState, useEffect } from "react";
import axios from "axios";
import '../App.css'

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
        <p>temperature: <span className='bold'>{kelvinToCelsius(data?.main?.temp).toFixed(1)} °C</span></p>
        <div>
        {
            hasIcon && <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0].icon}.png`} style={{width: '100px', height: '100px'}}/>
        }
        </div>
        <span>description: <span className='bold'>{data?.weather?.[0].description}</span></span>
        <p>wind: <span className='bold'>{data?.wind?.speed} m/s</span></p>
        </>
    )
};

export default CityWeather;