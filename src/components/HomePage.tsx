import React from 'react'
import HomeHeader from './HomeHeader'
import { Box } from '@chakra-ui/react'
import HomeBody from './HomeBody'
import HomeFooter from './HomeFooter'

const HomePage = () => {
  return (
    <Box w="full" h="full">
      <HomeHeader/>
      <HomeBody/>
      <HomeFooter/>
    </Box>
  )
}

export default HomePage
