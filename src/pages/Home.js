import React from 'react'
import WeatherCarousel from '../components/WeatherCarousel'
import WeatherList from '../components/WeatherList'
import { Container } from 'react-bootstrap'


function Home() {
  return (
    <Container>
    <WeatherCarousel />
    <WeatherList/>
    </Container>
  )
}

export default Home