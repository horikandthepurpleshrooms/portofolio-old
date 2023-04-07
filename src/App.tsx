import {
  ChakraProvider,
  theme
} from "@chakra-ui/react"
import LandingPage from "./components/LandingPage"

export const App = () => {
  return <ChakraProvider theme={theme}>
    <LandingPage />
  </ChakraProvider>
}
