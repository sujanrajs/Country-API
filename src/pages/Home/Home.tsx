import React from 'react'
import { useDispatch } from 'react-redux'
import CountryList from '../../components/CountryList/CountryList'

import { fetchAllCountries } from '../../redux/actions'

import './home.scss'

const Home = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  return (
    <div className="home">
      <CountryList />
    </div>
  )
}

export default Home
