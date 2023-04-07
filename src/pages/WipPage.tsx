import { Box, Text } from '@chakra-ui/react'
import { useState } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'

export default function WipPage() {
  const { height } = useWindowDimensions()
  const [text, setText] = useState<string>("thanks for dreaming")

  const changeText = () => {
    if (text == "thanks for dreaming") setText("page under construction")
    else setText("thanks for dreaming")
  }
  return (
    <Box
      display={"flex"}
      flex={1}
      height={height}
      justifyContent={"center"}
      alignItems={"center"}>
      <Text textAlign={"center"} fontSize={38} fontWeight={300} flexWrap={"wrap"} onClick={changeText}>{text}</Text>
    </Box>
  )
}
