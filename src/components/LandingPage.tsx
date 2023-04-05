import {
  Box, Heading
} from "@chakra-ui/react"
import useWindowDimensions from "../hooks/useWindowDimensions"


const LandingPage = () => {
  const { height } = useWindowDimensions()

  return (
    <Box height={(height / 1.2)} borderColor={"#252525"} borderWidth={1} m={10} display={"flex"} flex={1} justifyContent={"center"} alignItems={"center"} backgroundColor={"teal.100"}>
      <Heading fontFamily={"Poppins, sans-serif;"} fontWeight={"thin"} color={"#235"} display={"flex"} justifyContent={"center"} fontSize={100} >{`HORIK`}</Heading>
    </Box>
  )
}

export default LandingPage
