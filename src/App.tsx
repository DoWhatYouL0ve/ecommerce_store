import { ThemeProvider } from 'styled-components'

import { theme } from './common/styles/theme'

import { GlobalStyles } from 'common/styles/global'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        Hello
      </ThemeProvider>
    </div>
  )
}

export default App
