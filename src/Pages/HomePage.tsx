import React from 'react'
import HomeHeader from './HomeHeader'
import { Box, Divider } from '@chakra-ui/react'
import HomeBody from './HomeBody'

const HomePage = () => {
  return (
    <Box p={7}>
      <HomeHeader/>
      <Divider marginTop={5}/>
      <HomeBody/>
    </Box>
  )
}

export default HomePage
