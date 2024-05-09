import React from 'react'
import '../App.css'

const CardCountry = ({country}) => {
  console.log(country)
  return (
    <div className='container_card'>
      <br /><br />
      <h2>{country.name.common}</h2>
      <img src={country.flags.svg}alt='country flag' />
      <ul className='datos'>
        <li>Capital: {country.capital}</li>
        <li>Población: {country.population}</li>
        <li>Area: {country.area}</li>
        <li>Continente: {country.region}</li>
      </ul>
    </div>
  )
}

export default CardCountry;