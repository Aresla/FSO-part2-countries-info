import { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
import Country from "./components/Country";
import ListOfCountries from "./components/ListOfCountries";

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [countries, setCountries] = useState([]);
  const [foundCountries, setFoundCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios('https://studies.cs.helsinki.fi/restcountries/api/all');
      setCountries(response.data);
    }
    getData();
  }, [])

  const handleInputValue = (event) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
    if (newInputValue) {
      const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFoundCountries(filteredCountries);
    } else {
      setFoundCountries([]);
    }
  }

  const handleCountrySelect = (country) => {
    setFoundCountries([country]);
  }

  return (
    <div>
      find countries: <input value={inputValue} onChange={handleInputValue}/>
      {foundCountries.length > 10 && <p>Too many matches, specify another filter</p>}
      {foundCountries.length === 0 && <p></p>}
      {foundCountries.length <= 10 && foundCountries.length > 1 && <ListOfCountries 
        countries={foundCountries} 
        onSelect={handleCountrySelect} />
      }
      {foundCountries.length === 1 && <Country country={foundCountries[0]} />}
    </div>
  )
}

export default App 