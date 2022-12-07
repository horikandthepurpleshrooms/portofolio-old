import React from 'react'
import { Box, Text, useColorModeValue } from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

const ShroomsHeader = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} p={2} borderWidth={2} borderColor={useColorModeValue("black", "white")}>
      <Text letterSpacing={20} fontSize={22}>COLLECTION OF (JUNKIE) DIGITAL CREATIONS</Text>
      <ColorModeSwitcher />
    </Box>
  )
}

export default ShroomsHeader