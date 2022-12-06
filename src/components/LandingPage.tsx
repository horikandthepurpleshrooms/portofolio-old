import * as React from "react"
import {
  Box,
  Text,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import AboutCard from "./AboutCard"

export default function LandingPage() {
  return (
    <Box textAlign="center" fontSize="xl" m={10} pb={100}>
      <Box maxH="100vh" p={3} display={"flex"} backgroundColor={"coral"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Text fontSize={20} fontWeight={"bold"} color={"teal.800"}>PURPLE SHROOMS 🍄</Text>
        <ColorModeSwitcher />
      </Box>
      <AboutCard />
    </Box>
  )
}
