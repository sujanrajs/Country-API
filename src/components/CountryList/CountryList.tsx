import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCountries } from '../../redux/actions'
import { AppState } from '../../types'

import CountryCard from '../CountryCard/CountryCard'

import './countrylist.scss'

const CountryList = () => {
  const countries = useSelector(
    (state: AppState) => state.countryReducer.countries
  )
  const isLoading = useSelector(
    (state: AppState) => state.countryReducer.isLoading
  )

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  return (
    <div className="country-list">
      <div className="country-list__sort"></div>

      <div className="country-list__cards">
        {isLoading && <h2>Loading...</h2>}
        {!isLoading &&
          countries &&
          countries.map((country) => <CountryCard {...country} />)}
      </div>
    </div>
  )
}

export default CountryList
