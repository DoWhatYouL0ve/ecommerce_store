import { ThemeProvider } from 'styled-components'

import { theme } from './common/styles/theme'

import { Footer, Header } from 'common/components'
import { GlobalStyles } from 'common/styles/global'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <h1>Hello</h1>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App
