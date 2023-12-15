const Country = (country) => {
    const name = country.country.name.common.toUpperCase();
    const capital = country.country.capital[0];
    const area = country.country.area;
    const languages = Object.values(country.country.languages);
    const languagesList = languages.map((language) => <li key={language}>{language}</li>);
    const flag = country.country.flags.png;     
    return (
      <>
        <h2>{name}</h2>
        <div>capital {capital}</div>
        <span>area {area}</span>
        <h4>languages:</h4>
        <div>{languagesList}</div>
        <br></br>
        <img src={flag} alt={country.country.flags.alt}></img>
      </>
    )
  }

  export default Country;