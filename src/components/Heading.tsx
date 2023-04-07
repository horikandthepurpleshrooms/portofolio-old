import { Box, Text } from '@chakra-ui/react'
import { GiOvermind } from "react-icons/gi"
import useWindowDimensions from '../hooks/useWindowDimensions'

export default function Heading() {
  const { width } = useWindowDimensions()

  return (
    <Box
      display="flex"
      width={width}
      height="4rem"
      alignItems="center"
      px="1rem"
      backgroundColor="#1B3217">
      <Text color="#E3C672" fontSize={22} fontWeight={700}>horik</Text>
      <Box ml={1}>
        <GiOvermind size={20} color="#E3C672" />
      </Box>
    </Box>
  )
}
