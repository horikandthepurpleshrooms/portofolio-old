import { Box, Text, useColorModeValue } from "@chakra-ui/react"
import React from 'react'

const Bedge = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} maxWidth={200} minHeight={100} p={2} borderRadius={20} borderWidth={2} borderColor={useColorModeValue("black", "white")}>
      <Text>
        01101000 01101111 01110010 01101001 01101011
      </Text>
    </Box>
  )
}

export default Bedge