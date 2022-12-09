import { ThemeProvider } from 'styled-components'

import { Footer, Header } from 'common/components'
import { PagesRoutes } from 'common/routes/PagesRoutes'
import { GlobalStyles } from 'common/styles/Global'
import { theme } from 'common/styles/Theme'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <PagesRoutes />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App
