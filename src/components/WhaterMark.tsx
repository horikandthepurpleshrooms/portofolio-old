import React from 'react'
import { Box, Text, useColorModeValue } from "@chakra-ui/react"

function WhaterMark() {
  return (
    <Box mt={4} display={"flex"} flexDirection={"row"} height={24} maxWidth={280} borderStyle={"dashed"} borderWidth={2} borderColor={useColorModeValue("black", "white")} borderRadius={20}>
      <Box flex={1} display={"flex"} alignItems={"flex-end"} flexDir={"column"} justifyContent={"center"} px={2}>
        <Text fontSize={14} textAlign={"end"}>All the works</Text>
        <Text fontSize={14} textAlign={"end"}>design by</Text>
      </Box>
      <Box flex={1} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDir={"row"} px={2}>
        <Text fontWeight={"700"} fontSize={"4xl"}>HORIK</Text>
      </Box>
    </Box>
  )
}

export default WhaterMark