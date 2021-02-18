import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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

import {
  SetShowLoadTrue,
  SetShowLoadFalse,
  setSubmittedData,
  setInputData,
  requestMainCardData,
  requestAllCardData
} from '../redux/actions'


import WeatherCard from './weather_card'
import pageTexts from './constants'


const MainPage = () => {
  const dispatch = useDispatch()
  const showAllCardsState = useSelector((state) => state.showAllCards.showAllCardsState)
  const showCardsState = useSelector((state) => state.showCard.showCardState)
  const showErrorState = useSelector((state) => state.showError.showErrorState)
  const showLoadState = useSelector((state) => state.showLoading.showLoadingState)
  const clickedCardState = useSelector((state) => state.clickedCardData.data)
  const allCardsState = useSelector((state) => state.allCardsData)
  const inputState = useSelector((state) => state.inputData.inputDataState)
  const submittedState = useSelector((state) => state.submittedData.submittedDataState)


  useEffect(() => {
    if (inputState !== '') {
      dispatch(requestAllCardData())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedCardState])


  const hideLoading = () => {
    dispatch(SetShowLoadFalse())
  }


  const clickOutsideInput = () => {

    /* check if the input was already submitted.
        this avoids a double action when
        after enter key event and click outside 
        the input event */


    if (submittedState !== inputState) {


      dispatch(SetShowLoadTrue())

      dispatch(requestMainCardData(inputState))

      dispatch(requestAllCardData())

      setTimeout(hideLoading, 1000)


    }
  }


  const EnterKeyAfterFillForms = () => {

    dispatch(setSubmittedData(inputState))

    clickOutsideInput()
  }



  return (
    <MainContainer>
      <Title>{pageTexts.title}</Title>
      <CenterContainer>

        <LocationQuestion>
          {pageTexts.textBeforeInput}
          <span>
            <CityEntry
              onChange={(e) => dispatch(setInputData(e.target.value))}
              onKeyDown={(e) => { if (e.key === 'Enter') EnterKeyAfterFillForms() }}
              onBlur={clickOutsideInput}></CityEntry>
          </span>
          {pageTexts.textAfterInput}
          {showLoadState && <span style={{ color: 'red' }}> . . . Loading</span>}
        </LocationQuestion>

        {showErrorState && <LocationError>{pageTexts.errorMessage}</LocationError>}

        {showCardsState && <LocationSuccess>
          <WeatherCard
            cityName={clickedCardState.city_name}
            temperature={`${clickedCardState.city_temperature}°C`}
            weather={clickedCardState.city_condition} />
        </LocationSuccess>}

        {showAllCardsState && <AllLocationsContainer>
          {allCardsState.map((allCardsState, i) => (
            <div key={i}>
              <WeatherCard
                cityName={allCardsState.city_name}
                temperature={`${allCardsState.city_temperature}°C`}
                weather={allCardsState.city_condition} />
            </div>

          ))}

        </AllLocationsContainer>}
      </CenterContainer>
    </MainContainer >

  )
}

export default MainPage




