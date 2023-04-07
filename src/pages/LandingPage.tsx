import {
  Box, Image, Text
} from "@chakra-ui/react"
import { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import { getImage } from '../firebase/firebase'
import useWindowDimensions from '../hooks/useWindowDimensions'


const LandingPage = () => {
  const { width, height } = useWindowDimensions()
  const [img, setImg] = useState<string | undefined>(undefined)

  useEffect(() => {
    getImage(url => setImg(url))
  }, [])

  return (
    <Box
      flexDirection="column"
      display="flex"
      flex={1}
      justifyContent="center"
      alignItems="center">
      <Heading />
      <Image
        height={height / 3}
        width={width}
        objectFit='cover'
        src={img}
        alt='Plants 💚' />
      <Text fontSize={46}>collection of feelings</Text>
    </Box>
  )
}

export default LandingPage
