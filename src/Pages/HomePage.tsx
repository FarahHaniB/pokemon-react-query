import React from 'react'
import HomeHeader from './HomeHeader'
import { Box, Divider } from '@chakra-ui/react'
import HomeBody from './HomeBody'

const HomePage = () => {
  return (
    <Box height='100%'>
      <HomeHeader/>
      <HomeBody/>
    </Box>
  )
}

export default HomePage
