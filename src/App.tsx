import { ThemeProvider, StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import MainHeader from './components/MainHeader'
import SearchContainer from './components/SearchContainer'

function App() {
  return (
    <>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <MainHeader />
          <SearchContainer />
        </ThemeProvider>
      </StyleSheetManager>
    </>
  )
}

export default App
