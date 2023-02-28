import * as React from "react"
import {
  Box, Text,
} from "@chakra-ui/react"
import useWindowDimensions from "../hooks/useWindowDimensions"


const LandingPage = () => {
  const { height } = useWindowDimensions()

  return (
    <Box height={(height / 1.2)} borderColor={"#252525"} borderWidth={1} m={10} display={"flex"} flex={1} justifyContent={"center"} alignItems={"center"} backgroundColor={"coral"}>
      <Text color={"#235"} display={"flex"} justifyContent={"center"} fontSize={"2rem"}>{`HORIK`}</Text>
    </Box>
  )
}

export default LandingPage
