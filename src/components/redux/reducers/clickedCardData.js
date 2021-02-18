import { CLICKEDCARDDATA } from "../actions"

const defaultState = {
  data: {}
}

const clickedCardData = (state = defaultState, action) => {
  switch (action.type) {
    case CLICKEDCARDDATA:
      return {
        ...state,
        data: action.requestData
      }

    default:
      return state
  }
}

export default clickedCardData