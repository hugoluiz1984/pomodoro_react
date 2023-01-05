import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import StateProvider from './components/StateProvider'

const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body{
    background-color: ${(props) => props.theme.colors.bg};;
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.primaryFont};
  }
`
const theme = {
  colors: {
    primary: '#B85600',
    secondary: '#08002B',
    bg: '#220045',
    primaryFont: '#FFF',
    secondaryFont: '#000',
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </StateProvider>
    
  </React.StrictMode>,
)
