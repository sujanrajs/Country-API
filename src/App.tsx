import React from 'react'
import Routes from './Routes'

import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'

import './styles/_base.scss'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  )
}

export default App
