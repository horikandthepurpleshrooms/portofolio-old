import {
  ChakraProvider,
  theme
} from "@chakra-ui/react"
import LandingPage from "./pages/LandingPage"
import WipPage from './pages/WipPage'

export const App = () => {
  const isWip = true
  return <ChakraProvider theme={theme}>
    {isWip ? <WipPage /> : <LandingPage />}
  </ChakraProvider>
}
