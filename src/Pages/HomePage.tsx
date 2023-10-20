import React from 'react'
import HomeHeader from './HomeHeader'
import { Box, Divider } from '@chakra-ui/react'
import HomeBody from './HomeBody'
import HomeFooter from './HomeFooter'

const HomePage = () => {
  return (
    <Box>
      <HomeHeader/>
      <HomeBody/>
      <HomeFooter/>
    </Box>
  )
}

export default HomePage
