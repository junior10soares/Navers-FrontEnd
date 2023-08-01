import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/Themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

/// api sem funcionar

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
