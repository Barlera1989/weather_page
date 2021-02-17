import React, { useState } from 'react'
import axios from 'axios'

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
  const [showAllCards, setShowAllCards] = useState(false)
  const [showCards, setShowCards] = useState(false)
  const [showError, setShowError] = useState(false)
  const [input, setInput] = useState('')
  const [submitted, setSubmitted] = useState('')
  const [clickedCard, SetClickedCard] = useState({})
  const [AllCards, SetAllCards] = useState([])


  const get_main_card_data = () => {
    axios.get(`http://127.0.0.1:5000/weather/${input}`)
      .then(resp => {

        /* get data to main card */
        SetClickedCard(resp.data)

        /* set message error to false, in case 
        a message error was shown before */
        setShowError(false)

        /* set main card to true */
        setShowCards(true)
      })
      .catch((error) => {

        /* set main card to false */
        setShowCards(false)

        /* show error message */
        setShowError(true)
      })
  }

  const get_all_card_data = () => {
    axios.get(`http://127.0.0.1:5000/weather?max=5`)
      .then(resp => {

        /* get data to all cards */
        SetAllCards(resp.data)

        /* set all cards to true */
        setShowAllCards(true)
      })
      .catch((error) => {

        setShowCards(false)
      })
  }


  const clickOutsideInput = () => {

    /* check if the input was already submitted.
        this avoids a double action when
        after enter key event and click outside 
        the input event */
    if (submitted !== input) {

      get_main_card_data()
      /* delay a bit the second request */
      setTimeout(get_all_card_data, 2000)
    }
  }

  const EnterKeyAfterFillForms = (e) => {
    setSubmitted(input)
    if (e.key === 'Enter') {
      clickOutsideInput();
    }
  }


  return (
    <MainContainer>
      <Title>{pageTexts.title}</Title>
      <CenterContainer>

        <LocationQuestion>
          {pageTexts.textBeforeInput}
          <span>
            <CityEntry
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={EnterKeyAfterFillForms}
              onBlur={clickOutsideInput}></CityEntry>
          </span>
          {pageTexts.textAfterInput}
        </LocationQuestion>

        {showError && <LocationError>{pageTexts.errorMessage}</LocationError>}

        {showCards && <LocationSuccess>
          <WeatherCard
            cityName={clickedCard.City_name}
            temperature={`${clickedCard.City_temp}°C`}
            weather={clickedCard.City_condition} />
        </LocationSuccess>}

        {showAllCards && <AllLocationsContainer>
          {AllCards.map((AllCards, i) => (
            <div key={i}>
              <WeatherCard
                cityName={AllCards.City_name}
                temperature={`${AllCards.City_temp}°C`}
                weather={AllCards.City_condition} />
            </div>

          ))}

        </AllLocationsContainer>}
      </CenterContainer>
    </MainContainer>

  )
}

export default MainPage




