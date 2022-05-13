import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

import './countrycard.scss'

type CountryCardProps = {
  flag: string
  name: string
  region: string
  population: number
  onClick: Function
  disabled: boolean
}

const CountryCard = ({
  flag,
  name,
  onClick,
  population,
  region,
  disabled,
}: CountryCardProps) => {
  return (
    <div className="country-card" key={name}>
      <div className="country-card__wrapper">
        <Link to={`/country/${name}`}>
          <span className="country-card__details">
            <span className="country-card_flag">
              <img src={flag} alt={name} />
            </span>
            <span className="country-card__name">
              <h2>{name}</h2>
            </span>
            <span className="country-card__region">
              <h2>{region}</h2>
            </span>
            <span className="country-card__population">
              <h2>{population}</h2>
            </span>
          </span>
        </Link>

        <div className="country-card__action">
          <Button
            disabled={disabled}
            className="btn btn__primary"
            onClick={() => onClick()}
          >
            {' '}
            Mark Star{' '}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CountryCard
