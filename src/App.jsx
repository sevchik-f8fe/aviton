import { ThemeProvider } from "@mui/material/styles"
import { TonConnectUIProvider } from '@tonconnect/ui-react';

import StartPage from "./pages/StartPage"

import { theme } from "./helpers/theme"

const App = () => {
  return (
    <TonConnectUIProvider manifestUrl="https://https://sevchik-f8fe.github.io/aviton/tonconnect-manifest.json">
      <ThemeProvider theme={theme}>
        <StartPage />
      </ThemeProvider>
    </TonConnectUIProvider>
  )
}

export default App
