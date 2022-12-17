import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import { Footer, Header } from 'common/components'
import { PagesRoutes } from 'common/routes/PagesRoutes'
import { GlobalStyles } from 'common/styles/Global'
import { theme } from 'common/styles/Theme'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <PagesRoutes />
        <Footer />
        <ToastContainer position="bottom-right" />
      </ThemeProvider>
    </div>
  )
}

export default App
