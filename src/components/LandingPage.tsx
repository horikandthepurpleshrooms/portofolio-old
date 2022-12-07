import * as React from "react"
import {
  Box, Text,
} from "@chakra-ui/react"
import AboutCard from "./AboutCard"
import ShroomsHeader from "./ShroomsHeader"
import Bedge from "./Bedge"

const LandingPage = () => {
  return (
    <Box textAlign="center" fontSize="xl" m={10} pb={100}>
      <ShroomsHeader />
      <Text display={"flex"} justifyContent={"center"} fontSize={"3.5rem"}>{`U+fe 0fWIPWIPWIPWIPWIPWIPWIPWIP U+fe0f`}</Text>
      <Bedge />
      <AboutCard />
    </Box>
  )
}

export default LandingPage
