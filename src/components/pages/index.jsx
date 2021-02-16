import React, { useState } from 'react'

import {
  MainContainer,
  Title,
  CenterContainer,
  LocationQuestion,
  LocationError,
  LocationSuccess,
  AllLocationsContainer,
  CityEntry,
} from './styles/page'

import WeatherCard from './weather_card'
import pageTexts from './constants'


const MainPage = () => {
  const [showAllCards, setShowAllCards] = useState(true)
  const [showCards, setShowCards] = useState(false)
  const [showError, setShowError] = useState(true)

  const cityEntryEvent = () => {

    console.log('deu certo')

  }

  const EnterEvent = (e) => {

    if (e.key === 'Enter') {
      console.log('do validate');
    }
  }

  const list = [0, 1, 2, 3, 4]

  return (
    <MainContainer>
      <Title>{pageTexts.title}</Title>
      <CenterContainer>
        <LocationQuestion>{pageTexts.textBeforeInput}<span><CityEntry onKeyDown={EnterEvent} onBlur={() => { cityEntryEvent() }}></CityEntry></span>{pageTexts.textAfterInput}</LocationQuestion>
        {showError && <LocationError>{pageTexts.errorMessage}</LocationError>}
        {showCards && <LocationSuccess>
          <WeatherCard cityName='Londrina' temperature='22ºC' weather='calor' />
        </LocationSuccess>}
        {showAllCards && <AllLocationsContainer>
          {list.map((list, i) => (
            <div key={i}>
              <WeatherCard cityName='Londrina' temperature='22ºC' weather='calor' />
            </div>

          ))}

        </AllLocationsContainer>}
      </CenterContainer>

    </MainContainer>

  )
}

export default MainPage




