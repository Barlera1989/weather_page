import { SHOWALLCARDSTRUE, SHOWALLCARDSFALSE } from "../actions"

const defaultState = {
  showAllCardsState: false
}

const showAllCards = (state = defaultState, action) => {
  switch (action.type) {
    case SHOWALLCARDSTRUE:
      return {
        ...state,
        showAllCardsState: true
      }
    case SHOWALLCARDSFALSE:
      return {
        ...state,
        showAllCardsState: false
      }
    default:
      return state
  }
}

export default showAllCards