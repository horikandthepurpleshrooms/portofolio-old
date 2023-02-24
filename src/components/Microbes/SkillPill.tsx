import React from 'react'
import { Box, Text } from "@chakra-ui/react"

type SkillPillProps = {
  title: string
  bgColor: string
}

const SkillPill: React.FC<SkillPillProps> = ({ title, bgColor }) => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} backgroundColor={bgColor} px={2} m={1}>
      <Text color={"black"}>{title}</Text>
    </Box>
  )
}

export default SkillPill