import React from 'react'
import { ThemeProvider } from '@material-ui/styles'

import Routes from './Routes'
import Appbar from './components/Appbar/Appbar'
import Sidebar from './components/Sidebar/Sidebar'

import './styles/_base.scss'
import theme from './theme'

function App() {
  const [drawerState, setDrawerState] = React.useState(false)

  const handleDrawerState = (state: boolean) => {
    setDrawerState(state)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Appbar onClick={handleDrawerState} drawerState={drawerState} />

        <Sidebar onClick={handleDrawerState} drawerState={drawerState} />
        <Routes />
      </div>
    </ThemeProvider>
  )
}

export default App
