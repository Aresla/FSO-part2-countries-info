const Country = ({ country }) => {
    const name = country.name.common.toUpperCase();
    const capital = country.capital[0];
    const area = country.area;
    const languages = Object.values(country.languages);
    const languagesList = languages.map((language) => <li key={language}>{language}</li>);
    const flag = country.flags.png;     
    return (
      <>
        <h2>{name}</h2>
        <div>capital {capital}</div>
        <span>area {area}</span>
        <h4>languages:</h4>
        <div>{languagesList}</div>
        <br></br>
        <img src={flag} alt={country.flags.alt}></img>
      </>
    )
  }

  export default Country;