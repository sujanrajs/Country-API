import { Dispatch } from 'redux'
import axios from 'axios'

import {
  FETCH_COUNTRIES_SUCCESS,
  CountryActions,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_LOADING,
} from '../../types'

export function fetchAllCountriesLoading(): CountryActions {
  return {
    type: FETCH_COUNTRIES_LOADING,
  }
}

export function fetchAllCountriesSuccess(countries: []): CountryActions {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries,
  }
}

export function fetchAllCountriesFailure(error: string): CountryActions {
  return {
    type: FETCH_COUNTRIES_FAILURE,
    payload: error,
  }
}

export function fetchAllCountries() {
  return (dispatch: Dispatch) => {
    dispatch(fetchAllCountriesLoading())
    axios
      .get('https://restcountries.com/v2/all')
      .then((res) => {
        const countries = res.data
        dispatch(fetchAllCountriesSuccess(countries))
      })
      .catch((err) => {
        dispatch(fetchAllCountriesFailure(err))
      })
  }
}
