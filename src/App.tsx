import {
  ChakraProvider,
  theme
} from "@chakra-ui/react"
import LandingPage from "./pages/LandingPage"
import WipPage from './pages/WipPage'

export const App = () => {
  const isProd = process.env.NODE_ENV === "production"
  return <ChakraProvider theme={theme}>
    {isProd ? <WipPage /> : <LandingPage />}
  </ChakraProvider>
}
