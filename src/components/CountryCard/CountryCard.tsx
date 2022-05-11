import React from 'react'

import Button from '@material-ui/core/Button'

import './cuntrycard.scss'

type CountryCardProps = {
  region: string
  population: number
  name: string
  flag: string
}

const CountryCard = ({ flag, name, region, population }: CountryCardProps) => {
  return (
    <div className="country-card">
      <div className="country-card__wrapper">
        <img src={flag} alt="country flag" />
        <h2 className="country-card__name">Country: {name}</h2>
        <h2 className="country-card__region">Region: {region}</h2>
        <h2 className="country-card__population">Population: {population}</h2>
        <div className="country-card__action">
          <Button className="btn__primary">Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}

export default CountryCard
