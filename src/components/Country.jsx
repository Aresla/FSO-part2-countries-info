import '../App.css'

const Country = ({ country }) => {
    const name = country.name.common.toUpperCase();
    const region = country.region;
    const capital = country.capital[0];
    const population = country.population;
    const languages = Object.values(country.languages);
    const languagesList = languages.map((language) => <li key={language}>{language}</li>);
    const flag = country.flags.png;     
    return (
      <section className="countryInfo">
        <div>
          <h2>{name}</h2>
          <div>region: <span className='bold'>{region}</span></div>
          <div>capital: <span className='bold'>{capital}</span></div>
          <span>population: <span className='bold'>{population}</span></span>
          <div>languages:</div>
          <div><span className='bold'>{languagesList}</span></div>
        </div>
        <div>
          <br></br>
          <img src={flag} alt={country.flags.alt}></img>
        </div>  
      </section>
    )
  }

  export default Country;