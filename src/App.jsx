import { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
import Country from "./components/Country";

const App = () => {
  const [inputValue, setInputValue] = useState('')
  console.log("inputValue:", inputValue);
  const [countries, setCountries] = useState([]);
  const [countriesNames, setCountriesNames] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios('https://studies.cs.helsinki.fi/restcountries/api/all');
      setCountries(response.data);
    }
    getData();
  }, [])

const ListOfCountries = ({ countriesNames, inputValue }) => {
  if (countriesNames) {
    const countriesCount = countriesNames.length;
    if (inputValue !== "" && countriesCount > 10) {
      return <p>Too many matches, specify another filter</p>
    }
    
    else if (countriesCount <= 10 && countriesCount > 1) {
      return (
        <ul>
          {countriesNames.sort().map((country) => (
            <li key={country}>{country}</li>
          ))}
        </ul>
      );
    }
    else if (countriesCount === 1) {
      return (
        <Country country={selectedCountry} />
      )
    }
  }
}

  const handleInputValue = (event) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
    if (newInputValue) {
      const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(inputValue.toLowerCase())
      );
      const filteredCountriesNames = filteredCountries.map((country) => country.name.common.toUpperCase ());
      setCountriesNames(filteredCountriesNames);
      if (filteredCountries.length === 1) {
        setSelectedCountry(filteredCountries[0]);
        console.log("selectedCountry:", selectedCountry);
      }
    }
    else {
      setCountriesNames([]);
    }  
  }

  return (
    <div>
        find countries: <input value={inputValue} onChange={handleInputValue}/>
        <ListOfCountries countriesNames={countriesNames} inputValue={inputValue} />
    </div>
  )
}

export default App