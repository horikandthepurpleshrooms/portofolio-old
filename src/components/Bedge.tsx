import React from 'react'
import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react"
import SkillPill from "./Microbes/SkillPill"

const Bedge = () => {
  return (
    <Box display={"flex"} flex={1} flexDirection={"column"} my={5} borderWidth={2} borderColor={"white"} boxShadow={"xl"}>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"start"} alignItems={"center"} height={200} borderTopRadius={18} px={8}>
        <Image
          borderRadius='full'
          boxSize='150px'
          src='https://i.pinimg.com/564x/46/73/40/467340860bb9220a7cc66cc16c1cc5f0.jpg'
          alt='Dan Abramov'
        />
        <Text>
          01101000 01101111 01110010 01101001 01101011
        </Text>
      </Box>
      {/* 
    <Box display={"flex"} flexDirection={"column"} height={200} backgroundColor={"teal"}>

    </Box> */}

      <Box flexWrap={"wrap"} display={"flex"} flexDirection={"row"} height={100} borderBottomRadius={18} justifyContent={"start"} alignItems={"center"} px={8}>
        <SkillPill title={"TypeScript"} bgColor={"#E87461"} />
        <SkillPill title={"JavaScript"} bgColor={"#E0C879"} />
        <SkillPill title={"React"} bgColor={"#A1CF6B"} />
        <SkillPill title={"React Native"} bgColor={"#6D98BA"} />
      </Box>

    </Box>
    // <Box display={"flex"} flexDirection={"column"} maxWidth={200} minHeight={100} p={2} borderRadius={20} borderWidth={2} borderColor={useColorModeValue("black", "white")}>
    //   <Text>
    //     01101000 01101111 01110010 01101001 01101011
    //   </Text>
    // </Box>
  )
}

export default Bedge