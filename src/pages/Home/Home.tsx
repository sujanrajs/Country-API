import React from 'react'
import { useDispatch } from 'react-redux'

import Appbar from '../../components/Appbar/Appbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import CountryList from '../../components/CountryList/CountryList'

import { fetchAllCountries } from '../../redux/actions'

import './home.scss'

const Home = () => {
  const [drawerState, setDrawerState] = React.useState(false)

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  const handleDrawerState = (state: boolean) => {
    setDrawerState(state)
  }

  return (
    <div className="home">
      <Appbar onClick={handleDrawerState} drawerState={drawerState} />
      <Sidebar onClick={handleDrawerState} drawerState={drawerState} />
      <CountryList />
    </div>
  )
}

export default Home
