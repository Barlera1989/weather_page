import React from 'react'

import {
  CardContainer,
  CardTexts,
} from './styles/card'


const WeatherCard = (props) => {

  return (
    <CardContainer animate={{ scale: [0, 1] }} transition={{ duration: 1, delay: props.delay }}>
      <CardTexts font_size={16}>{props.cityName}</CardTexts>
      <CardTexts font_size={22}>{props.temperature}</CardTexts>
      <CardTexts font_size={16}>{props.weather}</CardTexts>
    </CardContainer>

  )
}

export default WeatherCard




