import { ThemeProvider } from "@mui/material/styles"

import StartPage from "./pages/StartPage"

import { theme } from "./helpers/theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StartPage />
    </ThemeProvider>
  )
}

export default App
