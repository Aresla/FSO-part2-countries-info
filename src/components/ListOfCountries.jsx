const ListOfCountries = ({countries, onSelect}) => 
  <ul>
    {countries.map(country => (
      <li key={country.name.common}>{country.name.common} 
        <button onClick={() => onSelect(country)}>show</button>
      </li>
    ))}
  </ul>
    
  export default ListOfCountries;