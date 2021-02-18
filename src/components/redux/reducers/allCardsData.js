import { ALLCARDSDATA } from "../actions"

const defaultState = []


const allCardsData = (state = defaultState, action) => {
  switch (action.type) {
    case ALLCARDSDATA:
      const { requestData } = action
      return [...requestData];
    default:
      return state;
  }
}

export default allCardsData