import * as React from "react"
import {
  Box, Text,
} from "@chakra-ui/react"
import AboutCard from "./AboutCard"
import ShroomsHeader from "./ShroomsHeader"

const LandingPage = () => {
  return (
    <Box textAlign="center" fontSize="xl" m={10} pb={100}>
      <ShroomsHeader />
      <Text display={"flex"} justifyContent={"center"} fontSize={"3.5rem"}>⚠️WIPWIPWIPWIPWIPWIPWIPWIP⚠️</Text>
      <AboutCard />
    </Box>
  )
}

export default LandingPage
