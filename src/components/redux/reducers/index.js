import { combineReducers } from "redux";
import allCardsData from './allCardsData'
import clickedCardData from './clickedCardData'
import inputData from './inputData'
import showAllCards from './showAllCards'
import showCard from './showCard'
import showError from './showError'
import showLoading from './showLoading'
import submittedData from './submittedData'



export default combineReducers({
  allCardsData,
  clickedCardData,
  inputData,
  showAllCards,
  showCard,
  showError,
  showLoading,
  submittedData
});
